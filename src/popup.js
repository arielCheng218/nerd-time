//

document.addEventListener("DOMContentLoaded", function () {
  console.log("dom content loaded");
  // bind handleSubmit to form onSubmit with event listener
  getTabInfo(setAttributes);
});

const setAttributes = (nameValue, sourceValue) => {
  const name = document.getElementById("name");
  const source = document.getElementById("source");
  name.setAttribute("value", nameValue);
  source.setAttribute("value", sourceValue);
};

const getTabInfo = (setAttributes) => {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    (tabs) => {
      var tabName = tabs[0].title;
      var tabURL = tabs[0].url;
      setAttributes(tabName, tabURL);
    }
  );
};
