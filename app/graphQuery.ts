import { gql } from "@apollo/client";

const LATEST_TRANSFERs = gql`
  query transfers($first: Int!) {
    transfers(first: $first) {
      transactionHash
      id
      __typename
      from
      to
      value
      blockTimestamp
    }
  }
`;

export default { LATEST_TRANSFERs };
