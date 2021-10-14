/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::parsers;
use crate::symbols::raw;

#[derive(Debug, PartialEq)]
pub struct Lambda {
    pub parameters: Option<parsers::parameters::multi::Parameters>,
    pub body: LambdaBody,
}

#[derive(Debug, PartialEq)]
pub enum LambdaBody {
    Ident(parsers::ident::Ident),
}

pub fn parse(input: &str) -> nom::IResult<&str, Lambda> {
    // let (input, result) = nom::sequence::tuple(())(input)?;
    todo!()
}

#[cfg(test)]
mod tests {}
