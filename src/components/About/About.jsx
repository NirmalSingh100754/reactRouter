export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src="src/components/About/about.png" alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              We are a team of dedicated professionals building modern web
              applications with React. Our mission is to deliver high-quality,
              scalable, and maintainable solutions for our clients.
            </p>
            <p className="mt-4 text-gray-600">
              We value innovation, collaboration, and continuous learning. Join
              us on our journey to create impactful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
