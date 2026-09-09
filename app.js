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
}
