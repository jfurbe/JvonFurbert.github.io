import Card from './context';
import img from './bank.png';

function Home(){
  return (
    <Card
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src={img} className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}

export default Home;