import { SubmitHandler, useForm } from "react-hook-form";

import React, { useState } from "react";
import { UserProfile } from "../../../models";
import { ProfileInputs } from "../../../types";
import states from "../../../data/states";
import Label from "../../common/Label/Label";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import Select from "../../common/Select";

interface ProfileFormProps {
  onSubmit: SubmitHandler<ProfileInputs>;
  profile: UserProfile | null | undefined;
}

const AccountEditForm = ({ onSubmit, profile }: ProfileFormProps) => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileInputs>({
    defaultValues: {
      firstName: profile?.firstName || "",
      lastName: profile?.lastName || "",
      phone: profile?.phone || "",
      school: profile?.school || "",
      city: profile?.city || "",
      state: profile?.state || "",
      zipcode: profile?.zipcode || "",
      address: profile?.address || "",
      address2: profile?.address2 || "",
    },
  });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={"[&>*]:my-4 w-full max-w-[400px]"}
    >
      <div className="flex flex-wrap">
        <Label>First Name</Label>
        <Input {...register("firstName", { required: true })} />
      </div>
      {errors.firstName && <div className="text-red-700">This is a required field</div>}
      <div className="flex flex-wrap">
        <Label>Last Name</Label>
        <Input {...register("lastName", { required: true })} />
      </div>
      {errors.lastName && <div className="text-red-700">This is a required field</div>}
      <div className="flex flex-wrap">
        <Label>Phone</Label>
        <Input {...register("phone", { required: true })} type="tel" />
      </div>
      {errors.phone && <div className="text-red-700">This is a required field</div>}
      <div className="flex flex-wrap">
        <Label>School</Label>
        <Input {...register("school")} />
      </div>
      <div className="flex flex-wrap">
        <Label>Address</Label>
        <Input {...register("address")} />
      </div>
      <div className="flex flex-wrap">
        <Label className="ion-text-wrap">Address Line 2</Label>
        <Input {...register("address2")} />
      </div>
      <div className="flex flex-wrap">
        <Label>City</Label>
        <Input {...register("city", { required: true })} />
      </div>
      {errors.city && <div className="text-red-700">This is a required field</div>}
      <div className="flex flex-wrap">
        <Label>State</Label>
        <Select
          {...register("state", { required: true })}
          name="state"
          defaultValue=""
        >
          <option value="" disabled>
            Select state
          </option>
          {states.map((state) => (
            <option key={state.code} value={state.name}>
              {state.name}
            </option>
          ))}
        </Select>
      </div>
      <div className="flex flex-wrap">
        <Label>Zip Code</Label>
        <Input {...register("zipcode")} />
      </div>

      <div className="my-6 flex justify-center">
        <Button type="submit" className="my-4">
          Update Profile
        </Button>
      </div>
      {message}
    </form>
  );
};

export default AccountEditForm;
