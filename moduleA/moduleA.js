const mod = require('../moduleB/moduleB');

require.resolve('moduleA');

const moduleA = {}

module.exports=  moduleA;
