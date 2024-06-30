import React, { MouseEvent, useCallback } from "react";
import "./index.css";

export interface ButtonProps {
    children?: string | React.ReactNode;
    clickHandler?: () => void;
    disabled: boolean;
    type: "button" | "submit" | "reset";
}

export default function Button({
    children = "Convert Playlist",
    clickHandler = () => {},
    disabled = false,
    type = "button",
}: ButtonProps) {
    console.log("Button rendered");

    const handleClick: (event: MouseEvent<HTMLButtonElement>) => void =
        useCallback(
            (_event: MouseEvent<HTMLButtonElement>): void => {
                clickHandler();
            },
            [clickHandler]
        );

    return (
        <button onClick={handleClick} type={type} disabled={disabled}>
            {children}
        </button>
    );
}
