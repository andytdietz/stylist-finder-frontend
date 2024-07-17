import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <a href="#" onClick={handleClick} className="text-gray-200 hover:text-gray-300 ml-4 px-3 py-2 rounded-md">
      Logout
    </a>
  );
}
