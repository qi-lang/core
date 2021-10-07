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
    let (input, body) = nom::sequence::preceded(
        nom::bytes::complete::tag(raw::COLON),
        parsers::ident::parse,
    )(input)?;

    let body = body.body;
    Ok((input, Atom { body }))
}

pub fn terminated(input: &str) -> nom::IResult<&str, Atom> {
    let (input, body) = nom::sequence::terminated(
        parsers::ident::parse,
        nom::bytes::complete::tag(raw::COLON),
    )(input)?;

    let body = body.body;
    Ok((input, Atom { body }))
}

#[cfg(test)]
mod tests {

    use crate::parsers;

    #[test]
    fn test_preceded() {
        let result = parsers::atom::parse(":ok");
        let result = match result {
            Ok((_, product)) => product,
            Err(e) => match e {
                nom::Err::Incomplete(i) => panic!("{:?}", i),
                nom::Err::Error(i) => panic!("{}", i),
                nom::Err::Failure(i) => panic!("{}", i),
            },
        };

        let expected = parsers::atom::Atom {
            body: "ok".to_string(),
        };

        assert_eq!(expected, result)
    }

    #[test]
    fn test_terminated() {
        let result = parsers::atom::terminated("ok:");
        let result = match result {
            Ok((_, product)) => product,
            Err(e) => match e {
                nom::Err::Incomplete(i) => panic!("{:?}", i),
                nom::Err::Error(i) => panic!("{}", i),
                nom::Err::Failure(i) => panic!("{}", i),
            },
        };

        let expected = parsers::atom::Atom {
            body: "ok".to_string(),
        };

        assert_eq!(expected, result)
    }
}
