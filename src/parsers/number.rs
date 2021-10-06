/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::symbols::complete;

#[derive(Debug)]
pub struct Number {
    pub body: f64,
}

pub fn pre_transform_digits(input: &str) -> nom::IResult<&str, Vec<&str>> {
    let (input, result) = nom::multi::many1(complete::character::number)(input)?;

    Ok((input, result))
}

pub fn int(input: &str) -> nom::IResult<&str, Number> {
    let (input, result) = pre_transform_digits(input)?;

    let body = format!("{}", result.join("")).parse::<f64>();

    let body = match body {
        Ok(product) => product,
        Err(e) => panic!("{}", e),
    };

    Ok((input, Number { body }))
}

pub fn float(input: &str) -> nom::IResult<&str, Number> {
    let (input, result) = nom::sequence::tuple((
        pre_transform_digits,
        nom::bytes::complete::tag("."),
        pre_transform_digits,
    ))(input)?;

    let result0 = format!("{}", result.0.join(""));
    let result2 = format!("{}", result.2.join(""));
    let body = format!("{}{}{}", result0, result.1, result2).parse::<f64>();

    let body = match body {
        Ok(product) => product,
        Err(e) => panic!("{}", e),
    };

    Ok((input, Number { body }))
}

pub fn parse(input: &str) -> nom::IResult<&str, Number> {
    let (input, result) = nom::branch::alt((float, int))(input)?;
    Ok((input, result))
}

#[cfg(test)]
mod tests {

    #[test]
    fn test() {}
}
