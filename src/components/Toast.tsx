import React from "react";

type Props = {
    message: string;
}
export const ErrorToast: React.FC<Props> = ({message}: Props) => {
    return (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white p-4 rounded shadow-md z-50">
            {message}
        </div>
    );
};
