/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::symbols::complete::character;
use crate::symbols::raw;

#[derive(Debug, PartialEq)]
pub struct Ident {
    pub body: String,
}

pub fn parse(input: &str) -> nom::IResult<&str, Ident> {
    let (input, result) = nom::sequence::tuple((
        nom::branch::alt((
            nom::bytes::complete::tag(raw::UNDERSCORE),
            character::alpha_numeric,
        )),
        nom::multi::many0(nom::branch::alt((
            nom::bytes::complete::tag(raw::UNDERSCORE),
            character::alpha_numeric,
        ))),
    ))(input)?;

    let body = format!("{}{}", result.0, result.1.join(""));
    Ok((input, Ident { body }))
}

#[cfg(test)]
mod tests {
    #[test]
    fn test_single_alpha() {
        let subject = "o";
        let result = crate::parsers::ident::parse(subject);
        assert_eq!(
            result,
            Ok((
                "",
                crate::parsers::ident::Ident {
                    body: "o".to_string()
                }
            ))
        )
    }

    #[test]
    fn test_multi_alpha() {
        let subject = "hello";
        let result = crate::parsers::ident::parse(subject);
        assert_eq!(
            result,
            Ok((
                "",
                crate::parsers::ident::Ident {
                    body: "hello".to_string()
                }
            ))
        )
    }

    #[test]
    fn test_alpha_numeric() {
        let subject = "h1e2l3l4o";
        let result = crate::parsers::ident::parse(subject);
        assert_eq!(
            result,
            Ok((
                "",
                crate::parsers::ident::Ident {
                    body: "h1e2l3l4o".to_string()
                }
            ))
        )
    }

    #[test]
    fn test_pre_underscore() {
        let subject = "_ok";
        let result = crate::parsers::ident::parse(subject);
        assert_eq!(
            result,
            Ok((
                "",
                crate::parsers::ident::Ident {
                    body: "_ok".to_string()
                }
            ))
        )
    }

    #[test]
    fn test_post_underscore() {
        let subject = "ok_";
        let result = crate::parsers::ident::parse(subject);
        assert_eq!(
            result,
            Ok((
                "",
                crate::parsers::ident::Ident {
                    body: "ok_".to_string()
                }
            ))
        )
    }

    #[test]
    fn test_underscore() {
        let subject = "__ok__";
        let result = crate::parsers::ident::parse(subject);
        assert_eq!(
            result,
            Ok((
                "",
                crate::parsers::ident::Ident {
                    body: "__ok__".to_string()
                }
            ))
        )
    }
}
