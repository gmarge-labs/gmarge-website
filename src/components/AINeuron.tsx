import { motion } from 'motion/react';

/** Weekly blended ROAS: what the platforms report vs. what holdout tests show is incremental. */
const REPORTED = [3.6, 3.9, 4.2, 4.0, 4.4, 4.1, 4.3, 4.0];
const INCREMENTAL = [2.4, 2.5, 2.7, 2.6, 2.8, 2.5, 2.7, 2.6];

const W = 320;
const H = 132;
const PAD = 8;
const Y_MIN = 1.8;
const Y_MAX = 4.8;

const xAt = (i: number, n: number) => PAD + (i * (W - PAD * 2)) / (n - 1);
const yAt = (v: number) => PAD + ((Y_MAX - v) / (Y_MAX - Y_MIN)) * (H - PAD * 2);

const toPath = (values: number[]) =>
  values.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xAt(i, values.length)} ${yAt(v)}`).join(' ');

const gapArea = () => {
  const top = REPORTED.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xAt(i, REPORTED.length)} ${yAt(v)}`);
  const bottom = INCREMENTAL.map((v, i) => ({ v, i }))
    .reverse()
    .map(({ v, i }) => `L ${xAt(i, INCREMENTAL.length)} ${yAt(v)}`);
  return [...top, ...bottom, 'Z'].join(' ');
};

export function AINeuron() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0)]">
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Glow effect behind the panel */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-700/30 to-indigo-600/30 rounded-3xl blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Live dashboard panel */}
        <motion.div
          className="relative w-full max-w-sm bg-white border border-[#BFC0C2] rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-[#BFC0C2] bg-[#E8F0FF]">
            <div className="text-sm font-semibold text-black">Blended ROAS — last 8 weeks</div>
            <div className="flex items-center gap-2">
              <motion.span
                className="w-2 h-2 rounded-full bg-[#002B6B]"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="text-xs text-black">Live</span>
            </div>
          </div>

          {/* Headline figures */}
          <div className="grid grid-cols-2 border-b border-[#BFC0C2]">
            <div className="px-6 py-4">
              <div className="text-xs text-black mb-1">Platform reported</div>
              <div className="text-3xl font-bold" style={{ color: '#BFC0C2' }}>4.0x</div>
            </div>
            <div className="px-6 py-4" style={{ borderLeft: '1px solid #BFC0C2' }}>
              <div className="text-xs text-black mb-1">Actually incremental</div>
              <div className="text-3xl font-bold text-[#002B6B]">2.6x</div>
            </div>
          </div>

          {/* Chart */}
          <div className="px-3 py-4">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="w-full h-auto"
              role="img"
              aria-label="Reported ROAS running consistently above incremental ROAS across eight weeks"
            >
              {[2.0, 3.0, 4.0].map((v) => (
                <line
                  key={v}
                  x1={PAD}
                  x2={W - PAD}
                  y1={yAt(v)}
                  y2={yAt(v)}
                  stroke="#BFC0C2"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                  opacity="0.5"
                />
              ))}

              {/* The gap between reported and real */}
              <motion.path
                d={gapArea()}
                fill="#002B6B"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.08 }}
                transition={{ duration: 1.2, delay: 2 }}
              />

              {/* Reported line */}
              <motion.path
                d={toPath(REPORTED)}
                fill="none"
                stroke="#BFC0C2"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, delay: 0.8, ease: 'easeInOut' }}
              />

              {/* Incremental line */}
              <motion.path
                d={toPath(INCREMENTAL)}
                fill="none"
                stroke="#002B6B"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, delay: 1.4, ease: 'easeInOut' }}
              />

              <motion.circle
                cx={xAt(REPORTED.length - 1, REPORTED.length)}
                cy={yAt(REPORTED[REPORTED.length - 1])}
                r="4"
                fill="#BFC0C2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 2.4 }}
              />
              <motion.circle
                cx={xAt(INCREMENTAL.length - 1, INCREMENTAL.length)}
                cy={yAt(INCREMENTAL[INCREMENTAL.length - 1])}
                r="4"
                fill="#002B6B"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 2.6 }}
              />
            </svg>
          </div>

          {/* Agent read-out */}
          <motion.div
            className="px-6 py-4 border-t border-[#BFC0C2] bg-[#E8F0FF]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#002B6B] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">AI</span>
              </div>
              <p className="text-sm text-black leading-relaxed">
                35% of your reported return isn&apos;t incremental. The gap is widest on prospecting.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Pulsing energy rings */}
        <motion.div
          className="absolute inset-0 border-2 border-blue-600/30 rounded-3xl pointer-events-none"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />

        <motion.div
          className="absolute inset-0 border-2 border-indigo-600/30 rounded-3xl pointer-events-none"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeOut',
            delay: 1.5,
          }}
        />

        {/* Corner accent lights */}
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/40 to-transparent rounded-full blur-2xl pointer-events-none"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-600/40 to-transparent rounded-full blur-2xl pointer-events-none"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </motion.div>
    </div>
  );
}
