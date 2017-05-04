import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'


describe('isPalindrome()', function(){

  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })

  it('returns true for strings that are palindromes and false for strings that are not )', function(){

    expect(isPalindrome('A man, a plan, a canal: Panama')).to.equal(true)
    expect(isPalindrome('radar')).to.equal(true)
    expect(isPalindrome('palindrome')).to.equal(false)
    expect(isPalindrome('wow')).to.equal(true)
    expect(isPalindrome('hannah')).to.equal(true)
    expect(isPalindrome('learnersguild')).to.equal(false)

    })
  })
