import React from 'react';

function SectionTitle({className, title}) {
  return <h1 className={`display-3 mt-5 mb-2 ${className}`}><b>{title}</b></h1>
}

export default SectionTitle;