/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EventCreateFormInputValues = {
    name?: string;
    genre?: string;
    image?: string;
    location?: string;
    state?: string;
    city?: string;
    address?: string;
    startDate?: string;
    endDate?: string;
    type?: string;
    description?: string;
    url?: string;
    customerID?: string;
    hasPaid?: boolean;
    cancelled?: boolean;
    subscriptionID?: string;
    approved?: boolean;
};
export declare type EventCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    genre?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    customerID?: ValidationFunction<string>;
    hasPaid?: ValidationFunction<boolean>;
    cancelled?: ValidationFunction<boolean>;
    subscriptionID?: ValidationFunction<string>;
    approved?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventCreateFormOverridesProps = {
    EventCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    genre?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    customerID?: PrimitiveOverrideProps<TextFieldProps>;
    hasPaid?: PrimitiveOverrideProps<SwitchFieldProps>;
    cancelled?: PrimitiveOverrideProps<SwitchFieldProps>;
    subscriptionID?: PrimitiveOverrideProps<TextFieldProps>;
    approved?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type EventCreateFormProps = React.PropsWithChildren<{
    overrides?: EventCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EventCreateFormInputValues) => EventCreateFormInputValues;
    onSuccess?: (fields: EventCreateFormInputValues) => void;
    onError?: (fields: EventCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EventCreateFormInputValues) => EventCreateFormInputValues;
    onValidate?: EventCreateFormValidationValues;
} & React.CSSProperties>;
export default function EventCreateForm(props: EventCreateFormProps): React.ReactElement;