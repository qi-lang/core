/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

//! Important
//  This is not a rendered file. It is meant for visualising a render only.

// Cannot be rendered as there is no definition
// import * as IO from "qilib/io";

let A;
((A) => {
  function hello_0() {
    // Simulated random
    return 23;
  }

  A.hello_0 = hello_0;
})(A || (A = {}));

(function __main___0() {
  const val = A.hello_0();
  if (val > 100) {
    console.log(`Damn. The value of ${val} is big!`);
  } else if (val > 100 && val < 50) {
    console.log(`Damn. The value of ${val} is big!`);
  } else {
    console.log('Meh that\'s a boring number...');
  }
}());
