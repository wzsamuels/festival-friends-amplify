/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Event } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EventUpdateFormInputValues = {
    name?: string;
    genre?: string;
    image?: string;
    state?: string;
    city?: string;
    startDate?: string;
    endDate?: string;
    type?: string;
    address?: string;
    description?: string;
    url?: string;
    customerID?: string;
    ticketURL?: string;
    hasPaid?: boolean;
    cancelled?: boolean;
    approved?: boolean;
    subscriptionID?: string;
};
export declare type EventUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    genre?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    customerID?: ValidationFunction<string>;
    ticketURL?: ValidationFunction<string>;
    hasPaid?: ValidationFunction<boolean>;
    cancelled?: ValidationFunction<boolean>;
    approved?: ValidationFunction<boolean>;
    subscriptionID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventUpdateFormOverridesProps = {
    EventUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    genre?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    customerID?: PrimitiveOverrideProps<TextFieldProps>;
    ticketURL?: PrimitiveOverrideProps<TextFieldProps>;
    hasPaid?: PrimitiveOverrideProps<SwitchFieldProps>;
    cancelled?: PrimitiveOverrideProps<SwitchFieldProps>;
    approved?: PrimitiveOverrideProps<SwitchFieldProps>;
    subscriptionID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EventUpdateFormProps = React.PropsWithChildren<{
    overrides?: EventUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    event?: Event;
    onSubmit?: (fields: EventUpdateFormInputValues) => EventUpdateFormInputValues;
    onSuccess?: (fields: EventUpdateFormInputValues) => void;
    onError?: (fields: EventUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EventUpdateFormInputValues) => EventUpdateFormInputValues;
    onValidate?: EventUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EventUpdateForm(props: EventUpdateFormProps): React.ReactElement;
