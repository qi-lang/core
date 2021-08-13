import Kind from '../kind';

class Pair {
  public readonly _kind = Kind.Pair;

  // !TODO: change type to something more useful.
  public readonly body: Array<[any, any]>;

  constructor(body: Array<[any, any]>) {
    this.body = body;
  }
}

export default Pair;
