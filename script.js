console.clear();

const video = document.querySelector(".videohover");
const controlSpace = document.querySelector(".videohover");

controlSpace.addEventListener("mousemove", ev => {
    const secs = Math.round(ev.offsetX / 2500);

    video.currentTime = secs;
});
