import { Mongo } from 'meteor/mongo';
 
export const Match = new Mongo.Collection('match');

Match.allow({
  insert(userId, party) {
    return userId;
  },
  update(userId, party, fields, modifier) {
    return userId;
  },
  remove(userId, party) {
    return userId;
  }
});