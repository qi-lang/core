/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

pub struct Root {
    body: Option<Vec<RootBody>>,
}

pub enum RootBody {}

pub fn parse(input: &str) -> nom::IResult<&str, Root> {
    unimplemented!()
}
