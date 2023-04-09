import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





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
  readonly UserProfiles?: (FestivalUserProfile | null)[] | null;
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
  readonly UserProfiles: AsyncCollection<FestivalUserProfile>;
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
  readonly user: string;
  readonly festivals?: (FestivalUserProfile | null)[] | null;
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
  readonly user: string;
  readonly festivals: AsyncCollection<FestivalUserProfile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile>) => MutableModel<UserProfile> | void): UserProfile;
}

type EagerFestivalUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FestivalUserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly festivalId?: string | null;
  readonly userProfileId?: string | null;
  readonly festival: Festival;
  readonly userProfile: UserProfile;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFestivalUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FestivalUserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly festivalId?: string | null;
  readonly userProfileId?: string | null;
  readonly festival: AsyncItem<Festival>;
  readonly userProfile: AsyncItem<UserProfile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FestivalUserProfile = LazyLoading extends LazyLoadingDisabled ? EagerFestivalUserProfile : LazyFestivalUserProfile

export declare const FestivalUserProfile: (new (init: ModelInit<FestivalUserProfile>) => FestivalUserProfile) & {
  copyOf(source: FestivalUserProfile, mutator: (draft: MutableModel<FestivalUserProfile>) => MutableModel<FestivalUserProfile> | void): FestivalUserProfile;
}