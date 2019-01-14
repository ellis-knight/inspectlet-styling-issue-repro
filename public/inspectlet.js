/* eslint-disable */
if (typeof window !== "undefined") {
  (function() {
    const inspecletId = 1995568531;
    const insp_ab_loader = true; // set this boolean to false to disable the A/B testing loader
    window.__insp = window.__insp || [];
    __insp.push(["wid", 1995568531]);
    const ldinsp = function() {
      if (typeof window.__inspld !== "undefined") return;
      window.__inspld = 1;
      const insp = document.createElement("script");
      insp.type = "text/javascript";
      insp.async = true;
      insp.id = "inspsync";
      insp.src = `${
        document.location.protocol == "https:" ? "https" : "http"
      }://cdn.inspectlet.com/inspectlet.js?wid=${inspecletId}&r=${Math.floor(
        new Date().getTime() / 3600000
      )}`;
      const x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(insp, x);
      if (typeof insp_ab_loader !== "undefined" && insp_ab_loader) {
        const adlt = function() {
          const e = document.getElementById("insp_abl");
          if (e) {
            e.parentNode.removeChild(e);
            __insp.push(["ab_timeout"]);
          }
        };
        const adlc = "body{ visibility: hidden !important; }";
        const adln =
          typeof insp_ab_loader_t !== "undefined" ? insp_ab_loader_t : 1200;
        insp.onerror = adlt;
        const abti = setTimeout(adlt, adln);
        window.__insp_abt = abti;
        const abl = document.createElement("style");
        abl.id = "insp_abl";
        abl.type = "text/css";
        if (abl.styleSheet) abl.styleSheet.cssText = adlc;
        else abl.appendChild(document.createTextNode(adlc));
        document.head.appendChild(abl);
      }
    };
    setTimeout(ldinsp, 0);
  })();
}
