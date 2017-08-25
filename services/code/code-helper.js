const vm = require('vm');
const assert = require('assert');
const expect = require('chai').expect;
const checkError = require('check-error');


let codeEval = (req, res, next) => {
    let result;
    let code = req.body.code;

    const sandbox = { assert: assert, expect: expect, checkError: checkError };
    vm.createContext(sandbox);
    try {
        result = vm.runInContext(code, sandbox);
        res.locals.ref = result;  
    } catch (e) {
        result = checkError.getMessage(e);
        res.locals.ref = result;
    }
    next();
}

module.exports = { codeEval };




