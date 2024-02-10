import React, { useState } from 'react';
import axios from 'axios';
import './navbar.css';
import logo from '../images/icon.png';
import dotenv from 'dotenv';
dotenv.config();


export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    
    if (value === '') {
      setSearchResults([]);
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'https://api.github.com/graphql',
        {
          query: `
            query {
              search(query: "${searchTerm}", type: REPOSITORY, first: 10) {
                edges {
                  node {
                    ... on Repository {
                      name
                      url
                      description
                    }
                  }
                }
              }
            }
          `
        },
        {
          headers: {
            Authorization: process.env.REACT_APP_AUTHORIZATION_TOKEN
          }
        }
      );
      setSearchResults(response.data.data.search.edges);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <nav>
        <header>
          <img src={logo} alt='img' className='logo_img' />
          <h1>GitHub Search</h1>
        </header>
        <form onSubmit={handleSubmit}>
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
        {/* <h2>Search Results:</h2> */}
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>
              <a href={result.node.url}>{result.node.name}</a>
              <p>{result.node.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
