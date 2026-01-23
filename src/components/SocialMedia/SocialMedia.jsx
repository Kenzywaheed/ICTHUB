import "./SocialMedia.css";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function SocialMedia() {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center gap-3 my-icon">
        <a
          className="social-icon"
          href="https://www.facebook.com/profile.php?id=100092372366864"
          target="_blank"
        >
          <FaFacebook />
        </a>
        <a
          className="social-icon"
          href="https://wa.me/+201556427825"
          target="_blank"
        >
          <FaWhatsapp />
        </a>
      </div>
    </>
  );
}
export default SocialMedia;
