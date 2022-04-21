import Introduction from "../Introduction/Introduction";

const LandingPage = () => {
  const user = localStorage.getItem("userName");
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    window.location = "/landingPage";
  };

  return (
    <div>
      <header>
        <h1>
          Keep Calm and Finish Strong
        </h1>
      </header>
      <Introduction />
      {user && (
        <button id="logout" className="" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default LandingPage;