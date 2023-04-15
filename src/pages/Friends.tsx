import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon, IonInput,
  IonItem, IonModal,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React, {useEffect, useRef, useState} from "react";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {DataStore, Storage} from "aws-amplify";
import {Friends, UserProfile} from "../models";
import {search} from "ionicons/icons";
import AccountButton from "../components/AccountButton";
import {SubmitHandler, useForm} from "react-hook-form";

type SearchInput = {
  firstName: string,
  lastName: string,
  city: string,
  state: string,
  school: string
}

const FriendsPage: React.FC = () => {
  const { user } = useAuthenticator();
  const [friends, setFriends ] = useState<UserProfile[]>([])
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const fetchFriends = async () => {
      const friendData = await DataStore.query(Friends, c => c.userID.eq(user.username as string))
      const friendPromises = friendData.map(async friend => {
        const result = await DataStore.query(UserProfile, c => c.userID.eq(friend.friendID))
        return result[0];
      })
      const friendProfiles = await Promise.all(friendPromises)
      setFriends(friendProfiles)
    }
    if(user) { fetchFriends()}
  }, [user])




  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Friends</IonTitle>
          <IonButtons slot='end'>
            <IonButton onClick={() => setIsOpen(true)}>
              <IonIcon size='large'  icon={search}/>
            </IonButton>
            <AccountButton/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Friends</IonTitle>
          </IonToolbar>
        </IonHeader>
        {
          user ?
            <div className={'flex flex-col flex-wrap p-4'}>
              { friends.length ?
                friends.map((friend) =>
                  <FriendCard key={friend.id} profile={friend}/>
                )
                :
                <h1 className='text-xl md:text-2xl'>No friends yet! How about searching for some people you might know?</h1>
              }
            </div>
            :
            <div>
              Account Required to Festivals Friends
            </div>

        }
        <IonModal isOpen={isOpen}>
          <FriendSearch setIsOpen={setIsOpen}/>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

const FriendSearch = ({setIsOpen} : {setIsOpen: (arg0: boolean) => void}) => {
  const { register, handleSubmit } = useForm<SearchInput>()
  const [results, setResults] = useState<UserProfile[]>([])
  const searchFriends: SubmitHandler<SearchInput> = async data => {
    console.log(data)
    const filteredData: { field: string; value: string; }[] = []
    for (const [key, value] of Object.entries(data)) {
      if(value) {
        filteredData.push({field: key, value: value})
      }
    }
    console.log(filteredData)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const criteria = (c) => {
      const query: any[] = []
      filteredData.forEach(item => {
        query.push(c[item.field].eq(item.value));
      })
      return query;
    }

    const results = await DataStore.query(UserProfile, c =>
      c.or(criteria))
    console.log(results)
    setResults(results)
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='ion-text-center' >Friend Search</IonTitle>
          <IonButtons slot="end">
            <IonButton strong={true} onClick={() => setIsOpen(false)}>
              Cancel
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit(searchFriends)}>
          <IonInput label='First Name' labelPlacement='stacked' {...register('firstName')} type="text" placeholder="Your name" />
          <IonInput label='Last Name' labelPlacement='stacked' {...register('lastName')} type="text" placeholder="Your name" />
          <IonInput label='City' labelPlacement='stacked' {...register('city')} type="text" placeholder="Your name" />
          <IonInput label='School' labelPlacement='stacked' {...register('school')} type="text" placeholder="Your name" />
          <IonButton type='submit'>Search</IonButton>
        </form>
        {
          results.map(result =>
            <FriendCard profile={result} key={result.id} />
          )
        }
      </IonContent>
    </>
  )
}

const FriendCard = ({profile} : {profile: UserProfile}) => {

  const [profileImage, setProfileImage] = useState("")

  useEffect(() => {
    const fetchProfileImage = async () => {
      const imageData = await Storage.get(profile.profileImage as string)
      setProfileImage(imageData)
    }
    fetchProfileImage();
  })

  return (
    <IonItem routerLink={`/friends/profile/${profile.userID}`} className={'flex max-w-[300px] items-center m-4 border border-white p-2 rounded-xl hover:border-gray-500'}>
      <div className={'mx-4'}>
        <img className={'rounded-full'} width={50} height={50} src={profileImage} alt={`${profile.firstName} ${profile.lastName}'s Profile Image`}/>
      </div>
      <div>{profile.firstName} {profile.lastName}</div>
    </IonItem>
  )
}

export default FriendsPage;
