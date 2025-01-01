import React, { useState, useEffect } from "react";
import axios from "axios";

const GeolocationComponent = () => {
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(
          "https://ipinfo.io/json?token=YOUR_API_TOKEN"
        );
        setCountry(response.data.country);
      } catch (error) {
        console.error("Error fetching geolocation data", error);
      }
    };

    fetchCountry();
  }, []);

  return (
    <div>
      <h1>Your Country</h1>
      <p>{country ? country : "Fetching country..."}</p>
    </div>
  );
};

export default GeolocationComponent;
