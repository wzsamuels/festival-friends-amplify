/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, SwitchField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { PrivacySetting } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PrivacySettingUpdateForm(props) {
  const {
    id: idProp,
    privacySetting: privacySettingModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    city: false,
    state: false,
    school: false,
    email: false,
    attendingEvents: false,
    rides: false,
    friends: false,
    photos: false,
  };
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [school, setSchool] = React.useState(initialValues.school);
  const [email, setEmail] = React.useState(initialValues.email);
  const [attendingEvents, setAttendingEvents] = React.useState(
    initialValues.attendingEvents
  );
  const [rides, setRides] = React.useState(initialValues.rides);
  const [friends, setFriends] = React.useState(initialValues.friends);
  const [photos, setPhotos] = React.useState(initialValues.photos);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = privacySettingRecord
      ? { ...initialValues, ...privacySettingRecord }
      : initialValues;
    setCity(cleanValues.city);
    setState(cleanValues.state);
    setSchool(cleanValues.school);
    setEmail(cleanValues.email);
    setAttendingEvents(cleanValues.attendingEvents);
    setRides(cleanValues.rides);
    setFriends(cleanValues.friends);
    setPhotos(cleanValues.photos);
    setErrors({});
  };
  const [privacySettingRecord, setPrivacySettingRecord] = React.useState(
    privacySettingModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(PrivacySetting, idProp)
        : privacySettingModelProp;
      setPrivacySettingRecord(record);
    };
    queryData();
  }, [idProp, privacySettingModelProp]);
  React.useEffect(resetStateValues, [privacySettingRecord]);
  const validations = {
    city: [],
    state: [],
    school: [],
    email: [],
    attendingEvents: [],
    rides: [],
    friends: [],
    photos: [],
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
          city,
          state,
          school,
          email,
          attendingEvents,
          rides,
          friends,
          photos,
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
            PrivacySetting.copyOf(privacySettingRecord, (updated) => {
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
      {...getOverrideProps(overrides, "PrivacySettingUpdateForm")}
      {...rest}
    >
      <SwitchField
        label="City"
        defaultChecked={false}
        isDisabled={false}
        isChecked={city}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              city: value,
              state,
              school,
              email,
              attendingEvents,
              rides,
              friends,
              photos,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></SwitchField>
      <SwitchField
        label="State"
        defaultChecked={false}
        isDisabled={false}
        isChecked={state}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              city,
              state: value,
              school,
              email,
              attendingEvents,
              rides,
              friends,
              photos,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></SwitchField>
      <SwitchField
        label="School"
        defaultChecked={false}
        isDisabled={false}
        isChecked={school}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              city,
              state,
              school: value,
              email,
              attendingEvents,
              rides,
              friends,
              photos,
            };
            const result = onChange(modelFields);
            value = result?.school ?? value;
          }
          if (errors.school?.hasError) {
            runValidationTasks("school", value);
          }
          setSchool(value);
        }}
        onBlur={() => runValidationTasks("school", school)}
        errorMessage={errors.school?.errorMessage}
        hasError={errors.school?.hasError}
        {...getOverrideProps(overrides, "school")}
      ></SwitchField>
      <SwitchField
        label="Email"
        defaultChecked={false}
        isDisabled={false}
        isChecked={email}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              city,
              state,
              school,
              email: value,
              attendingEvents,
              rides,
              friends,
              photos,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></SwitchField>
      <SwitchField
        label="Attending events"
        defaultChecked={false}
        isDisabled={false}
        isChecked={attendingEvents}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              city,
              state,
              school,
              email,
              attendingEvents: value,
              rides,
              friends,
              photos,
            };
            const result = onChange(modelFields);
            value = result?.attendingEvents ?? value;
          }
          if (errors.attendingEvents?.hasError) {
            runValidationTasks("attendingEvents", value);
          }
          setAttendingEvents(value);
        }}
        onBlur={() => runValidationTasks("attendingEvents", attendingEvents)}
        errorMessage={errors.attendingEvents?.errorMessage}
        hasError={errors.attendingEvents?.hasError}
        {...getOverrideProps(overrides, "attendingEvents")}
      ></SwitchField>
      <SwitchField
        label="Rides"
        defaultChecked={false}
        isDisabled={false}
        isChecked={rides}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              city,
              state,
              school,
              email,
              attendingEvents,
              rides: value,
              friends,
              photos,
            };
            const result = onChange(modelFields);
            value = result?.rides ?? value;
          }
          if (errors.rides?.hasError) {
            runValidationTasks("rides", value);
          }
          setRides(value);
        }}
        onBlur={() => runValidationTasks("rides", rides)}
        errorMessage={errors.rides?.errorMessage}
        hasError={errors.rides?.hasError}
        {...getOverrideProps(overrides, "rides")}
      ></SwitchField>
      <SwitchField
        label="Friends"
        defaultChecked={false}
        isDisabled={false}
        isChecked={friends}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              city,
              state,
              school,
              email,
              attendingEvents,
              rides,
              friends: value,
              photos,
            };
            const result = onChange(modelFields);
            value = result?.friends ?? value;
          }
          if (errors.friends?.hasError) {
            runValidationTasks("friends", value);
          }
          setFriends(value);
        }}
        onBlur={() => runValidationTasks("friends", friends)}
        errorMessage={errors.friends?.errorMessage}
        hasError={errors.friends?.hasError}
        {...getOverrideProps(overrides, "friends")}
      ></SwitchField>
      <SwitchField
        label="Photos"
        defaultChecked={false}
        isDisabled={false}
        isChecked={photos}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              city,
              state,
              school,
              email,
              attendingEvents,
              rides,
              friends,
              photos: value,
            };
            const result = onChange(modelFields);
            value = result?.photos ?? value;
          }
          if (errors.photos?.hasError) {
            runValidationTasks("photos", value);
          }
          setPhotos(value);
        }}
        onBlur={() => runValidationTasks("photos", photos)}
        errorMessage={errors.photos?.errorMessage}
        hasError={errors.photos?.hasError}
        {...getOverrideProps(overrides, "photos")}
      ></SwitchField>
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
          isDisabled={!(idProp || privacySettingModelProp)}
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
              !(idProp || privacySettingModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
