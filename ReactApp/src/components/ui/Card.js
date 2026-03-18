import React from 'react';

const Card = ({ children, title, footer, className = '' }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden ${className}`}
    >
      {title && (
        <div className="px-6 py-4 border-b border-gray-50 bg-gray-50/30">
          <h3 className="font-bold text-gray-900">{title}</h3>
        </div>
      )}
      <div className="p-6">{children}</div>
      {footer && <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-50">{footer}</div>}
    </div>
  );
};

export default Card;
