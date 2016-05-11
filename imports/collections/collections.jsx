import { Mongo } from 'meteor/mongo';

export const groups = new Mongo.Collection('groups'); // collection what conteining all exsisting group
export const pizzaDays = new Mongo.Collection('pizzaDays'); // collections what conteining all existing pizzaDay 
