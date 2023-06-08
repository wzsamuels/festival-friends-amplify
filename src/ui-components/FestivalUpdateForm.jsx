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
  SelectField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Festival } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function FestivalUpdateForm(props) {
  const {
    id: idProp,
    festival: festivalModelProp,
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
    genre: "",
    image: "",
    location: "",
    state: "",
    city: "",
    address: "",
    startDate: "",
    endDate: "",
    type: "",
    description: "",
    url: "",
    customerID: "",
    hasPaid: false,
    cancelled: false,
    subID: "",
    approved: false,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [genre, setGenre] = React.useState(initialValues.genre);
  const [image, setImage] = React.useState(initialValues.image);
  const [location, setLocation] = React.useState(initialValues.location);
  const [state, setState] = React.useState(initialValues.state);
  const [city, setCity] = React.useState(initialValues.city);
  const [address, setAddress] = React.useState(initialValues.address);
  const [startDate, setStartDate] = React.useState(initialValues.startDate);
  const [endDate, setEndDate] = React.useState(initialValues.endDate);
  const [type, setType] = React.useState(initialValues.type);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [url, setUrl] = React.useState(initialValues.url);
  const [customerID, setCustomerID] = React.useState(initialValues.customerID);
  const [hasPaid, setHasPaid] = React.useState(initialValues.hasPaid);
  const [cancelled, setCancelled] = React.useState(initialValues.cancelled);
  const [subID, setSubID] = React.useState(initialValues.subID);
  const [approved, setApproved] = React.useState(initialValues.approved);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = festivalRecord
      ? { ...initialValues, ...festivalRecord }
      : initialValues;
    setName(cleanValues.name);
    setGenre(cleanValues.genre);
    setImage(cleanValues.image);
    setLocation(cleanValues.location);
    setState(cleanValues.state);
    setCity(cleanValues.city);
    setAddress(cleanValues.address);
    setStartDate(cleanValues.startDate);
    setEndDate(cleanValues.endDate);
    setType(cleanValues.type);
    setDescription(cleanValues.description);
    setUrl(cleanValues.url);
    setCustomerID(cleanValues.customerID);
    setHasPaid(cleanValues.hasPaid);
    setCancelled(cleanValues.cancelled);
    setSubID(cleanValues.subID);
    setApproved(cleanValues.approved);
    setErrors({});
  };
  const [festivalRecord, setFestivalRecord] = React.useState(festivalModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Festival, idProp)
        : festivalModelProp;
      setFestivalRecord(record);
    };
    queryData();
  }, [idProp, festivalModelProp]);
  React.useEffect(resetStateValues, [festivalRecord]);
  const validations = {
    name: [{ type: "Required" }],
    genre: [{ type: "Required" }],
    image: [{ type: "Required" }],
    location: [],
    state: [{ type: "Required" }],
    city: [{ type: "Required" }],
    address: [{ type: "Required" }],
    startDate: [{ type: "Required" }],
    endDate: [{ type: "Required" }],
    type: [],
    description: [],
    url: [],
    customerID: [],
    hasPaid: [],
    cancelled: [],
    subID: [],
    approved: [],
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
          genre,
          image,
          location,
          state,
          city,
          address,
          startDate,
          endDate,
          type,
          description,
          url,
          customerID,
          hasPaid,
          cancelled,
          subID,
          approved,
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
            Festival.copyOf(festivalRecord, (updated) => {
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
      {...getOverrideProps(overrides, "FestivalUpdateForm")}
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
              genre,
              image,
              location,
              state,
              city,
              address,
              startDate,
              endDate,
              type,
              description,
              url,
              customerID,
              hasPaid,
              cancelled,
              subID,
              approved,
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
        label="Genre"
        isRequired={true}
        isReadOnly={false}
        value={genre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              genre: value,
              image,
              location,
              state,
              city,
              address,
              startDate,
              endDate,
              type,
              description,
              url,
              customerID,
              hasPaid,
              cancelled,
              subID,
              approved,
            };
            const result = onChange(modelFields);
            value = result?.genre ?? value;
          }
          if (errors.genre?.hasError) {
            runValidationTasks("genre", value);
          }
          setGenre(value);
        }}
        onBlur={() => runValidationTasks("genre", genre)}
        errorMessage={errors.genre?.errorMessage}
        hasError={errors.genre?.hasError}
        {...getOverrideProps(overrides, "genre")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={true}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              genre,
              image: value,
              location,
              state,
              city,
              address,
              startDate,
              endDate,
              type,
              description,
              url,
              customerID,
              hasPaid,
              cancelled,
              subID,
              approved,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        value={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              genre,
              image,
              location: value,
              state,
              city,
              address,
              startDate,
              endDate,
              type,
              description,
              url,
              customerID,
              hasPaid,
              cancelled,
              subID,
              approved,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      ></TextField>
      <TextField
        label="State"
        isRequired={true}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              genre,
              image,
              location,
              state: value,
              city,
              address,
              startDate,
              endDate,
              type,
              description,
              url,
              customerID,
              hasPaid,
              cancelled,
              subID,
              approved,
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
        label="City"
        isRequired={true}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              genre,
              image,
              location,
              state,
              city: value,
              address,
              startDate,
              endDate,
              type,
              description,
              url,
              customerID,
              hasPaid,
              cancelled,
              subID,
              approved,
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
        label="Address"
        isRequired={true}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              genre,
              image,
              location,
              state,
              city,
              address: value,
              startDate,
              endDate,
              type,
              description,
              url,
              customerID,
              hasPaid,
              cancelled,
              subID,
              approved,
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
        label="Start date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={startDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              genre,
              image,
              location,
              state,
              city,
              address,
              startDate: value,
              endDate,
              type,
              description,
              url,
              customerID,
              hasPaid,
              cancelled,
              subID,
              approved,
            };
            const result = onChange(modelFields);
            value = result?.startDate ?? value;
          }
          if (errors.startDate?.hasError) {
            runValidationTasks("startDate", value);
          }
          setStartDate(value);
        }}
        onBlur={() => runValidationTasks("startDate", startDate)}
        errorMessage={errors.startDate?.errorMessage}
        hasError={errors.startDate?.hasError}
        {...getOverrideProps(overrides, "startDate")}
      ></TextField>
      <TextField
        label="End date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={endDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              genre,
              image,
              location,
              state,
              city,
              address,
              startDate,
              endDate: value,
              type,
              description,
              url,
              customerID,
              hasPaid,
              cancelled,
              subID,
              approved,
            };
            const result = onChange(modelFields);
            value = result?.endDate ?? value;
          }
          if (errors.endDate?.hasError) {
            runValidationTasks("endDate", value);
          }
          setEndDate(value);
        }}
        onBlur={() => runValidationTasks("endDate", endDate)}
        errorMessage={errors.endDate?.errorMessage}
        hasError={errors.endDate?.hasError}
        {...getOverrideProps(overrides, "endDate")}
      ></TextField>
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              genre,
              image,
              location,
              state,
              city,
              address,
              startDate,
              endDate,
              type: value,
              description,
              url,
              customerID,
              hasPaid,
              cancelled,
              subID,
              approved,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      >
        <option
          children="Sport"
          value="SPORT"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Business"
          value="BUSINESS"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
        <option
          children="College"
          value="COLLEGE"
          {...getOverrideProps(overrides, "typeoption2")}
        ></option>
        <option
          children="Music"
          value="MUSIC"
          {...getOverrideProps(overrides, "typeoption3")}
        ></option>
        <option
          children="All"
          value="ALL"
          {...getOverrideProps(overrides, "typeoption4")}
        ></option>
        <option
          children="Travel"
          value="TRAVEL"
          {...getOverrideProps(overrides, "typeoption5")}
        ></option>
      </SelectField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              genre,
              image,
              location,
              state,
              city,
              address,
              startDate,
              endDate,
              type,
              description: value,
              url,
              customerID,
              hasPaid,
              cancelled,
              subID,
              approved,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Url"
        isRequired={false}
        isReadOnly={false}
        value={url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              genre,
              image,
              location,
              state,
              city,
              address,
              startDate,
              endDate,
              type,
              description,
              url: value,
              customerID,
              hasPaid,
              cancelled,
              subID,
              approved,
            };
            const result = onChange(modelFields);
            value = result?.url ?? value;
          }
          if (errors.url?.hasError) {
            runValidationTasks("url", value);
          }
          setUrl(value);
        }}
        onBlur={() => runValidationTasks("url", url)}
        errorMessage={errors.url?.errorMessage}
        hasError={errors.url?.hasError}
        {...getOverrideProps(overrides, "url")}
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
              name,
              genre,
              image,
              location,
              state,
              city,
              address,
              startDate,
              endDate,
              type,
              description,
              url,
              customerID: value,
              hasPaid,
              cancelled,
              subID,
              approved,
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
      <SwitchField
        label="Has paid"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hasPaid}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              genre,
              image,
              location,
              state,
              city,
              address,
              startDate,
              endDate,
              type,
              description,
              url,
              customerID,
              hasPaid: value,
              cancelled,
              subID,
              approved,
            };
            const result = onChange(modelFields);
            value = result?.hasPaid ?? value;
          }
          if (errors.hasPaid?.hasError) {
            runValidationTasks("hasPaid", value);
          }
          setHasPaid(value);
        }}
        onBlur={() => runValidationTasks("hasPaid", hasPaid)}
        errorMessage={errors.hasPaid?.errorMessage}
        hasError={errors.hasPaid?.hasError}
        {...getOverrideProps(overrides, "hasPaid")}
      ></SwitchField>
      <SwitchField
        label="Cancelled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={cancelled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              genre,
              image,
              location,
              state,
              city,
              address,
              startDate,
              endDate,
              type,
              description,
              url,
              customerID,
              hasPaid,
              cancelled: value,
              subID,
              approved,
            };
            const result = onChange(modelFields);
            value = result?.cancelled ?? value;
          }
          if (errors.cancelled?.hasError) {
            runValidationTasks("cancelled", value);
          }
          setCancelled(value);
        }}
        onBlur={() => runValidationTasks("cancelled", cancelled)}
        errorMessage={errors.cancelled?.errorMessage}
        hasError={errors.cancelled?.hasError}
        {...getOverrideProps(overrides, "cancelled")}
      ></SwitchField>
      <TextField
        label="Sub id"
        isRequired={false}
        isReadOnly={false}
        value={subID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              genre,
              image,
              location,
              state,
              city,
              address,
              startDate,
              endDate,
              type,
              description,
              url,
              customerID,
              hasPaid,
              cancelled,
              subID: value,
              approved,
            };
            const result = onChange(modelFields);
            value = result?.subID ?? value;
          }
          if (errors.subID?.hasError) {
            runValidationTasks("subID", value);
          }
          setSubID(value);
        }}
        onBlur={() => runValidationTasks("subID", subID)}
        errorMessage={errors.subID?.errorMessage}
        hasError={errors.subID?.hasError}
        {...getOverrideProps(overrides, "subID")}
      ></TextField>
      <SwitchField
        label="Approved"
        defaultChecked={false}
        isDisabled={false}
        isChecked={approved}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              genre,
              image,
              location,
              state,
              city,
              address,
              startDate,
              endDate,
              type,
              description,
              url,
              customerID,
              hasPaid,
              cancelled,
              subID,
              approved: value,
            };
            const result = onChange(modelFields);
            value = result?.approved ?? value;
          }
          if (errors.approved?.hasError) {
            runValidationTasks("approved", value);
          }
          setApproved(value);
        }}
        onBlur={() => runValidationTasks("approved", approved)}
        errorMessage={errors.approved?.errorMessage}
        hasError={errors.approved?.hasError}
        {...getOverrideProps(overrides, "approved")}
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
          isDisabled={!(idProp || festivalModelProp)}
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
              !(idProp || festivalModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
