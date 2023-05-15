/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name} ${variables.lastname}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city}, ${variables.country}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="https://twitter.com/${variables.twitter}"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/${variables.github}"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/in/${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function () {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://scontent-bcn1-1.xx.fbcdn.net/v/t1.6435-9/84350277_3394601853889065_1487160412246900736_n.jpg?stp=dst-jpg_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=56ND46XcGMgAX8iN5KD&_nc_ht=scontent-bcn1-1.xx&oh=00_AfDJHUw8tqjaOaxpH7hDbZu2fdufyt_cY32nagT3qWMi4Q&oe=648953DC",
    // this is the url for the profile avatar
    avatarURL: "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/341025177_790625675989822_8378631961885038385_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Lh_o4qgzlF8AX9Om42b&_nc_ht=scontent-bcn1-1.xx&oh=00_AfC_eiHzSGeRwmiyvtyVv9NBuGQOYXeA2cnvZAFfuuEbHA&oe=6466D92C",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: "",
    github: "alesanchezr",
    linkedin: "",
    instagram: "",
    name: "",
    lastname: "",
    role: "",
    country: "",
    city: "",
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function (elm) {
    elm.addEventListener("change", function (e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
