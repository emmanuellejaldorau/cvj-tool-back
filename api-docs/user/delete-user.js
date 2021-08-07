module.exports = {
    delete: {
      tags: ["User"], 
      description: "Deleting a user", 
      operationId: "deleteUser",
      parameters: [
        {
          name: "id", 
          in: "path", 
          schema: {
            $ref: "#/components/schemas/id", 
          },
          required: true, 
          description: "Deleting a user", 
        },
      ],
      responses: {
        200: {
          description: "User deleted successfully", 
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