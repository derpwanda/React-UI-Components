import React from 'react';
import './Header.css';

const HeaderTitle = props => {
  return (
    <div className="header-title">
      <div className="upper-title">
        <h3 className="title-1">Lambda School</h3>
        <h4 className="title-2">@LambdaSchool</h4>
        <h4 className="title-3"> ·26 jan</h4>
      </div>

      <div className="down-title">
        <p className = "header-text">Let's Learn React by building simple interfaces with
        components. Don't try to overthink it, just keep it simple
        and have fun. Once you feel comfortable using components
        you are well on your way to mastering React!</p>
      </div>

    </div>
  )
}

export default HeaderTitle;