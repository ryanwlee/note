import { gql } from "apollo-server";

export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Note {
    title: String
    content: String
  }

  type Query {
    notes: [Note]
  }
`;
