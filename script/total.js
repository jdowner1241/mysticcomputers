$(document).ready(function() {

// Get all the rows except for the last two
const allrow = $('.table tbody tr:not(:last-child):not(:nth-last-child(2))');

// Initialize the total cost variable
let allprices = 0;

// Iterate over each row
allrow.each(function() {
  // Get the quantity and price elements for this row
  const amt = $(this).find('.amts').data('value');
  const price = $(this).find('.prices').data('value');

  // Calculate the total cost for this row
  const rowbyprices = Number(amt) * Number(price);

  // Update the total variable
  allprices += rowbyprices;

  // Update the total cost element for this row
  const cost = $(this).find('.total-cost');
  cost.text('$' + rowbyprices.toFixed(2));
});

  // Calculate and display the subtotal and total cost
  const subtotal = allprices.toFixed(2);
  const total = (+subtotal + (+subtotal * 0.15)).toFixed(2);
  $('#subtotal').text('$' + subtotal);
  $('#total').text('$' + total);
  });

