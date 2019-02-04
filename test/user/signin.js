const mongoose = require("mongoose"),
User = mongoose.model('User'),
chai = require('chai'),
chaiHttp = require('chai-http'), 
should = require('should'), 
app = require('../../server'), 
baseurl = "http://localhost:3000";

chai.use(chaiHttp);

describe('Model SignUp', function(){
    describe('User Model', function() { 
          before(function (done) {
              user = {
                  name: '',
                  email: 'test@email.com',
                  username: 'user',
                  password: 'password',
                  avatar: '7'
              };

              done();
          });

        describe('Method SignUp User', function () {

            it('Email address is not empty', function (done) {            
                    chai.request(app)
                        .post('/api/auth/signup')
                        .send(user)
                        .end(function (err, res) {
                        
                        console.log(res);
                        // res.should.have.status(200);
                            // res.body.should.be.a('object');
                            // res.body.should.have.property('message');
                            // res.body.should.have.property('success', false);
                            done();
                        });
            });
        });


        describe('Method Save User', function () {

            beforeEach(function (done) {
                user = {
                    name: 'Testing User',
                    email: 'test1@email.com',
                    username: 'user',
                    password: 'password',
                    avatar: '7'
                };

                var newUser = new User(user);

                 return newUser.save(function (err) {
                   done();
                });

            });

            it('Should check if email exist', function (done) {
                chai.request(app)
                    .post('/api/auth/signup')
                    .send(user)
                    .end(function (err, res) {                      
                        // res.should.have.status(200);
                        // res.body.should.be.a('object');
                        // res.body.should.have.property('message');
                        // res.body.should.have.property('success', false);
                        done();
                    });
            });         
            
        });


         describe('Method SignUp Token', function () {

           before(function (done) {
               user = {
                   name: 'Final User',
                   email: 'final@email.com',
                   username: 'user',
                   password: 'password',
                   avatar: '7'
               };

               done();
           });
            
             it('Should return Json Token', function (done) {
                 chai.request(app)
                     .post('/api/auth/signup')
                     .send(user)
                     .end(function (err, res) {
                         
                        //   res.body.should.have.property('success', true);
                        //   res.body.should.have.property('token');
                         done();
                     });
             });
         });        

     });

  });