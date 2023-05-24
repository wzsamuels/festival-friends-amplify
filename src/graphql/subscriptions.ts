/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
          privacySetting {
            id
            userProfileID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfilePrivacySettingId
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
          privacySetting {
            id
            userProfileID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfilePrivacySettingId
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
          privacySetting {
            id
            userProfileID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfilePrivacySettingId
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
          privacySetting {
            id
            userProfileID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfilePrivacySettingId
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
          privacySetting {
            id
            userProfileID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfilePrivacySettingId
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
          privacySetting {
            id
            userProfileID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfilePrivacySettingId
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
export const onCreateEventProfile = /* GraphQL */ `
  subscription OnCreateEventProfile(
    $filter: ModelSubscriptionEventProfileFilterInput
  ) {
    onCreateEventProfile(filter: $filter) {
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
export const onUpdateEventProfile = /* GraphQL */ `
  subscription OnUpdateEventProfile(
    $filter: ModelSubscriptionEventProfileFilterInput
  ) {
    onUpdateEventProfile(filter: $filter) {
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
export const onDeleteEventProfile = /* GraphQL */ `
  subscription OnDeleteEventProfile(
    $filter: ModelSubscriptionEventProfileFilterInput
  ) {
    onDeleteEventProfile(filter: $filter) {
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
export const onCreateFestival = /* GraphQL */ `
  subscription OnCreateFestival($filter: ModelSubscriptionFestivalFilterInput) {
    onCreateFestival(filter: $filter) {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
export const onUpdateFestival = /* GraphQL */ `
  subscription OnUpdateFestival($filter: ModelSubscriptionFestivalFilterInput) {
    onUpdateFestival(filter: $filter) {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
export const onDeleteFestival = /* GraphQL */ `
  subscription OnDeleteFestival($filter: ModelSubscriptionFestivalFilterInput) {
    onDeleteFestival(filter: $filter) {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onCreateUserProfile(filter: $filter) {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
      privacySetting {
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
          privacySetting {
            id
            userProfileID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfilePrivacySettingId
        }
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userProfilePrivacySettingId
    }
  }
`;
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onUpdateUserProfile(filter: $filter) {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
      privacySetting {
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
          privacySetting {
            id
            userProfileID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfilePrivacySettingId
        }
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userProfilePrivacySettingId
    }
  }
`;
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onDeleteUserProfile(filter: $filter) {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
      privacySetting {
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
          privacySetting {
            id
            userProfileID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfilePrivacySettingId
        }
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userProfilePrivacySettingId
    }
  }
`;
export const onCreatePrivacySetting = /* GraphQL */ `
  subscription OnCreatePrivacySetting(
    $filter: ModelSubscriptionPrivacySettingFilterInput
  ) {
    onCreatePrivacySetting(filter: $filter) {
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
      }
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
export const onUpdatePrivacySetting = /* GraphQL */ `
  subscription OnUpdatePrivacySetting(
    $filter: ModelSubscriptionPrivacySettingFilterInput
  ) {
    onUpdatePrivacySetting(filter: $filter) {
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
      }
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
export const onDeletePrivacySetting = /* GraphQL */ `
  subscription OnDeletePrivacySetting(
    $filter: ModelSubscriptionPrivacySettingFilterInput
  ) {
    onDeletePrivacySetting(filter: $filter) {
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
      }
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
export const onCreateRide = /* GraphQL */ `
  subscription OnCreateRide($filter: ModelSubscriptionRideFilterInput) {
    onCreateRide(filter: $filter) {
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
          privacySetting {
            id
            userProfileID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
export const onUpdateRide = /* GraphQL */ `
  subscription OnUpdateRide($filter: ModelSubscriptionRideFilterInput) {
    onUpdateRide(filter: $filter) {
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
          privacySetting {
            id
            userProfileID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
export const onDeleteRide = /* GraphQL */ `
  subscription OnDeleteRide($filter: ModelSubscriptionRideFilterInput) {
    onDeleteRide(filter: $filter) {
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
          privacySetting {
            id
            userProfileID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
export const onCreateRideUser = /* GraphQL */ `
  subscription OnCreateRideUser($filter: ModelSubscriptionRideUserFilterInput) {
    onCreateRideUser(filter: $filter) {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
export const onUpdateRideUser = /* GraphQL */ `
  subscription OnUpdateRideUser($filter: ModelSubscriptionRideUserFilterInput) {
    onUpdateRideUser(filter: $filter) {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
export const onDeleteRideUser = /* GraphQL */ `
  subscription OnDeleteRideUser($filter: ModelSubscriptionRideUserFilterInput) {
    onDeleteRideUser(filter: $filter) {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
export const onCreatePhoto = /* GraphQL */ `
  subscription OnCreatePhoto($filter: ModelSubscriptionPhotoFilterInput) {
    onCreatePhoto(filter: $filter) {
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
export const onUpdatePhoto = /* GraphQL */ `
  subscription OnUpdatePhoto($filter: ModelSubscriptionPhotoFilterInput) {
    onUpdatePhoto(filter: $filter) {
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
export const onDeletePhoto = /* GraphQL */ `
  subscription OnDeletePhoto($filter: ModelSubscriptionPhotoFilterInput) {
    onDeletePhoto(filter: $filter) {
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
export const onCreatePhotoComment = /* GraphQL */ `
  subscription OnCreatePhotoComment(
    $filter: ModelSubscriptionPhotoCommentFilterInput
  ) {
    onCreatePhotoComment(filter: $filter) {
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
          privacySetting {
            id
            userProfileID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfilePrivacySettingId
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
export const onUpdatePhotoComment = /* GraphQL */ `
  subscription OnUpdatePhotoComment(
    $filter: ModelSubscriptionPhotoCommentFilterInput
  ) {
    onUpdatePhotoComment(filter: $filter) {
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
          privacySetting {
            id
            userProfileID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfilePrivacySettingId
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
export const onDeletePhotoComment = /* GraphQL */ `
  subscription OnDeletePhotoComment(
    $filter: ModelSubscriptionPhotoCommentFilterInput
  ) {
    onDeletePhotoComment(filter: $filter) {
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
          privacySetting {
            id
            userProfileID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfilePrivacySettingId
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
export const onCreateFriendship = /* GraphQL */ `
  subscription OnCreateFriendship(
    $filter: ModelSubscriptionFriendshipFilterInput
  ) {
    onCreateFriendship(filter: $filter) {
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateFriendship = /* GraphQL */ `
  subscription OnUpdateFriendship(
    $filter: ModelSubscriptionFriendshipFilterInput
  ) {
    onUpdateFriendship(filter: $filter) {
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteFriendship = /* GraphQL */ `
  subscription OnDeleteFriendship(
    $filter: ModelSubscriptionFriendshipFilterInput
  ) {
    onDeleteFriendship(filter: $filter) {
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onCreateConversation(filter: $filter) {
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onUpdateConversation(filter: $filter) {
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onDeleteConversation(filter: $filter) {
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
        privacySetting {
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
          }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userProfilePrivacySettingId
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
export const onCreateCollegeGroup = /* GraphQL */ `
  subscription OnCreateCollegeGroup(
    $filter: ModelSubscriptionCollegeGroupFilterInput
  ) {
    onCreateCollegeGroup(filter: $filter) {
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
          privacySetting {
            id
            userProfileID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfilePrivacySettingId
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
export const onUpdateCollegeGroup = /* GraphQL */ `
  subscription OnUpdateCollegeGroup(
    $filter: ModelSubscriptionCollegeGroupFilterInput
  ) {
    onUpdateCollegeGroup(filter: $filter) {
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
          privacySetting {
            id
            userProfileID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfilePrivacySettingId
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
export const onDeleteCollegeGroup = /* GraphQL */ `
  subscription OnDeleteCollegeGroup(
    $filter: ModelSubscriptionCollegeGroupFilterInput
  ) {
    onDeleteCollegeGroup(filter: $filter) {
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
          privacySetting {
            id
            userProfileID
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfilePrivacySettingId
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
