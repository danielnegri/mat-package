export default function assert(condicao: unknown, mensagem?: string): void {
  if (!condicao) {
    throw new Error(`mat-package asserção ${mensagem}`);
  }
}
