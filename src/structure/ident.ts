import Kind from './kind';

class Ident {
  public readonly _kind = Kind.Ident;

  public readonly body: string;

  constructor(body: string) {
    this.body = body;
  }
}

export default Ident;
