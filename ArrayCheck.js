/*Given two arrays of strings, return the number of times each string of the second array appears in the first array.

Example
array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
array2 = ['abc', 'cde', 'uap']

Test.assertDeepEquals(solve(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']), [2, 1, 0]);
Test.assertDeepEquals(solve(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']), [2, 1, 2]);
Test.assertDeepEquals(solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']), [2, 0, 1]);

Parameters: Two arrays
Return: One array

*/

function arrayCheck(array1, array2) {
    let ans = new Array()
    for (let i = 0; i < array2.length; i++) {
      ans.push(array1.filter(word => word == array2[i]).length)
   //   console.log(array1.filter(word => word == array2[i]).length)
    }
    return ans
  }
  //const result = words.filter(word => word.length > 6);
  
  console.log(arrayCheck(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']))
  //Expected [2, 1, 0]
  console.log(arrayCheck(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']))
  //Expected [2, 1, 2]
  console.log(arrayCheck(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']))
  //Expected [2, 0, 1]
  
  //Separator
  console.log('\nMap Solution')
  
  //Got it!!
  const findNumOfAppears = (arr1, arr2) => arr2.map( x => arr1.filter(word => word == x).length)
  
  console.log(findNumOfAppears(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']))
  //Expected [2, 1, 0]
  console.log(findNumOfAppears(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']))
  //Expected [2, 1, 2]
  console.log(findNumOfAppears(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']))
  //Expected [2, 0, 1]