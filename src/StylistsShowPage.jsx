import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import InstagramLogo from "/Instagram_Glyph_Gradient.png";
import FacebookLogo from "/Facebook_Logo_Primary.png";
import { CalendarIcon, GlobeAltIcon } from "@heroicons/react/outline";

const hardcodedImageUrl =
  "https://media.licdn.com/dms/image/C5603AQGsaKFQH1oMxg/profile-displayphoto-shrink_200_200/0/1578939908603?e=1726704000&v=beta&t=i9Yg6McoydcML9hM8lSGDozn1ELpgEtBQHxvuME4720";

export function StylistsShowPage() {
  const { id } = useParams();
  const [stylist, setStylist] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/stylists/${id}.json`)
      .then((response) => {
        setStylist(response.data);
      })
      .catch((error) => {
        console.error("Error fetching stylist:", error);
      });
  }, [id]);

  if (!stylist) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <div className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4">{stylist.name}</h1>
        <div className="flex items-center mb-4">
          <div className="mr-20">
            {" "}
            <p className="text-lg mb-2">{stylist.address1}</p>
            <p className="text-lg mb-2">{stylist.address2}</p>
            <p className="text-lg mb-2">
              {stylist.city}, {stylist.state} {stylist.zip}
            </p>
          </div>
          <img src={hardcodedImageUrl} alt="Stylist Profile" className="h-50 w-50 rounded-full object-cover" />{" "}
        </div>
        <div className="flex space-x-4 mb-4">
          <a href={formatUrl(stylist.instagram_url)} target="_blank" rel="noopener noreferrer">
            <img src={InstagramLogo} alt="Instagram Logo" className="h-8" />
          </a>
          <a href={formatUrl(stylist.facebook_url)} target="_blank" rel="noopener noreferrer">
            <img src={FacebookLogo} alt="Facebook Logo" className="h-8" />
          </a>
          <a href={formatUrl(stylist.booking_url)} target="_blank" rel="noopener noreferrer">
            <CalendarIcon className="h-8 w-8 text-blue-500" />
          </a>
          <a href={formatUrl(stylist.website)} target="_blank" rel="noopener noreferrer">
            <GlobeAltIcon className="h-8 w-8 text-blue-500" />
          </a>
        </div>
      </div>
    </div>
  );
}

function formatUrl(url) {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return `http://${url}`;
  }
  return url;
}
