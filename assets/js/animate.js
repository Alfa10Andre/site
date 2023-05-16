import anime from 'animejs'

export function translate(element) {
  anime({
    targets: element,
    translateX: [0, 20, 0],
    duration: 2000,
  })
}

export function upDownAnimation(target, loop = true, delay = 0) {
  anime_({
    targets: target,
    translateY: 5,
    // duration:3000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop,
    delay,
  })
}

export function leftRightAnimation(target, loop = true, delay = 0) {
  anime_({
    targets: target,
    translateX: 5,
    // duration:3000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop,
    delay,
  })
}

export function custonAnime(params) {
  anime(params)
}

export const anime_ = anime

export function animeNumber(element, val) {
  anime({
    targets: element,
    innerHTML: [0, val],
    easing: 'linear',
    duration: 800,
    round: 1,
  })
}

export function animeList(targets) {
  anime_({
    targets,
    translateX: [-50, 0],
    opacity: [0, 1],
    easing: 'linear',
    duration: 500,
    delay (el, i, l) {
      return i * 100
    },
  })
}
