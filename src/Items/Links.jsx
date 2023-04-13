import { Button } from '@mui/material';
import React from 'react';

const Links = () => {
    return (
        <div className="info__links">
              <ul className="links__list">
                <li className="links__item">
                <Button size='small' className="link click">
                    About Me
                  </Button>
                </li>
                <li className="links__item">
                  <Button size='small' className="link click">
                    Contact Me
                  </Button>
                </li>
              </ul>
            </div>
    );
}

export default Links;
