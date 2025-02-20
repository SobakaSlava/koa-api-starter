const faker = require('faker');

const BaseBuilder = require('tests/base.builder');
const userService = require('resources/user/user.service');

const qwertyHash = '$2b$10$3d46e9T4n/UwEjIFFkIPXeoKSkgsz5jFE.20Cc9E8WOAjbGWqENs.';

class UserBuilder extends BaseBuilder {
  constructor() {
    super(userService);

    this.data.createdOn = new Date();
    this.data.firstName = faker.name.firstName();
    this.data.lastName = faker.name.lastName();
    this.data.signupToken = null;
    this.data.resetPasswordToken = `${this.data._id}_reset_password_token`;
    this.data.isEmailVerified = true;

    this.email();
    this.password();
    this.signupToken();
  }

  email(emailAddress) {
    this.data.email = emailAddress || faker.internet.email().toLowerCase();
    return this;
  }

  password(passwordHash = qwertyHash) {
    this.data.passwordHash = passwordHash;
    return this;
  }

  notVerifiedEmail() {
    this.data.isEmailVerified = false;
    return this;
  }

  signupToken(token) {
    this.data.signupToken = token || faker.random.alphaNumeric();
    return this;
  }
}

module.exports = UserBuilder;
