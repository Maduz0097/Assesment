function projectObject(source, proto) {
    const projected = {};
    for (let prop in proto) {
        if (prop in source) {
            projected[prop] = source[prop];
        }
    }
    return projected;
}


const sourceObject = {
    name: {
        firstName:'John',
        secondName:'Cena'
    },
    age: 26,
    address: 'Maharagama',
    email: 'yamika@gmail.com'
};

const prototypeObject = {
    name: null,
    age: 0,
};

const projectedObject = projectObject(sourceObject, prototypeObject);

console.log(projectedObject);