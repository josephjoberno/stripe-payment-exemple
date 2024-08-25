import React from 'react';
import ReactDOM from 'react-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './components/CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  'pk_test_51OoKUFFkIAlhEt1ncuAPMCkHeqdHXKufE2gRloUflexjQdSGrbUBcvDfftJWRFO5iBPLE3aA0j8VyC3tBl18borc002y9vCxCo'
);

function App() {
  const options = {
    // passing the client secret obtained in step 3
    clientSecret:
      'pi_3PrikTFkIAlhEt1n1oQaBbc7_secret_JG6umUunKDeqrHF7lukIsPeWz',
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}

export default App;
