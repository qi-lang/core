/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::parsers;
use crate::symbols::raw;

#[derive(Debug, PartialEq)]
pub enum MapBody {
    Atom(parsers::atom::Atom),
    Bool(parsers::bool::Bool),
    Number(parsers::number::Number),
    String(parsers::string::String),
    List(parsers::list::List),
    Tuple(parsers::tuple::Tuple),
    Map(parsers::map::Map),
    Ident(parsers::ident::Ident),
}

#[derive(Debug, PartialEq)]
pub struct Pair {
    pub key: parsers::atom::Atom,
    pub body: MapBody,
}

#[derive(Debug, PartialEq)]
pub struct Map {
    pub body: Vec<Pair>,
}

pub fn get_atom(input: &str) -> nom::IResult<&str, MapBody> {
    let (input, result) = parsers::atom::parse(input)?;
    Ok((input, MapBody::Atom(result)))
}

pub fn get_bool(input: &str) -> nom::IResult<&str, MapBody> {
    let (input, result) = parsers::bool::parse(input)?;
    Ok((input, MapBody::Bool(result)))
}

pub fn get_string(input: &str) -> nom::IResult<&str, MapBody> {
    let (input, result) = parsers::string::parse(input)?;
    Ok((input, MapBody::String(result)))
}

pub fn get_number(input: &str) -> nom::IResult<&str, MapBody> {
    let (input, result) = parsers::number::parse(input)?;
    Ok((input, MapBody::Number(result)))
}

pub fn get_list(input: &str) -> nom::IResult<&str, MapBody> {
    let (input, result) = parsers::list::parse(input)?;
    Ok((input, MapBody::List(result)))
}

pub fn get_tuple(input: &str) -> nom::IResult<&str, MapBody> {
    let (input, result) = parsers::tuple::parse(input)?;
    Ok((input, MapBody::Tuple(result)))
}

pub fn get_ident(input: &str) -> nom::IResult<&str, MapBody> {
    let (input, result) = parsers::ident::parse(input)?;
    Ok((input, MapBody::Ident(result)))
}

pub fn get_map(input: &str) -> nom::IResult<&str, MapBody> {
    let (input, result) = parsers::map::parse(input)?;
    Ok((input, MapBody::Map(result)))
}

pub fn get_body(input: &str) -> nom::IResult<&str, Pair> {
    let (input, result) = nom::sequence::pair(
        nom::sequence::delimited(
            nom::character::complete::multispace0,
            parsers::atom::terminated,
            nom::character::complete::multispace0,
        ),
        nom::sequence::delimited(
            nom::character::complete::multispace0,
            nom::branch::alt((
                get_bool, get_atom, get_number, get_string, get_list, get_tuple, get_ident, get_map,
            )),
            nom::character::complete::multispace0,
        ),
    )(input)?;

    Ok((
        input,
        Pair {
            key: result.0,
            body: result.1,
        },
    ))
}

pub fn parse(input: &str) -> nom::IResult<&str, Map> {
    let (input, result) = nom::sequence::preceded(
        nom::bytes::complete::tag(raw::PERCENT),
        nom::sequence::delimited(
            nom::bytes::complete::tag(raw::brace::LEFT),
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
            nom::bytes::complete::tag(raw::brace::RIGHT),
        ),
    )(input)?;

    Ok((input, Map { body: result }))
}

#[cfg(test)]
mod tests {
    #[test]
    fn test() {
        todo!("please add some tests here")
    }
}
