"use client";
import {ReactNode} from "react";
import {FormControl, Select} from "@mui/material";
import {Control, Controller} from "react-hook-form";

interface ReactHookFormSelectProps<T> {
    name: string;
    control: Control<any>;
    defaultValue: string;
    children: ReactNode;
}

const ReactHookFormSelect = <T, >({
                                      name,
                                      control,
                                      defaultValue,
                                      children,
                                      ...props
                                  }: ReactHookFormSelectProps<T>) => {
    const labelId = `${name}-label`;
    return (
        <FormControl {...props}>
            <Controller
                render={({field}) => (
                    <Select labelId={labelId} {...field}>
                        {children}
                    </Select>
                )}
                name={name}
                control={control}
                defaultValue={defaultValue}
            />
        </FormControl>
    );
};

export default ReactHookFormSelect;
