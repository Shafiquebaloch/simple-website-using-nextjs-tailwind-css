import React from "react";
import {
  FaCode,
  FaPaintBrush,
  FaMobile,
  FaCloud,
  FaDatabase,
} from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="services-page bg-gray-800">
      <section className="services py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service-card bg-blue-300 p-6 rounded-lg shadow-md hover:bg-green-400 cursor-pointer transition ease-in-out delay-300">
              <FaCode className="text-blue-600 text-4xl mb-4"/>

              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-600">
                Creating responsive and modern websites.
              </p>
            </div>

            <div className="service-card bg-blue-300 p-6 rounded-lg shadow-md  hover:bg-green-400 cursor-pointer transition ease-in-out delay-300 ">
              <FaPaintBrush className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
              <p className="text-gray-600">
                Designing user-friendly interfaces.
              </p>
            </div>
            <div className="service-card bg-blue-300 p-6 rounded-lg shadow-md  hover:bg-green-400 cursor-pointer transition ease-in-out delay-300 ">
              <FaMobile className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Mobile Development</h3>
              <p className="text-gray-600">
                Building mobile applications for iOS and Android.
              </p>
            </div>
            <div className="service-card bg-blue-300 p-6 rounded-lg shadow-md  hover:bg-green-400 cursor-pointer transition ease-in-out delay-300 ">
              <FaMagnifyingGlass className="text-blue-600 text-4xl mb-4"></FaMagnifyingGlass>
              <h3 className="text-xl font-bold mb-2">SEO Optimization</h3>
              <p className="text-gray-600">
                Improving website visibility on search engines.
              </p>
            </div>
            <div className="service-card bg-blue-300 p-6 rounded-lg shadow-md  hover:bg-green-400 cursor-pointer transition ease-in-out delay-300 ">
              <FaCloud className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Cloud Services</h3>
              <p className="text-gray-600">
                Deploying and managing cloud infrastructure.
              </p>
            </div>
            <div className="service-card bg-blue-300 p-6 rounded-lg shadow-md  hover:bg-green-400 cursor-pointer transition ease-in-out delay-300 ">
              <FaDatabase className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Database Management</h3>
              <p className="text-gray-600">
                Designing and maintaining databases.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
