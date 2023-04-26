import { Container, Row, Col } from 'react-bootstrap'
import LeftImg from '../../assets/promo-left-img.png'
import RightImg from '../../assets/promo-right-img.png'
import { ContentBox } from '..'
import Clock from '../../assets/clock.svg';
import Bg from '../../assets/tournament-bg2.png'
import BgBig from '../../assets/main-bg.png'

const springseries = ({boxcontent, anotherboxcontnt}) => {
    
  return (
    <>
        <Container className='content-wrapper'>
            <h1>ᲢᲣᲠᲜᲘᲠᲔᲑᲘ ᲓᲐ ᲡᲐᲢᲔᲚᲘᲢᲔᲑᲘ<div></div></h1>
            <Container className='img-wrapper'>
                <img className='left' src={LeftImg} alt='left' />
                <img className='right' src={RightImg} alt='right' />
                <h2>სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:</h2>
                <div className='date'>
                    <div style={{borderRadius:'12px'}}>
                       <div className='wrap-img'> <img style={{background:'#EF5A21', width:'18px', height:'18px'}} src={Clock} alt='clock' /></div>
                        <p>19:00 / 19:30 / 20:00</p>
                    </div>
                </div>
                <p>*ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.</p>
                <p>ტურნირების სრული განრიგის სანახავად გადადი <br/>პოკერის ლობიში</p>
                <div>
                <button className='btn'>პოკერის ლობი</button>
                </div>
            </Container>
        </Container>
        <Container className='content-wrapper'>
        <h1>ᲛᲝᲮᲕᲓᲘ TOP20 ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲨᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲖᲔ ᲓᲐᲒᲠᲝᲕᲔᲑᲣᲚᲘ ᲥᲣᲚᲔᲑᲘᲗ<div></div></h1>
            <ContentBox border boxcontent={boxcontent} anotherboxcontnt={anotherboxcontnt} lobby="* ლიდერბორდის შედეგები განახლდება" lobbyspan="პოკერის ლობიში" lobbyTwo="* სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და სატელიტები" />
            <Container style={{marginTop:'24px', background:'#171718', borderRadius:'12px', border:'4px solid #25292B'}}>
                <p style={{textAlign:'center', fontSize:'1.125rem', color:'#FFFFFF', paddingTop:'26px', paddingBottom:'24px'}}>ᲧᲝᲕᲔᲚᲓᲦᲘᲣᲠᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲘ ᲓᲐ ᲡᲐᲢᲔᲚᲘᲢᲔᲑᲘ</p>
                <Row className='satelites'>
        <Col className="mt-12px" sm={6}><img src={Bg} alt='bg'/></Col>
        <Col className="mt-12px" sm={6}><img src={Bg} alt='bg'/></Col>
      </Row>
      <Row className='satelites' style={{marginTop:'17px'}}>
        <Col className="mt-12px" sm={12}><img src={BgBig} alt='bg'/></Col>
      </Row>
      <p style={{padding:'20px 0', textAlign:'center', fontSize:'0.875rem', color:'#ffffff', fontWeight:'lighter'}}>* სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე, <br/>The Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს საგზურის მისაღებად.</p>
            </Container>
        </Container>
    </>
  )
}

export default springseries