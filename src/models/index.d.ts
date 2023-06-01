import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum FriendshipStatus {
  REQUESTED = "REQUESTED",
  ACCEPTED = "ACCEPTED"
}

export enum EventType {
  SPORT = "SPORT",
  BUSINESS = "BUSINESS",
  COLLEGE = "COLLEGE",
  MUSIC = "MUSIC",
  ALL = "ALL",
  TRAVEL = "TRAVEL"
}

export enum SocialMediaType {
  FACEBOOK = "FACEBOOK",
  TWITTER = "TWITTER",
  INSTAGRAM = "INSTAGRAM"
}



type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly senderID: string;
  readonly receiverID: string;
  readonly conversationID: string;
  readonly sender: UserProfile;
  readonly receiver: UserProfile;
  readonly conversation: Conversation;
  readonly unreadMessage?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly senderID: string;
  readonly receiverID: string;
  readonly conversationID: string;
  readonly sender: AsyncItem<UserProfile>;
  readonly receiver: AsyncItem<UserProfile>;
  readonly conversation: AsyncItem<Conversation>;
  readonly unreadMessage?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerEventProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EventProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userProfileID: string;
  readonly eventID: string;
  readonly userProfile: UserProfile;
  readonly event: Festival;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEventProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EventProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userProfileID: string;
  readonly eventID: string;
  readonly userProfile: AsyncItem<UserProfile>;
  readonly event: AsyncItem<Festival>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EventProfile = LazyLoading extends LazyLoadingDisabled ? EagerEventProfile : LazyEventProfile

export declare const EventProfile: (new (init: ModelInit<EventProfile>) => EventProfile) & {
  copyOf(source: EventProfile, mutator: (draft: MutableModel<EventProfile>) => MutableModel<EventProfile> | void): EventProfile;
}

type EagerFestival = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Festival, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly genre: string;
  readonly image: string;
  readonly location?: string | null;
  readonly state: string;
  readonly city: string;
  readonly address: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly type?: EventType | keyof typeof EventType | null;
  readonly description?: string | null;
  readonly url?: string | null;
  readonly approved?: boolean | null;
  readonly group?: CollegeGroup | null;
  readonly groupID?: string | null;
  readonly attendees?: (EventProfile | null)[] | null;
  readonly rides?: (Ride | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFestival = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Festival, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly genre: string;
  readonly image: string;
  readonly location?: string | null;
  readonly state: string;
  readonly city: string;
  readonly address: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly type?: EventType | keyof typeof EventType | null;
  readonly description?: string | null;
  readonly url?: string | null;
  readonly approved?: boolean | null;
  readonly group: AsyncItem<CollegeGroup | undefined>;
  readonly groupID?: string | null;
  readonly attendees: AsyncCollection<EventProfile>;
  readonly rides: AsyncCollection<Ride>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Festival = LazyLoading extends LazyLoadingDisabled ? EagerFestival : LazyFestival

export declare const Festival: (new (init: ModelInit<Festival>) => Festival) & {
  copyOf(source: Festival, mutator: (draft: MutableModel<Festival>) => MutableModel<Festival> | void): Festival;
}

type EagerUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly verified?: boolean | null;
  readonly verifySubmitted?: boolean | null;
  readonly profilePhotoID?: string | null;
  readonly bannerPhotoID?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly school?: string | null;
  readonly address?: string | null;
  readonly address2?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly zipcode?: string | null;
  readonly attendingEvents?: (EventProfile | null)[] | null;
  readonly rides?: (RideUser | null)[] | null;
  readonly friends?: (Friendship | null)[] | null;
  readonly conversations?: (Conversation | null)[] | null;
  readonly sentMessages?: (Message | null)[] | null;
  readonly receivedMessages?: (Message | null)[] | null;
  readonly photos?: (Photo | null)[] | null;
  readonly collegeGroupId?: string | null;
  readonly collegeGroup?: CollegeGroup | null;
  readonly privacySettingID?: string | null;
  readonly privacySetting?: PrivacySetting | null;
  readonly socialMedia?: (SocialMedia | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly verified?: boolean | null;
  readonly verifySubmitted?: boolean | null;
  readonly profilePhotoID?: string | null;
  readonly bannerPhotoID?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly school?: string | null;
  readonly address?: string | null;
  readonly address2?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly zipcode?: string | null;
  readonly attendingEvents: AsyncCollection<EventProfile>;
  readonly rides: AsyncCollection<RideUser>;
  readonly friends: AsyncCollection<Friendship>;
  readonly conversations: AsyncCollection<Conversation>;
  readonly sentMessages: AsyncCollection<Message>;
  readonly receivedMessages: AsyncCollection<Message>;
  readonly photos: AsyncCollection<Photo>;
  readonly collegeGroupId?: string | null;
  readonly collegeGroup: AsyncItem<CollegeGroup | undefined>;
  readonly privacySettingID?: string | null;
  readonly privacySetting: AsyncItem<PrivacySetting | undefined>;
  readonly socialMedia: AsyncCollection<SocialMedia>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile>) => MutableModel<UserProfile> | void): UserProfile;
}

