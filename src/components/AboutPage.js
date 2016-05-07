import React from 'react';
import {Link} from 'react-router';
import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h2 className="alt-header">About</h2>
      <p>
        This is the amazing foofsball app!!!
      </p>
    </div>
  );
};

export default AboutPage;
