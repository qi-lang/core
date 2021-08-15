import Kind from './kind';
import Ident from './ident';
import Param from './params';

class Function {
  public readonly _kind = Kind.Function;

  public readonly ident: Ident;

  public readonly params: Array<Param>;

  // !TODO change to something better
  public readonly body: any;

  constructor(ident:Ident, params: Array<Param>, body: any) {
    this.ident = ident;
    this.params = params;
    this.body = body;
  }
}

export default Function;
