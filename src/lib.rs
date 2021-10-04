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
        Ok((_, parsed)) => parsed,
        Err(e) => match e {
            nom::Err::Incomplete(i) => panic!("{:?}", i),
            nom::Err::Error(i) => panic!("{}", i),
            nom::Err::Failure(i) => panic!("{}", i),
        },
    }
}
