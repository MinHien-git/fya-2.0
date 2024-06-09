import React from 'react';

const Popup = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full relative">
        <div className="mt-6 mb-6">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-500 hover:text-gray-700" 
          >
            <svg 
              width="30" 
              height="30" 
              viewBox="0 0 45 45" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle 
                cx="22.5" 
                cy="22.5" 
                r="22.5" 
                fill="#D9D9D9"
              />
              <path 
                d="M30.912 30.9572L15.0493 15.0002" 
                stroke="black" 
                stroke-width="2"
              />
              <path 
                d="M14.9969 30.9091L30.9539 15.0464" 
                stroke="black" 
                stroke-width="2"
              />
              </svg>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;