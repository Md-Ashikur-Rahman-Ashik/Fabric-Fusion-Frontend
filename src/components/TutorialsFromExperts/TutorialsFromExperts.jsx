const TutorialsFromExperts = () => {
  return (
    <section className="py-12 mt-10 mx-10 rounded-xl bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-pink-600 sm:text-4xl">
            Explore Our Tutorials
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Learn new skills and techniques with our step-by-step guides and
            tutorials.
          </p>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Replace the following placeholders with actual tutorial data */}
          {/* Example: */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
            <img
              className="h-64 w-full object-cover"
              src="https://i.ibb.co/nMPtNCq/first-Tutorial.png"
              alt="Tutorial"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-pink-600">
                Embroidery Basics
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Learn the fundamental stitches and techniques to get started
                with embroidery.
              </p>
              <a
                href="/"
                className="mt-4 block text-base font-medium text-pink-600 hover:text-blue-500"
              >
                Read More
              </a>
            </div>
          </div>
          {/* Repeat this block for each tutorial */}
          {/* Tutorial Card 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
            <img
              className="h-64 w-full object-cover"
              src="https://i.ibb.co/5cYJCCJ/second-Tutorial.png"
              alt="Tutorial 2"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-pink-600">
                Knitting Essentials
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Master the basic knitting techniques and start creating your own
                cozy projects.
              </p>
              <a
                href="/"
                className="mt-4 block text-base font-medium text-pink-600 hover:text-blue-500"
              >
                Read More
              </a>
            </div>
          </div>
          {/* Tutorial Card 3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
            <img
              className="h-64 w-full object-cover"
              src="https://i.ibb.co/BsGy4Y3/third-Tutorial.png"
              alt="Tutorial 3"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-pink-600">
                Quilting Techniques
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Explore different quilting patterns and methods to create
                stunning quilts.
              </p>
              <a
                href="/"
                className="mt-4 block text-base font-medium text-pink-600 hover:text-blue-500"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorialsFromExperts;
