/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { UserProfile } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
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
    address: "",
    address2: "",
    phone: "",
    username: "",
    email: "",
    zipcode: "",
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
  const [address, setAddress] = React.useState(initialValues.address);
  const [address2, setAddress2] = React.useState(initialValues.address2);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [username, setUsername] = React.useState(initialValues.username);
  const [email, setEmail] = React.useState(initialValues.email);
  const [zipcode, setZipcode] = React.useState(initialValues.zipcode);
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
    setAddress(initialValues.address);
    setAddress2(initialValues.address2);
    setPhone(initialValues.phone);
    setUsername(initialValues.username);
    setEmail(initialValues.email);
    setZipcode(initialValues.zipcode);
    setErrors({});
  };
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
    address: [],
    address2: [],
    phone: [],
    username: [],
    email: [],
    zipcode: [],
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
          address,
          address2,
          phone,
          username,
          email,
          zipcode,
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
              address,
              address2,
              phone,
              username,
              email,
              zipcode,
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
              address,
              address2,
              phone,
              username,
              email,
              zipcode,
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
              address,
              address2,
              phone,
              username,
              email,
              zipcode,
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
              address,
              address2,
              phone,
              username,
              email,
              zipcode,
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
              address,
              address2,
              phone,
              username,
              email,
              zipcode,
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
              address,
              address2,
              phone,
              username,
              email,
              zipcode,
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
              address,
              address2,
              phone,
              username,
              email,
              zipcode,
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
              address,
              address2,
              phone,
              username,
              email,
              zipcode,
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
              address,
              address2,
              phone,
              username,
              email,
              zipcode,
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
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
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
              school,
              address: value,
              address2,
              phone,
              username,
              email,
              zipcode,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Address2"
        isRequired={false}
        isReadOnly={false}
        value={address2}
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
              school,
              address,
              address2: value,
              phone,
              username,
              email,
              zipcode,
            };
            const result = onChange(modelFields);
            value = result?.address2 ?? value;
          }
          if (errors.address2?.hasError) {
            runValidationTasks("address2", value);
          }
          setAddress2(value);
        }}
        onBlur={() => runValidationTasks("address2", address2)}
        errorMessage={errors.address2?.errorMessage}
        hasError={errors.address2?.hasError}
        {...getOverrideProps(overrides, "address2")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        value={phone}
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
              school,
              address,
              address2,
              phone: value,
              username,
              email,
              zipcode,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Username"
        isRequired={false}
        isReadOnly={false}
        value={username}
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
              school,
              address,
              address2,
              phone,
              username: value,
              email,
              zipcode,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
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
              school,
              address,
              address2,
              phone,
              username,
              email: value,
              zipcode,
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
      ></TextField>
      <TextField
        label="Zipcode"
        isRequired={false}
        isReadOnly={false}
        value={zipcode}
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
              school,
              address,
              address2,
              phone,
              username,
              email,
              zipcode: value,
            };
            const result = onChange(modelFields);
            value = result?.zipcode ?? value;
          }
          if (errors.zipcode?.hasError) {
            runValidationTasks("zipcode", value);
          }
          setZipcode(value);
        }}
        onBlur={() => runValidationTasks("zipcode", zipcode)}
        errorMessage={errors.zipcode?.errorMessage}
        hasError={errors.zipcode?.hasError}
        {...getOverrideProps(overrides, "zipcode")}
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
