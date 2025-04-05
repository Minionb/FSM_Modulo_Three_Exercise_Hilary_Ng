// main file of the app
import { ModuloThree } from './fsm/ModuloThree'

// Create the ModuloThree instance
const modThree = new ModuloThree()

// Test inputs from the example given in the question
const testInputs = ['110', '1010']

// Test every input
for (const input of testInputs) {
  const result = modThree.run(input)
  console.log(`Binary ${input} -> %3 = ${result}`)
}
