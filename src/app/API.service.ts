/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateBlog: OnCreateBlogSubscription;
  onUpdateBlog: OnUpdateBlogSubscription;
  onDeleteBlog: OnDeleteBlogSubscription;
  onCreatePost: OnCreatePostSubscription;
  onUpdatePost: OnUpdatePostSubscription;
  onDeletePost: OnDeletePostSubscription;
  onCreateComment: OnCreateCommentSubscription;
  onUpdateComment: OnUpdateCommentSubscription;
  onDeleteComment: OnDeleteCommentSubscription;
  onCreateTask: OnCreateTaskSubscription;
  onUpdateTask: OnUpdateTaskSubscription;
  onDeleteTask: OnDeleteTaskSubscription;
  onCreatePrivateNote: OnCreatePrivateNoteSubscription;
  onUpdatePrivateNote: OnUpdatePrivateNoteSubscription;
  onDeletePrivateNote: OnDeletePrivateNoteSubscription;
  onCreateNestTable: OnCreateNestTableSubscription;
  onUpdateNestTable: OnUpdateNestTableSubscription;
  onDeleteNestTable: OnDeleteNestTableSubscription;
};

export type CreateBlogInput = {
  id?: string | null;
  name: string;
};

export type ModelBlogConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelBlogConditionInput | null> | null;
  or?: Array<ModelBlogConditionInput | null> | null;
  not?: ModelBlogConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Blog = {
  __typename: "Blog";
  id: string;
  name: string;
  posts?: ModelPostConnection | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection";
  items: Array<Post | null>;
  nextToken?: string | null;
};

export type Post = {
  __typename: "Post";
  id: string;
  title: string;
  blog?: Blog | null;
  comments?: ModelCommentConnection | null;
  createdAt: string;
  updatedAt: string;
  blogPostsId?: string | null;
  owner?: string | null;
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection";
  items: Array<Comment | null>;
  nextToken?: string | null;
};

export type Comment = {
  __typename: "Comment";
  id: string;
  post?: Post | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  postCommentsId?: string | null;
  owner?: string | null;
};

export type UpdateBlogInput = {
  id: string;
  name?: string | null;
};

export type DeleteBlogInput = {
  id: string;
};

