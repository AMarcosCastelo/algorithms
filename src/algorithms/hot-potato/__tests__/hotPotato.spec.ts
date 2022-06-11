import { hotPotato } from '../hotPotato';

describe('hotPotato', () => { 
  it('Hot potato game', () => {
    const names = ['Carl', 'Liz', 'Will', 'Tami', 'Michael', 'Clara'];
    expect(hotPotato(names, 6).winner).toEqual('Michael');
    expect(hotPotato(names, 7).winner).toEqual('Will');
    expect(hotPotato(names, 8).winner).toEqual('Michael');
    expect(hotPotato(names, 9).winner).toEqual('Liz');
    expect(hotPotato(names, 10).winner).toEqual('Tami');
    expect(hotPotato(names, 11).winner).toEqual('Will');
  });
});