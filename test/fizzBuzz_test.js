import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'


describe('fizzBuzz()', function(){

  it('should be a function', function(){
    expect(fizzBuzz).to.be.a('function')
  })

  it('returns numbers 1-100 with multiples of three as fizz, multiples of five as buzz, and multiples of both as fizzbuzz )', function(){

    expect(fizzBuzz()[3]).to.equal('Fizz')
    expect(fizzBuzz()[5]).to.equal('Buzz')
    expect(fizzBuzz()[15]).to.equal('FizzBuzz')
    expect(fizzBuzz()[30]).to.equal('FizzBuzz')
    expect(fizzBuzz()[35]).to.equal('Buzz')
    expect(fizzBuzz()[23]).to.equal(23)

    })
  })
