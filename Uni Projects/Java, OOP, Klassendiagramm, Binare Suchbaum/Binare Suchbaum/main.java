import binaryTree.Utility;
import binaryTree.Element;
import binaryTree.Pair;

public class main {
    public static void main(String[] args) {
        Pair[] data = {
                new Pair(3, "Hallo"),
                new Pair(1, "ich"),
                new Pair(4, "bin"),
                new Pair(2, "Labidi"),
                new Pair(5, "Rayen")
        };

        Sort(data);

        Element root = Utility.createBinaryTree(data, 0, data.length);

        System.out.print("Inorder-Ausgabe: ");
        Utility.inorder(root);
        System.out.println();

        System.out.print("Preorder-Ausgabe: ");
        Utility.preorder(root);
        System.out.println();

        System.out.print("Postorder-Ausgabe: ");
        Utility.postorder(root);
        System.out.println();

        System.out.println("Höhe des Baumes: " + Utility.getHeight(root));
    }

    private static void Sort(Pair[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j].compareTo(arr[j + 1]) > 0) {
                    Pair temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}