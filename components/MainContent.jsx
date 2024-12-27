import React, { useEffect } from "react";

const MainContent = () => {
  useEffect(() => {
    // Dynamically load Tableau JS API script
    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="flex-1 bg-gray-100 p-6">
    <h1>Main content</h1>
    <p>Tableau Dashboard will be displayed below:</p>
  
    <div
      className="tableauPlaceholder relative w-full h-screen"
      style={{ paddingBottom: "56.25%" }} // Aspect ratio 16:9
      dangerouslySetInnerHTML={{
        __html: `
          <noscript>
            <a href="#">
              <img
                alt="COVID-19 Global View"
                src="https://public.tableau.com/static/images/Co/CoronavirusCOVID-19Cases_17352856053450/COVID-19GlobalView/1_rss.png"
                style="border: none"
              />
            </a>
          </noscript>
          <object class="tableauViz" style="display:block; position:absolute; top:0; left:0; width:100%; height:100%;">
            <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
            <param name="embed_code_version" value="3" />
            <param name="site_root" value="" />
            <param name="name" value="CoronavirusCOVID-19Cases_17352856053450/COVID-19GlobalView" />
            <param name="tabs" value="no" />
            <param name="toolbar" value="yes" />
            <param name="static_image" value="https://public.tableau.com/static/images/Co/CoronavirusCOVID-19Cases_17352856053450/COVID-19GlobalView/1.png" />
            <param name="animate_transition" value="yes" />
            <param name="display_static_image" value="yes" />
            <param name="display_spinner" value="yes" />
            <param name="display_overlay" value="yes" />
            <param name="display_count" value="yes" />
            <param name="language" value="en-US" />
            <param name="filter" value="publish=yes" />
            <param name="ignore_sticky_session" value="yes" />
          </object>
        `
      }}
    ></div>
  </main>
  
  );
};

export default MainContent;
