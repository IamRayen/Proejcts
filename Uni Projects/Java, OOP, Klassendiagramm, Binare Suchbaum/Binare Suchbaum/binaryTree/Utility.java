package binaryTree;


public class Utility {

    public static Element createBinaryTree(Pair[] data, int left, int right) {
        if (left == right) {
            return null;
        }

        int m = (int) (left + right) / 2;
        Element root = new Element(data[m].key, data[m].val);

        root.left = createBinaryTree(data, left, m);
        if (root.left != null) {
            root.left.parent = root;
        }

        root.right = createBinaryTree(data, m + 1, right);
        if (root.right != null) {
            root.right.parent = root;
        }

        return root;
    }

    public static void inorder(Element root) {
        if (root != null) {
            inorder(root.left);
            System.out.print(root.val + " ");
            inorder(root.right);
        }
    }

    public static void preorder(Element root) {
        if (root != null) {
            System.out.print(root.val + " ");
            preorder(root.left);
            preorder(root.right);
        }
    }

    public static void postorder(Element root) {
        if (root != null) {
            postorder(root.left);
            postorder(root.right);
            System.out.print(root.val + " ");
        }
    }

    public static int getHeight(Element root) {
        if (root == null) {
            return 0;
        }

        int leftHeight = getHeight(root.left);
        int rightHeight = getHeight(root.right);

        return 1 + Math.max(leftHeight, rightHeight);
    }
}