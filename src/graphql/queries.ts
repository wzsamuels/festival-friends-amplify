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
      nextToken
      startedAt
      __typename
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
      nextToken
      startedAt
      __typename
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
      nextToken
      startedAt
      __typename
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
      __typename
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
        __typename
      }
      nextToken
      startedAt
      __typename
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
        __typename
      }
      nextToken
      startedAt
      __typename
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
      __typename
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
        __typename
      }
      nextToken
      startedAt
      __typename
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
        __typename
      }
      nextToken
      startedAt
      __typename
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
      country
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
        country
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
      nextToken
      startedAt
      __typename
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
        country
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
      nextToken
      startedAt
      __typename
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
        country
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
      nextToken
      startedAt
      __typename
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
        country
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
      nextToken
      startedAt
      __typename
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
        country
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
          country
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
      nextToken
      startedAt
      __typename
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
          country
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
      nextToken
      startedAt
      __typename
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
          country
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
      nextToken
      startedAt
      __typename
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
      nextToken
      startedAt
      __typename
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
      nextToken
      startedAt
      __typename
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
      nextToken
      startedAt
      __typename
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
      nextToken
      startedAt
      __typename
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
      __typename
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
        __typename
      }
      nextToken
      startedAt
      __typename
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
        __typename
      }
      nextToken
      startedAt
      __typename
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
          country
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
            country
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
      nextToken
      startedAt
      __typename
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
            country
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
      nextToken
      startedAt
      __typename
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
        event {
          id
          name
          genre
          image
          state
          city
          country
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
        event {
          id
          name
          genre
          image
          state
          city
          country
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
        event {
          id
          name
          genre
          image
          state
          city
          country
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
        event {
          id
          name
          genre
          image
          state
          city
          country
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
  }
`;
