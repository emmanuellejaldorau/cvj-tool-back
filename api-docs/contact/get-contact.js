module.exports = {
    get: {
      tags: ["Contact"], 
      description: "Get a contact", 
      operationId: "getContact", 
      parameters: [
        {
          name: "id", 
          in: "path", 
          schema: {
            $ref: "#/components/schemas/id", 
          },
          required: true, 
          description: "A single contact", 
        },
      ],
      responses: {
        200: {
          description: "Contact is obtained", 
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Contact", 
              },
            },
          },
        },
        404: {
          description: "Contact is not found", 
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error", 
              },
            },
          },
        },
      },
    },
  };