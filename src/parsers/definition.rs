/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::parsers;

#[derive(Debug, PartialEq)]
pub struct Definition {
    ident: parsers::ident::Ident,
    params: Vec<parsers::parameter::Parameter>,
    body: DefinitionBody,
}

#[derive(Debug, PartialEq)]
pub enum DefinitionBody {}

pub fn parse(input: &str) -> nom::IResult<&str, Definition> {
    unimplemented!()
}
