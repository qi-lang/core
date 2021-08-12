import consola from 'consola';
import { Either } from 'fp-ts/lib/Either';
import { run } from 'parser-ts/code-frame';
import * as Parsers from './parser';

function parseAll<P, Q>(result: Either<P, Q>) {
  if (result._tag === 'Left') {
    consola.error('');
    consola.log(result.left);
  } else consola.log(result.right);
}

// parseAll(run(Parsers.Ident, '__main__'));
parseAll(run(Parsers.Binding, 'hi = 2'));
