import { expect } from 'chai'
import collatzConjecture from '../src/collatzConjecture'


describe('collatzConjecture()', function(){

  it('should be a function', function(){
    expect(collatzConjecture).to.be.a('function')
  })

  describe('collatzConjecture()', function(){
   it('returns the Collatz sequence for 10 )', function(){
    expect(collatzConjecture(10)).to.eql([ 10, 5, 16, 8, 4, 2, 1 ])
   })
  })

  describe('collatzConjecture()', function(){
  it('returns the Collatz sequence for 17 )', function(){
    expect(collatzConjecture(7)).to.eql([7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1 ])
   })
  })

  describe('collatzConjecture()', function(){
  it('returns the Collatz sequence for 70 )', function(){
    expect(collatzConjecture(70)).to.eql([70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1 ])
  })
 })

describe('collatzConjecture()', function(){
  it('returns the Collatz sequence for 17 )', function(){
    expect(collatzConjecture(17)).to.eql([ 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1 ])
  })
 })

})
