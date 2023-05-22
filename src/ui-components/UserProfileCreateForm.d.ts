/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserProfileCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    verified?: boolean;
    verifySubmitted?: boolean;
    profilePhotoID?: string;
    bannerPhotoID?: string;
    city?: string;
    state?: string;
    school?: string;
    address?: string;
    address2?: string;
    phone?: string;
    email?: string;
    zipcode?: string;
};
export declare type UserProfileCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    verified?: ValidationFunction<boolean>;
    verifySubmitted?: ValidationFunction<boolean>;
    profilePhotoID?: ValidationFunction<string>;
    bannerPhotoID?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    school?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    address2?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    zipcode?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserProfileCreateFormOverridesProps = {
    UserProfileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    verified?: PrimitiveOverrideProps<SwitchFieldProps>;
    verifySubmitted?: PrimitiveOverrideProps<SwitchFieldProps>;
    profilePhotoID?: PrimitiveOverrideProps<TextFieldProps>;
    bannerPhotoID?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    school?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    address2?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    zipcode?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserProfileCreateFormProps = React.PropsWithChildren<{
    overrides?: UserProfileCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserProfileCreateFormInputValues) => UserProfileCreateFormInputValues;
    onSuccess?: (fields: UserProfileCreateFormInputValues) => void;
    onError?: (fields: UserProfileCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserProfileCreateFormInputValues) => UserProfileCreateFormInputValues;
    onValidate?: UserProfileCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserProfileCreateForm(props: UserProfileCreateFormProps): React.ReactElement;
