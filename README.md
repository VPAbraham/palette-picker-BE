## Retrieve All Project Data
A successful response returns an array of project objects.

`GET` /api/v1/projects

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

## Add A New Project
A successful response returns the id of the new project.

`POST` /api/v1/projects

### Parameters

| Name | Type | Description |
|------|------|-------------|
|id|integer| Unique project ID|
|name|string|Project name|

### Response

Example:
```js
10
```

## Delete An Existing Project
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

## Retrieve All Palette Data
A successful response returns an array of palette objects.

`GET` /api/v1/palettes

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

## Retrieve Specific Palette Data
A successful response returns the specified palette object, by ID.

`GET` /api/v1/palettes/:id

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
  }
]
```

## Add A New Palette
A successful response returns the id of the new palette.

`POST` /api/v1/palettes

GET /api/v1/palettes/:id

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

### Body

Need to provide a new palette object.

```js
{
  name: <String>,
  color1: <String>,
  color2: <String>,
  color3: <String>,
  color4: <String>,
  color5: <String>
}
```
Example:
```js
{
  name: "Fall",
  color1: "#FFFFFF",
  color2: "#000000",
  color3: "#688780",
  color4: "#BA3EH9",
  color5: "#008800"
}
```

### Response

Example:
```js
10
```

## Edit An Existing Palette
A successful response returns a message saying "Patch with an id of ${id} was successful".

`PATCH` /api/v1/palettes/:id

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

### Body

Need to list and existing key and new value you wish to overwrite.

```js
{ key: value }
```
Example:
```js
{ color1: "#FFFFFF" }
```

### Response

Example:
```js
"Patch with an id of 5 was successful."
```

## Delete An Existing Palette
A successful response returns a message saying "Project with an id of ${id} successfully deleted".

`DELETE` /api/v1/palettes/:id

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
"Project with an id of 5 successfully deleted."
```
