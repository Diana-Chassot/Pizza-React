
function Contact() {

  return (
    <section className="contact">
      <div className="contact__left"></div>
      <div className="contact__right">
        <h1>Contact us:</h1>
        <form action="https://public.herotofu.com/v1/f67c0f90-1349-11ee-a6b0-17653bd30bd3" method="post" acceptCharset="UTF-8">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Enter Full Name..." required/>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter your email..." required/>
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn--dark">Send message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
