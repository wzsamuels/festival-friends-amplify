/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CollegeGroup } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CollegeGroupUpdateForm(props) {
  const {
    id: idProp,
    collegeGroup: collegeGroupModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    domain: "",
    webPage: "",
    countryCode: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [domain, setDomain] = React.useState(initialValues.domain);
  const [webPage, setWebPage] = React.useState(initialValues.webPage);
  const [countryCode, setCountryCode] = React.useState(
    initialValues.countryCode
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = collegeGroupRecord
      ? { ...initialValues, ...collegeGroupRecord }
      : initialValues;
    setName(cleanValues.name);
    setDomain(cleanValues.domain);
    setWebPage(cleanValues.webPage);
    setCountryCode(cleanValues.countryCode);
    setErrors({});
  };
  const [collegeGroupRecord, setCollegeGroupRecord] = React.useState(
    collegeGroupModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(CollegeGroup, idProp)
        : collegeGroupModelProp;
      setCollegeGroupRecord(record);
    };
    queryData();
  }, [idProp, collegeGroupModelProp]);
  React.useEffect(resetStateValues, [collegeGroupRecord]);
  const validations = {
    name: [{ type: "Required" }],
    domain: [{ type: "Required" }],
    webPage: [],
    countryCode: [],
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
          name,
          domain,
          webPage,
          countryCode,
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
          await DataStore.save(
            CollegeGroup.copyOf(collegeGroupRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CollegeGroupUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              domain,
              webPage,
              countryCode,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Domain"
        isRequired={true}
        isReadOnly={false}
        value={domain}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              domain: value,
              webPage,
              countryCode,
            };
            const result = onChange(modelFields);
            value = result?.domain ?? value;
          }
          if (errors.domain?.hasError) {
            runValidationTasks("domain", value);
          }
          setDomain(value);
        }}
        onBlur={() => runValidationTasks("domain", domain)}
        errorMessage={errors.domain?.errorMessage}
        hasError={errors.domain?.hasError}
        {...getOverrideProps(overrides, "domain")}
      ></TextField>
      <TextField
        label="Web page"
        isRequired={false}
        isReadOnly={false}
        value={webPage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              domain,
              webPage: value,
              countryCode,
            };
            const result = onChange(modelFields);
            value = result?.webPage ?? value;
          }
          if (errors.webPage?.hasError) {
            runValidationTasks("webPage", value);
          }
          setWebPage(value);
        }}
        onBlur={() => runValidationTasks("webPage", webPage)}
        errorMessage={errors.webPage?.errorMessage}
        hasError={errors.webPage?.hasError}
        {...getOverrideProps(overrides, "webPage")}
      ></TextField>
      <TextField
        label="Country code"
        isRequired={false}
        isReadOnly={false}
        value={countryCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              domain,
              webPage,
              countryCode: value,
            };
            const result = onChange(modelFields);
            value = result?.countryCode ?? value;
          }
          if (errors.countryCode?.hasError) {
            runValidationTasks("countryCode", value);
          }
          setCountryCode(value);
        }}
        onBlur={() => runValidationTasks("countryCode", countryCode)}
        errorMessage={errors.countryCode?.errorMessage}
        hasError={errors.countryCode?.hasError}
        {...getOverrideProps(overrides, "countryCode")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || collegeGroupModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || collegeGroupModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
