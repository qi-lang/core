import * as Arc from 'arcsecond';
import { Ident } from '../ident';
import { Helper } from '../helper';
export declare namespace Atom {
    namespace Parser {
        const object: Arc.Parser<unknown, string, any>;
    }
    namespace Structure {
        export interface IAtom extends Helper.Structure.IBase {
            readonly body: Ident.Structure.IIdent;
        }
        class Object implements IAtom {
            readonly _kind: Helper.Kind;
            readonly body: Ident.Structure.IIdent;
            constructor(body: Ident.Structure.IIdent);
        }
        export const object: (body: Ident.Structure.IIdent) => Object;
        export {};
    }
}
