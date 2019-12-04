## Retrieve All Project Data
A successful response returns an array of project objects. 


GET /api/v1/projects/:id

### Parameters

| Name | Type | Description |
|------|------|-------------|
|id|integer| Unique project ID|
|name|string|Project name|
|created_at|string|Project creation date/time|
|update_at|string|Project's last updated date/time|


### Response

Example: 
```js
[
  {
    "id": 1,
    "name": "Neature",
    "created_at": "2019-12-03T22:17:16.382Z",
    "updated_at": "2019-12-03T22:17:16.382Z"
  },
  {
    "id": 2,
    "name": "Fall Stuff",
    "created_at": "2019-12-03T22:17:16.387Z",
    "updated_at": "2019-12-03T22:17:16.387Z"
  },
  {
    "id": 3,
    "name": "Animal Coats",
    "created_at": "2019-12-03T22:17:16.388Z",
    "updated_at": "2019-12-03T22:17:16.388Z"
  }
]
```

## Retrieve Specific Project Data
A successful response returns the specified project object, by ID.


GET /api/v1/projects/:id

### Parameters

| Name | Type | Description |
|------|------|-------------|
|id|integer| Unique project ID|
|name|string|Project name|
|created_at|string|Project creation date/time|
|update_at|string|Project's last updated date/time|






### Response

Example: 
```js
[
  {
    "id": 3,
    "name": "Animal Coats",
    "created_at": "2019-12-03T22:17:16.388Z",
    "updated_at": "2019-12-03T22:17:16.388Z"
  }
]
```