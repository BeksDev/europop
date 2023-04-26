import { useState } from 'react';
import { Container } from 'react-bootstrap';

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <>
      <Container className='accordion-padding'>
        <div className="accordion-wrapper p-zero">
          <div
            className={`accordion-title ${isOpen ? "open" : ""}`}
            onClick={() => setOpen(!isOpen)}
          >
            {title}
          </div>
          <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
            <div className="accordion-content">{children}</div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Accordion;