import app from "../server";
import supertest from "supertest";
import { createJWT } from "../signin";

const x_auth_token = createJWT("1")

const req = supertest(app);

describe('users end points',()=>{

    it('should create user',async()=>{
        const res =  await  req.post('/api/users/create')
           .send({
              "firstName":"aa",
               "lastName":"bb",
            "password":"password123"
           })
        expect(res.statusCode).toBe(200);
    })

    it('should show user with token',async()=>{
        const res =  await req.get('/api/users/show').set("x_auth_token",x_auth_token).send({"id":1})
        expect(res.statusCode).toBe(200);
    })

    it('should show all users with token',async()=>{
      const res =  await req.get('/api/users/index').set("x_auth_token",x_auth_token)
      expect(res.statusCode).toBe(200);
    })

    it('shouldn\'t show  users without token',async()=>{
        const res =  await  req.get('/api/users/index')
        expect(res.statusCode).toBe(400);
      })
    
})

describe('products end points',()=>{

    it('should create product with token',async()=>{
        const res =  await  req.post('/api/products/create')
           .set("x_auth_token",x_auth_token)
           .send({
              "name":"newprod",
              "price":1111
           })
        expect(res.statusCode).toBe(200);
    })
   
   it('should show product',async()=>{
           const res =  await  req.get('/api/products/show').send({"id":1})
           expect(res.statusCode).toBe(200);
    })
   
    it('should edit product with token',async()=>{
        const res =  await  req.post('/api/products/edit')
            .set("x_auth_token",x_auth_token)
            .send({
                "id":1,
                "price":2222
            })
        expect(res.statusCode).toBe(200);
    })

    it('should show all products ',async()=>{
      const res =  await  req.get('/api/products/index')
      expect(res.statusCode).toBe(200);
    })

    
})

describe('Orders end points',()=>{

    it('should create orders with token',async()=>{
        const res =  await  req.post('/api/orders/create')
           .set("x_auth_token",x_auth_token)
           .send({
              "userId":1,
              "active":true
        })
        expect(res.statusCode).toBe(200);
    })
   
    it('should show order',async()=>{
           const res =  await  req.get('/api/orders/show').set("x_auth_token",x_auth_token).send({"id":1})
           expect(res.statusCode).toBe(200);
    })
   
    it('should edit order with token',async()=>{
        const res =  await  req.post('/api/orders/edit')
            .set("x_auth_token",x_auth_token)
            .send({
                "id":1,
                "active":false
            })
        expect(res.statusCode).toBe(200);
    })

    it('should show all orders by a user ',async()=>{
        const res =  await  req.get('/api/orders/current')
        .set("x_auth_token",x_auth_token)
        .send({
            "id":1
        })
        expect(res.statusCode).toBe(200);
    })

    it('should show all orders ',async()=>{
      const res =  await  req.get('/api/orders/index').set("x_auth_token",x_auth_token)
      expect(res.statusCode).toBe(200);
    })
})

describe('productorder end points',()=>{

    it('should add product to order with token',async()=>{
        const res =  await  req.post('/api/productorder/create')
           .set("x_auth_token",x_auth_token)
           .send({
              "productId":1,
              "orderId":1,
              "quantity":1
        })
        expect(res.statusCode).toBe(200);
    })
   
    it('should show product in order',async()=>{
           const res =  await  req.get('/api/productorder/show')
           .set("x_auth_token",x_auth_token)
           .send({
              "productId":1,
              "orderId":1
            })
           expect(res.statusCode).toBe(200);
    })
   
    it('should edit product in order with token',async()=>{
        const res =  await  req.post('/api/productorder/edit')
            .set("x_auth_token",x_auth_token)
            .send({
                "productId":1,
                "orderId":1,
                "quantity":1
            })
        expect(res.statusCode).toBe(200);
    })

    it('should show all products in orders ',async()=>{
      const res =  await  req.get('/api/productorder/index')
      .set("x_auth_token",x_auth_token)
      expect(res.statusCode).toBe(200);
    })

})

describe('sign in end point',()=>{
    it('sign the user in and return token', async()=>{
        const signIn = await req.post('/api/signin').send({
            "id":1,
            "password":"password123"
        })
        expect(signIn.statusCode).toBe(200)

    })
})