package automat;

//Ab hier soll das Muenzsystem implementiert werden

public class Muenzsystem {
   private int[] validCoins;
    private int[] insertedCoins;
    private int[] currentCoins;

    public Muenzsystem(int[] validCoins) {
        this.validCoins = validCoins;
        this.insertedCoins = new int[validCoins.length];
        this.currentCoins = new int[validCoins.length];
    }

    public boolean insert(int coin) {
        for (int i = 0; i < validCoins.length; i++) {
            if (coin == validCoins[i]) {
                insertedCoins[i]++;
                currentCoins[i]++;
                return true;
            }
        }
        return false;
    }

    public void reset() {
        for (int i = 0; i < validCoins.length; i++) {
            currentCoins[i] = 0;
            insertedCoins[i] = 0;
        }
    }

    public boolean buy(int price) {
        int totalInserted = 0;
        for (int i = 0; i < validCoins.length; i++) {
            totalInserted += validCoins[i] * insertedCoins[i];
        }
        if (totalInserted >= price) {        
            return true;
        } else {
            return false;
        }
    }
}
