import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function Input(props: InputProps) {
    return (
        <input
            className=" h-9 rounded border-md outline-none px-2 mb-3"
            {...props}
        />
    )
}