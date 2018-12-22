
var link = document.querySelector(".button-feedback");
var feedback = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".modal-close");
var form = feedback.querySelector("form");
var feedname = feedback.querySelector("[name=feedback-name]");
var feedmail = feedback.querySelector("[name=feedback-email]");
var feedtext = feedback.querySelector("textarea");
var storage = "";
var isStorageSupport = true;

try {
    storage = localStorage.getItem("feedname");
} catch (err) {
    isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.add("overlay-show");
    feedback.classList.add("modal-show");
    feedname.focus();
    if (storage) {
        feedname.value = storage;
        feedmail.focus();
    } else {
        feedname.focus();
    }
});

form.addEventListener("submit", function (evt) {
    if (!feedname.value || !feedmail.value || !textarea.value) {
        evt.preventDefault();
        feedback.classList.remove("modal-error");
        feedback.offsetWidth = feedback.offsetWidth;
        feedback.classList.add("modal-error");
        if (storage) {
            feedname.value = storage;
            feedmail.focus();
        } else {
            feedname.focus();
        }
    } else {
        if (isStorageSupport) {
            localStorage.setItem("feedname", feedname.value);
        }
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.remove("overlay-show");
    feedback.classList.remove("modal-show");
    feedback.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (feedback.classList.contains("modal-show")) {
            evt.preventDefault();
            overlay.classList.remove("overlay-show");
            feedback.classList.remove("modal-show");
            feedback.classList.remove("modal-error");
        }
    }
});
