/*
 * This file is not intended for running the application.
 *
 * Another project will be created for running the software and distributing as
 * a binary. Check out Oclif for the CLI.
 */

import * as Fs from 'fs';
import * as Path from 'path';
import * as Console from 'consola';
import Util from 'util';

import * as Parsers from './parser';

const Logger = (i: number, p: object | string) => Console.default.log(
  `${i}:`,
  Util.inspect(p, {
    breakLength: 2,
    colors: true,
    depth: null,
    maxArrayLength: null,
  }),
);

Fs.readFile((Path.normalize('/Users/zana/Desktop/core/examples/main.qi')),
  (err, data) => {
    const res = Parsers.Program.run(data);

    if (!err) {
      if (res.isError) Logger(0, res.error);
      else Logger(0, res.result as any);
      return;
    }

    throw new Error('');
  });

// const s = [
//   'fn x, y, z -> :true end',
//   'fn (x) -> :false end',
// ];

// let index = 0;
// s.forEach((i) => {
//   const p = Parser.Lambda.run(i);

//   if (p.isError) {
//     Console.default.warn('================================');
//   } else {
//     Console.default.log('================================');
//   }

//   if (!p.isError) {
//     Logger(index, p.result as any);
//   } else {
//     Logger(index, p.error);
//   }
//   index += 1;
// });
