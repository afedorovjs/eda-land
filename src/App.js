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

      <div className="delivery-content">

        <div className="delivery-description-wrapper">
          <div className="delivery-header-text">
            <div className="desc-text-wrapper">
              <div className="delivery-desc-text">Доставка здорового питания в Москве</div>

              <div className="salad-picture"/>
            </div>
            <span className="eat-well-text">Питайся правильно от 600 рублей в день!</span>
          </div>

          <button className="pick-ration-btn">ПОДОБРАТЬ РАЦИОН</button>

          <div className="our-advantages">
            <div className="advantage">Меню составляется профессионалами</div><div className="green-border"/>
            <div className="advantage">Доставка в любое время</div><div className="green-border"/>
            <div className="advantage">Свежие и полезные продукты</div>
          </div>
        </div>

        <div className="ramen-picture"/>

      </div>
    </div>
    </>
  );
}

export default App;
