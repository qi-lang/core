/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

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
