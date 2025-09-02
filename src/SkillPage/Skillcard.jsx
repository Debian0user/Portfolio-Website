import './skillcard.css'; 

function Skillcard({ img, high, low, logo, desc }) {
  return (
    <div className='skill-card'>
      <div className='skill-card-logo'>
        <span className="material-symbols-outlined">{logo}</span>
      </div>
      <div className='skill-card-inner'>
        <div className='skill-img'>
          <img src={img} alt={high} />
          <div className='skill-misc'></div>
          <div className='skill-card-title'>
            <span className='sct-high'>{high}</span>
            <span className='sct-low'>{low}</span>
          </div>
        </div>
        <hr />
        <div className='skill-card-cont'>
          {desc}
        </div>
      </div>
    </div>
  );
}

export default Skillcard;
