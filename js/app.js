const budgetField = document.getElementById("budget-field");
const expenseTextField = document.getElementById("expense-text");
const expenseAmntField = document.getElementById("expense-amnt");

const budgetTotal = document.getElementById("budget-total");
const expensesTotal = document.getElementById("expenses-total");
const balanceTotal = document.getElementById("balance-total");

const expenseTextList = document.getElementById("expense-titles");
const expenseAmntList = document.getElementById("expense-values");

const calcBtn = document.getElementById("calc-btn");
const addExpenseBtn = document.getElementById("add-expense-btn");

function generateListItem_Text(a) {
    let new_li = document.createElement("li");
    new_li.textContent = a;
    return new_li;
}

function generateListItem_Amnt(a) {
    let new_li = document.createElement("li");
    new_li.textContent = a;
    new_li.setAttribute("id", "expense-value");
    return new_li;
}

calcBtn.addEventListener('click', function(e) {
    let sum = 0;
    
    if(isNaN(budgetField.value) || !budgetField.value) {
        alert("Please enter a number for your budget.")
    }
    else {
        expenseAmntList.querySelectorAll("#expense-value").forEach(function(v) {
            sum += parseFloat(v.innerText);
        });
        
        budgetTotal.textContent = "$" + budgetField.value;
        expensesTotal.textContent = "-$" + sum.toFixed(2);
        balanceTotal.textContent = "$" + (parseFloat(budgetField.value) - sum).toFixed(2);
    }
});

addExpenseBtn.addEventListener('click', function(e) {
    let expenseText = expenseTextField.value;
    let expenseAmnt = expenseAmntField.value;
    let text_li = generateListItem_Text(expenseText);
    let amnt_li = generateListItem_Amnt(expenseAmnt);
    
    if(!expenseText || !expenseAmnt) {
        alert("Please enter both an expense and its amount.");
    }
    else if(isNaN(expenseAmnt)) {
        alert("Please enter a number for the expense amount.");
    }
    else {
        expenseTextList.append(text_li);
        expenseAmntList.append(amnt_li);
    }
});