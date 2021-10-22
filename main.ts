controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 5 a 2 2 2 2 2 2 2 8 8 8 . . . 
        5 5 a 2 2 2 2 2 2 2 8 8 8 . . . 
        5 5 a 2 2 2 2 2 2 2 8 8 8 . . . 
        5 5 a 2 2 2 2 2 2 2 8 8 8 . . . 
        5 5 a 2 2 2 2 2 2 8 8 8 8 . . . 
        5 5 . . . . . . . 8 8 8 8 . . . 
        5 5 . . . . . . . . . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, space_plane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let space_plane: Sprite = null
space_plane = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 9 9 9 9 . . . . . . . 
    . 5 . . . 9 9 9 9 9 9 . . . . . 
    5 5 . . . 9 9 9 9 9 9 9 . . . . 
    5 5 . . . 9 9 9 9 9 9 9 . . . . 
    5 5 5 2 2 9 9 9 9 9 9 2 2 2 2 2 
    5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 
    5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 
    5 5 5 2 2 2 2 2 8 2 2 8 a 8 . . 
    5 5 5 . . . . . 8 8 8 a 8 8 . . 
    5 5 . . . . . 8 8 8 a a 8 . . . 
    . . . . . . 8 8 8 8 a 8 . . . . 
    . . . . . . 8 8 8 a a 8 . . . . 
    . . . . . . 8 8 8 8 8 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(space_plane, 200, 200)
space_plane.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    bogey = sprites.create(img`
        . . . . . . . . . a a a a . . . 
        . . . . . . . . a a a a a . . . 
        . . . . . . . . a a a a . . . . 
        . . . . . . . a a a a . . . . . 
        . . . . . . 8 8 8 8 a . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        2 2 2 8 8 8 2 2 2 2 8 8 8 8 . . 
        2 2 2 8 8 8 8 2 2 8 8 8 8 8 . . 
        2 2 2 8 8 8 8 8 2 8 8 8 8 8 . . 
        2 2 2 8 8 8 2 2 2 8 8 8 8 8 . . 
        2 2 2 8 8 8 8 8 8 8 8 8 8 8 . . 
        2 2 2 2 8 8 8 8 8 8 8 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . . 2 2 2 a 2 2 . . . . 
        . . . . . . . 2 2 a a 2 2 . . . 
        . . . . . . . 2 2 2 2 2 2 . . . 
        `, SpriteKind.Player)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
