
describe("PUT Req",()=>{

    it("Update an existing post",()=>{

          cy.request({
            method: "PUT",
            url:"http://localhost:3000/user/5",
            body:{
                title:"This title is just updated",
                author:"Stefan Sakovic 1995",
                status: "Singer is not in our team anymore"
            }
          }).then(response =>{
            cy.log(JSON.stringify(response.body))
            let body =JSON.parse(JSON.stringify(response.body));

            expect(response.status).to.be.eq(200)

            expect(body.title).to.be.eq("This title is just updated")
          })  
    })
})