import logo from './logo.svg';
import './App.css';
import Productprice from './ProductPrice';
import styles from './ProductPrice.css';

function App() {
  return (
    <div className='display'>
      <h1>Kawaii Florist</h1>
      <Productprice
        name="Congratulations Bouquet"
        image="https://i.pinimg.com/236x/ad/8d/75/ad8d754c87bceaeea617910be6b4c7a2.jpg"
        description="The perfect bouquet for a celebration such as birthday or graduation."
        price={70} 
        sale ={true}/>
      <Productprice
        name="Apology Bouquet"
        image="https://i.pinimg.com/236x/6c/6f/00/6c6f00163e184589c8ebeb3365a92ac3.jpg"
        description="You need something extra when you know you messed up."
        price={150} 
        sale ={false}/>
      <Productprice
        name="Wedding Bouqet"
        image="https://i.pinimg.com/236x/b7/cd/a2/b7cda28758fb5cd486ccb8884a0e9d39.jpg"
        description="Beautiful collection of flowers to turn heads on your special day!"
        price={200} 
        sale={true}/>
    </div>
  );
}

export default App;
