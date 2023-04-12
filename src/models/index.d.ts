import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerMessage = {
  readonly toUser: string;
  readonly fromUser: string;
  readonly messageText: string;
  readonly conversationID: string;
}

type LazyMessage = {
  readonly toUser: string;
  readonly fromUser: string;
  readonly messageText: string;
  readonly conversationID: string;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message)

type EagerConversation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Conversation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly messages?: (Message | null)[] | null;
  readonly userIDs?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConversation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Conversation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly messages?: (Message | null)[] | null;
  readonly userIDs?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Conversation = LazyLoading extends LazyLoadingDisabled ? EagerConversation : LazyConversation

export declare const Conversation: (new (init: ModelInit<Conversation>) => Conversation) & {
  copyOf(source: Conversation, mutator: (draft: MutableModel<Conversation>) => MutableModel<Conversation> | void): Conversation;
}

type EagerFriendsList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FriendsList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userIDs?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFriendsList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FriendsList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userIDs?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FriendsList = LazyLoading extends LazyLoadingDisabled ? EagerFriendsList : LazyFriendsList

export declare const FriendsList: (new (init: ModelInit<FriendsList>) => FriendsList) & {
  copyOf(source: FriendsList, mutator: (draft: MutableModel<FriendsList>) => MutableModel<FriendsList> | void): FriendsList;
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
  readonly location: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly userIDs?: string[] | null;
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
  readonly location: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly userIDs?: string[] | null;
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
  readonly firstName: string;
  readonly lastName: string;
  readonly userID: string;
  readonly verified: boolean;
  readonly verifySubmitted: boolean;
  readonly profileImage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly userID: string;
  readonly verified: boolean;
  readonly verifySubmitted: boolean;
  readonly profileImage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile>) => MutableModel<UserProfile> | void): UserProfile;
}