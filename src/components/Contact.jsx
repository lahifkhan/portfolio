import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPublic, MdLocationOn } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Name is required";
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) formErrors.message = "Message is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus({ loading: true, success: null, error: null });

    emailjs
      .sendForm(
        "service_2qlxmau",
        "template_35mid9j",
        form.current,
        "paa-QjP0GFy4Qz9_I"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus({
            loading: false,
            success: "Message sent successfully!",
            error: null,
          });
          setFormData({ name: "", email: "", message: "" });
          setTimeout(
            () => setStatus((prev) => ({ ...prev, success: null })),
            5000
          );
        },
        (error) => {
          console.log(error.text);
          setStatus({
            loading: false,
            success: null,
            error: "Failed to send message. Please try again.",
          });
        }
      );
  };

  return (
    <motion.section
      className="px-8 py-16 md:px-12 md:py-24 bg-background-light dark:bg-black/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 text-glow"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            className="bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark p-6 md:p-8 rounded-lg"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className={`block w-full bg-gray-50 dark:bg-black/20 border ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-300 dark:border-border-dark"
                  } rounded-md shadow-sm py-3 px-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors`}
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className={`block w-full bg-gray-50 dark:bg-black/20 border ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300 dark:border-border-dark"
                  } rounded-md shadow-sm py-3 px-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors`}
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className={`block w-full bg-gray-50 dark:bg-black/20 border ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300 dark:border-border-dark"
                  } rounded-md shadow-sm py-3 px-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors`}
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
              <div>
                <button
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-80 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={status.loading}
                >
                  {status.loading ? "Sending..." : "Send Message"}
                </button>
                {status.success && (
                  <p className="mt-4 text-sm text-green-500 text-center font-medium">
                    {status.success}
                  </p>
                )}
                {status.error && (
                  <p className="mt-4 text-sm text-red-500 text-center font-medium">
                    {status.error}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-5">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 dark:bg-card-dark border border-gray-200 dark:border-border-dark text-primary dark:text-white">
                  <MdEmail className="text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  lahifkhan52@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-5">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 dark:bg-card-dark border border-gray-200 dark:border-border-dark text-primary dark:text-white">
                  <MdPublic className="text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Social Media
                </h3>
                <div className="flex space-x-4 mt-1">
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    href="https://github.com/lahifkhan"
                  >
                    <FaGithub className="h-6 w-6" />
                  </a>
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    href="https://www.linkedin.com/in/nuhath-khan-lahif/"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-5">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 dark:bg-card-dark border border-gray-200 dark:border-border-dark text-primary dark:text-white">
                  <MdLocationOn className="text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
