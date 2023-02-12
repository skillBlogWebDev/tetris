export const menuContent = `
<div class="game-menu">
    <span>СЛОЖНОСТЬ</span>
    <button class="sketch-button easy">ЛЕГКО</button>
    <button class="sketch-button norm">НОРМАЛЬНО</button>
    <button class="sketch-button hard">СЛОЖНО</button>
</div>`

export const tetrisContent = `
<h1 class="title">TETRIS</h1>
<div class="game-content__inner">
    <div class="canvas-bg">
        <canvas width="320" height="640" id="game"></canvas>
    </div>
    <div class="game-content__info">
        <div class="game-content__next">
            <span class="next__title">NEXT</span>
            <div class="next__inner">
                <div class="tetromino">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        <div class="game-content__score">
            <span class="score__title">SCORE</span>
            <span class="score__total">0</span>
        </div>
        <div class="game-buttons">
            <button class="sketch-button start">START</button>
            <button class="sketch-button pause">PAUSE</button>
            <button class="sketch-button restart">RESTART</button>
        </div>
        <div class="game-controls">
            <button class="sketch-button top">
                <span>
                    <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/>
                    </svg>
                </span>
            </button>
            <button class="sketch-button bottom">
                <span>
                    <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/>
                    </svg>
                </span>
            </button>
            <button class="sketch-button left">
                <span>
                    <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/>
                    </svg>
                </span>
            </button>
            <button class="sketch-button right">
                <span>
                    <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/>
                    </svg>
                </span>
            </button>
        </div>
    </div>
</div>
`