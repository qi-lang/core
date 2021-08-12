import Kind from '../kind';

class Atom {
  public readonly _kind = Kind.Atom;

  public readonly body: string;

  constructor(body: string) {
    this.body = body;
  }
}

export default Atom;
