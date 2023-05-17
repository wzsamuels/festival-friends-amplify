import React, {useState} from "react";
import Modal from "../../common/Modal/Modal";
import {SubmitHandler, useForm} from "react-hook-form";
import InputWrapper from "../../common/InputWrapper/InputWrapper";
import Label from "../../common/Label/Label";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import {ModalProps} from "../../../@types/modal";
import {Conversation} from "../../../models";
import {DataStore} from "aws-amplify";
import {criteria, getFilteredData} from "../../../lib/searchHelpers";
import ConversationCard from "../../ui/ConversationCard";

interface ConversationSearchInputs  {
  firstName: string
  lastName: string
}

interface ConservationSearchModalProps extends ModalProps {
  conversations: Conversation[]
}

const ConservationSearchModal = ({isOpen, setIsOpen} : ConservationSearchModalProps) => {
  const [results, setResults] = useState<Conversation[]>([])
  const {register, handleSubmit} = useForm<ConversationSearchInputs>()


  const handleSearch:SubmitHandler<ConversationSearchInputs> = async data => {
    const filteredData = getFilteredData(data);
    const conversations = await DataStore.query(Conversation, c => c.or(() => criteria(c, filteredData)));
    setResults(conversations)
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
      {
        results.map(result => 
          <ConversationCard conversation={result} onClick={() => setIsOpen(false)} key={result.id}/>)
      }
    </Modal>
  )
}

export default ConservationSearchModal