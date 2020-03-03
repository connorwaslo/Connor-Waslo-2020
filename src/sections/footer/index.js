import React from 'react';

function Footer() {
  return (
    <div className='row' style={{overflowX: 'hidden'}}>
      <div className='col-4'>
        <h3 className='ml-3'>Last Updated: Mar 3, 2020</h3>
      </div>
      <div className='col-4'>
      </div>
      <div className='col-4'>
        <img className='mr-3' style={{maxWidth: '15vh', float: 'right'}}
             src={require('../../images/misc/gatsby.png')} alt='gatsby'/>
      </div>
    </div>
  )
}

export default Footer;