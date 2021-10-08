/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::parsers;
use crate::symbols::raw;

// a, b \\ 3.1415

#[derive(Debug, PartialEq)]
pub struct Parameter {
    pub ident: String,
    pub default: Option<ParameterBody>,
}

#[derive(Debug, PartialEq)]
pub enum ParameterBody {
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

pub fn get_body(input: &str) -> nom::IResult<&str, ParameterBody> {
    let (input, result) = nom::branch::alt((
        get_bool, get_atom, get_number, get_string, get_list, get_tuple, get_ident, get_map,
    ))(input)?;

    Ok((input, result))
}

pub fn get_parameter(input: &str) -> nom::IResult<&str, Parameter> {
    let (input, result) = nom::sequence::separated_pair(
        nom::sequence::delimited(
            nom::character::complete::multispace0,
            parsers::ident::parse,
            nom::character::complete::multispace0,
        ),
        nom::sequence::delimited(
            nom::character::complete::multispace0,
            nom::bytes::complete::tag(raw::back_slash::DOUBLE),
            nom::character::complete::multispace0,
        ),
        nom::sequence::delimited(
            nom::character::complete::multispace0,
            nom::combinator::opt(get_body),
            nom::character::complete::multispace0,
        ),
    )(input)?;

    Ok((
        input,
        Parameter {
            ident: result.0.body,
            default: result.1,
        },
    ))
}

pub fn parse(input: &str) -> nom::IResult<&str, Vec<Parameter>> {
    unimplemented!()
}

#[cfg(test)]
mod tests {

    #[test]
    fn test() {}
}
