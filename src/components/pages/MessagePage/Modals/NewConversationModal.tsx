import {ModalProps} from "../../../../@types/modal";
import Modal from "../../../common/Modal/Modal";
import FriendCard from "../../../ui/FriendCard";
import React from "react";
import {Profile} from "../../../../models";

interface NewConversationModalProps extends ModalProps {
  friendProfiles: Profile[];
  handleNewConversation: (data: { friendProfile: Profile }) => void;
}

const NewConversationModal = ({isOpen, setIsOpen, friendProfiles, handleNewConversation} : NewConversationModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Start New Conversation"
      className='max-w-6xl'
    >
      <div className="flex flex-wrap p-4 justify-center">
        {friendProfiles.length > 0 ? (
          friendProfiles.map((profile) => (
            <FriendCard
              key={profile.id}
              profile={profile}
              onClick={() =>
                handleNewConversation({ friendProfile: profile })
              }
              link={false}
              className="m-4 cursor-pointer"
            />
          ))
        ) : (
          <div>
            <h1 className="text-xl md:text-2xl my-4">
              No Friends found. Add some friends to start a conversation.
            </h1>
          </div>
        )}
      </div>
    </Modal>
  )
}

export default NewConversationModal