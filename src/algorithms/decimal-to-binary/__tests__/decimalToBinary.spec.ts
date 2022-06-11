import { decimalToBinary } from '../decimal-to-binary'
describe('Base Converter', () => {
  it('decimalToBinary 1 -> 1', () => {
    expect(decimalToBinary(1)).toEqual('1');
  });

  it('decimalToBinary 2 -> 11', () => {
    expect(decimalToBinary(2)).toEqual('10');
  });

  it('decimalToBinary 233 -> 11101001', () => {
    expect(decimalToBinary(233)).toEqual('11101001');
  });

  it('decimalToBinary 10 -> 1010', () => {
    expect(decimalToBinary(10)).toEqual('1010');
  });

  it('decimalToBinary 1000 -> 1111101000', () => {
    expect(decimalToBinary(1000)).toEqual('1111101000');
  });
});
