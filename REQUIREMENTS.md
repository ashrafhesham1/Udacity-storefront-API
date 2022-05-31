# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

# API Routes

_note : when a token is required it should be passed through a header with a key `x_auth_token`_

## User routes

Endpoint : `/api/users`

### RESTFUL Routes:

`/index` : show all users [token required] \[get]

`/:id` : show user by id [token required] \[get]

`/create` : create new user \[post] \[parameters : {'firstName':string, "lastName":string, "password":string}]

`edit/:id` : edit user by id [token required] \[get] \[parameters : {'firstName':string, "lastName":string}]

`/delete/:id` : delete user by id [token required] \[post]

## Products routes

Endpoint : `/api/products`

### RESTFUL Routes:

`/index` : show all products \[get]

`/:id` : show product by id \[get]

`/create` : create new product [token required] \[post] \[parameters : {'name':string, "price":Number, departmentId: Numbet, supplierId:Number}]

`/edit/:id` : edit product by id [token required] \[post] \[parameters : {name':string -optional- , "price":Number -optional }]

`/delete/:id` : delete product by id [token required] \[post]

`/user/:userid/recent` : show recent products burchased by a user by id \[token required] \[get] \[parameters : {rows:Number}]

## Orders routes

Endpoint : `/api/orders`

### RESTFUL Routes:

`/index` : show all orders \[get] \[token required]

`/:id` : show order by id \[token required] \[get]

`/create` : create new order [token required] \[post] \[parameters : {'userId':Number,"active":Boolean}]

`/edit/:id` : edit order by id [token required] \[post] \[parameters : { active':Boolean }]

`/delete/:id` : delete an order by id [token required] \[post]

`/:id/addProduct` : add product to an order by id [token required] \[post] \[parameters : {"productId":Number,"quantity":Number}]

`/:id/editProduct` : edit product in an order by id [token required] \[post] \[parameters : {"productId":Number,"quantity":Number}]

`/:id/deleteProduct` : delete product from an order by id [token required] \[post] \[parameters : {"productId":Number}]

`/user/:userId` : show orders by specific user by id \[token required] \[get]

`/user/:userId/active` : show active orders by specific user by id \[token required] \[get]

'/:id/products' : show all products report for an order by id \[token required] \[get]

## suppliers routes

Endpoint : `/api/suppliers`

### RESTFUL Routes:

`/index` : show all suppliers [token required] \[get]

`/:id` : show a supplier by id \[get]

`/create` : create new supplier [token required] \[post] \[parameters : {'name':String,"phone":Number}]

`/edit/:id` : edit supplier informations [token required] \[post] \[parameters : {'name':String -optional- ,"phone":Number -optional-}]

`/delete/:id` : delete a supplier by id [token required] \[post]

## departments routes

Endpoint : `/api/departments`

### RESTFUL Routes:

`/index` : show all departments [token required] \[get]

`/:id` : show a department by id \[get]

`/create` : create new department [token required] \[post] \[parameters : {'name':String}]

`/edit/:id` : edit department informations [token required] \[post] \[parameters : {'name':String }]

`/delete/:id` : delete a department by id [token required] \[post]

## dashboard routes

Endpoint : `/api/dashboard`

### Routes:

`/common/products` : show most common products \[get] \[parameters : {'rows':number}]

`/common/suppliers` : show most common suppliers \[get] \[parameters : {'rows':number}]

`/common/departments` : show most common departments \[get] \[parameters : {'rows':number}]

`/departments_avg` : show average prices in each department \[get]

## Sign in route

Endpoint : `/api/signin`

sign the user into the application and return a token [token required] \[post] \[parameters : {'id':Number,"password":String}]

# DataBase Schema

#### Products

- id : Serial [ Primary key ]

- name : varchar

- price : double

- department_id : integer [ foreign key (departments)]

- supplier_id : integer [ foreign key (suppliers)]

#### User

- id : serial [ Primary key ]

- first_name : varchar

- last_name : varchar

- password : text

#### Orders

- id : serial [ Primary key ]

- user_id : Integer [ foreign key ( users ) ]

- active : Boolean

#### Products_orders

- order_id : Integer [ foreign key ( orders ) ]

- product_id : Integer [ foreign key ( products ) ]

- quantity : Integer

  [**Primary key ( order_id, product_id )**]

#### suppliers

- id : Serial [ Primary key ]

- name : varchar

- phone : Number

#### departments

- id : Serial [ Primary key ]

- name : varchar
