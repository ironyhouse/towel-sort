
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix==undefined) return [];

  let resArr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0 ) {
      resArr = resArr.concat(matrix[i]);
    } else {
      matrix[i] = matrix[i].reverse();
      resArr = resArr.concat(matrix[i]);
    }
  }
  return resArr;
}
