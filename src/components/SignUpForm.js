import React from 'react';
import { ReactMailchimpEmailSignupForm } from 'react-mailchimp-email-signup-form';
//import 'react-mailchimp-email-signup-form/dist/esm/index.css';

const SignUpForm = () => {
  return (
    <ReactMailchimpEmailSignupForm
      elementId="first-email-signup-form"
      url={`https://live.us6.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_USER}&id=${process.env.REACT_APP_MAILCHIMP_ID}`}
      title="Sign Up!"
      subtitle="We will let you know when the book is published"
    />
  );
}

export default SignUpForm;
