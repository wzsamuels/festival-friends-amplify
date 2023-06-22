import Modal from "../../../components/common/Modal/Modal";
import {ModalProps} from "../../../@types/modal";
import React, {useState} from "react";
import {Profile} from "../../../models";
import TextArea from "../../../components/common/TextArea";
import InputWrapper from "../../../components/common/InputWrapper/InputWrapper";
import {SubmitHandler, useForm} from "react-hook-form";
import Button from "../../../components/common/Button/Button";
import {API} from "@aws-amplify/api";
import Label from "../../../components/common/Label/Label";

interface ReportModalProps extends ModalProps {
  profile: Profile
}

interface ReportInputs {
  reason: string
}

const ReportModal = ({isOpen, setIsOpen, profile} : ReportModalProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ReportInputs>()
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const sendReport: SubmitHandler<ReportInputs> = async (data) => {
    setSubmitting(true);
    await API.post("email", "/", {
      body: {
        subject: "A User Has Been Reported",
        emailBody: `
            <html lang="en">
              <body>
                <div>User: ${profile.firstName} ${profile.lastName}</div>
                <div><a href="https://www.eventfriends.app/friends/profile/${profile.id}">Profile Page</a></div>
                <div>Reason for report:</div>
                <p>${data.reason}</p>
              </body>
            </html>`,
        toAddress: ["gabrielle@eventfriends.app", "contact@twinsilverdesign.com"],
      }
    })
    setSubmitting(false);
    setSubmitted(true)
  }

  const dismissModal = () => {
    reset();
    setSubmitting(false);
    setSubmitted(false);
    setIsOpen(false);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Report User"}>
      <div className="p-4">
        <p>Event Friends takes the safety of its community very seriously. We will not tolerate any content that is considered to be inappropriate or harmful. This includes but is not limited to the following:</p>
        <ul className="list-disc p-4">
          <li>Events or pictures that promote violent, hateful or illegal content</li>
          <li>Harassment or threats through messages or pictures</li>
          <li>Any user misrepresenting or impersonating another user</li>
        </ul>
        <p>If you believe that any of these policies are violated, please fill out the form below and we will take reasonable steps to remove any content that we think violates these policies.</p>
        {
          submitted ?
            <div className="flex flex-col justify-center gap-4">
              <div className="my-4 text-xl">Your report has been submitted.</div>
              <Button onClick={dismissModal}>Close</Button>
            </div>
            :
            <form className="my-6" onSubmit={handleSubmit(sendReport)}>
              <div className="flex flex-wrap">
                <h2 className="basis-[200px]">User Reported</h2>
                <span>{profile.firstName} {profile.lastName}</span>
              </div>
              <div className="my-2">
                <div>Reason for Report</div>
                <textarea className="border border-black px-2 py-1 w-full" rows={4} {...register("reason", { required: true })}/>
                {errors.reason && <p className="text-red-500 text-sm">Reason for the report is required</p>}
              </div>
              <div className="flex justify-center mt-4 gap-4">
                <Button type="button" variation="outline" onClick={dismissModal} disabled={submitting}>Cancel</Button>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="disabled:opacity-50"
                >{submitting ? "Submitting..." : "Submit"}</Button>
              </div>
            </form>
        }
      </div>
    </Modal>
  )
}

export default ReportModal;