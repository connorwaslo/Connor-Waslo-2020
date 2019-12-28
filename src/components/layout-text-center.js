import React from 'react';

function LayoutTextCenter({children}) {
  return (
    <div className='container align-middle text-center'>
      {children}
    </div>
  );
}

export default LayoutTextCenter;