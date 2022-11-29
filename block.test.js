const Block = require("./block");
const cryptoHash = require('./cryptoHash'); 
const { GENESIS_DATA } = require("./config");
const cryptoHash = require("./cryptoHash");

describe('Block', ()=>{
    const timestamp = 'a-date'; 
    const lastHash = 'foo-hash'; 
    const hash = 'bar-hash'; 
    const data = ['blockchain', 'data']; 
    const block = new Block({ timestamp, lastHash, hash, data }); 

    it('has a timestamp , lastHash, hash, and data property ', ()=>{
        expect(block.timestamp).toEqual(timestamp); 
        expect(block.hash).toEqual(hash); 
        expect(block.lastHash).toEqual(lastHash); 
        expect(block.data).toEqual(data); 
    })

    describe('genesis()', ()=>{
        const genesisBlock = Block.genesis(); 
        it('returns a Block instance', ()=>{
            expect(genesisBlock instanceof Block).toEqual(true); 
        });
        it('returns the genesis data', ()=>{
            expect(genesisBlock).toEqual(GENESIS_DATA); 
        });
        
    });

    describe('mineBlock()', ()=>{
        const lastBlock = Block.genesis(); 
        const data= 'mined data'; 
        const minedBlock = Block.mineBlock({ lastBlock, data});

        it('returns a block instance ', ()=>{
            expect(minedBlock instanceof Block).toBe(true); 
        });

        it('sets the `lastHash` to be the `hash` of the lastBlock', ()=>{
            expect(minedBlock.lastHash).toEqual(lastBlock.hash); 
        });

        it('sets a `timestamp`', ()=>{
            expect(minedBlock.timestamp).not.toEqual(undefined);
        });

        it('creates a SHA256 `hash` based on the proper inputs', ()=>{
            expect(minedBlock.hash).toEqual(cryptoHash(minedBlock.timestamp, lastBlock.hash, data)); 
        });

    })
});
