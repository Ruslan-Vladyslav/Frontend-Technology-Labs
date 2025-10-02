import GoodsCard from './components/GoodsCard';

const goods = [
  { id: 1, name: 'Товар 1', price: 100, img: '/assets/product1.png' },
  { id: 2, name: 'Товар 2', price: 200, img: '/assets/product2.png' },
  { id: 3, name: 'Товар 3', price: 300, img: '/assets/product3.png' },
  { id: 4, name: 'Товар 4', price: 150, img: '/assets/product4.png' },
  { id: 5, name: 'Товар 5', price: 250, img: '/assets/product5.png' },
  { id: 6, name: 'Товар 6', price: 350, img: '/assets/product6.png' },
];

function GoodsGallery() {
  return (
    <section className="gallery">
      {goods.map((item) => (
        <GoodsCard
          key={item.id}
          name={item.name}
          price={item.price}
          img={item.img}
        />
      ))}
    </section>
  );
}

export default GoodsGallery;
