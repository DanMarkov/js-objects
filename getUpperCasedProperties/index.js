/**
 * @param {Object} course
 * @param {number} [course.id]
 * @param {string} [course.name]
 * @param {number} [course.year]
 */
 const getUpperCasedProperties = course => {
    // console.log(Object.keys(course).join(', ').toUpperCase().split(', '));
	// return Object.keys(course).join(', ').toUpperCase().split(', ');
    return Object.keys(course).map(item => {
        return item.toUpperCase();
    });
}

// Sample usage - do not modify
console.log(getUpperCasedProperties({ id: 1, name: "Learn JS", year: 2022 })); // ["ID", "NAME", "YEAR"]
console.log(getUpperCasedProperties({ name: "Learn JS", category: "Programming" })); // ["NAME", "CATEGORY"]
console.log(getUpperCasedProperties({})); // []