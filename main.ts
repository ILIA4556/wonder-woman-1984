scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    info.changeScoreBy(1)
    music.baDing.play()
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedNorth, function (sprite, location) {
    info.startCountdown(20)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    info.changeLifeBy(-1)
    music.powerDown.play()
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setTilemap(tilemap`4321`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleBlueCrystal)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.over(true)
})
info.onLifeZero(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedWest, function (sprite, location) {
    effects.clearParticles(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    mySprite.startEffect(effects.fire)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    tiles.setTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
    info.startCountdown(45)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
let mySprite: Sprite = null
info.setLife(4)
info.startCountdown(40)
tiles.setTilemap(tilemap`4321`)
info.setScore(0)
mySprite = sprites.create(img`
    . . . . . f f f . f f f . . . . 
    . . . . . f 3 f . f 3 f . . . . 
    . . . . . f 3 f . f 3 f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . f f f f f f f f f . . . 
    . . . . f f f f f f f f f . . . 
    . . . . f f 1 f f f 1 f f . . . 
    . . . . f f f f f f f f f . . . 
    . . . . f f f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.setBackgroundColor(11)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
scene.cameraFollowSprite(mySprite)
forever(function () {
    if (info.score() < 0) {
        game.over(false)
    }
})
