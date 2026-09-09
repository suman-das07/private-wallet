function day() {
  const now = new Date();

  let fullFormat = now.toLocaleDateString("en-US", {
    // weekday: "long",
    month: "numeric",
    day: "numeric",
    year: "numeric"
  });

  return fullFormat;
}

function createWallet() {
  let balance = 0;

  let transactionID = 1;

  let transactions = [];

  function addMoney(amount) {
    if (amount < 0 || amount === 0) {
      console.log("Invalid Deposit Amount");
      return;
    }
    // transactionID++;
    balance += amount;
    transactions.push({ id: transactionID++, type: "Deposit", amount: amount, date: day() });
    // console.log(transactions);
  }

  function spendMoney(amount) {
    if (amount < 0 || amount === 0) {
      console.log("Invalid Expense Amount");
      return;
    }
    else if (amount > balance) {
      console.warn("Not enough balance to proceed.");
      return;
    }

    balance -= amount;
    transactions.push({ id: transactionID++, type: "Expense", amount: amount, date: day() });
    // console.log(transactions);
  }

  function getBalance() {
    return balance;
  }

  function getTransaction(type) {
    let filteredExpense = transactions.filter(transaction => transaction.type === type || !type);
    return filteredExpense.map(function (transaction) {
      return {
        id: transaction.id,
        type: transaction.type,
        amount: transaction.amount,
        date: transaction.date,
      };
    });
  }

  function getTotalDeposit() {
    let totalDeposit = transactions.filter(transaction => transaction.type === "Deposit");
    return totalDeposit.reduce((totalAmount, currentValue) => {
      return totalAmount += currentValue.amount;
    }, 0);

  }

  function getTotalExpense() {
    let totalExpense = transactions.filter(transaction => transaction.type === "Expense");
    return totalExpense.reduce((totalAmount, currentValue) => {
      return totalAmount += currentValue.amount;
    }, 0);
  }

  function getSummary() {
    return {
      Total_Deposit: getTotalDeposit(),
      Total_Expense: getTotalExpense(),
      Balance: getBalance()
    }
  }

  function clearWallet() {
    balance = 0;
    transactions.length = 0;
    transactionID = 1;

    return "Wallet Cleared Successfully";
  }

  return {
    addMoney,
    spendMoney,
    getBalance,
    getTransaction,
    getTotalDeposit,
    getTotalExpense,
    getSummary,
    clearWallet
  };
}

const wallet = createWallet();
wallet.addMoney(1000);
wallet.addMoney(2000);
wallet.spendMoney(100);
wallet.spendMoney(500);



console.log(wallet.getTransaction());
console.log(wallet.getTransaction("Deposit"));
console.log(wallet.getTransaction("Expense"));

console.log(wallet.getSummary());

console.log(wallet.clearWallet())

console.log(wallet.getTransaction());
console.log(wallet.getTransaction("Deposit"));
console.log(wallet.getTransaction("Expense"));

console.log(wallet.getSummary());
