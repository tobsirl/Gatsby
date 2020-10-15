import React from 'react';
import Img from 'gatsby-image';
import MenuItemStyles from '../styles/MenuItemStyles';

export default function PizzaOrder({ order, pizzas, removeFromOrder }) {
  return (
    <>
      {order.map((singleOrder, index) => {
        const pizza = pizzas.find((el) => el.id === singleOrder.id);
        return (
          <MenuItemStyles key={singleOrder.id}>
            <h2>{singleOrder.id}</h2>
            <Img fluid={pizza.image.asset.fluid} />
          </MenuItemStyles>
        );
      })}
    </>
  );
}
