/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

//
// namespace Params {
//   const simple = P.sepBy(Spacey(Symbols.Comma))(Spacey(PIdent)
//     .map(
//       (x) => new SParam(x as SIdent, null),
//     ));
//
//   const withParenthesis = P.between(
//     Spacey(Symbols.LeftParenthesis),
//   )(Spacey(Symbols.RightParenthesis))(simple);
//
//   export const options = P.choice([
//     withParenthesis,
//     simple,
//   ]);
// }
//
// const p = P.sequenceOf([
//   P.between(Symbols.Fn)(Symbols.End)(
//     P.sequenceOf([
//       P.takeLeft(P.possibly(Spacey1(Params.options)))(Symbols.RightArrow),
//       Spacey(
//         // Body
//         P.recursiveParser(() => P.many(
//           Spacey(
//             P.choice([
//               PBinding,
//               PBlock,
//               PTypes.Any,
//             ]),
//           ),
//         )),
//       ),
//     ]),
//   ),
// ]);
//
// const Lambda = p.map(
//   (x) => new PLambda(x[0][0], x[0][1]),
// );
//
// export default Lambda;
