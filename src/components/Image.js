import React, { useState } from 'react';

function Image() {
  const [images, setImages] = useState([{ id: 1, width: 600 }]);

  const handleAdd = () => {
    setImages((prevImages) => [
      ...prevImages,
      { id: Date.now(), width: 600 },
    ]);
  };

  const handleIncrease = () => {
    setImages((prevImages) => {
      if (prevImages.length === 0) return prevImages;
      const updated = [...prevImages];
      const lastIndex = updated.length - 1;
      updated[lastIndex] = {
        ...updated[lastIndex],
        width: updated[lastIndex].width + 50,
      };
      return updated;
    });
  };

  const handleDecrease = () => {
    setImages((prevImages) => {
      if (prevImages.length === 0) return prevImages;
      const updated = [...prevImages];
      const lastIndex = updated.length - 1;
      if (updated[lastIndex].width > 100) {
        updated[lastIndex] = {
          ...updated[lastIndex],
          width: updated[lastIndex].width - 50,
        };
      }
      return updated;
    });
  };

  const handleDelete = () => {
    setImages((prevImages) => prevImages.slice(0, -1));
  };

  return (
    <section>
      <div id="image-container">
        {images.map((img) => (
          <a
            key={img.id}
            href="https://yaremcha-miskrada.gov.ua/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/yaremche.jpg`}
              alt="Яремче"
              className="city-image"
              width={img.width}
            />
          </a>
        ))}
      </div>

      <div className="buttons-panel">
        <button onClick={handleAdd}>Додати</button>
        <button onClick={handleIncrease}>Збільшити</button>
        <button onClick={handleDecrease}>Зменшити</button>
        <button onClick={handleDelete}>Видалити</button>
      </div>
    </section>
  );
}

export default Image;