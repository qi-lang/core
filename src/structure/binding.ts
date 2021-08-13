import Ident from './ident';
import Kind from './kind';

class Binding {
  public readonly _kind = Kind.Binding;

  public readonly ident: Ident;

  // !TODO: change any to something more specific
  public readonly body: any;

  constructor(ident: Ident, body: any) {
    this.ident = ident;
    this.body = body;
  }
}

export default Binding;
