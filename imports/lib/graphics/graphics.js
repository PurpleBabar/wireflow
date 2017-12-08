import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Graphics = new Mongo.Collection('graphics');

Graphics.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Graphics.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Graphics.schema = new SimpleSchema({
  name: {
    type: String,
  },
  cat: {
    type: String,
  },
  link: {
    type: String,
  },
  owner: {
    type: String,
    default: "root",
  },
  isPublic: {
    type: Boolean,
    default: true
  }
});

Graphics.attachSchema(Graphics.schema);
