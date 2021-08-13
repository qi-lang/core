import Kind from '../kind';
import Atom from './atom';

type KeyValue = {
  key: Atom,
  value: any,
}

class Pair {
  public readonly _kind = Kind.Pair;

  // !TODO: change type to something more useful.
  public readonly body: KeyValue;

  constructor(body: KeyValue) {
    this.body = body;
  }
}

export default Pair;
