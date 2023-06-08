/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Message } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MessageCreateForm(props) {
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
    content: "",
    senderProfileID: "",
    receiverProfileID: "",
  };
  const [content, setContent] = React.useState(initialValues.content);
  const [senderProfileID, setSenderProfileID] = React.useState(
    initialValues.senderProfileID
  );
  const [receiverProfileID, setReceiverProfileID] = React.useState(
    initialValues.receiverProfileID
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setContent(initialValues.content);
    setSenderProfileID(initialValues.senderProfileID);
    setReceiverProfileID(initialValues.receiverProfileID);
    setErrors({});
  };
  const validations = {
    content: [{ type: "Required" }],
    senderProfileID: [{ type: "Required" }],
    receiverProfileID: [{ type: "Required" }],
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
          content,
          senderProfileID,
          receiverProfileID,
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
          await DataStore.save(new Message(modelFields));
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
      {...getOverrideProps(overrides, "MessageCreateForm")}
      {...rest}
    >
      <TextField
        label="Content"
        isRequired={true}
        isReadOnly={false}
        value={content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              content: value,
              senderProfileID,
              receiverProfileID,
            };
            const result = onChange(modelFields);
            value = result?.content ?? value;
          }
          if (errors.content?.hasError) {
            runValidationTasks("content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("content", content)}
        errorMessage={errors.content?.errorMessage}
        hasError={errors.content?.hasError}
        {...getOverrideProps(overrides, "content")}
      ></TextField>
      <TextField
        label="Sender profile id"
        isRequired={true}
        isReadOnly={false}
        value={senderProfileID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              content,
              senderProfileID: value,
              receiverProfileID,
            };
            const result = onChange(modelFields);
            value = result?.senderProfileID ?? value;
          }
          if (errors.senderProfileID?.hasError) {
            runValidationTasks("senderProfileID", value);
          }
          setSenderProfileID(value);
        }}
        onBlur={() => runValidationTasks("senderProfileID", senderProfileID)}
        errorMessage={errors.senderProfileID?.errorMessage}
        hasError={errors.senderProfileID?.hasError}
        {...getOverrideProps(overrides, "senderProfileID")}
      ></TextField>
      <TextField
        label="Receiver profile id"
        isRequired={true}
        isReadOnly={false}
        value={receiverProfileID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              content,
              senderProfileID,
              receiverProfileID: value,
            };
            const result = onChange(modelFields);
            value = result?.receiverProfileID ?? value;
          }
          if (errors.receiverProfileID?.hasError) {
            runValidationTasks("receiverProfileID", value);
          }
          setReceiverProfileID(value);
        }}
        onBlur={() =>
          runValidationTasks("receiverProfileID", receiverProfileID)
        }
        errorMessage={errors.receiverProfileID?.errorMessage}
        hasError={errors.receiverProfileID?.hasError}
        {...getOverrideProps(overrides, "receiverProfileID")}
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
