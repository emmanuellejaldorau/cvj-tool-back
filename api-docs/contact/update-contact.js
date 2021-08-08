module.exports = {
    put: {
      tags: ["Contact"], 
      description: "Update contact", 
      operationId: "updateContact", 
      parameters: [
        {
          name: "id", 
          in: "path", 
          schema: {
            $ref: "#/components/schemas/id", 
          },
          required: true, 
          description: "Id of contact to be updated", 
        },
      ],
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
        200: {
          description: "Contact updated successfully", 
        },
        404: {
          description: "Todo not found", 
        },
        500: {
          description: "Server error",
        },
      },
    },
};