namespace SpriteKind {
    export const trailer = SpriteKind.create()
}
scene.onHitTile(SpriteKind.Player, 9, function (sprite) {
    scene.setTileMap(levels[3])
})
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
scene.onHitTile(SpriteKind.Player, 8, function (sprite) {
    scene.setTileMap(levels[2])
})
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    scene.setTileMap(levels[4])
})
scene.onHitTile(SpriteKind.Player, 1, function (sprite) {
    scene.setTileMap(levels[nextLevel])
})
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    buildLevel()
})
let player: Sprite = null
let nextLevel = 0
let levels: Image[] = []
levels = [img`
f f f f f f f f f f 
f 1 f 8 f 9 f a f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
`, img`
6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 
6 4 6 6 6 6 6 6 7 6 
6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 
`, img`
d d d d d d d d d d 
d d d d d d d d d d 
d d d d d d d d d d 
d 4 d d d d d d 7 d 
d d d d d d d d d d 
d d d d d d d d d d 
d d d d d d d d d d 
d d d d d d d d d d 
`, img`
3 3 3 3 5 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 4 3 3 3 3 3 3 7 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
`, img`
2 2 2 2 5 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
2 4 2 2 2 2 2 2 7 2 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
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
scene.setTile(1, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 1 
1 1 1 1 1 2 1 2 1 1 1 1 1 1 1 1 
1 1 1 1 2 1 1 2 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 
1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, true)
scene.setTile(8, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 
1 1 1 1 1 9 9 9 1 9 1 1 1 1 1 1 
1 1 1 9 9 9 1 1 1 9 1 1 1 1 1 1 
1 1 1 9 1 1 1 1 1 9 9 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 9 9 1 1 1 1 1 
1 1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 
1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 
1 1 1 1 1 9 9 1 1 1 1 1 1 1 1 1 
1 1 1 1 9 9 1 1 1 1 1 1 9 1 1 1 
1 1 1 9 9 9 9 9 9 9 9 9 9 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, true)
scene.setTile(9, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 7 7 1 1 1 1 1 1 
1 1 1 7 7 7 7 7 7 7 7 1 1 1 1 1 
1 1 1 7 1 1 1 1 1 1 7 7 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 7 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 7 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 7 7 1 1 1 1 
1 1 1 1 1 1 1 7 7 7 1 1 1 1 1 1 
1 1 1 1 1 7 7 7 7 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 7 7 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 7 1 1 1 1 1 
1 1 7 1 1 1 1 1 1 1 7 1 1 1 1 1 
1 1 7 1 1 1 1 1 1 7 7 1 1 1 1 1 
1 1 7 7 7 7 7 7 7 7 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, true)
scene.setTile(10, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 7 7 1 1 1 1 1 1 
1 1 1 7 7 7 7 3 3 3 7 1 1 1 1 1 
1 1 1 7 1 3 3 1 3 1 7 7 1 1 1 1 
1 1 1 3 3 1 3 3 3 3 1 7 1 1 1 1 
1 1 1 3 1 3 3 3 3 1 3 3 3 3 1 1 
1 1 3 1 3 3 3 3 3 1 7 7 1 3 1 1 
1 1 3 1 3 3 3 3 3 7 1 1 3 1 1 1 
1 1 3 1 3 3 3 3 7 1 1 1 3 1 1 1 
1 1 3 1 1 3 3 3 1 7 7 3 1 1 1 1 
1 1 3 1 1 3 3 3 1 1 3 1 1 1 1 1 
1 1 7 3 1 3 3 3 3 3 3 1 1 1 1 1 
1 1 7 1 3 1 1 1 1 7 7 1 1 1 1 1 
1 1 7 7 7 7 7 7 7 7 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
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
