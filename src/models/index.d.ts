import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text: string;
  readonly senderID: string;
  readonly conversationID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text: string;
  readonly senderID: string;
  readonly conversationID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerConversation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Conversation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly participants?: string[] | null;
  readonly Messages?: (Message | null)[] | null;
  readonly lastMessage?: string | null;
  readonly lastMessageCreatedAt?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConversation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Conversation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly participants?: string[] | null;
  readonly Messages: AsyncCollection<Message>;
  readonly lastMessage?: string | null;
  readonly lastMessageCreatedAt?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Conversation = LazyLoading extends LazyLoadingDisabled ? EagerConversation : LazyConversation

export declare const Conversation: (new (init: ModelInit<Conversation>) => Conversation) & {
  copyOf(source: Conversation, mutator: (draft: MutableModel<Conversation>) => MutableModel<Conversation> | void): Conversation;
}

type EagerFriends = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Friends, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly friendID: string;
  readonly status: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFriends = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Friends, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly friendID: string;
  readonly status: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Friends = LazyLoading extends LazyLoadingDisabled ? EagerFriends : LazyFriends

export declare const Friends: (new (init: ModelInit<Friends>) => Friends) & {
  copyOf(source: Friends, mutator: (draft: MutableModel<Friends>) => MutableModel<Friends> | void): Friends;
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
  readonly attendants?: string[] | null;
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
  readonly attendants?: string[] | null;
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
  readonly city?: string | null;
  readonly state?: string | null;
  readonly school?: string | null;
  readonly festivalsAttending?: string[] | null;
  readonly festivalsAttended?: string[] | null;
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
  readonly city?: string | null;
  readonly state?: string | null;
  readonly school?: string | null;
  readonly festivalsAttending?: string[] | null;
  readonly festivalsAttended?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile>) => MutableModel<UserProfile> | void): UserProfile;
}