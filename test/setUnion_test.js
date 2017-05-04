import { expect } from 'chai'
import setUnion from '../src/setUnion'


describe('setUnion()', function(){

  it('should be a function', function(){
    expect(setUnion).to.be.a('function')
  })

  it('returns the union of two sets)', function(){

    expect(setUnion(a,b)).to.equal([ 1, 2, 3, 4, 6, 8 ])

    })
  })
