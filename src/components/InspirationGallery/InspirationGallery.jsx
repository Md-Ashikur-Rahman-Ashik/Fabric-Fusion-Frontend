const InspirationGallery = () => {
  return (
    <section className="py-12 bg-pink-50 mx-10 mt-10 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-pink-600 sm:text-4xl">
            Inspiration Gallery
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover the creativity and talent of Textile Arts enthusiasts.
          </p>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Replace the following placeholders with actual gallery item data */}
          {/* Example: */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
            <img
              className="h-64 w-full object-cover"
              src="https://i.ibb.co/HxZBKyr/first-Gallery.png"
              alt="Gallery Item 1"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-pink-600">
                Embroidered Artwork
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Stunning hand-embroidered artwork by talented artisans.
              </p>
            </div>
          </div>
          {/* Repeat this block for each gallery item */}
          {/* Gallery Item 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
            <img
              className="h-64 w-full object-cover"
              src="https://i.ibb.co/PMW5bsb/second-Gallery.png"
              alt="Gallery Item 2"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-pink-600">
                Knitted Creations
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Cozy and stylish knitted garments and accessories.
              </p>
            </div>
          </div>
          {/* Gallery Item 3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
            <img
              className="h-64 w-full object-cover"
              src="https://i.ibb.co/HHntpzN/third-Gallery.png"
              alt="Gallery Item 3"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-pink-600">
                Quilted Masterpieces
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Intricate and beautiful quilts crafted with precision and care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationGallery;
