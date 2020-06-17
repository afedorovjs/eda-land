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

      <div className="ration-content">

        <h1>Выбор рациона</h1>
        <div className="ration-desc-text">Каждый набор рассчитывается индивидуально 
          диетологом под Ваши требования, и Вы получаете высококачественный продукт, сбалансированный по 
          белкам, жирам и углеводам
        </div>

        <div className="ration-cards-wrapper">

          <div className="ration-card">
            <div className="ration-image-1"/>
            <div className="ration-h1">СБАЛАНСИРОВАННЫЙ</div>
            <div className="ration-card-text">
              Оптимальная суточная норма для энергичной и полноценной жизни.
              Подойдет, если вам необходимо поддерживать себя в форме.
            </div>
            <button className="ration-card-order-btn">ЗАКАЗАТЬ</button>
          </div>

          <div className="ration-card">
            <div className="ration-image-2"/>
            <div className="ration-h1">ДЛЯ ПОХУДЕНИЯ</div>
            <div className="ration-card-text">
            Система питания для плавного и безопасного снижения веса. Рассчитывается исходя из ваших
            личных показателей и позволяет худеть комфортно и без вреда для организма.
            </div>
            <button className="ration-card-order-btn">ЗАКАЗАТЬ</button>
          </div>

          <div className="ration-card">
            <div className="ration-image-3"/>
            <div className="ration-h1">ДЛЯ НАБОРА МАССЫ</div>
            <div className="ration-card-text">
              Меню составлено с максимальным количеством белков и минимальным количеством жиров 
              и углеводов, что поможет
              эффективно набрать мышечную массу в период интенсивных тренировок.
            </div>
            <button className="ration-card-order-btn">ЗАКАЗАТЬ</button>
          </div>

        </div>

      </div>

      <div className="how-we-work-content">
          <h1 className="how-we-work-text">Как мы работаем?</h1>

          <div className="how-we-work-cards-wrapper">
            <div className="work-desc-card">
              <div className="how-number">1</div>
              <div className="work-desc-text">Вас консультирует наш диетолог.</div>
            </div>

            <div className="work-desc-card">
              <div className="how-number">2</div>
              <div className="work-desc-text">Далее он подбирает для вас рацион питания исходя из ваших требований.</div>
            </div>

            <div className="work-desc-card">
              <div className="how-number">3</div>
              <div className="work-desc-text">Мы закупаем необходимые продукты самого лучшего качества.</div>
            </div>

            <div className="work-desc-card">
              <div className="how-number">4</div>
              <div className="work-desc-text">Наши повара готовят для вас.</div>
            </div>

            <div className="work-desc-card">
              <div className="how-number">5</div>
              <div className="work-desc-text">Мы осущесвляем доставку в удобное для вас время.</div>
            </div>

            <div className="work-desc-card">
              <div className="how-number">6</div>
              <div className="work-desc-text">Вам остается лишь насладиться вкусными блюдами!</div>
            </div>
          </div>
      </div>

    </div>
    </>
  );
}

export default App;
