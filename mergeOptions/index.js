/**
 * @param {object} options
 * @param {object} defaultOptions
 */
 const mergeOptions = (options, defaultOptions) => {
	return newOptions = {...defaultOptions, ...options};
}

// Sample usage - do not modify
const options = {
    tabSize: 4,
};

const defaultOptions = {
    indentation: 'tab',
    tabSize: 2,
    language: 'javascript',
};

console.log(mergeOptions(options, defaultOptions)); 
// { indentation: "tab", tabSize: 4, language: "javascript" }