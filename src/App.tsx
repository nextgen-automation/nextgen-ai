import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <nav className="bg-black/50 backdrop-blur-sm fixed w-full z-10">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            BusinessAIdevs
          </h1>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AI Solutions for Business Growth
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transforming businesses with cutting-edge AI technology and innovative solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {['AI Consulting', 'Machine Learning', 'Data Analytics'].map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-900 hover:to-purple-900 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{service}</h3>
              <p className="text-gray-400">
                Advanced solutions tailored to your business needs
              </p>
            </div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}

export default App;