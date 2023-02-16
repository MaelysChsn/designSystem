import React from 'react';

function AuthButton({onClick, label, classNames}) {
    return (
        <button
            className={`${classNames} text_current_text`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default AuthButton;