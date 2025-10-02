import GoodsCard from './components/GoodsCard';

const goods = [
  { id: 1, name: 'iPhone 14 Pro', price: 1200, img: 'iphone14.png' },
  { id: 2, name: 'Samsung Galaxy S23', price: 1100, img: 'samsungs23.jpg' },
  { id: 3, name: 'Google Pixel 8', price: 900, img: 'pixel.jpg' },
  { id: 4, name: 'OnePlus 11', price: 850, img: 'oneplus.jpg' },
  { id: 5, name: 'Xiaomi 13 Pro', price: 780, img: 'xiaomi.jpg' },
  { id: 6, name: 'Sony Xperia 1 IV', price: 950, img: 'xperia.jpg' },
  { id: 7, name: 'Motorola Edge 40', price: 700, img: 'motorola.jpg' },
  { id: 8, name: 'Huawei P60 Pro', price: 820, img: 'huawei.jpg' },
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
