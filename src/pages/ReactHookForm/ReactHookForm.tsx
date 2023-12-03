import { Link } from "react-router-dom";

const HookForm: React.FC = () => {
  return (
    <>
        <header className="hook__header">
      <Link to="/" className="header__link">
        Back to Main
      </Link>
    </header>
    <form className="hook__form" onSubmit={(e) => e.preventDefault()}>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default HookForm;