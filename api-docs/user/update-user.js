module.exports = {
    put: {
      tags: ["User"], 
      description: "Update user", 
      operationId: "updateUser", 
      parameters: [
        {
          name: "id", 
          in: "path", 
          schema: {
            $ref: "#/components/schemas/id", 
          },
          required: true, 
          description: "Id of user to be updated", 
        },
      ],
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
        200: {
          description: "User updated successfully", 
        },
        404: {
          description: "User not found", 
        },
        500: {
          description: "Server error",
        },
      },
    },
};