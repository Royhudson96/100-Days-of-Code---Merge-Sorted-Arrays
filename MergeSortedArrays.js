
function mergeSortedArrays(array1, array2) {
  const mergedArray =[];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //check input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item)
      array1Item = array1[i];
      i++;
    }
    else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));

// [0,3,4,31,4,6,30,31]


function mergeSortedArrays2(arr1, arr2) {
  const mergedArray2 = [];
  arrItem1 = arr1[0];
  arrItem2 = arr2[0];
  i=1;
  j=1;
  
  while(arrItem1 || arrItem2) {
    if(arrItem1 < arrItem2) {
      mergedArray2.push(arrItem1);
      arrItem1 = arr1[i];
      i++;
    }
    else{
      mergedArray2.push(arrItem2);
      arrItem2 = arr2[j];
      j++;
    }
  }
  return mergedArray2;
}

console.log(mergeSortedArrays2([3,4,5,5,6], [5,6,7,8]));