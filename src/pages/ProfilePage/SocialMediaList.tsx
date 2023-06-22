import {SocialMedia, Profile} from "../../models";
import React, {useEffect, useState} from "react";

const SocialMediaList = ({profile} : {profile: Profile | null | undefined}) => {
  const [socialMedia, setSocialMedia] = useState<SocialMedia[]>([]);
  let socialMediaVar: SocialMedia[] = [];
  profile?.socialMedia.toArray()
    .then(sm => socialMediaVar = sm)

  useEffect(() => {
    try {
      if (profile) {
        profile.socialMedia.toArray()
          .then(socialMedia => setSocialMedia(socialMedia))
      }
    } catch(e) {
      console.error("Error fetching social media", e);
    }
  }, [profile]);

  console.log(socialMedia);
  console.log(socialMediaVar);

  return (
    <ul>
      {socialMedia?.map(sm =>
        <li
          className="text-base md:text-lg my-2 flex flex-wrap" key={sm.id}>
          <span className="basis-[120px]">{sm.socialMediaType}</span>
          <span>{sm.accountURL}</span>
        </li>)}
    </ul>
  )
}

export default SocialMediaList