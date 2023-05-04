import Modal from "../../../common/Modal";
import React from "react";
import {ModalProps} from "../../../../@types/modal";
import {useForm} from "react-hook-form";
import InputWrapper from "../../../common/InputWrapper";
import Label from "../../../common/Label";
import Input from "../../../common/Input";

const EventSearchModal = ({isOpen, setIsOpen} : ModalProps) => {
  const { register} = useForm()
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='Search Festivals'>
      <div className='p-4'>
        <form>
          <InputWrapper>
            <Label>Location</Label>
            <Input {...register('location')}/>
          </InputWrapper>
        </form>
      </div>
    </Modal>
  )
}