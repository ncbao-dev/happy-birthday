//elements
var warningLeftButtonText = document.getElementById('warning-left-button-text');
var warningRightButtonText = document.getElementById('warning-right-button-text');
var warningCenterText = document.getElementById('warning-center-text');
var warningLeftButton = document.getElementById('warning-left-button');
var warningRightButton = document.getElementById('warning-right-button');
var warningContainer = document.getElementById('warning-container');
var backdrop = document.getElementById('backdrop');
var musicBox = document.getElementById('music-box');
var disk = document.getElementById('disk');
var prevControl = document.getElementById('prev-control');
var nextControl = document.getElementById('next-control');
var playPauseControl = document.getElementById('play-pause-control');
var playPauseImg = document.getElementById('play-pause-img');
var musicName = document.getElementById('music-name');
var gift1Button = document.getElementById('gift-1-button');
var gift2Button = document.getElementById('gift-2-button');
var warningText = document.getElementById('warning-text');
var warningImg = document.getElementById('warning-img');
//states and default
warningCenterText.innerHTML = "Sẵn sàng đón nhận tấm chân tình\nto bự này chưa tình yêu ?";
warningLeftButtonText.innerHTML = "Sẵn sàng !!";
var appState = state.openApp;
var musicState = 1;
var musicIsPlay = false;
musicName.innerHTML = listMusic[musicState - 1];
//events
warningLeftButton.onclick = function () {
    switch (appState) {
        case state.openApp: {
            openApp();
            break;
        }
        case state.giftOne: {
            openGiftOne();
            break;
        }
        case state.giftTwo: {
            openGiftTwo();
            break;
        }
        default: break;
    }
};

gift1Button.onclick = function () {
    switch (appState) {
        case state.giftOne: {
            backdrop.classList.add('fade-in');
            backdrop.classList.add('display');
            warningContainer.classList.add('fade-in');
            warningContainer.classList.add('display');
            setTimeout(() => {
                backdrop.classList.add('opacity-on');
                warningContainer.classList.add('opacity-on');
                backdrop.classList.remove('fade-in');
                warningContainer.classList.remove('fade-in');
                backdrop.classList.remove('opacity-on');
                warningContainer.classList.remove('opacity-on');
            }, 600);
            gift1Button.setAttribute('disabled', 'disabled');
            gift1Button.style.backgroundColor = '#F5F5F5';
            gift1Button.onclick = null;
            break;
        }
        case state.giftTwo: {
            backdrop.classList.add('fade-in');
            backdrop.classList.add('display');
            warningContainer.classList.add('fade-in');
            warningContainer.classList.add('display');
            setTimeout(() => {
                backdrop.classList.add('opacity-on');
                warningContainer.classList.add('opacity-on');
                backdrop.classList.remove('fade-in');
                warningContainer.classList.remove('fade-in');
                backdrop.classList.remove('opacity-on');
                warningContainer.classList.remove('opacity-on');
            }, 600);
            break;
        }
        default: break;
    }
}

gift2Button.onclick = function () {
    switch (appState) {
        case state.giftOne: {
            backdrop.classList.add('fade-in');
            backdrop.classList.add('display');
            warningContainer.classList.add('fade-in');
            warningContainer.classList.add('display');
            setTimeout(() => {
                backdrop.classList.add('opacity-on');
                warningContainer.classList.add('opacity-on');
                backdrop.classList.remove('fade-in');
                warningContainer.classList.remove('fade-in');
                backdrop.classList.remove('opacity-on');
                warningContainer.classList.remove('opacity-on');
            }, 600);
            gift2Button.setAttribute('disabled', 'disabled');
            gift2Button.style.backgroundColor = '#F5F5F5';
            gift2Button.onclick = null;
            break;
        }
        case state.giftTwo: {
            backdrop.classList.add('fade-in');
            backdrop.classList.add('display');
            warningContainer.classList.add('fade-in');
            warningContainer.classList.add('display');
            setTimeout(() => {
                backdrop.classList.add('opacity-on');
                warningContainer.classList.add('opacity-on');
                backdrop.classList.remove('fade-in');
                warningContainer.classList.remove('fade-in');
                backdrop.classList.remove('opacity-on');
                warningContainer.classList.remove('opacity-on');
            }, 600);
            break;
        }
        default: break;
    }
}

