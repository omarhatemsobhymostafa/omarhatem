import GradientASCII from '../components/GradientASCII';
import StrokeText from '../components/StrokeText';
import ShapeBlur from "@/components/ShapeBlur";

export default function Home() {
  return (
    <main className="relative isolate flex min-h-[calc(100svh-4rem)] flex-1 items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <GradientASCII
          colors={["#7c3aed", "#f6f8ff", "#a5d8ff", "#38bdf8"]}
          shape="horizon"
          characters=" =+xX0S8#@"
          cellSize={18}
          density={0.6}
          glyphOpacity={0.5}
          glow={0.2}
          depthOfField={0}
          flicker={0.2}
          softness={0.5}
          scale={1}
          flow={0.5}
          speed={1}
          gradientOpacity={0.9}
          grain={0.08}
          variation={0}
          mouseInteraction
          scrambleRadius={0.1}
          clickEffect="wave"
          intro
          lightMode={false}
        />
      </div>

      <section className="relative z-10 flex w-full flex-col items-center justify-center gap-3 px-6 text-center sm:gap-5">
        <div className="h-56 w-56 sm:h-72 sm:w-72">
          <ShapeBlur
            className="h-full w-full"
            size={0.6}
            fill
            color="#ffffff"
            blur={16}
            lensSize={0.3}
            lensSoftness={0.7}
            chroma={0.3}
            idle
            sides={6}
            roundness={0.2}
            thickness={2}
            echoes={1}
            spacing={14}
            focus={false}
            rotation={0}
            spin={0}
            src="/logo.png"
          />
        </div>
        <div className="w-full max-w-5xl">
          <StrokeText
            text="Omar Hatem"
            strokeColor="#A78BFA"
            strokeStyle="solid"
            strokeWidth={1.4}
            dashLength={10}
            drawDuration={1.6}
            fillDelay={0.2}
            stagger={0.05}
            ease="power2.out"
            trigger="mount"
            fillMode="wipe"
            wipeFrom="left"
            fontSize={128}
            fontWeight={800}
            letterSpacing={-4}
            marching={false}
            hoverRedraw
            shadow={false}
            fontFamily="inherit"
            reverse={false}
            className="text-white"
          />
        </div>
      </section>
    </main>
  );
}
