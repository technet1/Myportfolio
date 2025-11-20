export default function AboutMe() {
  return (
    <div className="min-h-screen bg-black text-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: Sticky Title (Only sticky on large screens) */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Me,
              <br />
              <span className="text-zinc-700">Myself</span>
            </h1>
          </div>

          {/* RIGHT: Scrollable Content */}
          <div className="space-y-8 text-lg sm:text-xl md:text-2xl leading-relaxed font-light text-zinc-300">
            <p>
              I belong to the historic city of <strong className="text-white">Gaya, Bihar</strong> — where ancient
              spirituality meets vibrant culture, and every corner whispers tales
              of enlightenment and devotion.
            </p>
            <p>
              My journey began with a fascination for how things look and work on
              the web. That curiosity led me to earn a <strong className="text-white">Master’s degree in Computer
              Applications</strong> from Uttaranchal University, where I built a strong
              foundation in code and design. Combining logic with imagination
              became my way of storytelling — just through pixels and lines of
              code.
            </p>
            <p>
              Every project I create tells a small part of my journey — from
              DownSun to ExoApe, each one reflects my drive to learn, evolve, and
              build interactive stories on the web.
            </p>
            <p>
              When I’m not coding or designing, you’ll probably find me
              sketching digital art, writing poetry, or diving into new design
              trends — because creativity doesn’t stop when the laptop closes.
            </p>
            <p>
              I believe in the power of <strong className="text-white">collaboration, creativity, and continuous
              growth</strong>, and I’m always excited to create something that connects
              people, one experience at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}