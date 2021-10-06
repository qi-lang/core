/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

pub mod parsers;
pub mod symbols;

pub fn parse_from_file<T: std::fmt::Debug>(
    path: &str,
    parser: fn(&str) -> nom::IResult<&str, T>,
) -> T {
    let data = std::fs::read_to_string(&path);

    let data = match data {
        Ok(result) => result.trim().to_string(),
        Err(e) => panic!("{}", e),
    };

    let result = parser(&data);

    match result {
        Ok((_, product)) => product,
        Err(e) => match e {
            nom::Err::Incomplete(i) => panic!("{:?}", i),
            nom::Err::Error(i) => panic!("{}", i),
            nom::Err::Failure(i) => panic!("{}", i),
        },
    }
}

pub fn parse_from_str<T>(input: &str, parser: fn(&str) -> nom::IResult<&str, T>) -> T {
    let result = parser(input);
    match result {
        Ok((_, product)) => product,
        Err(e) => match e {
            nom::Err::Incomplete(i) => panic!("{:?}", i),
            nom::Err::Error(i) => panic!("{}", i),
            nom::Err::Failure(i) => panic!("{}", i),
        },
    }
}
