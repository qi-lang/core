import consola from 'consola';
import { run } from 'parser-ts/code-frame';
import { Underscore } from './parser/symbols';

const res = run(Underscore, '1');
if (res._tag === 'Left') consola.log(res.left);
else consola.log(res.right);
