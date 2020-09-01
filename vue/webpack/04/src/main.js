const { add, mul } = require('./js/mathUtil.js');
import { name, age } from './js/info.js';
console.log(add(20, 30));
console.log(mul(20, 30));
console.log(name, age);

// 依赖css文件
require('./css/normal.css');