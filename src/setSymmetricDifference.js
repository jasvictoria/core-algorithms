
  const arr1 = [1, 2, 3, 4]
  const arr2 = [2, 4, 6, 8]

export default function setSymmetricDifference(arr1, arr2) {
  let concatArr = arr1.concat(arr2)
  let duplicateArr = concatArr.filter(function(elem, index, array){
    return concatArr.indexOf(elem) !== index;
  })
  let symDiff = concatArr.filter(function(item){
   return duplicateArr.indexOf(item) === -1;
   })
   return symDiff;
 }
  //
  // setSymmetricalDifference (concatArr,duplicateArr)
