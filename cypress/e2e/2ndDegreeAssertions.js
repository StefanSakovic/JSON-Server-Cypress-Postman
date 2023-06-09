
describe("Post Req", () => {

    let titleOfPosts = [];//array of all titles in JSON files

    let randomString = (Math.random() + 1).toString(36).substring(1) + (Math.random() + 1).toString(36).substring(1);
    /*we created dynamic randomString to be able to confirm that the current POST request has title of "randomString" 
    and after that we can perform a assertion for current title with GET request*/
    
    it("Create a new post via /posts api ", () => {

        cy.request({
            method: "POST",
            url: "http://localhost:3000/user",
            body: {
                title: randomString,
                author: "Stefan Sakovic",
                status: "Alwayes Available"
            }
        }).then(response => {
                expect(response.status).to.eql(201)
            })
        })
        
        // now lets say we want to make assertions on all titles in /user
        // we need to provide Get metod to catch all them and then :
        it("Validate last post title", () => {
            cy.request({
                method: "GET",
            url: "http://localhost:3000/user",
            headers: {
                accept: "application/json"
            }
            
        }).then(response=>{
            let body = JSON.parse(JSON.stringify(response.body))
            body.forEach(element => {
                titleOfPosts.push(element.title) 
            });
            
            //then we push all titles from each JSON into titleOfPosts array (u can see all JSON Objects on live server http://localhost:3000/user)
            const lastTitle = titleOfPosts[titleOfPosts.length-1]
            expect(lastTitle).to.be.eq(randomString)
            
            cy.log(titleOfPosts)
            cy.log(randomString)
        })
    })

}); 

///*IMPORTAN!!!:
//In this file, starting the update, i.e. saving this file, will do one POST REQUEST  and one GET REQ on live server  that serves us for creating a new user
//as u can se on "http://localhost:3000/user"