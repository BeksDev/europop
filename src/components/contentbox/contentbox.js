import { Container, Row, Col } from "react-bootstrap";
import titleImg from "../../assets/ticket-icon-sm.png";
import Example from "../../assets/example-icon.png";
import Arrow from "../../assets/mechanic-icon.png"

const contentbox = ({ anotherboxcontnt, showAnother, boxcontent, title, lobby, lobbyspan, border, lobbyTwo}) => {
  function toggle() {
    var element = document.getElementById("ul");
    element.classList.toggle("open-dropdown");
 }
  return (
    <>
      <Container
         style={{
            borderBottom: border ? "" : "none",
            borderBottomLeftRadius: border ? "" : "0px",
            borderBottomRightRadius: border ? "" : "0px"
          }}
        className="content-box-wrapper"
      >
        <h2 style={{ position: "relative", fontSize : showAnother === false || null ? "0.875rem" : ''}}>
          {title}
          {title && showAnother === false ? null : (<img
            style={{ position: "absolute", marginLeft: "12px" }}
            src={Example}
            alt="img"
          />)}
          {!title && (
            <div className="dropdownWrapper">
              <button onClick={() => toggle()} className="dropdown-btn">
                <p>ქულების დაგროვების მექანიკა</p>
                <div className="circle">
                    <img src={Arrow} alt="Arrow" />
                </div>
                  <ul id="ul">
                    <li>
                        ლიდერბორდი
                    </li>
                    <li>
                        ლიდერბორდი
                    </li>
                    <li>
                        ლიდერბორდი
                    </li>
                  </ul>
              </button>
            </div>
          )}
        </h2>
        {showAnother === false ? null : (
  <Container className="content-box-title">
    <Row>
      <Col>
        <p>ადგილი</p>
      </Col>
      <Col>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={titleImg}
            style={{ width: "14px", height: "14px", marginRight: "4px" }}
            alt="img"
          />
          ვაუჩერი
        </p>
      </Col>
      <Col>
        <p style={{ textAlign: "end" }}>პრიზი</p>
      </Col>
    </Row>
  </Container>
)}
        <Container style={{borderRadius : showAnother === false || null ? '12px' : '', paddingTop: showAnother === false || null ? '12px' : '', height: showAnother === false || null ? "414px" : ''}} className="content-box">
          {boxcontent.map((item, key) => (
            <Row style={{ marginBottom: "6px" }} key={key}>
              <Col>
                <div
                  style={{
                    position: "absolute",
                    width: "30px",
                    height: "30px",
                    background: "#2C3234",
                    borderRadius: "50px",
                    zIndex: "0",
                    top: "14px",
                    left: "24px",
                  }}
                ></div>
                <p style={{ position: "relative", zIndex: "1", left: "10px" }}>
                  {item.number}
                </p>
              </Col>
              <Col style={{  display:'flex', alignItems:'center', justifyContent:'center' }}>
                <p className="voucher" >
                  {item.price}
                </p>
              </Col>
              <Col>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                  className="prise"
                >
                  {item.img === "" ? (
                    ""
                  ) : (
                    <img
                      style={{
                        width: "14px",
                        height: "14px",
                        marginRight: "4px",
                      }}
                      src={item.img}
                      alt="icon"
                    />
                  )}
                  {item.title}
                </p>
              </Col>
            </Row>
          ))}
        </Container>
        {showAnother === false ? null : (
           <Container
           className="content-box"
           style={{
             padding: "20px 24px",
             borderRadius: "12px",
             height: "auto",
             overflow: "hidden",
             marginBottom: "0",
             marginTop: "20px",
           }}
         >
           
           {anotherboxcontnt.map((item, key) => (
             <Row
               style={{
                 marginBottom: "6px",
                 padding: "0px 29px",
                 borderRadius: "18px",
                 border: "none",
                 overflow: "hidden",
               }}
               key={key}
             >
               <Col style={{ position: "relative" }}>
                 <div
                   className="radius"
                   style={{
                     position: "absolute",
                     width: "4px",
                     height: "47px",
                     left: "-30px",
                     top: "20px",
                     background: "#EF5A21",
                   }}
                 ></div>
                 <p
                   style={{
                     display: "flex",
                     justifyContent: "start",
                     margin: "26px 0",
                     alignItems: "center",
                   }}
                   className="prise"
                 >
                   {item.img === "" ? (
                     ""
                   ) : (
                     <img
                       style={{
                         width: "35px",
                         height: "35px",
                         marginRight: "30px",
                       }}
                       src={item.img}
                       alt="icon"
                     />
                   )}
                   {item.title}
                 </p>
               </Col>
             </Row>
           ))}
         </Container>
        )}
        {lobby && (<p className="lobby" style={{textAlign:'center', padding:'20px 0'}}>{lobby} <span>{lobbyspan}</span></p>)}
        {lobbyTwo && (<p className="lobby" style={{textAlign:'center', paddingBottom:'20px'}}>{lobbyTwo}</p>)}
      </Container>
    </>
  );
};

export default contentbox;
