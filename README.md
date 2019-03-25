# MoneyApp

This is an app where i can come and see the state of all my accounts and debts i owe.

i can use it to keep track of the amount i owe.

taiga board: https://tree.taiga.io/project/samgreaves0-money-app/kanban


## Setup
The solution contains both the front and backend projects. 

#### Backend
To setup the backend open terminal and navigate to the Backend folder.
```
cd .../MoneyApp/MoneyApp/Backend
npm install
```
#### Frontend
To setup the front end open terminal and navigate to the UI folder.
```
cd ../MoneyApp/MoneyApp/UI
npm install
```

## Running

#### Backend
To run the backend make sure you have a mongodb running on 127.0.0.1:27017
```
npm start
```
Browse to ```http://localhost:4000```

#### Frontend
To run the frontend make sure you have the backend running
```
npm start
```
Browse to ```http://localhost:3000```