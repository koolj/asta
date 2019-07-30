/*
 * Licensed under TesterPRO license, all rights reserved 2019.
 * Created by KoolJ, aka koolj@testerpro.org.
 * Mar 11, 2019.
 */
const passportJwt = require('passport-jwt');
const util = require('util');

function CustomJwtStrategy(options, verify) {
  options.jwtFromRequest = passportJwt.ExtractJwt.fromUrlQueryParameter("token");
  passportJwt.Strategy.call(this, options, verify);
}

util.inherits(CustomJwtStrategy, passportJwt.Strategy);

module.exports = {
  Strategy: CustomJwtStrategy
};

