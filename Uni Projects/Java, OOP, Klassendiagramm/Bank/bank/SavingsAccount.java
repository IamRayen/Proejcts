package bank;

//Ab hier soll die Klasse SavingsAccount implementiert werden.

public class SavingsAccount extends Account {
    private double interestRate;

    public SavingsAccount(int accnum, double balance, double interestRate) {
        super(accnum, balance);
        this.interestRate = interestRate;
    }

    public void interest() {
        balance += balance * interestRate;
    }

    @Override
    public void deposit(double amount) {
        if (amount >= 0) {
            balance += amount;
            if (balance < 100.00) {
                balance -= 5.00;
            }
        }
    }
}
