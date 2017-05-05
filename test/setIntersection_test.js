import { expect } from 'chai'
import setIntersection from '../src/setIntersection'


describe('setIntersection()', function(){

  it('should be a function', function(){
    expect(setIntersection).to.be.a('function')
  })

     it('Returns the complement of two sets.)', function(){
         const a = [1, 2, 3, 4]
         const b = [2, 4, 6, 8]
      expect(setIntersection(a,b)).to.eql([2,4])
     })
     it('Returns the complement of two sets.)', function(){
         const a = [11, 21, 31, 41]
         const b = [21, 41, 61, 81]
      expect(setIntersection(a,b)).to.eql([21,41])
     })
    })
