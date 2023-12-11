import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Features() {
    const firstRenderRef = useRef(true);

    const clickHandler = (e) => {
        const href = e.target.dataset.href;

        gsap.to(window, {
            scrollTo: href,
            duration: 1,
            ease: "power2.out",
        });
    };

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
        } else {
            return;
        }

        gsap.set(".media-wrap .media-2, .media-wrap .media-3, .media-wrap .media-4, .media-wrap .media-5", {
            yPercent: 100,
            scale: 1.5,
        });

        gsap.set(".benefit ul", {
            height: 0,
        });

        const timeline = gsap.timeline({
            scrollTrigger: {
                markers: true,
                trigger: "section.features",
                start: "top top+=1",
                end: "+=400.1%",
                pin: ".features-pin",
                scrub: 1,
                onEnter: function () {
                    gsap.set("html", {
                        "scroll-snap-type": "y mandatory",
                    });
                },
                onEnterBack: function () {
                    gsap.set("html", {
                        "scroll-snap-type": "y mandatory",
                    });
                },
                onLeave: function () {
                    gsap.set("html", {
                        "scroll-snap-type": "none",
                    });
                },
                onLeaveBack: function () {
                    gsap.set("html", {
                        "scroll-snap-type": "none",
                    });
                },
            },
        });

        timeline.to(
            ".media-wrap .media-2",
            {
                yPercent: 0,
                scale: 1,
                ease: "none",
                duration: 1,
            },
            0
        );

        timeline.to(
            ".benefit-1 ul",
            {
                height: "auto",
                ease: "none",
                duration: 0.5,
            },
            0
        );

        timeline.to(
            ".media-wrap .media-3",
            {
                yPercent: 0,
                scale: 1,
                ease: "none",
                duration: 1,
            },
            1
        );

        timeline.to(
            ".benefit-1 ul",
            {
                height: 0,
                ease: "none",
                duration: 0.5,
            },
            1
        );

        timeline.to(
            ".benefit-2 ul",
            {
                height: "auto",
                ease: "none",
                duration: 0.5,
            },
            1
        );

        timeline.to(
            ".media-wrap .media-4",
            {
                yPercent: 0,
                scale: 1,
                ease: "none",
                duration: 1,
            },
            2
        );

        timeline.to(
            ".benefit-2 ul",
            {
                height: 0,
                ease: "none",
                duration: 0.5,
            },
            2
        );

        timeline.to(
            ".benefit-3 ul",
            {
                height: "auto",
                ease: "none",
                duration: 0.5,
            },
            2
        );

        timeline.to(
            ".media-wrap .media-5",
            {
                yPercent: 0,
                scale: 1,
                ease: "none",
                duration: 1,
            },
            3
        );

        timeline.to(
            ".benefit-3 ul",
            {
                height: 0,
                ease: "none",
                duration: 0.5,
            },
            3
        );

        timeline.to(
            ".benefit-4 ul",
            {
                height: "auto",
                ease: "none",
                duration: 0.5,
            },
            3
        );

        timeline.set("html", {
            "scroll-snap-type": "none",
        });
    }, []);

    return (
        <section className="features">
            <div id="intro" className="panel panel-1"></div>
            <div id="access" className="panel panel-2"></div>
            <div id="assembly" className="panel panel-3"></div>
            <div id="maintenance" className="panel panel-4"></div>
            <div id="mobility" className="panel panel-5"></div>
            <div className="features-pin">
                <div className="container">
                    <div className="features-wrap">
                        <div className="features-content">
                            <div className="heading">
                                <h1>Easy for Everybody</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna.
                                </p>
                            </div>
                            <div className="benefit benefit-1">
                                <h2 onClick={clickHandler} data-href="#access">
                                    <img src="/icon-access.svg" width="30px" height="30px" />
                                    Access
                                </h2>
                                <ul>
                                    <li>
                                        Autonomous app-enabled entry for parents with Mamava’s Smart Access Technology or keyless
                                        pin code.
                                    </li>
                                    <li>Streamlined and managed access for facilities.</li>
                                </ul>
                            </div>
                            <div className="benefit benefit-2">
                                <h2 onClick={clickHandler} data-href="#assembly">
                                    <img src="/icon-assembly.svg" width="30px" height="30px" />
                                    Assembly
                                </h2>
                                <ul>
                                    <li>Assembles and ready for use in a few hours.</li>
                                    <li>Eliminates permitting and construction disruption.</li>
                                    <li>Professional install service available.</li>
                                </ul>
                            </div>
                            <div className="benefit benefit-3">
                                <h2 onClick={clickHandler} data-href="#maintenance">
                                    <img src="/icon-maintenance.svg" width="30px" height="30px" />
                                    Maintenance
                                </h2>
                                <ul>
                                    <li>Solid surfaces and nonabsorbent materials make for quick clean up.</li>
                                    <li>Mamava Service Plans provide extra peace of mind.</li>
                                </ul>
                            </div>
                            <div className="benefit benefit-4">
                                <h2 onClick={clickHandler} data-href="#mobility">
                                    <img src="/icon-mobility.svg" width="30px" height="30px" />
                                    Mobility
                                </h2>
                                <ul>
                                    <li>Built-in caster wheels make it easy to move pod as needed. </li>
                                    <li>Disassemble and store pod when not in use.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="features-media">
                            <div className="media-wrap">
                                <img className="media-1" src="/easy-1.jpg" alt="" />
                                <img className="media-2" src="/easy-2.jpg" alt="" />
                                <img className="media-3" src="/easy-3.jpg" alt="" />
                                <img className="media-4" src="/easy-4.jpg" alt="" />
                                <img className="media-5" src="/easy-5.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
