import Button from "../components/Button";

function Contact() {
  return (
    <section className="contact">
      <div className="contact__left"></div>
      <div className="contact__right">
        <h1>Contact us:</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Enter Full Name..." />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter email..." />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <Button className="btn btn--dark" text="Send message"/>
        </form>
      </div>
    </section>
  );
}

export default Contact;
