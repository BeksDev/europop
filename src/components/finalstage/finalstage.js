import { Container, Col, Row } from "react-bootstrap";
import BgBig from "../../assets/final-info-img.jpg";
import {
  travelcategory,
  travel,
  traveltwo,
  boxcontent,
  anotherboxcontnt,
} from "../../data";
import Title from "../../assets/title.png";
import { ContentBox } from "..";

const finalstage = () => {
  let showAnother = false;
  let border = true;
  return (
    <>
      <Container className="content-wrapper">
        <Container
          style={{
            padding: "0",
            paddingLeft: "24px",
            paddingRight: "24px",
            background: "#171718",
            borderRadius: "12px",
            border: "4px solid #25292B",
          }}
        >
          <Row className="satelites" style={{ marginTop: "17px" }}>
            <Col sm={12}>
              <img style={{ borderRadius: "14px" }} src={BgBig} alt="bg" />
            </Col>
          </Row>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#ffffff",
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "16px",
            }}
          >
            ᲒᲐᲔᲛᲒᲖᲐᲕᲠᲔ THE FESTIVAL IN MALTA-ᲖᲔ!
          </p>
          <p
            style={{
              padding: "10px 0",
              textAlign: "center",
              fontSize: "0.875rem",
              color: "#ffffff",
              fontWeight: "lighter",
            }}
          >
            * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე,{" "}
            <br />
            The Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს
            საგზურის მისაღებად.
          </p>
          <Container>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "0.875rem",
                  color: "#ffffff",
                  maxWidth: "538px",
                  padding: "16px 26px",
                  background: "#2C3234",
                  borderRadius: "12px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "4px",
                    height: "30px",
                    left: "0",
                    top: "10px",
                    borderRadius: "8px",
                    background: "rgb(239, 90, 33)",
                    boxShadow: "0px 0px 10px rgba(239, 90, 33, 0.5)",
                  }}
                ></div>
                15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს
              </p>
            </div>
          </Container>
          <Container style={{ marginTop: "20px", marginBottom: "24px" }}>
            <Row>
              <Col>
                <h1
                  className="mt-12px"
                  style={{
                    fontSize: "0.75rem",
                    padding: "18px",
                    height: "auto",
                  }}
                >
                  <div style={{ width: "100px" }}></div>A კატეგორიის საგზურში
                  შედის
                </h1>
                <div className="travel-category-wrapper">
                  {travelcategory.map((item, key) => (
                    <div key={key}>
                      <img src={item.img} alt="imgs" />
                      <p>{item.title}</p>
                    </div>
                  ))}
                </div>
              </Col>
              <Col>
                <h1
                  className="mt-12px"
                  style={{
                    fontSize: "0.75rem",
                    padding: "18px",
                    height: "auto",
                  }}
                >
                  <div style={{ width: "100px" }}></div>A კატეგორიის საგზურში
                  შედის
                </h1>
                <div className="travel-category-wrapper">
                  {travelcategory.map((item, key) => (
                    <div key={key}>
                      <img src={item.img} alt="imgs" />
                      <p>{item.title}</p>
                    </div>
                  ))}
                </div>
              </Col>
              <Col>
                <h1
                  className="mt-12px"
                  style={{
                    fontSize: "0.75rem",
                    padding: "18px",
                    height: "auto",
                  }}
                >
                  <div style={{ width: "100px" }}></div>A კატეგორიის საგზურში
                  შედის
                </h1>
                <div className="travel-category-wrapper">
                  {travelcategory.slice(0, -1).map((item, key) => (
                    <div key={key}>
                      <img src={item.img} alt="imgs" />
                      <p>{item.title}</p>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
      <Container className="content-wrapper">
        <h1>
          <div></div>ᲛᲝᲘᲒᲔ ᲡᲐᲒᲖᲣᲠᲘ 30 ᲐᲞᲠᲘᲚᲘᲡ ᲤᲘᲜᲐᲚᲣᲠ ᲢᲣᲠᲜᲘᲠᲔᲑᲖᲔ
        </h1>
        <Container
          style={{
            padding: "0",
            paddingLeft: "24px",
            paddingRight: "24px",
            background: "#171718",
            borderRadius: "12px",
            border: "4px solid #25292B",
            borderTopRightRadius: "0",
            borderTopLeftRadius: "0",
            borderTop: "0px solid transparent",
          }}
        >
          <Container className="tournament">
            <Col>
              {travel.map((el, key) => (
                <div
                  className="first"
                  key={key}
                  style={{
                    borderRadius: "12px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    position: "relative",
                    background: "#1E2122",
                    paddingTop: "28px",
                    paddingBottom: "28px",
                    paddingLeft: "28px",
                  }}
                >
                  <img
                    style={{ position: "absolute", top: "0", right: "14px" }}
                    src={el.img}
                    alt="img"
                  />
                  <p style={{ color: "#ffffff", fontSize: "1.1rem" }}>
                    {el.title}
                  </p>
                  <p
                    style={{
                      color: "#ffffff",
                      marginTop: "4px",
                      fontSize: "0.875rem",
                    }}
                  >
                    {el.p}
                  </p>
                </div>
              ))}
            </Col>
            <Col>
              {traveltwo.map((el, key) => (
                <div
                  key={key}
                  style={{
                    borderRadius: "12px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    position: "relative",
                    background: "#1E2122",
                    paddingTop: "28px",
                    paddingBottom: "28px",
                    paddingLeft: "28px",
                  }}
                >
                  <img
                    style={{ position: "absolute", top: "0", right: "14px" }}
                    src={el.img}
                    alt="img"
                  />
                  <p style={{ color: "#ffffff", fontSize: "1.1rem" }}>
                    {el.title}
                  </p>
                  <p
                    style={{
                      color: "#ffffff",
                      marginTop: "4px",
                      fontSize: "0.875rem",
                    }}
                  >
                    {el.ptwo}
                  </p>
                  <p
                    style={{
                      color: "#ffffff",
                      marginTop: "4px",
                      fontSize: "0.875rem",
                    }}
                  >
                    {el.pthree}
                  </p>
                  <p
                    style={{
                      color: "#ffffff",
                      marginTop: "10px",
                      fontSize: "0.875rem",
                    }}
                  >
                    {el.pfour}
                  </p>
                </div>
              ))}
            </Col>
          </Container>
          <p
            className="lobby"
            style={{ textAlign: "center", paddingBottom: "20px" }}
          >
            * თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the
            Rings ტურნირზემოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით
          </p>
          <p
            className="lobby"
            style={{ textAlign: "center", paddingBottom: "20px" }}
          >
            *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი{" "}
            <br /> ბაი-ინის გადახდით.
          </p>
        </Container>
      </Container>

      <Container className="content-wrapper">
        <h1>
          <div></div>
          <img src={Title} alt="img" />
        </h1>
        <ContentBox
          border={border}
          showAnother={showAnother}
          boxcontent={boxcontent}
          anotherboxcontnt={anotherboxcontnt}
          title="მოთამაშეები გარკვეული საპრიზო ადგილების დაკავების შემთხვევაში მიიღებენ საიდუმლო გასაღებს"
        />
      </Container>
    </>
  );
};

export default finalstage;
