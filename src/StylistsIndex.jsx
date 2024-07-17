import React from "react";
import { Link } from "react-router-dom";
import { CalendarIcon, GlobeAltIcon } from "@heroicons/react/outline";

const hardcodedImageUrl =
  "https://media.licdn.com/dms/image/C5603AQGsaKFQH1oMxg/profile-displayphoto-shrink_200_200/0/1578939908603?e=1726704000&v=beta&t=i9Yg6McoydcML9hM8lSGDozn1ELpgEtBQHxvuME4720";

export function StylistsIndex(props) {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">All Stylists</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {props.stylists.map((stylist) => (
          <Link
            key={stylist.id}
            to={`/stylists/${stylist.id}`}
            className="p-4 border border-gray-200 rounded-lg flex flex-col md:flex-row items-center"
          >
            <div className="md:w-3/4 md:mr-4 mb-4 md:mb-0">
              <h2 className="text-xl font-semibold mb-2">{stylist.name}</h2>
              <p className="text-gray-600 mb-2">
                {stylist.city}, {stylist.state}
              </p>
              <div className="flex space-x-4 items-center mb-2">
                <a
                  href={formatUrl(stylist.website)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <GlobeAltIcon className="h-8 w-8 text-blue-500" />
                </a>
                <a
                  href={formatUrl(stylist.instagram_url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img src="/Instagram_Glyph_Gradient.png" alt="Instagram Logo" className="h-6" />
                </a>
                <a
                  href={formatUrl(stylist.facebook_url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img src="/Facebook_Logo_Primary.png" alt="Facebook Logo" className="h-6" />
                </a>
                <a
                  href={formatUrl(stylist.booking_url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <CalendarIcon className="h-6 w-6 text-blue-500" />
                </a>
              </div>
            </div>
            <div className="md:w-1/4">
              <img
                src={hardcodedImageUrl}
                alt="Stylist Profile"
                className="h-auto md:h-32 rounded-lg object-cover mx-auto"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Function to format URLs with http:// if missing
function formatUrl(url) {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return `http://${url}`;
  }
  return url;
}
