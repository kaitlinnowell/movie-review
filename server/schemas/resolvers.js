const { signToken, AuthenticationError } = require("../utils/auth");
const { User } = require("../models");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addMovie: async (
      parent,
      { movieId, title, image, rating, favorite },
      context
    ) => {
      if (!context.user) {
        throw new AuthenticationError("User not logged in");
      }

      const newMovie = {
        movieId,
        title,
        image,
        rating,
        favorite,
      };

      return User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedMovies: newMovie } },
        { new: true, runValidators: true }
      );
    },
    removeMovie: async (parent, { movieId }, context) => {
      if (!context.user) {
        throw new AuthenticationError("User not logged in");
      }

      return User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedMovies: { movieId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
