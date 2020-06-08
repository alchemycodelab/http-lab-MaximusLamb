module.exports = rawRequest => {
    const thing = rawRequest.split(' ');
    const [method, path] = thing;
    const [, body] = rawRequest.split('\r\n\r\n');

if(!body) {
    return {
        method: method,
        path: path,
    }
} else {    
    return {       
        method,
        path,
        body
    }
}
};
