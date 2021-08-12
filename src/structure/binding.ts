import Kind from './kind';
import Base from './base';
import { Ident } from './ident';

export class Binding implements Base {
  public readonly _kind = Kind.Binding;

  public readonly ident: Ident;

  // !TODO: Change any to something more specific
  public readonly body: any;

  public constructor(ident: Ident, body: any) {
    this.ident = ident;
    this.body = body;
  }
}

export function createBinding(ident: Ident, body: any) {
  return new Binding(ident, body);
}
