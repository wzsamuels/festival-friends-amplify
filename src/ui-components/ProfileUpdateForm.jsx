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
import { Profile } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProfileUpdateForm(props) {
  const {
    id: idProp,
    profile: profileModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    sub: "",
    firstName: "",
    lastName: "",
    verified: false,
    submitted: false,
    profilePhotoID: "",
    bannerPhotoID: "",
    verifyPhotoID: "",
    customerID: "",
    city: "",
    state: "",
    school: "",
    address: "",
    address2: "",
    phone: "",
    email: "",
    zipcode: "",
    birthDate: "",
    hobbies: "",
    gender: "",
  };
  const [sub, setSub] = React.useState(initialValues.sub);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [verified, setVerified] = React.useState(initialValues.verified);
  const [submitted, setSubmitted] = React.useState(initialValues.submitted);
  const [profilePhotoID, setProfilePhotoID] = React.useState(
    initialValues.profilePhotoID
  );
  const [bannerPhotoID, setBannerPhotoID] = React.useState(
    initialValues.bannerPhotoID
  );
  const [verifyPhotoID, setVerifyPhotoID] = React.useState(
    initialValues.verifyPhotoID
  );
  const [customerID, setCustomerID] = React.useState(initialValues.customerID);
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [school, setSchool] = React.useState(initialValues.school);
  const [address, setAddress] = React.useState(initialValues.address);
  const [address2, setAddress2] = React.useState(initialValues.address2);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [email, setEmail] = React.useState(initialValues.email);
  const [zipcode, setZipcode] = React.useState(initialValues.zipcode);
  const [birthDate, setBirthDate] = React.useState(initialValues.birthDate);
  const [hobbies, setHobbies] = React.useState(initialValues.hobbies);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = profileRecord
      ? { ...initialValues, ...profileRecord }
      : initialValues;
    setSub(cleanValues.sub);
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setVerified(cleanValues.verified);
    setSubmitted(cleanValues.submitted);
    setProfilePhotoID(cleanValues.profilePhotoID);
    setBannerPhotoID(cleanValues.bannerPhotoID);
    setVerifyPhotoID(cleanValues.verifyPhotoID);
    setCustomerID(cleanValues.customerID);
    setCity(cleanValues.city);
    setState(cleanValues.state);
    setSchool(cleanValues.school);
    setAddress(cleanValues.address);
    setAddress2(cleanValues.address2);
    setPhone(cleanValues.phone);
    setEmail(cleanValues.email);
    setZipcode(cleanValues.zipcode);
    setBirthDate(cleanValues.birthDate);
    setHobbies(cleanValues.hobbies);
    setGender(cleanValues.gender);
    setErrors({});
  };
  const [profileRecord, setProfileRecord] = React.useState(profileModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Profile, idProp)
        : profileModelProp;
      setProfileRecord(record);
    };
    queryData();
  }, [idProp, profileModelProp]);
  React.useEffect(resetStateValues, [profileRecord]);
  const validations = {
    sub: [{ type: "Required" }],
    firstName: [],
    lastName: [],
    verified: [],
    submitted: [],
    profilePhotoID: [],
    bannerPhotoID: [],
    verifyPhotoID: [],
    customerID: [],
    city: [],
    state: [],
    school: [],
    address: [],
    address2: [],
    phone: [],
    email: [],
    zipcode: [],
    birthDate: [],
    hobbies: [],
    gender: [],
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
          sub,
          firstName,
          lastName,
          verified,
          submitted,
          profilePhotoID,
          bannerPhotoID,
          verifyPhotoID,
          customerID,
          city,
          state,
          school,
          address,
          address2,
          phone,
          email,
          zipcode,
          birthDate,
          hobbies,
          gender,
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
            Profile.copyOf(profileRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ProfileUpdateForm")}
      {...rest}
    >
      <TextField
        label="Sub"
        isRequired={true}
        isReadOnly={false}
        value={sub}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub: value,
              firstName,
              lastName,
              verified,
              submitted,
              profilePhotoID,
              bannerPhotoID,
              verifyPhotoID,
              customerID,
              city,
              state,
              school,
              address,
              address2,
              phone,
              email,
              zipcode,
              birthDate,
              hobbies,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.sub ?? value;
          }
          if (errors.sub?.hasError) {
            runValidationTasks("sub", value);
          }
          setSub(value);
        }}
        onBlur={() => runValidationTasks("sub", sub)}
        errorMessage={errors.sub?.errorMessage}
        hasError={errors.sub?.hasError}
        {...getOverrideProps(overrides, "sub")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName: value,
              lastName,
              verified,
              submitted,
              profilePhotoID,
              bannerPhotoID,
              verifyPhotoID,
              customerID,
              city,
              state,
              school,
              address,
              address2,
              phone,
              email,
              zipcode,
              birthDate,
              hobbies,
              gender,
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
              sub,
              firstName,
              lastName: value,
              verified,
              submitted,
              profilePhotoID,
              bannerPhotoID,
              verifyPhotoID,
              customerID,
              city,
              state,
              school,
              address,
              address2,
              phone,
              email,
              zipcode,
              birthDate,
              hobbies,
              gender,
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
              sub,
              firstName,
              lastName,
              verified: value,
              submitted,
              profilePhotoID,
              bannerPhotoID,
              verifyPhotoID,
              customerID,
              city,
              state,
              school,
              address,
              address2,
              phone,
              email,
              zipcode,
              birthDate,
              hobbies,
              gender,
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
        label="Submitted"
        defaultChecked={false}
        isDisabled={false}
        isChecked={submitted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              lastName,
              verified,
              submitted: value,
              profilePhotoID,
              bannerPhotoID,
              verifyPhotoID,
              customerID,
              city,
              state,
              school,
              address,
              address2,
              phone,
              email,
              zipcode,
              birthDate,
              hobbies,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.submitted ?? value;
          }
          if (errors.submitted?.hasError) {
            runValidationTasks("submitted", value);
          }
          setSubmitted(value);
        }}
        onBlur={() => runValidationTasks("submitted", submitted)}
        errorMessage={errors.submitted?.errorMessage}
        hasError={errors.submitted?.hasError}
        {...getOverrideProps(overrides, "submitted")}
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
              sub,
              firstName,
              lastName,
              verified,
              submitted,
              profilePhotoID: value,
              bannerPhotoID,
              verifyPhotoID,
              customerID,
              city,
              state,
              school,
              address,
              address2,
              phone,
              email,
              zipcode,
              birthDate,
              hobbies,
              gender,
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
              sub,
              firstName,
              lastName,
              verified,
              submitted,
              profilePhotoID,
              bannerPhotoID: value,
              verifyPhotoID,
              customerID,
              city,
              state,
              school,
              address,
              address2,
              phone,
              email,
              zipcode,
              birthDate,
              hobbies,
              gender,
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
        label="Verify photo id"
        isRequired={false}
        isReadOnly={false}
        value={verifyPhotoID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              lastName,
              verified,
              submitted,
              profilePhotoID,
              bannerPhotoID,
              verifyPhotoID: value,
              customerID,
              city,
              state,
              school,
              address,
              address2,
              phone,
              email,
              zipcode,
              birthDate,
              hobbies,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.verifyPhotoID ?? value;
          }
          if (errors.verifyPhotoID?.hasError) {
            runValidationTasks("verifyPhotoID", value);
          }
          setVerifyPhotoID(value);
        }}
        onBlur={() => runValidationTasks("verifyPhotoID", verifyPhotoID)}
        errorMessage={errors.verifyPhotoID?.errorMessage}
        hasError={errors.verifyPhotoID?.hasError}
        {...getOverrideProps(overrides, "verifyPhotoID")}
      ></TextField>
      <TextField
        label="Customer id"
        isRequired={false}
        isReadOnly={false}
        value={customerID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              lastName,
              verified,
              submitted,
              profilePhotoID,
              bannerPhotoID,
              verifyPhotoID,
              customerID: value,
              city,
              state,
              school,
              address,
              address2,
              phone,
              email,
              zipcode,
              birthDate,
              hobbies,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.customerID ?? value;
          }
          if (errors.customerID?.hasError) {
            runValidationTasks("customerID", value);
          }
          setCustomerID(value);
        }}
        onBlur={() => runValidationTasks("customerID", customerID)}
        errorMessage={errors.customerID?.errorMessage}
        hasError={errors.customerID?.hasError}
        {...getOverrideProps(overrides, "customerID")}
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
              sub,
              firstName,
              lastName,
              verified,
              submitted,
              profilePhotoID,
              bannerPhotoID,
              verifyPhotoID,
              customerID,
              city: value,
              state,
              school,
              address,
              address2,
              phone,
              email,
              zipcode,
              birthDate,
              hobbies,
              gender,
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
              sub,
              firstName,
              lastName,
              verified,
              submitted,
              profilePhotoID,
              bannerPhotoID,
              verifyPhotoID,
              customerID,
              city,
              state: value,
              school,
              address,
              address2,
              phone,
              email,
              zipcode,
              birthDate,
              hobbies,
              gender,
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
              sub,
              firstName,
              lastName,
              verified,
              submitted,
              profilePhotoID,
              bannerPhotoID,
              verifyPhotoID,
              customerID,
              city,
              state,
              school: value,
              address,
              address2,
              phone,
              email,
              zipcode,
              birthDate,
              hobbies,
              gender,
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
              sub,
              firstName,
              lastName,
              verified,
              submitted,
              profilePhotoID,
              bannerPhotoID,
              verifyPhotoID,
              customerID,
              city,
              state,
              school,
              address: value,
              address2,
              phone,
              email,
              zipcode,
              birthDate,
              hobbies,
              gender,
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
              sub,
              firstName,
              lastName,
              verified,
              submitted,
              profilePhotoID,
              bannerPhotoID,
              verifyPhotoID,
              customerID,
              city,
              state,
              school,
              address,
              address2: value,
              phone,
              email,
              zipcode,
              birthDate,
              hobbies,
              gender,
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
              sub,
              firstName,
              lastName,
              verified,
              submitted,
              profilePhotoID,
              bannerPhotoID,
              verifyPhotoID,
              customerID,
              city,
              state,
              school,
              address,
              address2,
              phone: value,
              email,
              zipcode,
              birthDate,
              hobbies,
              gender,
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
              sub,
              firstName,
              lastName,
              verified,
              submitted,
              profilePhotoID,
              bannerPhotoID,
              verifyPhotoID,
              customerID,
              city,
              state,
              school,
              address,
              address2,
              phone,
              email: value,
              zipcode,
              birthDate,
              hobbies,
              gender,
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
              sub,
              firstName,
              lastName,
              verified,
              submitted,
              profilePhotoID,
              bannerPhotoID,
              verifyPhotoID,
              customerID,
              city,
              state,
              school,
              address,
              address2,
              phone,
              email,
              zipcode: value,
              birthDate,
              hobbies,
              gender,
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
      <TextField
        label="Birth date"
        isRequired={false}
        isReadOnly={false}
        value={birthDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              lastName,
              verified,
              submitted,
              profilePhotoID,
              bannerPhotoID,
              verifyPhotoID,
              customerID,
              city,
              state,
              school,
              address,
              address2,
              phone,
              email,
              zipcode,
              birthDate: value,
              hobbies,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.birthDate ?? value;
          }
          if (errors.birthDate?.hasError) {
            runValidationTasks("birthDate", value);
          }
          setBirthDate(value);
        }}
        onBlur={() => runValidationTasks("birthDate", birthDate)}
        errorMessage={errors.birthDate?.errorMessage}
        hasError={errors.birthDate?.hasError}
        {...getOverrideProps(overrides, "birthDate")}
      ></TextField>
      <TextField
        label="Hobbies"
        isRequired={false}
        isReadOnly={false}
        value={hobbies}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              lastName,
              verified,
              submitted,
              profilePhotoID,
              bannerPhotoID,
              verifyPhotoID,
              customerID,
              city,
              state,
              school,
              address,
              address2,
              phone,
              email,
              zipcode,
              birthDate,
              hobbies: value,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.hobbies ?? value;
          }
          if (errors.hobbies?.hasError) {
            runValidationTasks("hobbies", value);
          }
          setHobbies(value);
        }}
        onBlur={() => runValidationTasks("hobbies", hobbies)}
        errorMessage={errors.hobbies?.errorMessage}
        hasError={errors.hobbies?.hasError}
        {...getOverrideProps(overrides, "hobbies")}
      ></TextField>
      <TextField
        label="Gender"
        isRequired={false}
        isReadOnly={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              lastName,
              verified,
              submitted,
              profilePhotoID,
              bannerPhotoID,
              verifyPhotoID,
              customerID,
              city,
              state,
              school,
              address,
              address2,
              phone,
              email,
              zipcode,
              birthDate,
              hobbies,
              gender: value,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
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
          isDisabled={!(idProp || profileModelProp)}
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
              !(idProp || profileModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
