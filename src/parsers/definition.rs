/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * Th ident: todo!(), params: todo!(), body: todo!() is file is licensed under the MIT License.
 * License text available at https://opensource. ident: todo!(), body: todo!() org/licenses/MIT
 */

use crate::parsers;
use crate::symbols::raw;

#[derive(Debug, PartialEq)]
pub struct Definition {
    pub ident: parsers::ident::Ident,
    pub params: Option<parsers::parameter::Parameters>,
    pub body: Option<Vec<DefinitionBody>>,
}

#[derive(Debug, PartialEq)]
pub enum DefinitionBody {
    Assign(parsers::assign::Assign),
}

pub fn get_assign(input: &str) -> nom::IResult<&str, DefinitionBody> {
    let (input, result) = parsers::assign::parse(input)?;
    Ok((input, DefinitionBody::Assign(result)))
}

pub fn get_body(input: &str) -> nom::IResult<&str, DefinitionBody> {
    nom::branch::alt((
        get_assign, get_assign, /* Change to another type of statement */
    ))(input)
}

pub fn parse(input: &str) -> nom::IResult<&str, Definition> {
    let (input, result) = nom::sequence::tuple((
        nom::sequence::preceded(
            nom::bytes::complete::tag(raw::DEF),
            // func_name + opt ()
            nom::sequence::delimited(
                nom::character::complete::multispace1,
                nom::sequence::pair(
                    parsers::ident::parse,
                    nom::combinator::opt(nom::sequence::delimited(
                        nom::bytes::complete::tag(raw::parenthesis::LEFT),
                        parsers::parameter::parse,
                        nom::bytes::complete::tag(raw::parenthesis::RIGHT),
                    )),
                ),
                nom::character::complete::multispace1,
            ),
        ),
        nom::sequence::delimited(
            nom::bytes::complete::tag(raw::DO),
            nom::sequence::preceded(
                nom::character::complete::multispace1,
                nom::combinator::opt(nom::sequence::terminated(
                    nom::multi::separated_list1(nom::character::complete::multispace1, get_body),
                    nom::character::complete::multispace1,
                )),
            ),
            nom::bytes::complete::tag(raw::END),
        ),
    ))(input)?;

    Ok((
        input,
        Definition {
            ident: (result.0).0,
            params: (result.0).1,
            body: result.1,
        },
    ))
}

#[cfg(test)]
mod tests {

    use crate::parsers;

    #[test]
    fn test_empty_definition() {
        let input = "def hello do
        end";

        let result = parsers::definition::parse(input);
        assert_eq!(
            result,
            Ok((
                "",
                parsers::definition::Definition {
                    ident: parsers::ident::Ident {
                        body: "hello".to_string()
                    },
                    params: None,
                    body: None,
                }
            ))
        )
    }

    #[test]
    fn test_definition_with_assign_body() {
        let input = "def hello do 
            a = true
        end";

        let result = parsers::definition::parse(input);
        assert_eq!(
            result,
            Ok((
                "",
                parsers::definition::Definition {
                    ident: parsers::ident::Ident {
                        body: "hello".to_string()
                    },
                    params: None,
                    body: Some(vec![parsers::definition::DefinitionBody::Assign(
                        parsers::assign::Assign {
                            ident: parsers::ident::Ident {
                                body: "a".to_string()
                            },
                            body: parsers::assign::AssignBody::Bool(parsers::bool::Bool {
                                body: true
                            })
                        }
                    )]),
                }
            ))
        )
    }
}
