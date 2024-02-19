# Project Title

workZen

## Overview

### Problem

### User Profile

### Features

## Implementation

### Tech Stack

- React
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - express
  - bcrypt for password hashing

### APIs

- No external APIs will be used for the first sprint

### Sitemap

### Mockups

### Endpoints

**GET /**

Parameters:

Response:

```
[
    {
    },
    ...
]
```

**GET /:id**

Parameters:

Response:

```
{

}
```

**POST /:id/rating**

Parameters:

Response:

```
{

}
```

**PUT /:id/**

Parameters:

Response:

```
{

}
```

**POST /**

- Add a user account

Parameters:

- email: User's email
- password: User's provided password

Response:

```
{
    "token": ""
}
```

**POST /user/login**

- Login a user

Parameters:

- email: User's email
- password: User's provided password

Response:

```
{
    "token": ""
}
```

### Auth

- JWT auth
  - Before adding auth, all API requests will be using a fake user with id 1
  - Added after core features have first been implemented
  - Store JWT in localStorage, remove when a user logs out
  - Add states for logged in showing different UI in places listed in mockups

## Roadmap

- Feature: Home page

- Feature: Create account

  - Implement register page + form
  - Create POST /users/register endpoint

- Feature: Login

  - Implement login page + form
  - Create POST /users/login endpoint

- Feature: Implement JWT tokens

  - Server: Update expected requests / responses on protected endpoints
  - Client: Store JWT in local storage, include JWT on axios calls

- Bug fixes

- DEMO DAY

## Nice-to-haves
