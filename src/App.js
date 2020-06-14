import React from 'react';
import './css/App.css';
// import Header from './Header';

function App() {
  return (
    <>
    <div className="main-wrapper">
      <header>

        <div className="header-logo">
          <div className="logo-img"/>
          <span className="logo-text">HealthyFood</span>
        </div>

        <nav>
          <div className="choose-menu">
            <div className="choose-icon"/>
            <span className="choose-menu-text">ВЫБОР РАЦИОНА</span>
          </div>

          <span className="how-work-text">КАК МЫ РАБОТАЕМ?</span>

          <span className="feedback-text">ОТЗЫВЫ</span>

          <div className="call-us-wrapper">
            <div className="call-us-icon"/>
            <div className="call-us-info-wrapper">
              <span className="call-us-phone">+7 (495) 987-65-43</span>
              <span className="call-us-text">ПЕРЕЗВОНИТЕ МНЕ</span>
            </div>
          </div>
        </nav>

      </header>
    </div>
    </>
  );
}

export default App;
