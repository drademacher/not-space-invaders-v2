import { Application, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x525252,
	width: 640,
	height: 480
});

const logo: Sprite = Sprite.from("testing.png");

logo.anchor.set(0.5);

logo.x = app.screen.width / 2;
logo.y = app.screen.height / 2;

app.stage.addChild(logo);