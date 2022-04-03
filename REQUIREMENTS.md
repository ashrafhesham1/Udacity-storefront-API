
# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

  

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

  

  

# API Routes

*note : when a token is required it should be passed through a header with a key `x_auth_token`*
  

## User routes

Endpoint : `/api/users`

### RESTFUL Routes:

`/index` : show all users [token required] \[get]

`/create` : create new user  \[post] \[body parameters : {'firstName':string, "lastName":string, "password":string}]

`/show` : show  user by id [token required] \[get] \[body parameters : {'id':Number}]


## Products routes

Endpoint : `/api/products`

### RESTFUL Routes:

`/index` : show all products  \[get]

`/create` : create new product [token required] \[post] \[body parameters : {'name':string,"price":Number}]

`/edit` : edit product by id [token required] \[post] \[body parameters : {'id':Number', name':string -optional- , "price":Number -optional }]

`/show` : show  product by id  \[get] \[body parameters : {'id':Number}]

## Orders routes

Endpoint : `/api/orders`

### RESTFUL Routes:

`/index` : show all orders  \[get] \[token required] 

`/create` : create new order [token required] \[post] \[body parameters : {'userId':Number,"active":Boolean}]

`/edit` : edit order by id [token required] \[post] \[body parameters : {'id':Number', active':Boolean -optional-  }]

`/show` : show  order by id \[token required] \[get]   \[body parameters : {'id':Number}]

`/current` : show orders by the current user \[token required]  \[get]  \[body parameters : {'id':Number}]

## Products routes

Endpoint : `/api/productorder`

### RESTFUL Routes:

`/index` : show all products existed in orders [token required] \[get]

`/create` : put new product in an order by id [token required] \[post] \[body parameters : {'orderId':Number,"productId":Number,"quantity":Number}]

`/edit` : edit the quantity of a product in an orderby id [token required] \[post] \[body parameters : {'orderId':Number,"productId":Number,"quantity":Number}]

`/show` : show  quantity of a product in an order by id  \[get] \[body parameters : {'orderId':Number,"productId":Number}]

## Sign in route

Endpoint : `/api/signin` 

sign the user into the application and return a token [token required] \[post] \[body parameters : {'id':Number,"password":String}]


# DataBase Shapes

#### Products

- id : Serial [ Primary key ]

- name : varchar

- price : double

 
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


	


