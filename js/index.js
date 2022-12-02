$(document).ready(function() {
	gsap.registerPlugin(ScrollTrigger);
	//RWD menu
	$('.rwd-menu').on('click',  function(e) {
		e.preventDefault();
		$('.menu-list').toggleClass('active');
	});
	

	//typed.js

	var typed = new Typed(".index-title", {
	    strings: ['The F2E'],
	    typeSpeed : 150,
  		elaySpeed : 90,
	});
	var typed = new Typed(".sub-title", {
	    strings: ['互動式網頁設計!'],
	    typeSpeed : 180,
	    delaySpeed : 90,
	});

	//GSAP
	var titleShinning = function() {		
		var titleShine = document.getElementById("title-shine");
		var t3 = new TimelineMax({delay:3});
		t3.to(titleShine, {duration:.5, alpha: 1});
	}
	if ($(window).width() > 960) {
		// GSAP
		gsap.fromTo(".fade-in", {x: -90, y:50, autoAlpha: 0 }, {x: 0, y:0, duration: 1.5, autoAlpha: 1, delay:5.8 });
		gsap.fromTo(".fade-in-more", {x: -90, y:30, autoAlpha: 0 }, {x: 0, y:0, duration: 1.5, autoAlpha: 1, delay:6.3 });

		var lighting = function() {
		  var light = document.getElementById("light"); //object
		  var earthgroup = document.getElementById("earth-group"); //object
		  var lightpoint = document.getElementById("light-point-group");
		  var tl = new TimelineMax({delay:2.5, repeat: 3});
		  
		  tl.to(light, {duration:.06, alpha: 0, delay: .2})
		    .to(light, {duration:.1, alpha: 1});

		  var t2 = new TimelineMax({delay:3.35});
		  
		  t2.to(earthgroup, {alpha: 0})
		  	.to(earthgroup, {alpha: .4})
		    .to(earthgroup, {duration:.75, alpha: 1})
		    .to(lightpoint, {duration:.2,x: 300, y:800, scale: 0, alpha: 0})
		    .to(lightpoint, {duration:.5,x: 0, y:0, scale: 1, alpha: 1});
		}
		lighting()
		titleShinning()
	}
	else {
		gsap.fromTo(".fade-in", {x: -30, y:10, autoAlpha: 0 }, {x: 0, y:0, duration: 1.5, autoAlpha: 1, delay:3.8 });
		gsap.fromTo(".fade-in-more", {x: -50, y:20, autoAlpha: 0 }, {x: 0, y:0, duration: 1.5, autoAlpha: 1, delay:4.2 });
	   
	};
	var painPoint = function() {
		var block = gsap.utils.toArray('.section-block2');
		var points =gsap.utils.toArray('.pain-points')
		installMediaQueryWatcher("(min-width: 960px)", (matches) => {
  
			if (matches) {
				gsap.set('.pain-img', {xPercent:-80,autoAlpha: 0})
				gsap.set('.pain-mask', {autoAlpha: 0})
				var paintl = gsap.timeline({
				  scrollTrigger: { 
				    trigger: block,
				    pin: true,
				    scrub: 0.5,
				    start: "top top+=200px",
					end: '+=330%', 
				    // end: () => `+=${points.clientHeight}*3`,
				    // end: "+=50px"
				  },
				})
					paintl
				.to('.pp01 .pain-mask', { autoAlpha: 1, duration: 7 }) 
				.to({}, {duration: 1 }) // a little pause in between
				.to('.pp01 .pain-img', { xPercent: 0, autoAlpha: 1, duration: 5, ease:'power2.inOut' })

				.to({}, {duration: 5 }) // a little pause in between

				.to('.pp02 .pain-mask', { autoAlpha: 1, duration: 7 }) 
				.to({}, {duration: 2 }) // a little pause in between
				.to('.pp02 .pain-img', { xPercent: 0, autoAlpha: 1, duration: 5, ease:'power2.inOut' })

				.to({}, {duration: 5 }) // a little pause in between

				.to('.pp03 .pain-mask', { autoAlpha: 1, duration: 7 }) 
				.to({}, {duration: 2 }) // a little pause in between
				.to('.pp03 .pain-img', { xPercent: 0, autoAlpha: 1, duration:5, ease:'power2.inOut' })

				 // a little pause in between
			  
			} else {
				gsap.set('.pain-points', {xPercent:30,autoAlpha: 0})
				points.forEach((point, i) => {
					var mpointtl = gsap.timeline({
					  scrollTrigger: { 
						trigger: point,
						start: "top bottom",
						end: '+=50%', 
						pinSpacing: true,
						scrub: true
					  },
					});
				
					mpointtl
					.to(point, { xPercent: 0, autoAlpha: 1, duration: 2, ease:'power2.inOut' });
				});
			}
		  });

		
	}

	var dealLoading = function() {
		var dealtl = new TimelineMax({ease:'power2.inOut'});

		dealtl
		.from('.deal-ui', { xPercent: -100, autoAlpha: 0, duration: .25 })
		.to('.deal-ui', {duration: .5 })
		.from('.deal-f2e', { xPercent: 100, autoAlpha: 0, duration: .25 })
		.to('.deal-f2e', {duration: .5 })
		.from('.deal02', { xPercent: 10, scale: 0, autoAlpha: 0, duration: .3 })
		.from('.deal03', { xPercent: -10, scale: 0, autoAlpha: 0, duration: .3 })
		.to({}, {duration: .5 })
		.from('.deal01', { xPercent: 10, scale: 0, autoAlpha: 0, duration: .4 })
		.from('.deal04', { xPercent: -10, scale: 0, autoAlpha: 0, duration: .4 })
		.from('.deal-talk', { yPercent: 30, scale: 0, autoAlpha: 0, duration: .5, delay: .2 })

		ScrollTrigger.create({
		  trigger: ".section-block3",
		  start: "top 100px",
		  endTrigger: ".section-block4",
		  animation: dealtl,
		});
	}

	var fadeinTwoSide = function() {
		var small = gsap.utils.toArray('.schedule-small');
		var large = gsap.utils.toArray('.schedule-large');

		if ($(window).width() > 960) {
			gsap.set('.schedule-small', {xPercent:50,autoAlpha: 0})
			gsap.set('.schedule-large', {xPercent:-120,autoAlpha: 0})
			small.forEach((small, i) => {
				var righttl = gsap.timeline({
				  scrollTrigger: { 
					trigger: small,
					// pin: true,
					scrub: 0.5,
					start: "top bottom",
					end: "+=500px",
					scrub: true
				  },
				});
				righttl
				.to(small, { xPercent: 0, autoAlpha: 1, duration: 5, ease:'power2.inOut', delay: 1 });
	
			});
			
			large.forEach((large, i) => {
				var lefttl = gsap.timeline({
				  scrollTrigger: { 
					trigger: large,
					// pin: true,
					scrub: 0.5,
					start: "top center+=100",
					end: "+=300px",
					scrub: true
				  },
				});
	
				lefttl
				.to(large, { xPercent: 0, autoAlpha: 1, duration: 8, ease:'power2.inOut' });
			});
		}
		else {
			gsap.set('.schedule-small', {xPercent:50,autoAlpha: 0})
			gsap.set('.schedule-large', {xPercent:-50,autoAlpha: 0})
			small.forEach((small, i) => {
				var righttl = gsap.timeline({
				  scrollTrigger: { 
					trigger: small,
					// pin: true,
					scrub: 0.5,
					start: "top bottom",
					end: "+=500px",
					scrub: true
				  },
				});
				righttl
				.to(small, { xPercent: 0, autoAlpha: 1, duration: 5, ease:'power2.inOut', delay: 1 });
	
			});
			
			large.forEach((large, i) => {
				var lefttl = gsap.timeline({
				  scrollTrigger: { 
					trigger: large,
					// pin: true,
					scrub: 0.5,
					start: "top center-=300px",
					end: "+=100px",
					scrub: true
				  },
				});
	
				lefttl
				.to(large, { xPercent: 0, autoAlpha: 1, duration: 8, ease:'power2.inOut' });
			});

		}
		
		

		

	}

	var windowShinning = function() {
		gsap.to(".wall-block", {
		  yPercent: -50,
		  ease: "none",
		  scrollTrigger: {
		    trigger: ".section-block2",
		    scrub: true
		  }, 
		});
	}
	//about three topic
	var topicTV = function() {
		installMediaQueryWatcher("(min-width: 800px)", (matches) => {
  
			if (matches) {
				gsap.registerPlugin(ScrollTrigger);
				/* Main navigation */
				let topicsSection = document.querySelector(".section-block4"),
				topicsContainer = document.querySelector("#topics-container"),
				anchors = gsap.utils.toArray(".anchor"),
				tween;

				/* Panels */
				const panels = gsap.utils.toArray("#topics-container .topic-panel");
				const snap = 1 / (panels.length - 1);
				let activeNav;

				tween = gsap.to(panels, {
					xPercent: -100 * ( panels.length - 1 ),
					ease: "none",
					scrollTrigger: {
						trigger: "#topics-container",
						pin: true,
						start: "top top",
						scrub: 1,
						snap: {
							snapTo: 1 / (panels.length - 1),
							inertia: false,
							duration: {min: 0.1, max: 0.1}
						},
						end: () => "+=" + (topicsContainer.offsetWidth - innerWidth)
					}
				});
			
				anchors.forEach((anchor, i) => {
				  let targetElem = document.querySelector(anchor.getAttribute("href"));
					anchor.addEventListener("click", function(e) {
						e.preventDefault();
						let y = targetElem;
						if (targetElem && topicsContainer.isSameNode(targetElem.parentElement)) {
							let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
								totalMovement = (panels.length - 1) * targetElem.offsetWidth;
							y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
						}
						gsap.to(window, {
							scrollTo: {
								y: y,
								autoKill: false
							},
							duration: 1
						});
					});
				});
				function getScrollLookup(targets, position, containerAnimation) {
				  let triggers = gsap.utils.toArray(targets).map(el => ScrollTrigger.create({
				        trigger: el,
				        start: position || "top top",
				        refreshPriority: -10,
				        containerAnimation: containerAnimation
				      })),
				      st = containerAnimation && containerAnimation.scrollTrigger;
				  return target => {
				    let t = gsap.utils.toArray(target)[0],
				        i = triggers.length;
				    while (i-- && triggers[i].trigger !== t) {};
				    if (i < 0) {
				      return console.warn("target not found", target);
				    } 
				    return containerAnimation ? st.start + (triggers[i].start / containerAnimation.duration()) * (st.end - st.start) : triggers[i].start;
				  };
				}
			}
		});
			
	
	}
		
	

	

	//RWD control GSAP
	function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
		var mql = window.matchMedia(mediaQuery);
		mql.addListener(function (e) { return layoutChangedCallback(e.matches); });
		layoutChangedCallback(mql.matches);
	  }

	//QA tab page 
	$('#tabs-nav > li > a').click(function(event){
		event.preventDefault();
		var active_tab = $('#tabs-nav > li.active > a').attr('href');
		//find actived navigation and remove 'active' css
		var actived_nav = $('#tabs-nav > li.active');
		actived_nav.removeClass('active');
						
		//add 'active' css into clicked navigation
		$(this).parents('li').addClass('active');
						
		//hide displaying tab content
		$(active_tab).removeClass('active');
		$(active_tab).addClass('hide');
						
		//show target tab content
		var target_tab = $(this).attr('href');
		$(target_tab).removeClass('hide');
		$(target_tab).addClass('active');
	});
	painPoint()
	windowShinning()
	dealLoading()
	topicTV()
	fadeinTwoSide()
	//rotateCard()
});