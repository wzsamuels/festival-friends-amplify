import React, {ReactNode, useEffect, useRef, useState} from "react";
import AuthComponent from "./AuthComponent";
import Button from "../../components/common/Button/Button";
import {
  motion,
  MotionValue,
  useAnimationFrame,  useMotionValue,
  useScroll,
  useSpring, useTime,
  useTransform,
  useVelocity, wrap
} from "framer-motion";
import { LocalNotifications } from "@capacitor/local-notifications"
import ss1 from "../../assests/images/ss1.jpg"
import ss2 from "../../assests/images/ss2.jpg"
import textCircle from "../../assests/images/yellow-text-circle.svg"
import appleBadge from "../../assests/images/apple-store-badge.svg"
import googleBadge from "../../assests/images/google-store-badge.png"
import textLogo from "../../assests/images/text-logo-black.jpg"
import logo from "../../assests/images/logo.svg"

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(0, 0, 0, 0)"
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    fill: "rgba(0, 0, 0, 1)"
  }
}

const LandingPage = () => {
  const [loggingIn, setLoggingIn] = useState(false);
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({container: ref});

  useEffect(() => {
    LocalNotifications.requestPermissions().then(res => {
      console.log(res);
    });
  }, []);


  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const time = useTime();
  const rotate = useTransform(time, [0, 16000], [0, 360], { clamp: false });

  if(loggingIn) {
    return <AuthComponent/>
  }

  //snap-mandatory snap-y
  return (
    <div ref={ref} className=" relative overflow-y-scroll h-full scroll-smooth bg-black overflow-x-hidden ">

      <div className="w-full h-screen bg-black snap-start">
        <div className="flex flex-col items-center h-full">

          <img className="max-w-2xl w-full m-4" src={textLogo}/>
          <div className="relative h-full max-h-[300px] md:max-h-[500px] w-full md:max-w-[500px] flex justify-center items-center m-4">
            <motion.img className="h-full w-full absolute" src={textCircle} style={{rotate}}/>
            <motion.svg
              viewBox="0 0 1426.09 1426.09"
              className="stroke-2  h-[200px] md:h-[300px] w-[300px] z-10"
            >
              <motion.path
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 3, ease: "easeInOut" },
                  stroke: { duration: 6, ease: [1, 0, 0.8, 1] },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                }}
                className="fil1"
                stroke="#000"
                d="m 1196.3533,443.00355 c 38.725,67.07364 15.5825,153.46964 -51.4911,192.19472 L 927.53305,760.67322 c -38.01176,24.3017 -64.94552,62.61107 -75.00017,106.55591 l -0.0536,0.22723 c -3.09956,13.67139 -4.52061,27.69008 -4.2263,41.69986 l 1.66152,79.25776 -2.48935,-2.21163 0.004,169.72715 c -0.009,32.5445 -11.288,63.6284 -31.42027,88.4387 -25.08871,30.9049 -68.92723,52.2544 -109.27114,52.2564 -77.34142,7e-4 -140.69452,-63.35 -140.69532,-140.6914 l -0.003,-262.48474 C 560.44514,842.11873 531.9951,795.90184 488.63351,767.79735 L 263.78149,637.98128 c -66.9793,-38.67136 -90.16596,-125.21223 -51.49459,-192.19143 39.13712,-67.80748 122.7605,-90.33254 190.50269,-52.45956 0.56582,0.31974 1.1316,0.63982 1.68881,0.96464 L 615.37551,516.0599 c 52.26681,30.16817 116.47099,31.19365 169.40161,2.11216 L 1004.4271,391.35725 c 69.7844,-40.2901 153.6713,-14.6136 191.9263,51.64601 z m -513.02453,-260.8444 0.63214,-0.66529 12.2104,-0.49084 c 2.67977,-0.1387 5.38592,-0.2115 8.10994,-0.21344 0.18399,0 0.36696,-1.7e-4 0.55048,-0.01 92.44408,9e-5 167.66933,75.21194 167.66812,167.66929 0.002,0.18362 -0.005,0.37231 -0.002,0.55592 -0.0317,9.84479 -0.91784,19.4902 -2.58159,28.8684 -5.75108,32.4188 -20.95396,62.5466 -44.11567,86.6694 l -9.60912,10.0165 -1.02811,0.0393 c -29.50971,25.84784 -68.12423,41.52553 -110.3411,41.52376 -92.44402,0.002 -167.66936,-75.21175 -167.66806,-167.66959 0.004,-85.1729 63.83276,-155.71858 146.17527,-166.29719 z m 466.56683,614.07741 1.0422,0.045 9.7636,11.59112 c 15.4258,18.29852 26.3927,39.33321 32.7639,61.50859 12.2147,42.27659 7.9288,89.25311 -15.7182,130.29532 -0.022,0.0381 -0.053,0.0722 -0.063,0.10795 -0.035,0.0622 -0.069,0.12068 -0.1029,0.17829 -12.4985,21.59197 -29.111,39.35847 -48.2725,52.86947 -29.8743,21.1163 -66.3805,32.2857 -104.1655,30.6604 l -15.1377,-0.6596 -0.6847,-0.8056 c -20.80346,-2.8731 -41.40298,-9.7322 -60.68186,-20.8642 -80.05788,-46.2238 -107.59611,-148.98181 -61.37211,-229.0395 46.22798,-80.07116 148.97687,-107.60466 229.04807,-61.37698 12.503,7.21515 23.7267,15.81568 33.5859,25.49239 z m -627.50068,35.87688 c 46.29501,80.18533 18.80512,182.75146 -61.38014,229.04666 -1.35101,0.7799 -2.71201,1.5424 -4.07421,2.2828 l -12.3804,6.917 -0.92718,-0.4464 c -77.08119,33.3717 -168.64956,4.3703 -211.65951,-70.12514 -46.29519,-80.18529 -18.81401,-182.74649 61.3713,-229.0415 43.7516,-25.25999 94.16633,-28.55932 138.46791,-13.30668 l 1.0875,-0.61632 14.64484,6.92546 c 30.37426,14.00982 56.85999,37.20445 74.84997,68.36402 z"
                id="path9"/>
              <path
                className="fil2"
                fill="#fff"
                d="m 492.49976,849.37348 c 36.76999,63.68747 14.94246,145.12135 -48.74508,181.89132 -63.68719,36.7698 -145.11618,14.9512 -181.88622,-48.73623 -36.76998,-63.68761 -14.9511,-145.11647 48.73649,-181.8864 63.68731,-36.76994 145.12482,-14.9562 181.89481,48.73131 z"
                id="path11"/>
              <path
                className="fil2"
                fill="#fff"
                d="m 917.15424,849.37664 c 36.77194,-63.68887 118.20256,-85.50708 181.89146,-48.73485 63.6889,36.77181 85.5071,118.20247 48.7436,181.88623 -36.7711,63.68938 -118.2027,85.50728 -181.89147,48.73498 -63.68388,-36.76328 -85.50708,-118.2026 -48.74359,-181.88636 z"
                id="path13"/>
              <path
                fill="#fff"
                className="fil2"
                d="m 704.82426,481.61029 c -73.53352,-0.004 -133.15007,-59.6227 -133.15507,-133.15127 0.007,-73.54729 59.61785,-133.15876 133.15999,-133.15994 73.53353,-7e-5 133.15014,59.62265 133.1465,133.15618 9.4e-4,73.54199 -59.60926,133.1538 -133.15142,133.15503 z"
                id="path15"/>
              <path
                fill="#fff"
                className="fil2"
                d="M 774.17814,1236.7 C 756.67004,945.53545 655.97779,776.17127 477.42237,721.42429 l 28.4788,16.44213 c 53.16229,34.11979 87.70515,90.71001 93.92783,153.32782 l -0.003,264.27976 c 0.006,58.39 47.77377,106.1671 106.17728,106.1649 25.89124,0 49.69544,-9.3851 68.17454,-24.9385 z"
                id="path17"/>
              <path
                className="fil2"
                fill="#fff"
                d="m 674.7758,915.72483 10e-4,221.78267 c -0.002,53.8565 40.63568,98.6832 92.77157,105.325 2.52741,-1.7823 4.98972,-3.6776 7.36116,-5.6702 23.19209,-19.5099 37.99719,-48.7269 37.9952,-81.2305 l 0.006,-224.26944 -0.004,-22.52617 0.8331,0.74301 c -0.35627,-17.05709 1.39971,-33.85563 5.08581,-50.07114 11.96446,-52.65695 44.28826,-99.17047 90.79698,-128.65502 L 1127.6012,605.3032 c 50.5673,-29.19517 68.056,-94.46386 38.8559,-145.03965 -25.9849,-45.0075 -80.5491,-63.8152 -127.8836,-46.8211 -5.8553,2.0988 -11.5875,4.75009 -17.1473,7.96 l -212.48802,122.68011 -7.20534,4.15999 c -63.37327,34.97256 -140.70158,34.29607 -203.61302,-2.28978 L 387.22287,424.18789 c -50.57801,-29.20353 -115.8437,-11.70687 -145.03841,38.86618 -29.20369,50.56227 -11.71175,115.83481 38.85243,145.03453 l 197.11727,113.79763 c 81.28567,40.9309 146.82493,105.54833 196.62161,193.83865 z"
                id="path19"/>
              <path
                fill="#fff"
                d="m 674.7758,915.72483 10e-4,221.78267 c -0.002,53.8565 40.63568,98.6832 92.77157,105.325 2.52741,-1.7823 4.98972,-3.6776 7.36116,-5.6702 23.19209,-19.5099 37.99719,-48.7269 37.9952,-81.2305 l 0.006,-224.26944 -0.004,-22.52617 0.8331,0.74301 c -0.35627,-17.05709 1.39971,-33.85563 5.08581,-50.07114 11.96446,-52.65695 44.28826,-99.17047 90.79698,-128.65502 L 1127.6012,605.3032 c 50.5673,-29.19517 68.056,-94.46386 38.8559,-145.03965 -25.9849,-45.0075 -80.5491,-63.8152 -127.8836,-46.8211 -5.8553,2.0988 -11.5875,4.75009 -17.1473,7.96 l -212.48802,122.68011 -7.20534,4.15999 c -63.37327,34.97256 -140.70158,34.29607 -203.61302,-2.28978 L 387.22287,424.18789 c -50.57801,-29.20353 -115.8437,-11.70687 -145.03841,38.86618 -29.20369,50.56227 -11.71175,115.83481 38.85243,145.03453 l 197.11727,113.79763 c 81.28567,40.9309 146.82493,105.54833 196.62161,193.83865 z"
                id="path19"/>
            </motion.svg>
            <div className=" bg-lightYellow rounded-full h-[200px] md:h-[300px] w-[200px] md:w-[300px] absolute top z-0"/>
          </div>
          <Button className="text-2xl my-8" onClick={() => setLoggingIn(true)}>Login</Button>
          <div className="flex gap-4">
            <div className="flex-1 ">
              <img className="h-full max-h-[75px]" src={googleBadge}/>
            </div>
            <div className="max-h-[150px] flex-1">
              <img className="h-full max-h-[150px]" src={appleBadge}/>
            </div>
          </div>
            <div className="text-lightYellow text-2xl my-4">Mobile Apps Coming soon!</div>

          {/*<Button onClick={scheduleNotification}>Schedule Notification</Button>*/}
        </div>
      </div>
      {/*
      <Div2/>
      <Div3/>
      <Div4/>
      <motion.div className="fixed left-0 right-0 h-2 bottom-0 bg-darkGreen z-50" style={{ scaleX }} />
      */}
    </div>
  );
}

