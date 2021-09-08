import * as Arc from 'arcsecond';
import { Helper } from '../helper';
export declare namespace Bool {
    namespace Parser {
        const object: Arc.Parser<any, string, any>;
    }
    namespace Structure {
        export interface IBool extends Helper.Structure.IBase {
            readonly body: boolean;
        }
        class Object implements IBool {
            readonly _kind: Helper.Kind;
            readonly body: boolean;
            constructor(body: boolean);
        }
        export const object: (body: boolean) => Object;
        export {};
    }
}
