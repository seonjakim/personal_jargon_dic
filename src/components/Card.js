import React from 'react';
import { jargon } from '../utils/data';

const Card = () => {
  const [open, setOpen] = React.useState(0);
  const dictionaryInput = jargon.map((el, idx) => (
    <div className="card-container" key={idx}>
      <div style={{ display: 'flex', height: '2em', alignItems: 'center', paddingLeft: '5%' }}>
        {el.name}
        <div onClick={() => setOpen(idx)} className={`arrow-i ${open === idx ? 'arrow-open' : ''}`}></div>
      </div>
      <div
        style={{
          display: open === idx ? 'block' : 'none',
          borderTop: '1px solid #eee',
          paddingTop: '.3em',
          fontSize: '1.1rem',
          padding: '2% 5%',
        }}
      >
        {el.meaning}
      </div>
    </div>
  ));
  return <div>{dictionaryInput}</div>;
};
export default Card;
