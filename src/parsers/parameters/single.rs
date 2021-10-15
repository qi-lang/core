/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::parsers;
use crate::symbols::raw;

#[derive(Debug, PartialEq)]
pub struct Parameter {
    pub ident: parsers::ident::Ident,
    pub body: Option<ParameterBody>,
}

#[derive(Debug, PartialEq)]
pub enum ParameterBody {
    Atom(parsers::atom::Atom),
    Bool(parsers::bool::Bool),
    Number(parsers::number::Number),
    String(parsers::string::String),
    List(parsers::list::List),
    Tuple(parsers::tuple::Tuple),
    Map(parsers::map::Map),
    Ident(parsers::ident::Ident),
    Lambda(parsers::lambda::Lambda),
}

pub fn get_atom(input: &str) -> nom::IResult<&str, ParameterBody> {
    let (input, result) = parsers::atom::parse(input)?;
    Ok((input, ParameterBody::Atom(result)))
}

pub fn get_bool(input: &str) -> nom::IResult<&str, ParameterBody> {
    let (input, result) = parsers::bool::parse(input)?;
    Ok((input, ParameterBody::Bool(result)))
}

pub fn get_string(input: &str) -> nom::IResult<&str, ParameterBody> {
    let (input, result) = parsers::string::parse(input)?;
    Ok((input, ParameterBody::String(result)))
}

pub fn get_number(input: &str) -> nom::IResult<&str, ParameterBody> {
    let (input, result) = parsers::number::parse(input)?;
    Ok((input, ParameterBody::Number(result)))
}

pub fn get_list(input: &str) -> nom::IResult<&str, ParameterBody> {
    let (input, result) = parsers::list::parse(input)?;
    Ok((input, ParameterBody::List(result)))
}

pub fn get_tuple(input: &str) -> nom::IResult<&str, ParameterBody> {
    let (input, result) = parsers::tuple::parse(input)?;
    Ok((input, ParameterBody::Tuple(result)))
}

pub fn get_ident(input: &str) -> nom::IResult<&str, ParameterBody> {
    let (input, result) = parsers::ident::parse(input)?;
    Ok((input, ParameterBody::Ident(result)))
}

pub fn get_map(input: &str) -> nom::IResult<&str, ParameterBody> {
    let (input, result) = parsers::map::parse(input)?;
    Ok((input, ParameterBody::Map(result)))
}

pub fn get_lambda(input: &str) -> nom::IResult<&str, ParameterBody> {
    let (input, result) = parsers::map::parse(input)?;
    Ok((input, ParameterBody::Map(result)))
}

pub fn get_body(input: &str) -> nom::IResult<&str, ParameterBody> {
    let (input, result) = nom::branch::alt((
        get_bool, get_atom, get_number, get_string, get_list, get_tuple, get_ident, get_map,
        get_lambda,
    ))(input)?;
    Ok((input, result))
}

pub fn parse_no_default(input: &str) -> nom::IResult<&str, Parameter> {
    let (input, result) = parsers::ident::parse(input)?;

    Ok((
        input,
        Parameter {
            ident: result,
            body: None,
        },
    ))
}

pub fn parse(input: &str) -> nom::IResult<&str, Parameter> {
    let (input, result) = nom::sequence::tuple((
        parsers::ident::parse,
        nom::combinator::opt(nom::sequence::preceded(
            nom::sequence::delimited(
                nom::character::complete::multispace0,
                nom::bytes::complete::tag(raw::back_slash::DOUBLE),
                nom::character::complete::multispace0,
            ),
            get_body,
        )),
    ))(input)?;

    let (ident, body) = result;

    Ok((input, Parameter { ident, body }))
}

#[cfg(test)]
mod tests {

    use crate::parsers;

    #[test]
    fn test_with_no_default() {
        let input = "a";
        let result = parsers::parameters::single::parse(input);

        assert_eq!(
            result,
            Ok((
                "",
                parsers::parameters::single::Parameter {
                    ident: parsers::ident::Ident {
                        body: "a".to_string()
                    },
                    body: None,
                }
            ))
        )
    }

    #[test]
    fn test_with_default() {
        let input = "a\\\\true";
        let result = parsers::parameters::single::parse(input);

        assert_eq!(
            result,
            Ok((
                "",
                parsers::parameters::single::Parameter {
                    ident: parsers::ident::Ident {
                        body: "a".to_string()
                    },
                    body: Some(parsers::parameters::single::ParameterBody::Bool(
                        parsers::bool::Bool { body: true }
                    )),
                }
            ))
        )
    }

    #[test]
    fn test_whitespace() {
        let input = "a \\\\ true";
        let result = parsers::parameters::single::parse(input);

        assert_eq!(
            result,
            Ok((
                "",
                parsers::parameters::single::Parameter {
                    ident: parsers::ident::Ident {
                        body: "a".to_string()
                    },
                    body: Some(parsers::parameters::single::ParameterBody::Bool(
                        parsers::bool::Bool { body: true }
                    )),
                }
            ))
        )
    }
}
