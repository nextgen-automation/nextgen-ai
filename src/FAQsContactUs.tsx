import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Phone, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Header from './components/Header';
import BookMeetingButton from './components/BookMeetingButton';
import { scrollToElement } from './utils/scrollUtils';

const FAQsContactUs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContactForm) {
      scrollToElement('contact-form', 90);
    }
  }, [location]);

  const scrollToContactForm = () => {
    scrollToElement('contact-form', 90);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What does NextGen-AI do/What types of Solutions do you offer?",
      answer: "We create bespoke artificial intelligence systems for companies. We equally specialize in crafting customized automation systems."
    },
    {
      question: "What is a bespoke/custom artificial intelligence system?",
      answer: "Think of it as a super-powerful robot employee, trained to do specific business tasks for your business. It never takes a break, never gets tired, never sleeps, doesn't take a vacation, doesn't even get sick, works 24/7 for you — all while being 100% accurate at doing the tasks that are given to it and costing only a fraction of what a human would cost. — That's crazy."
    },
    {
      question: "What is an automation system?",
      answer: "A digital process created to automatically complete a simple-to-medium difficulty recurring business task with little or no human intervention."
    },
    {
      question: "What is an AI-Powered automation system?",
      answer: "Before AI, automating complex recurring tasks in a business was nearly impossible. Now? — It is cheaper and faster to let AI handle it rather than doing it yourself for free."
    },
    {
      question: "What are some examples of your solutions?",
      answer: (
        <>
          <div className="space-y-2">
            <div>- See some examples of chat agents <Link to="/ai-chat-demos" className="text-blue-600 hover:text-blue-700 underline">here</Link>.</div>
            <div>- See some examples of AI voice agents <Link to="/ai-voice-demos" className="text-blue-600 hover:text-blue-700 underline">here</Link>.</div>
            <div>- See some examples of AI-powered automations <Link to="/ai-automation-demos" className="text-blue-600 hover:text-blue-700 underline">here</Link>.</div>
          </div>
          <div className="mt-4 text-sm text-gray-600 italic">
            These examples are only demos and do not represent production-level functionality.
          </div>
        </>
      )
    },
    {
      question: "I see what AI and automation can do for me. What now?",
      answer: (
        <>
          To move forward, we'll need to speak with you directly to analyze your business needs and then recommend the best possible ROI-driven systems for you. You can send us an email or book a consultation with us{' '}
          <button 
            onClick={scrollToContactForm}
            className="text-blue-600 hover:text-blue-700 underline"
          >
            here
          </button>.
          <br />— It's completely free.
        </>
      )
    },
    {
      question: "What types of AI solutions do you offer?",
      answer: "We specialize in AI Chat Agents, AI Voice Agents, and AI-Powered Automations. Our solutions are designed to increase profit and reduce costs."
    },
    {
      question: "How long does it take to implement an AI solution?",
      answer: "Implementation time varies greatly depending on the complexity of the implementation(s). For context, a simple automation can take as little as 1–2 days, whereas implementing a highly intelligent AI receptionist for your business can take up to 4–5 weeks."
    },
    {
      question: "Do I need technical knowledge to use your AI solutions?",
      answer: "Not at all! Our AI solutions require no technical expertise to use. In fact, 90% of them won't even require human intervention."
    },
    {
      question: "Can your AI agents integrate with my existing systems?",
      answer: "Because we're not bound to any specific platform — whether it's a CRM, email service, calendar system, or anything else — we offer 100% compatibility with whatever tools your business uses."
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer: "We provide comprehensive ongoing support including regular maintenance, updates, performance monitoring, and technical assistance to ensure your AI solutions continue to perform optimally."
    },
    {
      question: "How much do your AI solutions cost?",
      answer: "Our pricing is customized based on your specific needs and requirements. Contact us for a free personalized quote."
    },
    {
      question: "What industries do you work with?",
      answer: "We work with businesses across all industries including healthcare, legal, real estate, e-commerce, professional services, and more. Our AI solutions are adaptable to any business model."
    },
    {
      question: "How secure are your AI solutions?",
      answer: "Security is our top priority. All our AI solutions use enterprise-grade encryption, secure data handling practices, and comply with industry standards."
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
                    <div className="text-gray-700 leading-relaxed">
                      {typeof faq.answer === 'string' ? faq.answer : faq.answer}
                    </div>
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
              {/* Contact Form - Left side */}
              <div>
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  netlify-honeypot="bot-field"
                  className="space-y-6"
                >
                  {/* Hidden fields for Netlify form processing */}
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  
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
                      Service of Interest *
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
                      <option value="custom-solution">Custom AI Solutions</option>
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
                    * Required fields. We'll get back to you within 12 hours.
                  </p>
                </form>
              </div>

              {/* Vertical separator line - only visible on large screens */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>

              {/* Prefer to Schedule a Call - Right side */}
              <div className="space-y-8">
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
            </div>
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
};

export default FAQsContactUs;