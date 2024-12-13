package bank;

//Ab hier soll die Klasse Account implementiert werden.

public class Account {
    protected int accnum;
    protected double balance;

    public Account(int accnum, double balance) {
        this.accnum = accnum;
        this.balance = balance;
    }

    public void deposit(double amount) {
        if (amount >= 0) {
            balance += amount;
        }
    }

    public double getBalance() {
        return balance;
    }

    public boolean withdraw(double amount) {
        if (amount >= 0 && balance >= amount) {
            balance -= amount;
            return true;
        }
        return false;
    }

    public int getAccnum() {
        return accnum;
    }
}