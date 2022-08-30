import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
    const authHeader = req.get('Authorization')
    if(!authHeader) {
        const error = new Error('Not Authenticated.');
        error.statusCode = 401;
        throw error;
    }
    try {
        const token = authHeader.split(' ')[1];
        if(authHeader) {
            jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
                if(err) {
                    const error = new Error('Invalid Access Token.');
                    error.statusCode = 401;
                    throw error;
                }
                req.user = decodedToken
                next()
            })
        }
    } catch (error) {
        error.statusCode = 401
        throw error
    }
}
export default verifyToken