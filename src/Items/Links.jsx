import React from 'react';

const Links = () => {
    return (
        <div className="info__links">
              <ul className="links__list">
                <li className="links__item">
                  <button className="link">
                    About Me
                  </button>
                </li>
                <li className="links__item">
                  <button className="link">
                    Dark Mode
                  </button>
                </li>
                <li className="links__item">
                  <button className="link">
                    Contact Me
                  </button>
                </li>
              </ul>
            </div>
    );
}

export default Links;
