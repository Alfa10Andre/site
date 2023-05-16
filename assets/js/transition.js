import anime from 'animejs'

export function cartoonAnime(element) {
  anime({
    targets: element,
    translateY: [-15, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'linear',
  })
}
