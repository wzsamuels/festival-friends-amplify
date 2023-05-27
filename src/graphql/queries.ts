/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const findSuggestedFriends = /* GraphQL */ `
  query FindSuggestedFriends($school: String, $city: String, $state: String) {
    findSuggestedFriends(school: $school, city: $city, state: $state) {
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
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        unreadMessage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        unreadMessage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const messagesBySenderID = /* GraphQL */ `
  query MessagesBySenderID(
    $senderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesBySenderID(
      senderID: $senderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        unreadMessage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const messagesByReceiverID = /* GraphQL */ `
  query MessagesByReceiverID(
    $receiverID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByReceiverID(
      receiverID: $receiverID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        unreadMessage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const messagesByConversationID = /* GraphQL */ `
  query MessagesByConversationID(
    $conversationID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByConversationID(
      conversationID: $conversationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        unreadMessage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEventProfile = /* GraphQL */ `
  query GetEventProfile($id: ID!) {
    getEventProfile(id: $id) {
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
export const listEventProfiles = /* GraphQL */ `
  query ListEventProfiles(
    $filter: ModelEventProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEventProfiles = /* GraphQL */ `
  query SyncEventProfiles(
    $filter: ModelEventProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEventProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const eventProfilesByUserProfileID = /* GraphQL */ `
  query EventProfilesByUserProfileID(
    $userProfileID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventProfilesByUserProfileID(
      userProfileID: $userProfileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const eventProfilesByEventID = /* GraphQL */ `
  query EventProfilesByEventID(
    $eventID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventProfilesByEventID(
      eventID: $eventID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFestival = /* GraphQL */ `
  query GetFestival($id: ID!) {
    getFestival(id: $id) {
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
export const listFestivals = /* GraphQL */ `
  query ListFestivals(
    $filter: ModelFestivalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFestivals(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncFestivals = /* GraphQL */ `
  query SyncFestivals(
    $filter: ModelFestivalFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFestivals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const festivalsByGroupID = /* GraphQL */ `
  query FestivalsByGroupID(
    $groupID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFestivalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    festivalsByGroupID(
      groupID: $groupID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
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
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserProfiles = /* GraphQL */ `
  query SyncUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const userProfilesByCollegeGroupId = /* GraphQL */ `
  query UserProfilesByCollegeGroupId(
    $collegeGroupId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userProfilesByCollegeGroupId(
      collegeGroupId: $collegeGroupId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getSocialMedia = /* GraphQL */ `
  query GetSocialMedia($id: ID!) {
    getSocialMedia(id: $id) {
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
export const listSocialMedias = /* GraphQL */ `
  query ListSocialMedias(
    $filter: ModelSocialMediaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSocialMedias(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncSocialMedias = /* GraphQL */ `
  query SyncSocialMedias(
    $filter: ModelSocialMediaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSocialMedias(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const socialMediasByUserProfileID = /* GraphQL */ `
  query SocialMediasByUserProfileID(
    $userProfileID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSocialMediaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    socialMediasByUserProfileID(
      userProfileID: $userProfileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getPrivacySetting = /* GraphQL */ `
  query GetPrivacySetting($id: ID!) {
    getPrivacySetting(id: $id) {
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
export const listPrivacySettings = /* GraphQL */ `
  query ListPrivacySettings(
    $filter: ModelPrivacySettingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivacySettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPrivacySettings = /* GraphQL */ `
  query SyncPrivacySettings(
    $filter: ModelPrivacySettingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrivacySettings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getRide = /* GraphQL */ `
  query GetRide($id: ID!) {
    getRide(id: $id) {
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
export const listRides = /* GraphQL */ `
  query ListRides(
    $filter: ModelRideFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRides(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncRides = /* GraphQL */ `
  query SyncRides(
    $filter: ModelRideFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRides(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const ridesByEventID = /* GraphQL */ `
  query RidesByEventID(
    $eventID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRideFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ridesByEventID(
      eventID: $eventID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getRideUser = /* GraphQL */ `
  query GetRideUser($id: ID!) {
    getRideUser(id: $id) {
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
export const listRideUsers = /* GraphQL */ `
  query ListRideUsers(
    $filter: ModelRideUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRideUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncRideUsers = /* GraphQL */ `
  query SyncRideUsers(
    $filter: ModelRideUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRideUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const rideUsersByRideID = /* GraphQL */ `
  query RideUsersByRideID(
    $rideID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRideUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rideUsersByRideID(
      rideID: $rideID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const rideUsersByUserProfileID = /* GraphQL */ `
  query RideUsersByUserProfileID(
    $userProfileID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRideUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rideUsersByUserProfileID(
      userProfileID: $userProfileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPhoto = /* GraphQL */ `
  query GetPhoto($id: ID!) {
    getPhoto(id: $id) {
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
export const listPhotos = /* GraphQL */ `
  query ListPhotos(
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPhotos = /* GraphQL */ `
  query SyncPhotos(
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPhotos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const photosByUserProfileID = /* GraphQL */ `
  query PhotosByUserProfileID(
    $userProfileID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    photosByUserProfileID(
      userProfileID: $userProfileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getPhotoComment = /* GraphQL */ `
  query GetPhotoComment($id: ID!) {
    getPhotoComment(id: $id) {
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
export const listPhotoComments = /* GraphQL */ `
  query ListPhotoComments(
    $filter: ModelPhotoCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotoComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPhotoComments = /* GraphQL */ `
  query SyncPhotoComments(
    $filter: ModelPhotoCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPhotoComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const photoCommentsByPhotoID = /* GraphQL */ `
  query PhotoCommentsByPhotoID(
    $photoID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPhotoCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    photoCommentsByPhotoID(
      photoID: $photoID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFriendship = /* GraphQL */ `
  query GetFriendship($id: ID!) {
    getFriendship(id: $id) {
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
export const listFriendships = /* GraphQL */ `
  query ListFriendships(
    $filter: ModelFriendshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFriendships(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFriendships = /* GraphQL */ `
  query SyncFriendships(
    $filter: ModelFriendshipFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFriendships(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const friendshipsByUserProfileID = /* GraphQL */ `
  query FriendshipsByUserProfileID(
    $userProfileID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFriendshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    friendshipsByUserProfileID(
      userProfileID: $userProfileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const friendshipsByFriendProfileID = /* GraphQL */ `
  query FriendshipsByFriendProfileID(
    $friendProfileID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFriendshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    friendshipsByFriendProfileID(
      friendProfileID: $friendProfileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
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
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncConversations = /* GraphQL */ `
  query SyncConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConversations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const conversationsByUserProfileID = /* GraphQL */ `
  query ConversationsByUserProfileID(
    $userProfileID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    conversationsByUserProfileID(
      userProfileID: $userProfileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const conversationsByFriendProfileID = /* GraphQL */ `
  query ConversationsByFriendProfileID(
    $friendProfileID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    conversationsByFriendProfileID(
      friendProfileID: $friendProfileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getCollegeGroup = /* GraphQL */ `
  query GetCollegeGroup($id: ID!) {
    getCollegeGroup(id: $id) {
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
export const listCollegeGroups = /* GraphQL */ `
  query ListCollegeGroups(
    $filter: ModelCollegeGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollegeGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCollegeGroups = /* GraphQL */ `
  query SyncCollegeGroups(
    $filter: ModelCollegeGroupFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCollegeGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
