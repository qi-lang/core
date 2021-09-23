import * as Arc from 'arcsecond';
export declare namespace Helper {
    enum Kind {
        Ident = 0,
        String = 1,
        Number = 2,
        Atom = 3,
        Bool = 4,
        List = 5,
        Tuple = 6,
        Pair = 7,
        Map = 8
    }
    namespace Structure {
        interface IBase {
            readonly _kind: Kind;
        }
    }
    namespace Spacing {
        const between: (input: Arc.Parser<any>) => Arc.Parser<unknown, string, any>;
        const between1: (input: Arc.Parser<any>) => Arc.Parser<unknown, string, any>;
        const left: (input: Arc.Parser<any>) => Arc.Parser<unknown, string, any>;
        const right: (input: Arc.Parser<any>) => Arc.Parser<any, string, any>;
        const left1: (input: Arc.Parser<any>) => Arc.Parser<unknown, string, any>;
        const right1: (input: Arc.Parser<any>) => Arc.Parser<unknown, string, any>;
    }
}
