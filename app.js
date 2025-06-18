let balance = 300000;
let transactions = 0;

function updateUI() {
  document.getElementById("balance").textContent = `$${balance.toLocaleString()}`;
  document.getElementById("transactions").textContent = transactions;
}

function createTransaction() {
  const wallet = document.getElementById("wallet").value.trim();
  const amount = parseFloat(document.getElementById("amount").value);
  const stay = document.getElementById("stay").value.trim();

  if (!wallet || isNaN(amount) || !stay) {
    alert("All fields are required!");
    return;
  }

  if (amount <= 0 || amount > balance) {
    alert("Invalid amount");
    return;
  }

  balance -= amount;
  transactions += 1;
  const confirmationId = crypto.randomUUID();

  updateUI();
  document.getElementById("confirmation").textContent = `Transaction Confirmed. ID: ${confirmationId}`;
}

function cancelTransaction() {
  document.getElementById("wallet").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("stay").value = "";
  document.getElementById("confirmation").textContent = "";
}
