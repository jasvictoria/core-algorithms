
let collatzSeq = []
export default function collatzConjecture(n) {

  if (n === 1){
    collatzSeq.push(n)
    let newArray = collatzSeq
    collatzSeq = []
    return newArray
  }
   if (n % 2 === 0){
     collatzSeq.push(n)
     return collatzConjecture(n/2)
    }
    if (n % 2 !== 0) {
      collatzSeq.push(n)
       return collatzConjecture((n * 3) + 1)
    }
}
