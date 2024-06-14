import { randomUUID } from 'node:crypto';

export function showRegisteredAccounts() {
  return [
    {
      id: randomUUID(),
    },
  ];
}
