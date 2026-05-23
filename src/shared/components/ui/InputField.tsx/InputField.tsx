"use client";

import { Controller, FieldValues } from "react-hook-form";
import { InputFieldProps } from "./InputField.types";
import Text from "../text";
import Input from "../Input/Input";

const InputField = <T extends FieldValues> ({
    name, control, 
    type = "text",
    label,placeholder, 
    readOnly=false, 
    disabled=false, 
    autoComplete="off", 
    className
}: InputFieldProps<T>) => {
    return (
        <div className={`flex flex-col gap-1 ${className || ""}`}>
            
            <Text variant="label" htmlFor={name}>{label}</Text>
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState }) => (
                    <div className="flex flex-col gap-1">
                        <Input
                            {...field}
                            id={name}
                            type={type}
                            placeholder={placeholder}
                            readOnly={readOnly}
                            disabled={disabled}
                            autoComplete={autoComplete}
                        />

                        {fieldState.error && (
                           <Text variant="error">
                                {fieldState.error.message}
                            </Text>
                        )}
                    </div>
                )}
            />
        </div>
    );
};

export default InputField;