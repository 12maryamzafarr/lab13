const request = require ("supertest");
const app = require("./routes/User");
const mongoose = require ("mongoose");

describe ("Test the root path" , () => {
    test ("response the POST method" , () => {
        const response = request(app).post("https://localhost:8000/User/add").send({
            "Name" : "Maryam",
            "Email": "Unknow",
            "Age" : 20,
            "Contact" : 111
        })
            expect(response.statusCode).toBe(200);
    })
})

describe ("Test the root path" , () => {
    test ("response the POST method" , () => {
        const response = request(app).delete("https://localhost:8000/User/:id").send({
            
        "id" : "6367cd59e5d2f4b661d73d14"

        })
            expect(response.statusCode).toBe(200);
    })
})

describe ("Test the root path" , () => {
    test ("response the POST method" , () => {
        const response = request(app).post("https://localhost:8000/User/add").send({
            "Name" : "Maryam",
            
        })
            expect(response.statusCode).toBe(200);
    })
})



