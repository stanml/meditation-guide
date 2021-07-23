import './About.css'
import React from 'react';

const About = () => {
  return(
    <div className="ui container; about-author">
        <h3>About the Author</h3>
        <p>
          Hello, I am Elizabeth English (b.1963). I teach mindfulness and meditation at Cambridge University. I have the incredible privilege of being Cambridge University’s first Mindfulness Practitioner. My mindfulness courses were the subject of an extensive research trial that showed the significant benefit of mindfulness to students (published in The Lancet PH, December 2017).
          I draw on four decades of personal meditation practice as well as my Masters and Doctorate degrees sudying Buddhist meditation texts, at Oxford University.
          I am a certified teacher of Mindfulness, Focusing, Somatic Experiencing and Nonviolent Communication.
          I live in Cambridge with my partner and my cocker spaniel, Cherub.
        </p>
        <div>
          <img className="ui centered medium image" src="/assets/images/lizzy-headshot.jpg" alt=""/>
        </div>
    </div>
  );
}

export default About;
