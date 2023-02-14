"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleApi = exports.ExampleSchema = void 0;
exports.ExampleSchema = {
    "type": "object",
    "properties": {
        "id": {
            "type": "integer"
        },
        "name": {
            "type": "string"
        }
    }
};
exports.ExampleApi = {
    "get": {
        "summary": "Get a list of users",
        "description": "Returns a list of all the users in the system",
        "tags": [
            "users"
        ],
        "parameters": [
            {
                "in": "query",
                "name": "page",
                "description": "The page number of the results to return",
                "required": false,
                "schema": {
                    "type": "integer",
                    "default": 1
                }
            },
            {
                "in": "query",
                "name": "limit",
                "description": "The maximum number of results to return per page",
                "required": false,
                "schema": {
                    "type": "integer",
                    "default": 10
                }
            }
        ],
        "responses": {
            "200": {
                "description": "A list of users",
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/User"
                            }
                        }
                    }
                }
            },
            "default": {
                "description": "An unexpected error occurred",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/Error"
                        }
                    }
                }
            }
        }
    },
    "post": {
        "summary": "Create a new user",
        "description": "Creates a new user in the system",
        "tags": [
            "users"
        ],
        "requestBody": {
            "description": "The user to create",
            "content": {
                "application/json": {
                    "schema": {
                        "$ref": "#/components/schemas/User"
                    }
                }
            }
        },
        "responses": {
            "201": {
                "description": "The created user",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/User"
                        }
                    }
                }
            },
            "default": {
                "description": "An unexpected error occurred",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/Error"
                        }
                    }
                }
            }
        }
    }
};
