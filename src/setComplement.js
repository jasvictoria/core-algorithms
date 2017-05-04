const a = [1, 2, 3, 4]
const b = [2, 4, 6, 8]

export default function setComplement(arr1,arr2) {
   let result = arr2.filter(function(item) {
     return arr1.indexOf(item) === -1
   })
   return result
}

setComplement(a,b)
