import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-gray-300">Process is a platform that provides various tools and utilities to enhance your online experience. From speed testing to video downloading, we strive to offer solutions that simplify your digital life.</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-gray-300">Multan - Pakistan</p>
            <p className="text-gray-300">Punjab,DunyaPur, 59120</p>
            <p className="text-gray-300">Phone: (+92) 324-1877370</p>
            <p className="text-gray-300">Email: ch.hassnainanwar@gmail.com</p>
          </div>
          <div className="col-span-2 md:col-span-2 md:text-right">
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex items-center justify-end space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22 2H2v20h20V2zM4 20V8l8 6 8-6v12H4z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.293 5.293a1 1 0 0 0-1.414-1.414L12 10.586 6.121 4.707a1 1 0 0 0-1.414 1.414L10 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.879 5.879a1 1 0 1 0 1.414-1.414L13.414 12l5.879-5.879z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.05 16.63a3.001 3.001 0 0 1 0-4.26L12 12l4.95 4.37a3.001 3.001 0 0 1-4.23 4.27L12 19l-4.95 4.37a3.001 3.001 0 0 1-4.23-4.27l4.23-4.37zm12.9-4.27a3.001 3.001 0 0 1 0 4.26l-8.89 7.84a3.001 3.001 0 0 1-4.23-4.27L12 12l4.95-4.37a3.001 3.001 0 0 1 4.23 4.27l-4.23 4.37z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-300 text-center">&copy; 2024 Process . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
