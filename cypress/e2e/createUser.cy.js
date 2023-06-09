
describe("Create a new user and assert that he exist", () => {

    it("creating a user", () => {

        cy.request({
            method: "POST",
            url: "http://localhost:3000/user",
            body: {
                "name": "Mitar Miric",
                "email": "mitarmiric43@gmail.com",
                "profile": "../database/mitar.jpg",
                "status": "Active",
                "role": "Singer"
            }
        });
    });

    it("Match a new user and make assertion on it", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/user?role=Singer",

        }).then(response => {
            cy.log(JSON.stringify(response.body))
            let body = JSON.parse(JSON.stringify(response.body));

            cy.log(body[0])

            expect(body[0].name).to.be.eq("Mitar Miric")
            expect(body[0].status).to.be.eq("Active")
        });
    });
});