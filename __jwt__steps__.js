/**
 * install jsonwebtoken
 * jwt.sign(payload, secret, {expiresIn: '1hr'})
 * token client
 */

/**
 * How To Store Token In The Client Side:
 * 1. Memory ---> ok type
 * 2.localStorage -----> ok type(xss)
 * 3.cookies: http only
 */

/**
 * 1.set cookies with http only . for development secure : true
 * 2.cors
 * app.use(cors({
 * origin: ['htt://localhost:5173],
 * credentials:true
 * }));
 * 3.client side axios setting 
 */