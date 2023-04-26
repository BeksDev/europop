import { Container } from "react-bootstrap"

const divider = ({title, text}) => {
  return (
    <>
         <Container className='divider'>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </Container>
    </>
  )
}

export default divider