export type CreatePostInput = {
  id?: string | null;
  title: string;
  blogPostsId?: string | null;
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null;
  and?: Array<ModelPostConditionInput | null> | null;
  or?: Array<ModelPostConditionInput | null> | null;
  not?: ModelPostConditionInput | null;
  blogPostsId?: ModelIDInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdatePostInput = {
  id: string;
  title?: string | null;
  blogPostsId?: string | null;
};

export type DeletePostInput = {
  id: string;
};

export type CreateCommentInput = {
  id?: string | null;
  content: string;
  postCommentsId?: string | null;
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null;
  and?: Array<ModelCommentConditionInput | null> | null;
  or?: Array<ModelCommentConditionInput | null> | null;
  not?: ModelCommentConditionInput | null;
  postCommentsId?: ModelIDInput | null;
};

export type UpdateCommentInput = {
  id: string;
  content?: string | null;
  postCommentsId?: string | null;
};

export type DeleteCommentInput = {
  id: string;
};

export type CreateTaskInput = {
  id?: string | null;
  title: string;
  description?: string | null;
  status?: string | null;
};

export type ModelTaskConditionInput = {
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelTaskConditionInput | null> | null;
  or?: Array<ModelTaskConditionInput | null> | null;
  not?: ModelTaskConditionInput | null;
};

export type Task = {
  __typename: "Task";
  id: string;
  title: string;
  description?: string | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTaskInput = {
  id: string;
  title?: string | null;
  description?: string | null;
  status?: string | null;
};

export type DeleteTaskInput = {
  id: string;
};

export type CreatePrivateNoteInput = {
  id?: string | null;
  content: string;
};

export type ModelPrivateNoteConditionInput = {
  content?: ModelStringInput | null;
  and?: Array<ModelPrivateNoteConditionInput | null> | null;
  or?: Array<ModelPrivateNoteConditionInput | null> | null;
  not?: ModelPrivateNoteConditionInput | null;
};

export type PrivateNote = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdatePrivateNoteInput = {
  id: string;
  content?: string | null;
};

export type DeletePrivateNoteInput = {
  id: string;
};

export type CreateNestTableInput = {
  id?: string | null;
  content: string;
  nest: NestInput;
};

export type NestInput = {
  id: string;
  content: string;
};

export type ModelNestTableConditionInput = {
  content?: ModelStringInput | null;
  and?: Array<ModelNestTableConditionInput | null> | null;
  or?: Array<ModelNestTableConditionInput | null> | null;
  not?: ModelNestTableConditionInput | null;
};

export type NestTable = {
  __typename: "NestTable";
  id: string;
  content: string;
  nest: Nest;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type Nest = {
  __typename: "Nest";
  id: string;
  content: string;
};

export type UpdateNestTableInput = {
  id: string;
  content?: string | null;
  nest?: NestInput | null;
};

export type DeleteNestTableInput = {
  id: string;
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelBlogFilterInput | null> | null;
  or?: Array<ModelBlogFilterInput | null> | null;
  not?: ModelBlogFilterInput | null;
};

export type ModelBlogConnection = {
  __typename: "ModelBlogConnection";
  items: Array<Blog | null>;
  nextToken?: string | null;
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
  blogPostsId?: ModelIDInput | null;
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
  postCommentsId?: ModelIDInput | null;
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelTaskFilterInput | null> | null;
  or?: Array<ModelTaskFilterInput | null> | null;
  not?: ModelTaskFilterInput | null;
};

export type ModelTaskConnection = {
  __typename: "ModelTaskConnection";
  items: Array<Task | null>;
  nextToken?: string | null;
};

export type ModelPrivateNoteFilterInput = {
  id?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelPrivateNoteFilterInput | null> | null;
  or?: Array<ModelPrivateNoteFilterInput | null> | null;
  not?: ModelPrivateNoteFilterInput | null;
};

export type ModelPrivateNoteConnection = {
  __typename: "ModelPrivateNoteConnection";
  items: Array<PrivateNote | null>;
  nextToken?: string | null;
};

export type ModelNestTableFilterInput = {
  id?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelNestTableFilterInput | null> | null;
  or?: Array<ModelNestTableFilterInput | null> | null;
  not?: ModelNestTableFilterInput | null;
};

export type ModelNestTableConnection = {
  __typename: "ModelNestTableConnection";
  items: Array<NestTable | null>;
  nextToken?: string | null;
};

export type CreateBlogMutation = {
  __typename: "Blog";
  id: string;
  name: string;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      blogPostsId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateBlogMutation = {
  __typename: "Blog";
  id: string;
  name: string;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      blogPostsId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteBlogMutation = {
  __typename: "Blog";
  id: string;
  name: string;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      blogPostsId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type CreatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  blog?: {
    __typename: "Blog";
    id: string;
    name: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      postCommentsId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  blogPostsId?: string | null;
  owner?: string | null;
};

export type UpdatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  blog?: {
    __typename: "Blog";
    id: string;
    name: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      postCommentsId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  blogPostsId?: string | null;
  owner?: string | null;
};

export type DeletePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  blog?: {
    __typename: "Blog";
    id: string;
    name: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      postCommentsId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  blogPostsId?: string | null;
  owner?: string | null;
};

export type CreateCommentMutation = {
  __typename: "Comment";
  id: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    blog?: {
      __typename: "Blog";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    blogPostsId?: string | null;
    owner?: string | null;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  postCommentsId?: string | null;
  owner?: string | null;
};

export type UpdateCommentMutation = {
  __typename: "Comment";
  id: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    blog?: {
      __typename: "Blog";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    blogPostsId?: string | null;
    owner?: string | null;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  postCommentsId?: string | null;
  owner?: string | null;
};

export type DeleteCommentMutation = {
  __typename: "Comment";
  id: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    blog?: {
      __typename: "Blog";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    blogPostsId?: string | null;
    owner?: string | null;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  postCommentsId?: string | null;
  owner?: string | null;
};

export type CreateTaskMutation = {
  __typename: "Task";
  id: string;
  title: string;
  description?: string | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTaskMutation = {
  __typename: "Task";
  id: string;
  title: string;
  description?: string | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTaskMutation = {
  __typename: "Task";
  id: string;
  title: string;
  description?: string | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePrivateNoteMutation = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdatePrivateNoteMutation = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeletePrivateNoteMutation = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type CreateNestTableMutation = {
  __typename: "NestTable";
  id: string;
  content: string;
  nest: {
    __typename: "Nest";
    id: string;
    content: string;
  };
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateNestTableMutation = {
  __typename: "NestTable";
  id: string;
  content: string;
  nest: {
    __typename: "Nest";
    id: string;
    content: string;
  };
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteNestTableMutation = {
  __typename: "NestTable";
  id: string;
  content: string;
  nest: {
    __typename: "Nest";
    id: string;
    content: string;
  };
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type GetBlogQuery = {
  __typename: "Blog";
  id: string;
  name: string;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      blogPostsId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListBlogsQuery = {
  __typename: "ModelBlogConnection";
  items: Array<{
    __typename: "Blog";
    id: string;
    name: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetPostQuery = {
  __typename: "Post";
  id: string;
  title: string;
  blog?: {
    __typename: "Blog";
    id: string;
    name: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      postCommentsId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  blogPostsId?: string | null;
  owner?: string | null;
};

export type ListPostsQuery = {
  __typename: "ModelPostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    blog?: {
      __typename: "Blog";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    blogPostsId?: string | null;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetCommentQuery = {
  __typename: "Comment";
  id: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    blog?: {
      __typename: "Blog";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    blogPostsId?: string | null;
    owner?: string | null;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  postCommentsId?: string | null;
  owner?: string | null;
};

export type ListCommentsQuery = {
  __typename: "ModelCommentConnection";
  items: Array<{
    __typename: "Comment";
    id: string;
    post?: {
      __typename: "Post";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      blogPostsId?: string | null;
      owner?: string | null;
    } | null;
    content: string;
    createdAt: string;
    updatedAt: string;
    postCommentsId?: string | null;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetTaskQuery = {
  __typename: "Task";
  id: string;
  title: string;
  description?: string | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTasksQuery = {
  __typename: "ModelTaskConnection";
  items: Array<{
    __typename: "Task";
    id: string;
    title: string;
    description?: string | null;
    status?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetPrivateNoteQuery = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListPrivateNotesQuery = {
  __typename: "ModelPrivateNoteConnection";
  items: Array<{
    __typename: "PrivateNote";
    id: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetNestTableQuery = {
  __typename: "NestTable";
  id: string;
  content: string;
  nest: {
    __typename: "Nest";
    id: string;
    content: string;
  };
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListNestTablesQuery = {
  __typename: "ModelNestTableConnection";
  items: Array<{
    __typename: "NestTable";
    id: string;
    content: string;
    nest: {
      __typename: "Nest";
      id: string;
      content: string;
    };
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateBlogSubscription = {
  __typename: "Blog";
  id: string;
  name: string;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      blogPostsId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateBlogSubscription = {
  __typename: "Blog";
  id: string;
  name: string;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      blogPostsId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteBlogSubscription = {
  __typename: "Blog";
  id: string;
  name: string;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      blogPostsId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnCreatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  blog?: {
    __typename: "Blog";
    id: string;
    name: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      postCommentsId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  blogPostsId?: string | null;
  owner?: string | null;
};

export type OnUpdatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  blog?: {
    __typename: "Blog";
    id: string;
    name: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      postCommentsId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  blogPostsId?: string | null;
  owner?: string | null;
};

export type OnDeletePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  blog?: {
    __typename: "Blog";
    id: string;
    name: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      postCommentsId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  blogPostsId?: string | null;
  owner?: string | null;
};

export type OnCreateCommentSubscription = {
  __typename: "Comment";
  id: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    blog?: {
      __typename: "Blog";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    blogPostsId?: string | null;
    owner?: string | null;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  postCommentsId?: string | null;
  owner?: string | null;
};

export type OnUpdateCommentSubscription = {
  __typename: "Comment";
  id: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    blog?: {
      __typename: "Blog";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    blogPostsId?: string | null;
    owner?: string | null;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  postCommentsId?: string | null;
  owner?: string | null;
};

export type OnDeleteCommentSubscription = {
  __typename: "Comment";
  id: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    blog?: {
      __typename: "Blog";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    blogPostsId?: string | null;
    owner?: string | null;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  postCommentsId?: string | null;
  owner?: string | null;
};

export type OnCreateTaskSubscription = {
  __typename: "Task";
  id: string;
  title: string;
  description?: string | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTaskSubscription = {
  __typename: "Task";
  id: string;
  title: string;
  description?: string | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTaskSubscription = {
  __typename: "Task";
  id: string;
  title: string;
  description?: string | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePrivateNoteSubscription = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdatePrivateNoteSubscription = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeletePrivateNoteSubscription = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnCreateNestTableSubscription = {
  __typename: "NestTable";
  id: string;
  content: string;
  nest: {
    __typename: "Nest";
    id: string;
    content: string;
  };
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateNestTableSubscription = {
  __typename: "NestTable";
  id: string;
  content: string;
  nest: {
    __typename: "Nest";
    id: string;
    content: string;
  };
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteNestTableSubscription = {
  __typename: "NestTable";
  id: string;
  content: string;
  nest: {
    __typename: "Nest";
    id: string;
    content: string;
  };
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateBlog(
    input: CreateBlogInput,
    condition?: ModelBlogConditionInput
  ): Promise<CreateBlogMutation> {
    const statement = `mutation CreateBlog($input: CreateBlogInput!, $condition: ModelBlogConditionInput) {
        createBlog(input: $input, condition: $condition) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              createdAt
              updatedAt
              blogPostsId
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBlogMutation>response.data.createBlog;
  }
  async UpdateBlog(
    input: UpdateBlogInput,
    condition?: ModelBlogConditionInput
  ): Promise<UpdateBlogMutation> {
    const statement = `mutation UpdateBlog($input: UpdateBlogInput!, $condition: ModelBlogConditionInput) {
        updateBlog(input: $input, condition: $condition) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              createdAt
              updatedAt
              blogPostsId
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBlogMutation>response.data.updateBlog;
  }
  async DeleteBlog(
    input: DeleteBlogInput,
    condition?: ModelBlogConditionInput
  ): Promise<DeleteBlogMutation> {
    const statement = `mutation DeleteBlog($input: DeleteBlogInput!, $condition: ModelBlogConditionInput) {
        deleteBlog(input: $input, condition: $condition) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              createdAt
              updatedAt
              blogPostsId
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBlogMutation>response.data.deleteBlog;
  }
  async CreatePost(
    input: CreatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<CreatePostMutation> {
    const statement = `mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
        createPost(input: $input, condition: $condition) {
          __typename
          id
          title
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          comments {
            __typename
            items {
              __typename
              id
              content
              createdAt
              updatedAt
              postCommentsId
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          blogPostsId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePostMutation>response.data.createPost;
  }
  async UpdatePost(
    input: UpdatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<UpdatePostMutation> {
    const statement = `mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
        updatePost(input: $input, condition: $condition) {
          __typename
          id
          title
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          comments {
            __typename
            items {
              __typename
              id
              content
              createdAt
              updatedAt
              postCommentsId
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          blogPostsId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePostMutation>response.data.updatePost;
  }
  async DeletePost(
    input: DeletePostInput,
    condition?: ModelPostConditionInput
  ): Promise<DeletePostMutation> {
    const statement = `mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
        deletePost(input: $input, condition: $condition) {
          __typename
          id
          title
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          comments {
            __typename
            items {
              __typename
              id
              content
              createdAt
              updatedAt
              postCommentsId
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          blogPostsId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePostMutation>response.data.deletePost;
  }
  async CreateComment(
    input: CreateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<CreateCommentMutation> {
    const statement = `mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
        createComment(input: $input, condition: $condition) {
          __typename
          id
          post {
            __typename
            id
            title
            blog {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            blogPostsId
            owner
          }
          content
          createdAt
          updatedAt
          postCommentsId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(
    input: UpdateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<UpdateCommentMutation> {
    const statement = `mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
        updateComment(input: $input, condition: $condition) {
          __typename
          id
          post {
            __typename
            id
            title
            blog {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            blogPostsId
            owner
          }
          content
          createdAt
          updatedAt
          postCommentsId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(
    input: DeleteCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<DeleteCommentMutation> {
    const statement = `mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
        deleteComment(input: $input, condition: $condition) {
          __typename
          id
          post {
            __typename
            id
            title
            blog {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            blogPostsId
            owner
          }
          content
          createdAt
          updatedAt
          postCommentsId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentMutation>response.data.deleteComment;
  }
  async CreateTask(
    input: CreateTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<CreateTaskMutation> {
    const statement = `mutation CreateTask($input: CreateTaskInput!, $condition: ModelTaskConditionInput) {
        createTask(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTaskMutation>response.data.createTask;
  }
  async UpdateTask(
    input: UpdateTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<UpdateTaskMutation> {
    const statement = `mutation UpdateTask($input: UpdateTaskInput!, $condition: ModelTaskConditionInput) {
        updateTask(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTaskMutation>response.data.updateTask;
  }
  async DeleteTask(
    input: DeleteTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<DeleteTaskMutation> {
    const statement = `mutation DeleteTask($input: DeleteTaskInput!, $condition: ModelTaskConditionInput) {
        deleteTask(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTaskMutation>response.data.deleteTask;
  }
  async CreatePrivateNote(
    input: CreatePrivateNoteInput,
    condition?: ModelPrivateNoteConditionInput
  ): Promise<CreatePrivateNoteMutation> {
    const statement = `mutation CreatePrivateNote($input: CreatePrivateNoteInput!, $condition: ModelPrivateNoteConditionInput) {
        createPrivateNote(input: $input, condition: $condition) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePrivateNoteMutation>response.data.createPrivateNote;
  }
  async UpdatePrivateNote(
    input: UpdatePrivateNoteInput,
    condition?: ModelPrivateNoteConditionInput
  ): Promise<UpdatePrivateNoteMutation> {
    const statement = `mutation UpdatePrivateNote($input: UpdatePrivateNoteInput!, $condition: ModelPrivateNoteConditionInput) {
        updatePrivateNote(input: $input, condition: $condition) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePrivateNoteMutation>response.data.updatePrivateNote;
  }
  async DeletePrivateNote(
    input: DeletePrivateNoteInput,
    condition?: ModelPrivateNoteConditionInput
  ): Promise<DeletePrivateNoteMutation> {
    const statement = `mutation DeletePrivateNote($input: DeletePrivateNoteInput!, $condition: ModelPrivateNoteConditionInput) {
        deletePrivateNote(input: $input, condition: $condition) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePrivateNoteMutation>response.data.deletePrivateNote;
  }
  async CreateNestTable(
    input: CreateNestTableInput,
    condition?: ModelNestTableConditionInput
  ): Promise<CreateNestTableMutation> {
    const statement = `mutation CreateNestTable($input: CreateNestTableInput!, $condition: ModelNestTableConditionInput) {
        createNestTable(input: $input, condition: $condition) {
          __typename
          id
          content
          nest {
            __typename
            id
            content
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateNestTableMutation>response.data.createNestTable;
  }
  async UpdateNestTable(
    input: UpdateNestTableInput,
    condition?: ModelNestTableConditionInput
  ): Promise<UpdateNestTableMutation> {
    const statement = `mutation UpdateNestTable($input: UpdateNestTableInput!, $condition: ModelNestTableConditionInput) {
        updateNestTable(input: $input, condition: $condition) {
          __typename
          id
          content
          nest {
            __typename
            id
            content
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateNestTableMutation>response.data.updateNestTable;
  }
  async DeleteNestTable(
    input: DeleteNestTableInput,
    condition?: ModelNestTableConditionInput
  ): Promise<DeleteNestTableMutation> {
    const statement = `mutation DeleteNestTable($input: DeleteNestTableInput!, $condition: ModelNestTableConditionInput) {
        deleteNestTable(input: $input, condition: $condition) {
          __typename
          id
          content
          nest {
            __typename
            id
            content
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteNestTableMutation>response.data.deleteNestTable;
  }
  async GetBlog(id: string): Promise<GetBlogQuery> {
    const statement = `query GetBlog($id: ID!) {
        getBlog(id: $id) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              createdAt
              updatedAt
              blogPostsId
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBlogQuery>response.data.getBlog;
  }
  async ListBlogs(
    filter?: ModelBlogFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBlogsQuery> {
    const statement = `query ListBlogs($filter: ModelBlogFilterInput, $limit: Int, $nextToken: String) {
        listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBlogsQuery>response.data.listBlogs;
  }
  async GetPost(id: string): Promise<GetPostQuery> {
    const statement = `query GetPost($id: ID!) {
        getPost(id: $id) {
          __typename
          id
          title
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          comments {
            __typename
            items {
              __typename
              id
              content
              createdAt
              updatedAt
              postCommentsId
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          blogPostsId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPostQuery>response.data.getPost;
  }
  async ListPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsQuery> {
    const statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            blog {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            blogPostsId
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsQuery>response.data.listPosts;
  }
  async GetComment(id: string): Promise<GetCommentQuery> {
    const statement = `query GetComment($id: ID!) {
        getComment(id: $id) {
          __typename
          id
          post {
            __typename
            id
            title
            blog {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            blogPostsId
            owner
          }
          content
          createdAt
          updatedAt
          postCommentsId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentsQuery> {
    const statement = `query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            post {
              __typename
              id
              title
              createdAt
              updatedAt
              blogPostsId
              owner
            }
            content
            createdAt
            updatedAt
            postCommentsId
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommentsQuery>response.data.listComments;
  }
  async GetTask(id: string): Promise<GetTaskQuery> {
    const statement = `query GetTask($id: ID!) {
        getTask(id: $id) {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTaskQuery>response.data.getTask;
  }
  async ListTasks(
    filter?: ModelTaskFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTasksQuery> {
    const statement = `query ListTasks($filter: ModelTaskFilterInput, $limit: Int, $nextToken: String) {
        listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            description
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTasksQuery>response.data.listTasks;
  }
  async GetPrivateNote(id: string): Promise<GetPrivateNoteQuery> {
    const statement = `query GetPrivateNote($id: ID!) {
        getPrivateNote(id: $id) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPrivateNoteQuery>response.data.getPrivateNote;
  }
  async ListPrivateNotes(
    filter?: ModelPrivateNoteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPrivateNotesQuery> {
    const statement = `query ListPrivateNotes($filter: ModelPrivateNoteFilterInput, $limit: Int, $nextToken: String) {
        listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            content
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPrivateNotesQuery>response.data.listPrivateNotes;
  }
  async GetNestTable(id: string): Promise<GetNestTableQuery> {
    const statement = `query GetNestTable($id: ID!) {
        getNestTable(id: $id) {
          __typename
          id
          content
          nest {
            __typename
            id
            content
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetNestTableQuery>response.data.getNestTable;
  }
  async ListNestTables(
    filter?: ModelNestTableFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListNestTablesQuery> {
    const statement = `query ListNestTables($filter: ModelNestTableFilterInput, $limit: Int, $nextToken: String) {
        listNestTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            content
            nest {
              __typename
              id
              content
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListNestTablesQuery>response.data.listNestTables;
  }
  OnCreateBlogListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBlog">>
  > {
    const statement = `subscription OnCreateBlog($owner: String) {
        onCreateBlog(owner: $owner) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              createdAt
              updatedAt
              blogPostsId
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBlog">>
    >;
  }

  OnUpdateBlogListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBlog">>
  > {
    const statement = `subscription OnUpdateBlog($owner: String) {
        onUpdateBlog(owner: $owner) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              createdAt
              updatedAt
              blogPostsId
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBlog">>
    >;
  }

  OnDeleteBlogListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBlog">>
  > {
    const statement = `subscription OnDeleteBlog($owner: String) {
        onDeleteBlog(owner: $owner) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              createdAt
              updatedAt
              blogPostsId
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBlog">>
    >;
  }

  OnCreatePostListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePost">>
  > {
    const statement = `subscription OnCreatePost($owner: String) {
        onCreatePost(owner: $owner) {
          __typename
          id
          title
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          comments {
            __typename
            items {
              __typename
              id
              content
              createdAt
              updatedAt
              postCommentsId
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          blogPostsId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePost">>
    >;
  }

  OnUpdatePostListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePost">>
  > {
    const statement = `subscription OnUpdatePost($owner: String) {
        onUpdatePost(owner: $owner) {
          __typename
          id
          title
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          comments {
            __typename
            items {
              __typename
              id
              content
              createdAt
              updatedAt
              postCommentsId
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          blogPostsId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePost">>
    >;
  }

  OnDeletePostListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePost">>
  > {
    const statement = `subscription OnDeletePost($owner: String) {
        onDeletePost(owner: $owner) {
          __typename
          id
          title
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          comments {
            __typename
            items {
              __typename
              id
              content
              createdAt
              updatedAt
              postCommentsId
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          blogPostsId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePost">>
    >;
  }

  OnCreateCommentListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateComment">>
  > {
    const statement = `subscription OnCreateComment($owner: String) {
        onCreateComment(owner: $owner) {
          __typename
          id
          post {
            __typename
            id
            title
            blog {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            blogPostsId
            owner
          }
          content
          createdAt
          updatedAt
          postCommentsId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateComment">>
    >;
  }

  OnUpdateCommentListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateComment">>
  > {
    const statement = `subscription OnUpdateComment($owner: String) {
        onUpdateComment(owner: $owner) {
          __typename
          id
          post {
            __typename
            id
            title
            blog {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            blogPostsId
            owner
          }
          content
          createdAt
          updatedAt
          postCommentsId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateComment">>
    >;
  }

  OnDeleteCommentListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteComment">>
  > {
    const statement = `subscription OnDeleteComment($owner: String) {
        onDeleteComment(owner: $owner) {
          __typename
          id
          post {
            __typename
            id
            title
            blog {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            blogPostsId
            owner
          }
          content
          createdAt
          updatedAt
          postCommentsId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteComment">>
    >;
  }

  OnCreateTaskListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTask">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTask {
        onCreateTask {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTask">>
  >;

  OnUpdateTaskListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTask">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTask {
        onUpdateTask {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTask">>
  >;

  OnDeleteTaskListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTask">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTask {
        onDeleteTask {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTask">>
  >;

  OnCreatePrivateNoteListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePrivateNote">>
  > {
    const statement = `subscription OnCreatePrivateNote($owner: String) {
        onCreatePrivateNote(owner: $owner) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePrivateNote">>
    >;
  }

  OnUpdatePrivateNoteListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePrivateNote">>
  > {
    const statement = `subscription OnUpdatePrivateNote($owner: String) {
        onUpdatePrivateNote(owner: $owner) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePrivateNote">>
    >;
  }

  OnDeletePrivateNoteListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePrivateNote">>
  > {
    const statement = `subscription OnDeletePrivateNote($owner: String) {
        onDeletePrivateNote(owner: $owner) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePrivateNote">>
    >;
  }

  OnCreateNestTableListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateNestTable">>
  > {
    const statement = `subscription OnCreateNestTable($owner: String) {
        onCreateNestTable(owner: $owner) {
          __typename
          id
          content
          nest {
            __typename
            id
            content
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateNestTable">>
    >;
  }

  OnUpdateNestTableListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateNestTable">>
  > {
    const statement = `subscription OnUpdateNestTable($owner: String) {
        onUpdateNestTable(owner: $owner) {
          __typename
          id
          content
          nest {
            __typename
            id
            content
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateNestTable">>
    >;
  }

  OnDeleteNestTableListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteNestTable">>
  > {
    const statement = `subscription OnDeleteNestTable($owner: String) {
        onDeleteNestTable(owner: $owner) {
          __typename
          id
          content
          nest {
            __typename
            id
            content
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteNestTable">>
    >;
  }
}
