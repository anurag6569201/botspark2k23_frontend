import titleImg from "/title.svg";
import "./styles.css";

export default function TitleSider() {
    return(
        <div className="title-scroll-container">
      <div className="title-scroll">
        <img src={titleImg} alt="title" />
      </div>
      <div className="title-scroll">
        <img src={titleImg} alt="title" />
      </div>
      <div className="title-scroll">
        <img src={titleImg} alt="title" />
      </div>
    </div>
    )
}