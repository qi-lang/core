/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::parsers;

#[derive(Debug, PartialEq)]
pub struct Root {
    pub body: Option<Vec<RootBody>>,
}

#[derive(Debug, PartialEq)]
pub enum RootBody {
    Module(parsers::module::Module),
    Definition(parsers::definition::Definition),
}

pub fn get_module(input: &str) -> nom::IResult<&str, RootBody> {
    let (input, result) = parsers::module::parse(input)?;
    Ok((input, RootBody::Module(result)))
}
pub fn get_definition(input: &str) -> nom::IResult<&str, RootBody> {
    let (input, result) = parsers::definition::parse(input)?;
    Ok((input, RootBody::Definition(result)))
}

pub fn get_body(input: &str) -> nom::IResult<&str, RootBody> {
    let (input, result) = nom::branch::alt((get_module, get_definition))(input)?;
    Ok((input, result))
}

pub fn parse(input: &str) -> nom::IResult<&str, Root> {
    let (input, result) = nom::combinator::all_consuming(nom::sequence::terminated(
        nom::sequence::delimited(
            nom::character::complete::multispace0,
            nom::combinator::opt(nom::multi::many1(nom::sequence::delimited(
                nom::character::complete::multispace0,
                get_body,
                nom::character::complete::multispace0,
            ))),
            nom::character::complete::multispace0,
        ),
        nom::combinator::eof,
    ))(input)?;

    Ok((input, Root { body: result }))
}

#[cfg(test)]
mod tests {

    use crate::parsers::definition;
    use crate::parsers::ident;
    use crate::parsers::module;
    use crate::parsers::root;

    #[test]
    fn test_root_has_module() {
        let input = "mod A do end";
        let result = root::parse(input);

        match result {
            Ok((_, product)) => assert_eq!(
                product,
                root::Root {
                    body: Some(vec![root::RootBody::Module(module::Module {
                        ident: ident::Ident {
                            body: "A".to_string()
                        },
                        body: None,
                    })])
                }
            ),
            Err(e) => match e {
                nom::Err::Incomplete(i) => panic!("{:?}", i),
                nom::Err::Error(i) => panic!("{:?}", i),
                nom::Err::Failure(i) => panic!("{:?}", i),
            },
        }
    }

    #[test]
    fn test_root_has_definition() {
        let input = "def hello do end";
        let result = root::parse(input);

        match result {
            Ok((_, product)) => assert_eq!(
                product,
                root::Root {
                    body: Some(vec![root::RootBody::Definition(definition::Definition {
                        ident: ident::Ident {
                            body: "hello".to_string()
                        },
                        params: None,
                        body: None,
                    })])
                }
            ),
            Err(e) => match e {
                nom::Err::Incomplete(i) => panic!("{:?}", i),
                nom::Err::Error(i) => panic!("{:?}", i),
                nom::Err::Failure(i) => panic!("{:?}", i),
            },
        }
    }

    #[test]
    fn test_can_have_pre_post_whitespace() {
        let input = "       def hello do end        ";
        let result = root::parse(input);

        match result {
            Ok((_, product)) => assert_eq!(
                product,
                root::Root {
                    body: Some(vec![root::RootBody::Definition(definition::Definition {
                        ident: ident::Ident {
                            body: "hello".to_string()
                        },
                        params: None,
                        body: None,
                    })])
                }
            ),
            Err(e) => match e {
                nom::Err::Incomplete(i) => panic!("{:?}", i),
                nom::Err::Error(i) => panic!("{:?}", i),
                nom::Err::Failure(i) => panic!("{:?}", i),
            },
        }
    }
    #[test]
    fn test_can_have_many() {
        let input = "def hello do end mod A do end";
        let result = root::parse(input);

        match result {
            Ok((_, product)) => assert_eq!(
                product,
                root::Root {
                    body: Some(vec![
                        root::RootBody::Definition(definition::Definition {
                            ident: ident::Ident {
                                body: "hello".to_string()
                            },
                            params: None,
                            body: None,
                        }),
                        root::RootBody::Module(module::Module {
                            ident: ident::Ident {
                                body: "A".to_string()
                            },
                            body: None,
                        })
                    ])
                }
            ),
            Err(e) => match e {
                nom::Err::Incomplete(i) => panic!("{:?}", i),
                nom::Err::Error(i) => panic!("{:?}", i),
                nom::Err::Failure(i) => panic!("{:?}", i),
            },
        }
    }
}
