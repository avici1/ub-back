# UB RWANDA README

## INSTALLATION

### Installing Dependencies

 Install postgreSQL and sequelize dependencies
`npm install --save sequelize pg pg-hstore`
Then run 
`npm install`

### .env

Create a .env file in the root directory and paste in this

```sh
DEV_DATABASE_URL=
UNAME=
UPASS=
JWT_KEY=
```

Then Fill It


## ROUTES

### VIDEO CRUD ROUTES

1. Posting a Video: POST request

Request:

```json
/api/v1/videos
```

First:
- In Postman, head to Headers Tab And assign the following:
Key:Content-Type
Value: Application/json

Body:

```json
{
	"videoTitle": "My First Video",
	"videoDescription": "My Description",
	"videoUrl": "https://www.youtube.com/watch?y=YqeW9_5kURI"

}
```

Response:

```json
{
    "status": "success",
    "message": "Video Added Successfully!",
    "data": {
        "id": 44,
        "videoTitle": "My First Video",
        "videoDescription": "My Description",
        "videoUrl": "https://www.youtube.com/watch?y=YqeW9_5kURI",
        "updatedAt": "2019-11-09T09:42:35.321Z",
        "createdAt": "2019-11-09T09:42:35.321Z"
    }
}
```

2. Updating a Video: PUT request

Request:

```json
/api/v1/videos/:id
```

First:
- In Postman, head to Headers Tab And assign the following:
 Key:Content-Type
 Value: Application/json
- Then Head to Body Tab and select raw

Body

```json
{
	"videoDescription": "This is New Description"
}
```

Response:

```json
{
    "status": "success",
    "message": "Video Updated Successfully!!!",
    "data": {
        "id": 44,
        "videoTitle": "My First Video",
        "videoDescription": "This is New Description",
        "videoUrl": "https://www.youtube.com/watch?y=YqeW9_5kURI",
        "createdAt": "2019-11-09T09:42:35.321Z",
        "updatedAt": "2019-11-09T09:44:19.854Z"
    }
}
```

3. Viewing All Videos: GET request

```json
/api/v1/videos
```

Response:

```json
{
    "status": "success",
    "message": "Videos Retrieved Successfully!!!",
    "data": [
        {
            "id": 44,
            "videoTitle": "My First Video",
            "videoDescription": "This is New Description",
            "videoUrl": "https://www.youtube.com/watch?y=YqeW9_5kURI",
            "createdAt": "2019-11-09T09:42:35.321Z",
            "updatedAt": "2019-11-09T09:44:19.854Z"
        },
        {
            "id": 45,
            "videoTitle": "Rwanda Is Beautiful by Kalisa Aimable",
            "videoDescription": "This song describes the beauty of Rwanda",
            "videoUrl": "https://www.youtube.com/watch?z=YqeW9_5kURI",
            "createdAt": "2019-11-09T09:48:28.141Z",
            "updatedAt": "2019-11-09T09:48:28.141Z"
        }
    ]
}
```

4. Viewing a single Video: GET request

Request:

```json
/api/v1/videos/:id
```

Response:

```json
{
    "status": "success",
    "message": "Video Successfully Found",
    "data": {
        "id": 45,
        "videoTitle": "Rwanda Is Beautiful by Kalisa Aimable",
        "videoDescription": "This song describes the beauty of Rwanda",
        "videoUrl": "https://www.youtube.com/watch?z=YqeW9_5kURI",
        "createdAt": "2019-11-09T09:48:28.141Z",
        "updatedAt": "2019-11-09T09:48:28.141Z"
    }
}
```

5. Deleting A Video: DELETE request

Request:

```json
/api/v1/videos/:id
```

Response:

```json
{
    "status": "success",
    "message": "Video Deleted Successfully"
}
```
### BLOG CRUD ROUTES

1. Posting a blog: POST request

First:

- Open Postman, go to Headers Tab And assign the following:
 Key:Content-Type 
 Value: Application/json

Request:

```json
/api/v1/blogs
```
- Then Head to Body Tab, select raw then write your content

Body:

```json
{
	"blogTitle": "Blog Title goes here",
	"blogDescription": "Blog Description goes here",
    "blogPost": "Blog Post goes here",
    "blogPic":"Blog Picture URL"
}
```
Response:

```json
{
    "status": "success",
    "message": "Blog Added!",
    "data": {
        "id": 1,
        "blogTitle": "Blog Title goes here",
        "blogDescription": "Blog Description",
        "blogPost": "Blog Post goes here",
        "blogPic": "Blog Picture URL",
        "updatedAt": "2019-11-12T10:23:30.865Z",
        "createdAt": "2019-11-12T10:23:30.865Z"

    }
}
```

2. Updating a Blog: PUT request

First:
- In Postman, head to Headers Tab And assign the following:
Key: Content-Type
Value: Application/json

- Then Head to Body Tab, select raw then write your updates

Body:
```json
{
        "blogDescription": "A New Description",
}
```

Request:

```json
/api/v1/blogs/:id
```
Response:

```json
{
    "message": "Blog Updated",
    "data": {
        "id": 1,
        "blogTitle": "Blog Title goes here",
        "blogDescription": "A New Description",
        "blogPost": "Blog Post goes here",
        "blogPic": "Blog Picture URL",
        "updatedAt": "2019-11-12T10:23:30.865Z",
        "createdAt": "2019-11-12T10:23:30.865Z"
    }
}
```

3. Viewing All Blogs: GET request

Request:

```json
/api/v1/blogs

```
Response:

