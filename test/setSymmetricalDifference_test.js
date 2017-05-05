import { expect } from 'chai'
import setSymmetricDifference from '../src/setSymmetricDifference'


describe('setSymmetricDifference()', function(){

  it('should be a function', function(){
    expect(setSymmetricDifference).to.be.a('function')
  })

     it('Returns the setSymmetricDifference of two sets.)', function(){
       const arr1 = [1, 2, 3, 4]
       const arr2 = [2, 4, 6, 8]
      expect(setSymmetricDifference(arr1, arr2) ).to.eql([1, 3, 6, 8])
     })
     it('Returns the setSymmetricDifference of two sets.)', function(){
       const arr1 = [10, 20, 30, 40]
       const arr2 = [20, 40, 60, 80]
      expect(setSymmetricDifference(arr1, arr2) ).to.eql([10, 30, 60, 80])
     })
    })
