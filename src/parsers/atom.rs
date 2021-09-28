/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::symbols::complete;
use crate::symbols::raw;

#[derive(Debug, PartialEq)]
pub struct Atom {
    pub body: String,
}

pub fn parse(input: &str) -> nom::IResult<&str, Atom> {

    // :ok

    let (input, body) = nom::combinator::all_consuming(
        nom::sequence::tuple((
            nom::bytes::complete::tag(raw::COLON),
            nom::branch::alt((
                nom::bytes::complete::tag(raw::UNDERSCORE),
                complete::character::alpha_numeric
            )),
            nom::multi::many0(
                nom::branch::alt((
                    nom::bytes::complete::tag(raw::UNDERSCORE),
                    complete::character::alpha_numeric
                )),
            )
        ))
    )(input)?;

    let body = format!("{}{}", body.1, body.2.as_slice().join(""));
    Ok((input, Atom { body }))
}

#[cfg(test)]
mod tests {
    use crate::parsers::atom;

    #[test]
    fn test_single_alpha() {
        let subject = ":o";
        let result = atom::parse(subject);
        assert_eq!(result, Ok(("", atom::Atom { body: "o".to_string() })))
    }

    #[test]
    fn test_multi_alpha() {
        let subject = ":hello";
        let result = atom::parse(subject);
        assert_eq!(result, Ok(("", atom::Atom { body: "hello".to_string() })))
    }

    #[test]
    fn test_alpha_numeric() {
        let subject = ":h1e2l3l4o";
        let result = atom::parse(subject);
        assert_eq!(result, Ok(("", atom::Atom { body: "h1e2l3l4o".to_string() })))
    }

    #[test]
    fn test_pre_underscore() {
        let subject = ":_ok";
        let result = atom::parse(subject);
        assert_eq!(result, Ok(("", atom::Atom { body: "_ok".to_string() })))
    }

    #[test]
    fn test_post_underscore() {
        let subject = ":ok_";
        let result = atom::parse(subject);
        assert_eq!(result, Ok(("", atom::Atom { body: "ok_".to_string() })))
    }

    #[test]
    fn test_underscore() {
        let subject = ":__ok__";
        let result = atom::parse(subject);
        assert_eq!(result, Ok(("", atom::Atom { body: "__ok__".to_string() })))
    }
}
