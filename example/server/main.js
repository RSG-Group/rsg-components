import { Mongo } from "meteor/mongo";

const Database = new Mongo.Collection("database");
Database.insert({ username: "mongoo", password: "dbbb" });
console.log(Database.rawCollection); // eslint-disable-line no-console
