/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

pub mod parsers;
pub mod symbols;

// fn measure_execution_time(repeat: u64, parser: fn(&str) -> nom::IResult) {
//     let mut average_execution_time = 0 as f64;
//     let parser = qi_core::parsers::tuple::parse;

//     for _c in 0..repeat {
//         let start = std::time::Instant::now();
//         qi_core::parse_from_file("./playground/other.qi");
//         average_execution_time += start.elapsed().as_secs_f64();
//     }

//     average_execution_time = average_execution_time / repeat as f64;

//     println!(
//         "The average execution time is {} seconds\nRepeated {} times.\n",
//         average_execution_time, repeat
//     );

//     println!(
//         "Result: {:#?}",
//         qi_core::parse_from_file("./playground/other.qi", qi_core::parsers::tuple::parse)
//     )
// }

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
