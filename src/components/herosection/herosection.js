import Banner from "../../assets/banner.jpg"
import CloseIcon from "../../assets/close.svg";

const herosection = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-info">
          <button>სლოტები</button>
          <p>10 იანვარი - 12 მარტი</p>
        </div>
        <div className="close">
          <img src={CloseIcon} alt="close" />
        </div>
        <img src={Banner} alt="Banner" />
      </div>
    </>
  );
};

export default herosection;
