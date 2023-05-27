/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      content
      senderID
      receiverID
      conversationID
      sender {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      receiver {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      conversation {
        id
        userProfileID
        friendProfileID
        userProfile {
          id
          firstName
          lastName
          verified
          verifySubmitted
          profilePhotoID
          bannerPhotoID
          city
          state
          school
          address
          address2
          phone
          email
          zipcode
          attendingEvents {
            nextToken
            startedAt
          }
          rides {
            nextToken
            startedAt
          }
          friends {
            nextToken
            startedAt
          }
          conversations {
            nextToken
            startedAt
          }
          sentMessages {
            nextToken
            startedAt
          }
          receivedMessages {
            nextToken
            startedAt
          }
          photos {
            nextToken
            startedAt
          }
          collegeGroupId
          collegeGroup {
            id
            name
            domain
            webPage
            countryCode
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          privacySettingID
          privacySetting {
            id
            city
            state
            school
            email
            attendingEvents
            rides
            friends
            photos
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          socialMedia {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        friendProfile {
          id
          firstName
          lastName
          verified
          verifySubmitted
          profilePhotoID
          bannerPhotoID
          city
          state
          school
          address
          address2
          phone
          email
          zipcode
          attendingEvents {
            nextToken
            startedAt
          }
          rides {
            nextToken
            startedAt
          }
          friends {
            nextToken
            startedAt
          }
          conversations {
            nextToken
            startedAt
          }
          sentMessages {
            nextToken
            startedAt
          }
          receivedMessages {
            nextToken
            startedAt
          }
          photos {
            nextToken
            startedAt
          }
          collegeGroupId
          collegeGroup {
            id
            name
            domain
            webPage
            countryCode
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          privacySettingID
          privacySetting {
            id
            city
            state
            school
            email
            attendingEvents
            rides
            friends
            photos
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          socialMedia {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        messages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        unreadMessage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      unreadMessage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      senderID
      receiverID
      conversationID
      sender {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      receiver {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      conversation {
        id
        userProfileID
        friendProfileID
        userProfile {
          id
          firstName
          lastName
          verified
          verifySubmitted
          profilePhotoID
          bannerPhotoID
          city
          state
          school
          address
          address2
          phone
          email
          zipcode
          attendingEvents {
            nextToken
            startedAt
          }
          rides {
            nextToken
            startedAt
          }
          friends {
            nextToken
            startedAt
          }
          conversations {
            nextToken
            startedAt
          }
          sentMessages {
            nextToken
            startedAt
          }
          receivedMessages {
            nextToken
            startedAt
          }
          photos {
            nextToken
            startedAt
          }
          collegeGroupId
          collegeGroup {
            id
            name
            domain
            webPage
            countryCode
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          privacySettingID
          privacySetting {
            id
            city
            state
            school
            email
            attendingEvents
            rides
            friends
            photos
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          socialMedia {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        friendProfile {
          id
          firstName
          lastName
          verified
          verifySubmitted
          profilePhotoID
          bannerPhotoID
          city
          state
          school
          address
          address2
          phone
          email
          zipcode
          attendingEvents {
            nextToken
            startedAt
          }
          rides {
            nextToken
            startedAt
          }
          friends {
            nextToken
            startedAt
          }
          conversations {
            nextToken
            startedAt
          }
          sentMessages {
            nextToken
            startedAt
          }
          receivedMessages {
            nextToken
            startedAt
          }
          photos {
            nextToken
            startedAt
          }
          collegeGroupId
          collegeGroup {
            id
            name
            domain
            webPage
            countryCode
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          privacySettingID
          privacySetting {
            id
            city
            state
            school
            email
            attendingEvents
            rides
            friends
            photos
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          socialMedia {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        messages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        unreadMessage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      unreadMessage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      senderID
      receiverID
      conversationID
      sender {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      receiver {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      conversation {
        id
        userProfileID
        friendProfileID
        userProfile {
          id
          firstName
          lastName
          verified
          verifySubmitted
          profilePhotoID
          bannerPhotoID
          city
          state
          school
          address
          address2
          phone
          email
          zipcode
          attendingEvents {
            nextToken
            startedAt
          }
          rides {
            nextToken
            startedAt
          }
          friends {
            nextToken
            startedAt
          }
          conversations {
            nextToken
            startedAt
          }
          sentMessages {
            nextToken
            startedAt
          }
          receivedMessages {
            nextToken
            startedAt
          }
          photos {
            nextToken
            startedAt
          }
          collegeGroupId
          collegeGroup {
            id
            name
            domain
            webPage
            countryCode
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          privacySettingID
          privacySetting {
            id
            city
            state
            school
            email
            attendingEvents
            rides
            friends
            photos
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          socialMedia {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        friendProfile {
          id
          firstName
          lastName
          verified
          verifySubmitted
          profilePhotoID
          bannerPhotoID
          city
          state
          school
          address
          address2
          phone
          email
          zipcode
          attendingEvents {
            nextToken
            startedAt
          }
          rides {
            nextToken
            startedAt
          }
          friends {
            nextToken
            startedAt
          }
          conversations {
            nextToken
            startedAt
          }
          sentMessages {
            nextToken
            startedAt
          }
          receivedMessages {
            nextToken
            startedAt
          }
          photos {
            nextToken
            startedAt
          }
          collegeGroupId
          collegeGroup {
            id
            name
            domain
            webPage
            countryCode
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          privacySettingID
          privacySetting {
            id
            city
            state
            school
            email
            attendingEvents
            rides
            friends
            photos
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          socialMedia {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        messages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        unreadMessage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      unreadMessage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      userProfileID
      eventID
      userProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      event {
        id
        name
        genre
        image
        location
        startDate
        endDate
        type
        tagline
        description
        url
        group {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        groupID
        attendees {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            eventID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            rideDriverId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      userProfileID
      eventID
      userProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      event {
        id
        name
        genre
        image
        location
        startDate
        endDate
        type
        tagline
        description
        url
        group {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        groupID
        attendees {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            eventID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            rideDriverId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      userProfileID
      eventID
      userProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      event {
        id
        name
        genre
        image
        location
        startDate
        endDate
        type
        tagline
        description
        url
        group {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        groupID
        attendees {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            eventID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            rideDriverId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createFestival = /* GraphQL */ `
  mutation CreateFestival(
    $input: CreateFestivalInput!
    $condition: ModelFestivalConditionInput
  ) {
    createFestival(input: $input, condition: $condition) {
      id
      name
      genre
      image
      location
      startDate
      endDate
      type
      tagline
      description
      url
      group {
        id
        name
        domain
        webPage
        countryCode
        events {
          items {
            id
            name
            genre
            image
            location
            startDate
            endDate
            type
            tagline
            description
            url
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        members {
          items {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      groupID
      attendees {
        items {
          id
          userProfileID
          eventID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          event {
            id
            name
            genre
            image
            location
            startDate
            endDate
            type
            tagline
            description
            url
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      rides {
        items {
          id
          event {
            id
            name
            genre
            image
            location
            startDate
            endDate
            type
            tagline
            description
            url
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          eventID
          driver {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          passengers {
            nextToken
            startedAt
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
          rideDriverId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateFestival = /* GraphQL */ `
  mutation UpdateFestival(
    $input: UpdateFestivalInput!
    $condition: ModelFestivalConditionInput
  ) {
    updateFestival(input: $input, condition: $condition) {
      id
      name
      genre
      image
      location
      startDate
      endDate
      type
      tagline
      description
      url
      group {
        id
        name
        domain
        webPage
        countryCode
        events {
          items {
            id
            name
            genre
            image
            location
            startDate
            endDate
            type
            tagline
            description
            url
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        members {
          items {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      groupID
      attendees {
        items {
          id
          userProfileID
          eventID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          event {
            id
            name
            genre
            image
            location
            startDate
            endDate
            type
            tagline
            description
            url
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      rides {
        items {
          id
          event {
            id
            name
            genre
            image
            location
            startDate
            endDate
            type
            tagline
            description
            url
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          eventID
          driver {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          passengers {
            nextToken
            startedAt
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
          rideDriverId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteFestival = /* GraphQL */ `
  mutation DeleteFestival(
    $input: DeleteFestivalInput!
    $condition: ModelFestivalConditionInput
  ) {
    deleteFestival(input: $input, condition: $condition) {
      id
      name
      genre
      image
      location
      startDate
      endDate
      type
      tagline
      description
      url
      group {
        id
        name
        domain
        webPage
        countryCode
        events {
          items {
            id
            name
            genre
            image
            location
            startDate
            endDate
            type
            tagline
            description
            url
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        members {
          items {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      groupID
      attendees {
        items {
          id
          userProfileID
          eventID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          event {
            id
            name
            genre
            image
            location
            startDate
            endDate
            type
            tagline
            description
            url
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      rides {
        items {
          id
          event {
            id
            name
            genre
            image
            location
            startDate
            endDate
            type
            tagline
            description
            url
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          eventID
          driver {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          passengers {
            nextToken
            startedAt
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
          rideDriverId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
      id
      firstName
      lastName
      verified
      verifySubmitted
      profilePhotoID
      bannerPhotoID
      city
      state
      school
      address
      address2
      phone
      email
      zipcode
      attendingEvents {
        items {
          id
          userProfileID
          eventID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          event {
            id
            name
            genre
            image
            location
            startDate
            endDate
            type
            tagline
            description
            url
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      rides {
        items {
          id
          ride {
            id
            eventID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            rideDriverId
          }
          rideID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          userProfileID
          isDriver
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      friends {
        items {
          id
          userProfileID
          friendProfileID
          isAccepted
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          friendProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      conversations {
        items {
          id
          userProfileID
          friendProfileID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          friendProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          messages {
            nextToken
            startedAt
          }
          unreadMessage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      sentMessages {
        items {
          id
          content
          senderID
          receiverID
          conversationID
          sender {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          receiver {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          conversation {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          unreadMessage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      receivedMessages {
        items {
          id
          content
          senderID
          receiverID
          conversationID
          sender {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          receiver {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          conversation {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          unreadMessage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      photos {
        items {
          id
          userProfileID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          s3Key
          isPrivate
          identityId
          description
          comments {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      collegeGroupId
      collegeGroup {
        id
        name
        domain
        webPage
        countryCode
        events {
          items {
            id
            name
            genre
            image
            location
            startDate
            endDate
            type
            tagline
            description
            url
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        members {
          items {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      privacySettingID
      privacySetting {
        id
        city
        state
        school
        email
        attendingEvents
        rides
        friends
        photos
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      socialMedia {
        items {
          id
          userProfileID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          socialMediaType
          accountURL
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
      id
      firstName
      lastName
      verified
      verifySubmitted
      profilePhotoID
      bannerPhotoID
      city
      state
      school
      address
      address2
      phone
      email
      zipcode
      attendingEvents {
        items {
          id
          userProfileID
          eventID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          event {
            id
            name
            genre
            image
            location
            startDate
            endDate
            type
            tagline
            description
            url
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      rides {
        items {
          id
          ride {
            id
            eventID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            rideDriverId
          }
          rideID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          userProfileID
          isDriver
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      friends {
        items {
          id
          userProfileID
          friendProfileID
          isAccepted
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          friendProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      conversations {
        items {
          id
          userProfileID
          friendProfileID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          friendProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          messages {
            nextToken
            startedAt
          }
          unreadMessage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      sentMessages {
        items {
          id
          content
          senderID
          receiverID
          conversationID
          sender {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          receiver {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          conversation {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          unreadMessage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      receivedMessages {
        items {
          id
          content
          senderID
          receiverID
          conversationID
          sender {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          receiver {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          conversation {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          unreadMessage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      photos {
        items {
          id
          userProfileID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          s3Key
          isPrivate
          identityId
          description
          comments {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      collegeGroupId
      collegeGroup {
        id
        name
        domain
        webPage
        countryCode
        events {
          items {
            id
            name
            genre
            image
            location
            startDate
            endDate
            type
            tagline
            description
            url
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        members {
          items {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      privacySettingID
      privacySetting {
        id
        city
        state
        school
        email
        attendingEvents
        rides
        friends
        photos
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      socialMedia {
        items {
          id
          userProfileID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          socialMediaType
          accountURL
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
      id
      firstName
      lastName
      verified
      verifySubmitted
      profilePhotoID
      bannerPhotoID
      city
      state
      school
      address
      address2
      phone
      email
      zipcode
      attendingEvents {
        items {
          id
          userProfileID
          eventID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          event {
            id
            name
            genre
            image
            location
            startDate
            endDate
            type
            tagline
            description
            url
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      rides {
        items {
          id
          ride {
            id
            eventID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            rideDriverId
          }
          rideID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          userProfileID
          isDriver
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      friends {
        items {
          id
          userProfileID
          friendProfileID
          isAccepted
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          friendProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      conversations {
        items {
          id
          userProfileID
          friendProfileID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          friendProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          messages {
            nextToken
            startedAt
          }
          unreadMessage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      sentMessages {
        items {
          id
          content
          senderID
          receiverID
          conversationID
          sender {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          receiver {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          conversation {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          unreadMessage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      receivedMessages {
        items {
          id
          content
          senderID
          receiverID
          conversationID
          sender {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          receiver {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          conversation {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          unreadMessage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      photos {
        items {
          id
          userProfileID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          s3Key
          isPrivate
          identityId
          description
          comments {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      collegeGroupId
      collegeGroup {
        id
        name
        domain
        webPage
        countryCode
        events {
          items {
            id
            name
            genre
            image
            location
            startDate
            endDate
            type
            tagline
            description
            url
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        members {
          items {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      privacySettingID
      privacySetting {
        id
        city
        state
        school
        email
        attendingEvents
        rides
        friends
        photos
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      socialMedia {
        items {
          id
          userProfileID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          socialMediaType
          accountURL
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      userProfileID
      userProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      socialMediaType
      accountURL
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      userProfileID
      userProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      socialMediaType
      accountURL
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      userProfileID
      userProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      socialMediaType
      accountURL
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      attendingEvents
      rides
      friends
      photos
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      attendingEvents
      rides
      friends
      photos
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      attendingEvents
      rides
      friends
      photos
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        location
        startDate
        endDate
        type
        tagline
        description
        url
        group {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        groupID
        attendees {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            eventID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            rideDriverId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      eventID
      driver {
        id
        ride {
          id
          event {
            id
            name
            genre
            image
            location
            startDate
            endDate
            type
            tagline
            description
            url
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          eventID
          driver {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          passengers {
            nextToken
            startedAt
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
          rideDriverId
        }
        rideID
        userProfile {
          id
          firstName
          lastName
          verified
          verifySubmitted
          profilePhotoID
          bannerPhotoID
          city
          state
          school
          address
          address2
          phone
          email
          zipcode
          attendingEvents {
            nextToken
            startedAt
          }
          rides {
            nextToken
            startedAt
          }
          friends {
            nextToken
            startedAt
          }
          conversations {
            nextToken
            startedAt
          }
          sentMessages {
            nextToken
            startedAt
          }
          receivedMessages {
            nextToken
            startedAt
          }
          photos {
            nextToken
            startedAt
          }
          collegeGroupId
          collegeGroup {
            id
            name
            domain
            webPage
            countryCode
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          privacySettingID
          privacySetting {
            id
            city
            state
            school
            email
            attendingEvents
            rides
            friends
            photos
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          socialMedia {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userProfileID
        isDriver
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      passengers {
        items {
          id
          ride {
            id
            eventID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            rideDriverId
          }
          rideID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          userProfileID
          isDriver
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
      rideDriverId
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
        location
        startDate
        endDate
        type
        tagline
        description
        url
        group {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        groupID
        attendees {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            eventID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            rideDriverId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      eventID
      driver {
        id
        ride {
          id
          event {
            id
            name
            genre
            image
            location
            startDate
            endDate
            type
            tagline
            description
            url
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          eventID
          driver {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          passengers {
            nextToken
            startedAt
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
          rideDriverId
        }
        rideID
        userProfile {
          id
          firstName
          lastName
          verified
          verifySubmitted
          profilePhotoID
          bannerPhotoID
          city
          state
          school
          address
          address2
          phone
          email
          zipcode
          attendingEvents {
            nextToken
            startedAt
          }
          rides {
            nextToken
            startedAt
          }
          friends {
            nextToken
            startedAt
          }
          conversations {
            nextToken
            startedAt
          }
          sentMessages {
            nextToken
            startedAt
          }
          receivedMessages {
            nextToken
            startedAt
          }
          photos {
            nextToken
            startedAt
          }
          collegeGroupId
          collegeGroup {
            id
            name
            domain
            webPage
            countryCode
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          privacySettingID
          privacySetting {
            id
            city
            state
            school
            email
            attendingEvents
            rides
            friends
            photos
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          socialMedia {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userProfileID
        isDriver
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      passengers {
        items {
          id
          ride {
            id
            eventID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            rideDriverId
          }
          rideID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          userProfileID
          isDriver
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
      rideDriverId
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
        location
        startDate
        endDate
        type
        tagline
        description
        url
        group {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        groupID
        attendees {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            eventID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            rideDriverId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      eventID
      driver {
        id
        ride {
          id
          event {
            id
            name
            genre
            image
            location
            startDate
            endDate
            type
            tagline
            description
            url
            groupID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          eventID
          driver {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          passengers {
            nextToken
            startedAt
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
          rideDriverId
        }
        rideID
        userProfile {
          id
          firstName
          lastName
          verified
          verifySubmitted
          profilePhotoID
          bannerPhotoID
          city
          state
          school
          address
          address2
          phone
          email
          zipcode
          attendingEvents {
            nextToken
            startedAt
          }
          rides {
            nextToken
            startedAt
          }
          friends {
            nextToken
            startedAt
          }
          conversations {
            nextToken
            startedAt
          }
          sentMessages {
            nextToken
            startedAt
          }
          receivedMessages {
            nextToken
            startedAt
          }
          photos {
            nextToken
            startedAt
          }
          collegeGroupId
          collegeGroup {
            id
            name
            domain
            webPage
            countryCode
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          privacySettingID
          privacySetting {
            id
            city
            state
            school
            email
            attendingEvents
            rides
            friends
            photos
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          socialMedia {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        userProfileID
        isDriver
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      passengers {
        items {
          id
          ride {
            id
            eventID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            rideDriverId
          }
          rideID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          userProfileID
          isDriver
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
      rideDriverId
    }
  }
`;
export const createRideUser = /* GraphQL */ `
  mutation CreateRideUser(
    $input: CreateRideUserInput!
    $condition: ModelRideUserConditionInput
  ) {
    createRideUser(input: $input, condition: $condition) {
      id
      ride {
        id
        event {
          id
          name
          genre
          image
          location
          startDate
          endDate
          type
          tagline
          description
          url
          group {
            id
            name
            domain
            webPage
            countryCode
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          groupID
          attendees {
            nextToken
            startedAt
          }
          rides {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        eventID
        driver {
          id
          ride {
            id
            eventID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            rideDriverId
          }
          rideID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          userProfileID
          isDriver
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        passengers {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
        rideDriverId
      }
      rideID
      userProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userProfileID
      isDriver
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateRideUser = /* GraphQL */ `
  mutation UpdateRideUser(
    $input: UpdateRideUserInput!
    $condition: ModelRideUserConditionInput
  ) {
    updateRideUser(input: $input, condition: $condition) {
      id
      ride {
        id
        event {
          id
          name
          genre
          image
          location
          startDate
          endDate
          type
          tagline
          description
          url
          group {
            id
            name
            domain
            webPage
            countryCode
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          groupID
          attendees {
            nextToken
            startedAt
          }
          rides {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        eventID
        driver {
          id
          ride {
            id
            eventID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            rideDriverId
          }
          rideID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          userProfileID
          isDriver
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        passengers {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
        rideDriverId
      }
      rideID
      userProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userProfileID
      isDriver
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteRideUser = /* GraphQL */ `
  mutation DeleteRideUser(
    $input: DeleteRideUserInput!
    $condition: ModelRideUserConditionInput
  ) {
    deleteRideUser(input: $input, condition: $condition) {
      id
      ride {
        id
        event {
          id
          name
          genre
          image
          location
          startDate
          endDate
          type
          tagline
          description
          url
          group {
            id
            name
            domain
            webPage
            countryCode
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          groupID
          attendees {
            nextToken
            startedAt
          }
          rides {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        eventID
        driver {
          id
          ride {
            id
            eventID
            maxPassengers
            departureTime
            startPoint
            endPoint
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            rideDriverId
          }
          rideID
          userProfile {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          userProfileID
          isDriver
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        passengers {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
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
        rideDriverId
      }
      rideID
      userProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userProfileID
      isDriver
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      userProfileID
      userProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      s3Key
      isPrivate
      identityId
      description
      comments {
        items {
          id
          content
          photoID
          photo {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      userProfileID
      userProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      s3Key
      isPrivate
      identityId
      description
      comments {
        items {
          id
          content
          photoID
          photo {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      userProfileID
      userProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      s3Key
      isPrivate
      identityId
      description
      comments {
        items {
          id
          content
          photoID
          photo {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPhotoComment = /* GraphQL */ `
  mutation CreatePhotoComment(
    $input: CreatePhotoCommentInput!
    $condition: ModelPhotoCommentConditionInput
  ) {
    createPhotoComment(input: $input, condition: $condition) {
      id
      content
      photoID
      photo {
        id
        userProfileID
        userProfile {
          id
          firstName
          lastName
          verified
          verifySubmitted
          profilePhotoID
          bannerPhotoID
          city
          state
          school
          address
          address2
          phone
          email
          zipcode
          attendingEvents {
            nextToken
            startedAt
          }
          rides {
            nextToken
            startedAt
          }
          friends {
            nextToken
            startedAt
          }
          conversations {
            nextToken
            startedAt
          }
          sentMessages {
            nextToken
            startedAt
          }
          receivedMessages {
            nextToken
            startedAt
          }
          photos {
            nextToken
            startedAt
          }
          collegeGroupId
          collegeGroup {
            id
            name
            domain
            webPage
            countryCode
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          privacySettingID
          privacySetting {
            id
            city
            state
            school
            email
            attendingEvents
            rides
            friends
            photos
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          socialMedia {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        s3Key
        isPrivate
        identityId
        description
        comments {
          items {
            id
            content
            photoID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePhotoComment = /* GraphQL */ `
  mutation UpdatePhotoComment(
    $input: UpdatePhotoCommentInput!
    $condition: ModelPhotoCommentConditionInput
  ) {
    updatePhotoComment(input: $input, condition: $condition) {
      id
      content
      photoID
      photo {
        id
        userProfileID
        userProfile {
          id
          firstName
          lastName
          verified
          verifySubmitted
          profilePhotoID
          bannerPhotoID
          city
          state
          school
          address
          address2
          phone
          email
          zipcode
          attendingEvents {
            nextToken
            startedAt
          }
          rides {
            nextToken
            startedAt
          }
          friends {
            nextToken
            startedAt
          }
          conversations {
            nextToken
            startedAt
          }
          sentMessages {
            nextToken
            startedAt
          }
          receivedMessages {
            nextToken
            startedAt
          }
          photos {
            nextToken
            startedAt
          }
          collegeGroupId
          collegeGroup {
            id
            name
            domain
            webPage
            countryCode
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          privacySettingID
          privacySetting {
            id
            city
            state
            school
            email
            attendingEvents
            rides
            friends
            photos
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          socialMedia {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        s3Key
        isPrivate
        identityId
        description
        comments {
          items {
            id
            content
            photoID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePhotoComment = /* GraphQL */ `
  mutation DeletePhotoComment(
    $input: DeletePhotoCommentInput!
    $condition: ModelPhotoCommentConditionInput
  ) {
    deletePhotoComment(input: $input, condition: $condition) {
      id
      content
      photoID
      photo {
        id
        userProfileID
        userProfile {
          id
          firstName
          lastName
          verified
          verifySubmitted
          profilePhotoID
          bannerPhotoID
          city
          state
          school
          address
          address2
          phone
          email
          zipcode
          attendingEvents {
            nextToken
            startedAt
          }
          rides {
            nextToken
            startedAt
          }
          friends {
            nextToken
            startedAt
          }
          conversations {
            nextToken
            startedAt
          }
          sentMessages {
            nextToken
            startedAt
          }
          receivedMessages {
            nextToken
            startedAt
          }
          photos {
            nextToken
            startedAt
          }
          collegeGroupId
          collegeGroup {
            id
            name
            domain
            webPage
            countryCode
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          privacySettingID
          privacySetting {
            id
            city
            state
            school
            email
            attendingEvents
            rides
            friends
            photos
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          socialMedia {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        s3Key
        isPrivate
        identityId
        description
        comments {
          items {
            id
            content
            photoID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      userProfileID
      friendProfileID
      isAccepted
      userProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      friendProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      userProfileID
      friendProfileID
      isAccepted
      userProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      friendProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      userProfileID
      friendProfileID
      isAccepted
      userProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      friendProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      userProfileID
      friendProfileID
      userProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      friendProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      messages {
        items {
          id
          content
          senderID
          receiverID
          conversationID
          sender {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          receiver {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          conversation {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          unreadMessage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      unreadMessage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      userProfileID
      friendProfileID
      userProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      friendProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      messages {
        items {
          id
          content
          senderID
          receiverID
          conversationID
          sender {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          receiver {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          conversation {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          unreadMessage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      unreadMessage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      userProfileID
      friendProfileID
      userProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      friendProfile {
        id
        firstName
        lastName
        verified
        verifySubmitted
        profilePhotoID
        bannerPhotoID
        city
        state
        school
        address
        address2
        phone
        email
        zipcode
        attendingEvents {
          items {
            id
            userProfileID
            eventID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        rides {
          items {
            id
            rideID
            userProfileID
            isDriver
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        friends {
          items {
            id
            userProfileID
            friendProfileID
            isAccepted
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        conversations {
          items {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        sentMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        receivedMessages {
          items {
            id
            content
            senderID
            receiverID
            conversationID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        photos {
          items {
            id
            userProfileID
            s3Key
            isPrivate
            identityId
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        collegeGroupId
        collegeGroup {
          id
          name
          domain
          webPage
          countryCode
          events {
            nextToken
            startedAt
          }
          members {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        privacySettingID
        privacySetting {
          id
          city
          state
          school
          email
          attendingEvents
          rides
          friends
          photos
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        socialMedia {
          items {
            id
            userProfileID
            socialMediaType
            accountURL
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      messages {
        items {
          id
          content
          senderID
          receiverID
          conversationID
          sender {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          receiver {
            id
            firstName
            lastName
            verified
            verifySubmitted
            profilePhotoID
            bannerPhotoID
            city
            state
            school
            address
            address2
            phone
            email
            zipcode
            collegeGroupId
            privacySettingID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          conversation {
            id
            userProfileID
            friendProfileID
            unreadMessage
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          unreadMessage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      unreadMessage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCollegeGroup = /* GraphQL */ `
  mutation CreateCollegeGroup(
    $input: CreateCollegeGroupInput!
    $condition: ModelCollegeGroupConditionInput
  ) {
    createCollegeGroup(input: $input, condition: $condition) {
      id
      name
      domain
      webPage
      countryCode
      events {
        items {
          id
          name
          genre
          image
          location
          startDate
          endDate
          type
          tagline
          description
          url
          group {
            id
            name
            domain
            webPage
            countryCode
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          groupID
          attendees {
            nextToken
            startedAt
          }
          rides {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      members {
        items {
          id
          firstName
          lastName
          verified
          verifySubmitted
          profilePhotoID
          bannerPhotoID
          city
          state
          school
          address
          address2
          phone
          email
          zipcode
          attendingEvents {
            nextToken
            startedAt
          }
          rides {
            nextToken
            startedAt
          }
          friends {
            nextToken
            startedAt
          }
          conversations {
            nextToken
            startedAt
          }
          sentMessages {
            nextToken
            startedAt
          }
          receivedMessages {
            nextToken
            startedAt
          }
          photos {
            nextToken
            startedAt
          }
          collegeGroupId
          collegeGroup {
            id
            name
            domain
            webPage
            countryCode
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          privacySettingID
          privacySetting {
            id
            city
            state
            school
            email
            attendingEvents
            rides
            friends
            photos
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          socialMedia {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCollegeGroup = /* GraphQL */ `
  mutation UpdateCollegeGroup(
    $input: UpdateCollegeGroupInput!
    $condition: ModelCollegeGroupConditionInput
  ) {
    updateCollegeGroup(input: $input, condition: $condition) {
      id
      name
      domain
      webPage
      countryCode
      events {
        items {
          id
          name
          genre
          image
          location
          startDate
          endDate
          type
          tagline
          description
          url
          group {
            id
            name
            domain
            webPage
            countryCode
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          groupID
          attendees {
            nextToken
            startedAt
          }
          rides {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      members {
        items {
          id
          firstName
          lastName
          verified
          verifySubmitted
          profilePhotoID
          bannerPhotoID
          city
          state
          school
          address
          address2
          phone
          email
          zipcode
          attendingEvents {
            nextToken
            startedAt
          }
          rides {
            nextToken
            startedAt
          }
          friends {
            nextToken
            startedAt
          }
          conversations {
            nextToken
            startedAt
          }
          sentMessages {
            nextToken
            startedAt
          }
          receivedMessages {
            nextToken
            startedAt
          }
          photos {
            nextToken
            startedAt
          }
          collegeGroupId
          collegeGroup {
            id
            name
            domain
            webPage
            countryCode
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          privacySettingID
          privacySetting {
            id
            city
            state
            school
            email
            attendingEvents
            rides
            friends
            photos
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          socialMedia {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCollegeGroup = /* GraphQL */ `
  mutation DeleteCollegeGroup(
    $input: DeleteCollegeGroupInput!
    $condition: ModelCollegeGroupConditionInput
  ) {
    deleteCollegeGroup(input: $input, condition: $condition) {
      id
      name
      domain
      webPage
      countryCode
      events {
        items {
          id
          name
          genre
          image
          location
          startDate
          endDate
          type
          tagline
          description
          url
          group {
            id
            name
            domain
            webPage
            countryCode
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          groupID
          attendees {
            nextToken
            startedAt
          }
          rides {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      members {
        items {
          id
          firstName
          lastName
          verified
          verifySubmitted
          profilePhotoID
          bannerPhotoID
          city
          state
          school
          address
          address2
          phone
          email
          zipcode
          attendingEvents {
            nextToken
            startedAt
          }
          rides {
            nextToken
            startedAt
          }
          friends {
            nextToken
            startedAt
          }
          conversations {
            nextToken
            startedAt
          }
          sentMessages {
            nextToken
            startedAt
          }
          receivedMessages {
            nextToken
            startedAt
          }
          photos {
            nextToken
            startedAt
          }
          collegeGroupId
          collegeGroup {
            id
            name
            domain
            webPage
            countryCode
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          privacySettingID
          privacySetting {
            id
            city
            state
            school
            email
            attendingEvents
            rides
            friends
            photos
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          socialMedia {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
