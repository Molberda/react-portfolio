import React from 'react';

const Links = () => {
    return (
        <div className="info__links">
              <ul className="links__list">
                <li className="links__item">
                  <button className="link click">
                    About Me
                  </button>
                </li>
                <li className="links__item">
                  <button className="link click">
                    Dark Mode
                  </button>
                </li>
                <li className="links__item">
                  <button className="link click">
                    Contact Me
                  </button>
                </li>
              </ul>
            </div>
    );
}

export default Links;
