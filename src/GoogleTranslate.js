import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    // Prevent multiple script injections
    if (!document.querySelector("#google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script"; // Unique ID
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    // Initialize Google Translate only if it's not already initialized
    window.googleTranslateElementInit = () => {
      if (!document.querySelector(".goog-te-combo")) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
