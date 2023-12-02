const UncontrolledForm: React.FC = () => {
  return (
    <form className="form">
      <label className="form__label" htmlFor="name">
        Name
        <input type="text" id="name" />
      </label>
      <label className="form__label" htmlFor="age">
        Age
        <input type="number" id="age" />
      </label>
      <label className="form__label" htmlFor="email">
        Email
        <input type="email" id="email" />
      </label>
      <label className="form__label" htmlFor="password">
        Password
        <input type="password" id="password" />
      </label>
      <label className="form__label" htmlFor="repeatPassword">
        Repeat your password
        <input type="password" id="repeatPassword" />
      </label>
      <div className="form__gender">
        <p className="gender__title">Gender</p>
        <label className="form__label" htmlFor="male">
          Male
          <input type="radio" id="male" name="gender" />
        </label>
        <label className="form__label" htmlFor="female">
          Female
          <input type="radio" id="female" name="gender" />
        </label>
      </div>
      <label className="form__label" htmlFor="terms">
        <input type="checkbox" name="terms" value="agree" id="terms" />I agree
        to the terms and conditions
      </label>
      <label className="form__label" htmlFor="img">
        Upload Picture
        <input type="file" accept=".png, .jpeg" id="img" />
      </label>
      <label className="form__label" htmlFor="country">
        Country
        <input type="text" id="country" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
