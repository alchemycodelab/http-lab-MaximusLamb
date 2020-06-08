module.exports = rawRequest => {
    const thing = rawRequest.split(' ');

    const [method, path, , , body] = thing;
// console.log(body)
if(!body.includes('\n')) {
    return {
        method: method,
        path: path,
    }
} else {
    const array = body.split('\n');
    // const splitArray = array.split('fr')
    return {
        
        method: method,
        path: path,
        body: array[2]
    }
}
};
