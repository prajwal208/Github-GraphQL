import React from 'react'
import "./style.css"

export default function Home() {
  return (
   <>
    <div className="home_main_wrap">
        <div className="header_section">
            <h1>Home</h1>

            <div className="header_content">
                <h2>Updates to your homepage feed</h2>

                <p>We've combined the power of the Following feed with the For you feed so there’s one place to discover content on GitHub. There’s improved filtering so you can customize your feed exactly how you like it, and a shiny new visual design. ✨</p>
                <h4>Learn More</h4>  
            </div>

            <div className="home_second_container">
                <div className="left_content_box">
                    <h3>Start a new repository for Prajwal8861</h3>
                    <p>A repository contains all of your project's files, revision history, and collaborator discussion.</p>
                    
                    <h4>Repository name *</h4>
                    <input type='text' placeholder='name your new repository'/>
                    
                    <div className="radio_btn">
                    <input type="radio" id="contactChoice1" name="contact" value="email" className="private"/>
                    <label for="contactChoice1">private</label>   

                    <input type="radio" id="contactChoice2" name="contact" value="phone" className="private"/>
                    <label for="contactChoice2">Public</label>

                    </div>

                    <button>Create a new repository</button>
                </div>

                <div className="right_content_box">
                    <h3>Start a new repository for Prajwal8861</h3>
                    <p>A repository contains all of your project's files, revision history, and collaborator discussion.</p>

                    <div className="user_readme">
                        <h3>Prajwal8861/README.md</h3>
                        <ol>
                            <li>- 👋 Hi, I’m @Prajwal8861</li>
                            <li>- 👀 I’m interested in ...</li>
                            <li>- 🌱 I’m currently learning ...</li>
                            <li>- 💞️ I’m looking to collaborate on ...</li>
                            <li>- 📫 How to reach me ...</li>
                            <li>- 😄 Pronouns: ...</li>
                            <li>- ⚡ Fun fact: ...</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}
