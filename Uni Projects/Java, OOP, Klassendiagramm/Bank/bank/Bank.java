package bank;

//Ab hier soll die Klasse Bank implementiert werden.

import bank.Account;
import bank.CurrentAccount;
import bank.SavingsAccount;



public class Bank {
    private static final int MAX_ACCOUNTS = 30;
    private Account[] accounts;
    private int numAccounts;

    public Bank() {
        this.accounts = new Account[MAX_ACCOUNTS];
        this.numAccounts = 0;
    }

    public void update() {
        for (int i = 0; i < numAccounts; i++) {
            Account account = accounts[i];
            if (account instanceof SavingsAccount) {
                ((SavingsAccount) account).interest();
            } else if (account instanceof CurrentAccount && account.getBalance() < 0) {
                System.out.println("Girokonto überzogen: Kontonummer " + account.getAccnum());
            }
        }
    }

    public int open(boolean isSavings) {
        if (numAccounts < MAX_ACCOUNTS) {
            int accnum = numAccounts + 1;
            if (isSavings) {
                accounts[numAccounts] = new SavingsAccount(accnum, 0.0, 0.03);
            } else {
                accounts[numAccounts] = new CurrentAccount(accnum, 0.0, -1000.0);
            }
            numAccounts++;
            return accnum;
        } else {
            System.out.println("Cannot open more accounts. Maximum limit reached.");
            return -1;
        }
    }

    public boolean close(int accnum) {
        for (int i = 0; i < numAccounts; i++) {
            if (accounts[i].getAccnum() == accnum) {
                accounts[i] = accounts[numAccounts - 1];
                accounts[numAccounts - 1] = null; 
                numAccounts--;
                return true;
            }
        }
        return false; 
    }

    public void deposit(int accnum, double amount) {
        for (int i = 0; i < numAccounts; i++) {
            if (accounts[i].getAccnum() == accnum) {
                accounts[i].deposit(amount);
                return;
            }
        }
        System.out.println("Account not found: " + accnum);
    }

    public boolean withdraw(int accnum, double amount) {
        for (int i = 0; i < numAccounts; i++) {
            if (accounts[i].getAccnum() == accnum) {
                return accounts[i].withdraw(amount);
            }
        }
        System.out.println("Account not found: " + accnum);
        return false;
    }

    public int getNumAccounts() {
        return numAccounts;
    }

    public Account getAccount(int index) {
        if (index >= 0 && index < numAccounts) {
            return accounts[index];
        } else {
            return null;
        }
    }
}