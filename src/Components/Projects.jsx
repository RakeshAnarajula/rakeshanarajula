import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Card = ({ image, title, description, path, isExternal }) => {
  const [hovered, setHovered] = useState(false);

  return isExternal ? (
    <a
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center p-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300">
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            hovered ? "blur-md scale-105" : "blur-0 scale-100"
          }`}
        >
          <img
            className="w-full h-full object-cover transition-all duration-300"
            src={image}
            alt={title}
          />
          <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/90 to-transparent p-4">
            <span className="text-lg font-semibold text-white">{title}</span>
          </div>
        </div>
        <div
          className={`absolute inset-0 backdrop-blur-sm bg-black/90 text-white p-4 sm:p-6 flex items-center justify-center transition-all duration-500 ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <div className="text-center">
            <h4 className="text-sm sm:text-xl font-semibold">{title}</h4>
            <p className="text-xs sm:text-base mt-2">{description}</p>
          </div>
        </div>
      </div>
    </a>
  ) : (
    <Link
      to={path}
      className="flex justify-center items-center p-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300">
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            hovered ? "blur-md scale-105" : "blur-0 scale-100"
          }`}
        >
          <img
            className="w-full h-full object-cover transition-all duration-300"
            src={image}
            alt={title}
          />
          <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent p-4">
            <span className="text-lg font-semibold text-white">{title}</span>
          </div>
        </div>
        <div
          className={`absolute inset-0 backdrop-blur-sm bg-black/40 text-white p-4 sm:p-6 flex items-center justify-center transition-all duration-500 ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <div className="text-center">
            <h4 className="text-sm sm:text-xl font-semibold">{title}</h4>
            <p className="text-xs sm:text-base mt-2">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
};

Card.defaultProps = {
  isExternal: false,
};

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 p-4 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-orange-900 mb-6">
        Projects
        <span className="block w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-orange-900 mt-1 animate-[underline_1s_ease-in-out]"></span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
        <Card image="/Business Intelligence & Analytics.jpg" title="VS Tech Waves" description="Delivering innovative technology solutions to businesses worldwide." path="https://vsvstechwaves.com/" isExternal={true} />
        <Card image="/EzDoesIt-Container-Logistics.webp" title="Ezbarrel" description="Your Trusted Partner for Seamless Shipping to the Caribbean." path="https://ezbarrel.vercel.app/" isExternal={true} />
        <Card image="/N2N.jpg" title="N2N Distributors Ltd." description="Shipping Customer Service" path="https://n2n-distributors.vercel.app/" isExternal={true} />
        <Card image="/starship.png" title="Star Caribbean Shipping" description="Delivering Excellence Through Strategic Logistics." path="https://starcaribbeanshipping.vercel.app/" isExternal={true} />
        <Card image="/deeplogics.png" title="Deeplogics Labs Corp." description="Cyber Security Solutions." path="https://deeplogics.vercel.app/" isExternal={true} />
        <Card image="/new hero1png.png" title="FoneShack" description="Explore our diverse range of mobile handsets from top brands." path="https://foneshack.vercel.app/" isExternal={true} />
        <Card image="/image1.jpeg" title="GenPay" description="The next generation of digital payments." path="https://genpay.vercel.app/" isExternal={true} />
      </div>
    </div>
  );
};

export default App;
