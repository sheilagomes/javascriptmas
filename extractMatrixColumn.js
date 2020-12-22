function extractMatrixColumn(matrix, column) {
    const finalResult = [];
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i][column]);
        // finalResult.push(matrix[i][column]);
    }
    return finalResult;
}