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
import { Program } from './parser';

const Logger = (p: object | string) => Console.default.log(Util.inspect(p, {
  breakLength: 2,
  colors: true,
  depth: null,
  maxArrayLength: null,
}));

Fs.readFile((Path.normalize('/Users/zana/Desktop/core/examples/main.qi')),
  (err, data) => {
    const res = Program.run(data);

    if (!err) {
      if (res.isError) Logger(res.error);
      else {
        Logger(res.result);
      }

      return;
    }
    throw new Error('');
  });
