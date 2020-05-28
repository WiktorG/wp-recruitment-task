import { gql } from 'apollo-boost';

export const SHIP_LIST = gql`{
    allStarships {
      edges {
        node {
            id
            name
            manufacturers
            costInCredits
        }
      }
    }
}`;
