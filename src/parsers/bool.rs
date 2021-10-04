/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::symbols::raw;

#[derive(Debug, PartialEq)]
pub struct Bool {
    body: bool,
}

pub fn parse(input: &str) -> nom::IResult<&str, Bool> {
    let (input, body) = nom::branch::alt((
        nom::bytes::complete::tag(raw::TRUE),
        nom::bytes::complete::tag(raw::FALSE),
    ))(input)?;

    let body = if body == raw::TRUE { true } else { false };
    Ok((input, Bool { body }))
}

#[cfg(test)]
mod tests {
    use crate::parsers::bool;

    #[test]
    fn test_true() {
        let subject = "true";
        let result = bool::parse(subject);
        assert_eq!(result, Ok(("", bool::Bool { body: true })))
    }

    #[test]
    fn test_false() {
        let subject = "false";
        let result = bool::parse(subject);
        assert_eq!(result, Ok(("", bool::Bool { body: false })))
    }
}
