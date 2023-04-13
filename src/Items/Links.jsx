import { Button } from '@mui/material';
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
                  <Button size='small' className="link click">
                    Contact Me
                  </Button>
                </li>
                <Button size='small' className="link click" variant="text">Text</Button>
              </ul>
            </div>
    );
}

export default Links;
