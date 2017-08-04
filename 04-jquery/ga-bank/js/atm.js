// Logic code //////////////////////////////////////////////////////////////////
const bank = {
  checking: 0,
  // Equivalent to:
  // deposit: function (account, amount) {
  deposit(account, amount) {
    this[account] += parseFloat(amount); // Make sure you understand this.
  }
};

// UI/DOM code /////////////////////////////////////////////////////////////////

const render = function () {
  $('#checking-balance').text('$' + bank.checking);
  // All DOM updating code will go here
}

$(document).ready(function () {
  $('#checking-deposit').on('click', function () {
    const amount = $('#checking-amount').val();
    bank.deposit('checking', amount);
    render();
  });
});
