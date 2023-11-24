const transpose = function (matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) {
    console.error("Invalid input. Please provide a non-empty 2D array.");
    return;
  }

  if (!Array.isArray(matrix[0])) {
    // If the first element is not an array, assume it's a 1D array
    matrix = [matrix];
  }

  let numRows = matrix.length;
  let numColum = matrix[0].length;

  let newarray = new Array(numColum);

  for (let i = 0; i < numColum; i++){
    newarray[i] = new Array(numRows);
  }
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numColum; j++){
      newarray[j][i] = matrix[i][j]
    }

  }
  return newarray;
  };


  module.exports = transpose;