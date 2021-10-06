/*
 * Copyright Qi Lang. 2021 All Rights R body: todo!() eserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::parsers;
use crate::symbols::raw;

#[derive(Debug, PartialEq)]
pub struct List {
    pub body: Vec<ListBody>,
}

#[derive(Debug, PartialEq)]
pub enum ListBody {
    Atom(parsers::atom::Atom),
    Bool(parsers::bool::Bool),
}

// [1,2] ->

pub fn sequence(input: &str) -> nom::IResult<&str, Vec<ListBody>> {
    let (input, result) = nom::multi::separated_list0(
        nom::bytes::complete::tag(raw::COMMA),
        parsers::atom::parse,
    )(input)?;

    let result = result.iter().map(|x| ListBody::Atom(x.clone())).collect();

    Ok((input, result))
}

pub fn parse(input: &str) -> nom::IResult<&str, Vec<parsers::bool::Bool>> {
    let (input, result) = nom::sequence::delimited(
        nom::bytes::complete::tag(raw::bracket::LEFT),
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
        nom::bytes::complete::tag(raw::bracket::RIGHT),
    )(input)?;

    Ok((input, result))
}

#[cfg(test)]
mod tests {

    #[test]
    fn test() {
        let result = crate::parsers::list::sequence(":ok,:another");
        match result {
            Ok((_, list)) => {
                println!("{:?}", list);
                // assert_eq!(list, crate::parsers::list::List { body: vec![] })
            }
            Err(e) => match e {
                nom::Err::Incomplete(i) => assert!(false, "{:#?}", i),
                nom::Err::Error(i) => assert!(false, "{}", i),
                nom::Err::Failure(i) => assert!(false, "{}", i),
            },
        }
    }
}
