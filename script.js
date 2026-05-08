var tl = gsap.timeline()

tl.from(".logo",{
  y:-30,
  opacity:0,
  duration:2,
  delay:0.5,
})

tl.from("h4",{
  y:-30,
  opacity:0,
  duration:1,
  stagger:0.3,
})
tl.from(".cont",{
  y:-30,
    opacity:0,
    duration:1,
    scale:0.5,

})