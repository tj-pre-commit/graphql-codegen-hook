import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const IS_UPDATING = gql`
  query isUpdating {
    isUpdating @client
  }
`;
