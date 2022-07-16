import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="header">
      <p>
        <FontAwesomeIcon icon={faGlobeAfrica}></FontAwesomeIcon> my travel
        journal.
      </p>
    </div>
  );
}

export default Header;
