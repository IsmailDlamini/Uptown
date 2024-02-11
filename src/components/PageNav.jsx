import "./PageNav.css";

const PageNav = (props) => {
  const { theme, pageNumber } = props;

  const sections = [
    "home-section",
    "section-2",
    "section-3",
    "section-4",
    "section-5",
    "section-6",
    "section-7",
  ]

  const scrollToDiv = (divClass) => {
    // Select the div using getElementById or querySelector
    const div = document.querySelector("." + divClass);
    // Scroll to the div
    div.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="page-nav">
        {theme === 1 ? (
          <ul>
            {[...Array(7)].map((_, index) => (
              <li
                key={index}
                style={{
                  backgroundColor:
                    pageNumber === index
                      ? "rgba(127, 112, 115, 1)"
                      : "rgba(246, 242, 234, 1)",
                }}
                onClick={() => {scrollToDiv(sections[index])}}
              ></li>
            ))}
          </ul>
        ) : theme === 2 ? (
          <ul>
            {[...Array(7)].map((_, index) => (
              <li
                key={index}
                style={{
                  backgroundColor:
                    pageNumber === index
                      ? "rgba(53, 44, 36, 1)"
                      : "rgba(201, 183, 156, 1)",
                }}
                onClick={() => {scrollToDiv(sections[index])}}
              ></li>
            ))}
          </ul>
        ) : (
          <ul>
            {[...Array(7)].map((_, index) => (
              <li
                key={index}
                style={{
                  backgroundColor:
                    pageNumber === index
                      ? "rgba(53, 44, 36, 1)"
                      : "rgba(246, 242, 234, 1)",
                }}
                onClick={() => {scrollToDiv(sections[index])}}
              ></li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default PageNav;
