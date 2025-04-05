// Test cases for StateMachine.ts
import { State } from '../src/fsm/State'
import {StateMachine} from '../src/fsm/StateMachine'

describe("State Machine FSM Normal Cases", () =>{
    
    let fsm : StateMachine;
    const S0 = new State('S0', 0)
    const S1 = new State('S1', 1)
    const S2 = new State('S2', 2)
    
    // Add the required transition in each test cases
    beforeEach(() => {
        fsm = new StateMachine(S0)
        fsm.addTransition(S0, '0', S0)
        fsm.addTransition(S0, '1', S1)
        fsm.addTransition(S1, '0', S2)
        fsm.addTransition(S1, '1', S0)
        fsm.addTransition(S2, '0', S1)
        fsm.addTransition(S2, '1', S2)
    })

    // Normal functioning test cases:

    test("should start at initial state", () => {
        expect(fsm.getCurrentState().getName()).toBe("S0")
    })

    test("should transition correctly for valid input", () => {
        fsm.processInput("1") // S0 -> S1
        expect(fsm.getCurrentState().getName()).toBe("S1")
        fsm.processInput("0") // S1 -> S2
        expect(fsm.getCurrentState().getName()).toBe("S2")
        fsm.processInput("1") // S2 -> S2
        expect(fsm.getCurrentState().getName()).toBe("S2")
        fsm.processInput("0") // S2 -> S1
        expect(fsm.getCurrentState().getName()).toBe("S1")
        fsm.processInput("1") // S1 -> S0
        expect(fsm.getCurrentState().getName()).toBe("S0")
        fsm.processInput("0") // S0 -> S0
        expect(fsm.getCurrentState().getName()).toBe("S0")
    })

    test('should handle full input string with run()', () => {
        fsm.run('110') // S0 -> S1 -> S0 -> S0
        expect(fsm.getCurrentState().getName()).toBe('S0')
    })

    test('should set the state machine to the new initial state', () => {
        fsm.processInput('1')
        expect(fsm.getCurrentState().getName()).toBe('S1')
        fsm.reset(S0)
        expect(fsm.getCurrentState().getName()).toBe('S0')
    })

    test('should transition correctly even at the edge state', () => {
        // S0 -> S1
        fsm.processInput('1');
        expect(fsm.getCurrentState().getName()).toBe('S1')
        // S1 -> S2
        fsm.processInput('0');
        expect(fsm.getCurrentState().getName()).toBe('S2')
      })
    

    // Special cases (e.g. wrong input, edge cases):

    test('should throw on invalid input bit', () => {
        expect(() => fsm.run('10a')).toThrow('Invalid input bit: a')
    })
    
    test('should throw an error for invalid state transitions', () => {
        expect(() => fsm.processInput('2')).toThrow('Invalid transition from S0 on input 2')
    })

    test('should throw an error when a transition is missing for a state and input', () => {
        const S3 = new State('S3', 3)
        fsm.addTransition(S3, '1', S0)
        fsm.reset(S3)
        expect(() => fsm.processInput('0')).toThrow('Invalid transition from S3 on input 0')
    })

    test('should handle empty input gracefully', () => {
        expect(() => fsm.run('')).not.toThrow()
    })

    test('should not allow multiple transitions for the same state and input', () => {
        // fsm.addTransition(S0, '0', S0) is already added in beforeEach
        expect(() => fsm.addTransition(new State('S0', 0), '1', new State('S2', 2)))
          .toThrow('Transition already exists for state S0 on input 1')
    })

    test('should handle long input strings without performance issues', () => {
        const longInput = '1'.repeat(10000) + '0'.repeat(10000); // A long binary string
        expect(() => fsm.run(longInput)).not.toThrow()
      })
      
})
