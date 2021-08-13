/* eslint-disable */
/* tslint:disable */
import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


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

export type IsUpdatingQueryVariables = {};


export type IsUpdatingQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'isUpdating'>
);


export const IsUpdatingDocument = gql`
    query isUpdating {
  isUpdating @client
}
    `;
export type IsUpdatingComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IsUpdatingQuery, IsUpdatingQueryVariables>, 'query'>;

    export const IsUpdatingComponent = (props: IsUpdatingComponentProps) => (
      <ApolloReactComponents.Query<IsUpdatingQuery, IsUpdatingQueryVariables> query={IsUpdatingDocument} {...props} />
    );
    
export type IsUpdatingProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<IsUpdatingQuery, IsUpdatingQueryVariables>
    } & TChildProps;
export function withIsUpdating<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IsUpdatingQuery,
  IsUpdatingQueryVariables,
  IsUpdatingProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, IsUpdatingQuery, IsUpdatingQueryVariables, IsUpdatingProps<TChildProps, TDataName>>(IsUpdatingDocument, {
      alias: 'isUpdating',
      ...operationOptions
    });
};

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
export function useIsUpdatingQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IsUpdatingQuery, IsUpdatingQueryVariables>) {
        return ApolloReactHooks.useQuery<IsUpdatingQuery, IsUpdatingQueryVariables>(IsUpdatingDocument, baseOptions);
      }
export function useIsUpdatingLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IsUpdatingQuery, IsUpdatingQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IsUpdatingQuery, IsUpdatingQueryVariables>(IsUpdatingDocument, baseOptions);
        }
export type IsUpdatingQueryHookResult = ReturnType<typeof useIsUpdatingQuery>;
export type IsUpdatingLazyQueryHookResult = ReturnType<typeof useIsUpdatingLazyQuery>;
export type IsUpdatingQueryResult = ApolloReactCommon.QueryResult<IsUpdatingQuery, IsUpdatingQueryVariables>;