import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, isInverted, ...otherProps }) => (
    <button className={`${isInverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-signin' : ''} custom-button`} {...otherProps}>
        {children}
    </button >
);

export default CustomButton;