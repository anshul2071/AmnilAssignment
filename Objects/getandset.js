const account = {
  owner: "Tripti",
  _balance: 1000,
  
  get balance() {
    return `Balance: $${this._balance}`;
  },

  set balance(amount) {
    if (amount < 0) {
      console.log("Invalid balance!");
    } else {
      this._balance = amount;
    }
  }
};

console.log(account.balance); 
account.balance = 500;
console.log(account.balance); 
account.balance = -200; 
