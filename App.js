import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero text-center">
        <img
          className="profile-img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          alt="Profile"
        />
        <h1>Your Name</h1>
        <p>Web Developer</p>
      </header>

      <section id="about" className="section">
        <div className="container">
          <h2>About Me</h2>
          <p>
            Welcome to my portfolio! I am a passionate web developer with a
            focus on creating user-friendly and visually appealing websites.
          </p>
          {/* Add more details about yourself here */}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2>Projects</h2>
          <div className="project">
            <h3>Project 1</h3>
            <p>
              A brief description of the project. Include technologies used and
              your role.
            </p>
            <a
              href="https://github.com/yourusername/project1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
          {/* Add more project entries as needed */}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <h2>Skills</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            {/* Add more skills as needed */}
          </ul>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2>Contact Me</h2>
          <p>Feel free to reach out! You can contact me at yourname@example.com.</p>
          {/* Add a contact form or additional contact information here */}
        </div>
      </section>

      <footer>
        <div className="container text-center">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
