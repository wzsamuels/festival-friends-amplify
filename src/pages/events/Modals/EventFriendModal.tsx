import { ModalProps } from "../../../@types/modal";
import { Event, Profile } from "../../../models";
import Modal from "../../../components/common/Modal/Modal";
import React from "react";
import FriendCard from "../../../components/ui/FriendCard";

interface EventFriendModalProps extends ModalProps {
  event: Event;
  attendingFriends: Profile[];
}
const EventFriendModal = ({
  event,
  attendingFriends,
  isOpen,
  setIsOpen,
}: EventFriendModalProps) => {
  return (
    <Modal
      className="max-w-xl"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={`Friends attending ${event.name} event`}
    >
      <div className="flex flex-wrap gap-4">
        {attendingFriends.map((friend) => (
          <FriendCard profile={friend} key={friend.id} link={true} />
        ))}
      </div>
    </Modal>
  );
};

export default EventFriendModal;
