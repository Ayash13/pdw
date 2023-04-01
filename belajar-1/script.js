function showAlert() {
    alertBox = document.createElement('div');
    alertBox.className = 'alert';
    alertBox.innerHTML = `
    <div class="alert-content">
            <p>Apakah kamu yakin ingin mulai belajar web?</p>
            <img widht="300px"; height="300px"; src="https://cdn.idntimes.com/content-images/duniaku/post/20230206/fofljuhaiaej8og-3443dfe0ae07680306b3b8ba8582d2db.jpg" alt="your-image-description">
        <div class="alert-buttons">
            <button class="alert-btn cancel-btn">Batal</button>
            <button class="alert-btn confirm-btn">Mulai Belajar</button>
        </div>
    </div>
    `;
    document.body.appendChild(alertBox);

    cancelBtn = document.querySelector('.cancel-btn');
    confirmBtn = document.querySelector('.confirm-btn');
    cancelBtn.addEventListener('click', () => {
        document.body.removeChild(alertBox);
    });
    confirmBtn.addEventListener('click', () => {
        document.body.removeChild(alertBox);
    });
}

function setTime() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourDisplay = document.querySelector(".hour");
    const minuteDisplay = document.querySelector(".minute");
    const secondDisplay = document.querySelector(".second");

    hourDisplay.textContent = hour < 10 ? "0" + hour : hour;
    minuteDisplay.textContent = minute < 10 ? "0" + minute : minute;
    secondDisplay.textContent = second < 10 ? "0" + second : second;
}

setInterval(setTime, 1000);