const Div2 = () => {
  const ref = useRef(null);
  const [progress1, setProgress1] = useState(0);

  return (
    <ScrollTrackDiv progress={setProgress1}>
      <motion.div
        className="bg-lightYellow min-h-[800px] relative z-20 snap-center w-full"
        transition={{ ease: "linear", duration: 1, delay: .7}}
        ref={ref}
       style={{opacity: progress1}}
      >
        <motion.div className="text-5xl text-center m-4 w-full"
        >

          <motion.div
            className="left-1/2"
            whileInView={{opacity:1, transform: "translateX(0%)"}}
            initial={{opacity: 0, transform: "translateX(-100%)"}}
            transition={{duration: 1, ease: "circIn"}}

          >Discover
          </motion.div>
          <motion.div
            whileInView={{opacity:1, transform: "translateX(0%)"}}
            initial={{opacity: 0, transform: "translateX(-100%)"}}
            transition={{duration: 1.3, ease: "circIn", delay: 0.5}}
            className="text-lightYellow" style={{textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>Upcoming Events</motion.div>
        </motion.div>
        <motion.img
          className="w-full  max-w-[200px] md:max-w-[300px] absolute border border-black mt-8"
          initial={{left: "0%", top: "50%", rotate: 45}}
          whileInView={{left:  "50%", top: "15%", rotate: 45}}
          transition={{duration: 1, ease: "linear"}}
          src={ss1}/>
        <motion.img
          className="w-full max-w-[300px] absolute border border-black mt-8"
          initial={{right: "-5%", rotate: 45}}
          whileInView={{right:  "50%", rotate: 45}}
          transition={{duration: 1, ease: "linear"}}
          src={ss2}/>

      </motion.div>
    </ScrollTrackDiv>
  )
}

const Div3 = () => {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  return (
    <ScrollTrackDiv progress={setProgress} className="flex justify-center">
      <motion.div
        className="my-8 min-h-[800px] max-w-[1000px] text-center w-full bg-black snap-start text-5xl relative z-30 text-lightYellow"
        ref={ref}
        style={{opacity: progress}}
      >
        <motion.div
          initial={{ opacity: 0, transform: "translateY(100%)" }}
          whileInView={{ opacity:1, transform: "translateY(0%)", repeatCount: 2}}
          transition={{ duration: 1, ease: "backIn" }}
        >
          Connect
        </motion.div>
        <motion.div
          initial={{ opacity: 0, transform: "translateY(-100%)" }}
          whileInView={{ opacity:1, transform: "translateY(0%)", repeatCount: 2}}
          transition={{duration: 1, ease: "backIn"}}
          className="text-lightYellow" style={{textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>
          With Friends
        </motion.div>
        <motion.img
          className="w-full max-w-[200px] md:max-w-[300px] absolute  border border-black mt-8"
          initial={{rotateY: 180, left: "95%"}}
          whileInView={{rotateY: 0, left: "5%"}}
          transition={{duration: 1}}
          src={ss1}
        />
        <motion.img
          className="w-full max-w-[200px] md:max-w-[300px] absolute border border-black mt-8"
          initial={{rotateY: 180, right: "95%"}}
          whileInView={{rotateY: 0, right: "5%"}}
          transition={{duration: 1, ease: "easeOut"}}
          src={ss2}
        />
      </motion.div>
    </ScrollTrackDiv>
  )
}

const Div4 = () => {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  return (
    <ScrollTrackDiv progress={setProgress} className="flex justify-center">
      <motion.div
        className="mt-8 min-h-[800px] w-full bg-lightYellow snap-start text-5xl relative z-30"
        ref={ref}
        style={{opacity: progress}}
      >
        <motion.div
          whileInView={{opacity:1, transform: "translateX(0%)"}}
          initial={{opacity: 0, transform: "translateX(-100%)"}}
          transition={{duration: 1, ease: "circIn"}}
        >
          Promote
        </motion.div>
        <motion.div
          whileInView={{opacity:1, transform: "translateX(0%)"}}
          initial={{opacity: 0, transform: "translateX(-100%)"}}
          transition={{duration: 1.3, ease: "circIn", delay: 0.25}}
          className="text-lightYellow" style={{textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>
          Your Event
        </motion.div>
        <motion.img
          className="w-full max-w-[200px] md:max-w-[300px] absolute  border border-black mt-8"
          initial={{transform: "translateY(-100%)"}}
          whileInView={{transform: "translateY(0)"}}
          transition={{duration: 1, ease: "easeOut"}}
          src={ss1}
        />
        <motion.img
          className="w-full max-w-[200px] md:max-w-[300px] absolute border border-black mt-8"
          initial={{transform: "translateY(100%)"}}
          whileInView={{transform: "translateY(0)"}}
          transition={{duration: 1, ease: "easeOut"}}
          src={ss2}
        />
      </motion.div>
    </ScrollTrackDiv>
  )
}



interface ParallaxProps {
  children: ReactNode;
  baseVelocity: number;
}

function Parallax({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const wrapStart = -(2244/viewportWidth) * 100;
  const x = useTransform(baseX, (v) => `${wrap(wrapStart, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="flex flex-nowrap overflow-hidden">
      <motion.div className="flex flex-nowrap"  style={{ x }}>
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);

  return (
    <section style={{perspective: "500px"}}  className="h-[75vh] flex justify-around items-center relative">
      <div className="relative w-[300px] h-[400px] max-h-[90vh] margin-[20px] bg-white overflow-hidden" ref={ref}>
        <img className="absolute top-0 left-0 bottom-0 w-full h-full" src={`https://twinsilver.mo.cloudinary.net/eventfriends/public/website/face${id}.jpg?tx=q_auto,f_auto`} alt="A London skyscraper" />
      </div>
      <motion.h2 className="text-xl" style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  );
}
// /src/assests/images/logo.svg
// /src/assests/HelveticaNeue_Bold.json



export default LandingPage;



/*

const RotatingTextThree = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    const light = new HemisphereLight(0xffffbb, 0x080820, 1);
    scene.add(light);

    // Add image at center
    const textureLoader = new TextureLoader();
    textureLoader.load('/src/assests/images/logo.svg', (texture) => {
      const material = new SpriteMaterial({ map: texture });
      const sprite = new Sprite(material);
      scene.add(sprite);
    });

    const loader = new FontLoader();
    loader.load('/src/assests/HelveticaNeue_Bold.json', (font) => {
      const texts = ['Text 1', 'Text 2', 'Text 3', 'Text 4'];
      const radius = 2;
      texts.forEach((text, i) => {
        const geometry = new TextGeometry(text, {
          font: font,
          size: 0.2,
          height: 0.01,
        });
        const material = new MeshPhongMaterial({ color: 0xff0000 });
        const mesh = new Mesh(geometry, material);
        // Set initial position and angle
        const angle = (2 * Math.PI / texts.length) * i;
        mesh.position.x = radius * Math.cos(angle);
        mesh.position.z = radius * Math.sin(angle);
        mesh.angle = angle;  // Store the angle as a custom property of the mesh
        // Adjust rotation of the mesh so it's facing outward
        mesh.rotation.y = -angle + Math.PI / 2;
        scene.add(mesh);
      });

      const animate = () => {
        requestAnimationFrame(animate);

        scene.traverse((object) => {
          if (object.isMesh) {
            object.angle += 0.01;  // Update the angle
            object.position.x = radius * Math.cos(object.angle);  // Update position
            object.position.z = radius * Math.sin(object.angle);
            // Adjust rotation of the mesh so it's always facing outward
            object.rotation.y = -object.angle + Math.PI / 2;
          }
        });

        renderer.render(scene, camera);
      };

      animate();
    });

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize, false);

    mountRef.current.appendChild(renderer.domElement);

    return () => {
      while (mountRef.current.firstChild) {
        mountRef.current.removeChild(mountRef.current.lastChild);
      }
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return <div ref={mountRef} />;
};

 const images: MotionValue[] = [];
  images.push(useTransform(scrollYProgress, [0, 1], [-400, 400]));
  images.push(useTransform(scrollYProgress, [0, 1], [-800, 800]));
  images.push(useTransform(scrollYProgress, [0, 1], [-0, 800]));
  images.push(useTransform(scrollYProgress, [0, 1], [-0, 1200]));
  images.push(useTransform(scrollYProgress, [0, 1], [-0, 200]));
  images.push(useTransform(scrollYProgress, [0, 1], [-0, 600]));

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const container = document.querySelector('.circle');
    const textItems = document.querySelectorAll('.text-item');
    const totalItems = textItems.length;
    const radius = container.clientWidth / 2;

    const calculatePosition = (index) => {
      const angle = (360 / totalItems) * index;
      const x = radius * Math.cos(angle * (Math.PI / 180));
      const y = radius * Math.sin(angle * (Math.PI / 180));

      return { x, y };
    };

    textItems.forEach((item, index) => {
      const { x, y } = calculatePosition(index);
      item.style.transform = `translate(${x}px, ${y}px)`;
    });
  }, []);

 */

interface ScrollTrackDivProps {
  children: ReactNode;
  className?: string;
  progress: (ratio: number) => void;
}

const ScrollTrackDiv: React.FC<ScrollTrackDivProps> = ({ children, progress, className }) => {
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        progress(entry.intersectionRatio);
      },
      {
        root: null, // relative to the viewport
        threshold: new Array(101).fill(0).map((v, i) => i * 0.01) // an array [0, 0.01, 0.02, ..., 1]
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, [progress]);

  return <div ref={divRef} className={className}>{children}</div>;
};
