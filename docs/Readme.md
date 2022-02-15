# USERS MICROSERVICE

## 📃 Motivation
This project has the responsabilty of create-read-update-remove user's information

## 🔎 Installation
1. `git clone https://github.com/backoffice-opensource/users.git`
2. `cd users`
3. `npm install`
4. `npm run dev`

## ⚙️ Features
- [Create User](#create-user)

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

<img alt="Users Communication Diagram" src="https://user-images.githubusercontent.com/43233080/153966221-c2fc6a75-3a34-478e-9c0f-dc881a399772.png">


