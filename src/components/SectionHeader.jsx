//import "./SectionHeader.css";
import "../pages/Home2.css";

const SectionHeader = (prop) => {
  const link =
    "https://linktr.ee/uptownapartmentproperties";

  return (
    <>
      <div
        className="section-header"
        style={{ color: prop.color, borderBottomColor: prop.color }}
      >
        <div style={{ margin: prop.position === "center" ? "0 auto" : ""}}>
          <span id="bold">Uptown </span> <span id="medium">Apartment</span>{" "}
          <span id="light"> Properties</span>
        </div>

        <div
          className="book-now"
          style={{
            borderLeftColor: prop.color,
            display: prop.canBook === "no" ? "none" : "",
          }}
          onClick={() => {
            window.location.href = link;
          }}
        >
          Book Now
        </div>
      </div>
    </>
  );
};

export default SectionHeader;
