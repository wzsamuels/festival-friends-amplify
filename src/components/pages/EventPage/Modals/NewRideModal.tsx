import { ModalProps } from "../../../../@types/modal";
import Modal from "../../../common/Modal/Modal";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import InputWrapper from "../../../common/InputWrapper/InputWrapper";
import Label from "../../../common/Label/Label";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";
import { Festival, Ride, RideUser } from "../../../../models";
import { DataStore } from "@aws-amplify/datastore";
import useProfileStore from "../../../../stores/profileStore";

// TODO - Finish modal

interface RideInputs {
  maxPassengers: number;
  departureTime: string;
  startPoint: string;
  endPoint: string;
}

interface NewRideModalProps extends ModalProps {
  event: Festival;
}

const NewRideModal = ({ isOpen, setIsOpen, event }: NewRideModalProps) => {
  const { register, handleSubmit } = useForm<RideInputs>();
  const userProfile = useProfileStore(state => state.userProfile)

  const onSubmit: SubmitHandler<RideInputs> = async (data) => {
    if (!userProfile) return;

    try {
      const date = new Date(data.departureTime);
      const departureTime = date.toISOString();
      const newRide = await DataStore.save(
        new Ride({
          maxPassengers: Number(data.maxPassengers),
          departureTime: departureTime,
          startPoint: data.startPoint,
          endPoint: data.endPoint,
          event: event,
          eventID: event.id,
        })
      );
      const newRideUser = await DataStore.save(
        new RideUser({
          ride: newRide,
          rideID: newRide.id,
          userProfile: userProfile,
          userProfileID: userProfile.id,
          isDriver: true,
        })
      );
      await DataStore.save(
        Ride.copyOf(newRide, (updated) => {
          updated.driver = newRideUser;
        })
      );
    } catch (e) {
      console.log(e);
    } finally {
      setIsOpen(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="New Ride"
      className="max-w-xl"
    >
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper className="my-4">
          <Label>Max passengers</Label>
          <Input {...register("maxPassengers")} />
        </InputWrapper>
        <InputWrapper className="my-4">
          <Label>Departure time</Label>
          <Input type="datetime-local" {...register("departureTime")} />
        </InputWrapper>
        <InputWrapper className="my-4">
          <Label>Start point</Label>
          <Input {...register("startPoint")} />
        </InputWrapper>
        <InputWrapper className="my-4">
          <Label>End point</Label>
          <Input {...register("endPoint")} />
        </InputWrapper>
        <div className="flex justify-center mt-6">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Modal>
  );
};

export default NewRideModal;
