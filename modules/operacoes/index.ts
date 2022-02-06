const CRR = 10;

export function soma(n1: number, n2: number) {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    return null;
  }

  return (n1 * CRR + n2 * CRR) / CRR
}

export function multiplicacao(n1: number, n2: number) {
  return n1 * n2;
}

export function divisao(n1: number, n2: number) {
  return n1 / n2;
}

export function subtracao(n1: number, n2: number) {
  return n1 - n2;
}
