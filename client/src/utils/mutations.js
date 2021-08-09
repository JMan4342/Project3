import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_PARK = gql`
  mutation addPark($profileId: ID!, $park: String!) {
    addPark(profileId: $profileId, park: $park) {
      _id
      name
      parks
    }
  }
`;

export const ADD_THINGSTODO = gql`
  mutation addThingsToDo($profileId: ID!, $thingsToDo: String!) {
    addThingsToDo(profileId: $profileId, thingsToDo: $thingsToDo) {
      _id
      name
      thingsToDos
    }
  }
`;

export const ADD_CAMPGROUND = gql`
  mutation addCampground($profileId: ID!, $campground: String!) {
    addCampground(profileId: $profileId, campground: $campground) {
      _id
      name
      campgrounds
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_PARK = gql`
  mutation removePark($park: String!) {
    removePark(park: $park) {
      _id
      name
      parks
    }
  }
`;

export const REMOVE_THINGSTODO = gql`
  mutation removeThingsToDo($park: String!) {
    removeThingsToDo(thingsToDo: $thingsToDo) {
      _id
      name
      thingsToDos
    }
  }
`;

export const REMOVE_CAMPGROUND = gql`
  mutation removeCampground($campground: String!) {
    removeCampground(campground: $campground) {
      _id
      name
      campgrounds
    }
  }
`;
