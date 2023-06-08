import React from "react";

const ImageGallery = () => {
  const backgroundImage = "https://i.postimg.cc/MT82gR8n/image.png";

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl text-white align-center font-bold mb-8">Image Gallery</h1>
        <div className="max-w-4xl mx-auto">
          <img src={backgroundImage} alt="Image" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
