import { ChangeEvent, ChangeEventHandler, useCallback } from "react";
import "./index.css";

export interface InputProps {
    clickHandler?: () => void;
    placeholder: string;
    defaultValue?: string;
    type: "text" | "password" | "email" | "number" | "tel" | "url";
    warning?: string;
    pattern?: string;
}

export default function Input({
    defaultValue = "",
    placeholder = "Write something here",
    clickHandler = () => {},
    pattern = "/[^,/|\\x22]+/",
    type = "text",
    warning = "Invalid input",
}: InputProps) {
    console.log("Input rendered");

    const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
        (_event: ChangeEvent<HTMLInputElement>): void => {
            clickHandler();
        },
        [clickHandler]
    );

    return (
        <input
            onChange={handleChange}
            type={type}
            defaultValue={defaultValue}
            placeholder={placeholder}
            pattern={pattern}
            title={warning}
        ></input>
    );
}
