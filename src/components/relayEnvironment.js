import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import dotenv from 'dotenv';
dotenv.config();

async function fetchQuery(operation, variables) {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.REACT_APP_AUTHORIZATION_TOKEN,
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });

  return await response.json();
}


const network = Network.create(fetchQuery);


const store = new Store(new RecordSource());


const environment = new Environment({
  network,
  store,
});

export default environment;
