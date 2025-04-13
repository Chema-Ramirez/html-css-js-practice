window.addEventListener("DOMContentLoaded", () => {

    let emoji = document.querySelector(".emojis__emoji");

    let emojis = ['💘', '💝', '💖', '💗', '💓', '💞', '💕', '💟', '❣️', '💔', '❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍', '❤️‍', '🔥'];

    emoji.addEventListener("mouseleave", () => {
        let random = Math.ceil(Math.random() * emojis.length);

        emoji.innerHTML = emojis[random];
    });
});