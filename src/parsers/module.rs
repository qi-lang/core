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
    body: Vec<ModuleBody>,
}

#[derive(Debug, PartialEq)]
pub enum ModuleBody {
    Module(parsers::module::Module),
    // todo: Function(parsers::function::Function),
}

pub fn parse(input: &str) -> nom::IResult<&str, Module> {
    let (input, result) = nom::sequence::tuple((
        nom::bytes::complete::tag(raw::MODULE),
        nom::sequence::tuple((
            nom::character::complete::multispace1,
            parsers::ident::parse,
            nom::character::complete::multispace1,
        )),
        nom::bytes::complete::tag(raw::DO),
        nom::character::complete::multispace1,
        nom::bytes::complete::tag(raw::END),
    ))(input)?;

    // TODO:
    let body = vec![];
    Ok((
        input,
        Module {
            ident: (result.1).1,
            body,
        },
    ))
}

#[test]
fn test() {
    let result = crate::parsers::module::parse("module A do end");
    println!("{:?}", result);
    todo!("This is not a real test! Something wrong with PartialEq for dyn traits");
}
