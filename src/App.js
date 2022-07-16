import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import { datas } from './data';

function App() {
  const cards = datas.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className="App">
      <Header />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
