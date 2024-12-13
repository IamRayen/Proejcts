//import automat.Automat; //Diese Stelle auskommentieren, wenn man Automat-Methoden aufrufen bzw Objekte erzeugen möchte

import automat.Automat;
import automat.Muenzsystem;
import automat.Ware;

public class main{
    
    public static void main(String[] args){
        /*
         * Ab hier soll die main-Methode, wie auf dem Aufgabenblatt beschrieben, implementiert werden.
         */
         int[] validCoins = {1, 2, 5, 10, 20, 50, 100, 200};
        Muenzsystem muenzsystem = new Muenzsystem(validCoins);

        Ware[] waren = {
            new Ware(1, "Schokolade", 15),
            new Ware(2, "Chips", 12),
            new Ware(3, "Getränk", 10),
            new Ware(4, "Kaugummi", 50),
            new Ware(5, "Snack", 18)
        };

        Automat automat = new Automat(muenzsystem, waren);

        System.out.println("Verfügbare Waren:");
        automat.getWare();

        // Münzen einwerfen
        automat.insertCoin(5);
        automat.insertCoin(50);
        automat.insertCoin(3); // Ungültige Münze
        automat.insertCoin(200);

        // Alle eingeworfenen Münzen zurückfordern
        automat.abort();

        // Gültige Münzen erneut einwerfen
        automat.insertCoin(20);
        automat.insertCoin(20);
        automat.insertCoin(10);

        // Ware kaufen
        boolean successfulPurchase = automat.select(4);
        if (successfulPurchase) {
            System.out.println("Ware erfolgreich gekauft!");
        } else {
            System.out.println("Ware konnte nicht gekauft werden. Nicht genug Geld eingeworfen.");
        }
    }
}
