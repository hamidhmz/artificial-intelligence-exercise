const brain = require("brain.js");
const network = new brain.NeuralNetwork();

network.train([
    { input: ["a", "b", "t"], output: [0] },
    { input: ["b", "a", "t"], output: [0] },
    { input: ["t", "b", "a"], output: [0] },
    { input: ["t", "a", "b"], output: [1] },
    { input: ["b", "t", "a"], output: [1] }
]);

const output = network.run(["a", "t", "b"]);

console.log(`resolve: ${output}`);