// Representing a state with two private properties: name and value
export class State {
    private name: string
    private value: number

    constructor(name: string, value: number) {
        this.name = name
        this.value = value
    }

    getName(): string {
        return this.name
    }

    getValue(): number {
        return this.value
    }
}
  