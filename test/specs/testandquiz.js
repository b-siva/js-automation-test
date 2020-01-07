const expect = require('chai').expect

describe('testandquiz.com page', () => {
   
    before(() => {
        console.log("*".repeat(30))
        console.log("Begining of all test")
	console.log("*".repeat(30))
	browser.url('https://www.testandquiz.com/selenium/testing.html')
    })
    
    beforeEach(() => {
	console.log("-".repeat(20))
   	console.log("Start to Run the Test")
        console.log("-".repeat(20))
    })
   
    afterEach(() => {
    	console.log("-".repeat(20))
        console.log("Finish running the Test")
	console.log("-".repeat(20))
    })

    after(() => {
	console.log("*".repeat(30))
    	console.log("End of all test")
        console.log("*".repeat(30))
    })


    it('should have the right title', () => {
        const title = browser.getTitle()
        expect(title).to.equal('Sample Test Page')
    })
 
    it('should demonstrate the addValue command', () => {
      let input = $('#fname')
      input.addValue('test')
      let idOfButton = $('#idOfButton')
      idOfButton.click() 
      let greenStyle = idOfButton.getHTML()
      expect(greenStyle).to.include('background: green;')
    })
})
