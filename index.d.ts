/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export class ExternalObject<T> {
  readonly '': {
    readonly '': unique symbol
    [K: symbol]: T
  }
}
export function compress(data: string | Buffer): Promise<Buffer>
export function uncompress(data: string | Buffer): Promise<Buffer>
export function uncompressSync(data: string | Buffer): Buffer
export function compressSync(data: string | Buffer): Buffer
