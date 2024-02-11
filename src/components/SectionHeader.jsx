import "./SectionHeader.css";

const SectionHeader = (prop) => {
  const link =
    "https://www.booking.com/hotel/za/uptown-villa-1.en-gb.html?aid=356980&label=gog235jc-1DCAso-wFCDnVwdG93bi12aWxsYS0xSDNYA2j7AYgBAZgBCbgBGMgBDNgBA-gBAYgCAagCBLgC5YSVrgbAAgHSAiQ0ZjdhN2NiOC04YzJiLTRjMzMtYmUyZC1kMDEwZjg4ZGQ0NzPYAgTgAgE&sid=171fc412c5653ac765f32875e7ab7ba0&dist=0&group_adults=2&keep_landing=1&sb_price_type=total&type=total&#availability ";

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
