import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = undefined | T;
export type InputMaybe<T> = undefined | T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BlogCommentItem = CreatedAt & UpdatedAt & {
  __typename?: 'BlogCommentItem';
  author?: Maybe<Scalars['String']>;
  blogItemId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type BlogCommentItemResult = Count & Error & {
  __typename?: 'BlogCommentItemResult';
  count?: Maybe<Scalars['Int']>;
  data?: Maybe<BlogCommentItem>;
  error?: Maybe<Scalars['String']>;
};

export type BlogCommentItemUpdate = {
  author?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

export type BlogItem = CreatedAt & UpdatedAt & {
  __typename?: 'BlogItem';
  comments?: Maybe<Array<Maybe<BlogCommentItemResult>>>;
  createdAt?: Maybe<Scalars['String']>;
  imageUri?: Maybe<Scalars['String']>;
  itemId?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type BlogItemResult = Count & Error & {
  __typename?: 'BlogItemResult';
  count?: Maybe<Scalars['Int']>;
  data?: Maybe<BlogItem>;
  error?: Maybe<Scalars['String']>;
};

export type BlogItemUpdate = {
  imageUri?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CommentsFilter = {
  author?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

export type Coordinates = {
  __typename?: 'Coordinates';
  coordinates?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type Count = {
  count?: Maybe<Scalars['Int']>;
};

export type CreatedAt = {
  createdAt?: Maybe<Scalars['String']>;
};

export type Error = {
  error?: Maybe<Scalars['String']>;
};

export type GeoItem = {
  __typename?: 'GeoItem';
  address?: Maybe<Scalars['String']>;
  importance?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
};

export type GeoResult = Count & Error & {
  __typename?: 'GeoResult';
  count?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Maybe<GeoItem>>>;
  error?: Maybe<Scalars['String']>;
};

export type Item = {
  __typename?: 'Item';
  city?: Maybe<Scalars['String']>;
  combinedStudy?: Maybe<Scalars['Boolean']>;
  contact?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  educationStyle?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  inRegistry?: Maybe<Scalars['Boolean']>;
  individualTuition?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Coordinates>;
  phone?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  remoteStudy?: Maybe<Scalars['Boolean']>;
  street?: Maybe<Scalars['String']>;
  subType?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
};

export type ItemResult = Count & Error & {
  __typename?: 'ItemResult';
  count?: Maybe<Scalars['Int']>;
  data?: Maybe<Item>;
  error?: Maybe<Scalars['String']>;
};

export type ItemsFilter = {
  educationStyle?: InputMaybe<Scalars['String']>;
  entity?: InputMaybe<Scalars['String']>;
  evaluation?: InputMaybe<Scalars['String']>;
  inRegistry?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ItemsResult = Count & Error & {
  __typename?: 'ItemsResult';
  count?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Maybe<Item>>>;
  error?: Maybe<Scalars['String']>;
};

export type Location = {
  lat?: InputMaybe<Scalars['Float']>;
  lon?: InputMaybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBlogCommentItem?: Maybe<BlogCommentItemResult>;
  addBlogItem?: Maybe<BlogItemResult>;
  updateBlogCommentItem?: Maybe<BlogCommentItemResult>;
  updateBlogItem?: Maybe<BlogItemResult>;
  updateGeoItem?: Maybe<ItemResult>;
};


export type MutationAddBlogCommentItemArgs = {
  item?: InputMaybe<NewBlogCommentItem>;
};


export type MutationAddBlogItemArgs = {
  item?: InputMaybe<NewBlogItem>;
};


export type MutationUpdateBlogCommentItemArgs = {
  id: Scalars['ID'];
  item?: InputMaybe<BlogCommentItemUpdate>;
};


export type MutationUpdateBlogItemArgs = {
  id: Scalars['ID'];
  item?: InputMaybe<BlogItemUpdate>;
};


export type MutationUpdateGeoItemArgs = {
  id?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Location>;
};

export type NewBlogCommentItem = {
  author: Scalars['String'];
  blogItemId: Scalars['String'];
  text: Scalars['String'];
};

export type NewBlogItem = {
  imageUri?: InputMaybe<Scalars['String']>;
  itemId: Scalars['String'];
  text: Scalars['String'];
  title: Scalars['String'];
};

export type Page = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  filterItems?: Maybe<ItemsResult>;
  getBlogItem?: Maybe<BlogItemResult>;
  /** Bojetice 101, Dobrovice, 29441 */
  getGeo?: Maybe<GeoResult>;
  getItem?: Maybe<ItemResult>;
  searchItemsByGeo?: Maybe<ItemsResult>;
  searchItemsByText?: Maybe<ItemsResult>;
  status?: Maybe<Scalars['String']>;
};


export type QueryFilterItemsArgs = {
  filter?: InputMaybe<ItemsFilter>;
  page?: InputMaybe<Page>;
  sort?: InputMaybe<Sort>;
};


export type QueryGetBlogItemArgs = {
  commentsFilter?: InputMaybe<CommentsFilter>;
  commentsPage?: InputMaybe<Page>;
  commentsSort?: InputMaybe<Sort>;
  id: Scalars['ID'];
};


export type QueryGetGeoArgs = {
  address?: InputMaybe<Scalars['String']>;
};


export type QueryGetItemArgs = {
  id: Scalars['String'];
};


export type QuerySearchItemsByGeoArgs = {
  location?: InputMaybe<Location>;
  page?: InputMaybe<Page>;
};


export type QuerySearchItemsByTextArgs = {
  page?: InputMaybe<Page>;
  search?: InputMaybe<Search>;
  sort?: InputMaybe<Sort>;
};

export type Search = {
  value?: InputMaybe<Scalars['String']>;
};

export type Sort = {
  dir?: InputMaybe<Scalars['Int']>;
  field?: InputMaybe<Scalars['String']>;
};

export type UpdatedAt = {
  updatedAt?: Maybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  BlogCommentItem: ResolverTypeWrapper<BlogCommentItem>;
  BlogCommentItemResult: ResolverTypeWrapper<BlogCommentItemResult>;
  BlogCommentItemUpdate: BlogCommentItemUpdate;
  BlogItem: ResolverTypeWrapper<BlogItem>;
  BlogItemResult: ResolverTypeWrapper<BlogItemResult>;
  BlogItemUpdate: BlogItemUpdate;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CommentsFilter: CommentsFilter;
  Coordinates: ResolverTypeWrapper<Coordinates>;
  Count: ResolversTypes['BlogCommentItemResult'] | ResolversTypes['BlogItemResult'] | ResolversTypes['GeoResult'] | ResolversTypes['ItemResult'] | ResolversTypes['ItemsResult'];
  CreatedAt: ResolversTypes['BlogCommentItem'] | ResolversTypes['BlogItem'];
  Error: ResolversTypes['BlogCommentItemResult'] | ResolversTypes['BlogItemResult'] | ResolversTypes['GeoResult'] | ResolversTypes['ItemResult'] | ResolversTypes['ItemsResult'];
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GeoItem: ResolverTypeWrapper<GeoItem>;
  GeoResult: ResolverTypeWrapper<GeoResult>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Item: ResolverTypeWrapper<Item>;
  ItemResult: ResolverTypeWrapper<ItemResult>;
  ItemsFilter: ItemsFilter;
  ItemsResult: ResolverTypeWrapper<ItemsResult>;
  Location: Location;
  Mutation: ResolverTypeWrapper<{}>;
  NewBlogCommentItem: NewBlogCommentItem;
  NewBlogItem: NewBlogItem;
  Page: Page;
  Query: ResolverTypeWrapper<{}>;
  Search: Search;
  Sort: Sort;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdatedAt: ResolversTypes['BlogCommentItem'] | ResolversTypes['BlogItem'];
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BlogCommentItem: BlogCommentItem;
  BlogCommentItemResult: BlogCommentItemResult;
  BlogCommentItemUpdate: BlogCommentItemUpdate;
  BlogItem: BlogItem;
  BlogItemResult: BlogItemResult;
  BlogItemUpdate: BlogItemUpdate;
  Boolean: Scalars['Boolean'];
  CommentsFilter: CommentsFilter;
  Coordinates: Coordinates;
  Count: ResolversParentTypes['BlogCommentItemResult'] | ResolversParentTypes['BlogItemResult'] | ResolversParentTypes['GeoResult'] | ResolversParentTypes['ItemResult'] | ResolversParentTypes['ItemsResult'];
  CreatedAt: ResolversParentTypes['BlogCommentItem'] | ResolversParentTypes['BlogItem'];
  Error: ResolversParentTypes['BlogCommentItemResult'] | ResolversParentTypes['BlogItemResult'] | ResolversParentTypes['GeoResult'] | ResolversParentTypes['ItemResult'] | ResolversParentTypes['ItemsResult'];
  Float: Scalars['Float'];
  GeoItem: GeoItem;
  GeoResult: GeoResult;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Item: Item;
  ItemResult: ItemResult;
  ItemsFilter: ItemsFilter;
  ItemsResult: ItemsResult;
  Location: Location;
  Mutation: {};
  NewBlogCommentItem: NewBlogCommentItem;
  NewBlogItem: NewBlogItem;
  Page: Page;
  Query: {};
  Search: Search;
  Sort: Sort;
  String: Scalars['String'];
  UpdatedAt: ResolversParentTypes['BlogCommentItem'] | ResolversParentTypes['BlogItem'];
}>;

export type BlogCommentItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlogCommentItem'] = ResolversParentTypes['BlogCommentItem']> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blogItemId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlogCommentItemResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlogCommentItemResult'] = ResolversParentTypes['BlogCommentItemResult']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['BlogCommentItem']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlogItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlogItem'] = ResolversParentTypes['BlogItem']> = ResolversObject<{
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogCommentItemResult']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlogItemResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlogItemResult'] = ResolversParentTypes['BlogItemResult']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['BlogItem']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CoordinatesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Coordinates'] = ResolversParentTypes['Coordinates']> = ResolversObject<{
  coordinates?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Count'] = ResolversParentTypes['Count']> = ResolversObject<{
  __resolveType: TypeResolveFn<'BlogCommentItemResult' | 'BlogItemResult' | 'GeoResult' | 'ItemResult' | 'ItemsResult', ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type CreatedAtResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreatedAt'] = ResolversParentTypes['CreatedAt']> = ResolversObject<{
  __resolveType: TypeResolveFn<'BlogCommentItem' | 'BlogItem', ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type ErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = ResolversObject<{
  __resolveType: TypeResolveFn<'BlogCommentItemResult' | 'BlogItemResult' | 'GeoResult' | 'ItemResult' | 'ItemsResult', ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type GeoItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['GeoItem'] = ResolversParentTypes['GeoItem']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  importance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GeoResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['GeoResult'] = ResolversParentTypes['GeoResult']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['GeoItem']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  combinedStudy?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  distance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  educationStyle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fee?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inRegistry?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  individualTuition?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Coordinates']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  remoteStudy?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  www?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemResult'] = ResolversParentTypes['ItemResult']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemsResult'] = ResolversParentTypes['ItemsResult']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addBlogCommentItem?: Resolver<Maybe<ResolversTypes['BlogCommentItemResult']>, ParentType, ContextType, Partial<MutationAddBlogCommentItemArgs>>;
  addBlogItem?: Resolver<Maybe<ResolversTypes['BlogItemResult']>, ParentType, ContextType, Partial<MutationAddBlogItemArgs>>;
  updateBlogCommentItem?: Resolver<Maybe<ResolversTypes['BlogCommentItemResult']>, ParentType, ContextType, RequireFields<MutationUpdateBlogCommentItemArgs, 'id'>>;
  updateBlogItem?: Resolver<Maybe<ResolversTypes['BlogItemResult']>, ParentType, ContextType, RequireFields<MutationUpdateBlogItemArgs, 'id'>>;
  updateGeoItem?: Resolver<Maybe<ResolversTypes['ItemResult']>, ParentType, ContextType, Partial<MutationUpdateGeoItemArgs>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  filterItems?: Resolver<Maybe<ResolversTypes['ItemsResult']>, ParentType, ContextType, Partial<QueryFilterItemsArgs>>;
  getBlogItem?: Resolver<Maybe<ResolversTypes['BlogItemResult']>, ParentType, ContextType, RequireFields<QueryGetBlogItemArgs, 'id'>>;
  getGeo?: Resolver<Maybe<ResolversTypes['GeoResult']>, ParentType, ContextType, Partial<QueryGetGeoArgs>>;
  getItem?: Resolver<Maybe<ResolversTypes['ItemResult']>, ParentType, ContextType, RequireFields<QueryGetItemArgs, 'id'>>;
  searchItemsByGeo?: Resolver<Maybe<ResolversTypes['ItemsResult']>, ParentType, ContextType, Partial<QuerySearchItemsByGeoArgs>>;
  searchItemsByText?: Resolver<Maybe<ResolversTypes['ItemsResult']>, ParentType, ContextType, Partial<QuerySearchItemsByTextArgs>>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type UpdatedAtResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdatedAt'] = ResolversParentTypes['UpdatedAt']> = ResolversObject<{
  __resolveType: TypeResolveFn<'BlogCommentItem' | 'BlogItem', ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  BlogCommentItem?: BlogCommentItemResolvers<ContextType>;
  BlogCommentItemResult?: BlogCommentItemResultResolvers<ContextType>;
  BlogItem?: BlogItemResolvers<ContextType>;
  BlogItemResult?: BlogItemResultResolvers<ContextType>;
  Coordinates?: CoordinatesResolvers<ContextType>;
  Count?: CountResolvers<ContextType>;
  CreatedAt?: CreatedAtResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  GeoItem?: GeoItemResolvers<ContextType>;
  GeoResult?: GeoResultResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  ItemResult?: ItemResultResolvers<ContextType>;
  ItemsResult?: ItemsResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UpdatedAt?: UpdatedAtResolvers<ContextType>;
}>;

