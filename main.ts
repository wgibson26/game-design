input.onButtonPressed(Button.A, function () {
    sprite.move(1)
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    sprite.move(-1)
    basic.pause(100)
})
let invader: game.LedSprite = null
let sprite: game.LedSprite = null
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . # . .
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . . # . .
    . # # # .
    # # # # #
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . # # # .
    # # # # #
    . # . # .
    `)
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    . # # # .
    # # # # #
    . # . # .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    . # . # .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . # . # .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
sprite = game.createSprite(2, 2)
basic.forever(function () {
    invader = game.createSprite(randint(0, 4), 1)
    basic.pause(900)
    for (let index = 0; index < 4; index++) {
        invader.change(LedSpriteProperty.Y, 1)
        basic.pause(800)
    }
    if (sprite.isTouching(invader)) {
        sprite.delete()
        game.gameOver()
    } else {
        game.addScore(1)
    }
    if (invader.isTouchingEdge()) {
        invader.delete()
    }
})
