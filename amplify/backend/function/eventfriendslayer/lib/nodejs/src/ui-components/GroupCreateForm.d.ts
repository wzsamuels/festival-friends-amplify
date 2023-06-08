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
export declare type GroupCreateFormInputValues = {
    name?: string;
    domain?: string;
    webPage?: string;
};
export declare type GroupCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    domain?: ValidationFunction<string>;
    webPage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GroupCreateFormOverridesProps = {
    GroupCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    domain?: PrimitiveOverrideProps<TextFieldProps>;
    webPage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GroupCreateFormProps = React.PropsWithChildren<{
    overrides?: GroupCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GroupCreateFormInputValues) => GroupCreateFormInputValues;
    onSuccess?: (fields: GroupCreateFormInputValues) => void;
    onError?: (fields: GroupCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GroupCreateFormInputValues) => GroupCreateFormInputValues;
    onValidate?: GroupCreateFormValidationValues;
} & React.CSSProperties>;
export default function GroupCreateForm(props: GroupCreateFormProps): React.ReactElement;
