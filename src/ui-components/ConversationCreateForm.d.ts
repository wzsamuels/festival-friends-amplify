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
export declare type ConversationCreateFormInputValues = {
  participants?: string[];
  lastMessage?: string;
  lastMessageCreatedAt?: string;
};
export declare type ConversationCreateFormValidationValues = {
  participants?: ValidationFunction<string>;
  lastMessage?: ValidationFunction<string>;
  lastMessageCreatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type ConversationCreateFormOverridesProps = {
  ConversationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  participants?: PrimitiveOverrideProps<TextFieldProps>;
  lastMessage?: PrimitiveOverrideProps<TextFieldProps>;
  lastMessageCreatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ConversationCreateFormProps = React.PropsWithChildren<
  {
    overrides?: ConversationCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: ConversationCreateFormInputValues
    ) => ConversationCreateFormInputValues;
    onSuccess?: (fields: ConversationCreateFormInputValues) => void;
    onError?: (
      fields: ConversationCreateFormInputValues,
      errorMessage: string
    ) => void;
    onChange?: (
      fields: ConversationCreateFormInputValues
    ) => ConversationCreateFormInputValues;
    onValidate?: ConversationCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function ConversationCreateForm(
  props: ConversationCreateFormProps
): React.ReactElement;
