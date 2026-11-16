import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsCard from './components/GoodsCard';

const goodsList = [
  {
    id: 1,
    title: 'Книга «Проєкт Аве Марія» (Енді Вейр)',
    price: 490,
    image: `${process.env.PUBLIC_URL}/images/книга.jpg`,
  },
  {
    id: 2,
    title: 'Бездротові навушники Sony WH-1000XM5',
    price: 13500,
    image: `${process.env.PUBLIC_URL}/images/навушники.jpg`,
  },
  {
    id: 3,
    title: 'Туристичний рюкзак для Карпат 45L',
    price: 3200,
    image: `${process.env.PUBLIC_URL}/images/рюкзак.jpg`,
  },
  {
    id: 4,
    title: 'Спортивний фітнес-браслет Mi Band 9',
    price: 1650,
    image: `${process.env.PUBLIC_URL}/images/images.jpg`,
  },
  {
    id: 5,
    title: 'Термос туристичний з нержавіючої сталі 1 л',
    price: 850,
    image: `${process.env.PUBLIC_URL}/images/термос.jpg`,
  },
  {
    id: 6,
    title: 'Ліхтарик налобний акумуляторний',
    price: 620,
    image: `${process.env.PUBLIC_URL}/images/ліхтарик.jpg`,
  },
];

function App() {
  return (
    <div className="app-container">
      <Header />
      <Content />
      <Image />

      <hr className="divider" />

      <section className="goods-section">
        <h2>Галерея товарів</h2>
        <div className="goods-grid">
          {goodsList.map((item) => (
            <GoodsCard
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;