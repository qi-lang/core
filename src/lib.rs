pub mod parsers;
pub mod symbols;

fn parse_from_file<T: std::fmt::Debug>(path: &str, parser: fn(&str) -> nom::IResult<&str, T>) {
    let data = std::fs::read_to_string(&path);

    let data = match data {
        Ok(result) => result.trim().to_string(),
        Err(e) => panic!("{}", e),
    };

    let result = parser(&data);

    match result {
        Ok((_, parsed)) => println!("{:?}", &parsed),
        Err(e) => match e {
            nom::Err::Incomplete(i) => println!("{:?}", i),
            nom::Err::Error(i) => println!("{}", i),
            nom::Err::Failure(i) => println!("{}", i),
        },
    }
}

#[test]
fn test_file() {
    parse_from_file(
        "C:\\Users\\Zana\\Documents\\code\\qi\\core\\playground\\other.qi",
        parsers::atom::parse,
    );
}
