// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  
  const pAequorFactory = (specimenNum, dna)=> {
    return ({
      specimenNum : specimenNum,
      dna : dna,
  
      mutate() {
        const dnaBases = ['A', 'T', 'C', 'G']
        randomBase = dnaBases[Math.floor(Math.random() * 4)]
        newBase = dnaBases.filter((x)=>x!=randomBase)[Math.floor(Math.random() * 3)]
  
        return dna.map((x)=>x==randomBase ? newBase : x)
      },
  
      compareDNA(dna2) { 
        return("Specimen #1 and #2 have "+Math.round(dna.filter((x,i)=>x==dna2[i]).length/dna.length *100)+"% DNA in common.")
      },
  
      willLikelySurvive(){
        return dna.filter((x)=>['C','G'].includes(x)).length/dna.length > .60  
      }
      })
  }
  
  let a = pAequorFactory(1,mockUpStrand())
  console.log(a.dna)
  console.log(a.mutate())
  console.log(a.compareDNA(mockUpStrand()))
  console.log(a.willLikelySurvive())
  
  