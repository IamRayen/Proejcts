import matrix.Matrix;

public class main{
    public static void main(String[] args) {
        /*
         * Ab hier soll die main-Methode implementiert werden.
         * Methoden aus Matrix.java können mit Matrix.Methodennamen(...) aufgerufen werden.
         */
        int[][] matrixA = {
            {1, 2,},
            {5, 6,},
            {8,10}
        };
        int[][] matrixB = {
            {4, 8, 10, 14},
            {15, 16, 17, 18},            
            {2, 7, 6, 1},
            {5, 6, 5, 1}            
        };
        int[][] matrixC = {            
            {3, 8, 7, 2},
            {4, 5, 4, 0}            
        };
        
        // int[][] transposedMatrix = ;
        Matrix.print(Matrix.transpose(matrixA));
        System.out.println("");
        
        int[][] multipliedMatrixAB = Matrix.mult(matrixA,matrixB);
        Matrix.print(multipliedMatrixAB);
        System.out.println("");
        
        int[][] sumMatrixBB = Matrix.add(matrixB,matrixB);
        Matrix.print(sumMatrixBB);
        System.out.println("");

        int[][] multipliedMatrixAC = Matrix.mult(matrixA,matrixC);
        Matrix.print(multipliedMatrixAC);
    };
}