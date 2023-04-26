import { ContentBox } from '..'
import { Container } from 'react-bootstrap'

const content = ({anotherboxcontnt, boxcontent}) => {
    const border = true;
  return (
    <div>
        <Container className='content-wrapper'>
                            <h1>1 ₾ ᲠᲔᲘᲙᲘ = 1 ᲥᲣᲚᲐᲡ <div></div></h1>
               <ContentBox boxcontent={boxcontent} anotherboxcontnt={anotherboxcontnt} title="ჰოლდემის TOP20 ლიდერბორდი" />
               <ContentBox border={border} boxcontent={boxcontent} anotherboxcontnt={anotherboxcontnt} title="TOP20 ლიდერბორდი ჰოლდემში" lobby="* ლიდერბორდის შედეგები განახლდება" lobbyspan="პოკერის ლობიში" />
               </Container>
               <Container className='content-wrapper'>
                            <h1 style={{fontSize:'1.125rem', textAlign:'center', paddingTop:'24px'}}>ᲓᲐᲛᲐᲢᲔᲑᲘᲗ ᲨᲔᲓᲒᲔᲑᲐ, ᲥᲔᲨᲒᲔᲘᲛᲘᲡ, ᲢᲣᲠᲜᲘᲠᲔᲑᲘᲡ ᲓᲐ ᲡᲞᲘᲜ ᲞᲝᲙᲔᲠᲘᲡ<br/> 12 SIDE ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲘ<div></div></h1>
                            <p className='fontHal' style={{textAlign:'center', background:'#2C3234', borderBottomLeftRadius:'12px', borderBottomRightRadius:'12px', paddingTop:'10px', paddingBottom:'24px', fontSize:'1rem', fontWeight:'lighter', color:'#ffffff'}}>* Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში.</p>
               </Container>
    </div>
  )
}

export default content