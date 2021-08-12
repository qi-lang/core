import consola from 'consola';
import { Either } from 'fp-ts/lib/Either';
import { run } from 'parser-ts/code-frame';
import * as FS from 'fs';
import * as Path from 'path';
import * as Parsers from './parser';

function runner(path: string) {
  function result<P, Q>(object: Either<P, Q>) {
    if (object._tag === 'Left') {
      consola.error('');
      consola.log(object.left);
    } else consola.log(object.right);
  }

  FS.readFile(Path.normalize(path), 'utf-8', (err, data) => {
    if (err) throw err;
    result(run(Parsers.Binding, data.toString()));
  });
}

runner('./examples/main.qi');
