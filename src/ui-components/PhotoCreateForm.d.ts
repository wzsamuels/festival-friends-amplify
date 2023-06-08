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
export declare type PhotoCreateFormInputValues = {
    s3Key?: string;
    isPrivate?: boolean;
    identityId?: string;
    description?: string;
};
export declare type PhotoCreateFormValidationValues = {
    s3Key?: ValidationFunction<string>;
    isPrivate?: ValidationFunction<boolean>;
    identityId?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PhotoCreateFormOverridesProps = {
    PhotoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    s3Key?: PrimitiveOverrideProps<TextFieldProps>;
    isPrivate?: PrimitiveOverrideProps<SwitchFieldProps>;
    identityId?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PhotoCreateFormProps = React.PropsWithChildren<{
    overrides?: PhotoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PhotoCreateFormInputValues) => PhotoCreateFormInputValues;
    onSuccess?: (fields: PhotoCreateFormInputValues) => void;
    onError?: (fields: PhotoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PhotoCreateFormInputValues) => PhotoCreateFormInputValues;
    onValidate?: PhotoCreateFormValidationValues;
} & React.CSSProperties>;
export default function PhotoCreateForm(props: PhotoCreateFormProps): React.ReactElement;