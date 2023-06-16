/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      sub
      firstName
      lastName
      verified
      submitted
      profilePhotoID
      bannerPhotoID
      verifyPhotoID
      customerID
      city
      state
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
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
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
          }
          event {
            id
            name
            genre
            image
            state
            city
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
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
          profileId
          rideId
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
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
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
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
          }
          profileID
          friendProfile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
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
          }
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
          profileID
          friendProfileID
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
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
          }
          friendProfile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
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
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
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
        }
        nextToken
        startedAt
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
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
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
            submitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
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
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      profilePrivacySettingId
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sub
        firstName
        lastName
        verified
        submitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProfiles = /* GraphQL */ `
  query SyncProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        sub
        firstName
        lastName
        verified
        submitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
      }
      nextToken
      startedAt
    }
  }
`;
export const profilesByGroupID = /* GraphQL */ `
  query ProfilesByGroupID(
    $groupID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    profilesByGroupID(
      groupID: $groupID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        firstName
        lastName
        verified
        submitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
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
      socialMediaType
      accountURL
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      profileSocialMediaId
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
        socialMediaType
        accountURL
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profileSocialMediaId
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
        socialMediaType
        accountURL
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profileSocialMediaId
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
      events
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
        events
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
        events
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
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      name
      genre
      image
      state
      city
      startDate
      endDate
      type
      address
      description
      url
      customerID
      ticketURL
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
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
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
            submitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
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
          profileId
          eventId
          profile {
            id
            sub
            firstName
            lastName
            verified
            submitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
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
          }
          event {
            id
            name
            genre
            image
            state
            city
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
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
            state
            city
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
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
          }
          eventID
          driverProfileID
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        genre
        image
        state
        city
        startDate
        endDate
        type
        address
        description
        url
        customerID
        ticketURL
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
            profileId
            eventId
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
export const syncEvents = /* GraphQL */ `
  query SyncEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEvents(
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
        state
        city
        startDate
        endDate
        type
        address
        description
        url
        customerID
        ticketURL
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
            profileId
            eventId
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
export const eventsBySubscriptionID = /* GraphQL */ `
  query EventsBySubscriptionID(
    $subscriptionID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsBySubscriptionID(
      subscriptionID: $subscriptionID
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
        state
        city
        startDate
        endDate
        type
        address
        description
        url
        customerID
        ticketURL
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
            profileId
            eventId
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
export const eventsByGroupID = /* GraphQL */ `
  query EventsByGroupID(
    $groupID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsByGroupID(
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
        state
        city
        startDate
        endDate
        type
        address
        description
        url
        customerID
        ticketURL
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
            profileId
            eventId
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
export const getRide = /* GraphQL */ `
  query GetRide($id: ID!) {
    getRide(id: $id) {
      id
      event {
        id
        name
        genre
        image
        state
        city
        startDate
        endDate
        type
        address
        description
        url
        customerID
        ticketURL
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
            profileId
            eventId
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
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
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
      maxPassengers
      departureTime
      startPoint
      endPoint
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          state
          city
          startDate
          endDate
          type
          address
          description
          url
          customerID
          ticketURL
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
          state
          city
          startDate
          endDate
          type
          address
          description
          url
          customerID
          ticketURL
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
          state
          city
          startDate
          endDate
          type
          address
          description
          url
          customerID
          ticketURL
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
      profileID
      profile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
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
        profileID
        profile {
          id
          sub
          firstName
          lastName
          verified
          submitted
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
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
        profileID
        profile {
          id
          sub
          firstName
          lastName
          verified
          submitted
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
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
      }
      nextToken
      startedAt
    }
  }
`;
export const photosByProfileID = /* GraphQL */ `
  query PhotosByProfileID(
    $profileID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    photosByProfileID(
      profileID: $profileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
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
      profile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
      }
      profileID
      friendProfile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
      }
      friendProfileID
      isAccepted
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
        profile {
          id
          sub
          firstName
          lastName
          verified
          submitted
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
        }
        profileID
        friendProfile {
          id
          sub
          firstName
          lastName
          verified
          submitted
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
        }
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
        profile {
          id
          sub
          firstName
          lastName
          verified
          submitted
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
        }
        profileID
        friendProfile {
          id
          sub
          firstName
          lastName
          verified
          submitted
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
        }
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
  }
`;
export const friendshipsByProfileID = /* GraphQL */ `
  query FriendshipsByProfileID(
    $profileID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFriendshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    friendshipsByProfileID(
      profileID: $profileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        profile {
          id
          sub
          firstName
          lastName
          verified
          submitted
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
        }
        profileID
        friendProfile {
          id
          sub
          firstName
          lastName
          verified
          submitted
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
        }
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
        profile {
          id
          sub
          firstName
          lastName
          verified
          submitted
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
        }
        profileID
        friendProfile {
          id
          sub
          firstName
          lastName
          verified
          submitted
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
        }
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
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
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
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
      }
      friendProfile {
        id
        sub
        firstName
        lastName
        verified
        submitted
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
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
        profileID
        friendProfileID
        profile {
          id
          sub
          firstName
          lastName
          verified
          submitted
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
        }
        friendProfile {
          id
          sub
          firstName
          lastName
          verified
          submitted
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
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
        profileID
        friendProfileID
        profile {
          id
          sub
          firstName
          lastName
          verified
          submitted
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
        }
        friendProfile {
          id
          sub
          firstName
          lastName
          verified
          submitted
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
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
export const conversationsByProfileID = /* GraphQL */ `
  query ConversationsByProfileID(
    $profileID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    conversationsByProfileID(
      profileID: $profileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
        }
        friendProfile {
          id
          sub
          firstName
          lastName
          verified
          submitted
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
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
        profileID
        friendProfileID
        profile {
          id
          sub
          firstName
          lastName
          verified
          submitted
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
        }
        friendProfile {
          id
          sub
          firstName
          lastName
          verified
          submitted
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
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
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
        senderProfileID
        receiverProfileID
        unread
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationMessagesId
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
        senderProfileID
        receiverProfileID
        unread
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationMessagesId
      }
      nextToken
      startedAt
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
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
          startDate
          endDate
          type
          address
          description
          url
          customerID
          ticketURL
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
          submitted
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
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
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
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
            submitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
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
export const syncGroups = /* GraphQL */ `
  query SyncGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGroups(
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
        events {
          items {
            id
            name
            genre
            image
            state
            city
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
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
            submitted
            profilePhotoID
            bannerPhotoID
            verifyPhotoID
            customerID
            city
            state
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
export const getEventProfile = /* GraphQL */ `
  query GetEventProfile($id: ID!) {
    getEventProfile(id: $id) {
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
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
      }
      event {
        id
        name
        genre
        image
        state
        city
        startDate
        endDate
        type
        address
        description
        url
        customerID
        ticketURL
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
            profileId
            eventId
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
        profileId
        eventId
        profile {
          id
          sub
          firstName
          lastName
          verified
          submitted
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
        }
        event {
          id
          name
          genre
          image
          state
          city
          startDate
          endDate
          type
          address
          description
          url
          customerID
          ticketURL
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
        profileId
        eventId
        profile {
          id
          sub
          firstName
          lastName
          verified
          submitted
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
        }
        event {
          id
          name
          genre
          image
          state
          city
          startDate
          endDate
          type
          address
          description
          url
          customerID
          ticketURL
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
export const eventProfilesByProfileId = /* GraphQL */ `
  query EventProfilesByProfileId(
    $profileId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventProfilesByProfileId(
      profileId: $profileId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
        }
        event {
          id
          name
          genre
          image
          state
          city
          startDate
          endDate
          type
          address
          description
          url
          customerID
          ticketURL
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
export const eventProfilesByEventId = /* GraphQL */ `
  query EventProfilesByEventId(
    $eventId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventProfilesByEventId(
      eventId: $eventId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
        }
        event {
          id
          name
          genre
          image
          state
          city
          startDate
          endDate
          type
          address
          description
          url
          customerID
          ticketURL
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
export const getRideProfile = /* GraphQL */ `
  query GetRideProfile($id: ID!) {
    getRideProfile(id: $id) {
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
        profilePhotoID
        bannerPhotoID
        verifyPhotoID
        customerID
        city
        state
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        profilePrivacySettingId
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
          startDate
          endDate
          type
          address
          description
          url
          customerID
          ticketURL
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listRideProfiles = /* GraphQL */ `
  query ListRideProfiles(
    $filter: ModelRideProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRideProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
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
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
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
          }
          eventID
          driverProfileID
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
export const syncRideProfiles = /* GraphQL */ `
  query SyncRideProfiles(
    $filter: ModelRideProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRideProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
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
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
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
          }
          eventID
          driverProfileID
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
export const rideProfilesByProfileId = /* GraphQL */ `
  query RideProfilesByProfileId(
    $profileId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRideProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rideProfilesByProfileId(
      profileId: $profileId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
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
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
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
          }
          eventID
          driverProfileID
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
export const rideProfilesByRideId = /* GraphQL */ `
  query RideProfilesByRideId(
    $rideId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRideProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rideProfilesByRideId(
      rideId: $rideId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          profilePhotoID
          bannerPhotoID
          verifyPhotoID
          customerID
          city
          state
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
          photos {
            nextToken
            startedAt
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
          profilePrivacySettingId
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
            startDate
            endDate
            type
            address
            description
            url
            customerID
            ticketURL
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
          }
          eventID
          driverProfileID
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
