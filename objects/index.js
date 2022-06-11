const getGreeting = () => {
    return "somebody";
}

const sayHello = name => {
    return `Hello, ${name ?? getGreeting()}`;
}

console.log(sayHello("Papyrus"));
console.log(sayHello());