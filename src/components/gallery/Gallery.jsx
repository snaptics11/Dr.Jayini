import React, { useState } from "react";
import CommonBanner from "../CommonBanner";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = [
    "/assets/images/handwrist.jpg",
    "/assets/images/hipdisorders.jpg",
    "/assets/images/shoulderinjury.jpg",
    "/assets/images/Shoulder Dislocations.png",
    "/assets/images/educationknee.png",
    "/assets/images/handwrist.jpg",
  ];

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-page">
      <CommonBanner title={"Explore Our Gallery"} />

      <div className="container-lg mt-5">
        <div>
          <div className="gallery-container">
            <div className="row">
              {images.map((image, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div
                    className="gallery-item"
                    onClick={() => openModal(index)}
                  >
                    <img
                      src={image}
                      alt={`Gallery item ${index + 1}`}
                      className="gallery-img"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {isModalOpen && (
            <div className="gallery-modal-overlay" onClick={closeModal}>
              <div
                className="gallery-modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[selectedImageIndex]}
                  alt="Selected"
                  className="gallery-modal-img"
                />
                <div className="gallery-close-btn" onClick={closeModal}>
                  X
                </div>
                <button className="gallery-prev-btn" onClick={goToPreviousImage}>
                  ❮
                </button>
                <button className="gallery-next-btn" onClick={goToNextImage}>
                  ❯
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
  


      <style jsx>{`
  .gallery-container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  .gallery-item {
    cursor: pointer;
    width: 100%;
    height: 300px;
  }
  .gallery-img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  .gallery-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .gallery-modal-content {
    position: relative;
    max-width: 80%;
    max-height: 90vh;
    text-align: center;
  }
  .gallery-modal-img {
    max-width: 100%;
    max-height: 80vh;
    border-radius: 8px;
  }
  .gallery-close-btn {
    position: absolute;
    top: 46%;
    right: 45%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 24px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  .gallery-prev-btn,
  .gallery-next-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    padding: 20px;
    cursor: pointer;
    border-radius: 50%;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 60px;
  }
  .gallery-prev-btn {
    left: 10px;
  }
  .gallery-next-btn {
    right: 10px;
  }

  /* Responsive Styles */
  @media (max-width: 1024px) {
    .gallery-item {
      height: 250px;
    }
    .gallery-modal-content {
      max-width: 90%;
    }
    .gallery-close-btn {
      font-size: 20px;
      padding: 8px 16px;
    }
    .gallery-prev-btn,
    .gallery-next-btn {
      height: 50px;
      width: 50px;
      font-size: 20px;
      padding: 15px;
    }
  }

  @media (max-width: 768px) {
    .gallery-container {
      gap: 10px;
    }
    .gallery-item {
      height: 200px;
    }
    .gallery-modal-content {
      max-width: 95%;
    }
    .gallery-close-btn {
      font-size: 18px;
      padding: 6px 12px;
    }
    .gallery-prev-btn,
    .gallery-next-btn {
      height: 45px;
      width: 45px;
      font-size: 18px;
      padding: 12px;
    }
  }

  @media (max-width: 480px) {
    .gallery-container {
      flex-direction: column;
      gap: 8px;
    }
    .gallery-item {
      height: 100%;
    }
    .gallery-modal-content {
      max-width: 100%;
    }
    .gallery-modal-img {
      max-height: 70vh;
    }
    .gallery-close-btn {
      font-size: 16px;
      padding: 5px 10px;
    }
    .gallery-prev-btn,
    .gallery-next-btn {
      height: 40px;
      width: 40px;
      font-size: 16px;
      padding: 10px;
    }
  }
`}</style>


    </div>
  );
};

export default Gallery;
