"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserProfile = exports.updateSocialMedia = exports.updateRideUser = exports.updateRide = exports.updatePrivacySetting = exports.updatePhotoComment = exports.updatePhoto = exports.updateMessage = exports.updateFriendship = exports.updateFestival = exports.updateEventProfile = exports.updateConversation = exports.updateCollegeGroup = exports.deleteUserProfile = exports.deleteSocialMedia = exports.deleteRideUser = exports.deleteRide = exports.deletePrivacySetting = exports.deletePhotoComment = exports.deletePhoto = exports.deleteMessage = exports.deleteFriendship = exports.deleteFestival = exports.deleteEventProfile = exports.deleteConversation = exports.deleteCollegeGroup = exports.createUserProfile = exports.createSocialMedia = exports.createRideUser = exports.createRide = exports.createPrivacySetting = exports.createPhotoComment = exports.createPhoto = exports.createMessage = exports.createFriendship = exports.createFestival = exports.createEventProfile = exports.createConversation = exports.createCollegeGroup = void 0;
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const createMessage = /* GraphQL */`
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
exports.createMessage = createMessage;
const updateMessage = /* GraphQL */`
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
exports.updateMessage = updateMessage;
const deleteMessage = /* GraphQL */`
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
exports.deleteMessage = deleteMessage;
const createEventProfile = /* GraphQL */`
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
exports.createEventProfile = createEventProfile;
const updateEventProfile = /* GraphQL */`
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
exports.updateEventProfile = updateEventProfile;
const deleteEventProfile = /* GraphQL */`
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
exports.deleteEventProfile = deleteEventProfile;
const createFestival = /* GraphQL */`
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
exports.createFestival = createFestival;
const updateFestival = /* GraphQL */`
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
exports.updateFestival = updateFestival;
const deleteFestival = /* GraphQL */`
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
exports.deleteFestival = deleteFestival;
const createUserProfile = /* GraphQL */`
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
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
exports.createUserProfile = createUserProfile;
const updateUserProfile = /* GraphQL */`
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
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
exports.updateUserProfile = updateUserProfile;
const deleteUserProfile = /* GraphQL */`
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
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
exports.deleteUserProfile = deleteUserProfile;
const createSocialMedia = /* GraphQL */`
  mutation CreateSocialMedia(
    $input: CreateSocialMediaInput!
    $condition: ModelSocialMediaConditionInput
  ) {
    createSocialMedia(input: $input, condition: $condition) {
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
exports.createSocialMedia = createSocialMedia;
const updateSocialMedia = /* GraphQL */`
  mutation UpdateSocialMedia(
    $input: UpdateSocialMediaInput!
    $condition: ModelSocialMediaConditionInput
  ) {
    updateSocialMedia(input: $input, condition: $condition) {
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
exports.updateSocialMedia = updateSocialMedia;
const deleteSocialMedia = /* GraphQL */`
  mutation DeleteSocialMedia(
    $input: DeleteSocialMediaInput!
    $condition: ModelSocialMediaConditionInput
  ) {
    deleteSocialMedia(input: $input, condition: $condition) {
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
exports.deleteSocialMedia = deleteSocialMedia;
const createPrivacySetting = /* GraphQL */`
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
exports.createPrivacySetting = createPrivacySetting;
const updatePrivacySetting = /* GraphQL */`
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
exports.updatePrivacySetting = updatePrivacySetting;
const deletePrivacySetting = /* GraphQL */`
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
exports.deletePrivacySetting = deletePrivacySetting;
const createRide = /* GraphQL */`
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
exports.createRide = createRide;
const updateRide = /* GraphQL */`
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
exports.updateRide = updateRide;
const deleteRide = /* GraphQL */`
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
exports.deleteRide = deleteRide;
const createRideUser = /* GraphQL */`
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
exports.createRideUser = createRideUser;
const updateRideUser = /* GraphQL */`
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
exports.updateRideUser = updateRideUser;
const deleteRideUser = /* GraphQL */`
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
exports.deleteRideUser = deleteRideUser;
const createPhoto = /* GraphQL */`
  mutation CreatePhoto(
    $input: CreatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    createPhoto(input: $input, condition: $condition) {
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
exports.createPhoto = createPhoto;
const updatePhoto = /* GraphQL */`
  mutation UpdatePhoto(
    $input: UpdatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    updatePhoto(input: $input, condition: $condition) {
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
exports.updatePhoto = updatePhoto;
const deletePhoto = /* GraphQL */`
  mutation DeletePhoto(
    $input: DeletePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    deletePhoto(input: $input, condition: $condition) {
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
exports.deletePhoto = deletePhoto;
const createPhotoComment = /* GraphQL */`
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
exports.createPhotoComment = createPhotoComment;
const updatePhotoComment = /* GraphQL */`
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
exports.updatePhotoComment = updatePhotoComment;
const deletePhotoComment = /* GraphQL */`
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
exports.deletePhotoComment = deletePhotoComment;
const createFriendship = /* GraphQL */`
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
exports.createFriendship = createFriendship;
const updateFriendship = /* GraphQL */`
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
exports.updateFriendship = updateFriendship;
const deleteFriendship = /* GraphQL */`
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
exports.deleteFriendship = deleteFriendship;
const createConversation = /* GraphQL */`
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
exports.createConversation = createConversation;
const updateConversation = /* GraphQL */`
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
exports.updateConversation = updateConversation;
const deleteConversation = /* GraphQL */`
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
exports.deleteConversation = deleteConversation;
const createCollegeGroup = /* GraphQL */`
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
exports.createCollegeGroup = createCollegeGroup;
const updateCollegeGroup = /* GraphQL */`
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
exports.updateCollegeGroup = updateCollegeGroup;
const deleteCollegeGroup = /* GraphQL */`
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
exports.deleteCollegeGroup = deleteCollegeGroup;