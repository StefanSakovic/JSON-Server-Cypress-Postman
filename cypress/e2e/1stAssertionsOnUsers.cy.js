describe("Get Request", () => {

    let result;

    it("Validate status code of the /user api", () => {

        result = cy.request("http://localhost:3000/user")
        result.its("status").should('equal', 200)
    })

    it("Validate status of response", () => {

        cy.request("http://localhost:3000/user").then((resp) => {
            cy.log(resp.status)
            if (resp.status === 200) {
                cy.log("status response is 200")
            }
        })
    })

    it("Validate users api contains the correct keys and values", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/user",
            headers: {
                accept: "application/json"
            }

        }).then(response => {
            cy.log("This is RESPONSE", response)
            cy.log(JSON.stringify(response))
            cy.log(JSON.stringify(response.headers))
            cy.log(JSON.stringify(response.body))

            //via cy.log we know how to access response data
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log("THIS IS BODY", body)
            cy.log(JSON.stringify(body[0]))

            expect(body[0]).has.property("name", "Dusan Pilipovic")
            expect(body[1]).has.property("name", "Djordje Kergetic")
            expect(body[4]).has.property("name", "David Grbic")
            expect(body[3]).has.property("name", "Mitar Miric")

            cy.log("user with id 3 have status", body[2].status)
            // expect(body[2]).has.property('status',"Active")   and so on...
        })
    })
})











