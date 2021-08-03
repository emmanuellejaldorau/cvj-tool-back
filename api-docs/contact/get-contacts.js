module.exports = {
    get: {
      tags: ["Contact"], 
      description: "Get contacts", 
      operationId: "getContacts", 
      parameters: [], 
      responses: {
        200: {
          description: "Contacts were obtained", 
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Contact", 
              },
            },
          },
        },
      },
    },
  };