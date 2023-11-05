function calculateTotalSalesWithTax(products, tax) {
  //loop thru products array
  // map price * quantity
  // reduce total and sum
  // return the high order method array * tax

  const sale = products.map((item) => item.price * item.quantity).reduce((total, sum) => total + sum, 0);
  // console.log(sale, tax);

  const taxAmount = (sale * tax) / 100;

  return sale + taxAmount;
}

module.exports = calculateTotalSalesWithTax;
