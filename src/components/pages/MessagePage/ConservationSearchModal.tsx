import React from "react";
import {ProfileModalProps} from "../../../@types/profile";
import Modal from "../../common/Modal";
import {SubmitHandler, useForm} from "react-hook-form";
import InputWrapper from "../../common/InputWrapper";
import Label from "../../common/Label";
import Input from "../../common/Input";
import Button from "../../common/Button/Button";
import {ModalProps} from "../../../@types/modal";
import {Conversation} from "../../../models";

interface ConversationSearchInputs  {
  firstName: string
  lastName: string
}

interface ConservationSearchModalProps extends ModalProps {
  conversations: Conversation[]
}

const ConservationSearchModal = ({isOpen, setIsOpen} : ConservationSearchModalProps) => {
  const {register, handleSubmit} = useForm<ConversationSearchInputs>()

  const handleSearch:SubmitHandler<ConversationSearchInputs> = async data => {
    alert(data)
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Search for a conservation">
      <form onSubmit={handleSubmit(handleSearch)}>
        <InputWrapper>
          <Label>First Name</Label>
          <Input {...register('firstName')} name="firstName"/>
        </InputWrapper>
        <InputWrapper>
          <Label>Last Name</Label>
          <Input {...register('lastName')} name="lastName"/>
        </InputWrapper>
        <Button type='submit'>Search</Button>
      </form>
    </Modal>
  )
}

export default ConservationSearchModal