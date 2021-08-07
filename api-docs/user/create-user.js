module.exports = {
    post: {
      tags: ["User"], 
      description: "Create user", 
      operationId: "createUser", 
      parameters: [],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/UserInput", 
            },
          },
        },
      },
      responses: {
        201: {
          description: "User created successfully", 
        },
        500: {
          description: "Server error", 
        },
      },
    },
  };