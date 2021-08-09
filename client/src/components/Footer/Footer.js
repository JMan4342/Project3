import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="gradient w-100 mt-auto text-dark">
      <div className="container text-center ">
        {location.pathname !== '/' && (
          <button
            className="text-green btn btn-dark mb-3 mt-3  "
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}
        <h4 className="custom-green">&copy; {new Date().getFullYear()} - Wander Beyond</h4>
      </div>
    </footer>
  );
};

export default Footer;
