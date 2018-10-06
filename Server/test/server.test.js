
const generate = require("../build/config/generate");
const app = require('../build/server');
const request = require('supertest');

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


  /**
 * Testing get all user endpoint
 */
describe('GET /user/E001', function () {
  it('respond with json containing a user', function (done) {
      request(app)
          .get('/users')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
  });
});

  /**
 * Testing get all user endpoint
 */
describe('GET /users', function () {
  it('respond with json containing a user', function (done) {
      request(app)
          .get('/users')
          .expect(403, done);
  });
});
  
  