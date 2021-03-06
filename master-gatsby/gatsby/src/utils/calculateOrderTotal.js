import calculatePizzaPrice from './calculatePizzaPrice';

export default function calculateOrderTotal(order, pizzas) {
  // 1. Loop over every item in the pizzas
  return order.reduce((runningTotal, singleOrder) => {
    const pizza = pizzas.find((el) => el.id === singleOrder.id);
    return runningTotal + calculatePizzaPrice(pizza.price, singleOrder.size);
  }, 0);

  // 2. Calc the total for that pizza
  // 3. add that total to the running total
}
