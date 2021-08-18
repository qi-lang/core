import * as P from 'arcsecond';
import * as Structures from '../../structure';

// * There should be some way to stop js specific functionality leaking through.
// * Such as "${}"
// TODO: string interpolation should also be added.
const p = P.regex(/^("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/);
const String = p.map(
  (x) => new Structures.String(x.substring(1, x.length - 1)),
);

export default String;
