module.exports = {
    post: {
      tags: ["Contact"], 
      description: "Create many contacts", 
      operationId: "createManyContacts", 
      parameters: [],
      requestBody: {
        content: {
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
            schema: {
              type: "string",
              format:"binary" 
            },
          },
        },
      },
      responses: {
        201: {
          description: "Contacts created successfully", 
        },
        500: {
          description: "Server error", 
        },
      },
    },
  };