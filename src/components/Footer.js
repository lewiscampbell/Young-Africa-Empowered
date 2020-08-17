import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a target="_blank"   href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>Lewis A Campbell</li>
        <li>Music Composer</li>
      </ul>
    </footer>
  );
}
