// Test cases for ModuloThree.ts
import { ModuloThree } from '../src/fsm/ModuloThree';

describe('ModuloThree FSM', () => {
  let modThree: ModuloThree;

  beforeEach(() => {
    modThree = new ModuloThree(); // assuming FSM and transitions are set in constructor
  })

  // Edge input test cases
  test('edge input "0" => 0', () => {
    const result = modThree.run('0');
    expect(result).toBe(0);
  })

  test('edge input "1" => 1', () => {
    const result = modThree.run('1');
    expect(result).toBe(1);
  })

  test('should handle long input without performance issues', () =>{
    const longInput = '1'.repeat(10000) + '0'.repeat(10000)
    expect(() => modThree.run(longInput)).not.toThrow()
  })

  // Invalid input test case
  test('throws error on invalid input', () => {
    expect(() => modThree.run('10221')).toThrow('Invalid input bit: 2')
    expect(() => modThree.run('10321')).toThrow('Invalid input bit: 3')
  })

  // Other normal input test cases
  test('input "110" => 0', () => {
    const result = modThree.run('110')
    expect(result).toBe(0);
  })

  test('input "1010" => 1', () => {
    const result = modThree.run('1010')
    expect(result).toBe(1);
  })

  test('input "111" => 1', () => {
    const result = modThree.run('111')
    expect(result).toBe(1);
  })


  test('input "1001" => 0', () => {
    const result = modThree.run('1001')
    expect(result).toBe(0);
  })

});
