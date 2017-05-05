import { expect } from 'chai'
import setUnion from '../src/setUnion'


describe('setUnion()', function(){

  it('should be a function', function(){
    expect(setUnion).to.be.a('function')
  })

     it('Returns the union of two sets.)', function(){
         const a = [1, 2, 3, 4]
         const b = [2, 4, 6, 8]
         console.log(setUnion(a,b))
      expect(setUnion(a,b)).to.eql([1, 2, 3, 4, 6, 8])
     })
     it('Returns the union of two sets.)', function(){
         const a = [100, 200, 300, 400]
         const b = [200, 400, 600, 800]
         console.log(setUnion(a,b))
      expect(setUnion(a,b)).to.eql([100, 200, 300, 400, 600, 800])
     })
    })
