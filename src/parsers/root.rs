/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licen ident: todo!(), body: todo!()  ident: todo!(), body: todo!()  ident: todo!(), body: todo!() sed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */


use crate::parsers;

#[derive(Debug, PartialEq)]
pub struct Root {
    pub body: Option<Vec<RootBody>>,
}

#[derive(Debug, PartialEq)]
pub enum RootBody {
    Module(parsers::module::Module),
    Definition(parsers::definition::Definition),
}

pub fn parse(input: &str) -> nom::IResult<&str, Root> {
    unimplemented!()
}

#[cfg(test)]
mod tests {
    use core::panic;

    use crate::parsers::root;
    use crate::parsers::module;
    use crate::parsers::ident;
    use crate::parsers::definition;

    #[test]
    fn test_root_has_module() {
        let input = "mod A do end";
        let result = root::parse(input);
        
        match result {
            Ok((_, product)) => assert_eq!(product, root::Root {
                body: Some(
                    vec![
                        root::RootBody::Module(module::Module {
                            ident: ident::Ident { 
                                body: "A".to_string()
                            },
                            body: None,
                        })
                    ]
                )
            }),
            Err(e) => match e {
                nom::Err::Incomplete(i) => panic!("{:?}", i),
                nom::Err::Error(i) => panic!("{:?}", i),
                nom::Err::Failure(i) => panic!("{:?}", i),
            },
        }
    }

    #[test]
    fn test_root_has_definition() {
        let input = "def hello do end";
        let result = root::parse(input);
        
        match result {
            Ok((_, product)) => assert_eq!(product, root::Root {
                body: Some(
                    vec![
                        root::RootBody::Definition(definition::Definition {
                            ident: ident::Ident { 
                                body: "hello".to_string()
                            },
                            params: None,
                            body: None,
                        })
                    ]
                )
            }),
            Err(e) => match e {
                nom::Err::Incomplete(i) => panic!("{:?}", i),
                nom::Err::Error(i) => panic!("{:?}", i),
                nom::Err::Failure(i) => panic!("{:?}", i),
            },
        }
    }
}