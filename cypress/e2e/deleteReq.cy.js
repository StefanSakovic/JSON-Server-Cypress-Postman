
describe("Delete Req", () => {

    it("Delete a user that we created via POST req ", () => {

        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/user/5",
            /*we can delete the user by changing the id
            as u can se on "http://localhost:3000/posts"*/
          

        })
    });
    
}); 