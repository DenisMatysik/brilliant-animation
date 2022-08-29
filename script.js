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
      repeat: -1,
    });

    this.anims.create({
      key: "spin_middle",
      frames: this.anims.generateFrameNames("brilliant_middle", {
        start: 0,
        end: 3,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "spin_finish",
      frames: this.anims.generateFrameNames("brilliant_finish", {
        start: 0,
        end: 3,
      }),
      frameRate: 5,
      repeat: -1,
    });

    const brilliant_start = this.add
      .sprite(400, 300, "brilliant_start")
      .setScale(0.1);

    const brilliant_middle = this.add
      .sprite(600, 330, "brilliant_middle")
      .setScale(0.2);

    const brilliant_finish = this.add
      .sprite(600, 550, "brilliant_finish")
      .setScale(0.2);

    brilliant_start.play({ key: "spin_start" });
    brilliant_middle.play({ key: "spin_middle" });
    brilliant_finish.play({ key: "spin_finish" });

    this.tweens.add({
      targets: brilliant_start,
      duration: 2000,
      scaleX: 1.1,
      scaleY: 1.1,
    });

    this.tweens.add({
      targets: brilliant_finish,
      duration: 2000,

      x: 200,
      y: 200,
      //   paused: true,
      //   yoyo: true,
      //   repeat: -1,
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
