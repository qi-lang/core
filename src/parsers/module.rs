/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::parsers;
use crate::symbols::raw;

#[derive(Debug, PartialEq)]
pub struct Module {
    ident: parsers::ident::Ident,
    body: Option<Vec<ModuleBody>>,
}

#[derive(Debug, PartialEq)]
pub enum ModuleBody {
    Module(parsers::module::Module),
    Definition(parsers::definition::Definition),
}

pub fn get_definition(input: &str) -> nom::IResult<&str, ModuleBody> {
    let (input, result) = parsers::definition::parse(input)?;
    Ok((input, ModuleBody::Definition(result)))
}

pub fn get_module(input: &str) -> nom::IResult<&str, ModuleBody> {
    let (input, result) = parsers::module::parse(input)?;
    Ok((input, ModuleBody::Module(result)))
}

pub fn get_body(input: &str) -> nom::IResult<&str, ModuleBody> {
    let (input, result) = nom::branch::alt((get_module, get_definition))(input)?;
    Ok((input, result))
}

pub fn parse(input: &str) -> nom::IResult<&str, Module> {
    let (input, result) = nom::sequence::pair(
        nom::sequence::preceded(
            nom::bytes::complete::tag(raw::MODULE),
            nom::sequence::delimited(
                nom::character::complete::multispace1,
                parsers::ident::parse,
                nom::character::complete::multispace1,
            ),
        ),
        nom::sequence::preceded(
            nom::sequence::tuple((
                nom::bytes::complete::tag(raw::DO),
                nom::character::complete::multispace1,
            )),
            nom::sequence::terminated(
                nom::combinator::opt(nom::sequence::terminated(
                    nom::multi::separated_list1(nom::character::complete::multispace1, get_body),
                    nom::character::complete::multispace1,
                )),
                nom::bytes::complete::tag(raw::END),
            ),
        ),
    )(input)?;

    Ok((
        input,
        Module {
            ident: result.0,
            body: result.1,
        },
    ))
}

#[cfg(test)]
mod tests {

    #[test]
    fn test() {
        todo!()
    }
}
