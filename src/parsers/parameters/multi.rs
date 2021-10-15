/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::parsers;
use crate::symbols::raw;

#[derive(Debug, PartialEq)]
pub struct Parameters {
    pub body: Option<Vec<parsers::parameters::single::Parameter>>,
}

// parameters
// a, b, c
// a \\ 1, b \\ 2, c \\ 3

pub fn parse(input: &str) -> nom::IResult<&str, Parameters> {
    let (input, result) = nom::combinator::opt(nom::multi::separated_list1(
        nom::bytes::complete::tag(raw::COMMA),
        nom::sequence::delimited(
            nom::character::complete::multispace0,
            parsers::parameters::single::parse,
            nom::character::complete::multispace0,
        ),
    ))(input)?;

    Ok((input, Parameters { body: result }))
}

#[cfg(test)]
mod tests {

    use crate::parsers::ident;
    use crate::parsers::parameters;

    #[test]
    fn test_empty() {
        let input = "";
        let result = parameters::multi::parse(input);

        assert_eq!(
            result,
            Ok(("", parameters::multi::Parameters { body: None }))
        )
    }

    #[test]
    fn test_single_item() {
        let input = "a";
        let result = parameters::multi::parse(input);

        assert_eq!(
            result,
            Ok((
                "",
                parameters::multi::Parameters {
                    body: Some(vec![parameters::single::Parameter {
                        ident: ident::Ident {
                            body: "a".to_string()
                        },
                        body: None
                    }])
                }
            ))
        )
    }

    #[test]
    fn test_multi_item() {
        let input = "a,b,c";
        let result = parameters::multi::parse(input);

        assert_eq!(
            result,
            Ok((
                "",
                parameters::multi::Parameters {
                    body: Some(vec![
                        parameters::single::Parameter {
                            ident: ident::Ident {
                                body: "a".to_string()
                            },
                            body: None
                        },
                        parameters::single::Parameter {
                            ident: ident::Ident {
                                body: "b".to_string()
                            },
                            body: None
                        },
                        parameters::single::Parameter {
                            ident: ident::Ident {
                                body: "c".to_string()
                            },
                            body: None
                        }
                    ])
                }
            ))
        )
    }

    #[test]
    fn test_spacing() {
        let input = "a , b , c";
        let result = parameters::multi::parse(input);

        assert_eq!(
            result,
            Ok((
                "",
                parameters::multi::Parameters {
                    body: Some(vec![
                        parameters::single::Parameter {
                            ident: ident::Ident {
                                body: "a".to_string()
                            },
                            body: None
                        },
                        parameters::single::Parameter {
                            ident: ident::Ident {
                                body: "b".to_string()
                            },
                            body: None
                        },
                        parameters::single::Parameter {
                            ident: ident::Ident {
                                body: "c".to_string()
                            },
                            body: None
                        }
                    ])
                }
            ))
        )
    }
}
