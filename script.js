class Briliant extends Phaser.Scene {
  constructor() {
    super();
  }
  preload() {
    this.load.spritesheet(
      "brilliant_start",
      "./assets/bri_big_anim_start.png",
      {
        frameWidth: 392,
        frameHeight: 372,
      }
    );
    this.load.spritesheet(
      "brilliant_middle",
      "./assets/bri_big_anim_middle.png",
      {
        frameWidth: 449,
        frameHeight: 432,
      }
    );
    this.load.spritesheet(
      "brilliant_finish",
      "./assets/bri_big_anim_finish.png",
      {
        frameWidth: 326,
        frameHeight: 337,
      }
    );
  }
  create() {
    this.anims.create({
      key: "spin_start",
      frames: this.anims.generateFrameNames("brilliant_start", {
        start: 0,
        end: 3,
      }),
      frameRate: 5,
      repeat: 5,
    });

    this.anims.create({
      key: "spin_middle",
      frames: this.anims.generateFrameNames("brilliant_middle", {
        start: 0,
        end: 3,
      }),
      frameRate: 5,
      repeat: 5,
    });

    this.anims.create({
      key: "spin_finish",
      frames: this.anims.generateFrameNames("brilliant_finish", {
        start: 0,
        end: 3,
      }),
      frameRate: 5,
      repeat: 7,
    });

    const brilliant_start = this.add
      .sprite(400, 300, "brilliant_start")
      .setScale(0.348)
      .setAlpha(0);

    const brilliant_middle = this.add
      .sprite(400, 300, "brilliant_middle")
      .setScale(0.7)
      .setAlpha(0);
    const brilliant_finish = this.add
      .sprite(400, 300, "brilliant_finish")
      .setScale(0.896)
      .setAlpha(0);

    brilliant_start.play({ key: "spin_start" });
    brilliant_middle.play({ key: "spin_middle" });
    brilliant_finish.play({ key: "spin_finish" });

    this.tweens.add({
      targets: brilliant_start,
      delay: 1000,
      duration: 1,
      alpha: 1,
    });

    this.tweens.add({
      targets: brilliant_start,
      delay: 1000,
      duration: 1000,
      scale: 0.812,
    });

    this.tweens.add({
      targets: brilliant_start,
      delay: 2500,
      duration: 1,
      alpha: 0,
    });

    this.tweens.add({
      targets: brilliant_middle,
      delay: 2500,
      duration: 1,
      alpha: 1,
    });

    this.tweens.add({
      targets: brilliant_middle,
      delay: 4000,
      duration: 1,
      alpha: 0,
    });

    this.tweens.add({
      targets: brilliant_finish,
      delay: 4000,
      duration: 1,
      alpha: 1,
    });

    this.tweens.add({
      targets: brilliant_finish,
      delay: 4000,
      duration: 2000,
      scale: 0.15,
      x: 100,
      y: 100,
    });
  }
}

const config = {
  type: Phaser.AUTO,
  backgroundColor: "#2d2d2d",
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: [Briliant],
};
const game = new Phaser.Game(config);

document.querySelector("#reload").addEventListener("click", () => {
  location.reload();
});
