/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CollegeGroupCreateFormInputValues = {
    name?: string;
    domain?: string;
    webPage?: string;
    countryCode?: string;
};
export declare type CollegeGroupCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    domain?: ValidationFunction<string>;
    webPage?: ValidationFunction<string>;
    countryCode?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CollegeGroupCreateFormOverridesProps = {
    CollegeGroupCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    domain?: PrimitiveOverrideProps<TextFieldProps>;
    webPage?: PrimitiveOverrideProps<TextFieldProps>;
    countryCode?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CollegeGroupCreateFormProps = React.PropsWithChildren<{
    overrides?: CollegeGroupCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CollegeGroupCreateFormInputValues) => CollegeGroupCreateFormInputValues;
    onSuccess?: (fields: CollegeGroupCreateFormInputValues) => void;
    onError?: (fields: CollegeGroupCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CollegeGroupCreateFormInputValues) => CollegeGroupCreateFormInputValues;
    onValidate?: CollegeGroupCreateFormValidationValues;
} & React.CSSProperties>;
export default function CollegeGroupCreateForm(props: CollegeGroupCreateFormProps): React.ReactElement;
