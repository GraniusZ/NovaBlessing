"use client";
import {ReactNode} from "react";
import {FormControl, InputLabel, Select,} from "@mui/material";
import {Control, Controller} from "react-hook-form";

interface ReactHookFormSelectProps<T> {
  name: string;
  label: string;
  control: Control<any>;
  defaultValue: string;
  children: ReactNode;
}

const ReactHookFormSelect = <T, >({
                                    name,
                                    label,
                                    control,
                                    defaultValue,
                                    children,
                                    ...props
                                  }: ReactHookFormSelectProps<T>) => {
  const labelId = `${name}-label`;
  return (
      <FormControl {...props}>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Controller
            render={({field}) => (
                <Select labelId={labelId} label={label} {...field}>
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
