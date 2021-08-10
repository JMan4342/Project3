const { gql } = require("apollo-server-express");
//  SELECT * FROM
const typeDefs = gql`
  type Profile {
    _id: ID
   
    email: String
    password: String
    parks: [String]
    thingsToDo: [String]
    campgrounds: [String]
  }
  type Auth {
    token: ID!
    profile: Profile
  }
  type Park{
    fullName:String
    description:String
  }
  #  R ==========================================
  type Query {
    findParks(park:String): [Park]
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  # CRUD ===============================================
  }
  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeProfile: Profile
    addPark(parkCode: String!): Profile
    removePark(Park: String!): Profile
    addThingsToDo(id: String!): Profile
    removeThingsToDo(ThingsToDo: String!): Profile
    addCampground(id: String!): Profile
    removeCampground(Campground: String!): Profile
  }
`;

module.exports = typeDefs;