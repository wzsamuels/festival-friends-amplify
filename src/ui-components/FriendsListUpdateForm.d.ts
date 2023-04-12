/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FriendsList } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FriendsListUpdateFormInputValues = {
    userIDs?: string[];
};
export declare type FriendsListUpdateFormValidationValues = {
    userIDs?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FriendsListUpdateFormOverridesProps = {
    FriendsListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userIDs?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FriendsListUpdateFormProps = React.PropsWithChildren<{
    overrides?: FriendsListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    friendsList?: FriendsList;
    onSubmit?: (fields: FriendsListUpdateFormInputValues) => FriendsListUpdateFormInputValues;
    onSuccess?: (fields: FriendsListUpdateFormInputValues) => void;
    onError?: (fields: FriendsListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FriendsListUpdateFormInputValues) => FriendsListUpdateFormInputValues;
    onValidate?: FriendsListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FriendsListUpdateForm(props: FriendsListUpdateFormProps): React.ReactElement;
