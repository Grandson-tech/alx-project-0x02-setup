import { ButtonProps } from '../../interfaces';

export default function Button({ 
  size, 
  shape, 
  children, 
  onClick, 
  className = '' 
}: ButtonProps) {
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full'
  };

  const baseClasses = 'font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${shapeClasses[shape]} ${className}`}
    >
      {children}
    </button>
  );
}

