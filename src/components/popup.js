import React from 'react';

const Popup = ({ setIsOpenPopup, title, description }) => {
  return (
    <div className="popupContainer" onClick={() => setIsOpenPopup(false)}>
      <div className="popupContent" onClick={(e) => e.stopPropagation()}>
        <div className="popupHeader">
          <h3>{title} : A quoi ça sert ? 🤔</h3>
          <div className="popupHeaderCloseButton" onClick={() => setIsOpenPopup(false)}>
            <p>&times;</p>
          </div>
        </div>
        <div className="popupBody">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
