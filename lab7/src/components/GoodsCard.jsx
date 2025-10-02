function GoodsCard({ name, price, img }) {
  return (
    <div className="goods-card">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <p>{price} грн</p>
    </div>
  );
}

export default GoodsCard;
