package binaryTree;

public class Pair implements Comparable {
    int key;
    String val;

    public Pair(int key, String val) {
        this.key = key;
        this.val = val;
    }

    @Override
    public int compareTo(Pair pair) {
        return Integer.compare(this.key, pair.key);
    }
}
