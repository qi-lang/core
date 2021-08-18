// Copyright Qi Lang 2021. All Rights Reserved.
// Node module: qi-lang-core
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import Kind from '../kind';

class Tuple {
  public readonly _kind = Kind.Tuple;

  public readonly body: Array<any>;

  constructor(body: Array<any>) {
    this.body = body;
  }
}

export default Tuple;
