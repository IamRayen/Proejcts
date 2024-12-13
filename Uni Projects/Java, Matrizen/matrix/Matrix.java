package matrix;

public class Matrix {
    public static int[][] transpose(int[][] matrix){
        //Hier soll die transpose-Methode implementiert werden.

        int matrixRows = matrix.length;
        int matrixCols = matrix[0].length;

        int[][] transposedMatrix = new int[matrixCols][matrixRows];

        int transposedMatrixRows = transposedMatrix.length;
        int transposedMatrixCols = transposedMatrix[0].length;

        for(int i=0;i < transposedMatrixCols ;++i){
            for(int j=0;j<transposedMatrixRows;++j){
                transposedMatrix[j][i] = matrix[i][j];
            };
        };
        return transposedMatrix;
    }


    public static int[][] add(int[][] A, int[][] B){
        //Hier soll die Additions-Methode implementiert werden.

        int rowsA = A.length;
        int rowsB = B.length;
        int colsA = A[0].length;
        int colsB = B[0].length;

        int[][] newMatrix = new int[rowsA][colsA];

        if(rowsB == rowsA && colsA==colsB){            
            for(int i=0;i<newMatrix.length ;++i){
                for(int j=0;j<newMatrix[0].length;++j){
                    newMatrix[i][j] = A[i][j] + B[i][j];
                };
            };
        }else{
            System.out.println("A und B sollen die gleichen Dimensionen haben");
            int[][] matrix = new int[0][0];
            return matrix;
        }
        return newMatrix;
    }


    public static int[][] mult(int[][] A, int[][] B) {
        //Hier soll die Multiplikations-Methode implementiert werden.
        int m = A.length;
        int n = A[0].length;
        int p = B[0].length;

        int[][] C = new int[m][p];
        
        if(A[0].length == B.length){
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < p; j++) {
                    for (int k = 0; k < n; k++) {
                        C[i][j] += A[i][k] * B[k][j];
                    }
                }
            }}else{
                System.out.println("Zeilen der ersten Matrix und Spalten der zweiten Matrix sollten gleich sein");
                int[][] matrixe = new int[0][0];
                return matrixe;
            }

        return C;
    }
    

    public static void print(int[][] matrix){
        //Hier soll die print-Methode implementiert werden.
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println(); 
        }
    }
}
