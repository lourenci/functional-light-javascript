function unary (fn) {
  return function onlyOneArg (arg) {
    return fn(arg)
  }
}

function identity (arg) {
  return arg
}

function constant (arg) {
  return function argument () {
    return arg
  }
}

module.exports = { unary, identity, constant }
