# USERS MICROSERVICE

## Motivation
## Features
1. [Create User](#create-user)

### Create User
Request 

```bash
curl --location --request POST 'http://localhost:31212/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "testuser",
    "firstname": "Test Name",
    "lastname": "Test Surname",
    "identification": "32123123",
    "usermail": "testuser@yopmail.com",
    "birthdate": "1996-04-26"
}'
```

Communication Diagram
<img src="https://raw.githubusercontent.com/backoffice-opensource/users/feature/dockerize/docs/create_users.drawio.svg" />
