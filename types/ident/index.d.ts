import * as Arc from 'arcsecond';
import { Helper } from '../_helpers';
export declare namespace Ident {
    namespace Parser {
        const object: Arc.Parser<string | any[] | Structure.Object, string, any>;
    }
    namespace Structure {
        interface IIdent extends Helper.Structure.IBase {
            readonly body: String;
        }
        class Object implements IIdent {
            readonly _kind = Helper.Kind.Ident;
            readonly body: String;
            constructor(body: String);
        }
        const object: (body: String) => Object;
    }
}
