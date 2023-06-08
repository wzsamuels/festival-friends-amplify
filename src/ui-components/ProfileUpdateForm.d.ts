/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Profile } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProfileUpdateFormInputValues = {
    sub?: string;
    firstName?: string;
    lastName?: string;
    verified?: boolean;
    submitted?: boolean;
    profilePhotoID?: string;
    bannerPhotoID?: string;
    verifyPhotoID?: string;
    customerID?: string;
    city?: string;
    state?: string;
    school?: string;
    address?: string;
    address2?: string;
    phone?: string;
    email?: string;
    zipcode?: string;
    birthDate?: string;
    hobbies?: string;
    gender?: string;
};
export declare type ProfileUpdateFormValidationValues = {
    sub?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    verified?: ValidationFunction<boolean>;
    submitted?: ValidationFunction<boolean>;
    profilePhotoID?: ValidationFunction<string>;
    bannerPhotoID?: ValidationFunction<string>;
    verifyPhotoID?: ValidationFunction<string>;
    customerID?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    school?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    address2?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    zipcode?: ValidationFunction<string>;
    birthDate?: ValidationFunction<string>;
    hobbies?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileUpdateFormOverridesProps = {
    ProfileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    sub?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    verified?: PrimitiveOverrideProps<SwitchFieldProps>;
    submitted?: PrimitiveOverrideProps<SwitchFieldProps>;
    profilePhotoID?: PrimitiveOverrideProps<TextFieldProps>;
    bannerPhotoID?: PrimitiveOverrideProps<TextFieldProps>;
    verifyPhotoID?: PrimitiveOverrideProps<TextFieldProps>;
    customerID?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    school?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    address2?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    zipcode?: PrimitiveOverrideProps<TextFieldProps>;
    birthDate?: PrimitiveOverrideProps<TextFieldProps>;
    hobbies?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProfileUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProfileUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    profile?: Profile;
    onSubmit?: (fields: ProfileUpdateFormInputValues) => ProfileUpdateFormInputValues;
    onSuccess?: (fields: ProfileUpdateFormInputValues) => void;
    onError?: (fields: ProfileUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProfileUpdateFormInputValues) => ProfileUpdateFormInputValues;
    onValidate?: ProfileUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProfileUpdateForm(props: ProfileUpdateFormProps): React.ReactElement;