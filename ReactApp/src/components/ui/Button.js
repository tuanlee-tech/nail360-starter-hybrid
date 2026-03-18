import React from 'react';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  isLoading = false,
  ...props
}) => {
  const baseStyles =
    'px-6 py-3 rounded-xl font-bold transition-all active:scale-95 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-pink-600 text-white hover:bg-pink-700 shadow-lg shadow-pink-200',
    secondary: 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-200',
    outline: 'border-2 border-pink-600 text-pink-600 hover:bg-pink-50',
    ghost: 'text-gray-600 hover:bg-gray-100',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
