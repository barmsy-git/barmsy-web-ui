import React, { useState } from "react";

import { motion } from "framer-motion";

const AIWebsiteGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedSite, setGeneratedSite] = useState("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Photography Website</title>\n  <style>\n    body {\n      font-family: Arial, sans-serif;\n      margin: 0;\n      padding: 0;\n    }\n    header {\n      background: #333;\n      color: #fff;\n      padding: 10px 20px;\n      text-align: center;\n    }\n    nav {\n      background: #f4f4f4;\n      padding: 10px 20px;\n    }\n    nav ul {\n      list-style: none;\n      padding: 0;\n      margin: 0;\n      text-align: center;\n    }\n    nav ul li {\n      display: inline;\n      margin: 0 10px;\n    }\n    nav ul li a {\n      text-decoration: none;\n      color: #333;\n    }\n    section {\n      padding: 20px;\n    }\n    footer {\n      background: #333;\n      color: #fff;\n      text-align: center;\n      padding: 10px 20px;\n      position: absolute;\n      bottom: 0;\n      width: 100%;\n    }\n  </style>\n</head>\n<body>\n  <header>\n    <h1>Welcome to My Photography Website</h1>\n  </header>\n  <nav>\n    <ul>\n      <li><a href=\"#\">Home</a></li>\n      <li><a href=\"#\">Portfolio</a></li>\n      <li><a href=\"#\">About</a></li>\n      <li><a href=\"#\">Contact</a></li>\n    </ul>\n  </nav>\n  <section>\n    <h2>Gallery</h2>\n    <div class=\"gallery\">\n      <img src=\"photo1.jpg\" alt=\"Photo 1\">\n      <img src=\"photo2.jpg\" alt=\"Photo 2\">\n      <img src=\"photo3.jpg\" alt=\"Photo 3\">\n      <img src=\"photo4.jpg\" alt=\"Photo 4\">\n    </div>\n  </section>\n  <footer>\n    <p>&copy; 2022 Photography Website</p>\n  </footer>\n</body>\n</html>");
  const [loading, setLoading] = useState(false);


  return (
    <div className="p-10 flex flex-col items-center">
 
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-3xl mt-6 border p-4 rounded-lg shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Generated Website Preview</h2>
          <iframe
            srcDoc={generatedSite}
            title="Generated Site"
            className="w-full h-96 border rounded"
          />
        </motion.div>
      
    </div>
  );
};

export default AIWebsiteGenerator;
