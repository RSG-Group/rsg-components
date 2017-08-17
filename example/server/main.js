import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'

const Database = new Mongo.Collection('database')
Meteor.publish('data', () => Database.find({}))
Database.insert({ username: 'mongoo', password: 'dbbb' })
