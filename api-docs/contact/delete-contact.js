module.exports = {
    delete: {
      tags: ["Contact"], 
      description: "Deleting a contact", 
      operationId: "deleteContact",
      parameters: [
        {
          name: "id", 
          in: "path", 
          schema: {
            $ref: "#/components/schemas/id", 
          },
          required: true, 
          description: "Deleting a contact", 
        },
      ],
      responses: {
        200: {
          description: "Contact deleted successfully", 
        },
        404: {
          description: "Contact not found", 
        },
        500: {
          description: "Server error", 
        },
      },
    },
  };