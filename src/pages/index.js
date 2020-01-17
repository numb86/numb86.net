import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet';
import {CookiesProvider, useCookies} from 'react-cookie';

import Header from '../components/header';

import avator from '../images/avator.png';

const LINK_LIST = [
  {text: '技術ブログ', url: 'https://numb86-tech.hatenablog.com/'},
  {text: 'Twitter', url: 'https://twitter.com/numb_86'},
  {text: 'GitHub', url: 'https://github.com/numb86'},
];

export default () => {
  const [, setCookie] = useCookies([]);

  useEffect(() => {
    setCookie('noSpecifyDomainCookie', '111', {maxAge: 180});
    setCookie('specifyDomainCookie', '222', {
      maxAge: 180,
      domain: 'numb86.net',
    });
  }, []);

  return (
    <CookiesProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>numb86.net</title>
      </Helmet>
      <Header />
      <img src={avator} alt="アバター" />
      <h2>Link</h2>
      <ul>
        {LINK_LIST.map(l => (
          <li key={l.url}>
            <a href={l.url} target="_blank" rel="noopener noreferrer">
              {l.text}
            </a>
          </li>
        ))}
      </ul>
    </CookiesProvider>
  );
};
