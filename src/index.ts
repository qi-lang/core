import * as util from 'util';
import { List, Tuple } from './parser/type';

const res = Tuple.run('(true, false, [])');

if (res.isError) console.log(res.error);
else console.log(res.result);
