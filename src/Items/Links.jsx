import { Button } from '@mui/material';
import React from 'react';

const Links = () => {

  function toggleModal(){
    document.querySelector('body').classList.toggle('modalON')
  }
    return (
        <div className="info__links">
              <ul className="links__list">
                <li className="links__item">
                <Button size='small' className="link click" onClick={toggleModal}>
                    About Me
                  </Button>
                </li>
                <li className="links__item">
                  <Button size='small' className="link click" onClick={toggleModal}>
                    Contact Me
                  </Button>
                </li>
              </ul>
            </div>
    );
}

export default Links;
