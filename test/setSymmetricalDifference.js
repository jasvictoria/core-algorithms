import { expect } from 'chai'
import setSymmetricDifference from '../src/setSymmetricDifference'


describe('setSymmetricDifference()', function(){

  it('should be a function', function(){
    expect(setSymmetricDifference).to.be.a('function')
  })

     it('Returns the complement of two sets.)', function(){
         const a = [1, 2, 3, 4]
         const b = [2, 4, 6, 8]
      expect(setSymmetricDifference(a,b)).to.eql([2,4])
     })
    })
