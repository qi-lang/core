/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::parsers;
use crate::symbols::raw;

#[derive(Debug, PartialEq, Clone)]
pub struct Atom {
    pub body: String,
}

pub fn parse(input: &str) -> nom::IResult<&str, Atom> {
    let (input, body) = nom::combinator::all_consuming(nom::sequence::preceded(
        nom::bytes::complete::tag(raw::COLON),
        parsers::ident::parse,
    ))(input)?;

    Ok((input, Atom { body: body.body }))
}

#[cfg(test)]
mod tests {

    #[test]
    fn test_single_alpha() {
        let subject = ":o";
        let result = crate::parsers::atom::parse(subject);
        assert_eq!(
            result,
            Ok((
                "",
                crate::parsers::atom::Atom {
                    body: "o".to_string()
                }
            ))
        )
    }

    #[test]
    fn test_multi_alpha() {
        let subject = ":hello";
        let result = crate::parsers::atom::parse(subject);
        assert_eq!(
            result,
            Ok((
                "",
                crate::parsers::atom::Atom {
                    body: "hello".to_string()
                }
            ))
        )
    }

    #[test]
    fn test_alpha_numeric() {
        let subject = ":h1e2l3l4o";
        let result = crate::parsers::atom::parse(subject);
        assert_eq!(
            result,
            Ok((
                "",
                crate::parsers::atom::Atom {
                    body: "h1e2l3l4o".to_string()
                }
            ))
        )
    }

    #[test]
    fn test_pre_underscore() {
        let subject = ":_ok";
        let result = crate::parsers::atom::parse(subject);
        assert_eq!(
            result,
            Ok((
                "",
                crate::parsers::atom::Atom {
                    body: "_ok".to_string()
                }
            ))
        )
    }

    #[test]
    fn test_post_underscore() {
        let subject = ":ok_";
        let result = crate::parsers::atom::parse(subject);
        assert_eq!(
            result,
            Ok((
                "",
                crate::parsers::atom::Atom {
                    body: "ok_".to_string()
                }
            ))
        )
    }

    #[test]
    fn test_underscore() {
        let subject = ":__ok__";
        let result = crate::parsers::atom::parse(subject);
        assert_eq!(
            result,
            Ok((
                "",
                crate::parsers::atom::Atom {
                    body: "__ok__".to_string()
                }
            ))
        )
    }
}
