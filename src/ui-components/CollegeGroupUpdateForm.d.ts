/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollegeGroup } from "../models";
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>;
export declare type CollegeGroupUpdateFormInputValues = {
  name?: string;
  domain?: string;
  webPage?: string;
  countryCode?: string;
};
export declare type CollegeGroupUpdateFormValidationValues = {
  name?: ValidationFunction<string>;
  domain?: ValidationFunction<string>;
  webPage?: ValidationFunction<string>;
  countryCode?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type CollegeGroupUpdateFormOverridesProps = {
  CollegeGroupUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  name?: PrimitiveOverrideProps<TextFieldProps>;
  domain?: PrimitiveOverrideProps<TextFieldProps>;
  webPage?: PrimitiveOverrideProps<TextFieldProps>;
  countryCode?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CollegeGroupUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: CollegeGroupUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    collegeGroup?: CollegeGroup;
    onSubmit?: (
      fields: CollegeGroupUpdateFormInputValues
    ) => CollegeGroupUpdateFormInputValues;
    onSuccess?: (fields: CollegeGroupUpdateFormInputValues) => void;
    onError?: (
      fields: CollegeGroupUpdateFormInputValues,
      errorMessage: string
    ) => void;
    onChange?: (
      fields: CollegeGroupUpdateFormInputValues
    ) => CollegeGroupUpdateFormInputValues;
    onValidate?: CollegeGroupUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function CollegeGroupUpdateForm(
  props: CollegeGroupUpdateFormProps
): React.ReactElement;
