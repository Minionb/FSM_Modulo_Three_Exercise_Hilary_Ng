//Managing state and its transition 
import { State } from './State'

export class StateMachine {
    private currentState: State

    // A map of state transitions, each state has an input -> state map
    private transitions: Record<string, Record<string, State>> = {}

    constructor(initialState: State) {
      this.currentState = initialState
    }

    // Add transition from one state to another based on input
    addTransition(fromState: State, input: string, toState: State): void {
      if (!this.transitions[fromState.getName()]) {
        this.transitions[fromState.getName()] = {}
      }
      if (this.transitions[fromState.getName()][input]) {
        throw new Error(
          `Transition already exists for state ${fromState.getName()} on input ${input}.`
        );
      }
      this.transitions[fromState.getName()][input] = toState
      }
      

    // Process a binary input string and update the current state
    processInput(input: string): void {
        const nextState = this.transitions[this.currentState.getName()][input]
        if (!nextState) {
        throw new Error(`Invalid transition from ${this.currentState.getName()} on input ${input}`)
        }
        this.currentState = nextState
    }

    // Run through all the inputs and get to the final state
    run(inputs: string): void {
        for (const input of inputs) {
        if (input !== '0' && input !== '1') {
            throw new Error(`Invalid input bit: ${input}`)
        }
        this.processInput(input)
        }
    }

    // Get the current state
    getCurrentState(): State {
        return this.currentState;
    }

    // reset the state to the specified one
    reset(initialState: State): void {
      this.currentState = initialState
    }
}
