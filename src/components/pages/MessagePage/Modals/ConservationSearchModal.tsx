import React, {useState} from "react";
import Modal from "../../../common/Modal/Modal";
import {SubmitHandler, useForm} from "react-hook-form";
import InputWrapper from "../../../common/InputWrapper/InputWrapper";
import Label from "../../../common/Label/Label";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";
import {ModalProps} from "../../../../@types/modal";
import {Conversation} from "../../../../models";
import {DataStore} from "aws-amplify";
import {criteria, getFilteredData} from "../../../../lib/searchHelpers";
import ConversationCard from "../../../ui/ConversationCard";
import useProfileStore from "../../../../stores/profileStore";

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
  const userProfile = useProfileStore(state => state.userProfile)

  const handleSearch:SubmitHandler<ConversationSearchInputs> = async data => {
    if(!userProfile) return;
    const filteredData = getFilteredData(data);
    try {
      const conversations = await DataStore.query(Conversation, c =>
        c.and(c => [
          c.or(c => [
            c.profileID.eq(userProfile.id),
            c.friendProfileID.eq(userProfile.id)
          ]),
          c.and(() => criteria(c, filteredData))
        ]))
      setResults(conversations)
    } catch (e) {
      console.log("Error in conversation search",e)
      setResults([])
    }
  }

  console.log(results)

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='max-w-2xl'
      title="Search for a conservation"
    >
      <form className="p-4" onSubmit={handleSubmit(handleSearch)}>
        <InputWrapper className="my-4">
          <Label>First Name</Label>
          <Input {...register('firstName')} name="firstName"/>
        </InputWrapper>
        <InputWrapper className="my-4">
          <Label>Last Name</Label>
          <Input {...register('lastName')} name="lastName"/>
        </InputWrapper>
        <div className='flex justify-end'>
          <Button type='submit'>Search</Button>
        </div>
      </form>
      <div className="flex flex-col items-center justify-center">
      {
        results.map(result => 
          <ConversationCard className="m-4" conversation={result} onClick={() => setIsOpen(false)} key={result.id}/>)
      }
      </div>
    </Modal>
  )
}

export default ConservationSearchModal