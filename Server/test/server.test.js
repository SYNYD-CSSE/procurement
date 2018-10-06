
const generate = require("../build/config/generate");
describe('Testing the Generator.', function() {

    // This is the name of the test
    it('should be generate next employee id', function(done) {

    const gen = new generate().newID(generate.lastEmployeeID);
    let acctual = gen.next().value;
    let expeted = 'E016';

      // We want this test to pass.
      if (acctual == expeted) {
        

        // If the behavior is as expected, call done with no argument.
        done();

      } else {

        // Otherwise, call done with an error.
        done(new Error("Not sure what's happened."));
      }
  
    });
  
  });
  