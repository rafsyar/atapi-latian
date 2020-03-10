const jsonMovieList = {
        "$schema": "http://json-schema.org/draft-07/schema",
        "$id": "http://example.com/example.json",
        "type": "object",
        "title": "The Root Schema",
        "description": "The root schema comprises the entire JSON document.",
        "required": [
            "Search",
            "totalResults",
            "Response"
        ],
        "properties": {
            "Search": {
                "$id": "#/properties/Search",
                "type": "array",
                "title": "The Search Schema",
                "description": "An explanation about the purpose of this instance.",
                "default": [],
                "items": {
                    "$id": "#/properties/Search/items",
                    "type": "object",
                    "title": "The Items Schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": {},
                    "examples": [
                        {
                            "Title": "Star Wars: Episode IV - A New Hope",
                            "Year": "1977",
                            "imdbID": "tt0076759",
                            "Type": "movie",
                            "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                        }
                    ],
                    "required": [
                        "Title",
                        "Year",
                        "imdbID",
                        "Type",
                        "Poster"
                    ],
                    "properties": {
                        "Title": {
                            "$id": "#/properties/Search/items/properties/Title",
                            "type": "string",
                            "title": "The Title Schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": "",
                            "examples": [
                                "Star Wars: Episode IV - A New Hope"
                            ]
                        },
                        "Year": {
                            "$id": "#/properties/Search/items/properties/Year",
                            "type": "string",
                            "title": "The Year Schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": "",
                            "examples": [
                                "1977"
                            ]
                        },
                        "imdbID": {
                            "$id": "#/properties/Search/items/properties/imdbID",
                            "type": "string",
                            "title": "The Imdbid Schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": "",
                            "examples": [
                                "tt0076759"
                            ]
                        },
                        "Type": {
                            "$id": "#/properties/Search/items/properties/Type",
                            "type": "string",
                            "title": "The Type Schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": "",
                            "examples": [
                                "movie"
                            ]
                        },
                        "Poster": {
                            "$id": "#/properties/Search/items/properties/Poster",
                            "type": "string",
                            "title": "The Poster Schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": "",
                            "examples": [
                                "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                            ]
                        }
                    }
                }
            },
            "totalResults": {
                "$id": "#/properties/totalResults",
                "type": "string",
                "title": "The Totalresults Schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "483"
                ]
            },
            "Response": {
                "$id": "#/properties/Response",
                "type": "string",
                "title": "The Response Schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "True"
                ]
            }
        }
}

const jsonMovieNegative = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "The Root Schema",
    "description": "The root schema comprises the entire JSON document.",
    "required": [
        "Response",
        "Error"
    ],
    "properties": {
        "Response": {
            "$id": "#/properties/Response",
            "type": "string",
            "title": "The Response Schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "False"
            ]
        },
        "Error": {
            "$id": "#/properties/Error",
            "type": "string",
            "title": "The Error Schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "No API key provided."
            ]
        }
    }
}

module.exports = {
    jsonMovieList,
    jsonMovieNegative
}