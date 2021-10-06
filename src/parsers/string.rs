/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::symbols::raw;

#[derive(Debug)]
pub struct String {
    pub body: std::string::String,
}

pub fn parse(input: &str) -> nom::IResult<&str, String> {
    let (input, result) = nom::combinator::all_consuming(nom::sequence::tuple((
        nom::bytes::complete::tag(raw::quotation::DOUBLE),
        nom::bytes::complete::tag(raw::quotation::DOUBLE),
    )))(input)?;

    Ok((
        input,
        String {
            body: "".to_string(),
        },
    ))
}

#[cfg(test)]
mod tests {

    #[test]
    fn test() {
        let input = "\"\"";
        let result = crate::parsers::string::parse(input);
        todo!("add the assert here")
    }
}
