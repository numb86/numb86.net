import React from 'react';
import {Helmet} from 'react-helmet';

import Header from '../components/header';

export default () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>numb86.net</title>
    </Helmet>
    <Header />
    <h2>404</h2>
    <p>Not found.</p>
  </>
);
