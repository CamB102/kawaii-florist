import React from 'react';


class Productprice extends React.Component{
    render(){
        const{name, image, description,price, sale} = this.props;
        return(
            <div className='Productprice'>
                <h3>{name}</h3>
                <img src={image} alt="Flower"/>
                <p>{description}</p>
                <h2>${price}</h2>
                {sale && <button className="sale-label">On Sale!</button>}
                {!sale && <button>Buy now!</button>}
            </div>
        )
        }
    }


export default Productprice