import React from 'react';
import ReactDOM from 'react-dom';

// Components
import SignUpForm from './signup_form';

const Root = () => {
    // console.log('react works');
    return (
        <div className="root-container">
            <SignUpForm />
        </div>
    );
};

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<Root />, root);
});