import { expect } from 'chai'
import setComplement from '../src/setComplement'


describe('setComplement()', function(){

  it('should be a function', function(){
    expect(setComplement).to.be.a('function')
  })

     it.only('Returns the union of two sets.)', function(){
         const a = [1, 2, 3, 4]
         const b = [2, 4, 6, 8]
         console.log(setComplement(a,b))
      expect(setComplement(a,b)).to.eql([6, 8])
     })
    })
