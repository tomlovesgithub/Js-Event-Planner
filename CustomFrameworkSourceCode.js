const it = (msg, fn) => describe(':\n' + msg, fn)

const describe = (desc, fn) => {
  console.log(desc + ":")
  fn()
}

const passMessage = () => {
  console.log('%c*  ! Yegative !  *', 'color: forestgreen; background: lightgreen')
  return true
}

const failMessage = () => {
  console.log('%c*  xX Negative Xx  *', 'color: red; background: black')
  return false
}

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      passMessage()
    } else {
      failMessage()
    }
  },
  toThrow: (error) => {
    var result = 'fail'
    try {
      exp();
    }
    catch(e) {
      result = 'pass';
    }
    finally {
      if (result === 'pass') {
        passMessage()
      } else {
        failMessage()
      }
    }
  }
})

const expect = (exp) => matchers(exp)
