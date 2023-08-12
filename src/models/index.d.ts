import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum EventType {
  SPORT = "SPORT",
  BUSINESS = "BUSINESS",
  MUSIC = "MUSIC",
  TRAVEL = "TRAVEL"
}

export enum SocialMediaType {
  FACEBOOK = "FACEBOOK",
  TWITTER = "TWITTER",
  INSTAGRAM = "INSTAGRAM"
}



type EagerProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly verified?: boolean | null;
  readonly submitted?: boolean | null;
  readonly brandSubmitted?: boolean | null;
  readonly profilePhotoID?: string | null;
  readonly bannerPhotoID?: string | null;
  readonly verifyPhotoID?: string | null;
  readonly customerID?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly school?: string | null;
  readonly address?: string | null;
  readonly address2?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly zipcode?: string | null;
  readonly birthDate?: string | null;
  readonly hobbies?: string | null;
  readonly gender?: string | null;
  readonly lastEventNotification?: string | null;
  readonly events?: (EventProfile | null)[] | null;
  readonly rides?: (RideProfile | null)[] | null;
  readonly friends?: (Friendship | null)[] | null;
  readonly conversations?: (Conversation | null)[] | null;
  readonly photos?: (Photo | null)[] | null;
  readonly groupID?: string | null;
  readonly group?: Group | null;
  readonly privacySetting?: PrivacySetting | null;
  readonly socialMedia?: (SocialMedia | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly profilePrivacySettingId?: string | null;
}

type LazyProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly verified?: boolean | null;
  readonly submitted?: boolean | null;
  readonly brandSubmitted?: boolean | null;
  readonly profilePhotoID?: string | null;
  readonly bannerPhotoID?: string | null;
  readonly verifyPhotoID?: string | null;
  readonly customerID?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly school?: string | null;
  readonly address?: string | null;
  readonly address2?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly zipcode?: string | null;
  readonly birthDate?: string | null;
  readonly hobbies?: string | null;
  readonly gender?: string | null;
  readonly lastEventNotification?: string | null;
  readonly events: AsyncCollection<EventProfile>;
  readonly rides: AsyncCollection<RideProfile>;
  readonly friends: AsyncCollection<Friendship>;
  readonly conversations: AsyncCollection<Conversation>;
  readonly photos: AsyncCollection<Photo>;
  readonly groupID?: string | null;
  readonly group: AsyncItem<Group | undefined>;
  readonly privacySetting: AsyncItem<PrivacySetting | undefined>;
  readonly socialMedia: AsyncCollection<SocialMedia>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly profilePrivacySettingId?: string | null;
}

export declare type Profile = LazyLoading extends LazyLoadingDisabled ? EagerProfile : LazyProfile

export declare const Profile: (new (init: ModelInit<Profile>) => Profile) & {
  copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}

type EagerSocialMedia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SocialMedia, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly socialMediaType: string;
  readonly accountURL: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly profileSocialMediaId?: string | null;
}

type LazySocialMedia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SocialMedia, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly socialMediaType: string;
  readonly accountURL: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly profileSocialMediaId?: string | null;
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
  readonly events?: boolean | null;
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
  readonly events?: boolean | null;
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

type EagerEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly genre: string;
  readonly image: string;
  readonly state?: string | null;
  readonly city: string;
  readonly country?: string | null;
  readonly latitude?: number | null;
  readonly longitude?: number | null;
  readonly startDate: string;
  readonly endDate: string;
  readonly type: EventType | keyof typeof EventType;
  readonly address?: string | null;
  readonly description?: string | null;
  readonly url?: string | null;
  readonly customerID?: string | null;
  readonly ticketURL?: string | null;
  readonly boost?: boolean | null;
  readonly collegeEvent?: boolean | null;
  readonly hasPaid?: boolean | null;
  readonly cancelled?: boolean | null;
  readonly approved?: boolean | null;
  readonly subscriptionID?: string | null;
  readonly group?: Group | null;
  readonly groupID?: string | null;
  readonly attendees?: (EventProfile | null)[] | null;
  readonly rides?: (Ride | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly genre: string;
  readonly image: string;
  readonly state?: string | null;
  readonly city: string;
  readonly country?: string | null;
  readonly latitude?: number | null;
  readonly longitude?: number | null;
  readonly startDate: string;
  readonly endDate: string;
  readonly type: EventType | keyof typeof EventType;
  readonly address?: string | null;
  readonly description?: string | null;
  readonly url?: string | null;
  readonly customerID?: string | null;
  readonly ticketURL?: string | null;
  readonly boost?: boolean | null;
  readonly collegeEvent?: boolean | null;
  readonly hasPaid?: boolean | null;
  readonly cancelled?: boolean | null;
  readonly approved?: boolean | null;
  readonly subscriptionID?: string | null;
  readonly group: AsyncItem<Group | undefined>;
  readonly groupID?: string | null;
  readonly attendees: AsyncCollection<EventProfile>;
  readonly rides: AsyncCollection<Ride>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}

