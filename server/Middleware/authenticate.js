const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).json({ error: "Unauthorised Request" });
    }
    const headerToken = req.headers.authorization;
    let splitted = headerToken.split(" ");
    const token = splitted[1];
    if (token === null) {
        return res.status(401).json({ error: "Unauthorised Request token null" });
    }
    let payload = jwt.verify(token, process.env.SPECIAL_KEY);
    if (!payload) {
        return res.status(401).json({ error: "Unauthorised Request no payload" });
    }
    req.userId = payload._id;
    next();
}

module.exports = verifyToken;

