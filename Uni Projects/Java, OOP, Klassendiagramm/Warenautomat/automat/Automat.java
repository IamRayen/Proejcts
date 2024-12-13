package automat;

//Ab hier soll der Automat implementiert werden.

public class Automat {
        private Muenzsystem ms;
        private Ware[] waren;

    public Automat(Muenzsystem ms, Ware[] waren) {
        this.ms = ms;
        this.waren = waren;
    }

    public void getWare() {
        for (Ware ware : waren) {
            System.out.println(ware.toString());
        }
    }

    public boolean select(int id) {
        for (Ware ware : waren) {
            if (ware.getId() == id && ms.buy(ware.getPrice())) {
                return true;
            }
        }
        return false;
    }

    public boolean insertCoin(int coin) {
        return ms.insert(coin);
    }

    public void abort() {
        ms.reset();
    }
}