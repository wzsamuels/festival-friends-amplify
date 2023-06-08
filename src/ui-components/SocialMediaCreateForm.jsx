/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { SocialMedia } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SocialMediaCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    socialMediaType: "",
    accountURL: "",
  };
  const [socialMediaType, setSocialMediaType] = React.useState(
    initialValues.socialMediaType
  );
  const [accountURL, setAccountURL] = React.useState(initialValues.accountURL);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSocialMediaType(initialValues.socialMediaType);
    setAccountURL(initialValues.accountURL);
    setErrors({});
  };
  const validations = {
    socialMediaType: [{ type: "Required" }],
    accountURL: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          socialMediaType,
          accountURL,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new SocialMedia(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SocialMediaCreateForm")}
      {...rest}
    >
      <TextField
        label="Social media type"
        isRequired={true}
        isReadOnly={false}
        value={socialMediaType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              socialMediaType: value,
              accountURL,
            };
            const result = onChange(modelFields);
            value = result?.socialMediaType ?? value;
          }
          if (errors.socialMediaType?.hasError) {
            runValidationTasks("socialMediaType", value);
          }
          setSocialMediaType(value);
        }}
        onBlur={() => runValidationTasks("socialMediaType", socialMediaType)}
        errorMessage={errors.socialMediaType?.errorMessage}
        hasError={errors.socialMediaType?.hasError}
        {...getOverrideProps(overrides, "socialMediaType")}
      ></TextField>
      <TextField
        label="Account url"
        isRequired={true}
        isReadOnly={false}
        value={accountURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              socialMediaType,
              accountURL: value,
            };
            const result = onChange(modelFields);
            value = result?.accountURL ?? value;
          }
          if (errors.accountURL?.hasError) {
            runValidationTasks("accountURL", value);
          }
          setAccountURL(value);
        }}
        onBlur={() => runValidationTasks("accountURL", accountURL)}
        errorMessage={errors.accountURL?.errorMessage}
        hasError={errors.accountURL?.hasError}
        {...getOverrideProps(overrides, "accountURL")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
