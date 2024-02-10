import React, { useState } from 'react'
import "./styles.css"
import Home from '../Home/Home'
import user from "../../images/user.jpeg"

export default function Sidebar() {

  const [searchTerm, setSearchTerm] = useState('');
  const [repositories, setRepositories] = useState([
    'prajwal208/portfolio',
    'prajwal208/assessment',
    'prajwal208/Ecommerce',
    'prajwal208/Project',
    'prajwal208/Dashboard',
    'prajwal208/Landing Page'
  ]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRepositories = repositories.filter(repo =>
    repo.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <>
      <div className="sidebar_wrap">
        <section>
          <div className="header_sec">
            <h3>Top Repository</h3>
            <button>New</button>
          </div>

          <div className="sidebar_search">
          <input
          type='text'
          placeholder='Search'
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      
      {filteredRepositories.map((repo, index) => (
        <div className="resp_name_section" key={index}>
          <div className="user_logo">
            <img src={user} alt='user' />
          </div>
          <div className="user_name">
            {repo}
          </div>
        </div>
      ))}

          <div className="recent_activity_section">
            <p className="activity_content">
            When you take actions across GitHub, we’ll provide links to that activity here.
            </p>
          </div>

        </section>

        <div className="home_section_wrap">
        <Home/>
      </div>

      </div>

    
    </>
  )
}