type EagerSocialMedia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SocialMedia, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userProfileID: string;
  readonly userProfile?: UserProfile | null;
  readonly socialMediaType: string;
  readonly accountURL: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySocialMedia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SocialMedia, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userProfileID: string;
  readonly userProfile: AsyncItem<UserProfile | undefined>;
  readonly socialMediaType: string;
  readonly accountURL: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SocialMedia = LazyLoading extends LazyLoadingDisabled ? EagerSocialMedia : LazySocialMedia

export declare const SocialMedia: (new (init: ModelInit<SocialMedia>) => SocialMedia) & {
  copyOf(source: SocialMedia, mutator: (draft: MutableModel<SocialMedia>) => MutableModel<SocialMedia> | void): SocialMedia;
}

type EagerPrivacySetting = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PrivacySetting, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly city?: boolean | null;
  readonly state?: boolean | null;
  readonly school?: boolean | null;
  readonly email?: boolean | null;
  readonly attendingEvents?: boolean | null;
  readonly rides?: boolean | null;
  readonly friends?: boolean | null;
  readonly photos?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPrivacySetting = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PrivacySetting, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly city?: boolean | null;
  readonly state?: boolean | null;
  readonly school?: boolean | null;
  readonly email?: boolean | null;
  readonly attendingEvents?: boolean | null;
  readonly rides?: boolean | null;
  readonly friends?: boolean | null;
  readonly photos?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PrivacySetting = LazyLoading extends LazyLoadingDisabled ? EagerPrivacySetting : LazyPrivacySetting

export declare const PrivacySetting: (new (init: ModelInit<PrivacySetting>) => PrivacySetting) & {
  copyOf(source: PrivacySetting, mutator: (draft: MutableModel<PrivacySetting>) => MutableModel<PrivacySetting> | void): PrivacySetting;
}

type EagerRide = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ride, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly event: Festival;
  readonly eventID: string;
  readonly driver?: RideUser | null;
  readonly passengers?: (RideUser | null)[] | null;
  readonly maxPassengers: number;
  readonly departureTime: string;
  readonly startPoint: string;
  readonly endPoint: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly rideDriverId?: string | null;
}

type LazyRide = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ride, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly event: AsyncItem<Festival>;
  readonly eventID: string;
  readonly driver: AsyncItem<RideUser | undefined>;
  readonly passengers: AsyncCollection<RideUser>;
  readonly maxPassengers: number;
  readonly departureTime: string;
  readonly startPoint: string;
  readonly endPoint: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly rideDriverId?: string | null;
}

export declare type Ride = LazyLoading extends LazyLoadingDisabled ? EagerRide : LazyRide

export declare const Ride: (new (init: ModelInit<Ride>) => Ride) & {
  copyOf(source: Ride, mutator: (draft: MutableModel<Ride>) => MutableModel<Ride> | void): Ride;
}

type EagerRideUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RideUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ride: Ride;
  readonly rideID: string;
  readonly userProfile: UserProfile;
  readonly userProfileID: string;
  readonly isDriver: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRideUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RideUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ride: AsyncItem<Ride>;
  readonly rideID: string;
  readonly userProfile: AsyncItem<UserProfile>;
  readonly userProfileID: string;
  readonly isDriver: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RideUser = LazyLoading extends LazyLoadingDisabled ? EagerRideUser : LazyRideUser

