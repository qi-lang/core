/*
 * Copyright Qi Lang. 2021 All Rights R body: todo!() eserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::parsers;
use crate::symbols::raw;

#[derive(Debug, PartialEq)]
pub struct List {
    pub body: Vec<ListBody>,
}

#[derive(Debug, PartialEq)]
pub enum ListBody {
    Atom(parsers::atom::Atom),
    Bool(parsers::bool::Bool),
    Number(parsers::number::Number),
    String(parsers::string::String),
}

pub fn get_atom(input: &str) -> nom::IResult<&str, ListBody> {
    let (input, result) = parsers::atom::parse(input)?;
    Ok((input, ListBody::Atom(result)))
}

pub fn get_bool(input: &str) -> nom::IResult<&str, ListBody> {
    let (input, result) = parsers::bool::parse(input)?;
    Ok((input, ListBody::Bool(result)))
}

pub fn get_string(input: &str) -> nom::IResult<&str, ListBody> {
    let (input, result) = parsers::string::parse(input)?;
    Ok((input, ListBody::String(result)))
}

pub fn get_number(input: &str) -> nom::IResult<&str, ListBody> {
    let (input, result) = parsers::number::parse(input)?;
    Ok((input, ListBody::Number(result)))
}

pub fn get_body(input: &str) -> nom::IResult<&str, ListBody> {
    let (input, result) = nom::branch::alt((get_bool, get_atom, get_number, get_string))(input)?;
    Ok((input, result))
}

pub fn parse(input: &str) -> nom::IResult<&str, List> {
    let (input, result) = nom::sequence::delimited(
        nom::bytes::complete::tag(raw::bracket::LEFT),
        nom::multi::separated_list0(
            nom::sequence::delimited(
                nom::character::complete::multispace0,
                nom::bytes::complete::tag(raw::COMMA),
                nom::character::complete::multispace0,
            ),
            nom::sequence::delimited(
                nom::character::complete::multispace0,
                get_body,
                nom::character::complete::multispace0,
            ),
        ),
        nom::bytes::complete::tag(raw::bracket::RIGHT),
    )(input)?;

    Ok((input, List { body: result }))
}

#[cfg(test)]
mod tests {
    use crate::parsers::atom;
    use crate::parsers::bool;
    use crate::parsers::list;
    use crate::parsers::number;
    use crate::parsers::string;

    #[test]
    fn test_get_atom() {
        let result = list::get_atom(":ok");
        let result = match result {
            Ok((_, product)) => product,
            Err(e) => match e {
                nom::Err::Incomplete(i) => panic!("{:?}", i),
                nom::Err::Error(i) => panic!("{}", i),
                nom::Err::Failure(i) => panic!("{}", i),
            },
        };

        let expected = list::ListBody::Atom(atom::Atom {
            body: "ok".to_string(),
        });

        assert_eq!(expected, result)
    }

    #[test]
    fn test_get_number() {
        let result = list::get_number("3.14");
        let result = match result {
            Ok((_, product)) => product,
            Err(e) => match e {
                nom::Err::Incomplete(i) => panic!("{:?}", i),
                nom::Err::Error(i) => panic!("{}", i),
                nom::Err::Failure(i) => panic!("{}", i),
            },
        };

        let expected = list::ListBody::Number(number::Number { body: 3.14 as f64 });

        assert_eq!(expected, result)
    }

    #[test]
    fn test_get_string() {
        let result = list::get_string("\"Hello World\"");
        let result = match result {
            Ok((_, product)) => product,
            Err(e) => match e {
                nom::Err::Incomplete(i) => panic!("{:?}", i),
                nom::Err::Error(i) => panic!("{}", i),
                nom::Err::Failure(i) => panic!("{}", i),
            },
        };

        let expected = list::ListBody::String(string::String {
            body: "Hello World".to_string(),
        });

        assert_eq!(expected, result)
    }

    #[test]
    fn test_get_bool() {
        let result = list::get_bool("true");
        let result = match result {
            Ok((_, product)) => product,
            Err(e) => match e {
                nom::Err::Incomplete(i) => panic!("{:?}", i),
                nom::Err::Error(i) => panic!("{}", i),
                nom::Err::Failure(i) => panic!("{}", i),
            },
        };

        let expected = list::ListBody::Bool(bool::Bool { body: true });

        assert_eq!(expected, result)
    }

    #[test]
    fn test_get_body() {
        let result = list::parse("true");
        let result = match result {
            Ok((_, product)) => product,
            Err(e) => match e {
                nom::Err::Incomplete(i) => panic!("{:?}", i),
                nom::Err::Error(i) => panic!("{}", i),
                nom::Err::Failure(i) => panic!("{}", i),
            },
        };

        let expected = list::List {
            body: vec![list::ListBody::Atom(atom::Atom {
                body: "ok".to_string(),
            })],
        };

        assert_eq!(expected, result)
    }
}
