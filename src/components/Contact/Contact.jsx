import React from 'react';
import Navbar from '../navbar/Navbar';

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions or need help, feel free to contact us.
            </p>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <span className="text-blue-600 text-2xl">📞</span>
                <p className="text-gray-700">+91 8945007301</p>
              </div>
              {/* Email */}
              <div className="flex items-center space-x-4">
                <span className="text-blue-600 text-2xl">📧</span>
                <p className="text-gray-700">cBook@gmail.com</p>
              </div>
              {/* Address */}
              <div className="flex items-center space-x-4">
                <span className="text-blue-600 text-2xl">📍</span>
                <p className="text-gray-700">Dakshin Narikelda,Purba Medinipur</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h2>
            <form className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-600 font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-600 font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-600 font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Write your message"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
