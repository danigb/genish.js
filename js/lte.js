'use strict'

/**
 * Returns 1 if `a` is lesser or equal than `b`, otherwise returns 0
 *
 * __Category:__ comparison
 * @name lte
 * @function
 * @param {(ugen|number)} a - one element to compare
 * @param {(ugen|number)} b - other element to compare
 * @return {ugen}
 */

let gen  = require('./gen.js')

let proto = {
  name:'lte',

  gen() {
    let out,
        inputs = gen.getInputs( this )

    out = `  var ${this.name} = `

    if( isNaN( this.inputs[0] ) || isNaN( this.inputs[1] ) ) {
      out += `( ${inputs[0]} <= ${inputs[1]} | 0  )`
    } else {
      out += inputs[0] <= inputs[1] ? 1 : 0
    }
    out += '\n'

    gen.memo[ this.name ] = this.name

    return [this.name, out]

    return out
  }
}

module.exports = (x,y) => {
  let lt = Object.create( proto )

  lt.inputs = [ x,y ]
  lt.name = 'lte' + gen.getUID()

  return lt
}
