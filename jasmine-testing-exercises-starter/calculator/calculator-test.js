
it('should calculate the monthly rate correctly', function () {
  // I should be 'should calculate the monthly payment correctly'
  const values = {
    amount: 10000,
    years: 30,
    rate: 7
  };
  // tofixed() converts the calculated payment amount to a string with two decimal places
  expect(calculateMonthlyPayment(values)).toEqual('66.53');
});


it("should return a result with 2 decimal places", function () {
  const values = {
    amount: 15000,
    years: 3,
    rate: 9
  };
  expect(calculateMonthlyPayment(values)).toEqual('477.00');
});

it("should handle the decimal numbers for years value", function () {
  const values = {
    amount: 15000,
    years: 3.5,
    rate: 9
  };
  expect(calculateMonthlyPayment(values)).toEqual('417.67');
});

it('should handle terribly low loan amount', function () {
  const values = {
    amount: 1,
    years: 3.5,
    rate: 9
  };
  expect(calculateMonthlyPayment(values)).toEqual('0.03');
});
