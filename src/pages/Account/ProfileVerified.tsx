import {Photo, UserProfile} from "../../models";
import React, {FormEvent, useEffect, useState} from "react";
import { SubmitHandler} from "react-hook-form";
import {Storage} from "aws-amplify";
import {DataStore} from "@aws-amplify/datastore";
import getErrorMessage from "../../lib/getErrorMessage";
import {IonAlert, IonButton, IonIcon} from "@ionic/react";
import {AccountSettings} from "@aws-amplify/ui-react";
import ProfileForm from "../../components/ProfileForm";
import {ProfileInputs} from "../../types";
import { v4 as uuidv4 } from 'uuid';
import {personCircle} from "ionicons/icons";

const ProfileVerified = ({username, profile} : {username: string, profile: UserProfile}) => {
  const [profileImage, setProfileImage] = useState("")
  const [selectedFile, setSelectedFile] = useState<File>()
  const [message, setMessage] = useState("")
  const [photos, setPhotos] = useState<Photo[]>([])

  const handleFileSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(selectedFile) {
      console.log(selectedFile)
      try {
        await Storage.put(`${username}/${selectedFile.name}`, selectedFile, {contentType: selectedFile.type});
        // Delete old image if it exists
        if(profile?.profileImage) {
          await Storage.remove(profile?.profileImage)
        }
        // Profile should always exist, but let's make Typescript happy
        if(profile) {
          await DataStore.save(UserProfile.copyOf(profile, updated => {
            updated.profileImage = `${username}/${selectedFile.name}`
          }))
        }
      } catch (error) {
        console.log("Error uploading file: ", error);
      }
    }
    else {
      alert("No file selected!")
    }
  }

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
    const fetchPhotos = async () => {
      const photos = await DataStore.query(Photo, photo => photo.userProfileID.eq(profile.id))
      console.log(photos)
      setPhotos(photos)
    }
    const photoSub = DataStore.observeQuery(Photo, photo => photo.userProfileID.eq(profile.id)).subscribe(({items}) => {
      setPhotos(items)
    })
    return () => {
      photoSub.unsubscribe()
    }

  }, [profile])

  const handlePhotoUpload = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(selectedFile)
    if(selectedFile) {
      const id = uuidv4()
      try {
        await Storage.put(`${username}/${id}`, selectedFile, {contentType: selectedFile.type});
        // Profile should always exist, but let's make Typescript happy
        if(profile) {
          await DataStore.save(new Photo({userProfile: profile, s3Key: `${username}/${id}`, isPrivate: false, userProfileID: profile.id}))
        }
      } catch (error) {
        console.log("Error uploading file: ", error);
      }
    }
    else {
      alert("No file selected!")
    }
  }

  const handleProfileUpdate: SubmitHandler<ProfileInputs> = async (data) => {
    console.log(data)
    try {
      const results = await DataStore.save(UserProfile.copyOf(profile, updated => {
        updated.firstName = data.firstName
        updated.lastName = data.lastName
        updated.phone = data.phone
        updated.city = data.city
        updated.state = data.state
        updated.zipcode = data.zipcode
        updated.address = data.address
        updated.address2 = data.address2
        updated.school = data.school
      }))
      console.log(results)
      setMessage("Profile successfully updated!")
    } catch (error) {
      setMessage(`Error updating profile: ${getErrorMessage(error)}`)
    }
  }


  return (
    <div className='flex flex-col items-center p-4 mt-8 w-full'>
      <section className={'my-8 flex justify-center flex-col'}>
        {
          profile.profileImage ?
            <img id='change-alert' className='max-w-[350px] rounded-full cursor-pointer rounded-xl' src={profileImage} alt="Profile Image"/>
            :
            <div className='w-[350px] h-[350px] border border-medium-default rounded-xl'>
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
        <form className='flex flex-col justify-center w-full' onSubmit={handleFileSubmit}>
          <input
            type='file'
            accept="image/png, image/jpeg"
            onChange={e => e?.target?.files && setSelectedFile(e.target.files[0])}
            className='my-4'
          />
          <div className='mt-6 flex justify-center'>
            <IonButton type="submit">Update Profile Image</IonButton>
          </div>
        </form>
      </section>
      <section className='my-8 min-w-4xl  max-w-[600px] w-full'>
        <h2 className='text-2xl md:text-3xl my-6'>Update Profile</h2>
        <ProfileForm onSubmit={handleProfileUpdate} profile={profile}/>
        { message }
      </section>
      <section>
        <h2>Photos</h2>
        <form onSubmit={handlePhotoUpload}>

          <input type="file" accept="image/png, image/jpeg"
                 onChange={e => e?.target?.files && setSelectedFile(e.target.files[0])}
                 className='my-4'/>
          <IonButton type='submit'>Upload Photo</IonButton>
        </form>
        <div>
          {
            photos?.map(photo => <PhotoImage key={photo.id} photo={photo}/>)
          }
        </div>
      </section>
      <section className='my-8 min-w-4xl  max-w-[600px] w-full'>
        <h2 className='text-2xl md:text-3xl my-6'>Change Password</h2>
        <AccountSettings.ChangePassword/>
      </section>
      <section className='my-8 min-w-4xl  max-w-[600px] w-full'>
        <h2 className='text-2xl md:text-3xl my-6'>Delete Account</h2>
        <div className='my-6 flex justify-center'>
          <AccountSettings.DeleteUser/>
        </div>
        <h3 className='text-danger-default my-4 text-xl text-center'>This action cannot be undone!</h3>
      </section>
    </div>
  )
}

const PhotoImage = ({photo} : {photo: Photo}) => {
  const [photoUrl, setPhotoUrl] = useState('')
  console.log(photo)

  useEffect(() => {
    if(photo) {
      Storage.get(photo.s3Key, {
        level: "public"
      }).then(url => {
        setPhotoUrl(url)
      })
    }
  }, [photo])

  if(!photo) {
    return null;
  }
  return (
    <img className='max-w-[350px] rounded-full cursor-pointer rounded-xl' src={photoUrl} alt={`${photo.description ? photo.description : "Photo"}`}/>
  )
}

export default ProfileVerified