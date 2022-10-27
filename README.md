
# React CRUD application with free API

## Used technologies:
- React (https://reactjs.org/)
- Tailwind (https://tailwindcss.com/)
- CrudRud (https://crudcrud.com/)

In this project you can store informations about movies. And
you can interact with this data throught API.
The CrudRuc provides API for this React app. But there is a limit.
Only 100 request allowed and the API lives only 24 hours. 
So after the project clone you have to change the API.

## Usage

```bash
  git clone ...
  cd registry-database
  npm install
  npm start
```
After this you have to visit https://crudcrud.com/ and copy the
last part of generated API 'https://crudcrud.com/api/this_part_of_the_url'
and paste into the key variable in the KeyContextProvider component. 
That's it. Now you can create/read/update and delete data.

![image](https://user-images.githubusercontent.com/49237834/198271932-9c01f27d-4c1b-4c5d-92ac-f356683238cc.png)
