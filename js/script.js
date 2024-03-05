"use strict";

function handlePlansChange(event) {
    const plans = document.querySelector("#plans");
    const monthList = document.querySelector("#monthList");
    const yearList = document.querySelector("#yearList");

    if (event.target.checked) {
        yearList.classList.remove("d-none");
        monthList.classList.add("d-none");
    } else {
        monthList.classList.remove("d-none");
        yearList.classList.add("d-none");
    }
}

const plansCheckbox = document.querySelector("#plans");
plansCheckbox.addEventListener("change", handlePlansChange);
