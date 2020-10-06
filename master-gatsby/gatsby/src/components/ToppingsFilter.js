import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

function countPizzasInToppings(pizzas) {
  // return the pizzas
  // return pizzas
  console.log(pizzas);
  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      // check if this is an existing topping
      const existingTopping = acc[topping.id];
      if (existingTopping) {
        // if it is, increment by 1
        existingTopping.count += 1;
      } else {
        // otherwise create a new entry in our acc and set it to one
        acc[topping.id] = {
          id: topping.id,
          name: topping.name,
          count: 1,
        };
      }
      return acc;
    }, {});

  // sort based on their count
  const sortedToppings = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortedToppings;
}
export default function ToppingsFilter() {
  // Get a list of all the toppings
  // Get a list of all Pizzas with their toppings
  const { toppings, pizzas } = useStaticQuery(graphql`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
          vegetarian
        }
      }
      pizzas: allSanityPizza {
        nodes {
          id
          name
          toppings {
            name
            id
          }
        }
      }
    }
  `);
  console.clear();

  // Count how many pizzas are in each topping
  const toppingsWithCounts = countPizzasInToppings(pizzas.nodes);
  console.log(toppingsWithCounts);
  // Loop over the list of toppings and display the topping and the count of pizzas in that topping
  // Link it up ... .... ....
  return (
    <div>
      <p>Toppings Filter</p>
    </div>
  );
}
