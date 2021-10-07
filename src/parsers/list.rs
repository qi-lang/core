/*
 * Copyright Qi Lang. 2021 All Rights R body: todo!() eserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::parsers;
use crate::symbols::raw;

#[derive(Debug, PartialEq)]
pub struct List {
    pub body: Vec<IterableBody>,
}

#[derive(Debug, PartialEq)]
pub enum IterableBody {
    Atom(parsers::atom::Atom),
    Bool(parsers::bool::Bool),
    Number(parsers::number::Number),
    String(parsers::string::String),
    List(parsers::list::List),
    Tuple(parsers::tuple::Tuple),
    Ident(parsers::ident::Ident),
    // TODO
    Map(parsers::map::Map),
    // Lambda(parsers::map::Map),
}

pub fn get_atom(input: &str) -> nom::IResult<&str, IterableBody> {
    let (input, result) = parsers::atom::parse(input)?;
    Ok((input, IterableBody::Atom(result)))
}

pub fn get_bool(input: &str) -> nom::IResult<&str, IterableBody> {
    let (input, result) = parsers::bool::parse(input)?;
    Ok((input, IterableBody::Bool(result)))
}

pub fn get_string(input: &str) -> nom::IResult<&str, IterableBody> {
    let (input, result) = parsers::string::parse(input)?;
    Ok((input, IterableBody::String(result)))
}

pub fn get_number(input: &str) -> nom::IResult<&str, IterableBody> {
    let (input, result) = parsers::number::parse(input)?;
    Ok((input, IterableBody::Number(result)))
}

pub fn get_list(input: &str) -> nom::IResult<&str, IterableBody> {
    let (input, result) = parsers::list::parse(input)?;
    Ok((input, IterableBody::List(result)))
}

pub fn get_tuple(input: &str) -> nom::IResult<&str, IterableBody> {
    let (input, result) = parsers::tuple::parse(input)?;
    Ok((input, IterableBody::Tuple(result)))
}

pub fn get_ident(input: &str) -> nom::IResult<&str, IterableBody> {
    let (input, result) = parsers::ident::parse(input)?;
    Ok((input, IterableBody::Ident(result)))
}

pub fn get_map(input: &str) -> nom::IResult<&str, IterableBody> {
    let (input, result) = parsers::map::parse(input)?;
    Ok((input, IterableBody::Map(result)))
}

pub fn get_body(input: &str) -> nom::IResult<&str, IterableBody> {
    let (input, result) = nom::branch::alt((
        get_bool, get_atom, get_number, get_string, get_list, get_tuple, get_ident, get_map,
    ))(input)?;
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
    use crate::parsers::ident;
    use crate::parsers::list;
    use crate::parsers::map;
    use crate::parsers::number;
    use crate::parsers::string;
    use crate::parsers::tuple;

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

        let expected = list::IterableBody::Atom(atom::Atom {
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

        let expected = list::IterableBody::Number(number::Number { body: 3.14 as f64 });

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

        let expected = list::IterableBody::String(string::String {
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

        let expected = list::IterableBody::Bool(bool::Bool { body: true });

        assert_eq!(expected, result)
    }

    #[test]
    fn test_get_list() {
        let result = list::parse("[[[]]]");

        let result = match result {
            Ok((_, product)) => product,
            Err(e) => match e {
                nom::Err::Incomplete(i) => panic!("{:?}", i),
                nom::Err::Error(i) => panic!("{}", i),
                nom::Err::Failure(i) => panic!("{}", i),
            },
        };

        let expected = list::List {
            body: vec![list::IterableBody::List(list::List {
                body: vec![list::IterableBody::List(list::List { body: vec![] })],
            })],
        };

        assert_eq!(expected, result)
    }

    #[test]
    fn test_get_tuple() {
        let result = list::parse("[{{}}]");

        let result = match result {
            Ok((_, product)) => product,
            Err(e) => match e {
                nom::Err::Incomplete(i) => panic!("{:?}", i),
                nom::Err::Error(i) => panic!("{}", i),
                nom::Err::Failure(i) => panic!("{}", i),
            },
        };

        let expected = list::List {
            body: vec![list::IterableBody::Tuple(tuple::Tuple {
                body: vec![list::IterableBody::Tuple(tuple::Tuple { body: vec![] })],
            })],
        };

        assert_eq!(expected, result)
    }
    #[test]
    fn test_get_map() {
        let result = list::parse("[%{}]");

        let result = match result {
            Ok((_, product)) => product,
            Err(e) => match e {
                nom::Err::Incomplete(i) => panic!("{:?}", i),
                nom::Err::Error(i) => panic!("{}", i),
                nom::Err::Failure(i) => panic!("{}", i),
            },
        };

        let expected = list::List {
            body: vec![list::IterableBody::Map(map::Map { body: vec![] })],
        };

        assert_eq!(expected, result)
    }

    #[test]
    fn test_get_ident() {
        let result = list::get_ident("hello");

        let result = match result {
            Ok((_, product)) => product,
            Err(e) => match e {
                nom::Err::Incomplete(i) => panic!("{:?}", i),
                nom::Err::Error(i) => panic!("{}", i),
                nom::Err::Failure(i) => panic!("{}", i),
            },
        };

        let expected = list::IterableBody::Ident(ident::Ident {
            body: "hello".to_string(),
        });

        assert_eq!(expected, result)
    }

    #[test]
    fn test_get_body() {
        let result = list::get_body(":atom");

        let result = match result {
            Ok((_, product)) => product,
            Err(e) => match e {
                nom::Err::Incomplete(i) => panic!("{:?}", i),
                nom::Err::Error(i) => panic!("{}", i),
                nom::Err::Failure(i) => panic!("{}", i),
            },
        };

        let expected = list::IterableBody::Atom(atom::Atom {
            body: "atom".to_string(),
        });

        assert_eq!(expected, result)
    }

    #[test]
    fn test_delimited() {
        let result = list::parse("[:ok, true, 3.1415, \"\", hello]");

        let result = match result {
            Ok((_, product)) => product,
            Err(e) => match e {
                nom::Err::Incomplete(i) => panic!("{:?}", i),
                nom::Err::Error(i) => panic!("{}", i),
                nom::Err::Failure(i) => panic!("{}", i),
            },
        };

        let expected = list::List {
            body: vec![
                list::IterableBody::Atom(atom::Atom {
                    body: "ok".to_string(),
                }),
                list::IterableBody::Bool(bool::Bool { body: true }),
                list::IterableBody::Number(number::Number {
                    body: 3.1415 as f64,
                }),
                list::IterableBody::String(string::String {
                    body: "".to_string(),
                }),
                list::IterableBody::Ident(ident::Ident {
                    body: "hello".to_string(),
                }),
            ],
        };

        assert_eq!(expected, result)
    }
}
