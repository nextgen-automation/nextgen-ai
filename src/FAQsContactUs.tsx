import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Phone, MapPin } from 'lucide-react';
import Header from './components/Header';
import BookMeetingButton from './components/BookMeetingButton';

const FAQsContactUs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContactForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of AI solutions do you offer?",
      answer: "We specialize in AI Chat Agents, AI Voice Agents, and AI-Powered Automations. Our solutions are designed to increase profit and reduce costs for businesses of all sizes."
    },
    {
      question: "How long does it take to implement an AI solution?",
      answer: "Implementation time varies depending on the complexity of your requirements. Simple chat agents can be deployed within 1-2 weeks, while more complex automations may take 3-4 weeks."
    },
    {
      question: "Do I need technical knowledge to use your AI solutions?",
      answer: "Not at all! Our AI solutions are designed to be user-friendly and require no technical expertise. We provide full training and ongoing support to ensure you get the most out of your AI investment."
    },
    {
      question: "Can your AI agents integrate with my existing systems?",
      answer: "Yes, our AI solutions are built to integrate seamlessly with most popular business tools and platforms including CRM systems, calendars, email platforms, and more."
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer: "We provide comprehensive ongoing support including regular maintenance, updates, performance monitoring, and 24/7 technical assistance to ensure your AI solutions continue to perform optimally."
    },
    {
      question: "How much do your AI solutions cost?",
      answer: "Our pricing is customized based on your specific needs and requirements. We offer flexible pricing models including one-time setup fees and monthly subscriptions. Contact us for a personalized quote."
    },
    {
      question: "Can I try your AI solutions before committing?",
      answer: "Absolutely! We offer demos and proof-of-concept implementations so you can see exactly how our AI solutions will work for your business before making a commitment."
    },
    {
      question: "What industries do you work with?",
      answer: "We work with businesses across all industries including healthcare, legal, real estate, e-commerce, professional services, and more. Our AI solutions are adaptable to any business model."
    },
    {
      question: "How secure are your AI solutions?",
      answer: "Security is our top priority. All our AI solutions use enterprise-grade encryption, secure data handling practices, and comply with industry standards including GDPR and other privacy regulations."
    },
    {
      question: "What makes your AI solutions different from others?",
      answer: "Our AI solutions are specifically designed for business growth with a focus on increasing profit and reducing costs. We provide personalized implementation, ongoing optimization, and dedicated support to ensure maximum ROI."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white text-gray-900 pt-16 pb-24"
    >
      <Header />

      <main className="container mx-auto px-6 pt-12">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            FAQs / 
            <button 
              onClick={scrollToContactForm}
              className="text-blue-600 hover:text-blue-700 transition-colors ml-2"
              aria-label="Scroll to contact form"
            >
              Contact Us
            </button>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our AI solutions, or get in touch with us directly.
          </p>
        </motion.div>

        {/* FAQs Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
          aria-label="Frequently Asked Questions"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                  aria-expanded={openFAQ === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={false}
                  animate={{
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-white border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact Us Section */}
        <motion.section
          id="contact-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
          aria-label="Contact Us Form"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-lg text-gray-600">
                Ready to transform your business with AI? Get in touch with us today.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Get in Touch
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-600" aria-hidden="true" />
                      <span className="text-gray-700">info@nextgen-ai.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-600" aria-hidden="true" />
                      <span className="text-gray-700">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-blue-600" aria-hidden="true" />
                      <span className="text-gray-700">San Francisco, CA</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Prefer to Schedule a Call?
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Book a free consultation to discuss your AI needs directly with our experts.
                  </p>
                  <BookMeetingButton />
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="ai-chat-agents">AI Chat Agents</option>
                      <option value="ai-voice-agents">AI Voice Agents</option>
                      <option value="ai-automations">AI-Powered Automations</option>
                      <option value="custom-solution">Custom AI Solution</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                      placeholder="Tell us about your business needs and how we can help..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    * Required fields. We'll get back to you within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
};

export default FAQsContactUs;