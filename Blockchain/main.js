const SHA256 = require('crypto-js/sha256')

class Block{
   constructor(index, timestamp, data, previousHash=''){
      this.index = index;
      this.timestamp = timestamp;
      this.data = data;
      this.previousHash = previousHash;
      this.hash = this.calculateHash();
      this.nonce = 0;
   }

   calculateHash(){
      return SHA256(this.index + this.previousHash + this.timestamp + this.nonce + JSON.stringify(this.data)).toString();
   }

   mineBlock(difficulty){
      while(this.hash.substring(0,difficulty) !== Array(difficulty+1).join('0')){
         this.nonce++;
         this.hash = this.calculateHash();
      }

      console.log("Block mined: " + this.hash);
   }
}

class Blockchain{
   constructor(){
      this.chain = [this.createGenesisBlock()];
      this.difficulty = 4;
   }

   createGenesisBlock(){
      //console.log(new Block(0, '12/31/9999', 'genesis block', '0'))
      return new Block(0, '12/31/9999', 'genesis block', '0');
   }

   getLatestBlock(){
     // console.log(this.chain)
      return this.chain[this.chain.length - 1];
   }

   addBlock(newBlock){
      newBlock.previousHash = this.getLatestBlock().hash;
      newBlock.mineBlock(this.difficulty);
      this.chain.push(newBlock);
   }

   isChainValid(){
      for(let x=1;x<this.chain.length-1;i++) {
         const currentBlock = this.chain[x];
         const previousBlock = this.chain[x-1];

         return currentBlock.hash == currentBlock.calculateHash() &&
                  currentBlock.previousHash == previousBlock.hash 

      }
   }
}



let bdaCoin = new Blockchain();


console.log ('Mining Block ...')
bdaCoin.addBlock(new Block(1, '01/01/2021', {name: "J'Von"}));
console.log ('Mining Block ...')
bdaCoin.addBlock(new Block(2, '01/03/2021', {name: "Jasmine"}));
console.log ('Mining Block ...')
bdaCoin.addBlock(new Block(3, '01/05/2021', {name: "Kyle"}));


