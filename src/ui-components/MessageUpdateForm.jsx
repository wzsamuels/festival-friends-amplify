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
export default function MessageUpdateForm(props) {
  const {
    id: idProp,
    message: messageModelProp,
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
    const cleanValues = messageRecord
      ? { ...initialValues, ...messageRecord }
      : initialValues;
    setContent(cleanValues.content);
    setSenderProfileID(cleanValues.senderProfileID);
    setReceiverProfileID(cleanValues.receiverProfileID);
    setErrors({});
  };
  const [messageRecord, setMessageRecord] = React.useState(messageModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Message, idProp)
        : messageModelProp;
      setMessageRecord(record);
    };
    queryData();
  }, [idProp, messageModelProp]);
  React.useEffect(resetStateValues, [messageRecord]);
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
          await DataStore.save(
            Message.copyOf(messageRecord, (updated) => {
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
      {...getOverrideProps(overrides, "MessageUpdateForm")}
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || messageModelProp)}
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
              !(idProp || messageModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}