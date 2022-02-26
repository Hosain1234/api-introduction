const user = {
    name: 'mokhles',
    address: 'paradice',
    job: 'job-less',
    password: '$mokhles'
}
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'dream shop',
    address: 'when you are sleeping',
    products: [ 'Allah er sathe dekha', 'jannat', 'fame', 'beautiful hur'],
    isPossible: true
}
const dreamStringify = JSON.stringify(shop);
console.log(dreamStringify);
const convertedIntoRegularArray = JSON.parse(dreamStringify);
console.log(convertedIntoRegularArray);

