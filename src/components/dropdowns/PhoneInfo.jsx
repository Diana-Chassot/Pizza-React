import Footer from "../Footer";

function PhoneInfo({ onOpen,setOnOpen }) {
  return (
    <>
      {onOpen && (
        <div className="dropdown-wrapper" onClick={()=>setOnOpen(false)}>
          <div className="container--absolute" onClick={(event) => event.stopPropagation()}>
            <div className="phone-info">
              <h3>Contact us:</h3>
              <p>Monday to Friday, 9:00 AM to 5:00 PM</p>
              <a href="tel:+41788289669">+41788289669</a>
            </div>
            <Footer className={"footer footer--dark"} />
          </div>
        </div>
      )}
    </>
  );
}

export default PhoneInfo;
