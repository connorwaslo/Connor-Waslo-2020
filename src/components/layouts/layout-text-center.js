import React from 'react';

function LayoutTextCenter({children, style}) {
  return (
    <div className='container align-middle text-center' style={style}>
      {children}
    </div>
  );
}

export default LayoutTextCenter;