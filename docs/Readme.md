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
<img src="https://user-images.githubusercontent.com/43233080/153966143-c9e87b26-124e-4f11-b027-3a8abe6fc79b.png" />
