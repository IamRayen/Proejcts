//import bank.Bank; //Diese Stelle auskommentieren, wenn man Bank-Methoden aufrufen bzw Objekte erzeugen möchte

import bank.Bank;
import bank.Account;

public class main {
    public static void main(String[] args) {
        Bank bank = new Bank();

        // Eröffnen Sie 20 Konten verschiedener Typ
        for (int i = 0; i < 10; i++) {
            bank.open(true); // SavingsAccount
            bank.open(false); // CurrentAccount
        }

        // Operationen dreimal ausführen
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < bank.getNumAccounts(); j++) {
                // Übertrage einen Betrag auf jedes Konto
                double transferAmount = Math.random() * 500;
                bank.deposit(bank.getAccount(j).getAccnum(), transferAmount);

                // Versuchen, von jedem Konto einen zufälligen Betrag abzuheben
                double withdrawalAmount = Math.random() * 300;
                bank.withdraw(bank.getAccount(j).getAccnum(), withdrawalAmount);
            }

            // Die Konten aktualisieren
            bank.update();
        }

        // Mindestens ein Konto schließen
        if (bank.getNumAccounts() > 0) {
            int accnumToClose = bank.getAccount(0).getAccnum();
            bank.close(accnumToClose);
            System.out.println("Account " + accnumToClose + " closed.");
        }
    }
}
