/* eslint-disable @typescript-eslint/no-unused-vars */
import type { inferAsyncReturnType } from '@trpc/server';
import type { H3Event } from 'h3';

export type Context = inferAsyncReturnType<typeof createContext>;
export function createContext (
  _event: H3Event
) {
  return {};
}
