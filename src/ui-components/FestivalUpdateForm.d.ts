/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Festival } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FestivalUpdateFormInputValues = {
    name?: string;
    genre?: string;
    image?: string;
    location?: string;
    startDate?: string;
    endDate?: string;
    type?: string;
};
export declare type FestivalUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    genre?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FestivalUpdateFormOverridesProps = {
    FestivalUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    genre?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type FestivalUpdateFormProps = React.PropsWithChildren<{
    overrides?: FestivalUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    festival?: Festival;
    onSubmit?: (fields: FestivalUpdateFormInputValues) => FestivalUpdateFormInputValues;
    onSuccess?: (fields: FestivalUpdateFormInputValues) => void;
    onError?: (fields: FestivalUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FestivalUpdateFormInputValues) => FestivalUpdateFormInputValues;
    onValidate?: FestivalUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FestivalUpdateForm(props: FestivalUpdateFormProps): React.ReactElement;
