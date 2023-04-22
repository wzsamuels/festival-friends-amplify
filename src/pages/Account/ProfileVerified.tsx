import {Photo, UserProfile} from "../../models";
import React, {useEffect, useState} from "react";
import {Storage} from "aws-amplify";
import {DataStore} from "@aws-amplify/datastore";
import {
  IonAlert,
  IonButton,
  IonIcon
} from "@ionic/react";
import {personCircle} from "ionicons/icons";
import ProfileEditModal from "./ProfileEditModal";
import ProfileImageModal from "./ProfileImageModal";
import PhotoUploadModal from "./PhotoUploadModal";
import PhotoImage from "../../components/PhotoImage";

const ProfileVerified = ({username, profile} : {username: string, profile: UserProfile}) => {
  const [profileImage, setProfileImage] = useState("")
  const [photos, setPhotos] = useState<Photo[]>([])
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isProfileModalOpen, setProfileModalOpen] = useState(false)
  const [isPhotoModalOpen, setPhotoModalOpen] = useState(false)
  const [isProfileImageModalOpen, setIsProfileImageModalOpen] = useState(false)
  const [isAlertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")

  useEffect(() => {
    const fetchProfileImage = async () => {
      if (profile) {
        console.log(profile.profileImage)
        const image = await Storage.get(`${profile.profileImage}`, {
          level: "public"
        });

        setProfileImage(image);
      }
    }

    fetchProfileImage()

    const photoSub = DataStore.observeQuery(Photo, photo => photo.userProfileID.eq(profile.id)).subscribe(({items}) => {
      setPhotos(items)
    })
    return () => {
      photoSub.unsubscribe()
    }

  }, [profile])



  useEffect(() => {
    if (!selectedFile) {
      return
    }
    setPhotoModalOpen(true);
  }, [selectedFile])


  return (
    <div className='flex flex-col items-center p-4 mt-8 w-full'>
      <section className={'flex justify-center flex flex-col'}>
        {
          profile.profileImage ?
            <img id='change-alert' className='max-w-[350px] rounded-full cursor-pointer' src={profileImage} alt="Profile Image"/>
            :
            <div className='w-[350px] h-[350px] border border-medium-default'>
              <IonIcon icon={personCircle} className='w-full h-full text-medium-default'/>
            </div>
        }
        <IonAlert
          header='Change Profile Picture'
          trigger='change-alert'
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
            },
            {
              text: 'Upload Photo',
              role: 'confirm'
            }
          ]}
        >
        </IonAlert>

        <div className='flex justify-center my-2'>
          <IonButton onClick={() => setProfileModalOpen(true)}>
            Edit Profile
          </IonButton>
        </div>

      </section>
      <hr className='my-8 border border-primary-default w-full'/>
      <section >
        <div className='flex items-center justify-between my-4'>
          <h2 className='text-2xl'>Photos</h2>
          <label htmlFor="upload-photo" className='block'><IonButton class='pointer-events-none'>Upload Photo</IonButton></label>
          <input type="file" accept="image/png, image/jpeg"
                 onChange={e => e?.target?.files && setSelectedFile(e.target.files[0])}
                 className='my-4 hidden'
                 id="upload-photo"/>
        </div>
        <div className='flex justify-center gap-4 flex-wrap w-full my-8'>
          {
            photos?.map(photo =>
              <div className='max-w-[200px] max-h-[200px]' key={photo.id}>
                <PhotoImage className='object-cover cursor-pointer'  photo={photo}/>
              </div>
            )
          }
        </div>
      </section>
      <IonAlert
        isOpen={isAlertOpen}
        header={alertMessage}
        buttons={['OK']}
        onDidDismiss={() => setAlertOpen(false)}
      ></IonAlert>
      <PhotoUploadModal
        profile={profile}
        username={username}
        isOpen={isPhotoModalOpen}
        setIsOpen={setPhotoModalOpen}
        photoFile={selectedFile}
        setPhotoFile={setSelectedFile}
      />
      <ProfileImageModal
        profile={profile}
        username={username}
        isOpen={isProfileImageModalOpen}
        setIsOpen={setIsProfileImageModalOpen}
        photos={photos}/>
      <ProfileEditModal
        profile={profile}
        profileImage={profileImage}
        isOpen={isProfileModalOpen}
        setIsOpen={setProfileModalOpen}
        username={username}
        callback={() => {
          setProfileModalOpen(false);
          setIsProfileImageModalOpen(true);
        }}
      />
    </div>
  )
}

export default ProfileVerified