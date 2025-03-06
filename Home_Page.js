document.addEventListener("DOMContentLoaded", function () {
    const industriesBtn = document.getElementById("industriesBtn");
    const servicesBtn = document.getElementById("servicesBtn");

    const industriesSection = document.getElementById("industries");
    const servicesSection = document.getElementById("services");


    industriesSection.style.display = "block";
    servicesSection.style.display = "none";
    industriesBtn.style.textDecoration = "underline";
    industriesBtn.style.textDecorationColor ="#EBA832";
    industriesBtn.style.fontWeight="bold";
    industriesBtn.style.color="black";
    industriesBtn.addEventListener("click", function () {
        industriesSection.style.visibility = 'visible';  
        servicesSection.style.display = "none";  
        industriesBtn.style.fontWeight="bold";
        industriesBtn.style.color="black";
        industriesBtn.style.textDecoration = "underline";
        industriesBtn.style.textDecorationColor ="#EBA832";
        servicesBtn.style.textDecoration = "none";
        servicesBtn.style.textDecoration ="none";
        servicesBtn.style.textDecorationColor ="none";
        servicesBtn.style.fontWeight = "normal";
        servicesBtn.style.color = "gray";
        
    });

    servicesBtn.addEventListener("click", function () {
        industriesSection.style.visibility = 'hidden';   
        servicesSection.style.display = "block";   
        industriesBtn.style.textDecoration = "none";
        servicesBtn.style.textDecoration ="underline";
        servicesBtn.style.fontWeight="bold";
        servicesBtn.style.color = "black";
        //servicesBtn.style.fontSize = "20px";
        servicesBtn.style.textDecorationColor ="#EBA832";
        industriesBtn.style.textDecorationColor ="none";
        industriesBtn.style.fontWeight="normal";
        industriesBtn.style.color="gray";
    });
});

  function scrollLeft_BTN() {
      document.querySelector(".scroll-content").scrollBy({ left: -300, behavior: "smooth" });
  }
  function scrollRight() {
      document.querySelector(".scroll-content").scrollBy({ left: 300, behavior: "smooth" });
  }
  function showContactDetails() {
      document.getElementById("contactDetails").style.display = "block";
      document.getElementById("overlay").style.display = "block";
    }
  
    function closeContactDetails() {
      document.getElementById("contactDetails").style.display = "none";
      document.getElementById("overlay").style.display = "none";
    }
    function toggleExtraContent() {
          var content = document.getElementById("extraContent");
          content.style.display = (content.style.display === "none" || content.style.display === "") ? "inline-block" : "none";
      } 