let playing = true;
let counter = document.getElementById("counter");
let interval = setInterval(() => {
    if (playing) {
        counter.innerText = parseInt(counter.innerText) + 1;
    }
}, 1000);

// Event Listeners
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const commentForm = document.getElementsByTagName("form")[0];

minus.addEventListener("click", function() {
    counter.innerText = parseInt(counter.innerText) - 1;
});

plus.addEventListener("click", function() {
    counter.innerText = parseInt(counter.innerText) + 1;
});

heart.addEventListener("click", function() {
    let count = parseInt(counter.innerText);
    let likes = document.querySelector(".likes");
    let existingLike = document.querySelector(`[data-num='${count}']`);
    if (existingLike) {
        let span = existingLike.querySelector("span");
        span.innerText = parseInt(span.innerText) + 1;
    } else {
        let li = document.createElement("li");
        li.setAttribute("data-num", count);
        li.innerHTML = `${count} has been liked <span>1</span> time`;
        likes.appendChild(li);
    }
});

pause.addEventListener("click", function() {
    playing = !playing;
    this.innerText = playing ? "pause" : "resume";
    document.querySelectorAll("button").forEach(button => {
        if (button.id !== "pause") button.disabled = !playing;
    });
});

commentForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let commentInput = this.querySelector("input");
    let commentText = commentInput.value;
    commentInput.value = "";
    let comments = document.querySelector(".comments");
    let p = document.createElement("p");
    p.innerText = commentText;
    comments.appendChild(p);
});
