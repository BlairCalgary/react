class Account {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    display() {
        return this.balance;
    }
    deposit(dep) {
        this.balance+=Number(dep);
    }
    withdraw(withdrawal) {
        this.balance-=Number(withdrawal);
    }
}

export default Account;
