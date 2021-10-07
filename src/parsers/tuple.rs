/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::parsers;
use crate::symbols::raw;

#[derive(Debug, PartialEq)]
pub struct Tuple {
    pub body: Vec<parsers::list::IterableBody>,
}

pub fn parse(input: &str) -> nom::IResult<&str, Tuple> {
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
                parsers::list::get_body,
                nom::character::complete::multispace0,
            ),
        ),
        nom::bytes::complete::tag(raw::brace::RIGHT),
    )(input)?;

    Ok((input, Tuple { body: result }))
}

#[cfg(test)]
mod tests {

    use crate::parsers;

    #[test]
    fn test() {
        let result = parsers::tuple::parse("{:ok, true}");
        let result = match result {
            Ok((_, product)) => product,
            Err(e) => match e {
                nom::Err::Incomplete(i) => panic!("{:?}", i),
                nom::Err::Error(i) => panic!("{}", i),
                nom::Err::Failure(i) => panic!("{}", i),
            },
        };

        let expected = parsers::tuple::Tuple {
            body: vec![
                parsers::list::IterableBody::Atom(parsers::atom::Atom {
                    body: "ok".to_string(),
                }),
                parsers::list::IterableBody::Bool(parsers::bool::Bool { body: true }),
            ],
        };

        assert_eq!(expected, result)
    }
}
