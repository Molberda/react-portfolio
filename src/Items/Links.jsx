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
                    <h2 className='link__title'>About Me</h2>
                  </Button>
                </li>
                <li className="links__item">
                  <Button size='small' className="link click" onClick={toggleModal}>
                    <h2 className='link__title'>Contact Me</h2>
                  </Button>
                </li>
              </ul>
            </div>
    );
}

export default Links;
