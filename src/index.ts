import * as Fs from 'fs';
import * as Path from 'path';
import * as Console from 'consola';
import Util from 'util';
import { List } from './parser/type';

const Logger = (p: object | string) => Console.default.log(Util.inspect(p, {
  compact: false, breakLength: 2, colors: true, depth: null,
}));

Fs.readFile((Path.normalize('/Users/zana/Desktop/core/examples/main.qi')),
  (err, data) => {
    const res = List.run(data);

    if (!err) {
      if (res.isError) Logger(res.error);
      else Logger(res.result);
      return;
    }
    throw new Error('');
  });
