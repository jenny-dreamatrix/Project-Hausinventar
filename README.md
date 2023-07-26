# Project-Hausinventar

Project-Hausinventar is an API to create, show, update and delete furniture items.

# Collections

the database contains 3 collections:
- bigstuff
- notsobigstuff
- smallstuff

## Run Locally

clone the project:

```bash
  git clone https://github.com/jenny-dreamatrix/Project-Hausinventar.git
```

go to backend directory, install dependencies and start the server:

```bash
  cd backend
  npm install
  npm run dev
```
--------------

open new Terminal window

go to frontend directory, install dependencies and start the server:

```bash
  cd frontend
  npm install
  npm run dev
```

open Localhost in your Browser:

```bash
  http://localhost:3000/
```




# Endpoints

get all items from one category:

```bash
GET  /api/bigstuff
```
```bash
GET  /api/notsobigstuff
```
```bash
GET  /api/smallstuff
```

get one item from a category by id:

```bash
GET  /api/bigstuff/${id}
```
```bash
GET  /api/notsobigstuff/${id}
```
```bash
GET  /api/smallstuff/${id}
```

post an item to a category:

```bash
POST  /api/bigstuff
```
```bash
POST  /api/notsobigstuff
```
```bash
POST  /api/smallstuff
```

update an item by id:

```bash
PUT  /api/bigstuff/${id}
```
```bash
PUT  /api/notsobigstuff/${id}
```
```bash
PUT  /api/smallstuff/${id}
```

delete an item by id:

```bash
DELETE  /api/bigstuff/${id}
```
```bash
DELETE  /api/notsobigstuff/${id}
```
```bash
DELETE  /api/smallstuff/${id}
```

# Examples

## get all items from bigstuff collection:

```bash
GET  /api/bigstuff
```

what you get:

```bash
[
{
"_id": "64be2d9923a1e6a62ec281c0",
"title": "Bett",
"room": "Schlafzimmer",
"image": {
"url": "https://res.cloudinary.com/dryqtwdls/image/upload/v1690185113/Hausinventar/qmipw4hmqahqqu7mdayr.webp",
"imageId": "Hausinventar/qmipw4hmqahqqu7mdayr",
"_id": "64be2d9923a1e6a62ec281c1"
},
"content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur provident at labore repudiandae reiciendis praesentium, amet repellendus ipsum, expedita ratione corrupti sapiente vel quasi! ",
"__v": 0
},
{
"_id": "64be2dc623a1e6a62ec281c3",
"title": "Sessel",
"room": "Flur",
"image": {
"url": "https://res.cloudinary.com/dryqtwdls/image/upload/v1690185158/Hausinventar/t7ae56ejquawbdvhwujr.webp",
"imageId": "Hausinventar/t7ae56ejquawbdvhwujr",
"_id": "64be2dc623a1e6a62ec281c4"
},
"content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur provident at labore repudiandae reiciendis praesentium, amet repellendus ipsum, expedita ratione corrupti sapiente vel quasi!",
"__v": 0
},
{
"_id": "64be2de023a1e6a62ec281c6",
"title": "Couch",
"room": "Wohnzimmer",
"image": {
"url": "https://res.cloudinary.com/dryqtwdls/image/upload/v1690185183/Hausinventar/iwuhsy4ci6mgc5begazg.webp",
"imageId": "Hausinventar/iwuhsy4ci6mgc5begazg",
"_id": "64be2de023a1e6a62ec281c7"
},
"content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur provident at labore repudiandae reiciendis praesentium, amet repellendus ipsum, expedita ratione corrupti sapiente vel quasi!",
"__v": 0
},
{
"_id": "64be2df623a1e6a62ec281c9",
"title": "Esstisch",
"room": "Küche",
"image": {
"url": "https://res.cloudinary.com/dryqtwdls/image/upload/v1690185205/Hausinventar/emffm6todr1rufogaxtx.webp",
"imageId": "Hausinventar/emffm6todr1rufogaxtx",
"_id": "64be2df623a1e6a62ec281ca"
},
"content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur provident at labore repudiandae reiciendis praesentium, amet repellendus ipsum, expedita ratione corrupti sapiente vel quasi!",
"__v": 0
}
]
```

## get one item from bigstuff collection by id:

```bash
GET  /api/bigstuff/64be2dc623a1e6a62ec281c3
```

what you get:

```bash
{
"_id": "64be2dc623a1e6a62ec281c3",
"title": "Sessel",
"room": "Flur",
"image": {
"url": "https://res.cloudinary.com/dryqtwdls/image/upload/v1690185158/Hausinventar/t7ae56ejquawbdvhwujr.webp",
"imageId": "Hausinventar/t7ae56ejquawbdvhwujr",
"_id": "64be2dc623a1e6a62ec281c4"
},
"content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur provident at labore repudiandae reiciendis praesentium, amet repellendus ipsum, expedita ratione corrupti sapiente vel quasi!",
"__v": 0
}
```

## post a new item to bigstuff collection:

```bash
POST  /api/bigstuff
```

use the following parameters:

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`   | `string` | **Required**. title of item       |
| `room`    | `string` | **Required**. room of item        |
| `content` | `string` | **Required**. content of item     |
| `url`     | `string` | **Required**. url of image        |
| `imageId` | `string` | **Required**. id of image         |


## update one item from bigstuff collection by id:

```bash
PUT  /api/bigstuff/64be2dc623a1e6a62ec281c3
```

use the following parameters:

(you can change one parameter while the others will stay the same. only the changed value will update.)

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`   | `string` | **Required**. title of item       |
| `room`    | `string` | **Required**. room of item        |
| `content` | `string` | **Required**. content of item     |
| `url`     | `string` | **Required**. url of image        |
| `imageId` | `string` | **Required**. id of image         |






# Parameters explained

### Example:

```bash
GET  /api/bigstuff/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

-------------------

### Example:

```bash
{
"_id": "64be2dc623a1e6a62ec281c3",
"title": "Sessel",
"room": "Flur",
"image": {
"url": "https://res.cloudinary.com/dryqtwdls/image/upload/v1690185158/Hausinventar/t7ae56ejquawbdvhwujr.webp",
"imageId": "Hausinventar/t7ae56ejquawbdvhwujr",
"_id": "64be2dc623a1e6a62ec281c4"
},
"content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur provident at labore repudiandae reiciendis praesentium, amet repellendus ipsum, expedita ratione corrupti sapiente vel quasi!",
"__v": 0
}
```


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`   | `string` | **Required**. title of item       |
| `room`    | `string` | **Required**. room of item        |
| `content` | `string` | **Required**. content of item     |
| `url`     | `string` | **Required**. url of image        |
| `imageId` | `string` | **Required**. id of image         |
