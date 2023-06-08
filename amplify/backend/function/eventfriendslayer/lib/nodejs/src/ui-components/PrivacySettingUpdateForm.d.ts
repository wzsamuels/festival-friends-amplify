/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PrivacySetting } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PrivacySettingUpdateFormInputValues = {
    city?: boolean;
    state?: boolean;
    school?: boolean;
    email?: boolean;
    events?: boolean;
    rides?: boolean;
    friends?: boolean;
    photos?: boolean;
};
export declare type PrivacySettingUpdateFormValidationValues = {
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
export declare type PrivacySettingUpdateFormOverridesProps = {
    PrivacySettingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    city?: PrimitiveOverrideProps<SwitchFieldProps>;
    state?: PrimitiveOverrideProps<SwitchFieldProps>;
    school?: PrimitiveOverrideProps<SwitchFieldProps>;
    email?: PrimitiveOverrideProps<SwitchFieldProps>;
    events?: PrimitiveOverrideProps<SwitchFieldProps>;
    rides?: PrimitiveOverrideProps<SwitchFieldProps>;
    friends?: PrimitiveOverrideProps<SwitchFieldProps>;
    photos?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type PrivacySettingUpdateFormProps = React.PropsWithChildren<{
    overrides?: PrivacySettingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    privacySetting?: PrivacySetting;
    onSubmit?: (fields: PrivacySettingUpdateFormInputValues) => PrivacySettingUpdateFormInputValues;
    onSuccess?: (fields: PrivacySettingUpdateFormInputValues) => void;
    onError?: (fields: PrivacySettingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PrivacySettingUpdateFormInputValues) => PrivacySettingUpdateFormInputValues;
    onValidate?: PrivacySettingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PrivacySettingUpdateForm(props: PrivacySettingUpdateFormProps): React.ReactElement;
