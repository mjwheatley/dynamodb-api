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
  onCreateTask: OnCreateTaskSubscription;
  onUpdateTask: OnUpdateTaskSubscription;
  onDeleteTask: OnDeleteTaskSubscription;
  onCreatePrivateNote: OnCreatePrivateNoteSubscription;
  onUpdatePrivateNote: OnUpdatePrivateNoteSubscription;
  onDeletePrivateNote: OnDeletePrivateNoteSubscription;
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

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelTaskFilterInput | null> | null;
  or?: Array<ModelTaskFilterInput | null> | null;
  not?: ModelTaskFilterInput | null;
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

@Injectable({
  providedIn: "root"
})
export class APIService {
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
}
