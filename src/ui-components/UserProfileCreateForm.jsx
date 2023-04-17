/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { UserProfile } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function UserProfileCreateForm(props) {
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
    firstName: "",
    lastName: "",
    userID: "",
    verified: false,
    verifySubmitted: false,
    profileImage: "",
    city: "",
    state: "",
    school: "",
    festivalsAttending: [],
    festivalsAttended: [],
  };
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [verified, setVerified] = React.useState(initialValues.verified);
  const [verifySubmitted, setVerifySubmitted] = React.useState(
    initialValues.verifySubmitted
  );
  const [profileImage, setProfileImage] = React.useState(
    initialValues.profileImage
  );
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [school, setSchool] = React.useState(initialValues.school);
  const [festivalsAttending, setFestivalsAttending] = React.useState(
    initialValues.festivalsAttending
  );
  const [festivalsAttended, setFestivalsAttended] = React.useState(
    initialValues.festivalsAttended
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setUserID(initialValues.userID);
    setVerified(initialValues.verified);
    setVerifySubmitted(initialValues.verifySubmitted);
    setProfileImage(initialValues.profileImage);
    setCity(initialValues.city);
    setState(initialValues.state);
    setSchool(initialValues.school);
    setFestivalsAttending(initialValues.festivalsAttending);
    setCurrentFestivalsAttendingValue("");
    setFestivalsAttended(initialValues.festivalsAttended);
    setCurrentFestivalsAttendedValue("");
    setErrors({});
  };
  const [currentFestivalsAttendingValue, setCurrentFestivalsAttendingValue] =
    React.useState("");
  const festivalsAttendingRef = React.createRef();
  const [currentFestivalsAttendedValue, setCurrentFestivalsAttendedValue] =
    React.useState("");
  const festivalsAttendedRef = React.createRef();
  const validations = {
    firstName: [{ type: "Required" }],
    lastName: [{ type: "Required" }],
    userID: [{ type: "Required" }],
    verified: [{ type: "Required" }],
    verifySubmitted: [{ type: "Required" }],
    profileImage: [],
    city: [],
    state: [],
    school: [],
    festivalsAttending: [{ type: "Required" }],
    festivalsAttended: [{ type: "Required" }],
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
          firstName,
          lastName,
          userID,
          verified,
          verifySubmitted,
          profileImage,
          city,
          state,
          school,
          festivalsAttending,
          festivalsAttended,
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
          await DataStore.save(new UserProfile(modelFields));
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
      {...getOverrideProps(overrides, "UserProfileCreateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName: value,
              lastName,
              userID,
              verified,
              verifySubmitted,
              profileImage,
              city,
              state,
              school,
              festivalsAttending,
              festivalsAttended,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName: value,
              userID,
              verified,
              verifySubmitted,
              profileImage,
              city,
              state,
              school,
              festivalsAttending,
              festivalsAttended,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              userID: value,
              verified,
              verifySubmitted,
              profileImage,
              city,
              state,
              school,
              festivalsAttending,
              festivalsAttended,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
      ></TextField>
      <SwitchField
        label="Verified"
        defaultChecked={false}
        isDisabled={false}
        isChecked={verified}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              userID,
              verified: value,
              verifySubmitted,
              profileImage,
              city,
              state,
              school,
              festivalsAttending,
              festivalsAttended,
            };
            const result = onChange(modelFields);
            value = result?.verified ?? value;
          }
          if (errors.verified?.hasError) {
            runValidationTasks("verified", value);
          }
          setVerified(value);
        }}
        onBlur={() => runValidationTasks("verified", verified)}
        errorMessage={errors.verified?.errorMessage}
        hasError={errors.verified?.hasError}
        {...getOverrideProps(overrides, "verified")}
      ></SwitchField>
      <SwitchField
        label="Verify submitted"
        defaultChecked={false}
        isDisabled={false}
        isChecked={verifySubmitted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              userID,
              verified,
              verifySubmitted: value,
              profileImage,
              city,
              state,
              school,
              festivalsAttending,
              festivalsAttended,
            };
            const result = onChange(modelFields);
            value = result?.verifySubmitted ?? value;
          }
          if (errors.verifySubmitted?.hasError) {
            runValidationTasks("verifySubmitted", value);
          }
          setVerifySubmitted(value);
        }}
        onBlur={() => runValidationTasks("verifySubmitted", verifySubmitted)}
        errorMessage={errors.verifySubmitted?.errorMessage}
        hasError={errors.verifySubmitted?.hasError}
        {...getOverrideProps(overrides, "verifySubmitted")}
      ></SwitchField>
      <TextField
        label="Profile image"
        isRequired={false}
        isReadOnly={false}
        value={profileImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              userID,
              verified,
              verifySubmitted,
              profileImage: value,
              city,
              state,
              school,
              festivalsAttending,
              festivalsAttended,
            };
            const result = onChange(modelFields);
            value = result?.profileImage ?? value;
          }
          if (errors.profileImage?.hasError) {
            runValidationTasks("profileImage", value);
          }
          setProfileImage(value);
        }}
        onBlur={() => runValidationTasks("profileImage", profileImage)}
        errorMessage={errors.profileImage?.errorMessage}
        hasError={errors.profileImage?.hasError}
        {...getOverrideProps(overrides, "profileImage")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              userID,
              verified,
              verifySubmitted,
              profileImage,
              city: value,
              state,
              school,
              festivalsAttending,
              festivalsAttended,
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
      ></TextField>
      <TextField
        label="State"
        isRequired={false}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              userID,
              verified,
              verifySubmitted,
              profileImage,
              city,
              state: value,
              school,
              festivalsAttending,
              festivalsAttended,
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
      ></TextField>
      <TextField
        label="School"
        isRequired={false}
        isReadOnly={false}
        value={school}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              userID,
              verified,
              verifySubmitted,
              profileImage,
              city,
              state,
              school: value,
              festivalsAttending,
              festivalsAttended,
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
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              userID,
              verified,
              verifySubmitted,
              profileImage,
              city,
              state,
              school,
              festivalsAttending: values,
              festivalsAttended,
            };
            const result = onChange(modelFields);
            values = result?.festivalsAttending ?? values;
          }
          setFestivalsAttending(values);
          setCurrentFestivalsAttendingValue("");
        }}
        currentFieldValue={currentFestivalsAttendingValue}
        label={"Festivals attending"}
        items={festivalsAttending}
        hasError={errors?.festivalsAttending?.hasError}
        errorMessage={errors?.festivalsAttending?.errorMessage}
        setFieldValue={setCurrentFestivalsAttendingValue}
        inputFieldRef={festivalsAttendingRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Festivals attending"
          isRequired={true}
          isReadOnly={false}
          value={currentFestivalsAttendingValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.festivalsAttending?.hasError) {
              runValidationTasks("festivalsAttending", value);
            }
            setCurrentFestivalsAttendingValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "festivalsAttending",
              currentFestivalsAttendingValue
            )
          }
          errorMessage={errors.festivalsAttending?.errorMessage}
          hasError={errors.festivalsAttending?.hasError}
          ref={festivalsAttendingRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "festivalsAttending")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              userID,
              verified,
              verifySubmitted,
              profileImage,
              city,
              state,
              school,
              festivalsAttending,
              festivalsAttended: values,
            };
            const result = onChange(modelFields);
            values = result?.festivalsAttended ?? values;
          }
          setFestivalsAttended(values);
          setCurrentFestivalsAttendedValue("");
        }}
        currentFieldValue={currentFestivalsAttendedValue}
        label={"Festivals attended"}
        items={festivalsAttended}
        hasError={errors?.festivalsAttended?.hasError}
        errorMessage={errors?.festivalsAttended?.errorMessage}
        setFieldValue={setCurrentFestivalsAttendedValue}
        inputFieldRef={festivalsAttendedRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Festivals attended"
          isRequired={true}
          isReadOnly={false}
          value={currentFestivalsAttendedValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.festivalsAttended?.hasError) {
              runValidationTasks("festivalsAttended", value);
            }
            setCurrentFestivalsAttendedValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "festivalsAttended",
              currentFestivalsAttendedValue
            )
          }
          errorMessage={errors.festivalsAttended?.errorMessage}
          hasError={errors.festivalsAttended?.hasError}
          ref={festivalsAttendedRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "festivalsAttended")}
        ></TextField>
      </ArrayField>
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
