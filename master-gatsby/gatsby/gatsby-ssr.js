import React from 'react';
import Layout from './src/components/Layout';
import { OrderProvider } from './src/components/OrderContext';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

// If you state to stay you have to wrap the root element
export function wrapRootElement({ element }) {
  return <OrderProvider>{element}</OrderProvider>;
}
