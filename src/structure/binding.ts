import Ident from './ident';
import Kind from './kind';

class Binding {
  public readonly _kind = Kind.Binding;

  public readonly ident: Ident;

  public readonly body: string;

  constructor(ident: Ident, body: string) {
    this.ident = ident;
    this.body = body;
  }
}

export default Binding;
