import { BsFillSuitHeartFill,BsSuitHeart } from "react-icons/bs";
import productList from '../productList.json';
import './Home.css';

function Home(){
  
  return(
    <div id="home">     
      {productList.products.map(item => {
        return(
          <figure key ={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            <figcaption>
              <dl>
                <dt>{item.name}</dt>
                <dd>${item.price}</dd>
                <dd>
                  <button type="button">
                    <BsFillSuitHeartFill />
                  </button>
                  <button type="button">
                    <BsSuitHeart />
                  </button>
                </dd>
              </dl>
            </figcaption>
          </figure>
        )})
      }
    </div>
  )
}

export default Home;