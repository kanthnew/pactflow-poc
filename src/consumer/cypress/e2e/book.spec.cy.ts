import booksService from "../../services/booksService"

import { Matchers } from "@pact-foundation/pact-web";
const { like, eachLike } = Matchers;

let server
describe('Books API UI tests', () => {

    before(() => {
        cy.mockServer({
            consumer: "book-consumer",
            provider: 'book-provider',
        }).then(opts => {
            server = opts
        })
    })



    it('should add a new book', () => {
        cy.addMockRoute({
            server,
            as: 'add-book',
            state: "Book does not exist",
            uponReceiving: "a request to add book",
            withRequest: {
                method: "POST",
                path: "/book",
                body: {
                    "name": "test", "author":"test"
                }
            },
            willRespondWith: {
                status: 200,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: {
                    "id": 1,
                    "name":"test",
                    "author": "test"
                }
            },
        });
        booksService.addBook({
            "name":"test",
            "author": "test author"
        }).then( (res) => {
                console.log(res.data)
                cy.wait("@add-book")
            }

        )
    })

    after(() => {
    })
})