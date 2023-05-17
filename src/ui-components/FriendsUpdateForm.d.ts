/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Friends } from "../models";
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>;
export declare type FriendsUpdateFormInputValues = {
  userID?: string;
  friendID?: string;
  status?: string;
};
export declare type FriendsUpdateFormValidationValues = {
  userID?: ValidationFunction<string>;
  friendID?: ValidationFunction<string>;
  status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type FriendsUpdateFormOverridesProps = {
  FriendsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  userID?: PrimitiveOverrideProps<TextFieldProps>;
  friendID?: PrimitiveOverrideProps<TextFieldProps>;
  status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FriendsUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: FriendsUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    friends?: Friends;
    onSubmit?: (
      fields: FriendsUpdateFormInputValues
    ) => FriendsUpdateFormInputValues;
    onSuccess?: (fields: FriendsUpdateFormInputValues) => void;
    onError?: (
      fields: FriendsUpdateFormInputValues,
      errorMessage: string
    ) => void;
    onChange?: (
      fields: FriendsUpdateFormInputValues
    ) => FriendsUpdateFormInputValues;
    onValidate?: FriendsUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function FriendsUpdateForm(
  props: FriendsUpdateFormProps
): React.ReactElement;
