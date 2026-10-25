const userProfile = {
    name: null,
    birthYear: null,
    isDeveloper: null,
    hobbies: ["Music", "Games"]
};

const form = document.getElementById("profileForm");
const nameInput = document.getElementById("name");
const birthYearInput = document.getElementById("birthYear");
const developerInput = document.getElementById("isDeveloper");

const hobbyInput = document.getElementById("newHobby");
const hobbyList = document.getElementById("hobbyList");

nameInput.value = userProfile.name;
birthYearInput.value = userProfile.birthYear;
birthYearInput.max = new Date().getFullYear();
developerInput.checked = userProfile.isDeveloper;

function showProfile() {
    const age = new Date().getFullYear() - userProfile.birthYear;

    document.getElementById("profileName").textContent =
        userProfile.name;

    document.getElementById("profileAge").textContent = age;

    document.getElementById("profileDeveloper").textContent =
        userProfile.isDeveloper ? "Yes" : "No";

    document.getElementById("hobbyCount").textContent =
        userProfile.hobbies.length;

    console.log("Age:", age);
    console.log("Total hobbies:", userProfile.hobbies.length);
}

function showHobbies() {
    hobbyList.textContent = "";

    userProfile.hobbies.forEach((hobby) => {
        const item = document.createElement("li");
        item.textContent = hobby;
        hobbyList.appendChild(item);
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    userProfile.name = name;
    userProfile.birthYear = Number(birthYearInput.value);
    userProfile.isDeveloper = developerInput.checked;

    showProfile();
    console.log(userProfile);
});

document.getElementById("addItem").addEventListener("click", () => {
    const hobby = hobbyInput.value.trim();

    if (hobby === "") {
        return;
    }
    userProfile.hobbies.push(hobby);

    showHobbies();
    showProfile();

    hobbyInput.value = "";
    hobbyInput.focus();
});

document.getElementById("removeItem").addEventListener("click", () => {
    userProfile.hobbies.pop();

    showHobbies();
    showProfile();
});

showProfile();
showHobbies();