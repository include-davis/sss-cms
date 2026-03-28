
  module.exports = {
    async up(db, client) {
      // delete step 

      // update step 
      await db.command({
        collMod: "members",
        validator: {
          "$jsonSchema": {
            "bsonType": "object",
            "required": [
              "_name",
              "photo",
              "name",
              "title",
              "study",
              "email"
            ],
            "properties": {
              "_id": {
                "bsonType": "objectId"
              },
              "_name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "_published": {
                "bsonType": "bool"
              },
              "_created_at": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "_last_modified": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "photo": {
                "bsonType": "array",
                "items": {
                  "bsonType": "objectId"
                }
              },
              "name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "title": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "study": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "email": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              }
            }
          }
        }
      });

      // create step 
    },
    async down(db, client) {
      // delete step 

      // update step 
      await db.command({
        collMod: "members",
        validator: {
          "$jsonSchema": {
            "bsonType": "object",
            "required": [
              "_name",
              "name",
              "title",
              "study"
            ],
            "properties": {
              "_id": {
                "bsonType": "objectId"
              },
              "_name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "_published": {
                "bsonType": "bool"
              },
              "_created_at": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "_last_modified": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "photo": {
                "bsonType": "array",
                "items": {
                  "bsonType": "objectId"
                }
              },
              "name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "title": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "study": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              }
            }
          }
        }
      });
      
      // create step     
    }
  };
  