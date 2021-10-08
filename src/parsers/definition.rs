/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::parsers;
use crate::symbols::raw;

#[derive(Debug, PartialEq)]
pub struct Definition {
    ident: parsers::ident::Ident,
    params: Option<parsers::parameter::Parameters>,
    body: Option<DefinitionBody>,
}

#[derive(Debug, PartialEq)]
pub enum DefinitionBody {
    // TODO
// Assign(parsers::assign::Assign)
// Definition(Box<parsers::definition::Definition>),
}

// TODO
// pub fn get_definition(input: &str) -> nom::IResult<&str, DefinitionBody> {
//     let (input, result) = parsers::definition::parse(input)?;
//     Ok((input, DefinitionBody::Definition(Box::new(result))))
// }

pub fn get_body(input: &str) -> nom::IResult<&str, DefinitionBody> {
    // nom::branch::alt((get_definition, get_definition))(input)
    todo!()
}

pub fn parse(input: &str) -> nom::IResult<&str, Definition> {
    let (input, result) = nom::sequence::tuple((
        nom::sequence::preceded(
            nom::bytes::complete::tag(raw::DEF),
            // func_name + opt ()
            nom::sequence::delimited(
                nom::character::complete::multispace1,
                nom::sequence::pair(
                    parsers::ident::parse,
                    nom::combinator::opt(nom::sequence::delimited(
                        nom::bytes::complete::tag(raw::parenthesis::LEFT),
                        parsers::parameter::parse,
                        nom::bytes::complete::tag(raw::parenthesis::RIGHT),
                    )),
                ),
                nom::character::complete::multispace1,
            ),
        ),
        nom::sequence::delimited(
            nom::bytes::complete::tag(raw::DO),
            nom::sequence::preceded(
                nom::character::complete::multispace1,
                nom::combinator::opt(nom::sequence::terminated(
                    get_body,
                    nom::character::complete::multispace1,
                )),
            ),
            nom::bytes::complete::tag(raw::END),
        ),
    ))(input)?;

    Ok((
        input,
        Definition {
            ident: (result.0).0,
            params: (result.0).1,
            body: result.1,
        },
    ))
}
