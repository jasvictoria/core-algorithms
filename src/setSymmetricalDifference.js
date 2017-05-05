
  const a = [1, 2, 3, 4]
  const b = [2, 4, 6, 8]
  let concatArr = a.concat(b)
  let duplicateArr = concatArr.filter(function(elem, index, array){
  return concatArr.indexOf(elem) !== index;
  })

export default function setSymmetricDifference(arr1, arr2) {
  let symDiff = concatArr.filter(function(item){
   return duplicateArr.indexOf(item) === -1;
   })
   return symDiff;
 }

  setSymmetricalDifference (concatArr,duplicateArr)
