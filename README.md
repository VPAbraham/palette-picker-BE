<<<<<<< HEAD
## Retrieve all project data
A successful response returns an array of project objects.

`GET` /api/v1/projects/:id

## Retrieve All Project Data
A successful response returns an array of project objects.

GET /api/v1/projects

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

## Retrieve project by ID

GET /api/v1/palettes

### Parameters

| Name | Type | Description |
|------|------|-------------|
|id|integer| Unique project ID|
|name|string|Project name|
|projects_id|number|Foreign Key|
|color1|string|Hex Value - #000000|
|color2|string|Hex Value - #000000|
|color3|string|Hex Value - #000000|
|color4|string|Hex Value - #000000|
|color5|string|Hex Value - #000000|
|created_at|string|Project creation date/time|
|update_at|string|Project's last updated date/time|

### Response

Example:
```js
[
  {
    "id": 137,
    "name": "Fall",
    "projects_id": 25,
    "color1": "#3CCB84",
    "color2": "#697689",
    "color3": "#3CCB84",
    "color4": "#697689",
    "color5": "#3CCB84",
    "created_at": "2019-12-04T23:34:45.821Z",
    "updated_at": "2019-12-04T23:34:45.821Z"
  },
  {
    "id": 138,
    "name": "Winter",
    "projects_id": 27,
    "color1": "#3CCB84",
    "color2": "#697689",
    "color3": "#3CCB84",
    "color4": "#697689",
    "color5": "#3CCB84",
    "created_at": "2019-12-04T23:34:45.821Z",
    "updated_at": "2019-12-04T23:34:45.821Z"
  },
  {
    "id": 139,
    "name": "Spring",
    "projects_id": 26,
    "color1": "#3CCB84",
    "color2": "#697689",
    "color3": "#3CCB84",
    "color4": "#697689",
    "color5": "#3CCB84",
    "created_at": "2019-12-04T23:34:45.821Z",
    "updated_at": "2019-12-04T23:34:45.821Z"
  }
]
```

## Retrieve Specific Project Data

A successful response returns the specified project object, by ID.

`GET` /api/v1/projects/:id

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

### Add a new project
A successful response returns the id of the new project.

`POST` /api/v1/projects

GET /api/v1/palettes/:id

### Parameters

| Name | Type | Description |

|id|integer| Unique project ID|
|name|string|Project name|

### Response

Example:
```js
10
```

### Delete and existing project
A successful response returns the id of the new project.

`DELETE` /api/v1/projects/:id

### Parameters

| Name | Type | Description |
|id|integer| Unique project ID|
|name|string|Project name|

### Response

Example:
```js
5
```

|------|------|-------------|
|id|integer| Unique project ID|
|name|string|Project name|
|projects_id|number|Foreign Key|
|color1|string|Hex Value - #000000|
|color2|string|Hex Value - #000000|
|color3|string|Hex Value - #000000|
|color4|string|Hex Value - #000000|
|color5|string|Hex Value - #000000|
|created_at|string|Project creation date/time|
|update_at|string|Project's last updated date/time|


### Response

Example:
```js
[
  {
    "id": 137,
    "name": "Fall",
    "projects_id": 25,
    "color1": "#3CCB84",
    "color2": "#697689",
    "color3": "#3CCB84",
    "color4": "#697689",
    "color5": "#3CCB84",
    "created_at": "2019-12-04T23:34:45.821Z",
    "updated_at": "2019-12-04T23:34:45.821Z"
  }
]
```
