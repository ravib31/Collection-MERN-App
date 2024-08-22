import React from 'react'
import Card from '../Card/Card';
import './List.scss';

const List = () => {
    const data = [
        {
          id: 1,
          title: "Product 1",
          price: 10,
          img:
            "https://cdn.pixabay.com/photo/2023/09/02/11/43/woman-8228723_1280.jpg",
          img2: "https://cdn.pixabay.com/photo/2017/08/01/13/11/dress-2565292_1280.jpg",
          isNew: true,
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
          oldPrice: 20,
           
        },
        {
          id: 3,
          title: "Product 3",
          price: 10,
          img:
          "https://cdn.pixabay.com/photo/2023/09/16/16/00/woman-8257062_1280.jpg",
        img2: "https://cdn.pixabay.com/photo/2017/07/31/19/16/people-2560175_1280.jpg",
        isNew: false,
        oldPrice: 20,
        },
        {
          id: 4,
          title: "Product 4",
          price: 10,
          img:
            "https://cdn.pixabay.com/photo/2024/05/13/04/47/ai-generated-8758044_1280.jpg",
          img2: "https://cdn.pixabay.com/photo/2024/01/20/01/50/ai-generated-8520169_1280.jpg",
          isNew: false,
          oldPrice: 20,
        },
      ];
  return (
    <div className='list'>
        {data.map(item=>(
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List