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
export declare type SocialMediaCreateFormInputValues = {
    socialMediaType?: string;
    accountURL?: string;
};
export declare type SocialMediaCreateFormValidationValues = {
    socialMediaType?: ValidationFunction<string>;
    accountURL?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SocialMediaCreateFormOverridesProps = {
    SocialMediaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    socialMediaType?: PrimitiveOverrideProps<TextFieldProps>;
    accountURL?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SocialMediaCreateFormProps = React.PropsWithChildren<{
    overrides?: SocialMediaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SocialMediaCreateFormInputValues) => SocialMediaCreateFormInputValues;
    onSuccess?: (fields: SocialMediaCreateFormInputValues) => void;
    onError?: (fields: SocialMediaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SocialMediaCreateFormInputValues) => SocialMediaCreateFormInputValues;
    onValidate?: SocialMediaCreateFormValidationValues;
} & React.CSSProperties>;
export default function SocialMediaCreateForm(props: SocialMediaCreateFormProps): React.ReactElement;
