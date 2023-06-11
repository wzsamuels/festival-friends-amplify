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
import { Event } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function EventUpdateForm(props) {
  const {
    id: idProp,
    event: eventModelProp,
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
    state: "",
    city: "",
    startDate: "",
    endDate: "",
    type: "",
    address: "",
    description: "",
    url: "",
    customerID: "",
    ticketURL: "",
    hasPaid: false,
    cancelled: false,
    approved: false,
    subscriptionID: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [genre, setGenre] = React.useState(initialValues.genre);
  const [image, setImage] = React.useState(initialValues.image);
  const [state, setState] = React.useState(initialValues.state);
  const [city, setCity] = React.useState(initialValues.city);
  const [startDate, setStartDate] = React.useState(initialValues.startDate);
  const [endDate, setEndDate] = React.useState(initialValues.endDate);
  const [type, setType] = React.useState(initialValues.type);
  const [address, setAddress] = React.useState(initialValues.address);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [url, setUrl] = React.useState(initialValues.url);
  const [customerID, setCustomerID] = React.useState(initialValues.customerID);
  const [ticketURL, setTicketURL] = React.useState(initialValues.ticketURL);
  const [hasPaid, setHasPaid] = React.useState(initialValues.hasPaid);
  const [cancelled, setCancelled] = React.useState(initialValues.cancelled);
  const [approved, setApproved] = React.useState(initialValues.approved);
  const [subscriptionID, setSubscriptionID] = React.useState(
    initialValues.subscriptionID
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = eventRecord
      ? { ...initialValues, ...eventRecord }
      : initialValues;
    setName(cleanValues.name);
    setGenre(cleanValues.genre);
    setImage(cleanValues.image);
    setState(cleanValues.state);
    setCity(cleanValues.city);
    setStartDate(cleanValues.startDate);
    setEndDate(cleanValues.endDate);
    setType(cleanValues.type);
    setAddress(cleanValues.address);
    setDescription(cleanValues.description);
    setUrl(cleanValues.url);
    setCustomerID(cleanValues.customerID);
    setTicketURL(cleanValues.ticketURL);
    setHasPaid(cleanValues.hasPaid);
    setCancelled(cleanValues.cancelled);
    setApproved(cleanValues.approved);
    setSubscriptionID(cleanValues.subscriptionID);
    setErrors({});
  };
  const [eventRecord, setEventRecord] = React.useState(eventModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Event, idProp)
        : eventModelProp;
      setEventRecord(record);
    };
    queryData();
  }, [idProp, eventModelProp]);
  React.useEffect(resetStateValues, [eventRecord]);
  const validations = {
    name: [{ type: "Required" }],
    genre: [{ type: "Required" }],
    image: [{ type: "Required" }],
    state: [{ type: "Required" }],
    city: [{ type: "Required" }],
    startDate: [{ type: "Required" }],
    endDate: [{ type: "Required" }],
    type: [{ type: "Required" }],
    address: [],
    description: [],
    url: [],
    customerID: [],
    ticketURL: [],
    hasPaid: [],
    cancelled: [],
    approved: [],
    subscriptionID: [],
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
          state,
          city,
          startDate,
          endDate,
          type,
          address,
          description,
          url,
          customerID,
          ticketURL,
          hasPaid,
          cancelled,
          approved,
          subscriptionID,
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
            Event.copyOf(eventRecord, (updated) => {
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
      {...getOverrideProps(overrides, "EventUpdateForm")}
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
              state,
              city,
              startDate,
              endDate,
              type,
              address,
              description,
              url,
              customerID,
              ticketURL,
              hasPaid,
              cancelled,
              approved,
              subscriptionID,
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
              state,
              city,
              startDate,
              endDate,
              type,
              address,
              description,
              url,
              customerID,
              ticketURL,
              hasPaid,
              cancelled,
              approved,
              subscriptionID,
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
              state,
              city,
              startDate,
              endDate,
              type,
              address,
              description,
              url,
              customerID,
              ticketURL,
              hasPaid,
              cancelled,
              approved,
              subscriptionID,
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
              state: value,
              city,
              startDate,
              endDate,
              type,
              address,
              description,
              url,
              customerID,
              ticketURL,
              hasPaid,
              cancelled,
              approved,
              subscriptionID,
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
              state,
              city: value,
              startDate,
              endDate,
              type,
              address,
              description,
              url,
              customerID,
              ticketURL,
              hasPaid,
              cancelled,
              approved,
              subscriptionID,
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
              state,
              city,
              startDate: value,
              endDate,
              type,
              address,
              description,
              url,
              customerID,
              ticketURL,
              hasPaid,
              cancelled,
              approved,
              subscriptionID,
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
              state,
              city,
              startDate,
              endDate: value,
              type,
              address,
              description,
              url,
              customerID,
              ticketURL,
              hasPaid,
              cancelled,
              approved,
              subscriptionID,
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
              state,
              city,
              startDate,
              endDate,
              type: value,
              address,
              description,
              url,
              customerID,
              ticketURL,
              hasPaid,
              cancelled,
              approved,
              subscriptionID,
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
          children="Travel"
          value="TRAVEL"
          {...getOverrideProps(overrides, "typeoption4")}
        ></option>
      </SelectField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              genre,
              image,
              state,
              city,
              startDate,
              endDate,
              type,
              address: value,
              description,
              url,
              customerID,
              ticketURL,
              hasPaid,
              cancelled,
              approved,
              subscriptionID,
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
              state,
              city,
              startDate,
              endDate,
              type,
              address,
              description: value,
              url,
              customerID,
              ticketURL,
              hasPaid,
              cancelled,
              approved,
              subscriptionID,
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
              state,
              city,
              startDate,
              endDate,
              type,
              address,
              description,
              url: value,
              customerID,
              ticketURL,
              hasPaid,
              cancelled,
              approved,
              subscriptionID,
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
              state,
              city,
              startDate,
              endDate,
              type,
              address,
              description,
              url,
              customerID: value,
              ticketURL,
              hasPaid,
              cancelled,
              approved,
              subscriptionID,
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
        label="Ticket url"
        isRequired={false}
        isReadOnly={false}
        value={ticketURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              genre,
              image,
              state,
              city,
              startDate,
              endDate,
              type,
              address,
              description,
              url,
              customerID,
              ticketURL: value,
              hasPaid,
              cancelled,
              approved,
              subscriptionID,
            };
            const result = onChange(modelFields);
            value = result?.ticketURL ?? value;
          }
          if (errors.ticketURL?.hasError) {
            runValidationTasks("ticketURL", value);
          }
          setTicketURL(value);
        }}
        onBlur={() => runValidationTasks("ticketURL", ticketURL)}
        errorMessage={errors.ticketURL?.errorMessage}
        hasError={errors.ticketURL?.hasError}
        {...getOverrideProps(overrides, "ticketURL")}
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
              state,
              city,
              startDate,
              endDate,
              type,
              address,
              description,
              url,
              customerID,
              ticketURL,
              hasPaid: value,
              cancelled,
              approved,
              subscriptionID,
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
              state,
              city,
              startDate,
              endDate,
              type,
              address,
              description,
              url,
              customerID,
              ticketURL,
              hasPaid,
              cancelled: value,
              approved,
              subscriptionID,
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
              state,
              city,
              startDate,
              endDate,
              type,
              address,
              description,
              url,
              customerID,
              ticketURL,
              hasPaid,
              cancelled,
              approved: value,
              subscriptionID,
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
      <TextField
        label="Subscription id"
        isRequired={false}
        isReadOnly={false}
        value={subscriptionID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              genre,
              image,
              state,
              city,
              startDate,
              endDate,
              type,
              address,
              description,
              url,
              customerID,
              ticketURL,
              hasPaid,
              cancelled,
              approved,
              subscriptionID: value,
            };
            const result = onChange(modelFields);
            value = result?.subscriptionID ?? value;
          }
          if (errors.subscriptionID?.hasError) {
            runValidationTasks("subscriptionID", value);
          }
          setSubscriptionID(value);
        }}
        onBlur={() => runValidationTasks("subscriptionID", subscriptionID)}
        errorMessage={errors.subscriptionID?.errorMessage}
        hasError={errors.subscriptionID?.hasError}
        {...getOverrideProps(overrides, "subscriptionID")}
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
          isDisabled={!(idProp || eventModelProp)}
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
              !(idProp || eventModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
