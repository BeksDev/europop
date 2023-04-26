import { Container } from 'react-bootstrap'
import { Accordion, Content, Divider, FinalStage, Herosection, SpringSeries, Swiper } from '..'
import { menu, boxcontent, anotherboxcontnt, accordion } from '../../data'
import { useState } from 'react';

const Popup = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [render, setRender] = useState(1);

    const handleClick = (index) => {
      setActiveIndex((prevIndex) => {
        if (prevIndex === index) {
          return index;
        } else {
          const elements = document.getElementsByTagName('li');
          if (prevIndex !== null && elements[prevIndex]) {
            elements[prevIndex].classList.remove('active');
          }
          elements[index].classList.add('active');
          return index;
        }
      });
    };
  return (
    <>
        <Container fluid className='popup-opacity'>
            <Container className='popup' style={{position:'relative'}}>
                <Herosection />
               {render === 1 && (<Divider title={'მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი'} text={'მოხვდი პოკერის ფესტივალზე მალტაში'} />)}
               {render === 2 && (<Divider title={'მოიპოვე 10 საგზურიდან ერთ-ერთი'} text={'მოხვდი პოკერის ფესტივალზე მალტაში'} />)}
               {render === 3 && (<Divider title={'მოიპოვე 10 საგზურიდან ერთ-ერთი'} text={'მოხვდი პოკერის ფესტივალზე მალტაში'} />)}
                <Container className='menu'>
                    <ul>
                        {menu.map((el, key) => (
                            <li attr={el.attr} key={key} className={activeIndex === null && key === 0 ? 'active' : ''} onClick={() => {handleClick(key); setRender(el.attr)}}>
                                <p>{el.date}</p>
                                <h1>{el.title}</h1>
                            </li>
                        ))}
                    </ul>
                </Container>
                {render === 1 && (<Content boxcontent={boxcontent} anotherboxcontnt={anotherboxcontnt} />)}
                {render === 2 && (<SpringSeries boxcontent={boxcontent} anotherboxcontnt={anotherboxcontnt} />)}
                {render === 3 && (<FinalStage boxcontent={boxcontent} anotherboxcontnt={anotherboxcontnt} />)}
               <Container  className='accordion-wrapper-box'>
                          <h1 className='fontHal ' style={{paddingTop:'55px', paddingBottom:'32px', fontSize:'1.125rem', color:'#ffffff'}}>წესები და პირობები</h1>
                          {accordion.map((item, key) => (
                            <Accordion key={key} title={item.header} children={item.text} />
                          ))}
               </Container>
               <Container className='accordion-wrapper-box' style={{paddingRight:'0'}}>
                          <h1 className='fontHal' style={{paddingTop:'55px', paddingBottom:'32px', fontSize:'1.125rem', color:'#ffffff'}}>მსგავსი აქციები</h1>
                         <Swiper />
               </Container>
               <Container style={{padding:'16px 0', borderTop:'2px solid #F05A22', position:'sticky', background:'#171718', zIndex:'2', bottom:'0px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <button className='btn' style={{background:'#F05A22', }}>ითამაშე</button>
            </Container>
            </Container>
        </Container>
    </>
  )
}

export default Popup