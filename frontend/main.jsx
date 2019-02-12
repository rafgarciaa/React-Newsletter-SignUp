import React from 'react';
import ReactDOM from 'react-dom';

// Components
import SignUp from './signup';

const Root = () => {
    console.log('react works');
    return (
        <div>
            {/* Components go here */}
            <SignUp />
        </div>
    );
};

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<Root />, root);
});