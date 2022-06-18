/**
 * @param {Object[]} users
 * @param {number} users.id
 * @param {string} users.firstName
 * @param {string} users.lastName
 */
 const logNames = users => {
	// return users.map(user => {
    //     return `logs: '${user.firstName} ${user.lastName}' and '${user.firstName} ${user.lastName}'`;
    // }).join(", ");
    let result = "";
    users.forEach(user => {
        result += "logs:" + " " + user.firstName + " " + user.lastName + " " + "and";
    });
    return result;
}

// Sample usage - do not modify
const sampleUsers = [{
  id: 1,
  firstName: "Sam",
  lastName: "Green"
}, {
  id: 2,
  firstName: "Alex",
  lastName: "Blue"
}];

console.log(logNames(sampleUsers)); // logs: "Sam Green" and "Alex Blue"