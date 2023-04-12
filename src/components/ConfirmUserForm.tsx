import {SubmitHandler, useForm} from "react-hook-form";
import React, {useState} from "react";
import {Auth} from "aws-amplify";
import getErrorMessage from "../lib/getErrorMessage";
type ConfirmInput = {
  code: string
}
const ConfirmEmailForm = ({username} : {username: string}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ConfirmInput>();
  const [message, setMessage] = useState("")

  const handleConfirm: SubmitHandler<ConfirmInput> = async data => {
    try {
      await Auth.confirmSignUp(username, data.code);
    } catch (error) {
      console.log('error confirming sign up', error);
      setMessage(getErrorMessage(error));
    }
  }

  return (
    <form className='w-full max-w-2xl my-4 p-4 ' onSubmit={handleSubmit(handleConfirm)}>
      <h2 className='my-4 text-xl'>Confirm Email: {username}</h2>
      <div className='flex my-4 items-center [&>*]:mx-2 w-full justify-between flex-wrap'>
        <label className='basis-[200px] shrink-0'>Confirmation Code</label>
        <input className='px-4 py-2 border border-black flex-1' {...register("code", { required: true })} />
      </div>
      <div className='flex justify-center w-full my-6'>
        <input type='submit' className='px-4 py-2 border border-black rounded-xl  hover:bg-gray-500 hover:text-white'/>
      </div>
      {message}
    </form>
  )
}

export default ConfirmEmailForm