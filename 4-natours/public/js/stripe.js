/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51I67stJm4haC6Ky2LEKqFSQEsKuveuNnH7F2W5NF9DO8MJFxdzwz4edLut48GDZq8soglGr78ctC6ViFI9d6auve00s54nwngM'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from ExtensionScriptApis
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    // console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
