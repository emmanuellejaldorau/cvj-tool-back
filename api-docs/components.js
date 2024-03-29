module.exports = {
  components: {
    schemas: {
      id: {
        type: "string", 
        description: "ID of a contact"
      },
      UserInput: {
        type: "object", 
        properties: {
          fullName: {
            type: "string", 
            description: "User's name", 
          },
          email: {
            type: "string", 
            description: "Contact's email", 
          }
        }
      },
      User: {
        type: "object", 
        properties: {
          id: {
            type: "string", 
            description: "Identification number", 
          },
          fullName: {
            type: "string", 
            description: "Contact's name", 
          },
          email: {
            type: "string", 
            description: "Contact's email", 
          }
        }
      },
      ContactInput: {
        type: "object", 
        properties: {
          fullName: {
            type: "string", 
            description: "Contact's title", 
          },
          email: {
            type: "string", 
            description: "Contact's email", 
          },
          phone: {
            type: "number", 
            description: "Contact's phone number", 
          },
          status: {
            type: "string", 
            description: "Contact's phone number", 
          },
          assignee: {
            type: "string", 
            description: "Assignee of the contact", 
          }
        }
      },
      Contact: {
        type: "object", 
        properties: {
          id: {
            type: "string", 
            description: "Identification number", 
          },
          fullName: {
            type: "string", 
            description: "Contact's title", 
          },
          email: {
            type: "string", 
            description: "Contact's email", 
          },
          phone: {
            type: "number", 
            description: "Contact's phone number", 
          },
          status: {
            type: "string", 
            description: "Contact's phone number", 
          },
          assignee: {
            type: "string", 
            description: "Assignee of the contact", 
          }
        }
      },
      Error: {
        type: "object", 
        properties: {
          message: {
            type: "string", 
            description: "Error message", 
          },
          internal_code: {
            type: "string", 
            description: "Error internal code", 
          }
        }
      }
    },
  },
};

