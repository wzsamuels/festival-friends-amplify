/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import {
  GridProps,
  SelectFieldProps,
  TextFieldProps,
} from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>;
export declare type FestivalCreateFormInputValues = {
  name?: string;
  genre?: string;
  image?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  type?: string;
  tagline?: string;
  description?: string;
};
export declare type FestivalCreateFormValidationValues = {
  name?: ValidationFunction<string>;
  genre?: ValidationFunction<string>;
  image?: ValidationFunction<string>;
  location?: ValidationFunction<string>;
  startDate?: ValidationFunction<string>;
  endDate?: ValidationFunction<string>;
  type?: ValidationFunction<string>;
  tagline?: ValidationFunction<string>;
  description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type FestivalCreateFormOverridesProps = {
  FestivalCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  name?: PrimitiveOverrideProps<TextFieldProps>;
  genre?: PrimitiveOverrideProps<TextFieldProps>;
  image?: PrimitiveOverrideProps<TextFieldProps>;
  location?: PrimitiveOverrideProps<TextFieldProps>;
  startDate?: PrimitiveOverrideProps<TextFieldProps>;
  endDate?: PrimitiveOverrideProps<TextFieldProps>;
  type?: PrimitiveOverrideProps<SelectFieldProps>;
  tagline?: PrimitiveOverrideProps<TextFieldProps>;
  description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FestivalCreateFormProps = React.PropsWithChildren<
  {
    overrides?: FestivalCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: FestivalCreateFormInputValues
    ) => FestivalCreateFormInputValues;
    onSuccess?: (fields: FestivalCreateFormInputValues) => void;
    onError?: (
      fields: FestivalCreateFormInputValues,
      errorMessage: string
    ) => void;
    onChange?: (
      fields: FestivalCreateFormInputValues
    ) => FestivalCreateFormInputValues;
    onValidate?: FestivalCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function FestivalCreateForm(
  props: FestivalCreateFormProps
): React.ReactElement;
