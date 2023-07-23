/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      id
      sub
      firstName
      lastName
      verified
      submitted
      brandSubmitted
      profilePhotoID
      bannerPhotoID
      verifyPhotoID
      customerID
      city
      state
      school
      address
      address2
      phone
      email
      zipcode
      birthDate
      hobbies
      gender
      events {
        items {
          id
          profileId
          eventId
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          event {
            id
            name
            genre
            image
            state
            city
            country
            latitude
            longitude
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
            boost
            collegeEvent
            hasPaid
            cancelled
            approved
            subscriptionID
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      rides {
        items {
          id
          profileId
          rideId
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          ride {
            id
            eventID
            driverProfileID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      friends {
        items {
          id
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          profileID
          friendProfile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          friendProfileID
          isAccepted
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      conversations {
        items {
          id
          profileID
          friendProfileID
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          friendProfile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          messages {
            nextToken
            startedAt
            __typename
          }
          unreadMessage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      photos {
        items {
          id
          profileID
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          s3Key
          isPrivate
          identityId
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      groupID
      group {
        id
        name
        domain
        webPage
        events {
          items {
            id
            name
            genre
            image
            state
            city
            country
            latitude
            longitude
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
            boost
            collegeEvent
            hasPaid
            cancelled
            approved
            subscriptionID
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        members {
          items {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      privacySetting {
        id
        city
        state
        school
        email
        events
        rides
        friends
        photos
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      socialMedia {
        items {
          id
          socialMediaType
          accountURL
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          profileSocialMediaId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      profilePrivacySettingId
      __typename
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      id
      sub
      firstName
      lastName
      verified
      submitted
      brandSubmitted
      profilePhotoID
      bannerPhotoID
      verifyPhotoID
      customerID
      city
      state
      school
      address
      address2
      phone
      email
      zipcode
      birthDate
      hobbies
      gender
      events {
        items {
          id
          profileId
          eventId
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          event {
            id
            name
            genre
            image
            state
            city
            country
            latitude
            longitude
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
            boost
            collegeEvent
            hasPaid
            cancelled
            approved
            subscriptionID
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      rides {
        items {
          id
          profileId
          rideId
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          ride {
            id
            eventID
            driverProfileID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      friends {
        items {
          id
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          profileID
          friendProfile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          friendProfileID
          isAccepted
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      conversations {
        items {
          id
          profileID
          friendProfileID
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          friendProfile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          messages {
            nextToken
            startedAt
            __typename
          }
          unreadMessage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      photos {
        items {
          id
          profileID
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          s3Key
          isPrivate
          identityId
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      groupID
      group {
        id
        name
        domain
        webPage
        events {
          items {
            id
            name
            genre
            image
            state
            city
            country
            latitude
            longitude
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
            boost
            collegeEvent
            hasPaid
            cancelled
            approved
            subscriptionID
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        members {
          items {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      privacySetting {
        id
        city
        state
        school
        email
        events
        rides
        friends
        photos
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      socialMedia {
        items {
          id
          socialMediaType
          accountURL
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          profileSocialMediaId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      profilePrivacySettingId
      __typename
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      id
      sub
      firstName
      lastName
      verified
      submitted
      brandSubmitted
      profilePhotoID
      bannerPhotoID
      verifyPhotoID
      customerID
      city
      state
      school
      address
      address2
      phone
      email
      zipcode
      birthDate
      hobbies
      gender
      events {
        items {
          id
          profileId
          eventId
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          event {
            id
            name
            genre
            image
            state
            city
            country
            latitude
            longitude
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
            boost
            collegeEvent
            hasPaid
            cancelled
            approved
            subscriptionID
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      rides {
        items {
          id
          profileId
          rideId
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          ride {
            id
            eventID
            driverProfileID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      friends {
        items {
          id
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          profileID
          friendProfile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          friendProfileID
          isAccepted
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      conversations {
        items {
          id
          profileID
          friendProfileID
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          friendProfile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          messages {
            nextToken
            startedAt
            __typename
          }
          unreadMessage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      photos {
        items {
          id
          profileID
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          s3Key
          isPrivate
          identityId
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      groupID
      group {
        id
        name
        domain
        webPage
        events {
          items {
            id
            name
            genre
            image
            state
            city
            country
            latitude
            longitude
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
            boost
            collegeEvent
            hasPaid
            cancelled
            approved
            subscriptionID
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        members {
          items {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      privacySetting {
        id
        city
        state
        school
        email
        events
        rides
        friends
        photos
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      socialMedia {
        items {
          id
          socialMediaType
          accountURL
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          profileSocialMediaId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      profilePrivacySettingId
      __typename
    }
  }
`;
export const createSocialMedia = /* GraphQL */ `
  mutation CreateSocialMedia(
    $input: CreateSocialMediaInput!
    $condition: ModelSocialMediaConditionInput
  ) {
    createSocialMedia(input: $input, condition: $condition) {
      id
      socialMediaType
      accountURL
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      profileSocialMediaId
      __typename
    }
  }
`;
export const updateSocialMedia = /* GraphQL */ `
  mutation UpdateSocialMedia(
    $input: UpdateSocialMediaInput!
    $condition: ModelSocialMediaConditionInput
  ) {
    updateSocialMedia(input: $input, condition: $condition) {
      id
      socialMediaType
      accountURL
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      profileSocialMediaId
      __typename
    }
  }
`;
export const deleteSocialMedia = /* GraphQL */ `
  mutation DeleteSocialMedia(
    $input: DeleteSocialMediaInput!
    $condition: ModelSocialMediaConditionInput
  ) {
    deleteSocialMedia(input: $input, condition: $condition) {
      id
      socialMediaType
      accountURL
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      profileSocialMediaId
      __typename
    }
  }
`;
export const createPrivacySetting = /* GraphQL */ `
  mutation CreatePrivacySetting(
    $input: CreatePrivacySettingInput!
    $condition: ModelPrivacySettingConditionInput
  ) {
    createPrivacySetting(input: $input, condition: $condition) {
      id
      city
      state
      school
      email
      events
      rides
      friends
      photos
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updatePrivacySetting = /* GraphQL */ `
  mutation UpdatePrivacySetting(
    $input: UpdatePrivacySettingInput!
    $condition: ModelPrivacySettingConditionInput
  ) {
    updatePrivacySetting(input: $input, condition: $condition) {
      id
      city
      state
      school
      email
      events
      rides
      friends
      photos
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deletePrivacySetting = /* GraphQL */ `
  mutation DeletePrivacySetting(
    $input: DeletePrivacySettingInput!
    $condition: ModelPrivacySettingConditionInput
  ) {
    deletePrivacySetting(input: $input, condition: $condition) {
      id
      city
      state
      school
      email
      events
      rides
      friends
      photos
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      name
      genre
      image
      state
      city
      country
      latitude
      longitude
      startDate
      endDate
      type
      address
      description
      url
      customerID
      ticketURL
      boost
      collegeEvent
      hasPaid
      cancelled
      approved
      subscriptionID
      group {
        id
        name
        domain
        webPage
        events {
          items {
            id
            name
            genre
            image
            state
            city
            country
            latitude
            longitude
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
            boost
            collegeEvent
            hasPaid
            cancelled
            approved
            subscriptionID
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        members {
          items {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      groupID
      attendees {
        items {
          id
          profileId
          eventId
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          event {
            id
            name
            genre
            image
            state
            city
            country
            latitude
            longitude
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
            boost
            collegeEvent
            hasPaid
            cancelled
            approved
            subscriptionID
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      rides {
        items {
          id
          event {
            id
            name
            genre
            image
            state
            city
            country
            latitude
            longitude
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
            boost
            collegeEvent
            hasPaid
            cancelled
            approved
            subscriptionID
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          eventID
          driverProfileID
          passengers {
            nextToken
            startedAt
            __typename
          }
          maxPassengers
          departureTime
          startPoint
          endPoint
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      name
      genre
      image
      state
      city
      country
      latitude
      longitude
      startDate
      endDate
      type
      address
      description
      url
      customerID
      ticketURL
      boost
      collegeEvent
      hasPaid
      cancelled
      approved
      subscriptionID
      group {
        id
        name
        domain
        webPage
        events {
          items {
            id
            name
            genre
            image
            state
            city
            country
            latitude
            longitude
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
            boost
            collegeEvent
            hasPaid
            cancelled
            approved
            subscriptionID
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        members {
          items {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      groupID
      attendees {
        items {
          id
          profileId
          eventId
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          event {
            id
            name
            genre
            image
            state
            city
            country
            latitude
            longitude
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
            boost
            collegeEvent
            hasPaid
            cancelled
            approved
            subscriptionID
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      rides {
        items {
          id
          event {
            id
            name
            genre
            image
            state
            city
            country
            latitude
            longitude
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
            boost
            collegeEvent
            hasPaid
            cancelled
            approved
            subscriptionID
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          eventID
          driverProfileID
          passengers {
            nextToken
            startedAt
            __typename
          }
          maxPassengers
          departureTime
          startPoint
          endPoint
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      name
      genre
      image
      state
      city
      country
      latitude
      longitude
      startDate
      endDate
      type
      address
      description
      url
      customerID
      ticketURL
      boost
      collegeEvent
      hasPaid
      cancelled
      approved
      subscriptionID
      group {
        id
        name
        domain
        webPage
        events {
          items {
            id
            name
            genre
            image
            state
            city
            country
            latitude
            longitude
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
            boost
            collegeEvent
            hasPaid
            cancelled
            approved
            subscriptionID
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        members {
          items {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      groupID
      attendees {
        items {
          id
          profileId
          eventId
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          event {
            id
            name
            genre
            image
            state
            city
            country
            latitude
            longitude
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
            boost
            collegeEvent
            hasPaid
            cancelled
            approved
            subscriptionID
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      rides {
        items {
          id
          event {
            id
            name
            genre
            image
            state
            city
            country
            latitude
            longitude
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
            boost
            collegeEvent
            hasPaid
            cancelled
            approved
            subscriptionID
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          eventID
          driverProfileID
          passengers {
            nextToken
            startedAt
            __typename
          }
          maxPassengers
          departureTime
          startPoint
          endPoint
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createRide = /* GraphQL */ `
  mutation CreateRide(
    $input: CreateRideInput!
    $condition: ModelRideConditionInput
  ) {
    createRide(input: $input, condition: $condition) {
      id
      event {
        id
        name
        genre
        image
        state
        city
        country
        latitude
        longitude
        startDate
        endDate
        type
        address
        description
        url
        customerID
        ticketURL
        boost
        collegeEvent
        hasPaid
        cancelled
        approved
        subscriptionID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        groupID
        attendees {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            eventID
            driverProfileID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      eventID
      driverProfileID
      passengers {
        items {
          id
          profileId
          rideId
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          ride {
            id
            eventID
            driverProfileID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      maxPassengers
      departureTime
      startPoint
      endPoint
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateRide = /* GraphQL */ `
  mutation UpdateRide(
    $input: UpdateRideInput!
    $condition: ModelRideConditionInput
  ) {
    updateRide(input: $input, condition: $condition) {
      id
      event {
        id
        name
        genre
        image
        state
        city
        country
        latitude
        longitude
        startDate
        endDate
        type
        address
        description
        url
        customerID
        ticketURL
        boost
        collegeEvent
        hasPaid
        cancelled
        approved
        subscriptionID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        groupID
        attendees {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            eventID
            driverProfileID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      eventID
      driverProfileID
      passengers {
        items {
          id
          profileId
          rideId
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          ride {
            id
            eventID
            driverProfileID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      maxPassengers
      departureTime
      startPoint
      endPoint
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteRide = /* GraphQL */ `
  mutation DeleteRide(
    $input: DeleteRideInput!
    $condition: ModelRideConditionInput
  ) {
    deleteRide(input: $input, condition: $condition) {
      id
      event {
        id
        name
        genre
        image
        state
        city
        country
        latitude
        longitude
        startDate
        endDate
        type
        address
        description
        url
        customerID
        ticketURL
        boost
        collegeEvent
        hasPaid
        cancelled
        approved
        subscriptionID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        groupID
        attendees {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            eventID
            driverProfileID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      eventID
      driverProfileID
      passengers {
        items {
          id
          profileId
          rideId
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            brandSubmitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            birthDate
            hobbies
            gender
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profilePrivacySettingId
            __typename
          }
          ride {
            id
            eventID
            driverProfileID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      maxPassengers
      departureTime
      startPoint
      endPoint
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createPhoto = /* GraphQL */ `
  mutation CreatePhoto(
    $input: CreatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    createPhoto(input: $input, condition: $condition) {
      id
      profileID
      profile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        brandSubmitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        birthDate
        hobbies
        gender
        events {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        friends {
          items {
            id
            profileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        conversations {
          items {
            id
            profileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        photos {
          items {
            id
            profileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        groupID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        privacySetting {
          id
          city
          state
          school
          email
          events
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        socialMedia {
          items {
            id
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profileSocialMediaId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
        __typename
      }
      s3Key
      isPrivate
      identityId
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updatePhoto = /* GraphQL */ `
  mutation UpdatePhoto(
    $input: UpdatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    updatePhoto(input: $input, condition: $condition) {
      id
      profileID
      profile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        brandSubmitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        birthDate
        hobbies
        gender
        events {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        friends {
          items {
            id
            profileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        conversations {
          items {
            id
            profileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        photos {
          items {
            id
            profileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        groupID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        privacySetting {
          id
          city
          state
          school
          email
          events
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        socialMedia {
          items {
            id
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profileSocialMediaId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
        __typename
      }
      s3Key
      isPrivate
      identityId
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deletePhoto = /* GraphQL */ `
  mutation DeletePhoto(
    $input: DeletePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    deletePhoto(input: $input, condition: $condition) {
      id
      profileID
      profile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        brandSubmitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        birthDate
        hobbies
        gender
        events {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        friends {
          items {
            id
            profileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        conversations {
          items {
            id
            profileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        photos {
          items {
            id
            profileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        groupID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        privacySetting {
          id
          city
          state
          school
          email
          events
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        socialMedia {
          items {
            id
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profileSocialMediaId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
        __typename
      }
      s3Key
      isPrivate
      identityId
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createFriendship = /* GraphQL */ `
  mutation CreateFriendship(
    $input: CreateFriendshipInput!
    $condition: ModelFriendshipConditionInput
  ) {
    createFriendship(input: $input, condition: $condition) {
      id
      profile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        brandSubmitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        birthDate
        hobbies
        gender
        events {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        friends {
          items {
            id
            profileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        conversations {
          items {
            id
            profileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        photos {
          items {
            id
            profileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        groupID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        privacySetting {
          id
          city
          state
          school
          email
          events
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        socialMedia {
          items {
            id
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profileSocialMediaId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
        __typename
      }
      profileID
      friendProfile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        brandSubmitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        birthDate
        hobbies
        gender
        events {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        friends {
          items {
            id
            profileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        conversations {
          items {
            id
            profileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        photos {
          items {
            id
            profileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        groupID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        privacySetting {
          id
          city
          state
          school
          email
          events
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        socialMedia {
          items {
            id
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profileSocialMediaId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
        __typename
      }
      friendProfileID
      isAccepted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateFriendship = /* GraphQL */ `
  mutation UpdateFriendship(
    $input: UpdateFriendshipInput!
    $condition: ModelFriendshipConditionInput
  ) {
    updateFriendship(input: $input, condition: $condition) {
      id
      profile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        brandSubmitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        birthDate
        hobbies
        gender
        events {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        friends {
          items {
            id
            profileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        conversations {
          items {
            id
            profileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        photos {
          items {
            id
            profileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        groupID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        privacySetting {
          id
          city
          state
          school
          email
          events
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        socialMedia {
          items {
            id
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profileSocialMediaId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
        __typename
      }
      profileID
      friendProfile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        brandSubmitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        birthDate
        hobbies
        gender
        events {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        friends {
          items {
            id
            profileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        conversations {
          items {
            id
            profileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        photos {
          items {
            id
            profileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        groupID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        privacySetting {
          id
          city
          state
          school
          email
          events
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        socialMedia {
          items {
            id
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profileSocialMediaId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
        __typename
      }
      friendProfileID
      isAccepted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteFriendship = /* GraphQL */ `
  mutation DeleteFriendship(
    $input: DeleteFriendshipInput!
    $condition: ModelFriendshipConditionInput
  ) {
    deleteFriendship(input: $input, condition: $condition) {
      id
      profile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        brandSubmitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        birthDate
        hobbies
        gender
        events {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        friends {
          items {
            id
            profileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        conversations {
          items {
            id
            profileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        photos {
          items {
            id
            profileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        groupID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        privacySetting {
          id
          city
          state
          school
          email
          events
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        socialMedia {
          items {
            id
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profileSocialMediaId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
        __typename
      }
      profileID
      friendProfile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        brandSubmitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        birthDate
        hobbies
        gender
        events {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        friends {
          items {
            id
            profileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        conversations {
          items {
            id
            profileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        photos {
          items {
            id
            profileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        groupID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        privacySetting {
          id
          city
          state
          school
          email
          events
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        socialMedia {
          items {
            id
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profileSocialMediaId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
        __typename
      }
      friendProfileID
      isAccepted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
      id
      profileID
      friendProfileID
      profile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        brandSubmitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        birthDate
        hobbies
        gender
        events {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        friends {
          items {
            id
            profileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        conversations {
          items {
            id
            profileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        photos {
          items {
            id
            profileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        groupID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        privacySetting {
          id
          city
          state
          school
          email
          events
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        socialMedia {
          items {
            id
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profileSocialMediaId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
        __typename
      }
      friendProfile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        brandSubmitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        birthDate
        hobbies
        gender
        events {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        friends {
          items {
            id
            profileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        conversations {
          items {
            id
            profileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        photos {
          items {
            id
            profileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        groupID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        privacySetting {
          id
          city
          state
          school
          email
          events
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        socialMedia {
          items {
            id
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profileSocialMediaId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
        __typename
      }
      messages {
        items {
          id
          content
          senderProfileID
          receiverProfileID
          unread
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conversationMessagesId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      unreadMessage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
      id
      profileID
      friendProfileID
      profile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        brandSubmitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        birthDate
        hobbies
        gender
        events {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        friends {
          items {
            id
            profileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        conversations {
          items {
            id
            profileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        photos {
          items {
            id
            profileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        groupID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        privacySetting {
          id
          city
          state
          school
          email
          events
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        socialMedia {
          items {
            id
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profileSocialMediaId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
        __typename
      }
      friendProfile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        brandSubmitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        birthDate
        hobbies
        gender
        events {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        friends {
          items {
            id
            profileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        conversations {
          items {
            id
            profileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        photos {
          items {
            id
            profileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        groupID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        privacySetting {
          id
          city
          state
          school
          email
          events
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        socialMedia {
          items {
            id
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profileSocialMediaId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
        __typename
      }
      messages {
        items {
          id
          content
          senderProfileID
          receiverProfileID
          unread
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conversationMessagesId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      unreadMessage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
      id
      profileID
      friendProfileID
      profile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        brandSubmitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        birthDate
        hobbies
        gender
        events {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        friends {
          items {
            id
            profileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        conversations {
          items {
            id
            profileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        photos {
          items {
            id
            profileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        groupID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        privacySetting {
          id
          city
          state
          school
          email
          events
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        socialMedia {
          items {
            id
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profileSocialMediaId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
        __typename
      }
      friendProfile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        brandSubmitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        birthDate
        hobbies
        gender
        events {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        friends {
          items {
            id
            profileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        conversations {
          items {
            id
            profileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        photos {
          items {
            id
            profileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        groupID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        privacySetting {
          id
          city
          state
          school
          email
          events
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        socialMedia {
          items {
            id
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profileSocialMediaId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
        __typename
      }
      messages {
        items {
          id
          content
          senderProfileID
          receiverProfileID
          unread
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conversationMessagesId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      unreadMessage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      content
      senderProfileID
      receiverProfileID
      unread
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      conversationMessagesId
      __typename
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      content
      senderProfileID
      receiverProfileID
      unread
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      conversationMessagesId
      __typename
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      content
      senderProfileID
      receiverProfileID
      unread
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      conversationMessagesId
      __typename
    }
  }
`;
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
      id
      name
      domain
      webPage
      events {
        items {
          id
          name
          genre
          image
          state
          city
          country
          latitude
          longitude
          startDate
          endDate
          type
          address
          description
          url
          customerID
          ticketURL
          boost
          collegeEvent
          hasPaid
          cancelled
          approved
          subscriptionID
          group {
            id
            name
            domain
            webPage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          groupID
          attendees {
            nextToken
            startedAt
            __typename
          }
          rides {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      members {
        items {
          id
          sub
          firstName
          lastName
          verified
          submitted
          brandSubmitted
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
          school
          address
          address2
          phone
          email
          zipcode
          birthDate
          hobbies
          gender
          events {
            nextToken
            startedAt
            __typename
          }
          rides {
            nextToken
            startedAt
            __typename
          }
          friends {
            nextToken
            startedAt
            __typename
          }
          conversations {
            nextToken
            startedAt
            __typename
          }
          photos {
            nextToken
            startedAt
            __typename
          }
          groupID
          group {
            id
            name
            domain
            webPage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          privacySetting {
            id
            city
            state
            school
            email
            events
            rides
            friends
            photos
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          socialMedia {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          profilePrivacySettingId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
      id
      name
      domain
      webPage
      events {
        items {
          id
          name
          genre
          image
          state
          city
          country
          latitude
          longitude
          startDate
          endDate
          type
          address
          description
          url
          customerID
          ticketURL
          boost
          collegeEvent
          hasPaid
          cancelled
          approved
          subscriptionID
          group {
            id
            name
            domain
            webPage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          groupID
          attendees {
            nextToken
            startedAt
            __typename
          }
          rides {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      members {
        items {
          id
          sub
          firstName
          lastName
          verified
          submitted
          brandSubmitted
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
          school
          address
          address2
          phone
          email
          zipcode
          birthDate
          hobbies
          gender
          events {
            nextToken
            startedAt
            __typename
          }
          rides {
            nextToken
            startedAt
            __typename
          }
          friends {
            nextToken
            startedAt
            __typename
          }
          conversations {
            nextToken
            startedAt
            __typename
          }
          photos {
            nextToken
            startedAt
            __typename
          }
          groupID
          group {
            id
            name
            domain
            webPage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          privacySetting {
            id
            city
            state
            school
            email
            events
            rides
            friends
            photos
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          socialMedia {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          profilePrivacySettingId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
      id
      name
      domain
      webPage
      events {
        items {
          id
          name
          genre
          image
          state
          city
          country
          latitude
          longitude
          startDate
          endDate
          type
          address
          description
          url
          customerID
          ticketURL
          boost
          collegeEvent
          hasPaid
          cancelled
          approved
          subscriptionID
          group {
            id
            name
            domain
            webPage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          groupID
          attendees {
            nextToken
            startedAt
            __typename
          }
          rides {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      members {
        items {
          id
          sub
          firstName
          lastName
          verified
          submitted
          brandSubmitted
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
          school
          address
          address2
          phone
          email
          zipcode
          birthDate
          hobbies
          gender
          events {
            nextToken
            startedAt
            __typename
          }
          rides {
            nextToken
            startedAt
            __typename
          }
          friends {
            nextToken
            startedAt
            __typename
          }
          conversations {
            nextToken
            startedAt
            __typename
          }
          photos {
            nextToken
            startedAt
            __typename
          }
          groupID
          group {
            id
            name
            domain
            webPage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          privacySetting {
            id
            city
            state
            school
            email
            events
            rides
            friends
            photos
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          socialMedia {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          profilePrivacySettingId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createEventProfile = /* GraphQL */ `
  mutation CreateEventProfile(
    $input: CreateEventProfileInput!
    $condition: ModelEventProfileConditionInput
  ) {
    createEventProfile(input: $input, condition: $condition) {
      id
      profileId
      eventId
      profile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        brandSubmitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        birthDate
        hobbies
        gender
        events {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        friends {
          items {
            id
            profileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        conversations {
          items {
            id
            profileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        photos {
          items {
            id
            profileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        groupID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        privacySetting {
          id
          city
          state
          school
          email
          events
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        socialMedia {
          items {
            id
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profileSocialMediaId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
        __typename
      }
      event {
        id
        name
        genre
        image
        state
        city
        country
        latitude
        longitude
        startDate
        endDate
        type
        address
        description
        url
        customerID
        ticketURL
        boost
        collegeEvent
        hasPaid
        cancelled
        approved
        subscriptionID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        groupID
        attendees {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            eventID
            driverProfileID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateEventProfile = /* GraphQL */ `
  mutation UpdateEventProfile(
    $input: UpdateEventProfileInput!
    $condition: ModelEventProfileConditionInput
  ) {
    updateEventProfile(input: $input, condition: $condition) {
      id
      profileId
      eventId
      profile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        brandSubmitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        birthDate
        hobbies
        gender
        events {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        friends {
          items {
            id
            profileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        conversations {
          items {
            id
            profileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        photos {
          items {
            id
            profileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        groupID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        privacySetting {
          id
          city
          state
          school
          email
          events
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        socialMedia {
          items {
            id
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profileSocialMediaId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
        __typename
      }
      event {
        id
        name
        genre
        image
        state
        city
        country
        latitude
        longitude
        startDate
        endDate
        type
        address
        description
        url
        customerID
        ticketURL
        boost
        collegeEvent
        hasPaid
        cancelled
        approved
        subscriptionID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        groupID
        attendees {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            eventID
            driverProfileID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteEventProfile = /* GraphQL */ `
  mutation DeleteEventProfile(
    $input: DeleteEventProfileInput!
    $condition: ModelEventProfileConditionInput
  ) {
    deleteEventProfile(input: $input, condition: $condition) {
      id
      profileId
      eventId
      profile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        brandSubmitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        birthDate
        hobbies
        gender
        events {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        friends {
          items {
            id
            profileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        conversations {
          items {
            id
            profileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        photos {
          items {
            id
            profileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        groupID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        privacySetting {
          id
          city
          state
          school
          email
          events
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        socialMedia {
          items {
            id
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profileSocialMediaId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
        __typename
      }
      event {
        id
        name
        genre
        image
        state
        city
        country
        latitude
        longitude
        startDate
        endDate
        type
        address
        description
        url
        customerID
        ticketURL
        boost
        collegeEvent
        hasPaid
        cancelled
        approved
        subscriptionID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        groupID
        attendees {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            eventID
            driverProfileID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createRideProfile = /* GraphQL */ `
  mutation CreateRideProfile(
    $input: CreateRideProfileInput!
    $condition: ModelRideProfileConditionInput
  ) {
    createRideProfile(input: $input, condition: $condition) {
      id
      profileId
      rideId
      profile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        brandSubmitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        birthDate
        hobbies
        gender
        events {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        friends {
          items {
            id
            profileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        conversations {
          items {
            id
            profileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        photos {
          items {
            id
            profileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        groupID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        privacySetting {
          id
          city
          state
          school
          email
          events
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        socialMedia {
          items {
            id
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profileSocialMediaId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
        __typename
      }
      ride {
        id
        event {
          id
          name
          genre
          image
          state
          city
          country
          latitude
          longitude
          startDate
          endDate
          type
          address
          description
          url
          customerID
          ticketURL
          boost
          collegeEvent
          hasPaid
          cancelled
          approved
          subscriptionID
          group {
            id
            name
            domain
            webPage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          groupID
          attendees {
            nextToken
            startedAt
            __typename
          }
          rides {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        eventID
        driverProfileID
        passengers {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        maxPassengers
        departureTime
        startPoint
        endPoint
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateRideProfile = /* GraphQL */ `
  mutation UpdateRideProfile(
    $input: UpdateRideProfileInput!
    $condition: ModelRideProfileConditionInput
  ) {
    updateRideProfile(input: $input, condition: $condition) {
      id
      profileId
      rideId
      profile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        brandSubmitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        birthDate
        hobbies
        gender
        events {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        friends {
          items {
            id
            profileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        conversations {
          items {
            id
            profileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        photos {
          items {
            id
            profileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        groupID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        privacySetting {
          id
          city
          state
          school
          email
          events
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        socialMedia {
          items {
            id
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profileSocialMediaId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
        __typename
      }
      ride {
        id
        event {
          id
          name
          genre
          image
          state
          city
          country
          latitude
          longitude
          startDate
          endDate
          type
          address
          description
          url
          customerID
          ticketURL
          boost
          collegeEvent
          hasPaid
          cancelled
          approved
          subscriptionID
          group {
            id
            name
            domain
            webPage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          groupID
          attendees {
            nextToken
            startedAt
            __typename
          }
          rides {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        eventID
        driverProfileID
        passengers {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        maxPassengers
        departureTime
        startPoint
        endPoint
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteRideProfile = /* GraphQL */ `
  mutation DeleteRideProfile(
    $input: DeleteRideProfileInput!
    $condition: ModelRideProfileConditionInput
  ) {
    deleteRideProfile(input: $input, condition: $condition) {
      id
      profileId
      rideId
      profile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        brandSubmitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        birthDate
        hobbies
        gender
        events {
          items {
            id
            profileId
            eventId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        rides {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        friends {
          items {
            id
            profileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        conversations {
          items {
            id
            profileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        photos {
          items {
            id
            profileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        groupID
        group {
          id
          name
          domain
          webPage
          events {
            nextToken
            startedAt
            __typename
          }
          members {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        privacySetting {
          id
          city
          state
          school
          email
          events
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        socialMedia {
          items {
            id
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            profileSocialMediaId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
        __typename
      }
      ride {
        id
        event {
          id
          name
          genre
          image
          state
          city
          country
          latitude
          longitude
          startDate
          endDate
          type
          address
          description
          url
          customerID
          ticketURL
          boost
          collegeEvent
          hasPaid
          cancelled
          approved
          subscriptionID
          group {
            id
            name
            domain
            webPage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          groupID
          attendees {
            nextToken
            startedAt
            __typename
          }
          rides {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        eventID
        driverProfileID
        passengers {
          items {
            id
            profileId
            rideId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        maxPassengers
        departureTime
        startPoint
        endPoint
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
