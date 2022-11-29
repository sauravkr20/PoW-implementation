const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', ()=>{
    
    it('generates a SHA-256 hashed Output', ()=>{
        expect(cryptoHash('foo').toEqual(''));
    });

    it('produces the same hash with same input arguements in any order', ()=>{
        expect(cryptoHash('one', 'two', 'three')).toEqual(cryptoHash('three', 'two', 'one'));
    });
    
});