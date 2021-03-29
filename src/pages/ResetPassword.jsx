import Button from "../components/Button";
import Input from "../components/Input";
import "../styles/ResetPassword.css";

const ResetPassword = () => {
  return (
    <div class="resetdiv">
      <h1 class="resethead">Enter your email</h1>
      <Input
        class="resetinput"
        type="email"
        placeholder="enter your email to reset password"
      />{" "}
      <br />
      <Button class="resetbutton" text="send link" />
    </div>
  );
};

export default ResetPassword;
