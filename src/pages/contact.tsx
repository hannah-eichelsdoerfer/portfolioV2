import { Card } from "../styles/Card";
import { Main } from "../styles/Main";

const ContactPage = () => {
  return (
    <Main>
      <Card style={{ width: "100%" }}>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" />
          <label htmlFor="message">Message::</label>
          <textarea id="message" name="message" />
          <input type="submit" value="Submit" />
        </form>
      </Card>
    </Main>
  );
};

export default ContactPage;
