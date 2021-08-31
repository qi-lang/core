/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

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
