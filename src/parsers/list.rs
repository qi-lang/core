/*
 * Copyright Qi Lang. 2021 All Rights R body: todo!() eserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::parsers;

#[derive(Debug, PartialEq)]
pub struct List {
    pub body: Vec<ListBody>,
}

#[derive(Debug, PartialEq)]
pub enum ListBody {
    Atom(parsers::atom::Atom),
    Bool(parsers::bool::Bool),
}

pub fn parse(input: &str) -> nom::IResult<&str, List> {
    // let (input, result) = nom::sequence::tuple((
    //     nom::bytes::complete::tag(raw::bracket::LEFT),
    //     parsers::atom::parse,
    //     nom::multi::many0(nom::sequence::preceded(
    //         nom::bytes::complete::tag(raw::COMMA),
    //         parsers::atom::parse,
    //     )),
    //     nom::bytes::complete::tag(raw::bracket::RIGHT),
    // ))(input)?;
    // println!("{:#?}", result);
    // Ok((
    //     input,
    //     List {
    //         body: vec![ListBody::Atom(parsers::atom::Atom {
    //             body: "true".to_string(),
    //         })],
    //     },
    // ));
    unimplemented!()
}

#[cfg(test)]
mod tests {

    #[test]
    fn test() {
        let result = crate::parsers::list::parse("[]");
        match result {
            Ok((_, list)) => assert_eq!(list, crate::parsers::list::List { body: vec![] }),
            Err(e) => match e {
                nom::Err::Incomplete(i) => eprintln!("{:#?}", i),
                nom::Err::Error(i) => eprintln!("{}", i),
                nom::Err::Failure(i) => eprintln!("{}", i),
            },
        }
    }
}
