import React from 'react';
import {Link} from 'gatsby';

export default () => (
  <h1>
    <Link to="/">numb86.net</Link>
    {` `}
    <a
      href="https://github.com/hamukazu/lets-get-arrested"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://img.shields.io/badge/Let's%20get-arrested-red.svg"
        alt="Let's get arrested badge"
      />
    </a>
  </h1>
);
