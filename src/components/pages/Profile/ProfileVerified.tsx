import {Photo} from "../../../models";
import React, {useEffect, useState} from "react";
import {Storage} from "aws-amplify";
import {DataStore} from "@aws-amplify/datastore";
import ProfileEditModal from "./Modals/ProfileEditModal";
import ProfileImageModal from "./Modals/ProfileImageModal";
import PhotoUploadModal from "./Modals/PhotoUploadModal";
import PhotoImage from "../../ui/PhotoImage";
import {BsPerson} from "react-icons/all";
import BannerPhotoModal from "./Modals/BannerPhotoModal";
import Button from "../../common/Button";
import {useUserProfileStore} from "../../../stores/friendProfilesStore";
import PhotoModal from "./Modals/PhotoModal";

const ProfileVerified = ({user } : {user: any}) => {
  const [profileImage, setProfileImage] = useState("")
  const [bannerImage, setBannerImage] = useState("")
  const [photos, setPhotos] = useState<Photo[]>([])
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [isProfileModalOpen, setProfileModalOpen] = useState(false)
  const [isPhotoUploadModalOpen, setPhotoUploadModalOpen] = useState(false)
  const [isProfileImageModalOpen, setIsProfileImageModalOpen] = useState(false)
  const [isPhotoModalOpen, setPhotoModalOpen] = useState(false)
  const [isBannerModalOpen, setIsBannerModalOpen] = useState(false)
  const username = user.username as string;
  const userProfile= useUserProfileStore((state) => state.userProfile);

  useEffect(() => {
    if (userProfile) {
      const fetchProfileImage = async () => {
        if (userProfile.profileImage) {
          const image = await Storage.get(`${userProfile.profileImage}`, {
            level: "public"
          });
          setProfileImage(image);
        }

        const banner = await userProfile.bannerPhoto;
        if (banner) {
          const bannerFile = await Storage.get(`${banner?.s3Key}`, {
            level: "public"
          });
          setBannerImage(bannerFile);
        }
      }
      fetchProfileImage()

      const photoSub = DataStore.observeQuery(Photo, photo => photo.userProfileID.eq(userProfile.id)).subscribe(({items}) => {
        setPhotos(items)
      })
      return () => {
        photoSub.unsubscribe()
      }
    }

  }, [userProfile])

  useEffect(() => {
    if (!selectedFile) {
      return
    }
    setPhotoUploadModalOpen(true);
  }, [selectedFile])

  return (
    <div className='flex flex-col items-center w-full'>
      <section className={'flex justify-center flex-col relative w-full h-screen max-h-[500px]'}>
        {
          bannerImage ?
            <img src={bannerImage} alt="Banner" className='w-full h-full  object-cover top-0 left-0'/>
            :
            <div className='w-full h-full  object-cover top-0 left-0 bg-light-default'/>
        }
        <div className='flex flex-col justify-center items-center w-full h-full absolute top-0 left-0'>
          <div className='bg-light-default rounded-2xl p-4 flex-1 max-h-[450px] '>
            {
              userProfile?.profileImage ?
                <img onClick={() => setIsProfileImageModalOpen(true)} className='aspect-square max-w-[350px] w-full rounded-full cursor-pointer' src={profileImage} alt="Profile Image"/>
                :
                <div className='flex justify-center items-center w-full h-full max-w-[350px] max-h-[350px] border border-medium-default'>
                  <BsPerson className='w-3/4 h-3/4 text-medium-default text-center'/>
                </div>
            }
            <div className='flex justify-center my-2'>
              <Button className='mx-2 flex-1' onClick={() => setProfileModalOpen(true)}>
                Edit Profile
              </Button>
              <Button className='flex-1' onClick={() => setIsBannerModalOpen(true)}>
                Change Banner
              </Button>
            </div>
          </div>
        </div>
      </section>
      <hr className='my-8 border border-primary-default w-full'/>
      <section className='flex flex-col items-center jusify-content my-4 w-full p-4'>
        <div className='flex justify-between w-full max-w-xl'>
          <h2 className='text-2xl'>Photos</h2>
          <label htmlFor="upload-photo" className='block bg-green-950 text-white rounded-md uppercase py-2 px-4 cursor-pointer'>Upload Photo</label>
          <input type="file" accept="image/png, image/jpeg"
                 onChange={e => e?.target?.files && setSelectedFile(e.target.files[0])}
                 className='my-4 hidden'
                 id="upload-photo"/>
        </div>
        <div className='flex justify-center gap-4 flex-wrap w-full my-8'>
          {
            photos?.map(photo =>
              <div className='max-w-[200px] max-h-[200px]' onClick={() => {setPhotoModalOpen(true); setSelectedPhoto(photo)}} key={photo.id}>
                <PhotoImage className='object-cover cursor-pointer' photo={photo}/>
              </div>
            )
          }
        </div>
      </section>
      <section>
        <h1>Event Attending</h1>
        {}
      </section>
      { userProfile &&
        <>
          <BannerPhotoModal photos={photos} username={username} isOpen={isBannerModalOpen} setIsOpen={setIsBannerModalOpen} profile={userProfile}/>
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
          <PhotoModal photo={selectedPhoto} isOpen={isPhotoModalOpen} setIsOpen={setPhotoModalOpen} deletePhoto={true}/>
        </>
      }
    </div>
  )
}

export default ProfileVerified