export const schema = {
  models: {
    Message: {
      name: "Message",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        content: {
          name: "content",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        senderID: {
          name: "senderID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        receiverID: {
          name: "receiverID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        conversationID: {
          name: "conversationID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        sender: {
          name: "sender",
          isArray: false,
          type: {
            model: "UserProfile",
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetNames: ["senderID"],
          },
        },
        receiver: {
          name: "receiver",
          isArray: false,
          type: {
            model: "UserProfile",
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetNames: ["receiverID"],
          },
        },
        conversation: {
          name: "conversation",
          isArray: false,
          type: {
            model: "Conversation",
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetNames: ["conversationID"],
          },
        },
        unreadMessage: {
          name: "unreadMessage",
          isArray: false,
          type: "Boolean",
          isRequired: false,
          attributes: [],
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Messages",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            name: "bySender",
            fields: ["senderID"],
          },
        },
        {
          type: "key",
          properties: {
            name: "byReceiver",
            fields: ["receiverID"],
          },
        },
        {
          type: "key",
          properties: {
            name: "byConversation",
            fields: ["conversationID"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    EventProfile: {
      name: "EventProfile",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        userProfileID: {
          name: "userProfileID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        eventID: {
          name: "eventID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        userProfile: {
          name: "userProfile",
          isArray: false,
          type: {
            model: "UserProfile",
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetNames: ["userProfileID"],
          },
        },
        event: {
          name: "event",
          isArray: false,
          type: {
            model: "Festival",
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetNames: ["eventID"],
          },
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "EventProfiles",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            name: "byUserProfile",
            fields: ["userProfileID"],
          },
        },
        {
          type: "key",
          properties: {
            name: "byEvent",
            fields: ["eventID"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    Festival: {
      name: "Festival",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        name: {
          name: "name",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        genre: {
          name: "genre",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        image: {
          name: "image",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        location: {
          name: "location",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        startDate: {
          name: "startDate",
          isArray: false,
          type: "AWSDate",
          isRequired: true,
          attributes: [],
        },
        endDate: {
          name: "endDate",
          isArray: false,
          type: "AWSDate",
          isRequired: true,
          attributes: [],
        },
        type: {
          name: "type",
          isArray: false,
          type: {
            enum: "EventType",
          },
          isRequired: false,
          attributes: [],
        },
        tagline: {
          name: "tagline",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        description: {
          name: "description",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        group: {
          name: "group",
          isArray: false,
          type: {
            model: "CollegeGroup",
          },
          isRequired: false,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetNames: ["groupID"],
          },
        },
        groupID: {
          name: "groupID",
          isArray: false,
          type: "ID",
          isRequired: false,
          attributes: [],
        },
        attendees: {
          name: "attendees",
          isArray: true,
          type: {
            model: "EventProfile",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: ["event"],
          },
        },
        rides: {
          name: "rides",
          isArray: true,
          type: {
            model: "Ride",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: ["event"],
          },
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Festivals",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            name: "byGroup",
            fields: ["groupID"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    UserProfile: {
      name: "UserProfile",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        firstName: {
          name: "firstName",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        lastName: {
          name: "lastName",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        userID: {
          name: "userID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        verified: {
          name: "verified",
          isArray: false,
          type: "Boolean",
          isRequired: true,
          attributes: [],
        },
        verifySubmitted: {
          name: "verifySubmitted",
          isArray: false,
          type: "Boolean",
          isRequired: true,
          attributes: [],
        },
        profileImage: {
          name: "profileImage",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        bannerPhoto: {
          name: "bannerPhoto",
          isArray: false,
          type: {
            model: "Photo",
          },
          isRequired: false,
          attributes: [],
          association: {
            connectionType: "HAS_ONE",
            associatedWith: ["id"],
            targetNames: ["userProfileBannerPhotoId"],
          },
        },
        city: {
          name: "city",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        state: {
          name: "state",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        school: {
          name: "school",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        address: {
          name: "address",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        address2: {
          name: "address2",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        phone: {
          name: "phone",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        username: {
          name: "username",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        email: {
          name: "email",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        zipcode: {
          name: "zipcode",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        attendingEvents: {
          name: "attendingEvents",
          isArray: true,
          type: {
            model: "EventProfile",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: ["userProfile"],
          },
        },
        rides: {
          name: "rides",
          isArray: true,
          type: {
            model: "RideUser",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: false,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: ["userProfile"],
          },
        },
        friends: {
          name: "friends",
          isArray: true,
          type: {
            model: "Friendship",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: ["userProfile"],
          },
        },
        conversations: {
          name: "conversations",
          isArray: true,
          type: {
            model: "Conversation",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: ["userProfile"],
          },
        },
        sentMessages: {
          name: "sentMessages",
          isArray: true,
          type: {
            model: "Message",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: ["sender"],
          },
        },
        receivedMessages: {
          name: "receivedMessages",
          isArray: true,
          type: {
            model: "Message",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: ["receiver"],
          },
        },
        photos: {
          name: "photos",
          isArray: true,
          type: {
            model: "Photo",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: ["userProfile"],
          },
        },
        collegeGroupId: {
          name: "collegeGroupId",
          isArray: false,
          type: "ID",
          isRequired: false,
          attributes: [],
        },
        collegeGroup: {
          name: "collegeGroup",
          isArray: false,
          type: {
            model: "CollegeGroup",
          },
          isRequired: false,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetNames: ["collegeGroupId"],
          },
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        userProfileBannerPhotoId: {
          name: "userProfileBannerPhotoId",
          isArray: false,
          type: "ID",
          isRequired: false,
          attributes: [],
        },
      },
      syncable: true,
      pluralName: "UserProfiles",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            name: "byCollegeGroup",
            fields: ["collegeGroupId"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    Ride: {
      name: "Ride",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        event: {
          name: "event",
          isArray: false,
          type: {
            model: "Festival",
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetNames: ["eventID"],
          },
        },
        eventID: {
          name: "eventID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        driver: {
          name: "driver",
          isArray: false,
          type: {
            model: "RideUser",
          },
          isRequired: false,
          attributes: [],
          association: {
            connectionType: "HAS_ONE",
            associatedWith: ["id"],
            targetNames: ["rideDriverId"],
          },
        },
        passengers: {
          name: "passengers",
          isArray: true,
          type: {
            model: "RideUser",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: ["ride"],
          },
        },
        maxPassengers: {
          name: "maxPassengers",
          isArray: false,
          type: "Int",
          isRequired: true,
          attributes: [],
        },
        departureTime: {
          name: "departureTime",
          isArray: false,
          type: "AWSDateTime",
          isRequired: true,
          attributes: [],
        },
        startPoint: {
          name: "startPoint",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        endPoint: {
          name: "endPoint",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        rideDriverId: {
          name: "rideDriverId",
          isArray: false,
          type: "ID",
          isRequired: false,
          attributes: [],
        },
      },
      syncable: true,
      pluralName: "Rides",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            name: "byEvent",
            fields: ["eventID"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    RideUser: {
      name: "RideUser",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        ride: {
          name: "ride",
          isArray: false,
          type: {
            model: "Ride",
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetNames: ["rideID"],
          },
        },
        rideID: {
          name: "rideID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        userProfile: {
          name: "userProfile",
          isArray: false,
          type: {
            model: "UserProfile",
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetNames: ["userProfileID"],
          },
        },
        userProfileID: {
          name: "userProfileID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        isDriver: {
          name: "isDriver",
          isArray: false,
          type: "Boolean",
          isRequired: true,
          attributes: [],
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "RideUsers",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            name: "byRide",
            fields: ["rideID"],
          },
        },
        {
          type: "key",
          properties: {
            name: "byUserProfile",
            fields: ["userProfileID"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    Photo: {
      name: "Photo",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        userProfileID: {
          name: "userProfileID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        userProfile: {
          name: "userProfile",
          isArray: false,
          type: {
            model: "UserProfile",
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetNames: ["userProfileID"],
          },
        },
        s3Key: {
          name: "s3Key",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        isPrivate: {
          name: "isPrivate",
          isArray: false,
          type: "Boolean",
          isRequired: true,
          attributes: [],
        },
        description: {
          name: "description",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        comments: {
          name: "comments",
          isArray: true,
          type: {
            model: "PhotoComment",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: ["photo"],
          },
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Photos",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            name: "byUserProfile",
            fields: ["userProfileID"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    PhotoComment: {
      name: "PhotoComment",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        content: {
          name: "content",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        photoID: {
          name: "photoID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        photo: {
          name: "photo",
          isArray: false,
          type: {
            model: "Photo",
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetNames: ["photoID"],
          },
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "PhotoComments",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            name: "byPhoto",
            fields: ["photoID"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    Friendship: {
      name: "Friendship",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        userProfileID: {
          name: "userProfileID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        friendProfileID: {
          name: "friendProfileID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        isAccepted: {
          name: "isAccepted",
          isArray: false,
          type: "Boolean",
          isRequired: true,
          attributes: [],
        },
        userProfile: {
          name: "userProfile",
          isArray: false,
          type: {
            model: "UserProfile",
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetNames: ["userProfileID"],
          },
        },
        friendProfile: {
          name: "friendProfile",
          isArray: false,
          type: {
            model: "UserProfile",
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetNames: ["friendProfileID"],
          },
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Friendships",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            name: "byUserProfile",
            fields: ["userProfileID"],
          },
        },
        {
          type: "key",
          properties: {
            name: "byFriend",
            fields: ["friendProfileID"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    Conversation: {
      name: "Conversation",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        userProfileID: {
          name: "userProfileID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        friendProfileID: {
          name: "friendProfileID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        userProfile: {
          name: "userProfile",
          isArray: false,
          type: {
            model: "UserProfile",
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetNames: ["userProfileID"],
          },
        },
        friendProfile: {
          name: "friendProfile",
          isArray: false,
          type: {
            model: "UserProfile",
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetNames: ["friendProfileID"],
          },
        },
        messages: {
          name: "messages",
          isArray: true,
          type: {
            model: "Message",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: ["conversation"],
          },
        },
        unreadMessage: {
          name: "unreadMessage",
          isArray: false,
          type: "Boolean",
          isRequired: false,
          attributes: [],
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Conversations",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            name: "byUserProfile",
            fields: ["userProfileID"],
          },
        },
        {
          type: "key",
          properties: {
            name: "friendProfile",
            fields: ["friendProfileID"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    CollegeGroup: {
      name: "CollegeGroup",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        name: {
          name: "name",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        domain: {
          name: "domain",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        webPage: {
          name: "webPage",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        countryCode: {
          name: "countryCode",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        events: {
          name: "events",
          isArray: true,
          type: {
            model: "Festival",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: ["group"],
          },
        },
        members: {
          name: "members",
          isArray: true,
          type: {
            model: "UserProfile",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: ["collegeGroup"],
          },
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "CollegeGroups",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
  },
  enums: {
    FriendshipStatus: {
      name: "FriendshipStatus",
      values: ["REQUESTED", "ACCEPTED"],
    },
    EventType: {
      name: "EventType",
      values: [
        "CONCERT",
        "FESTIVAL",
        "SPORT",
        "BUSINESS",
        "COLLEGE",
        "MUSIC",
        "ALL",
      ],
    },
  },
  nonModels: {},
  codegenVersion: "3.4.2",
  version: "76ff8b960161f36b51e47be8694b95e7",
};
