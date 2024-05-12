# mongoose

Elegant Obeject Data Modeling for NODE js

## Benifits

Abstraction from low level mongodb

Relationship between NoSQL Data

Provides Schema Validation

Object -Data Mapping translation

40-60% less code raw mongodb package

## Schema

Everything in Mongoose starts with a Schema. How looks like data in db.Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

## model

To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema):

## Ids

By default, Mongoose adds an _id property to your schemas.

## Instance methods
