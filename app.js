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
}
