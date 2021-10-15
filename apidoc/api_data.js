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
    "url": "/category",
    "title": "Delete a category from the db",
    "name": "delete",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "the",
            "description": "<p>name of the new category.</p>"
          }
        ]
      }
    },
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
    "url": "/category/:name",
    "title": "Return a categoriy from the database",
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
    "title": "Return all categories from the database",
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
    "url": "/category/:name",
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
            "field": "the",
            "description": "<p>new name of the category.</p>"
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
    "url": "/category",
    "title": "Delete a skill from the db",
    "name": "delete",
    "group": "Skills",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>the name of the skill to delete (body).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 BadRequest\n  {\n        \"message\": \"Skill was deleted\"\n}",
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
    "filename": "src/controllers/skillController.ts",
    "groupTitle": "Skills"
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
    "title": "Return all user's data from the database",
    "name": "get",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "limit",
            "description": "<p>The number of items for paginations.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "offset",
            "description": "<p>Page for json.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " [\n   {\n        \"id\": 4,\n        \"firstName\": \"Alina\",\n        \"lastName\": \"Enache\",\n        \"email\": \"al.el.en.lina@gmail.com\",\n        \"description\": \"client\",\n        \"avatar\": \"user/avatar1\",\n        \"createdAt\": null,\n        \"updatedAt\": null\n    },\n    [\n       {\n           \"id\": 2,\n           \"name\": \"Sql\",\n           \"createdAt\": null,\n           \"updatedAt\": null,\n           \"categoryId\": 0\n       },\n       {  \n           \"id\": 3,\n           \"name\": \"Js\",\n           \"createdAt\": null,\n           \"updatedAt\": null,\n           \"categoryId\": 1\n       }\n   ]\n]",
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
    "title": "Return all categories from the database",
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
          }
        ]
      }
    },
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
  }
] });
