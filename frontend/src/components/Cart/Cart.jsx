import React from 'react';
import './Cart.scss';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {

    const data = [
        {
          id: 1,
          title: "Product 1",
          price: 10,
          img:
            "https://cdn.pixabay.com/photo/2023/09/02/11/43/woman-8228723_1280.jpg",
          img2: "https://cdn.pixabay.com/photo/2017/08/01/13/11/dress-2565292_1280.jpg",
          isNew: true,
          desc:"This is a nice top in your range",
          oldPrice: 20,
        },
        {
            id: 2,
            title: "Product 2",
            price: 10,
            img:
              "https://cdn.pixabay.com/photo/2023/10/16/05/01/women-8318437_1280.jpg",
            img2: "https://cdn.pixabay.com/photo/2023/09/02/11/53/woman-8228748_1280.jpg",
            isNew: true,
            desc:"This is a nice top in your range",
            oldPrice: 20,
             
          }
    ]
  return (
    <div className='cart'>
        <h1>Products In Your Cart</h1>
        {data.map((item) => (
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>${item.desc.substring(0,100)}</p>
                    <div className='price'>1*${item.price}</div>
                </div>
                <DeleteIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart