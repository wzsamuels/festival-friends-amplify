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
export declare type FriendsListCreateFormInputValues = {
    userIDs?: string[];
    untitledfield?: string;
};
export declare type FriendsListCreateFormValidationValues = {
    userIDs?: ValidationFunction<string>;
    untitledfield?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FriendsListCreateFormOverridesProps = {
    FriendsListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userIDs?: PrimitiveOverrideProps<TextFieldProps>;
    untitledfield?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FriendsListCreateFormProps = React.PropsWithChildren<{
    overrides?: FriendsListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FriendsListCreateFormInputValues) => FriendsListCreateFormInputValues;
    onSuccess?: (fields: FriendsListCreateFormInputValues) => void;
    onError?: (fields: FriendsListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FriendsListCreateFormInputValues) => FriendsListCreateFormInputValues;
    onValidate?: FriendsListCreateFormValidationValues;
} & React.CSSProperties>;
export default function FriendsListCreateForm(props: FriendsListCreateFormProps): React.ReactElement;
