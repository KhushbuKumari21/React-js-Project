import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to our Digital Recruitment Solution!</h1>
        <p>Streamline your hiring process with our efficient online platform.</p>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Efficient Hiring</h2>
          <p>Our app simplifies the hiring process, allowing you to find the best talent quickly and effectively.</p>
        </div>
        <div className="feature">
          <h2>User-Friendly Interface</h2>
          <p>We provide an intuitive and easy-to-use interface for hiring managers and HR professionals.</p>
        </div>
        <div className="feature">
          <h2>Enhanced Collaboration</h2>
          <p>Collaborate seamlessly with your team, share candidate profiles, and track progress in real-time.</p>
        </div>
      </section>
      <section className="benefits">
        <h2>Benefits of Our Online Recruitment Solution</h2>
        <ul>
          <li>Save time and resources in the hiring process</li>
          <li>Access a wide pool of qualified candidates</li>
          <li>Efficiently manage job postings and applications</li>
          <li>Track and analyze candidate data for better decision-making</li>
          <li>Improve communication and collaboration within your hiring team</li>
        </ul>
      </section>
      <footer>
        <p>Ready to streamline your hiring process? Sign up for our digital recruitment solution now!</p>
        <button>Sign Up</button>
      </footer>
    </div>
  );
};

export default Homepage;
