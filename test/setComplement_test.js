import { expect } from 'chai'
import setComplement from '../src/setComplement'


describe('setComplement()', function(){

  it('should be a function', function(){
    expect(setComplement).to.be.a('function')
  })

     it('Returns the complement of two sets.)', function(){
         const a = [1, 2, 3, 4]
         const b = [2, 4, 6, 8]
      expect(setComplement(a,b)).to.eql([6,8])
     })
     it('Returns the complement of two sets.)', function(){
         const a = [112, 212, 312, 412]
         const b = [212, 412, 621, 821]
      expect(setComplement(a,b)).to.eql([621,821])
     })
    })
