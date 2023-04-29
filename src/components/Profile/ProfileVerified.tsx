import {Photo, UserProfile} from "../../models";
import React, {useEffect, useState} from "react";
import {Storage} from "aws-amplify";
import {DataStore} from "@aws-amplify/datastore";
import {personCircle} from "ionicons/icons";
import ProfileEditModal from "./ProfileEditModal";
import ProfileImageModal from "./ProfileImageModal";
import PhotoUploadModal from "./PhotoUploadModal";
import PhotoImage from "../PhotoImage";
import {BsPerson} from "react-icons/all";
import {Dialog} from "@headlessui/react";

const ProfileVerified = ({user, userProfile} : {user: any, userProfile: UserProfile}) => {
  const [profileImage, setProfileImage] = useState("")
  const [photos, setPhotos] = useState<Photo[]>([])
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [isProfileModalOpen, setProfileModalOpen] = useState(false)
  const [isPhotoUploadModalOpen, setPhotoUploadModalOpen] = useState(false)
  const [isProfileImageModalOpen, setIsProfileImageModalOpen] = useState(false)
  const [isPhotoModalOpen, setPhotoModalOpen] = useState(false)
  const [isAlertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const username = user.username as string;

  useEffect(() => {
    const fetchProfileImage = async () => {
      if (userProfile) {
        console.log(userProfile.profileImage)
        const image = await Storage.get(`${userProfile.profileImage}`, {
          level: "public"
        });

        setProfileImage(image);
      }
    }

    fetchProfileImage()

    const photoSub = DataStore.observeQuery(Photo, photo => photo.userProfileID.eq(userProfile.id)).subscribe(({items}) => {
      setPhotos(items)
    })
    return () => {
      photoSub.unsubscribe()
    }

  }, [userProfile])



  useEffect(() => {
    if (!selectedFile) {
      return
    }
    setPhotoUploadModalOpen(true);
  }, [selectedFile])


  return (
    <div className='flex flex-col items-center p-4 mt-8 w-full'>
      <section className={'flex justify-center flex flex-col'}>
        {
          userProfile.profileImage ?
            <img onClick={() => setIsProfileImageModalOpen(true)} className='max-w-[350px] w-full rounded-full cursor-pointer' src={profileImage} alt="Profile Image"/>
            :
            <div className='w-[350px] h-[350px] border border-medium-default'>
              <BsPerson/>
            </div>
        }
        <div className='flex justify-center my-2'>
          <button onClick={() => setProfileModalOpen(true)}>
            Edit Profile
          </button>
        </div>
      </section>
      <hr className='my-8 border border-primary-default w-full'/>
      <section className='flex flex-col items-center jusify-content my-4 w-full'>
        <div className='flex justify-between w-full max-w-xl'>
          <h2 className='text-2xl'>Photos</h2>
          <label htmlFor="upload-photo" className='block'><button>Upload Photo</button></label>
          <input type="file" accept="image/png, image/jpeg"
                 onChange={e => e?.target?.files && setSelectedFile(e.target.files[0])}
                 className='my-4 hidden'
                 id="upload-photo"/>
        </div>
        <div className='flex justify-center gap-4 flex-wrap w-full my-8'>
          {
            photos?.map(photo =>
              <div className='max-w-[200px] max-h-[200px]' onClick={() => {setPhotoModalOpen(true); setSelectedPhoto(photo)}} key={photo.id}>
                <PhotoImage className='object-cover cursor-pointer'  photo={photo}/>
              </div>
            )
          }
        </div>
      </section>
      <PhotoUploadModal
        profile={userProfile}
        username={username}
        isOpen={isPhotoUploadModalOpen}
        setIsOpen={setPhotoUploadModalOpen}
        photoFile={selectedFile}
        setPhotoFile={setSelectedFile}
      />
      <ProfileImageModal
        profile={userProfile}
        username={username}
        isOpen={isProfileImageModalOpen}
        setIsOpen={setIsProfileImageModalOpen}
        photos={photos}/>
      <ProfileEditModal
        profile={userProfile}
        profileImage={profileImage}
        isOpen={isProfileModalOpen}
        setIsOpen={setProfileModalOpen}
        username={username}
        callback={() => {
          setProfileModalOpen(false);
          setIsProfileImageModalOpen(true);
        }}
      />
      <PhotoModal profile={userProfile} photo={selectedPhoto} isOpen={isPhotoModalOpen} setIsOpen={setPhotoModalOpen}/>
    </div>
  )
}

interface ModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

interface PhotoModalProps extends ModalProps {
  profile: UserProfile
  photo: Photo | null
}

const PhotoModal = ({profile, isOpen, setIsOpen, photo} : PhotoModalProps) => {
  const handleDeletePhoto = async () => {
    if(photo) {
      await DataStore.delete(photo)
      await Storage.remove(`${photo.s3Key}`)
    }
    setIsOpen(false)
  }
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <Dialog.Title>
          <button onClick={() => setIsOpen(false)}>
            Close
          </button>
        </Dialog.Title>
        { photo &&<PhotoImage className='w-full' photo={photo}/>}
        <div className='flex justify-center my-4'>
          <button onClick={handleDeletePhoto}>
            Delete
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}

export default ProfileVerified