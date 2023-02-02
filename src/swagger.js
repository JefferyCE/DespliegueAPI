//SWAGGER
const path = require('path');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const { format } = require('path');
const swaggerSpec =

{
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API",
            version: "1.0",
            description: "API for Bernat",
            contact: {
                name: "DAW CLASS",
                email: "support@gmail.com",
                url: "https://api.com"
            },
            license: {
                name: "GPLv3",
                url: "https://www.gnu.org/licenses/gpl-3.0.en.html"
            },
        },
        paths: {
            "/despliegueapi/dragonetes": {
                get: {
                    summary: "Returns all dragonetes from the system that the user has access to",
                    tags: [
                        "dragonetes"
                    ],
                    responses: {
                        200: {
                            description: "A list of dragonetes.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                }
                                            }, example: {

                                                "id": 1,
                                                "name": "Drogon"
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                },
                post: {
                    summary: "Create a new dragonete.",
                    tags: [
                        "dragonetes"
                    ],
                    parameters: [
                        {
                            name: "body",
                            in: "body",
                            required: "true",
                            schema: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string",
                                        format: "string",
                                        example:"Syrax"
                                    }
                                }
                            }
                            
                        }
                    ],
                    responses: {
                        200: {
                            description: "Dragonete response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            id: {
                                                type: "integer",
                                                format: "int64",
                                                example: "5"
                                            },
                                            name: {
                                                type: "string",
                                                example: "Syrax"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/despliegueapi/dragonetes/{id}": {
                get: {
                    summary: "Returns a dragonete from the system that the user has access to",
                    tags: [
                        "dragonetes"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of dragonete to fetch",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "A dragonete.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string"

                                            }
                                        }, example: {
                                            "name": "Drogo"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                delete: {
                    summary: "Deletes a dragonete from the system",
                    tags: [
                        "dragonetes"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of dragonete to delete",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "A dragonete.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "Dragonete deleted"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/despliegueapi/perretes": {
                get: {
                    summary: "Returns all perretes from the system that the user has access to",
                    tags: [
                        "perretes"
                    ],
                    responses: {
                        200: {
                            description: "A list of perretes.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                }
                                            }, example: {

                                                "id": 1,
                                                "name": "Samba"
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                },
                post: {
                    summary: "Create a new perrete.",
                    tags: [
                        "perretes"
                    ],
                    parameters: [
                        {
                            name: "body",
                            in: "body",
                            required: "true",
                            schema: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string",
                                        format: "string",
                                        example:"Copito"
                                    }
                                }
                            }
                            
                        }
                    ],
                    responses: {
                        200: {
                            description: "Perrete response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            id: {
                                                type: "integer",
                                                format: "int64",
                                                example: "5"
                                            },
                                            name: {
                                                type: "string",
                                                example: "Copito"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/despliegueapi/perretes/{id}": {
                get: {
                    summary: "Returns a perrete from the system that the user has access to",
                    tags: [
                        "perretes"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of perrete to fetch",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "A perrete.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string"

                                            }
                                        }, example: {
                                            "name": "Samba"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                delete: {
                    summary: "Deletes a perrete from the system",
                    tags: [
                        "perretes"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of perrete to delete",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "A perrete.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "Perrete borrado"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
        },
    },
    apis: [path.join(__dirname, 'routes/*.js')]
};
const swaggerDocs = (app, port) => {

    app.use('/despliegueapi/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
    console.log(`Swagger docs disponible en http://localhost:${port}/despliegueapi/docs`);
}

module.exports = { swaggerDocs };
