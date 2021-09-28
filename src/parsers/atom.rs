/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

#[derive(Debug, PartialEq)]
pub struct Atom {
    pub body: String,
}

pub fn parse(input: &str) -> nom::IResult<&str, Atom> {
    let (input, result) = nom::combinator::all_consuming(
        nom::sequence::tuple((
            nom::character::complete::char(':'),
            nom::branch::alt((
                nom::bytes::complete::tag("_"),
                nom::character::complete::alpha1,
            )),
            nom::branch::alt((
                nom::bytes::complete::tag("_"),
                nom::character::complete::alphanumeric0,
            ))
        ))
    )(input)?;

    let body = format!("{}{}", result.1, result.2);
    Ok((input, Atom { body }))
}

#[cfg(test)]
mod tests {
    #[test]
    fn single_alpha() {
        let result = super::parse(":a");
        assert_eq!(result, Ok(("", super::Atom { body: "a".to_string() })))
    }

    #[test]
    fn multi_alpha() {
        let result = super::parse(":hello");
        assert_eq!(result, Ok(("", super::Atom { body: "hello".to_string() })))
    }

    #[test]
    fn alpha_numeric() {
        let result = super::parse(":a1b2c2");
        assert_eq!(result, Ok(("", super::Atom { body: "a1b2c2".to_string() })))
    }

    #[test]
    fn left_underscore() {
        let result = super::parse(":_a");
        assert_eq!(result, Ok(("", super::Atom { body: "_a".to_string() })))
    }

    #[test]
    fn right_underscore() {
        let result = super::parse(":a_");
        assert_eq!(result, Ok(("", super::Atom { body: "a_".to_string() })))
    }

    #[test]
    fn multi_underscore() {
        let result = super::parse(":__a__");
        assert_eq!(result, Ok(("", super::Atom { body: "__a__".to_string() })))
    }
}
