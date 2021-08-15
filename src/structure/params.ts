import Kind from './kind';
import Ident from './ident';

class Param {
  public readonly _kind = Kind.Param;

  public readonly ident: Ident;

  // !TODO: change any to something useful
  public readonly body: any;

  constructor(ident: Ident, body: any) {
    this.ident = ident;
    this.body = body;
  }
}

export default Param;
