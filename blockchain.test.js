const Blockchain = require('./blockchain');
const Block = require('./block'); 

describe('Blockchain', ()=>{
    const blockchain = new Blockchain();
    it('contains a `chain` array instance ', ()=>{
        expect(blockchain.chain instanceof Blockchain);
    });
    
})