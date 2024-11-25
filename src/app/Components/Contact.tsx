import React from "react"

const Contact = () => {
  return (
    <div className="bg-gray-900">
      <div className="contact-page">
  <section className="contact py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8 text-white">Contact Me</h2>
      <form className="bg-gray-800 p-6 rounded-lg shadow-md max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-white" htmlFor="name">Name</label>
          <input
            className="w-full px-4 bg-blue-300 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            id="name"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white" htmlFor="email">Email</label>
          <input
            className="w-full px-4 bg-blue-300 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            id="email"
            type="email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white" htmlFor="phone">Phone</label>
          <input
            className="w-full px-4 bg-blue-300 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            id="phone"
            type="tel"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white" htmlFor="message">Message</label>
          <textarea
            className="w-full bg-blue-300 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            id="message"
          ></textarea>
        </div>
        <button
          className="bg-green-400 text-black px-4 py-2 rounded-full hover:bg-blue-700 transition"
          type="submit"
        >
          Send Message
        </button>
      </form>
      <div className="contact-info mt-8">
        <p className="text-white">Phone: +92 3173198864</p>
        <p className="text-white">Email: muhammadraheem4739733@gmail.com</p>
        <p className="text-white">Location: Pakistan Sindh,Sanghar</p>
        <div className="social-icons mt-4 space-x-4">
          <a className="text-gray-600 hover:text-blue-600" href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="text-gray-600 hover:text-blue-600" href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="text-gray-600 hover:text-blue-600" href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="text-gray-600 hover:text-blue-600" href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</div>

    </div>
  )
}

export default Contact
