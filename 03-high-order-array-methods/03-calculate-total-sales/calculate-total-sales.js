function calculateTotalSalesWithTax(product, tax) {
  const totalSale = product.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const taxAmount = (totalSale * tax) / 100;
  const totalSaleWithTax = totalSale + taxAmount;

  return parseFloat(totalSaleWithTax.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
