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
// Definition(parsers::definition::Definition)
}

// ident()
pub fn get_definition_ident(
    input: &str,
) -> nom::IResult<
    &str,
    (
        parsers::ident::Ident,
        Option<parsers::parameter::Parameters>,
    ),
> {
    let (input, result) = nom::sequence::pair(
        parsers::ident::parse,
        nom::combinator::opt(nom::sequence::delimited(
            nom::bytes::complete::tag(raw::parenthesis::LEFT),
            parsers::parameter::parse,
            nom::bytes::complete::tag(raw::parenthesis::RIGHT),
        )),
    )(input)?;

    Ok((input, result))
}

pub fn parse(input: &str) -> nom::IResult<&str, Definition> {
    let (input, result) = nom::sequence::tuple((
        nom::sequence::preceded(
            nom::bytes::complete::tag(raw::DEF),
            nom::sequence::delimited(
                nom::character::complete::multispace1,
                get_definition_ident,
                nom::character::complete::multispace1,
            ),
        ),
        nom::sequence::delimited(
            nom::bytes::complete::tag(raw::DO),
            nom::sequence::preceded(
                nom::character::complete::multispace1,
                nom::combinator::opt(nom::sequence::terminated(
                    parsers::bool::parse,
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
            body: None,
        },
    ))
}
