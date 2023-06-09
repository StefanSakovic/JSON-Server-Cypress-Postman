In this small project I will use HTML, Tailwind Css, and JavaScript(externally connected to each other)to create JSON Server and Fetch Data For Front-end and then perform the
testing with CYPRESS framework by coding  which is compatible for JS and manually with POSTMAN.

I will provide an importable postman file and u can find it in json type inside my folder "postman".
U can open your Postman and import that file to see all my requests on local host,
where I manually tested all data from local host using GET, PUT, POST, DELETE, PATCH requests like i did via cypress framework as u can see
inside cypress/e2e folder.

## Getting started

When i set up my html which is beautified with Tailwind i use :
```
npm init -y (to set up a new npm package and skip all the questions)
```

Then i install json server package from the npm with :

```
npm i json-server
```
Now i  create db.json with some users like this:


```json
{
"user":[
    {
        "id": 1,
        "name": "Leanne Graham",
        "email": "Sincere@april.biz",
        "profile": "some picture",
        "status" : "Active",
        "role" : "Admin"
    },
    {
        // 2nd user
    }, 
    {
        // 3d user
    },

]

}```
and so on..

TO SIMPLIFY : We are going to pass this db.json to the json server so json server is going to create routes for this data

Lets start!

Go to package.json and add new script:

 "scripts": {
    "start": "json-server --watch ./database/db.json" 
  }  
  
So we can use:

 ```npm start``` to start the server
(whenever we make any changes inside db.json this "--watch flag" is going to restart the server)

Now open terminal and type "npm start" ..

When ii have just set up a json server,i can acces my resources using "http://localhost:3000/user" as u can see inside my terminal.
We want to grab this data from this json server and iterate through objects(users)

I Create script.js inside my json-server folder and create function for creating table data as u can see inside script.js file

Now i can fetch data from db.json ("name","email","profile","status" ,"role") to fill out users fields on our html page(JSON SERVER)(Employe,Status,Role)..
