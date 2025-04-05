

import { State } from './State'
import { StateMachine } from './StateMachine'

export class ModuloThree {
  private fsm: StateMachine

  constructor() {
    // FSM configuration 
    
    // Define states
    const S0 = new State("S0", 0)
    const S1 = new State('S1', 1)
    const S2 = new State('S2', 2)

    this.fsm = new StateMachine(S0)
    // Define transitions
    this.fsm.addTransition(S0, '0', S0)
    this.fsm.addTransition(S0, '1', S1)
    this.fsm.addTransition(S1, '0', S2)
    this.fsm.addTransition(S1, '1', S0)
    this.fsm.addTransition(S2, '0', S1)
    this.fsm.addTransition(S2, '1', S2)
    
  }

  // Run the FSM with the binary input string and return the modulo 3 result
  run(binaryInput: string): number {
    // Reset to the initial state name s0
    this.fsm.reset(new State('S0', 0))
    // Run the FSM with the input
    this.fsm.run(binaryInput)
    // Get the final state
    const finalState = this.fsm.getCurrentState()

    // Return the modulo 3 result based on the final state
    return finalState.getValue()
  }
}
