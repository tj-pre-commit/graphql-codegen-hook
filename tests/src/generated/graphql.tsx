/* eslint-disable */
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type IsUpdatingType = {
  __typename?: 'IsUpdatingType';
  isUpdating: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  isUpdating: Scalars['Boolean'];
};

export type IsUpdatingQueryVariables = Exact<{ [key: string]: never; }>;


export type IsUpdatingQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'isUpdating'>
);


export const IsUpdatingDocument = gql`
    query isUpdating {
  isUpdating @client
}
    `;

/**
 * __useIsUpdatingQuery__
 *
 * To run a query within a React component, call `useIsUpdatingQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsUpdatingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsUpdatingQuery({
 *   variables: {
 *   },
 * });
 */
export function useIsUpdatingQuery(baseOptions?: Apollo.QueryHookOptions<IsUpdatingQuery, IsUpdatingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsUpdatingQuery, IsUpdatingQueryVariables>(IsUpdatingDocument, options);
      }
export function useIsUpdatingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsUpdatingQuery, IsUpdatingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsUpdatingQuery, IsUpdatingQueryVariables>(IsUpdatingDocument, options);
        }
export type IsUpdatingQueryHookResult = ReturnType<typeof useIsUpdatingQuery>;
export type IsUpdatingLazyQueryHookResult = ReturnType<typeof useIsUpdatingLazyQuery>;
export type IsUpdatingQueryResult = Apollo.QueryResult<IsUpdatingQuery, IsUpdatingQueryVariables>;