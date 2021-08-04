
// https://leetcode.com/problems/decompress-run-length-encoded-list/

const decompressRLEList = nums => {
  let result = [];

  for (let i=0; i<nums.length; i+=2) {
    const freq = nums[i];
    const val = nums[i+1];

    for (let j=0; j<freq; ++ j) {
      result.push(val);
    }
  }

  return result;
}

console.log(decompressRLEList([1,2,3,4]))