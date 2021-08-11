import consola from 'consola';
import ident from './parser/ident';

const res = ident('Hello');
consola.log(res);
