import { baseConverter } from '../baseConverter';

describe('baseConverter', () => {
  it('should convert 100345, 2 -> 11000011111111001', () => {
    expect(baseConverter(100345, 2)).toEqual('11000011111111001');
  });
  
  it('should convert 100345, 8 -> 303771', () => {
    expect(baseConverter(100345, 8)).toEqual('303771');
  });
  
  it('should convert 100345, 16 -> 187F9', () => {
    expect(baseConverter(100345, 16)).toEqual('187F9');
  });
  
  it('should convert 100345, 7 -> 565360', () => {
    expect(baseConverter(100345, 7)).toEqual('565360');
  });
  
  it('should convert 100345, 20 -> CAH5', () => {
    expect(baseConverter(100345, 20)).toEqual('CAH5');
  });
  
  it('should convert 100345, 35 -> 2BW0', () => {
    expect(baseConverter(100345, 35)).toEqual('2BW0');
  });
  
  it('should convert 100345, 36 -> 25FD', () => {
    expect(baseConverter(100345, 36)).toEqual('25FD');
  });
  
  it('should convert 100345, 37 -> ', () => {
    expect(baseConverter(100345, 37)).toEqual('');
  });  
});
