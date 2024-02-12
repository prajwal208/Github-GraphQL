import React, { useState } from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from './relayEnvironment'; 
import './navbar.css';
import logo from '../images/icon.png';

const query = graphql`
query YourComponentQuery($searchTerm: String!) { // Define your GraphQL query
  search(query: $searchTerm, type: REPOSITORY, first: 10) {
    edges {
      node {
        ... on Repository {
          id
          name
          url
          description
        }
      }
    }
  }
}
`;


function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };



  return (
    <>
      <nav>
        <header>
          <img src={logo} alt='img' className='logo_img' />
          <h1>GitHub Search</h1>
        </header>
        <form>
          <div className='search_component'>
            <input
              type='text'
              placeholder='Type to search'
              value={searchTerm}
              onChange={handleChange}
            />
            <button type='submit'>Search</button>
          </div>
        </form>
      </nav>
      <div className='border'></div>
      <div className='search_result-div'>
        <QueryRenderer
          environment={environment}
          query={query}
          variables={{ searchTerm }}
          render={({ error, props }) => {
            if (error) {
              return <div>Error fetching data</div>;
            }
            return (
              <ul>
                {props.search.edges.map((result, index) => (
                  <li key={index}>
                    <a href={result.node.url}>{result.node.name}</a>
                    <p>{result.node.description}</p>
                  </li>
                ))}
              </ul>
            );
          }}
        />
      </div>
    </>
  );
}

export default Navbar;
