const UncontrolledForm: React.FC = () => {
  return (
    <form className="form">
      <label>
        Name
        <input type="text" />
      </label>
      <label>
        Age
        <input type="number" />
      </label>
      <label>
        Email
        <input type="email" />
      </label>
      <label>
        Password
        <input type="password" />
      </label>
      <label>
        Repeat your password
        <input type="password" />
      </label>
      <label>
        Gender
        <input type="radio" name="gender" value="male" />
        Male
        <input type="radio" name="gender" value="female" />
        Female
      </label>
      <label>
        <input type="checkbox" name="terms" value="agree" />I agree to the terms
        and conditions
      </label>
      <label>
        Upload Picture
        <input type="file" accept=".png, .jpeg" />
      </label>
      <label>
        Country
        <input type="text" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
