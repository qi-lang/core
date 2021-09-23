import * as Arc from 'arcsecond';
import { Atom } from '../atom';
import { Helper } from '../../_helpers';
export declare namespace Iterable {
    namespace Template {
        namespace Parser {
            const object: Arc.Parser<unknown[], string, any>;
        }
        namespace Structure {
            interface IIterable extends Helper.Structure.IBase {
                readonly body: Array<any>;
            }
        }
    }
    namespace List {
        namespace Parser {
            const object: Arc.Parser<unknown, string, any>;
        }
        namespace Structure {
            class Object implements Iterable.Template.Structure.IIterable {
                readonly _kind: Helper.Kind;
                readonly body: Array<any>;
                constructor(body: Array<any>);
            }
            export const object: (body: Array<any>) => Object;
            export {};
        }
    }
    namespace Map {
        namespace Parser {
            const object: Arc.Parser<unknown, string, any>;
        }
        namespace Structure {
            export namespace Pair {
                export interface IPair extends Helper.Structure.IBase {
                    readonly key: Atom.Structure.IAtom;
                    readonly value: any;
                }
                class Object implements IPair {
                    readonly _kind: Helper.Kind;
                    readonly key: Atom.Structure.IAtom;
                    readonly value: any;
                    constructor(key: Atom.Structure.IAtom, value: any);
                }
                export const object: (key: Atom.Structure.IAtom, value: any) => Object;
                export {};
            }
            export interface IMap extends Iterable.Template.Structure.IIterable {
                readonly body: Array<Pair.IPair>;
            }
            class Object implements IMap {
                readonly _kind: Helper.Kind;
                readonly body: Array<Pair.IPair>;
                constructor(body: Array<Pair.IPair>);
            }
            export const object: (body: Array<Pair.IPair>) => Object;
            export {};
        }
    }
    namespace Tuple {
        namespace Parser {
            const object: Arc.Parser<unknown, string, any>;
        }
        namespace Structure {
            export interface ITuple extends Iterable.Template.Structure.IIterable {
                readonly body: Array<any>;
            }
            class Object implements ITuple {
                readonly _kind: Helper.Kind;
                readonly body: Array<any>;
                constructor(body: Array<any>);
            }
            export const object: (body: Array<any>) => Object;
            export {};
        }
    }
}
