/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

use crate::parsers;
use crate::symbols::raw;

#[derive(Debug, PartialEq)]
pub struct Parameters {
    body: Option<Vec<parsers::parameters::single::Parameter>>,
}

// parameters
// a, b, c
// a \\ 1, b \\ 2, c \\ 3
pub fn parse(input: &str) -> nom::IResult<&str, Parameters> {
    todo!()
}

#[cfg(test)]
mod tests {

    #[test]
    fn test() {
        todo!()
    }
}
