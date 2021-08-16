import Kind from './kind';
import Param from './params';

class Lambda {
  public readonly _kind = Kind.Lambda;

  public readonly params: Array<Param>;

  // !TODO change to something better
  public readonly body: any;

  constructor(params: Array<Param>, body: any) {
    this.params = params;
    this.body = body;
  }
}

export default Lambda;