```json
{
    "status": "success",
    "message": "All Blogs Retrieved",
    "data": [
        {
            "id": 2,
            "blogTitle": "RWANDA",
            "blogDescription": "Visit RWANDA",
            "blogPost": "Come and tour Rwanda",
            "blogPic": "https://www.google.com/kjnskjbkjs",
            "createdAt": "2019-11-12T14:40:47.469Z",
            "updatedAt": "2019-11-12T14:40:47.469Z"
        },
        {
            "id": 1,
            "blogTitle": "Blog Title goes here",
            "blogDescription": "A New Description",
            "blogPost": "Blog Post goes here",
            "blogPic": "Blog Picture URL",
            "createdAt": "2019-11-12T10:23:30.865Z",
            "updatedAt": "2019-11-12T10:23:30.865Z"

        }
    ]
}
```

4. Viewing a single Blog: GET request

Request:

```json
/api/v1/blogs/:id
```
Response:

```json
{
    "message": "Blog Found",
    "data": {
        "id": 2,
        "blogTitle": "RWANDA",
        "blogDescription": "Visit RWANDA",
        "blogPost": "Come and tour Rwanda",
        "blogPic": "https://www.google.com/kjnskjbkjs",
        "createdAt": "2019-11-12T14:40:47.469Z",
        "updatedAt": "2019-11-12T14:40:47.469Z"
        }
}
```

5. Deleting A Blog : DELETE request

Request:

```json
/api/v1/blogs/:id
```
Response:

```json
{
    "status": "success",
    "message": "Blog Deleted"
}
```
### EVENTS  CRUD ROUTES


1. Logging In: POST request

Request:

```json
/api/v1/auth/signin
```

Body:

```json
{
    "username": "johndoe",
    "password": "mypass123"
}
```

Response:

```json
{
    "status": 200,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFt"
    }
}
```
2. Posting an Event: POST request

```json
/api/v1/events
```

First:
- In Postman, head to Headers Tab And assign the following:
 Key:Authorization
 Value: Bearer 
 and pass in the token
- Then Head to Body Tab and select Raw

Body:

```json
{
	"eventName": "My First Event",
    "eventDescription": "My Event is Awesome",
    "eventDate": "02/Feb/2020",
    "eventImageUrl": "Downloads/mypic.jpg"
}
```

Response:

```json
{
    "status": "success",
    "message": "Event Added!",
    "data": {
        "id": 6,
        "eventName": "My First Event",
        "eventDescription": "My Event is Awesome",
        "eventDate": "02/Feb/2020",
        "eventImageUrl": "Downloads/mypic.jpg",
        "updatedAt": "2019-11-12T10:47:38.284Z",
        "createdAt": "2019-11-12T10:47:38.284Z"
    }
}
```
3. Updating an Event: PUT request

```json
/api/v1/events/:id
```

First:
- In Postman, head to Headers Tab And assign the following:
 Key:Authorization
 Value: Bearer 
 and pass in the token
- Then Head to Body Tab and select Raw

Body

```json
{
	"eventName": "My Birthday",
	"eventDescription": "My Birtday will be awseome"
}
```

Response:

```json
{
    "status": "success",
    "message": "Event Updated",
    "data": [
        1,
        [
            {
                "id": 6,
                "eventName": "My Birthday",
                "eventDescription": "My Birtday will be awseome",
                "eventDate": "02/Feb/2020",
                "eventImageUrl": "Downloads/mypic.jpg",
                "createdAt": "2019-11-12T10:47:38.284Z",
                "updatedAt": "2019-11-12T10:50:41.513Z"
            }
        ]
    ]
}
```
4. Viewing All Events: GET request

```json
/api/v1/events
```

Response:

```json
{
    "status": "success",
    "message": "Events retrieved successfully",
    "data": [
        {
            "id": 6,
            "eventName": "My Birthday",
            "eventDescription": "My Birtday will be awesome",
            "eventDate": "02/Feb/2020",
            "eventImageUrl": "Downloads/mypic.jpg",
            "createdAt": "2019-11-12T10:47:38.284Z",
            "updatedAt": "2019-11-12T10:50:41.513Z"
        },
        {
            "id": 2,
            "eventName": "Iwacu Muzika Festival",
            "eventDescription": "Iwacu Muzika Festival. For Citizens",
            "eventDate": "25/Dec/2019",
            "eventImageUrl": "Downloads/IMG_5821.JPG",
            "createdAt": "2019-11-11T20:00:27.615Z",
            "updatedAt": "2019-11-11T20:01:45.885Z"
        },
        {
            "id": 1,
            "eventName": "Wasafi Music Festival",
            "eventDescription": "Festival of launching",
            "eventDate": "24/oct/2019",
            "eventImageUrl": "Downloads/alanwalker unity.jpg",
            "createdAt": "2019-11-11T19:56:50.490Z",
            "updatedAt": "2019-11-11T19:56:50.490Z"
        }
    ]
}
```
5. Viewing a single Event: GET request

```json
/api/v1/events/:id
```

Response:

```json
{
    "status": "success",
    "message": "Event Found",
    "data": {
        "id": 6,
        "eventName": "My Birthday",
        "eventDescription": "My Birtday will be awseome",
        "eventDate": "02/Feb/2020",
        "eventImageUrl": "Downloads/mypic.jpg",
        "createdAt": "2019-11-12T10:47:38.284Z",
        "updatedAt": "2019-11-12T10:50:41.513Z"
    }
}
```
6. Deleting an Event: DELETE request
```json
/api/v1/events/:id
```
First:
- In Postman, head to Headers Tab And assign the following, Key:Authorization, Value: Bearer and pass in the token


Response:

```json
{
    "status": "success",
    "message": "Event Deleted Successfully"
}
```

### Contributors

- Kenny Ruzindana ( VIDEO & EVENTS CRUD ROUTES )
- Manzi Christian ( BLOG CRUD ROUTES )