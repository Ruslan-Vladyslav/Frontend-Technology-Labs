import { useState } from "react";
import image from "../assets/image.png";

function Image() {
  const [scale, setScale] = useState(1);
  const [images, setImages] = useState([{ id: 1, scale: 1 }]);

  const addImage = () => {
    setImages([...images, { id: Date.now(), scale: 1 }]);
  };

  const increase = () => {
    setImages((prev) =>
      prev.map((img, i, arr) =>
        i === arr.length - 1 ? { ...img, scale: img.scale + 0.2 } : img
      )
    );
  };

  const decrease = () => {
    setImages((prev) =>
      prev.map((img, i, arr) =>
        i === arr.length - 1 && img.scale > 1
          ? { ...img, scale: img.scale - 0.2 }
          : img
      )
    );
  };

  const remove = () => {
    setImages((prev) => prev.slice(0, -1));
  };

  return (
    <section>
       <h3>Валенсія</h3>
      <p>Валенсія – місто на березі Середземного моря, столиця автономної області Валенсія, третє за величиною місто Іспанії, засноване 138 років до н.е. Особливістю міста є футуристичний комплекс Місто мистецтва і наук та величезний парк на осушеному дні річки Турія.</p>
      <p>Місто Валенсія розташований на середземноморському узбережжі Піренейського півострова, у великій заплаві річок Хукар і Турія, на березі Валенсійської затоки. Стародавнє місто перебувало
         приблизно за чотири кілометри від моря, на річковому острові Турія. Найближчі до міста гори — Кабесоль-де-Ель-Пуїг і Сьєрра-Кальдерона, передгір'я Іберійської системи (приблизно за 12 і 25 км на північ від міста відповідно). Центр міста лежить на висоті 11 метрів над рівнем моря.</p>

      <div id="imgContainer">
        {images.map((img) => (
          <div key={img.id} className="img-wrapper">
            <a
              href="https://continentestate.com/uk/valencia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={image}
                alt="Панорама улюбленого міста з набережною"
                style={{ transform: `scale(${img.scale})` }}
              />
            </a>
          </div>
        ))}
      </div>

      <div className="buttons">
        <button onClick={addImage}>Додати</button>
        <button onClick={increase}>Збільшити</button>
        <button onClick={decrease}>Зменшити</button>
        <button onClick={remove}>Видалити</button>
      </div>
    </section>
  );
}

export default Image;
