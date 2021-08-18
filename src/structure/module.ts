import Kind from './kind';
import Ident from './ident';

class Module {
  public readonly _kind = Kind.Module;

  public readonly ident: Ident;

  // !TODO change to something better
  public readonly body: any;

  constructor(ident:Ident, body: string) {
    this.ident = ident;
    this.body = body;
  }
}

export default Module;
