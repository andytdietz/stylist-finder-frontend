import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [userType, setUserType] = useState("client");

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);

    // Adding the specific user type attributes to the params
    if (userType === "stylist") {
      params.append("stylist_attributes[name]", event.target.name.value);
      params.append("stylist_attributes[address1]", event.target.address1.value);
      params.append("stylist_attributes[address2]", event.target.address2.value);
      params.append("stylist_attributes[city]", event.target.city.value);
      params.append("stylist_attributes[state]", event.target.state.value);
      params.append("stylist_attributes[zip]", event.target.zip.value);
      params.append("stylist_attributes[website]", event.target.website.value);
      params.append("stylist_attributes[instagram_url]", event.target.instagram_url.value);
      params.append("stylist_attributes[facebook_url]", event.target.facebook_url.value);
      params.append("stylist_attributes[booking_url]", event.target.booking_url.value);
    } else if (userType === "client") {
      params.append("client_attributes[username]", event.target.username.value);
    }

    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <div>
          Password confirmation: <input name="password_confirmation" type="password" />
        </div>
        <div>
          User Type:
          <select name="user_type" value={userType} onChange={handleUserTypeChange}>
            <option value="client">Client</option>
            <option value="stylist">Stylist</option>
          </select>
        </div>

        {userType === "stylist" && (
          <>
            <div>
              Name: <input name="name" type="text" />
            </div>
            <div>
              Address1: <input name="address1" type="text" />
            </div>
            <div>
              Address2: <input name="address2" type="text" />
            </div>
            <div>
              City: <input name="city" type="text" />
            </div>
            <div>
              State:
              <select name="state">
                <option value="">Select a state</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div>
              Zip: <input name="zip" type="text" />
            </div>
            <div>
              Website: <input name="website" type="text" />
            </div>
            <div>
              Instagram URL: <input name="instagram_url" type="text" />
            </div>
            <div>
              Facebook URL: <input name="facebook_url" type="text" />
            </div>
            <div>
              Booking URL: <input name="booking_url" type="text" />
            </div>
          </>
        )}

        {userType === "client" && (
          <div>
            Username: <input name="username" type="text" />
          </div>
        )}

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
