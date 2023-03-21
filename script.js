(async function () {
    try {
      const response = await fetch("https://embed2.vercel.app/api/handler");
      const { html, css } = await response.json();

      const widgetContainer = document.getElementById("my-widget-container");
  
      if (widgetContainer) {
        widgetContainer.innerHTML = html;
  
        const style = document.createElement("style");
        style.textContent = css;
        document.head.appendChild(style);
      } else {
        console.error("Error: No container found for the widget.");
      }
    } catch (error) {
      console.error("Error loading widget:", error);
    }
  })();