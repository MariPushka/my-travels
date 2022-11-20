import {useState} from 'react';
import {data} from './data';
import './App.css';

function App() {
  const [images,setImages]=useState(0);
  const {id,image}=data[images];
 const [countrys,setCountrys]=useState(data);
 const [showText,setShowText]=useState(false);
 
  
  const previousButton=()=>{
 setImages((images => {
  images --;
  if (images<0){
    return data.length -1
  }
  return images;
 }))
  }

  const nextButton= () =>{
   setImages((images => {
    images ++;
    if(images>data.length -1){
      images=0;
    }
    return images;
   })) 
  }
  
  return (<div className="big" key={id}>
     <div className='container'>
     <h1>Топ 5 мест где бы мне хотелось побывать.</h1>
     </div>

     <div className='container'>
      <h2>Многие любят путешествовать.И у каждого из нас есть свой заветный список стран,где хотелось бы побывать.Итааак...Поехали!
      Вот мой список.</h2>
     </div>


     <div className='container'>
     <img src={image} width="900px" height="600px" alt="country"/>
     </div>

     <div className='container'>
    <button className='btn' onClick={previousButton}>Назад</button>
    <button className='btn' onClick={nextButton}>Вперед</button>
      </div>

      
      <div className='container'>
        <h2>Страны: {countrys.length}</h2>
      </div>

      {countrys.map((element =>{
        const {id,country,description,image,showMore}=element;

      const removeCountrys = (id) => {
     let newCountrys=countrys.filter(country => country.id!==id);
     setCountrys(newCountrys);
     }

     const showTextClick=(element)=>{
      element.showMore=!element.showMore
      setShowText(!showText)
     }

        return(
          <div key={id}>
            <div className='container'>
            <h2>{id}-{country}</h2>
            </div>


            <div className='container'>
            <img src={image} width="400px" height="300px" alt="country"/>
            </div>

            <div className='container'>
            <h3>{showMore ? description:description.substring(0,150) + "..."}
            <button className="but" onClick={() => showTextClick(element)(!showMore)}>{showMore ? "Свернуть текст" : "Показать все" }</button>
            </h3>
            </div>
          
          
          <div className='container btn'>
            <button className='btn' onClick={() =>removeCountrys(id)}>Посетила</button>
          </div>
          
          </div>
        )
      }))}

      
      

       



  
<div className='container'>
      <h2>А у тебя есть такой список?Может не список мест где бы хотелось побывать,а ,например,список целей или желаний?</h2>
     </div>
  
  </div>
  );
}

export default App;
