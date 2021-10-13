/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::parsers;
use crate::symbols::raw;

#[derive(Debug, PartialEq)]
pub struct Assign {
    pub ident: parsers::ident::Ident,
    pub body: AssignBody,
}

#[derive(Debug, PartialEq)]
pub enum AssignBody {
    Atom(parsers::atom::Atom),
    Bool(parsers::bool::Bool),
    Number(parsers::number::Number),
    String(parsers::string::String),
    List(parsers::list::List),
    Tuple(parsers::tuple::Tuple),
    Ident(parsers::ident::Ident),
    Map(parsers::map::Map),
    Lambda(parsers::map::Map),
}

pub fn get_atom(input: &str) -> nom::IResult<&str, AssignBody> {
    let (input, result) = parsers::atom::parse(input)?;
    Ok((input, AssignBody::Atom(result)))
}

pub fn get_bool(input: &str) -> nom::IResult<&str, AssignBody> {
    let (input, result) = parsers::bool::parse(input)?;
    Ok((input, AssignBody::Bool(result)))
}

pub fn get_string(input: &str) -> nom::IResult<&str, AssignBody> {
    let (input, result) = parsers::string::parse(input)?;
    Ok((input, AssignBody::String(result)))
}

pub fn get_number(input: &str) -> nom::IResult<&str, AssignBody> {
    let (input, result) = parsers::number::parse(input)?;
    Ok((input, AssignBody::Number(result)))
}

pub fn get_list(input: &str) -> nom::IResult<&str, AssignBody> {
    let (input, result) = parsers::list::parse(input)?;
    Ok((input, AssignBody::List(result)))
}

pub fn get_tuple(input: &str) -> nom::IResult<&str, AssignBody> {
    let (input, result) = parsers::tuple::parse(input)?;
    Ok((input, AssignBody::Tuple(result)))
}

pub fn get_ident(input: &str) -> nom::IResult<&str, AssignBody> {
    let (input, result) = parsers::ident::parse(input)?;
    Ok((input, AssignBody::Ident(result)))
}

pub fn get_map(input: &str) -> nom::IResult<&str, AssignBody> {
    let (input, result) = parsers::map::parse(input)?;
    Ok((input, AssignBody::Map(result)))
}

pub fn get_lambda(input: &str) -> nom::IResult<&str, AssignBody> {
    let (input, result) = parsers::map::parse(input)?;
    Ok((input, AssignBody::Map(result)))
}

pub fn get_body(input: &str) -> nom::IResult<&str, AssignBody> {
    let (input, result) = nom::branch::alt((
        get_bool, get_atom, get_number, get_string, get_list, get_tuple, get_ident, get_map,
        get_lambda,
    ))(input)?;
    Ok((input, result))
}

// a = {1, 2, 3}

pub fn parse(input: &str) -> nom::IResult<&str, Assign> {
    let (input, result) = nom::sequence::tuple((
        parsers::ident::parse,
        nom::sequence::preceded(
            nom::sequence::delimited(
                nom::character::complete::multispace0,
                nom::bytes::complete::tag(raw::EQUAL),
                nom::character::complete::multispace0,
            ),
            get_body,
        ),
    ))(input)?;

    Ok((
        input,
        Assign {
            ident: result.0,
            body: result.1,
        },
    ))
}

#[cfg(test)]
mod tests {

    use crate::parsers;

    #[test]
    fn test_can_assign() {
        let input = "a=true";
        let result = parsers::assign::parse(input);

        assert_eq!(
            result,
            Ok((
                "",
                parsers::assign::Assign {
                    ident: parsers::ident::Ident {
                        body: "a".to_string()
                    },
                    body: parsers::assign::AssignBody::Bool(parsers::bool::Bool { body: true })
                }
            ))
        )
    }

    #[test]
    fn test_can_assign_with_whitespace() {
        let input = "a = true";
        let result = parsers::assign::parse(input);

        assert_eq!(
            result,
            Ok((
                "",
                parsers::assign::Assign {
                    ident: parsers::ident::Ident {
                        body: "a".to_string()
                    },
                    body: parsers::assign::AssignBody::Bool(parsers::bool::Bool { body: true })
                }
            ))
        )
    }
}
