//object with owner name and balance with get balance with getter and setter 

const account = {
    owner: "John",
    balance: 1000,
    
    get balance() {
      return `Balance: $${this.balance}`;
    },
  
    set balance(amount) {
      if (amount < 0) {
        console.log("Invalid balance!");
      } else {
        this.balance = amount;
      }
    }
  };
  
  console.log(account.balance); 
  account.balance = 500;
  console.log(account.balance); 
  account.balance = -200; 
  

