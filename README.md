# TodoList-app ( TPA-5 )
# API Documentation

## Create User

Request :
- Method : POST
- Endpoint : `/user/create`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "username" : "string",
    "password" : "string"
}
```

Response :

```json 
{
    "message": "success add user"
}
```

## Login

Request :
- Method : POST
- Endpoint : `/user/login`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "username" : "string",
    "password" : "string"
}
```

Response :

```json 
{
    "message": "success login",
    "token": "token"
}
```

## Create Todo

Request :
- Method : POST
- Endpoint : `/task/create`
- Authorization: `Bearer token`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
  "title": "string",
  "description": "string"
}
```

Response :

```json 
{
    "message": "success create task",
    "data": {
        "_id": "unique",
        "title": "string",
        "description": "string",
        "users": "unique",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
    }
}
```

## Get List Todos

Request :
- Method : GET
- Endpoint : `/task/`
- Authorization: `Bearer token`

Response :

```json 
{
    "data": [
      {
        "_id": "unique",
        "title": "string",
        "description": "string",
        "users": {
            "_id": "unique",
            "username": "string",
            "password": "string",
            "createdAt": "date",
            "updatedAt": "date",
            "__v": 0
        },
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
    },
       {
        "_id": "unique",
        "title": "string",
        "description": "string",
        "users": {
            "_id": "unique",
            "username": "string",
            "password": "string",
            "createdAt": "date",
            "updatedAt": "date",
            "__v": 0
        },
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
    }
    ]
}
```

## Get Detail Todo

Request :
- Method : GET
- Endpoint : `/task/detail/:id`
- Authorization: `Bearer token`

Response :

```json 
{
    
    "data": {
        "_id": "unique",
        "title": "string",
        "description": "string",
        "users": {
            "_id": "unique",
            "username": "string",
            "password": "string",
            "createdAt": "date",
            "updatedAt": "date",
            "__v": 0
        },
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
    }
}
```

## Update Todo

Request :
- Method : PUT
- Endpoint : `/task/edit/:id`
- Authorization: `Bearer token`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
  "title": "string",
  "description": "string"
}
```

Response :

```json 
{
    "message": "success update data",
    "data": {
        "_id": "unique",
        "title": "string",
        "description": "string",
        "users": "unique",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
    }
}
```

## Delete Todo

Request :
- Method : DELETE
- Endpoint : `/task/delete/:id`
- Authorization: `Bearer token`

Response :

```json 
{
    "message": "success delete"
}
```

## Delete All Todo

Request :
- Method : DELETE
- Endpoint : `/delete`
- Authorization: `Bearer token`

Response :

```json 
{
    "message": "success delete all"
}
```
