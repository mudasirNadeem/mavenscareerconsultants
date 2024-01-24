
var clicked = false;

document.addEventListener("DOMContentLoaded", function () {
  var navlink = document.querySelector("#mobile-toogle-btn");
  var line1 = document.querySelector(".line-1");
  var line2 = document.querySelector(".line-2");
  var line3 = document.querySelector(".line-3");
  var layer1 = document.querySelector("#layer1");
  var layer2 = document.querySelector(".layer-2");
  var layer3 = document.querySelector(".layer-3");
  var mobileMenuWrap = document.querySelector(".mobile-menu-wrap");
  var contact_Animate = document.querySelector(".contact-animate");
  var menuWrapper = document.querySelector(".menu-wrapper");
  // Get all elements with class 'mobile-list'
var mobileListElements = document.querySelectorAll('.mobile-list');

// Iterate through each mobile-list element
mobileListElements.forEach(function (mobileListElement) {
    // Add click event to each mobile-list element
    mobileListElement.addEventListener('click', function () {
        // Get the nav-dropdown element inside this mobile-list element
        var navDropdown = mobileListElement.querySelector('.nav-dropdown');
        var navDropdownToggle = mobileListElement.querySelector('.nav-dropdown-toggle');
        var navDropdownList = mobileListElement.querySelector('.nav-dropdown-list');
        navDropdownToggle.classList.toggle('w--open');
        navDropdownList.classList.toggle('w--open');
        // Check if zindex is already set to 799
        var currentZIndex = parseInt(navDropdown.style.zIndex);
        if (isNaN(currentZIndex) || currentZIndex !== 901) {
            // Set zindex to 799
            navDropdown.style.zIndex = 901;
        } else {
            // Remove zindex if it's already set to 799
            navDropdown.style.zIndex = '';
        }
    });
});

  //#region CLICKED TRANSITIONS
  const NAVLINK_CLICKEDTRANSOFORM =
    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(225deg) skew(0deg, 0deg)";
  const LINE1_CLICKEDTRANSOFORM =
    "translate3d(0px, 0.6rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
  const LINE2_CLICKEDTRANSOFORM =
    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)";
  const LINE3_CLICKEDTRANSOFORM =
    "translate3d(0px, -0.6rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
  const LAYER1_CLICKEDTRANSFORM =
    "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
  const LAYER2_CLICKEDTRANSFORM =
    "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
  const LAYER3_CLICKEDTRANSFORM =
    "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
  const MOBILELIST_CLICKEDTRANSFORM =
    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
  //#endregion

  //#region INITIAL STATE TRANSITION
  const NAVLINK_INITIALTRANSOFORM =
    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
  const LINE1_INITIALTRANSOFORM =
    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
  const LINE2_INITIALTRANSOFORM =
    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
  const LINE3_INITIALTRANSOFORM =
    "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
  const LAYER1_INITIALTRANSORM =
    "translate3d(150%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
  const LAYER2_INITIALTRANSORM =
    "translate3d(150%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
  const LAYER3_INITIALTRANSORM =
    "translate3d(150%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
  const MOBILELIST_INITIALTRANSORM =
    "translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
  //#endregion

  var transition = "transform 1s";
  navlink.addEventListener("click", function () {
    clicked = !clicked;
    setTimeout(function () {
      navlink.style.willChange = "auto";
      line1.style.willChange = "auto";
      line2.style.willChange = "auto";
      line3.style.willChange = "auto";
      layer1.style.willChange = "auto";
    }, 700);
    toogleDisplay('none','flex',menuWrapper,'display 0s');
    AnimateToogleButton();
    AnimateNavLinks();

    var opacity = clicked ? 1 : 0;
    line3.style.opacity = opacity;

    function AnimateToogleButton() {
      toogleTransform(
        NAVLINK_INITIALTRANSOFORM,
        NAVLINK_CLICKEDTRANSOFORM,
        navlink
      );
      toogleTransform(LINE1_INITIALTRANSOFORM, LINE1_CLICKEDTRANSOFORM, line1);
      toogleTransform(LINE2_INITIALTRANSOFORM, LINE2_CLICKEDTRANSOFORM, line2);
      toogleTransform(
        LINE3_INITIALTRANSOFORM,
        LINE3_CLICKEDTRANSOFORM,
        line3,
        "transform 1s, opacity .8s"
      );
    }
    function AnimateNavLinks() {
      toogleTransform(
        LAYER1_INITIALTRANSORM,
        LAYER1_CLICKEDTRANSFORM,
        layer1,
        "transform 1s"
      );
      toogleTransform(
        LAYER2_INITIALTRANSORM,
        LAYER2_CLICKEDTRANSFORM,
        layer2,
        "transform 1.2s"
      );
      toogleTransform(
        LAYER3_INITIALTRANSORM,
        LAYER3_CLICKEDTRANSFORM,
        layer3,
        "transform 1.3s"
      );
      toogleDisplay("none", "flex", contact_Animate, clicked ? "0s" : "1s");
     
      toogleOpacity(
        0,
        1,
        mobileMenuWrap,
        !clicked ? "opacity 1.5s" : "opacity 0s",
        !clicked ? "1s" : "0s",
        'opacity'
      );


      // toogleDisplay('none','block',mobileMenuWrap,'display 0s',!clicked?'1.3s': '0s');
      // Get all elements with the class "mobile-list"
      var mobileListElements = document.getElementsByClassName("mobile-list");
      for (let i = 0; i < mobileListElements.length; i++) {
        toogleTransform(
          MOBILELIST_INITIALTRANSORM,
          MOBILELIST_CLICKEDTRANSFORM,
          mobileListElements[i],
          "transform 1.3s",
          !clicked ? "5s" : "5s"
        );
      }
    }
  });
  navlink.click();

});
function toogleTransform(
  initialTransform,
  clickedTransform,
  element,
  transition = "transform 1s",
  delay = "0s"
) {
  element.style.willChange = "transform";
  element.style.transformStyle = "preserve-3d";
  element.style.transitionDelay = delay;

  element.style.transition = transition;
  if (clicked) {
    element.style.transform = initialTransform;
  } else {
    element.style.transform = clickedTransform;
  }
}
function toogleOpacity(
  initialOpacity,
  clickedOpacity,
  element,
  transition = "opacity 1s",
  delay = "0s",
  willchange='opacity'
) {
  element.style.willChange = willchange;

  element.style.transition = transition;
  element.style.transitionDelay = delay;
  if (clicked) {
    element.style.opacity = initialOpacity;
  } else {
    element.style.opacity = clickedOpacity;
  }

}
function toogleDisplay(
  intial,
  clicked,
  element,
  transition = "display 1s",
  delay = "0s"
) {
  element.style.willChange = "display";

  element.style.transition = transition;
  element.style.transitionDelay = delay;

  if (!clicked) {
    element.style.display = intial;
  } else {
    element.style.transform = clicked;
  }
 
}

var shwoNavContent = document.getElementById('shwo-nav-content')
