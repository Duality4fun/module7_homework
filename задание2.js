function some(str, object) {
    for (let item in object)
        if (item === str) return true;

    return false;
}

let someNames = {
    Andrey: 4,
    Olga: 9,
    Dasha: 5
}

console.log(some("Olga", someNames));
