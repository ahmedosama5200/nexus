/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */


import { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    title(...args: any): void
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    title(...args: any): void
  }
}
declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    body: any
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  PostSearchInput: { // input type
    body?: string | null; // String
    title?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Mutation: {};
  Post: { // root type
    body: string; // String!
    title: string; // String!
  }
  Query: {};
  User: { // root type
    firstName: string; // String!
    lastName: string; // String!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  PostSearchInput: NexusGenInputs['PostSearchInput'];
}

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createUser: NexusGenRootTypes['User']; // User!
  }
  Post: { // field return type
    body: string; // String!
    title: string; // String!
  }
  Query: { // field return type
    foo: string; // String!
    searchPosts: NexusGenRootTypes['Post'][]; // [Post!]!
    user: NexusGenRootTypes['User']; // User!
  }
  User: { // field return type
    firstName: string; // String!
    lastName: string; // String!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createUser: { // args
      firstName?: string | null; // String
      lastName?: string | null; // String
    }
  }
  Query: {
    searchPosts: { // args
      input?: NexusGenInputs['PostSearchInput'] | null; // PostSearchInput
    }
    user: { // args
      id?: string | null; // ID
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Mutation" | "Post" | "Query" | "User";

export type NexusGenInputNames = "PostSearchInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}