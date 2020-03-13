import Account from './account.js';

const account = new Account('chq', 25);

test('test the construtor', () => {
    expect(account.name).toBe('chq');
    expect(account.balance).toBe(25);
});

test('display name and balance', () => {
    expect(account.display()).toBe(25);
});

test('does deposit increment balance?', () => {
    account.deposit(10);
    expect(account.balance).toBe(35);
    account.deposit(10);
    expect(account.balance).toBe(45);
});

test('does withdraw decrement balance?', () => {
    account.withdraw(10);
    expect(account.balance).toBe(35);
    account.withdraw(10);
    expect(account.balance).toBe(25);
})
console.log(account);