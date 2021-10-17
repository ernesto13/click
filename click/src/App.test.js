const rewire = require("rewire")
const App = rewire("./App")
const randomizeFriends = App.__get__("randomizeFriends")
// @ponicode
describe("randomizeFriends", () => {
    test("0", () => {
        let callFunction = () => {
            randomizeFriends()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
