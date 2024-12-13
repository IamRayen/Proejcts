package bank;

//Ab hier soll die Klasse CurrentAccount implementiert werden.

public class CurrentAccount extends Account {
    private double limit;

    public CurrentAccount(int accnum, double balance, double limit) {
        super(accnum, balance);
        this.limit = limit;
    }

    @Override
    public boolean withdraw(double amount) {
        if (amount >= 0 && (balance - amount) >= limit) {
            balance -= amount;
            return true;
        }
        return false;
    }
}