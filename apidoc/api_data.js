define({ "api": [
  {
    "type": "post",
    "url": "/category",
    "title": "Add a category to the db",
    "name": "add",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Name",
            "description": "<p>The name of the new category.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 BadRequest\n{\n      \"message\": \"Category was added\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Wrong input data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 400 BadRequest\n  {\n        \"message\": \"Bad request\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/categoryController.ts",
    "groupTitle": "Category"
  },
  {
    "type": "delete",
    "url": "/category/:id",
    "title": "Delete a category from the db",
    "name": "delete",
    "group": "Category",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 BadRequest\n  {\n        \"message\": \"Category was deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Wrong input data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 404 NotFound\n  {\n        \"message\": \"Item does not exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/categoryController.ts",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/category/:id",
    "title": "Get a category from the database",
    "name": "get",
    "group": "Category",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " [\n   {\n        \"id\": 1,\n        \"name\": \"Languages\",\n        \"createdAt\": null,\n        \"updatedAt\": \"2021-10-13T08:37:38.000Z\"\n    },\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Wrong input data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 400 BadRequest\n  {\n        \"message\": \"Bad request\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/categoryController.ts",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/category",
    "title": "Get all categories from the database",
    "name": "getAll",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of items for paginations (param).</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "offset",
            "description": "<p>Page for json (param).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " [\n   {\n        \"id\": 1,\n        \"name\": \"Languages\"\n    },\n    {\n        \"id\": 2,\n        \"name\": \"Technologies\"\n    },\n    {\n        \"id\": 3,\n        \"name\": \"Frameworks\"\n    },\n    {\n        \"id\": 4,\n        \"name\": \"Others\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Wrong input data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BadRequest\n{\n      \"message\": \"Bad request\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/categoryController.ts",
    "groupTitle": "Category"
  },
  {
    "type": "put",
    "url": "/category/:id",
    "title": "Update a category from the db",
    "name": "update",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>the new name of the category.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 BadRequest\n  {\n        \"message\": \"Item was updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad",
            "description": "<p>Request Wrong input data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Not",
            "description": "<p>Found Wrong input data. HTTP/1.1 404 NotFound { &quot;message&quot;: &quot;Item was not found&quot; }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BadRequest\n{\n      \"message\": \"Bad request\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/categoryController.ts",
    "groupTitle": "Category"
  },
  {
    "type": "delete",
    "url": "/skill/:id",
    "title": "Delete a skill from an user",
    "name": "delete",
    "group": "Skill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skillId",
            "description": "<p>The id of the skill to delete.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 BadRequest\n{\n      \"message\": \"Item was deleted sucessfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad",
            "description": "<p>Request Wrong input data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BadRequest\n{\n      \"message\": \"Error! Item was not deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/skillController.ts",
    "groupTitle": "Skill"
  },
  {
    "type": "delete",
    "url": "/skill/admin/:id",
    "title": "Delete a skill from database",
    "name": "deleteFromDb",
    "group": "Skill",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 BadRequest\n{\n      \"message\": \"Item was deleted sucessfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad",
            "description": "<p>Request Wrong input data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BadRequest\n{\n      \"message\": \"Error! Item was not deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/skillController.ts",
    "groupTitle": "Skill"
  },
  {
    "type": "get",
    "url": "/skill/:id",
    "title": "Get a skills from the database",
    "name": "find",
    "group": "Skill",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n  \"count\": 1,\n  \"rows\": [\n    {\n      \"id\": 3,\n      \"name\": \"EntityFramework\",\n      \"categoryId\": 2,\n      \"createdAt\": null,\n      \"updatedAt\": null,\n      \"users.id\": null,\n      \"users.firstName\": null,\n      \"users.lastName\": null,\n      \"users.email\": null,\n      \"users.description\": null,\n      \"users.avatar\": null,\n      \"users.createdAt\": null,\n      \"users.updatedAt\": null,\n      \"category.id\": 2,\n      \"category.name\": \"Technologies\",\n      \"category.createdAt\": null,\n      \"category.updatedAt\": null\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 400 BadRequest\n  {\n        \"message\": \"Bad request\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/skillController.ts",
    "groupTitle": "Skill"
  },
  {
    "type": "get",
    "url": "/skill",
    "title": "Return all skills from the database",
    "name": "getAll",
    "group": "Skill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of items for paginations (params).</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "offset",
            "description": "<p>Page for json (params).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"total\": 2,\n  \"data\": [\n          {\n            \"id\": 1,\n            \"name\": \"Java\",\n            \"categoryId\": 0,\n            \"createdAt\": null,\n            \"updatedAt\": null,\n            \"category.id\": null,\n            \"category.name\": null,\n            \"users.id\": 1,\n            \"users.firstName\": \"Admin\",\n            \"users.lastName\": \"Admin\",\n            \"users.email\": \"admin@gmail.com\",\n            \"users.description\": \"null\",\n            \"users.avatar\": \"user/avatar\",\n            \"users.createdAt\": null,\n            \"users.updatedAt\": null\n          },\n          {\n             \"id\": 2,\n             \"name\": \"NodeJs\",\n             \"categoryId\": 1,\n             \"createdAt\": null,\n             \"updatedAt\": null,\n             \"category.id\": 1,\n             \"category.name\": \"Languages\",\n             \"users.id\": 2,\n             \"users.firstName\": \"Alina\",\n             \"users.lastName\": \"Enache\",\n             \"users.email\": \"al.el.en.lina@gmail.com\",\n             \"users.description\": \"client\",\n             \"users.avatar\": \"user/avatar1\",\n             \"users.createdAt\": null,\n             \"users.updatedAt\": null\n           }\n         ],\n         \"limit\": 10,\n         \"offset\": 0\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Wrong input data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BadRequest\n{\n      \"message\": \"Bad request\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/skillController.ts",
    "groupTitle": "Skill"
  },
  {
    "type": "post",
    "url": "/skill",
    "title": "Add a category to the db",
    "name": "post",
    "group": "Skill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the new skill.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "categoryId",
            "description": "<p>The id of the category.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Success\n{\n      \"message\": \"item was added\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Wrong input data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 400 BadRequest\n  {\n        \"message\": \"Bad request\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/skillController.ts",
    "groupTitle": "Skill"
  },
  {
    "type": "post",
    "url": "/skill/:id",
    "title": "Add a category to an user (via userId)",
    "name": "post",
    "group": "Skill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skillId",
            "description": "<p>The id of the skill.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Success\n{\n      \"message\": \"item was added\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Wrong input data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 400 BadRequest\n  {\n        \"message\": \"Bad request\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/skillController.ts",
    "groupTitle": "Skill"
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "Delete an user from the database.",
    "name": "delete",
    "group": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n{\n    \"message\": \"user was deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Wrong input data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 404 NotFound\n  {\n        \"message\": \"User does not exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/userController.ts",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get all user's data from the database",
    "name": "get",
    "group": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"count\": 1,\n  \"rows\": [\n     {\n        \"id\": 3,\n        \"name\": \"EntityFramework\",\n        \"categoryId\": 2,\n        \"createdAt\": null,\n        \"updatedAt\": null,\n        \"users.id\": null,\n        \"users.firstName\": null,\n        \"users.lastName\": null,\n        \"users.email\": null,\n        \"users.description\": null,\n        \"users.avatar\": null,\n        \"users.createdAt\": null,\n        \"users.updatedAt\": null,\n        \"category.id\": 2,\n        \"category.name\": \"Technologies\",\n        \"category.createdAt\": null,\n        \"category.updatedAt\": null\n      }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad",
            "description": "<p>Request Wrong input data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 400 BadRequest\n  {\n        \"message\": \"Bad request\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/userController.ts",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/category",
    "title": "Get all categories from the database",
    "name": "getAll",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of items for paginations (param).</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "offset",
            "description": "<p>Page for json (param).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"raw\": true,\n\"total\": 2,\n\"data\": [\n  {\n      \"id\": 1,\n      \"firstName\": \"Admin\",\n      \"lastName\": \"Admin\",\n      \"email\": \"admin@gmail.com\",\n      \"description\": \"null\",\n      \"avatar\": \"user/avatar\",\n      \"createdAt\": null,\n      \"updatedAt\": null\n  },\n  {\n      \"id\": 2,\n      \"firstName\": \"Alina\",\n      \"lastName\": \"Enache\",\n      \"email\": \"al.el.en.lina@gmail.com\",\n      \"description\": \"client\",\n      \"avatar\": \"user/avatar1\",\n      \"createdAt\": null,\n      \"updatedAt\": null\n  }\n],\n\"limit\": 10,\n   \"offset\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad",
            "description": "<p>Request Wrong input data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 400 BadRequest\n  {\n        \"message\": \"Bad request\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/userController.ts",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Add a new  categoriy to the database",
    "name": "post",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>User's first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>User's last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>A short section about the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "avatar",
            "optional": false,
            "field": "avatar",
            "description": "<p>Path for the User's photo.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n{\n    \"message\": \"user was created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad",
            "description": "<p>Request Wrong input data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 400 BadRequest\n  {\n        \"message\": \"Bad request\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/userController.ts",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Update an user",
    "name": "put",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>User's new first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>User's new last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>User's new email.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>A new short section about the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "avatar",
            "optional": false,
            "field": "avatar",
            "description": "<p>New path for the User's photo.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n{\n    \"message\": \"user was edited succesfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Wrong input data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 400 BadRequest\n  {\n        \"message\": \"Bad request\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/userController.ts",
    "groupTitle": "Users"
  }
] });
