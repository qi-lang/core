/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::symbols::raw;

pub fn lower_alpha(input: &str) -> nom::IResult<&str, &str> {
    let (input, result) = nom::branch::alt((
        nom::bytes::complete::tag(raw::letter::lower::A),
        nom::bytes::complete::tag(raw::letter::lower::B),
        nom::bytes::complete::tag(raw::letter::lower::C),
        nom::bytes::complete::tag(raw::letter::lower::D),
        nom::bytes::complete::tag(raw::letter::lower::E),
        nom::bytes::complete::tag(raw::letter::lower::F),
        nom::bytes::complete::tag(raw::letter::lower::G),
        nom::bytes::complete::tag(raw::letter::lower::H),
        nom::bytes::complete::tag(raw::letter::lower::I),
        nom::bytes::complete::tag(raw::letter::lower::J),
        nom::bytes::complete::tag(raw::letter::lower::K),
        nom::bytes::complete::tag(raw::letter::lower::L),
        nom::bytes::complete::tag(raw::letter::lower::M),
        nom::bytes::complete::tag(raw::letter::lower::N),
        nom::bytes::complete::tag(raw::letter::lower::O),
        nom::bytes::complete::tag(raw::letter::lower::P),
        nom::bytes::complete::tag(raw::letter::lower::Q),
        nom::bytes::complete::tag(raw::letter::lower::R),
        nom::bytes::complete::tag(raw::letter::lower::S),
        nom::bytes::complete::tag(raw::letter::lower::T),
        nom::branch::alt((
            nom::bytes::complete::tag(raw::letter::lower::U),
            nom::bytes::complete::tag(raw::letter::lower::V),
            nom::bytes::complete::tag(raw::letter::lower::W),
            nom::bytes::complete::tag(raw::letter::lower::X),
            nom::bytes::complete::tag(raw::letter::lower::Y),
            nom::bytes::complete::tag(raw::letter::lower::Z),
        ))
    ))(input)?;

    Ok((input, result))
}

pub fn upper_alpha(input: &str) -> nom::IResult<&str, &str> {
    let (input, result) = nom::branch::alt((
        nom::bytes::complete::tag(raw::letter::upper::A),
        nom::bytes::complete::tag(raw::letter::upper::B),
        nom::bytes::complete::tag(raw::letter::upper::C),
        nom::bytes::complete::tag(raw::letter::upper::D),
        nom::bytes::complete::tag(raw::letter::upper::E),
        nom::bytes::complete::tag(raw::letter::upper::F),
        nom::bytes::complete::tag(raw::letter::upper::G),
        nom::bytes::complete::tag(raw::letter::upper::H),
        nom::bytes::complete::tag(raw::letter::upper::I),
        nom::bytes::complete::tag(raw::letter::upper::J),
        nom::bytes::complete::tag(raw::letter::upper::K),
        nom::bytes::complete::tag(raw::letter::upper::L),
        nom::bytes::complete::tag(raw::letter::upper::M),
        nom::bytes::complete::tag(raw::letter::upper::N),
        nom::bytes::complete::tag(raw::letter::upper::O),
        nom::bytes::complete::tag(raw::letter::upper::P),
        nom::bytes::complete::tag(raw::letter::upper::Q),
        nom::bytes::complete::tag(raw::letter::upper::R),
        nom::bytes::complete::tag(raw::letter::upper::S),
        nom::bytes::complete::tag(raw::letter::upper::T),
        nom::branch::alt((
            nom::bytes::complete::tag(raw::letter::upper::U),
            nom::bytes::complete::tag(raw::letter::upper::V),
            nom::bytes::complete::tag(raw::letter::upper::W),
            nom::bytes::complete::tag(raw::letter::upper::X),
            nom::bytes::complete::tag(raw::letter::upper::Y),
            nom::bytes::complete::tag(raw::letter::upper::Z),
        ))
    ))(input)?;

    Ok((input, result))
}

pub fn alpha(input: &str) -> nom::IResult<&str, &str> {
    nom::branch::alt((
        lower_alpha,
        upper_alpha
    ))(input)
}

pub fn digit(input: &str) -> nom::IResult<&str, &str> {
    nom::branch::alt((
        nom::bytes::complete::tag(raw::number::ONE),
        nom::bytes::complete::tag(raw::number::TWO),
        nom::bytes::complete::tag(raw::number::THREE),
        nom::bytes::complete::tag(raw::number::FOUR),
        nom::bytes::complete::tag(raw::number::FIVE),
        nom::bytes::complete::tag(raw::number::SIX),
        nom::bytes::complete::tag(raw::number::SEVEN),
        nom::bytes::complete::tag(raw::number::EIGHT),
        nom::bytes::complete::tag(raw::number::NINE),
    ))(input)
}

pub fn zero(input: &str) -> nom::IResult<&str, &str> {
    nom::bytes::complete::tag(raw::number::ZERO)(input)
}

pub fn number(input: &str) -> nom::IResult<&str, &str> {
    nom::branch::alt((
        digit,
        zero
    ))(input)
}

pub fn alpha_numeric(input: &str) -> nom::IResult<&str, &str> {
    nom::branch::alt((
        alpha,
        number
    ))(input)
}


#[cfg(test)]
mod tests {
    use crate::symbols::complete::character::*;

    #[test]
    fn test_lower_alpha() {
        let subject = "a";
        let result = lower_alpha(subject);
        assert_eq!(result, Ok(("", subject)))
    }

    #[test]
    fn test_upper_alpha() {
        let subject = "A";
        let result = upper_alpha(subject);
        assert_eq!(result, Ok(("", subject)))
    }

    #[test]
    fn test_alpha() {
        let subject = "A";
        let result = alpha(subject);
        assert_eq!(result, Ok(("", subject)));

        let subject = "a";
        let result = alpha(subject);
        assert_eq!(result, Ok(("", subject)))
    }

    #[test]
    fn test_zero() {
        let subject = "0";
        let result = zero(subject);
        assert_eq!(result, Ok(("", subject)));
    }

    #[test]
    fn test_digit() {
        let subject = "2";
        let result = number(subject);
        assert_eq!(result, Ok(("", subject)));
    }

    #[test]
    fn test_number() {
        let subject = "0";
        let result = number(subject);
        assert_eq!(result, Ok(("", subject)));

        let subject = "4";
        let result = number(subject);
        assert_eq!(result, Ok(("", subject)));
    }
}
