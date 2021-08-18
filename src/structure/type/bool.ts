/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import Kind from '../kind';

class Bool {
  public readonly _kind = Kind.Bool;

  public readonly body: boolean;

  constructor(body: boolean) {
    this.body = body;
  }
}

export default Bool;
