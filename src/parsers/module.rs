/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::parsers::ident;
use crate::symbols::complete;
use crate::symbols::raw;

pub trait ModuleBody: std::fmt::Debug {}

#[derive(Debug)]
pub struct Module {
    ident: ident::Ident,
    body: Vec<Box<dyn ModuleBody>>,
}

impl ModuleBody for Module {}

pub fn parse(input: &str) -> nom::IResult<&str, Module> {
    let (input, result) = nom::sequence::tuple((
        nom::bytes::complete::tag(raw::MODULE),
        nom::sequence::tuple((
            nom::character::complete::multispace1,
            // ident
            nom::multi::many1(complete::character::alpha_numeric),
            nom::character::complete::multispace1,
        )),
        nom::bytes::complete::tag(raw::DO),
        nom::character::complete::multispace1,
        nom::bytes::complete::tag(raw::END),
    ))(input)?;

    let ident = ident::Ident {
        body: result.1 .1.join(""),
    };

    // TODO:
    let body = vec![];
    Ok((input, Module { ident, body }))
}

#[test]
fn test() {
    let result = crate::parsers::module::parse("module A do end");
    println!("{:?}", result);
    todo!("This is not a real test! Something wrong with PartialEq for dyn traits");
}
