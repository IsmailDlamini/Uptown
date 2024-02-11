import SectionHeader from "../components/SectionHeader";
import "./Home.css";
import { useState, useEffect } from "react";

// section 1 slides
import section_1_slide_1 from "../assets/section-1-slide-1.jpg";
import section_1_slide_2 from "../assets/section-1-slide-2.jpg";
import section_1_slide_3 from "../assets/section-1-slide-3.jpg";
import section_1_slide_4 from "../assets/section-1-slide-4.jpg";

// section 2 slides
import section_2_slide_1 from "../assets/section-2-slide-1.png";
import section_2_slide_2 from "../assets/section-2-slide-2.png";
import section_2_slide_3 from "../assets/section-2-slide-3.png";

// section 3 slides
import section_3_slide_1 from "../assets/section-3-slide-1.png";
import section_3_slide_2 from "../assets/section-3-slide-2.png";
import section_3_slide_3 from "../assets/section-3-slide-3.png";

// section 6 slides
import section_6_slide_1 from "../assets/section-6-slide-1.png";
import section_6_slide_2 from "../assets/section-6-slide-2.png";
import section_6_slide_3 from "../assets/section-6-slide-3.png";
import section_6_slide_4 from "../assets/section-6-slide-4.png";
import section_6_slide_5 from "../assets/section-6-slide-5.png";
import section_6_slide_6 from "../assets/section-6-slide-6.png";
import section_6_slide_7 from "../assets/section-6-slide-7.png";
import section_6_slide_8 from "../assets/section-6-slide-8.png";
import section_6_slide_9 from "../assets/section-6-slide-9.png";
import section_6_slide_10 from "../assets/section-6-slide-10.png";
import section_6_slide_11 from "../assets/section-6-slide-11.png";
import section_6_slide_12 from "../assets/section-6-slide-12.png";
import section_6_slide_13 from "../assets/section-6-slide-13.png";
import section_6_slide_14 from "../assets/section-6-slide-14.png";

// section 7 slides
import section_7_slide_1 from "../assets/section-7-slide-1.jpg";
import section_7_slide_2 from "../assets/section-7-slide-2.jpg";
import section_7_slide_3 from "../assets/section-7-slide-3.jpg";
import PageNav from "../components/PageNav";

import arrow_section_1 from "../assets/arrow-section-1-down.svg";
import arrow_section_2_up from "../assets/arrow-section-2-up.svg";
import arrow_section_2_down from "../assets/arrow-section-2-down.svg";
import arrow_section_3_up from "../assets/arrow-section-3-up.svg";
import arrow_section_3_down from "../assets/arrow-section-3-down.svg";
import arrow_section_4_up from "../assets/arrow-section-4-up.svg";
import arrow_section_4_down from "../assets/arrow-section-4-down.svg";
import arrow_section_5_up from "../assets/arrow-section-5-up.svg";
import arrow_section_5_down from "../assets/arrow-section-5-down.svg";
import arrow_section_6_up from "../assets/arrow-section-6-up.svg";
import arrow_section_6_down from "../assets/arrow-section-6-down.svg";
import arrow_section_7_up from "../assets/arrow-section-7-up.svg";

import company_logo from "../assets/company-logo.svg";
import email_icon from "../assets/email-icon.png";
import phone_icon from "../assets/phone-icon.png";

