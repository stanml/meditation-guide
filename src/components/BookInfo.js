import './BookInfo.css';
import React from 'react';
import SignUpForm from './SignUpForm';
import BookTitle from './BookTitle';
import Blurb from './Blurb';

const BookInfo = () => {
  return(
    <div className="ui container; book-info">
      <BookTitle/>
      <SignUpForm/>
      <Blurb/>
    </div>
  );
}

export default BookInfo;
