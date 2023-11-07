import dribbbleImg from "../assets/icons/dribbble.svg"
import facebookImg from "../assets/icons/facebook.svg"
import linkedinImg from "../assets/icons/linkedin.svg"
import twitterImg from "../assets/icons/twitter.svg"

export function SocialNetwork() {
  return (
    <div
      className="inline-grid grid-cols-4 gap-4 md:grid-cols-2 md:gap-2
     2xl:grid-cols-4 2xl:gap-4"
    >
      <a href="#">
        <img
          className="h-6 w-6 md:h-8 md:w-8"
          src={facebookImg}
          alt="facebook"
        />
      </a>
      <a href="#">
        <img className="h-6 w-6 md:h-8 md:w-8" src={twitterImg} alt="twitter" />
      </a>
      <a href="#">
        <img
          className="h-6 w-6 md:h-8 md:w-8"
          src={linkedinImg}
          alt="linkedin"
        />
      </a>
      <a href="#">
        <img
          className="h-6 w-6 md:h-8 md:w-8"
          src={dribbbleImg}
          alt="dribbble"
        />
      </a>
    </div>
  )
}
