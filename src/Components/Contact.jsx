import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, User, MessageCircle } from "lucide-react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", message: "" });
    setFormErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20 pb-20">
      <div className="container mx-auto px-6 sm:px-8 md:px-12">
        <motion.h2
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Get In Touch
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-6 md:w-1/2">
            <motion.div
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform flex items-center gap-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Mail className="text-blue-500" />
              <div>
                <p className="text-lg font-semibold">Email</p>
                <a
                  href="mailto:rakeshanarajula305@gmail.com"
                  className="text-gray-300 hover:text-yellow-500"
                >
                  rakeshanarajula305@gmail.com
                </a>
              </div>
            </motion.div>
            <motion.div
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform flex items-center gap-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Phone className="text-green-500" />
              <div>
                <p className="text-lg font-semibold">Phone</p>
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-yellow-500"
                >
                  +91 8374917602
                </a>
              </div>
            </motion.div>
            <motion.div
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform flex items-center gap-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <MapPin className="text-red-500" />
              <div>
                <p className="text-lg font-semibold">Location</p>
                <p className="text-gray-300">Hyderabad, India</p>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            {!isSubmitted ? (
              <motion.div
                className="bg-gray-800 p-8 sm:p-10 rounded-lg shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <Send className="text-purple-500" />
                  <h3 className="text-2xl font-semibold">Send a Message</h3>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <User className="text-blue-500" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full p-3 bg-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                  )}

                  <div className="flex items-center gap-4">
                    <Mail className="text-blue-500" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full p-3 bg-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                  )}

                  <div className="flex items-center gap-4">
                    <MessageCircle className="text-yellow-500" />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows="6"
                      className="w-full p-3 bg-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none"
                    ></textarea>
                  </div>
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                  )}

                  <button
                    type="submit"
                    className="bg-yellow-700 text-white py-3 px-8 rounded-lg hover:bg-yellow-900 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                className="text-center text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h3 className="text-3xl font-semibold mb-4">Thank You!</h3>
                <p className="text-lg mb-4">
                  Your message has been sent successfully. I'll get back to you
                  soon.
                </p>
                <button
                  onClick={handleReset}
                  className="bg-yellow-500 text-white py-3 px-8 rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;