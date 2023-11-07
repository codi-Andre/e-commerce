import logoImg from "../assets/logo.svg"
import { Accordion } from "./Accordion"
import { ContactList } from "./ContactList"
import { NewsLetter } from "./NewsLetter"
import { SocialNetwork } from "./SocialNetwork"

export function Footer() {
  return (
    <footer>
      <section className="container mb-6 mt-8 px-4 md:mb-12 md:mt-12 md:px-6 lg:mt-0">
        <NewsLetter />
      </section>

      <p
        className="mb-6 bg-design-gray-background p-4 text-center text-text1
       text-design-thick-black md:mb-10"
      >
        Commerce, is powered
        <br className="md:hidden" /> by 100% renewable electricity.
      </p>

      <section className="container mb-8 flex flex-col gap-4 px-4 md:mb-10 md:hidden md:px-6">
        <Accordion label="Shop" />

        <Accordion
          active
          label="About"
          list={["Polka, Inc.", "Policies", "Investors", "Careers", "Press"]}
        />

        <Accordion label="Sell" />

        <Accordion label="Help" />

        <div className="mb-4 flex justify-center gap-4 rounded-full bg-design-gray-background py-4">
          <SocialNetwork />
        </div>

        <p className="text-center text-text6">&copy; 2022 Commerce, Inc.</p>
      </section>

      <section className="container mb-8 hidden px-4 md:mb-10 md:block md:px-6">
        <nav className="mb-10 grid grid-cols-5 gap-12 2xl:grid-cols-6">
          <address className="flex flex-col items-start gap-4 text-text6 not-italic 2xl:col-span-2">
            <img
              className="h-12 w-[8.25rem]"
              src={logoImg}
              alt="E-commerce logo"
            />
            Cricklewood,
            <br className="2xl:hidden" /> London
            <br className="hidden 2xl:inline" /> NW2 6qg,
            <br className="hidden lg:inline 2xl:hidden" /> Uk
            <SocialNetwork />
          </address>

          <ContactList
            title="Shop"
            list={["Gift cards", "Site map", "Polka blog", "Login", "Sign in"]}
          />

          <ContactList
            title="About"
            list={["Polka, Inc.", "Policies", "Investors", "Careers", "Press"]}
          />

          <ContactList
            title="Sell"
            list={["Sell on Polka", "Teams", "Forums", "Affiliates"]}
          />

          <ContactList
            title="Help"
            list={["Help Center", "Trust and safety", "Privacy settings"]}
          />
        </nav>

        <div className="flex justify-between text-text6">
          <p>&copy; 2022 Commerce, Inc.</p>

          <span className="flex gap-12">
            <a href="#">Privacy policy</a>
            <a href="#">Terms of use</a>
            <a href="#">Cookies</a>
          </span>

          <a className="flex gap-3 text-text1" href="#">
            <span>Scroll to top</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4 6.66675L8 2.66675M8 2.66675L12 6.66675M8 2.66675L8 12.6667"
                stroke="#5F5F5F"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>
      </section>
    </footer>
  )
}
