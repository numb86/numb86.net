import React from "react";

import Header from "../components/header";

const LINK_LIST = [
  { text: "技術ブログ", url: "http://numb86-tech.hatenablog.com/" },
  { text: "Twitter", url: "https://twitter.com/numb_86" },
  { text: "GitHub", url: "https://github.com/numb86" },
  {
    text: "例のアレ",
    url: "http://www.amazon.co.jp/gp/registry/wishlist/V3YG7ZRGFC8U/"
  }
];

export default () => (
  <>
    <Header />
    <ul>
      {LINK_LIST.map((l, index) => (
        <li key={index}>
          <a href={l.url} target="_blank" rel="noopener noreferrer">
            {l.text}
          </a>
        </li>
      ))}
    </ul>
  </>
);