export declare const RideUser: (new (init: ModelInit<RideUser>) => RideUser) & {
  copyOf(source: RideUser, mutator: (draft: MutableModel<RideUser>) => MutableModel<RideUser> | void): RideUser;
}

type EagerPhoto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Photo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userProfileID: string;
  readonly userProfile?: UserProfile | null;
  readonly s3Key: string;
  readonly isPrivate: boolean;
  readonly identityId: string;
  readonly description?: string | null;
  readonly comments?: (PhotoComment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPhoto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Photo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userProfileID: string;
  readonly userProfile: AsyncItem<UserProfile | undefined>;
  readonly s3Key: string;
  readonly isPrivate: boolean;
  readonly identityId: string;
  readonly description?: string | null;
  readonly comments: AsyncCollection<PhotoComment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Photo = LazyLoading extends LazyLoadingDisabled ? EagerPhoto : LazyPhoto

export declare const Photo: (new (init: ModelInit<Photo>) => Photo) & {
  copyOf(source: Photo, mutator: (draft: MutableModel<Photo>) => MutableModel<Photo> | void): Photo;
}

type EagerPhotoComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PhotoComment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly photoID: string;
  readonly photo: Photo;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPhotoComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PhotoComment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly photoID: string;
  readonly photo: AsyncItem<Photo>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PhotoComment = LazyLoading extends LazyLoadingDisabled ? EagerPhotoComment : LazyPhotoComment

export declare const PhotoComment: (new (init: ModelInit<PhotoComment>) => PhotoComment) & {
  copyOf(source: PhotoComment, mutator: (draft: MutableModel<PhotoComment>) => MutableModel<PhotoComment> | void): PhotoComment;
}

type EagerFriendship = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Friendship, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userProfileID: string;
  readonly friendProfileID: string;
  readonly isAccepted: boolean;
  readonly userProfile: UserProfile;
  readonly friendProfile: UserProfile;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFriendship = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Friendship, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userProfileID: string;
  readonly friendProfileID: string;
  readonly isAccepted: boolean;
  readonly userProfile: AsyncItem<UserProfile>;
  readonly friendProfile: AsyncItem<UserProfile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Friendship = LazyLoading extends LazyLoadingDisabled ? EagerFriendship : LazyFriendship

export declare const Friendship: (new (init: ModelInit<Friendship>) => Friendship) & {
  copyOf(source: Friendship, mutator: (draft: MutableModel<Friendship>) => MutableModel<Friendship> | void): Friendship;
}

type EagerConversation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Conversation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userProfileID: string;
  readonly friendProfileID: string;
  readonly userProfile: UserProfile;
  readonly friendProfile: UserProfile;
  readonly messages?: (Message | null)[] | null;
  readonly unreadMessage?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConversation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Conversation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userProfileID: string;
  readonly friendProfileID: string;
  readonly userProfile: AsyncItem<UserProfile>;
  readonly friendProfile: AsyncItem<UserProfile>;
  readonly messages: AsyncCollection<Message>;
  readonly unreadMessage?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Conversation = LazyLoading extends LazyLoadingDisabled ? EagerConversation : LazyConversation

export declare const Conversation: (new (init: ModelInit<Conversation>) => Conversation) & {
  copyOf(source: Conversation, mutator: (draft: MutableModel<Conversation>) => MutableModel<Conversation> | void): Conversation;
}

type EagerCollegeGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CollegeGroup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly domain: string;
  readonly webPage?: string | null;
  readonly countryCode?: string | null;
  readonly events?: (Festival | null)[] | null;
  readonly members?: (UserProfile | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCollegeGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CollegeGroup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly domain: string;
  readonly webPage?: string | null;
  readonly countryCode?: string | null;
  readonly events: AsyncCollection<Festival>;
  readonly members: AsyncCollection<UserProfile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CollegeGroup = LazyLoading extends LazyLoadingDisabled ? EagerCollegeGroup : LazyCollegeGroup

export declare const CollegeGroup: (new (init: ModelInit<CollegeGroup>) => CollegeGroup) & {
  copyOf(source: CollegeGroup, mutator: (draft: MutableModel<CollegeGroup>) => MutableModel<CollegeGroup> | void): CollegeGroup;
}