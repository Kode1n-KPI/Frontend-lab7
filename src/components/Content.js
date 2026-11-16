import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirstActive: false,
      isSecondActive: false,
    };
  }

  toggleFirst = () => {
    this.setState((prevState) => ({
      isFirstActive: !prevState.isFirstActive,
    }));
  };

  toggleSecond = () => {
    this.setState((prevState) => ({
      isSecondActive: !prevState.isSecondActive,
    }));
  };

  render() {
    const { isFirstActive, isSecondActive } = this.state;

    return (
      <main>
        <h3>Мої хобі</h3>
        <ul>
          <li>Спорт</li>
          <li>Прогулянки</li>
          <li
            id="target-1"
            className={isFirstActive ? 'active-color-1' : ''}
            onClick={this.toggleFirst}
          >
            Прогулянки на природі
          </li>
          <li
            className={`target-2 ${isSecondActive ? 'active-color-2' : ''}`}
            onClick={this.toggleSecond}
          >
            Музика
          </li>
          <li>Читання книг</li>
        </ul>

        <h3>Улюблені фільми</h3>
        <ol>
          <li>«Вовк з Волл Стріт»</li>
          <li>«Людина Павук»</li>
          <li>«Проєкт Аве Марія»</li>
        </ol>

        <h3>Улюблене місто:</h3>
        <p>
          Яремче — мальовниче курортне місто в Івано-Франківській області,
          розташоване в долині річки Прут серед Карпатських гір. Воно славиться
          своїм знаменитим водоспадом Пробій, неймовірними гірськими краєвидами,
          чистим смерековим повітрям та автентичним гуцульським колоритом.
        </p>
      </main>
    );
  }
}

export default Content;