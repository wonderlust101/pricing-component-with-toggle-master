import React from "react";
import './Button.scss'

type ButtonProps = {
    children?: React.ReactNode;
    color: string;
    href?: string;
}

export default function Button({children, color, href}: ButtonProps): React.JSX.Element {
    const Component = href ? 'a' : 'button';

    return (
        <Component href={href} className={'button button--' + color}>
            {children}
        </Component>
    );
}
