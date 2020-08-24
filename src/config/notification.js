import Noty from "noty";

const showNotification = (text) => {
  new Noty({
    text: text,
    layout: "bottomRight",
    theme: "sunset",
    type: "alert",
    timeout: 500,
  }).show();
};

export { showNotification };
