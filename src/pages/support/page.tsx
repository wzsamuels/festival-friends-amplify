import Header from "../../components/layout/Header";
import {SubmitHandler, useForm} from "react-hook-form";
import InputWrapper from "../../components/common/InputWrapper/InputWrapper";
import React, {useEffect, useState} from "react";
import Label from "../../components/common/Label/Label";
import Input from "../../components/common/Input/Input";
import useProfileStore from "../../stores/profileStore";
import TextArea from "../../components/common/TextArea";
import {API} from "@aws-amplify/api";
import Button from "../../components/common/Button/Button";

interface SupportInputs {
  email: string;
  name: string;
  message: string;
}

const SupportPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<SupportInputs>();
  const userProfile = useProfileStore(state => state.userProfile);
  const loadingUserProfile = useProfileStore(state => state.loadingUserProfile);

  useEffect(() => {
    if(!userProfile || loadingUserProfile) return;
    reset({
      email: userProfile?.email || "",
      name: `${userProfile?.firstName} ${userProfile?.lastName}` || ""
    })
  }, [userProfile, loadingUserProfile, reset])

  const submitForm: SubmitHandler<SupportInputs> = async (data) => {
    setSubmitting(true);
    try {
      await API.post("email", "/", {
        body: {
          subject: "Customer Feedback / Support Request",
          toAddress: ["gabrielle@eventfriends.app", "contact@twinsilverdesign.com"],
          //toAddress: ["contact@twinsilverdesign.com"],
          emailBody: `
           <html lang="en">
            <body>
              <h2>Feedback Details</h2>                     
              <p>Name: ${data.name}</p>
              <p>Email: ${data.email}</p>
              <p>Message: ${data.message}</p>
            </body>
          </html>
          `
        }
      })
      setSubmitted(true);
    } catch (e) {
      console.log("Error submitting form", e);
      setErrorMessage("There was an error submitting your form. Please try again later.")
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Header/>
      <div className="p-4">
        <h1 className="text-2xl text-center my-6">Feedback & Support</h1>
        <div className="my-4 text-center">If you have any questions, concerns, problems, or any feedback at all, please reach out to us by filling out the form below.</div>
        <div className="flex items-center flex-col justify-center">
          {
            submitted ? <p className="text-xl text-center mb-4">Thank you for your feedback. We will get back to you as soon as possible.</p>
              :
            <form onSubmit={handleSubmit(submitForm)} className="w-full max-w-xl">
              <InputWrapper className="mb-4">
                <Label>Email: </Label>
                { userProfile ?
                  <div className="flex-1">
                    {userProfile.email}
                  </div>
                  :
                  <Input {...register("email", { required: true })}/>
                }
              </InputWrapper>
              {errors.email && <p className="text-red-500 text-center mb-4">Email is required</p>}

              <InputWrapper className="mb-4">
                <Label>Name: </Label>
                { userProfile  ?
                  <div className="flex-1">
                    {userProfile.firstName} {userProfile.lastName}
                  </div>
                  :
                  <Input {...register("name", { required: true })}/>}
              </InputWrapper>
              {errors.name && <p className="text-red-500 text-center mb-4">Name is required</p>}

              <div className="mb-4">Message:</div>
              <textarea className="border-black border w-full max-w-xl mb-4 px-2 py-1" rows={5} {...register("message", { required: true })}/>
              {errors.message && <p className="text-red-500 text-center mb-4">Message is required</p>}

              {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
              <div className="flex justify-center">
                <Button className="disabled:opacity-50" disabled={submitting || submitted} type="submit">{submitting ? "Submitting..." : "Submit"}</Button>
              </div>
            </form>
          }
        </div>
      </div>
    </>
  )
}

export default SupportPage