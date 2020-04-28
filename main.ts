namespace SpriteKind {
    export const trailer = SpriteKind.create()
}
function buildLevel () {
    if (nextLevel == levels.length) {
        game.over(true)
    }
    scene.setTileMap(levels[nextLevel])
    for (let value of scene.getTilesByType(4)) {
        value.place(player)
    }
    nextLevel += 1
}
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    buildLevel()
})
let player: Sprite = null
let nextLevel = 0
let levels: Image[] = []
levels = [img`
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f 4 f f f f f f 7 f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
`, img`
9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 
9 4 9 9 9 9 9 9 7 9 
9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 
`, img`
3 3 3 3 5 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 4 3 3 3 3 3 3 7 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
`]
scene.setTile(7, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b f b b b b f b b b b b b 
b b b b f b b b b f b b b b b b 
b b b b f b b b b f b b b b b b 
b b b b f b b b b f b b b b b b 
b b b b f b b b b f b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b f b b b b b b b b f f b b b 
b b b f f b b b b b b f b b b b 
b b b b f f b b b b f f b b b b 
b b b b b f f f f f f b b b b b 
b b b b b b b f f b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`, true)
nextLevel = 0
player = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 . . . . . . . . 
. . 2 2 . . . 2 2 . . . . . . . 
. . 2 . 7 . 7 . 2 . . . . . . . 
. . 2 2 . . . 2 2 . . . . . . . 
. . . 2 2 2 2 2 . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . 2 2 2 2 2 . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . 2 2 2 . . . . . . . . . 
. . . 2 2 . 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let trail = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
5 5 5 5 5 5 5 5 5 5 . . . . . . 
5 5 5 5 5 5 5 5 5 5 5 . . . . . 
3 3 3 5 5 5 5 5 5 5 5 5 5 5 5 5 
3 3 3 3 3 3 3 3 3 5 5 5 5 5 5 5 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
7 7 7 7 7 7 7 7 7 7 7 7 9 9 9 9 
7 7 7 7 7 7 7 7 7 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.trailer)
trail.follow(player, 100)
trail.setPosition(7, 47)
controller.moveSprite(player, 100, 100)
buildLevel()
forever(function () {
    if (player.overlapsWith(trail)) {
        trail.x += -5
    }
})
