const { title } = require("process");

function pencet() {
    alertBox = document.createElement('div');
    alertBox.className = 'alert';
    alertBox.innerHTML = `
    <div class="alert-content">
        <div style="text-align: center;">
            <br>
            <h2>Follow instagram aku dong</h2>
        </div>
        <br>
        <img width="300" height="300" src="https://i.pinimg.com/564x/62/92/bc/6292bc7fc135d814017a6cab4336c1d8.jpg"
            alt="image-description">
        <div class="alert-buttons">
            <button class="alert-btn cancel-btn" onclick="gaFollow()">Gamau</button>
            <br>
            <button class="alert-btn confirm-btn" onclick="follow()">Okey aku follow</button>
            <br>
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

function gaFollow() {
    Swal.fire(
        {
            icon: 'error',
            title: 'Yaudah kalo gitu, bye'
        }
    );

}

function follow() {
    Swal.fire({
        title: "Terima kasih sudah follow",
        icon: "success",
    }).then(function () {
        window.location.href = "https://www.instagram.com/ayash.af/";
    });
}

var c = document.getElementById("canvas-club");
var ctx = c.getContext("2d");
var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;
var clearColor = 'rgba(0, 0, 0, .1)';
var max = 40;
var drops = [];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function O() { }

O.prototype = {
    init: function () {
        this.x = random(0, w);
        this.y = 0;
        this.color = 'hsl(180, 0%, 70%)';
        this.w = 2;
        this.h = 1;
        this.vy = random(4, 5);
        this.vw = 3;
        this.vh = 1;
        this.size = 2;
        this.hit = random(h * .8, h * .9);
        this.a = 1;
        this.va = .96;
    },
    draw: function () {
        if (this.y > this.hit) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y - this.h / 2);

            ctx.bezierCurveTo(
                this.x + this.w / 2, this.y - this.h / 2,
                this.x + this.w / 2, this.y + this.h / 2,
                this.x, this.y + this.h / 2);

            ctx.bezierCurveTo(
                this.x - this.w / 2, this.y + this.h / 2,
                this.x - this.w / 2, this.y - this.h / 2,
                this.x, this.y - this.h / 2);

            ctx.strokeStyle = 'hsla(180, 0%, 100%, ' + this.a + ')'; // white color applied here
            ctx.stroke();
            ctx.closePath();

        } else {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.size, this.size * 5);
        }
        this.update();
    },
    update: function () {
        if (this.y < this.hit) {
            this.y += this.vy;
        } else {
            if (this.a > .03) {
                this.w += this.vw;
                this.h += this.vh;
                if (this.w > 100) {
                    this.a *= this.va;
                    this.vw *= .98;
                    this.vh *= .98;
                }
            } else {
                this.init();
            }
        }

    }
};

function resize() {
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;
}

function setup() {
    for (var i = 0; i < max; i++) {
        (function (j) {
            setTimeout(function () {
                var o = new O();
                o.init();
                drops.push(o);
            }, j * 200);
        }(i));
    }
}

function anim() {
    ctx.fillStyle = clearColor;
    ctx.fillRect(0, 0, w, h);
    for (var i in drops) {
        drops[i].draw();
    }
    requestAnimationFrame(anim);
}

window.addEventListener("resize", resize);

setup();
anim();