type EagerRide = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ride, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly event: Event;
  readonly eventID: string;
  readonly driverProfileID: string;
  readonly passengers?: (RideProfile | null)[] | null;
  readonly maxPassengers: number;
  readonly departureTime: string;
  readonly startPoint: string;
  readonly endPoint: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRide = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ride, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly event: AsyncItem<Event>;
  readonly eventID: string;
  readonly driverProfileID: string;
  readonly passengers: AsyncCollection<RideProfile>;
  readonly maxPassengers: number;
  readonly departureTime: string;
  readonly startPoint: string;
  readonly endPoint: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ride = LazyLoading extends LazyLoadingDisabled ? EagerRide : LazyRide

export declare const Ride: (new (init: ModelInit<Ride>) => Ride) & {
  copyOf(source: Ride, mutator: (draft: MutableModel<Ride>) => MutableModel<Ride> | void): Ride;
}

type EagerPhoto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Photo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly profileID: string;
  readonly profile?: Profile | null;
  readonly s3Key: string;
  readonly isPrivate?: boolean | null;
  readonly identityId?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPhoto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Photo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly profileID: string;
  readonly profile: AsyncItem<Profile | undefined>;
  readonly s3Key: string;
  readonly isPrivate?: boolean | null;
  readonly identityId?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Photo = LazyLoading extends LazyLoadingDisabled ? EagerPhoto : LazyPhoto

export declare const Photo: (new (init: ModelInit<Photo>) => Photo) & {
  copyOf(source: Photo, mutator: (draft: MutableModel<Photo>) => MutableModel<Photo> | void): Photo;
}

type EagerFriendship = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Friendship, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly profile: Profile;
  readonly profileID: string;
  readonly friendProfile: Profile;
  readonly friendProfileID: string;
  readonly isAccepted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFriendship = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Friendship, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly profile: AsyncItem<Profile>;
  readonly profileID: string;
  readonly friendProfile: AsyncItem<Profile>;
  readonly friendProfileID: string;
  readonly isAccepted?: boolean | null;
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
  readonly profileID: string;
  readonly friendProfileID: string;
  readonly profile: Profile;
  readonly friendProfile: Profile;
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
  readonly profileID: string;
  readonly friendProfileID: string;
  readonly profile: AsyncItem<Profile>;
  readonly friendProfile: AsyncItem<Profile>;
  readonly messages: AsyncCollection<Message>;
  readonly unreadMessage?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Conversation = LazyLoading extends LazyLoadingDisabled ? EagerConversation : LazyConversation

export declare const Conversation: (new (init: ModelInit<Conversation>) => Conversation) & {
  copyOf(source: Conversation, mutator: (draft: MutableModel<Conversation>) => MutableModel<Conversation> | void): Conversation;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly senderProfileID: string;
  readonly receiverProfileID: string;
  readonly unread?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly conversationMessagesId?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly senderProfileID: string;
  readonly receiverProfileID: string;
  readonly unread?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly conversationMessagesId?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Group, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly domain: string;
  readonly webPage: string;
  readonly events: (Event | null)[];
  readonly members: (Profile | null)[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Group, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly domain: string;
  readonly webPage: string;
  readonly events: AsyncCollection<Event>;
  readonly members: AsyncCollection<Profile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Group = LazyLoading extends LazyLoadingDisabled ? EagerGroup : LazyGroup

export declare const Group: (new (init: ModelInit<Group>) => Group) & {
  copyOf(source: Group, mutator: (draft: MutableModel<Group>) => MutableModel<Group> | void): Group;
}

type EagerEventProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EventProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly profileId?: string | null;
  readonly eventId?: string | null;
  readonly profile: Profile;
  readonly event: Event;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEventProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EventProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly profileId?: string | null;
  readonly eventId?: string | null;
  readonly profile: AsyncItem<Profile>;
  readonly event: AsyncItem<Event>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EventProfile = LazyLoading extends LazyLoadingDisabled ? EagerEventProfile : LazyEventProfile

export declare const EventProfile: (new (init: ModelInit<EventProfile>) => EventProfile) & {
  copyOf(source: EventProfile, mutator: (draft: MutableModel<EventProfile>) => MutableModel<EventProfile> | void): EventProfile;
}

type EagerRideProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RideProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly profileId?: string | null;
  readonly rideId?: string | null;
  readonly profile: Profile;
  readonly ride: Ride;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRideProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RideProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly profileId?: string | null;
  readonly rideId?: string | null;
  readonly profile: AsyncItem<Profile>;
  readonly ride: AsyncItem<Ride>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RideProfile = LazyLoading extends LazyLoadingDisabled ? EagerRideProfile : LazyRideProfile

export declare const RideProfile: (new (init: ModelInit<RideProfile>) => RideProfile) & {
  copyOf(source: RideProfile, mutator: (draft: MutableModel<RideProfile>) => MutableModel<RideProfile> | void): RideProfile;
}