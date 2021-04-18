change state/elements when scrolled

it's better to use gsap callbacks in here

(https://greensock.com/forums/topic/25444-how-to-call-a-function-using-a-scrolltrigger/)

or

make sections base on the count of items

let sections = [...]

ScrollTrigger.create(
{
trigger: element,
onLeave: onLeaveFunction,
onEnterBack: onEnterBackFunction
}
)

the functions will change the state
