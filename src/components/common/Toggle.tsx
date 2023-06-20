import {Control, FieldPath, FieldValues, useController} from "react-hook-form";
import {Switch} from "@headlessui/react";
import React from "react";

interface ToggleProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  label: string
}

const Toggle = <T extends FieldValues,>({name, control, label}: ToggleProps<T>) => {
  const {
    field: { value, onChange }
  } = useController({name, control});

  return (
    <Switch.Group as="div" className="flex items-center justify-between my-4">
      <span className="flex-grow flex flex-col">
        <Switch.Label
          as="span"
          className="text-sm font-medium text-gray-900"
        >
          { label }
        </Switch.Label>
      </span>

      <Switch
        checked={value}
        onChange={onChange}
        className={`${value ? "bg-darkGreen" : "bg-darkYellow"} relative mr-8 inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black`}
      >
        <span
          aria-hidden="true"
          className={`${value ? "translate-x-5" : "translate-x-0"} pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
    </Switch.Group>
  );
}

export default Toggle;
