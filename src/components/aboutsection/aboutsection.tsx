export default function AboutSection() {
  return (
    <div className="w-full py-16 [background:linear-gradient(71deg,_#520E1C_22.72%,_#7A1520_99.76%)]">
      <div className="mx-auto max-w-[1280px] px-8">
        <video
          src="/Video1.mp4"
          playsInline
          controls
          className="aspect-auto h-[645px] w-[360px] rounded-4xl"
          poster="/poster.jpg"
        ></video>
      </div>
    </div>
  );
}