const Home = () => {
  const link =
    "https://www.booking.com/hotel/za/uptown-villa-1.en-gb.html?aid=356980&label=gog235jc-1DCAso-wFCDnVwdG93bi12aWxsYS0xSDNYA2j7AYgBAZgBCbgBGMgBDNgBA-gBAYgCAagCBLgC5YSVrgbAAgHSAiQ0ZjdhN2NiOC04YzJiLTRjMzMtYmUyZC1kMDEwZjg4ZGQ0NzPYAgTgAgE&sid=171fc412c5653ac765f32875e7ab7ba0&dist=0&group_adults=2&keep_landing=1&sb_price_type=total&type=total&#availability ";

  const slides_section_1 = [
    section_1_slide_1,
    section_1_slide_2,
    section_1_slide_3,
    section_1_slide_4,
  ];

  const slides_section_2 = [
    section_2_slide_1,
    section_2_slide_2,
    section_2_slide_3,
  ];

  const slides_section_3 = [
    section_3_slide_1,
    section_3_slide_2,
    section_3_slide_3,
  ];

  const slides_section_6 = [
    section_6_slide_1,
    section_6_slide_2,
    section_6_slide_3,
    section_6_slide_4,
    section_6_slide_5,
    section_6_slide_6,
    section_6_slide_7,
    section_6_slide_8,
    section_6_slide_9,
    section_6_slide_10,
    section_6_slide_11,
    section_6_slide_12,
    section_6_slide_13,
    section_6_slide_14,
  ];

  const slides_section_7 = [
    section_7_slide_1,
    section_7_slide_2,
    section_7_slide_3,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [currentSlide6, setCurrentSlide6] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides_section_1.length);
      setCurrentSlide2(
        (prevSlide) => (prevSlide + 1) % slides_section_2.length
      );
    }, 6000);

    return () => clearInterval(intervalId);
  }, [
    slides_section_1.length,
    slides_section_2.length,
    slides_section_3.length,
    slides_section_7.length,
  ]);

  const handleImageBrowseNext = () => {
    setCurrentSlide6((prevSlide) => (prevSlide + 1) % slides_section_6.length);
  };

  const handleImageBrowsePrevious = () => {
    setCurrentSlide6(
      (prevSlide) =>
        (prevSlide + slides_section_6.length - 1) % slides_section_6.length
    );
  };

  const scrollToDiv = (divClass) => {
    const div = document.querySelector("." + divClass);
    div.scrollIntoView({ behavior: "smooth" });
  };

  //style={{backgroundImage: `url(${slides_section_1[currentSlide]})`}}

  return (
    <>
      <div className="home-page-container">
        <div className="home-section">
          <PageNav theme={1} pageNumber={0} />
          <div className="overlay"></div>
          <div className="arrows">
            <img
              src={arrow_section_1}
              alt="arrow section 1"
              onClick={() => {
                scrollToDiv("section-2");
              }}
            />
          </div>
          <div className="slide-show-background">
            <img
              src={slides_section_1[0]}
              alt="background-image"
              className={`${currentSlide == 0 ? "showing" : ""}`}
            />
            <img
              src={slides_section_1[1]}
              alt="background-image"
              className={`${currentSlide == 1 ? "showing" : ""}`}
            />
            <img
              src={slides_section_1[2]}
              alt="background-image"
              className={`${currentSlide == 2 ? "showing" : ""}`}
            />
            <img
              src={slides_section_1[3]}
              alt="background-image"
              className={`${currentSlide == 3 ? "showing" : ""}`}
            />
          </div>
          <SectionHeader color="#F6F2EA" canBook="no" position="center"/>

          <div className="section-content">
            <h1 className="main-text">
              Experience the Luxurious Side of Mpumalanga
            </h1>

            <h2 className="text-2">
              Welcome to <span>the Epitome of Luxury in Mpumalanga!</span>{" "}
              <br />
              <br /> Indulge in the pinnacle of luxury in Mpumalanga with our
              exclusive collection of exquisite villas and apartments. We extend
              a warm invitation for you to immerse yourself in the epitome of
              opulence while enjoying a homely stay away from home.
            </h2>

            <div className="buttons">
              <button
                onClick={() => {
                  window.location.href = link;
                }}
              >
                Check Availability
              </button>
              <button
                onClick={() => {
                  scrollToDiv("section-7");
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div className="section-2">
          <SectionHeader color="#F6F2EA" />
          <PageNav theme={1} pageNumber={1} />
          <div className="arrows">
            <img
              src={arrow_section_2_up}
              alt="arrow section 2"
              onClick={() => {
                scrollToDiv("home-section");
              }}
            />
            <img
              src={arrow_section_2_down}
              alt="arrow section 2"
              onClick={() => {
                scrollToDiv("section-3");
              }}
            />
          </div>
          <div className="section-content">
            <div className="text">
              <div className="h1">Elegant Interiors</div>
              <p>
                Immerse yourself in a world of tasteful décor, luxurious
                furnishings, and meticulous attention to detail that does not
                sacrifice that homely feeling.
              </p>
              <p>
                Being away from home doesn{"'"}t mean sacrificing elegance. Stay
                with us and experience a seamless blend of comfort and
                sophistication, where every moment reflects the essence of
                refined living.
              </p>
            </div>
            <div className="image">
              <img
                src={slides_section_2[0]}
                alt="background-image"
                className={`${currentSlide2 == 0 ? "showing" : ""}`}
              />
              <img
                src={slides_section_2[1]}
                alt="background-image"
                className={`${currentSlide2 == 1 ? "showing" : ""}`}
              />
              <img
                src={slides_section_2[2]}
                alt="background-image"
                className={`${currentSlide2 == 2 ? "showing" : ""}`}
              />
            </div>
          </div>
        </div>

        <div className="section-3">
          <SectionHeader color="#352C24" />
          <div className="arrows">
            <img
              src={arrow_section_3_up}
              alt="arrow section 3"
              onClick={() => {
                scrollToDiv("section-2");
              }}
            />
            <img
              src={arrow_section_3_down}
              alt="arrow section 3"
              onClick={() => {
                scrollToDiv("section-4");
              }}
            />
          </div>
          <PageNav theme={2} pageNumber={2} />
          <div className="section-content">
            <div className="image">
              <img
                src={slides_section_3[0]}
                alt="background-image"
                className={`${currentSlide2 == 0 ? "showing" : ""}`}
              />
              <img
                src={slides_section_3[1]}
                alt="background-image"
                className={`${currentSlide2 == 1 ? "showing" : ""}`}
              />
              <img
                src={slides_section_3[2]}
                alt="background-image"
                className={`${currentSlide2 == 2 ? "showing" : ""}`}
              />
            </div>

            <div className="text">
              <div className="h1">Fully Furnished</div>
              <p>
                Elevate your stay with our properties, essential modern
                amenities, including <span>Wi-Fi</span>, a <span>washer</span>,
                and a <span>fully equipped kitchen.</span>{" "}
              </p>

              <p>
                Unwind with entertainment options on a TV equipped with both
                <span> Netflix</span> and <span>Disney Plus</span>, ensuring a
                seamless blend of comfort and leisure during your stay.
              </p>
            </div>
          </div>
        </div>

        <div className="section-4">
          <SectionHeader color="#352C24" />
          <div className="arrows">
            <img
              src={arrow_section_4_up}
              alt="arrow section 4"
              onClick={() => {
                scrollToDiv("section-3");
              }}
            />
            <img
              src={arrow_section_4_down}
              alt="arrow section 4"
              onClick={() => {
                scrollToDiv("section-5");
              }}
            />
          </div>
          <PageNav theme={3} pageNumber={3} />
          <div className="section-content">
            <div className="text">
              <div className="h1">Tranquil Neighbourhoods</div>

              <p>
                Nestled in serene and tranquil neighbourhoods, our properties
                offer a peaceful escape, seamlessly integrated with the lush
                beauty of nearby botanical gardens.{" "}
              </p>

              <p>
                Immerse yourself in the calming atmosphere of nature, creating
                an ideal haven away from the hustle and bustle.
              </p>
            </div>
            <div className="image"></div>
          </div>
        </div>

        <div className="section-5">
          <SectionHeader color="#352C24" />
          <div className="arrows">
            <img
              src={arrow_section_5_up}
              alt="arrow section 5"
              onClick={() => {
                scrollToDiv("section-4");
              }}
            />
            <img
              src={arrow_section_5_down}
              alt="arrow section 5"
              onClick={() => {
                scrollToDiv("section-6");
              }}
            />
          </div>
          <PageNav theme={2} pageNumber={4} />
          <div className="section-content">
            <div className="image"></div>
            <div className="text">
              <div className="h1">Conveniently Located</div>
              <p>
                Our properties are located at Riverside and West Acres which is
                just a walking distance away from everything you need and just a
                10-minute drive from everything else.{" "}
              </p>
              <p>
                Whether it{"'"}s a quick visit to Spar for groceries, relaxing
                at our beautiful botanical gardens, or staying involved in your
                children{"'"}s education with schools in close proximity, we
                ensure you are effortlessly closer to everything you need.
              </p>
            </div>
          </div>
        </div>

        <div className="section-6">
          <SectionHeader />
          <div className="arrows">
            <img
              src={arrow_section_6_up}
              alt="arrow section 6"
              onClick={() => {
                scrollToDiv("section-5");
              }}
            />
            <img
              src={arrow_section_6_down}
              alt="arrow section 6"
              onClick={() => {
                scrollToDiv("section-7");
              }}
            />
          </div>
          <PageNav theme={1} pageNumber={5} />
          <div className="section-content">
            <div className="text">Our Properties</div>
            <div className="images-slide-show">
              <img
                src={slides_section_6[0]}
                alt={`property-image-1`}
                className={`${currentSlide6 == 0 ? "showing" : ""}`}
              />
              <img
                src={slides_section_6[1]}
                alt={`property-image-2`}
                className={`${currentSlide6 == 1 ? "showing" : ""}`}
              />
              <img
                src={slides_section_6[2]}
                alt={`property-image-3`}
                className={`${currentSlide6 == 2 ? "showing" : ""}`}
              />
              <img
                src={slides_section_6[3]}
                alt={`property-image-4`}
                className={`${currentSlide6 == 3 ? "showing" : ""}`}
              />
              <img
                src={slides_section_6[4]}
                alt={`property-image-5`}
                className={`${currentSlide6 == 4 ? "showing" : ""}`}
              />
              <img
                src={slides_section_6[5]}
                alt={`property-image-6`}
                className={`${currentSlide6 == 5 ? "showing" : ""}`}
              />
              <img
                src={slides_section_6[6]}
                alt={`property-image-7`}
                className={`${currentSlide6 == 6 ? "showing" : ""}`}
              />
              <img
                src={slides_section_6[7]}
                alt={`property-image-8`}
                className={`${currentSlide6 == 7 ? "showing" : ""}`}
              />
              <img
                src={slides_section_6[8]}
                alt={`property-image-9`}
                className={`${currentSlide6 == 8 ? "showing" : ""}`}
              />
              <img
                src={slides_section_6[9]}
                alt={`property-image-10`}
                className={`${currentSlide6 == 9 ? "showing" : ""}`}
              />
              <img
                src={slides_section_6[10]}
                alt={`property-image-11`}
                className={`${currentSlide6 == 10 ? "showing" : ""}`}
              />
              <img
                src={slides_section_6[11]}
                alt={`property-image-12`}
                className={`${currentSlide6 == 11 ? "showing" : ""}`}
              />
              <img
                src={slides_section_6[12]}
                alt={`property-image-13`}
                className={`${currentSlide6 == 12 ? "showing" : ""}`}
              />
              <img
                src={slides_section_6[13]}
                alt={`property-image-14`}
                className={`${currentSlide6 == 13 ? "showing" : ""}`}
              />
            </div>

            <div className="image-nav">
              <button
                disabled={currentSlide6 === 0 ? true : false}
                onClick={handleImageBrowsePrevious}
                style={{
                  color: currentSlide6 === 0 ? "rgba(135, 129, 125, 1)" : "",
                }}
              >
                Previous
              </button>
              <button
                disabled={currentSlide6 === 13 ? true : false}
                onClick={handleImageBrowseNext}
                style={{
                  color: currentSlide6 === 13 ? "rgba(135, 129, 125, 1)" : "",
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="section-7">
          <SectionHeader />
          <div className="arrows">
            <img
              src={arrow_section_7_up}
              alt="arrow section 7"
              onClick={() => {
                scrollToDiv("section-6");
              }}
            />
          </div>
          <PageNav theme={1} pageNumber={6} />
          <div className="section-content">
            <div className="image">
              <img
                src={slides_section_7[0]}
                alt="background-image"
                className={`${currentSlide2 == 0 ? "showing" : ""}`}
              />
              <img
                src={slides_section_7[1]}
                alt="background-image"
                className={`${currentSlide2 == 1 ? "showing" : ""}`}
              />
              <img
                src={slides_section_7[2]}
                alt="background-image"
                className={`${currentSlide2 == 2 ? "showing" : ""}`}
              />
            </div>

            <div className="form">
              <div className="title">Contact Us</div>

              <div className="prompt">
                Fill in this form to get in touch with us or alternatively use
                the contact details below.
              </div>

              <form action="" method="POST">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Jane Doe"
                  required
                />
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="janedoe@gmail.com"
                  required
                />
                <label htmlFor="enquiry">Enquiry</label>
                <textarea
                  name="enquiry"
                  id="enquiry"
                  placeholder="Hello, are you available on the 25th of December?"
                  required
                ></textarea>

                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="info">
            <div className="slogan">
              <div>
                “The Epitome of Luxury in <span>Mpumalanga.</span>”
              </div>
            </div>
            <div className="logo-and-contact">
              <div className="logo">
                <img src={company_logo} alt="" />
              </div>
              <div className="contact">
                <div>
                  <img src={email_icon} alt="email" />
                  bookings@uptownapartments.co.za
                </div>
                <div>
                  <img src={phone_icon} alt="phone number" />
                  +27 72 930 0247
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
