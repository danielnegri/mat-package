import { soma } from "../index";

describe('Operações', () => {
  it('Soma', function() {
    expect(soma(1,1)).toBe(2);
    expect(soma(0.1,0.2)).toBe(0.3);
  })
})
