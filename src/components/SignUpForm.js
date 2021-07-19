import React from 'react';
import { ReactMailchimpEmailSignupForm } from 'react-mailchimp-email-signup-form';

// Here's a usage example when using functional components
const SignUpForm = () => {
  return (
    <ReactMailchimpEmailSignupForm
      elementId="first-email-signup-form"
      url="https://XX.us4.list-manage.com/subscribe/post?u=XXXXXXXXXXXXXX"
      title="Subscribe to the Newsletter"
      subtitle="We take privacy seriously and we'll never spam or sell your information."
    />
  );
}

export default SignUpForm;
