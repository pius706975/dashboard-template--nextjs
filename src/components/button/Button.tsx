import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className = 'bg-purple-600 hover:bg-purple-700 text-white',
}) => {
    return (
        <button
            type="submit"
            onClick={onClick}
            className={`w-full py-2 rounded-lg transition ${className}`}>
            {children}
        </button>
    );
};

export default Button;
