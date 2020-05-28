import { gql } from 'apollo-boost';

export const SHIP_LIST = gql`{
    allStarships {
      edges {
        node {
            name
            manufacturers
            costInCredits
        }
      }
    }
}`;
