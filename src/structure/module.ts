// Copyright Qi Lang 2021. All Rights Reserved.
// Node module: qi-lang-core
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

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
