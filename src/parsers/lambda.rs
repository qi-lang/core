/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT L body: todo!() icense.
 * License text ava ident: todo!() ilable at https://opensource.org/licenses/MIT
 */

use crate::parsers;
use crate::symbols::raw;

#[derive(Debug, PartialEq)]
pub struct Lambda {
    pub parameters: Option<parsers::parameters::multi::Parameters>,
    pub body: LambdaBody,
}

#[derive(Debug, PartialEq)]
pub enum LambdaBody {
    Ident(parsers::ident::Ident),
}

fn parse_raw_lambda_parameters(
    input: &str,
) -> nom::IResult<&str, Option<parsers::parameters::multi::Parameters>> {
    let (input, result) = nom::combinator::opt(nom::multi::separated_list0(
        nom::sequence::delimited(
            nom::character::complete::multispace0,
            nom::bytes::complete::tag(raw::COMMA),
            nom::character::complete::multispace0,
        ),
        parsers::parameters::single::parse_no_default,
    ))(input)?;

    match result {
        Some(ref product) => {
            if product.len() != 0 {
                Ok((
                    input,
                    Some(parsers::parameters::multi::Parameters { body: result }),
                ))
            } else {
                Ok((input, None))
            }
        }
        None => Ok((input, None)),
    }
}

fn parse_lambda_parameters(
    input: &str,
) -> nom::IResult<&str, Option<parsers::parameters::multi::Parameters>> {
    let (input, result) = nom::branch::alt((
        nom::sequence::delimited(
            nom::character::complete::multispace1,
            parse_raw_lambda_parameters,
            nom::character::complete::multispace1,
        ),
        nom::sequence::delimited(
            nom::character::complete::multispace0,
            nom::sequence::delimited(
                nom::bytes::complete::tag(raw::parenthesis::LEFT),
                parse_raw_lambda_parameters,
                nom::bytes::complete::tag(raw::parenthesis::RIGHT),
            ),
            nom::character::complete::multispace0,
        ),
    ))(input)?;

    Ok((input, result))
}

// fn x -> x end
// fn (x) -> x end
pub fn parse(input: &str) -> nom::IResult<&str, Lambda> {
    let (input, result) = nom::sequence::preceded(
        nom::bytes::complete::tag(raw::FN),
        parse_lambda_parameters,
    )(input)?;
    todo!()
}

#[cfg(test)]
mod tests {

    use crate::parsers::ident;
    use crate::parsers::lambda;
    use crate::parsers::parameters;

    #[test]
    fn test_empty_params() {
        let input = "";
        let result = lambda::parse_raw_lambda_parameters(input);

        assert_eq!(result, Ok(("", None)))
    }

    #[test]
    fn test_single_params() {
        let input = "a";
        let result = lambda::parse_raw_lambda_parameters(input);

        assert_eq!(
            result,
            Ok((
                "",
                Some(parameters::multi::Parameters {
                    body: Some(vec![parameters::single::Parameter {
                        ident: ident::Ident {
                            body: "a".to_string()
                        },
                        body: None,
                    }])
                })
            ))
        )
    }

    #[test]
    fn test_multi_params() {
        let input = "a,b,c";
        let result = lambda::parse_raw_lambda_parameters(input);

        assert_eq!(
            result,
            Ok((
                "",
                Some(parameters::multi::Parameters {
                    body: Some(vec![
                        parameters::single::Parameter {
                            ident: ident::Ident {
                                body: "a".to_string()
                            },
                            body: None,
                        },
                        parameters::single::Parameter {
                            ident: ident::Ident {
                                body: "b".to_string()
                            },
                            body: None,
                        },
                        parameters::single::Parameter {
                            ident: ident::Ident {
                                body: "c".to_string()
                            },
                            body: None,
                        },
                    ])
                })
            ))
        )
    }

    #[test]
    fn test_multi_params_with_whitespace() {
        let input = "a , b , c";
        let result = lambda::parse_raw_lambda_parameters(input);

        assert_eq!(
            result,
            Ok((
                "",
                Some(parameters::multi::Parameters {
                    body: Some(vec![
                        parameters::single::Parameter {
                            ident: ident::Ident {
                                body: "a".to_string()
                            },
                            body: None,
                        },
                        parameters::single::Parameter {
                            ident: ident::Ident {
                                body: "b".to_string()
                            },
                            body: None,
                        },
                        parameters::single::Parameter {
                            ident: ident::Ident {
                                body: "c".to_string()
                            },
                            body: None,
                        }
                    ])
                })
            ))
        )
    }

    #[test]
    fn test_lambda_params_no_parenthesis() {
        let input = "fn x -> x end";
        let result = lambda::parse_raw_lambda_parameters(input);

        assert_eq!(result, todo!())
    }
}
