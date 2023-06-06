"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onUpdateUserProfile = exports.onUpdateSocialMedia = exports.onUpdateRideUser = exports.onUpdateRide = exports.onUpdatePrivacySetting = exports.onUpdatePhotoComment = exports.onUpdatePhoto = exports.onUpdateMessage = exports.onUpdateFriendship = exports.onUpdateFestival = exports.onUpdateEventProfile = exports.onUpdateConversation = exports.onUpdateCollegeGroup = exports.onDeleteUserProfile = exports.onDeleteSocialMedia = exports.onDeleteRideUser = exports.onDeleteRide = exports.onDeletePrivacySetting = exports.onDeletePhotoComment = exports.onDeletePhoto = exports.onDeleteMessage = exports.onDeleteFriendship = exports.onDeleteFestival = exports.onDeleteEventProfile = exports.onDeleteConversation = exports.onDeleteCollegeGroup = exports.onCreateUserProfile = exports.onCreateSocialMedia = exports.onCreateRideUser = exports.onCreateRide = exports.onCreatePrivacySetting = exports.onCreatePhotoComment = exports.onCreatePhoto = exports.onCreateMessage = exports.onCreateFriendship = exports.onCreateFestival = exports.onCreateEventProfile = exports.onCreateConversation = exports.onCreateCollegeGroup = void 0;
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const onCreateMessage = /* GraphQL */`
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
      id
      content
      senderID
      receiverID
      conversationID
      sender {
        id
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
          sub
          firstName
          lastName
          verified
          verifySubmitted
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
          sub
          firstName
          lastName
          verified
          verifySubmitted
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
exports.onCreateMessage = onCreateMessage;
const onUpdateMessage = /* GraphQL */`
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
      id
      content
      senderID
      receiverID
      conversationID
      sender {
        id
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
          sub
          firstName
          lastName
          verified
          verifySubmitted
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
          sub
          firstName
          lastName
          verified
          verifySubmitted
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
exports.onUpdateMessage = onUpdateMessage;
const onDeleteMessage = /* GraphQL */`
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
      id
      content
      senderID
      receiverID
      conversationID
      sender {
        id
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
          sub
          firstName
          lastName
          verified
          verifySubmitted
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
          sub
          firstName
          lastName
          verified
          verifySubmitted
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
exports.onDeleteMessage = onDeleteMessage;
const onCreateEventProfile = /* GraphQL */`
  subscription OnCreateEventProfile(
    $filter: ModelSubscriptionEventProfileFilterInput
  ) {
    onCreateEventProfile(filter: $filter) {
      id
      userProfileID
      eventID
      userProfile {
        id
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
        state
        city
        address
        startDate
        endDate
        type
        description
        url
        customerID
        hasPaid
        approved
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
exports.onCreateEventProfile = onCreateEventProfile;
const onUpdateEventProfile = /* GraphQL */`
  subscription OnUpdateEventProfile(
    $filter: ModelSubscriptionEventProfileFilterInput
  ) {
    onUpdateEventProfile(filter: $filter) {
      id
      userProfileID
      eventID
      userProfile {
        id
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
        state
        city
        address
        startDate
        endDate
        type
        description
        url
        customerID
        hasPaid
        approved
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
exports.onUpdateEventProfile = onUpdateEventProfile;
const onDeleteEventProfile = /* GraphQL */`
  subscription OnDeleteEventProfile(
    $filter: ModelSubscriptionEventProfileFilterInput
  ) {
    onDeleteEventProfile(filter: $filter) {
      id
      userProfileID
      eventID
      userProfile {
        id
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
        state
        city
        address
        startDate
        endDate
        type
        description
        url
        customerID
        hasPaid
        approved
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
exports.onDeleteEventProfile = onDeleteEventProfile;
const onCreateFestival = /* GraphQL */`
  subscription OnCreateFestival($filter: ModelSubscriptionFestivalFilterInput) {
    onCreateFestival(filter: $filter) {
      id
      name
      genre
      image
      location
      state
      city
      address
      startDate
      endDate
      type
      description
      url
      customerID
      hasPaid
      approved
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
            state
            city
            address
            startDate
            endDate
            type
            description
            url
            customerID
            hasPaid
            approved
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            state
            city
            address
            startDate
            endDate
            type
            description
            url
            customerID
            hasPaid
            approved
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
            state
            city
            address
            startDate
            endDate
            type
            description
            url
            customerID
            hasPaid
            approved
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
exports.onCreateFestival = onCreateFestival;
const onUpdateFestival = /* GraphQL */`
  subscription OnUpdateFestival($filter: ModelSubscriptionFestivalFilterInput) {
    onUpdateFestival(filter: $filter) {
      id
      name
      genre
      image
      location
      state
      city
      address
      startDate
      endDate
      type
      description
      url
      customerID
      hasPaid
      approved
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
            state
            city
            address
            startDate
            endDate
            type
            description
            url
            customerID
            hasPaid
            approved
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            state
            city
            address
            startDate
            endDate
            type
            description
            url
            customerID
            hasPaid
            approved
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
            state
            city
            address
            startDate
            endDate
            type
            description
            url
            customerID
            hasPaid
            approved
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
exports.onUpdateFestival = onUpdateFestival;
const onDeleteFestival = /* GraphQL */`
  subscription OnDeleteFestival($filter: ModelSubscriptionFestivalFilterInput) {
    onDeleteFestival(filter: $filter) {
      id
      name
      genre
      image
      location
      state
      city
      address
      startDate
      endDate
      type
      description
      url
      customerID
      hasPaid
      approved
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
            state
            city
            address
            startDate
            endDate
            type
            description
            url
            customerID
            hasPaid
            approved
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            state
            city
            address
            startDate
            endDate
            type
            description
            url
            customerID
            hasPaid
            approved
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
            state
            city
            address
            startDate
            endDate
            type
            description
            url
            customerID
            hasPaid
            approved
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
exports.onDeleteFestival = onDeleteFestival;
const onCreateUserProfile = /* GraphQL */`
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onCreateUserProfile(filter: $filter) {
      id
      sub
      firstName
      lastName
      verified
      verifySubmitted
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
      attendingEvents {
        items {
          id
          userProfileID
          eventID
          userProfile {
            id
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            state
            city
            address
            startDate
            endDate
            type
            description
            url
            customerID
            hasPaid
            approved
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            state
            city
            address
            startDate
            endDate
            type
            description
            url
            customerID
            hasPaid
            approved
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
exports.onCreateUserProfile = onCreateUserProfile;
const onUpdateUserProfile = /* GraphQL */`
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onUpdateUserProfile(filter: $filter) {
      id
      sub
      firstName
      lastName
      verified
      verifySubmitted
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
      attendingEvents {
        items {
          id
          userProfileID
          eventID
          userProfile {
            id
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            state
            city
            address
            startDate
            endDate
            type
            description
            url
            customerID
            hasPaid
            approved
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            state
            city
            address
            startDate
            endDate
            type
            description
            url
            customerID
            hasPaid
            approved
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
exports.onUpdateUserProfile = onUpdateUserProfile;
const onDeleteUserProfile = /* GraphQL */`
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onDeleteUserProfile(filter: $filter) {
      id
      sub
      firstName
      lastName
      verified
      verifySubmitted
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
      attendingEvents {
        items {
          id
          userProfileID
          eventID
          userProfile {
            id
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            state
            city
            address
            startDate
            endDate
            type
            description
            url
            customerID
            hasPaid
            approved
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            state
            city
            address
            startDate
            endDate
            type
            description
            url
            customerID
            hasPaid
            approved
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
exports.onDeleteUserProfile = onDeleteUserProfile;
const onCreateSocialMedia = /* GraphQL */`
  subscription OnCreateSocialMedia(
    $filter: ModelSubscriptionSocialMediaFilterInput
  ) {
    onCreateSocialMedia(filter: $filter) {
      id
      userProfileID
      userProfile {
        id
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
exports.onCreateSocialMedia = onCreateSocialMedia;
const onUpdateSocialMedia = /* GraphQL */`
  subscription OnUpdateSocialMedia(
    $filter: ModelSubscriptionSocialMediaFilterInput
  ) {
    onUpdateSocialMedia(filter: $filter) {
      id
      userProfileID
      userProfile {
        id
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
exports.onUpdateSocialMedia = onUpdateSocialMedia;
const onDeleteSocialMedia = /* GraphQL */`
  subscription OnDeleteSocialMedia(
    $filter: ModelSubscriptionSocialMediaFilterInput
  ) {
    onDeleteSocialMedia(filter: $filter) {
      id
      userProfileID
      userProfile {
        id
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
exports.onDeleteSocialMedia = onDeleteSocialMedia;
const onCreatePrivacySetting = /* GraphQL */`
  subscription OnCreatePrivacySetting(
    $filter: ModelSubscriptionPrivacySettingFilterInput
  ) {
    onCreatePrivacySetting(filter: $filter) {
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
exports.onCreatePrivacySetting = onCreatePrivacySetting;
const onUpdatePrivacySetting = /* GraphQL */`
  subscription OnUpdatePrivacySetting(
    $filter: ModelSubscriptionPrivacySettingFilterInput
  ) {
    onUpdatePrivacySetting(filter: $filter) {
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
exports.onUpdatePrivacySetting = onUpdatePrivacySetting;
const onDeletePrivacySetting = /* GraphQL */`
  subscription OnDeletePrivacySetting(
    $filter: ModelSubscriptionPrivacySettingFilterInput
  ) {
    onDeletePrivacySetting(filter: $filter) {
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
exports.onDeletePrivacySetting = onDeletePrivacySetting;
const onCreateRide = /* GraphQL */`
  subscription OnCreateRide($filter: ModelSubscriptionRideFilterInput) {
    onCreateRide(filter: $filter) {
      id
      event {
        id
        name
        genre
        image
        location
        state
        city
        address
        startDate
        endDate
        type
        description
        url
        customerID
        hasPaid
        approved
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
            state
            city
            address
            startDate
            endDate
            type
            description
            url
            customerID
            hasPaid
            approved
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
          sub
          firstName
          lastName
          verified
          verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
exports.onCreateRide = onCreateRide;
const onUpdateRide = /* GraphQL */`
  subscription OnUpdateRide($filter: ModelSubscriptionRideFilterInput) {
    onUpdateRide(filter: $filter) {
      id
      event {
        id
        name
        genre
        image
        location
        state
        city
        address
        startDate
        endDate
        type
        description
        url
        customerID
        hasPaid
        approved
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
            state
            city
            address
            startDate
            endDate
            type
            description
            url
            customerID
            hasPaid
            approved
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
          sub
          firstName
          lastName
          verified
          verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
exports.onUpdateRide = onUpdateRide;
const onDeleteRide = /* GraphQL */`
  subscription OnDeleteRide($filter: ModelSubscriptionRideFilterInput) {
    onDeleteRide(filter: $filter) {
      id
      event {
        id
        name
        genre
        image
        location
        state
        city
        address
        startDate
        endDate
        type
        description
        url
        customerID
        hasPaid
        approved
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
            state
            city
            address
            startDate
            endDate
            type
            description
            url
            customerID
            hasPaid
            approved
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
          sub
          firstName
          lastName
          verified
          verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
exports.onDeleteRide = onDeleteRide;
const onCreateRideUser = /* GraphQL */`
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
          state
          city
          address
          startDate
          endDate
          type
          description
          url
          customerID
          hasPaid
          approved
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
exports.onCreateRideUser = onCreateRideUser;
const onUpdateRideUser = /* GraphQL */`
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
          state
          city
          address
          startDate
          endDate
          type
          description
          url
          customerID
          hasPaid
          approved
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
exports.onUpdateRideUser = onUpdateRideUser;
const onDeleteRideUser = /* GraphQL */`
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
          state
          city
          address
          startDate
          endDate
          type
          description
          url
          customerID
          hasPaid
          approved
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
exports.onDeleteRideUser = onDeleteRideUser;
const onCreatePhoto = /* GraphQL */`
  subscription OnCreatePhoto($filter: ModelSubscriptionPhotoFilterInput) {
    onCreatePhoto(filter: $filter) {
      id
      userProfileID
      userProfile {
        id
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
exports.onCreatePhoto = onCreatePhoto;
const onUpdatePhoto = /* GraphQL */`
  subscription OnUpdatePhoto($filter: ModelSubscriptionPhotoFilterInput) {
    onUpdatePhoto(filter: $filter) {
      id
      userProfileID
      userProfile {
        id
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
exports.onUpdatePhoto = onUpdatePhoto;
const onDeletePhoto = /* GraphQL */`
  subscription OnDeletePhoto($filter: ModelSubscriptionPhotoFilterInput) {
    onDeletePhoto(filter: $filter) {
      id
      userProfileID
      userProfile {
        id
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
exports.onDeletePhoto = onDeletePhoto;
const onCreatePhotoComment = /* GraphQL */`
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
          sub
          firstName
          lastName
          verified
          verifySubmitted
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
exports.onCreatePhotoComment = onCreatePhotoComment;
const onUpdatePhotoComment = /* GraphQL */`
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
          sub
          firstName
          lastName
          verified
          verifySubmitted
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
exports.onUpdatePhotoComment = onUpdatePhotoComment;
const onDeletePhotoComment = /* GraphQL */`
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
          sub
          firstName
          lastName
          verified
          verifySubmitted
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
exports.onDeletePhotoComment = onDeletePhotoComment;
const onCreateFriendship = /* GraphQL */`
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
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
exports.onCreateFriendship = onCreateFriendship;
const onUpdateFriendship = /* GraphQL */`
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
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
exports.onUpdateFriendship = onUpdateFriendship;
const onDeleteFriendship = /* GraphQL */`
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
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
exports.onDeleteFriendship = onDeleteFriendship;
const onCreateConversation = /* GraphQL */`
  subscription OnCreateConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onCreateConversation(filter: $filter) {
      id
      userProfileID
      friendProfileID
      userProfile {
        id
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
exports.onCreateConversation = onCreateConversation;
const onUpdateConversation = /* GraphQL */`
  subscription OnUpdateConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onUpdateConversation(filter: $filter) {
      id
      userProfileID
      friendProfileID
      userProfile {
        id
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
exports.onUpdateConversation = onUpdateConversation;
const onDeleteConversation = /* GraphQL */`
  subscription OnDeleteConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onDeleteConversation(filter: $filter) {
      id
      userProfileID
      friendProfileID
      userProfile {
        id
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
        sub
        firstName
        lastName
        verified
        verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
            sub
            firstName
            lastName
            verified
            verifySubmitted
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
exports.onDeleteConversation = onDeleteConversation;
const onCreateCollegeGroup = /* GraphQL */`
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
          state
          city
          address
          startDate
          endDate
          type
          description
          url
          customerID
          hasPaid
          approved
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
          sub
          firstName
          lastName
          verified
          verifySubmitted
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
exports.onCreateCollegeGroup = onCreateCollegeGroup;
const onUpdateCollegeGroup = /* GraphQL */`
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
          state
          city
          address
          startDate
          endDate
          type
          description
          url
          customerID
          hasPaid
          approved
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
          sub
          firstName
          lastName
          verified
          verifySubmitted
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
exports.onUpdateCollegeGroup = onUpdateCollegeGroup;
const onDeleteCollegeGroup = /* GraphQL */`
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
          state
          city
          address
          startDate
          endDate
          type
          description
          url
          customerID
          hasPaid
          approved
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
          sub
          firstName
          lastName
          verified
          verifySubmitted
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
exports.onDeleteCollegeGroup = onDeleteCollegeGroup;