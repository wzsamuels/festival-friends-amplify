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
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>;
export declare type FriendsCreateFormInputValues = {
  userID?: string;
  friendID?: string;
  status?: string;
};
export declare type FriendsCreateFormValidationValues = {
  userID?: ValidationFunction<string>;
  friendID?: ValidationFunction<string>;
  status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type FriendsCreateFormOverridesProps = {
  FriendsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  userID?: PrimitiveOverrideProps<TextFieldProps>;
  friendID?: PrimitiveOverrideProps<TextFieldProps>;
  status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FriendsCreateFormProps = React.PropsWithChildren<
  {
    overrides?: FriendsCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: FriendsCreateFormInputValues
    ) => FriendsCreateFormInputValues;
    onSuccess?: (fields: FriendsCreateFormInputValues) => void;
    onError?: (
      fields: FriendsCreateFormInputValues,
      errorMessage: string
    ) => void;
    onChange?: (
      fields: FriendsCreateFormInputValues
    ) => FriendsCreateFormInputValues;
    onValidate?: FriendsCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function FriendsCreateForm(
  props: FriendsCreateFormProps
): React.ReactElement;
