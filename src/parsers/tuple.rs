/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::parsers;
use crate::symbols::raw;

pub fn parse(input: &str) -> nom::IResult<&str, Vec<parsers::bool::Bool>> {
    let (input, result) = nom::sequence::delimited(
        nom::bytes::complete::tag(raw::brace::LEFT),
        nom::multi::separated_list0(
            nom::sequence::delimited(
                nom::character::complete::multispace0,
                nom::bytes::complete::tag(raw::COMMA),
                nom::character::complete::multispace0,
            ),
            nom::sequence::delimited(
                nom::character::complete::multispace0,
                parsers::bool::parse,
                nom::character::complete::multispace0,
            ),
        ),
        nom::bytes::complete::tag(raw::brace::RIGHT),
    )(input)?;

    Ok((input, result))
}
