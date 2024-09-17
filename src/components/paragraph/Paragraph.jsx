import React from 'react';
import './Paragraph.css';

function Paragraph({ subtitle, pContent,className }) {
  return (
    <div className={`paragraph-container ${className}`}>
      <h4 className='paragraph-subtitle'>{subtitle}</h4>
      <p className='paragraph'>
        {pContent}
      </p>
    </div>
  );
}

export default Paragraph;