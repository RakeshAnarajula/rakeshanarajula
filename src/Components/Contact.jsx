import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  ChevronDown
} from 'lucide-react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    purpose: 'job',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);

  const contactPurposes = [
    { value: "job", label: "Job Opportunity" },
    { value: "freelance", label: "Freelance Project" },
    { value: "other", label: "Other" },
  ];
  const validate = (data) => {
    const errors = {};
    if (!data.name.trim()) errors.name = 'Name is required';
    if (!data.phone.trim()) errors.phone = 'Phone number is required';
    if (!data.email.trim()) errors.email = 'Email is required';
    if (!data.message.trim()) errors.message = 'Message is required';
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        purpose: 'job',
        message: '',
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };
  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      purpose: 'job',
      message: '',
    });
    setErrors({});
  };
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'rakeshanarajula305@gmail.com',
      href: 'mailto:rakeshanarajula305@gmail.com',
      color: 'text-teal-400',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8374917602',
      href: 'tel:+918374917602',
      color: 'text-blue-400',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Hyderabad, India',
      href: 'https://www.google.com/maps/place/Hyderabad,+Telangana/@17.4123487,78.4080455,11z/data=!3m1!4b1!4m6!3m5!1s0x3bcb99daeaebd2c7:0xae93b78392bafbc2!8m2!3d17.406498!4d78.4772439!16zL20vMDljNnc?entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D',
      color: 'text-purple-400',
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
      <h1 className="text-4xl md:text-4xl font-bold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-orange-900">
              Get In Touch
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2"></div>  <p className="mt-2 text-lg">Let's create something amazing together</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-medium">Current Status</h2>
              <p className="text-md">Remote / Hybrid / Freelance </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-sm font-medium text-green-400">Available to Work</p>
            </div>
          </div>
          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-4 p-4 bg-gray-800 rounded-lg cursor-pointer transition-all duration-300 hover:bg-${method.color.split('-')[1]}-500/10`}
              >
                <method.icon className={`${method.color} w-6 h-6`} />
                <div>
                  <p className="font-medium">{method.title}</p>
                  <p className="text-sm text-gray-400">{method.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
              <h2 className="text-2xl font-bold">Contact Form</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2.5 text-sm focus:outline-none focus:border-teal-500"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2.5 text-sm focus:outline-none focus:border-teal-500"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2.5 text-sm focus:outline-none focus:border-teal-500"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                 <div className="relative">
            <label className="block text-sm font-medium mb-1">Contact Purpose</label>
            <button
              type="button"
              className="w-full flex justify-between items-center bg-gray-700 border border-gray-600 rounded-lg p-2"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {contactPurposes.find((p) => p.value === formData.purpose)?.label}
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </button>
            {showDropdown && (
              <div className="absolute left-0 mt-1 w-full bg-gray-700 border border-gray-600 rounded-lg shadow-md z-10">
                {contactPurposes.map((option) => (
                  <div
                    key={option.value}
                    className="p-2 hover:bg-gray-600 cursor-pointer text-white"
                    onClick={() => {
                      setFormData({ ...formData, purpose: option.value });
                      setShowDropdown(false);
                    }}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  placeholder="Your message here..."
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2.5 text-sm focus:outline-none focus:border-teal-500"
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <CheckCircle className="w-12 h-12 mx-auto text-green-500 mb-4" />
              <h2 className="text-2xl font-bold">Thank You!</h2>
              <p>Your message has been successfully sent.</p>
              <button
                onClick={handleReset}
                className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Contact;


