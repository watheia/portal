import * as React from 'react';

function AiAqua(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      {...props}
    >
      <defs>
        <linearGradient id="prefix__a" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#004658" />
          <stop offset="13.398%" stopColor="#02778a" />
          <stop offset="51.766%" stopColor="#03a8bb" />
          <stop offset="88.367%" stopColor="#037a8c" />
          <stop offset="100%" stopColor="#024b5c" />
        </linearGradient>
      </defs>
      <path fill="url(#prefix__a)" d="M0 0h640v640H0z" />
    </svg>
  );
}

export default AiAqua;
