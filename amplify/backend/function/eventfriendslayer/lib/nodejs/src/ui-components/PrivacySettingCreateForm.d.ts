/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PrivacySettingCreateFormInputValues = {
    city?: boolean;
    state?: boolean;
    school?: boolean;
    email?: boolean;
    events?: boolean;
    rides?: boolean;
    friends?: boolean;
    photos?: boolean;
};
export declare type PrivacySettingCreateFormValidationValues = {
    city?: ValidationFunction<boolean>;
    state?: ValidationFunction<boolean>;
    school?: ValidationFunction<boolean>;
    email?: ValidationFunction<boolean>;
    events?: ValidationFunction<boolean>;
    rides?: ValidationFunction<boolean>;
    friends?: ValidationFunction<boolean>;
    photos?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrivacySettingCreateFormOverridesProps = {
    PrivacySettingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    city?: PrimitiveOverrideProps<SwitchFieldProps>;
    state?: PrimitiveOverrideProps<SwitchFieldProps>;
    school?: PrimitiveOverrideProps<SwitchFieldProps>;
    email?: PrimitiveOverrideProps<SwitchFieldProps>;
    events?: PrimitiveOverrideProps<SwitchFieldProps>;
    rides?: PrimitiveOverrideProps<SwitchFieldProps>;
    friends?: PrimitiveOverrideProps<SwitchFieldProps>;
    photos?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type PrivacySettingCreateFormProps = React.PropsWithChildren<{
    overrides?: PrivacySettingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PrivacySettingCreateFormInputValues) => PrivacySettingCreateFormInputValues;
    onSuccess?: (fields: PrivacySettingCreateFormInputValues) => void;
    onError?: (fields: PrivacySettingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PrivacySettingCreateFormInputValues) => PrivacySettingCreateFormInputValues;
    onValidate?: PrivacySettingCreateFormValidationValues;
} & React.CSSProperties>;
export default function PrivacySettingCreateForm(props: PrivacySettingCreateFormProps): React.ReactElement;
