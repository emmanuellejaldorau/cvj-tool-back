module.exports = {
    post: {
      tags: ["Contact"], 
      description: "Create contact", 
      operationId: "createContact", 
      parameters: [],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ContactInput", 
            },
          },
        },
      },
      responses: {
        201: {
          description: "Contact created successfully", 
        },
        500: {
          description: "Server error", 
        },
      },
    },
  };