document.addEventListener("DOMContentLoaded", function () {
  // Error handlin
  const okButton = document.getElementById("ok");
  if (okButton) {
    okButton.addEventListener("click", function () {
      error.style.display = "none";
    });
  }

  // Utility Functions
  function getInputById(id) {
    const value = document.getElementById(id)?.value;
    return parseFloat(value);
  }

  function getInnerText(id, value) {
    const element = document.getElementById(id);
    if (element) element.innerText = value;
  }

  function getDisplayProperty(id, display) {
    const element = document.getElementById(id);
    if (element) element.style.display = display;
  }

  function getRemoveInput(id) {
    document.getElementById(id).value = "";
  }

  function getInnerHtml(id, html) {
    const element = document.getElementById(id);
    if (element) element.innerHTML = html;
  }

  // Login Page Script
  if (window.location.href.includes("index.html")) {
    const loginBtn = document.getElementById("login-btn");
    if (loginBtn) {
      loginBtn.addEventListener("click", function (event) {
        event.preventDefault();
        const userNumber = document.getElementById("accountNumber")?.value;
        const userPassword = getInputById("password");

        if (userNumber.length === 11) {
          if (userPassword === 1234) {
            window.location.href = "main.html";
          } else {
            getDisplayProperty("error", "flex");
            getInnerText("error_massage", "Incorrect Password");
          }
        } else {
          getDisplayProperty("error", "flex");
          getInnerText("error_massage", "Incorrect Account Number");
        }
      });
    }
  }
  // Login Page Script
  // Main Page Script
  if (window.location.href.includes("main.html")) {
    const logoutBtn = document.getElementById("log-out");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", function () {
        window.location.href = "index.html";
      });
    }
    // Toggle Button
    const addMoneyBtn = document.getElementById("addMoney");
    if (addMoneyBtn) {
      addMoneyBtn.addEventListener("click", function () {
        getDisplayProperty("add-money", "block");
        getDisplayProperty("cash-out", "none");
        getDisplayProperty("Transefer", "none");
        getDisplayProperty("bonus", "none");
        getDisplayProperty("Paybill", "none");
        getDisplayProperty("Transaction", "none");
      });
    }

    const CashOutBtn = document.getElementById("CashOut");
    if (CashOutBtn) {
      CashOutBtn.addEventListener("click", function () {
        getDisplayProperty("cash-out", "block");
        getDisplayProperty("add-money", "none");
        getDisplayProperty("Transefer", "none");
        getDisplayProperty("bonus", "none");
        getDisplayProperty("Paybill", "none");
        getDisplayProperty("Transaction", "none");
      });
    }
    const TransferMoneyBtn = document.getElementById("TransferMoney");
    if (TransferMoneyBtn) {
      TransferMoneyBtn.addEventListener("click", function () {
        getDisplayProperty("cash-out", "none");
        getDisplayProperty("add-money", "none");
        getDisplayProperty("Transefer", "block");
        getDisplayProperty("bonus", "none");
        getDisplayProperty("Paybill", "none");
        getDisplayProperty("Transaction", "none");
      });
    }
    const GetBonusBtn = document.getElementById("GetBonus");
    if (GetBonusBtn) {
      GetBonusBtn.addEventListener("click", function () {
        getDisplayProperty("cash-out", "none");
        getDisplayProperty("add-money", "none");
        getDisplayProperty("Transefer", "none");
        getDisplayProperty("bonus", "block");
        getDisplayProperty("Paybill", "none");
        getDisplayProperty("Transaction", "none");
      });
    }
    const PayMoneyBtn = document.getElementById("Pay-money");
    if (PayMoneyBtn) {
      PayMoneyBtn.addEventListener("click", function () {
        getDisplayProperty("cash-out", "none");
        getDisplayProperty("add-money", "none");
        getDisplayProperty("Transefer", "none");
        getDisplayProperty("bonus", "none");
        getDisplayProperty("Paybill", "block");
        getDisplayProperty("Transaction", "none");
      });
    }
    const TransactionsBtn = document.getElementById("Transactions");
    if (TransactionsBtn) {
      TransactionsBtn.addEventListener("click", function () {
        getDisplayProperty("cash-out", "none");
        getDisplayProperty("add-money", "none");
        getDisplayProperty("Transefer", "none");
        getDisplayProperty("bonus", "none");
        getDisplayProperty("Paybill", "none");
        getDisplayProperty("Transaction", "block");
      });
    }

    // addmoney js
    const addBtn = document.getElementById("Add-Money");
    if (addBtn) {
      addBtn.addEventListener("click", function (event) {
        event.preventDefault();
        const bankName = document.getElementById("options").value;
        const accountNumber = document.getElementById("account-number").value;
        const amount = getInputById("amount");
        const password = getInputById("password");

        if (
          bankName === "Bkash" ||
          bankName === "Nagad" ||
          bankName === "Rocket"
        ) {
          if (accountNumber.length === 11) {
            if (amount > 0) {
              if (password === 1234) {
                const availbleBlance =
                  document.getElementById("money").innerText;
                const addBlance = parseFloat(availbleBlance) + amount;
                getInnerText("money", addBlance);
                document.getElementById("options").value = "Select";
                getRemoveInput("account-number");
                getRemoveInput("amount");
                getRemoveInput("password");
                getDisplayProperty("error", "flex");
                getInnerText("error_massage", "Successfully added new balance");
              } else {
                getDisplayProperty("error", "flex");
                getInnerText("error_massage", "Incorrect Password");
              }
            } else {
              getDisplayProperty("error", "flex");
              getInnerText("error_massage", "Please Input Valid Amount");
            }
          } else {
            getDisplayProperty("error", "flex");
            getInnerText("error_massage", "Please Input Valid Account Number");
          }
        } else {
          getDisplayProperty("error", "flex");
          getInnerText("error_massage", "Please Select Bank Name");
        }
      });
    }
    // addmoney js
    // cashout js

    const withdrawBtn = document.getElementById("Withdraw");
    if (withdrawBtn) {
      withdrawBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const accountNumber = document.getElementById("Agent-number").value;
        const amount = getInputById("amount-withdrawal");
        const password = getInputById("password-withdrawal");

        if (accountNumber.length === 11) {
          if (amount > 0) {
            if (password === 1234) {
              const availbleBlance = document.getElementById("money").innerText;
              const removeBlance = parseFloat(availbleBlance) - amount;
              getInnerText("money", removeBlance);
              getRemoveInput("Agent-number");
              getRemoveInput("amount-withdrawal");
              getRemoveInput("password-withdrawal");
              getDisplayProperty("error", "flex");
              getInnerText("error_massage", "Successfully withdraw");
            } else {
              getDisplayProperty("error", "flex");
              getInnerText("error_massage", "Incorrect Password");
            }
          } else {
            getDisplayProperty("error", "flex");
            getInnerText("error_massage", "Please Input Valid Amount");
          }
        } else {
          getDisplayProperty("error", "flex");
          getInnerText("error_massage", "Please Input Valid Agent Number");
        }
      });
    }
    // cashout js

    // Transfer js

    const sendBtn = document.getElementById("send");
    if (sendBtn) {
      sendBtn.addEventListener("click", function (event) {
        event.preventDefault();
        const accountNumber = document.getElementById("user-number").value;
        const amount = getInputById("amount-transfer");
        const password = getInputById("password-transfer");

        if (accountNumber.length === 11) {
          if (amount > 0) {
            if (password === 1234) {
              const availbleBlance = document.getElementById("money").innerText;
              const removeBlance = parseFloat(availbleBlance) - amount;
              getInnerText("money", removeBlance);
              getRemoveInput("user-number");
              getRemoveInput("amount-transfer");
              getRemoveInput("password-transfer");
              getDisplayProperty("error", "flex");
              getInnerText("error_massage", "Successfully Transfer Money !!!");
            } else {
              getDisplayProperty("error", "flex");
              getInnerText("error_massage", "Incorrect Password");
            }
          } else {
            getDisplayProperty("error", "flex");
            getInnerText("error_massage", "Please Input Valid Amount");
          }
        } else {
          getDisplayProperty("error", "flex");
          getInnerText(
            "error_massage",
            "Please Input Valid User Account Number"
          );
        }
      });
    }
    // Transfer js

    // bounus
    const bonusBtn = document.getElementById("send-bonus");
    if (bonusBtn) {
      bonusBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const bonus = document.getElementById("bonus-number").value;

        if (bonus === "yesruhul") {
          const availbleBlance = document.getElementById("money").innerText;
          const addBlance = parseFloat(availbleBlance) + 10;
          getInnerText("money", addBlance);
          getRemoveInput("bonus-number");
          getDisplayProperty("error", "flex");
          getInnerText("error_massage", "You get 10 Tk!!!");
        } else {
          getDisplayProperty("error", "flex");
          getInnerText("error_massage", "Please give me a valid coupon code");
        }
      });
    }
    // bounus
  }
});
