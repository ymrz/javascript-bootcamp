const user = {
  name: "Reed",
  username: "Something",
  details: {
    title: "Something",
  },
};

//nested destructuring

const {
  name,
  username,
  details: { title },
} = user;

function displayUser() {
  console.log(`${name}${username} is ${title}`);
}

console.log(displayUser());

//Merging objects

const user1 = {
  name: "",
  username: "",
  phone: "",
};

const newUser = {
  username: "test",
  phone: "123",
};

//Object.assign() Lets you update an object with properties from another object
Object.assign(user1, newUser);

//to avoid mutating the original object
Object.assign({}, user1, newUser, { verified: false });

//instead of above
//object spread operator
const createUser = { ...user1, ...newUser, verified: false };
console.log(createUser);

//Maps

const nums = {
  1: 1,
  true: true,
};

const map1 = new Map([
  [1, 1],
  [true, true],
]);

//To add key value pair to the map

map1.set("key", "value");

//To loop over map data

map1.forEach((value, key) => {
  console.log("key and value", key, value);
});
console.log([...map1.keys()]);

console.log(Object.keys(nums));

const user11 = { name: "john" };
const user22 = { name: "kate" };

const secretKey1 = "asadsd";
const secretKey2 = "gfgdsfsdfsd";

const newMap = new Map([]);

newMap.set(secretKey1, user11);

console.log("newmap", newMap);

const secretKeyMap = new Map([user11, secretKey1], [user22, secretKey2]);

//To get the secret key

const secret = secretKeyMap.get(user11);
console.log("secret", secret);

//Use WeakMap for garbage collection, if objects are used as keys
//to get the size
Map.size;
