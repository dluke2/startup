var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

var counter = function () {
  var counter = 0;
  return function () {
    counter++;
    return counter;
  };
}();


function getNewExpenseElement() {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  var expenseNumber = counter();
  var element = document.createElement('tr');
  var date = new Date();
  element.classList.add('expense');
  element.id = 'expense-' + expenseNumber;
  element.innerHTML = `
    <td contenteditable="true">Expense ${expenseNumber}</td>
    <td contenteditable="true" class="expense-payer" id="expense-payer-${expenseNumber}">Payer ${expenseNumber}</td>
    <td contenteditable="true" class="dollar-value expense-amount" id="expense-amount-${expenseNumber}"></td>
    <td contenteditable="true">${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}</td>
    <td contenteditable="true"></td>
    <td class="delete-expense-button" id="delete-expense-${expenseNumber}"></td>
  `;
  return element;
}

function getNewBreakdownElement(text) {
  var element = document.createElement('p');
  element.classList.add('breakdown-line');
  element.innerHTML = text;
  return element;
}

ready(() => {
  var total = 0;
  var payersAndValues = new Map();

  function updateCosts() {
    total = 0;
    payersAndValues = new Map();
    for (let expense of document.querySelectorAll('.expense')) {
      var amount = parseFloat(expense.querySelector('.expense-amount').textContent);
      if (isNaN(amount)) {
        amount = 0;
      }
      var payer = expense.querySelector('.expense-payer');
      total += amount;
      if (!payersAndValues.has(payer.textContent)) {
        payersAndValues.set(payer.textContent, amount);
      } else {
        var existingValue = payersAndValues.get(payer.textContent);
        payersAndValues.set(payer.textContent, existingValue + amount);
      }
    }
    document.querySelector('#total-cost').textContent = (isNaN(total) ? "Make sure your amounts are all numbers" : Math.round((total + Number.EPSILON)*100)/100);
    document.querySelector('#per-person-cost').textContent = (isNaN(total) ? "Make sure your amounts are all numbers" : Math.round(((total/payersAndValues.size) + Number.EPSILON)*100)/100);

    for (let line of document.querySelectorAll('.breakdown-line')) {  
      line.remove();
    }

    var average = total / payersAndValues.size;
    console.log(payersAndValues);
    for (let key of payersAndValues.keys()) {
      var value = payersAndValues.get(key);
      console.log(value);
      var string = key + ' needs to ' + ((average > value) ? 'give $' : 'receive $') + Math.abs(Math.round(((average - value)+Number.EPSILON)*100)/100);
      document.querySelector('#cost-breakdown').appendChild(getNewBreakdownElement(string));
    }
    document.querySelector('#participant-number').textContent = payersAndValues.size;
  }

  document.querySelector('#expenses').appendChild(getNewExpenseElement());
  document.querySelector('#expenses').addEventListener("input", function (e) {
    if (e.target.classList.contains('expense-amount') || e.target.classList.contains('expense-payer')) {
      updateCosts();
    }
  });

  document.querySelector('#expenses').addEventListener("click", function (e) {
    if (e.target.classList.contains('delete-expense-button')) {
      document.getElementById('expense-' + e.target.id.charAt(e.target.id.length - 1)).remove();
      updateCosts();
    }
  });
  document.querySelector('#add-expense-button').addEventListener('click', function () {
    document.querySelector('#expenses').appendChild(getNewExpenseElement());
    updateCosts();
  });
});