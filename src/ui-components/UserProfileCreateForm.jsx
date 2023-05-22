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
    verified: false,
    verifySubmitted: false,
    profilePhotoID: "",
    bannerPhotoID: "",
    city: "",
    state: "",
    school: "",
    address: "",
    address2: "",
    phone: "",
    email: "",
    zipcode: "",
  };
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [verified, setVerified] = React.useState(initialValues.verified);
  const [verifySubmitted, setVerifySubmitted] = React.useState(
    initialValues.verifySubmitted
  );
  const [profilePhotoID, setProfilePhotoID] = React.useState(
    initialValues.profilePhotoID
  );
  const [bannerPhotoID, setBannerPhotoID] = React.useState(
    initialValues.bannerPhotoID
  );
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [school, setSchool] = React.useState(initialValues.school);
  const [address, setAddress] = React.useState(initialValues.address);
  const [address2, setAddress2] = React.useState(initialValues.address2);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [email, setEmail] = React.useState(initialValues.email);
  const [zipcode, setZipcode] = React.useState(initialValues.zipcode);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setVerified(initialValues.verified);
    setVerifySubmitted(initialValues.verifySubmitted);
    setProfilePhotoID(initialValues.profilePhotoID);
    setBannerPhotoID(initialValues.bannerPhotoID);
    setCity(initialValues.city);
    setState(initialValues.state);
    setSchool(initialValues.school);
    setAddress(initialValues.address);
    setAddress2(initialValues.address2);
    setPhone(initialValues.phone);
    setEmail(initialValues.email);
    setZipcode(initialValues.zipcode);
    setErrors({});
  };
  const validations = {
    firstName: [],
    lastName: [],
    verified: [{ type: "Required" }],
    verifySubmitted: [{ type: "Required" }],
    profilePhotoID: [],
    bannerPhotoID: [],
    city: [],
    state: [],
    school: [],
    address: [],
    address2: [],
    phone: [],
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
          verified,
          verifySubmitted,
          profilePhotoID,
          bannerPhotoID,
          city,
          state,
          school,
          address,
          address2,
          phone,
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
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName: value,
              lastName,
              verified,
              verifySubmitted,
              profilePhotoID,
              bannerPhotoID,
              city,
              state,
              school,
              address,
              address2,
              phone,
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
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName: value,
              verified,
              verifySubmitted,
              profilePhotoID,
              bannerPhotoID,
              city,
              state,
              school,
              address,
              address2,
              phone,
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
              verified: value,
              verifySubmitted,
              profilePhotoID,
              bannerPhotoID,
              city,
              state,
              school,
              address,
              address2,
              phone,
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
              verified,
              verifySubmitted: value,
              profilePhotoID,
              bannerPhotoID,
              city,
              state,
              school,
              address,
              address2,
              phone,
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
        label="Profile photo id"
        isRequired={false}
        isReadOnly={false}
        value={profilePhotoID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              verified,
              verifySubmitted,
              profilePhotoID: value,
              bannerPhotoID,
              city,
              state,
              school,
              address,
              address2,
              phone,
              email,
              zipcode,
            };
            const result = onChange(modelFields);
            value = result?.profilePhotoID ?? value;
          }
          if (errors.profilePhotoID?.hasError) {
            runValidationTasks("profilePhotoID", value);
          }
          setProfilePhotoID(value);
        }}
        onBlur={() => runValidationTasks("profilePhotoID", profilePhotoID)}
        errorMessage={errors.profilePhotoID?.errorMessage}
        hasError={errors.profilePhotoID?.hasError}
        {...getOverrideProps(overrides, "profilePhotoID")}
      ></TextField>
      <TextField
        label="Banner photo id"
        isRequired={false}
        isReadOnly={false}
        value={bannerPhotoID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              verified,
              verifySubmitted,
              profilePhotoID,
              bannerPhotoID: value,
              city,
              state,
              school,
              address,
              address2,
              phone,
              email,
              zipcode,
            };
            const result = onChange(modelFields);
            value = result?.bannerPhotoID ?? value;
          }
          if (errors.bannerPhotoID?.hasError) {
            runValidationTasks("bannerPhotoID", value);
          }
          setBannerPhotoID(value);
        }}
        onBlur={() => runValidationTasks("bannerPhotoID", bannerPhotoID)}
        errorMessage={errors.bannerPhotoID?.errorMessage}
        hasError={errors.bannerPhotoID?.hasError}
        {...getOverrideProps(overrides, "bannerPhotoID")}
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
              verified,
              verifySubmitted,
              profilePhotoID,
              bannerPhotoID,
              city: value,
              state,
              school,
              address,
              address2,
              phone,
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
              verified,
              verifySubmitted,
              profilePhotoID,
              bannerPhotoID,
              city,
              state: value,
              school,
              address,
              address2,
              phone,
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
              verified,
              verifySubmitted,
              profilePhotoID,
              bannerPhotoID,
              city,
              state,
              school: value,
              address,
              address2,
              phone,
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
              verified,
              verifySubmitted,
              profilePhotoID,
              bannerPhotoID,
              city,
              state,
              school,
              address: value,
              address2,
              phone,
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
              verified,
              verifySubmitted,
              profilePhotoID,
              bannerPhotoID,
              city,
              state,
              school,
              address,
              address2: value,
              phone,
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
              verified,
              verifySubmitted,
              profilePhotoID,
              bannerPhotoID,
              city,
              state,
              school,
              address,
              address2,
              phone: value,
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
              verified,
              verifySubmitted,
              profilePhotoID,
              bannerPhotoID,
              city,
              state,
              school,
              address,
              address2,
              phone,
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
              verified,
              verifySubmitted,
              profilePhotoID,
              bannerPhotoID,
              city,
              state,
              school,
              address,
              address2,
              phone,
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
