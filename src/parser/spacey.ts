// Copyright Qi Lang 2021. All Rights Reserved.
// Node module: qi-lang-core
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import * as P from 'arcsecond';

const Spacey = (x: P.Parser<any, any, any>) => P.between(
  P.possibly(
    P.whitespace,
  ),
)(P.possibly(
  P.whitespace,
))(x);

export default Spacey;
