import jasmine from "jasmine";
import { user,Users } from "../models/users";
import {Products} from "../models/products";
import {Orders} from "../models/orders";

describe('Testing user modle',()=>{

    const usersclient = new Users();

    it('should create new user',async ()=>{
        const newUser = await usersclient.create('aa','pp','pass123');
        expect(newUser).toBeDefined(); 
    })

    it('should show a user',async ()=>{
        const newUser = await usersclient.show(1);
        expect(newUser).toBeDefined(); 
    })

    it('should show all users',async ()=>{
        const newUsers = await usersclient.index();
        expect(newUsers).toBeDefined(); 
    })

})

describe('Testing products modle',()=>{

    const Productclient = new Products();

    it('should create new product',async ()=>{
        const newProduct = await Productclient.create('newprod',1000);
        expect(newProduct).toBeDefined(); 
    })

    it('should show a product',async ()=>{
        const newProduct = await Productclient.show(2);
        expect(newProduct).toBeDefined(); 
    })

    it('should show all products',async ()=>{
        const newProduct = await Productclient.index();
        expect(newProduct).toBeDefined(); 
    })

})

describe('Testing orders modle',()=>{

    const orderclient = new Orders();

    it('should create new order',async ()=>{
        const newOrder = await orderclient.create(1,true);
        expect(newOrder).toBeDefined(); 
    })

    it('should show a order',async ()=>{
        const newOrder = await orderclient.show(2);
        expect(newOrder).toBeDefined(); 
    })

    it('should show all orders',async ()=>{
        const newOrder = await orderclient.index();
        expect(newOrder).toBeDefined(); 
    })

})