prevControl.onclick = function () {
    if (musicState === 1) {
        musicState = 3
    }
    else {
        musicState -= 1;
    }
    musicBox.setAttribute('src', listMusicLink[musicState - 1]);
    musicBox.play();
    musicName.innerHTML = listMusic[musicState - 1];
    musicName.classList.remove('text-sliding');
    setTimeout(() => {
        musicName.classList.add('text-sliding');
    }, 500);
    if (!musicIsPlay) {
        musicBox.play();
        playPauseImg.setAttribute('src', './img/Pause_btn.png');
        disk.classList.add('rotate');
        musicIsPlay = !musicIsPlay;
    }
}

nextControl.onclick = function () {
    if (musicState === 3) {
        musicState = 1
    }
    else {
        musicState += 1;
    }
    musicBox.setAttribute('src', listMusicLink[musicState - 1]);
    musicBox.play();
    musicName.innerHTML = listMusic[musicState - 1];
    musicName.classList.remove('text-sliding');
    setTimeout(() => {
        musicName.classList.add('text-sliding');
    }, 500);
    if (!musicIsPlay) {
        musicBox.play();
        playPauseImg.setAttribute('src', './img/Pause_btn.png');
        disk.classList.add('rotate');
        musicIsPlay = !musicIsPlay;
    }
}

playPauseControl.onclick = function () {
    if (musicIsPlay) {
        musicBox.pause();
        playPauseImg.setAttribute('src', './img/Play_btn.png');
        disk.classList.remove('rotate');
        musicIsPlay = !musicIsPlay;
    }
    else {
        musicBox.play();
        playPauseImg.setAttribute('src', './img/Pause_btn.png');
        disk.classList.add('rotate');
        musicIsPlay = !musicIsPlay;
    }
}

musicBox.onended = function () {
    nextControl.click();
}

function openApp() {
    //backdrop
    backdrop.classList.add('fade-out');
    backdrop.classList.add('opacity-off');
    //warning
    warningContainer.classList.add('fade-out');
    warningContainer.classList.add('opacity-off');
    //music name sliding
    musicName.style.animationPlayState = "running";
    //display none
    setTimeout(() => {
        backdrop.classList.remove('fade-out');
        backdrop.classList.remove('full-backdrop');
        backdrop.classList.remove('display');
        warningContainer.classList.remove('fade-out');
        warningContainer.classList.remove('display');
        backdrop.classList.remove('opacity-off');
        warningContainer.classList.remove('opacity-off');
        disk.classList.add('rotate');
        musicBox.play();
        musicIsPlay = true;
        playPauseImg.setAttribute('src', './img/Pause_btn.png');
        warningCenterText.innerHTML = 'Hộp này hông có quà đâu\nLÊU LÊU\nCó muốn chọn lại hông ta ?'
        warningLeftButtonText.innerHTML = "Muốn";
        warningRightButtonText.innerHTML = "Rất muốn";
        warningRightButton.classList.add('display-flex');
        warningRightButton.onclick = warningLeftButton.onclick;
        appState = state.giftOne;
        document.title = "Cục cưng sinh nhật vui vẻ !!!";
    }, 600);
}

function openGiftOne() {
    backdrop.classList.add('fade-out');
    backdrop.classList.add('opacity-off');
    warningContainer.classList.add('fade-out');
    warningContainer.classList.add('opacity-off');
    setTimeout(() => {
        backdrop.classList.remove('display');
        warningContainer.classList.remove('display');
        backdrop.classList.remove('fade-out');
        warningContainer.classList.remove('fade-out');
        backdrop.classList.remove('opacity-off');
        warningContainer.classList.remove('opacity-off');
        warningText.classList.remove('display');
        warningImg.classList.add('display');
        warningRightButton.classList.remove('display-flex');
        warningRightButton.onclick = null;
        warningLeftButtonText.innerHTML = "Em biết rồi !!!";
    }, 600);
    appState = state.giftTwo;
}

function openGiftTwo() {
    backdrop.classList.add('fade-out');
    backdrop.classList.add('opacity-off');
    warningContainer.classList.add('fade-out');
    warningContainer.classList.add('opacity-off');
    setTimeout(() => {
        backdrop.classList.remove('display');
        warningContainer.classList.remove('display');
        backdrop.classList.remove('fade-out');
        warningContainer.classList.remove('fade-out');
        backdrop.classList.remove('opacity-off');
        warningContainer.classList.remove('opacity-off');
    }, 600);
}
