/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

pub fn lower_alpha(input: &str) -> nom::IResult<&str, &str> {
    let (input, result) = nom::branch::alt((
        nom::bytes::complete::tag(super::raw::letter::lower::A),
        nom::bytes::complete::tag(super::raw::letter::lower::B),
        nom::bytes::complete::tag(super::raw::letter::lower::C),
        nom::bytes::complete::tag(super::raw::letter::lower::D),
        nom::bytes::complete::tag(super::raw::letter::lower::E),
        nom::bytes::complete::tag(super::raw::letter::lower::F),
        nom::bytes::complete::tag(super::raw::letter::lower::G),
        nom::bytes::complete::tag(super::raw::letter::lower::H),
        nom::bytes::complete::tag(super::raw::letter::lower::I),
        nom::bytes::complete::tag(super::raw::letter::lower::J),
        nom::bytes::complete::tag(super::raw::letter::lower::K),
        nom::bytes::complete::tag(super::raw::letter::lower::L),
        nom::bytes::complete::tag(super::raw::letter::lower::M),
        nom::bytes::complete::tag(super::raw::letter::lower::N),
        nom::bytes::complete::tag(super::raw::letter::lower::O),
        nom::bytes::complete::tag(super::raw::letter::lower::P),
        nom::bytes::complete::tag(super::raw::letter::lower::Q),
        nom::bytes::complete::tag(super::raw::letter::lower::R),
        nom::bytes::complete::tag(super::raw::letter::lower::S),
        nom::bytes::complete::tag(super::raw::letter::lower::T),
        nom::branch::alt((
            nom::bytes::complete::tag(super::raw::letter::lower::U),
            nom::bytes::complete::tag(super::raw::letter::lower::V),
            nom::bytes::complete::tag(super::raw::letter::lower::W),
            nom::bytes::complete::tag(super::raw::letter::lower::X),
            nom::bytes::complete::tag(super::raw::letter::lower::Y),
            nom::bytes::complete::tag(super::raw::letter::lower::Z),
        ))
    ))(input)?;

    Ok((input, result))
}

pub fn upper_alpha(input: &str) -> nom::IResult<&str, &str> {
    let (input, result) = nom::branch::alt((
        nom::bytes::complete::tag(super::raw::letter::upper::A),
        nom::bytes::complete::tag(super::raw::letter::upper::B),
        nom::bytes::complete::tag(super::raw::letter::upper::C),
        nom::bytes::complete::tag(super::raw::letter::upper::D),
        nom::bytes::complete::tag(super::raw::letter::upper::E),
        nom::bytes::complete::tag(super::raw::letter::upper::F),
        nom::bytes::complete::tag(super::raw::letter::upper::G),
        nom::bytes::complete::tag(super::raw::letter::upper::H),
        nom::bytes::complete::tag(super::raw::letter::upper::I),
        nom::bytes::complete::tag(super::raw::letter::upper::J),
        nom::bytes::complete::tag(super::raw::letter::upper::K),
        nom::bytes::complete::tag(super::raw::letter::upper::L),
        nom::bytes::complete::tag(super::raw::letter::upper::M),
        nom::bytes::complete::tag(super::raw::letter::upper::N),
        nom::bytes::complete::tag(super::raw::letter::upper::O),
        nom::bytes::complete::tag(super::raw::letter::upper::P),
        nom::bytes::complete::tag(super::raw::letter::upper::Q),
        nom::bytes::complete::tag(super::raw::letter::upper::R),
        nom::bytes::complete::tag(super::raw::letter::upper::S),
        nom::bytes::complete::tag(super::raw::letter::upper::T),
        nom::branch::alt((
            nom::bytes::complete::tag(super::raw::letter::upper::U),
            nom::bytes::complete::tag(super::raw::letter::upper::V),
            nom::bytes::complete::tag(super::raw::letter::upper::W),
            nom::bytes::complete::tag(super::raw::letter::upper::X),
            nom::bytes::complete::tag(super::raw::letter::upper::Y),
            nom::bytes::complete::tag(super::raw::letter::upper::Z),
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

#[cfg(test)]
mod tests {
    use nom::InputIter;

    #[test]
    fn test_lower_alpha() {
        let subject = "A";
        let result = super::upper_alpha(subject);
        assert_eq!(result, Ok(("", subject)))
    }

    #[test]
    fn test_upper_alpha() {
        let subject = "A";
        let result = super::upper_alpha(subject);
        assert_eq!(result, Ok(("", subject)))
    }

    #[test]
    fn test_alpha() {
        let subject = "A";
        let result = super::alpha(subject);
        assert_eq!(result, Ok(("", subject)));

        let subject = "a";
        let result = super::alpha(subject);
        assert_eq!(result, Ok(("", subject)))
    }
}
