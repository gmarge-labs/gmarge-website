import { motion } from 'motion/react';
import { useRouter, pathForPage, isModifiedClick } from '../components/Router';

export default function NotFoundPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-6xl font-bold text-[#002B6B] mb-4">404</div>
        <h1 className="text-4xl font-bold text-black mb-6">This page does not exist</h1>
        <p className="text-xl text-black mb-8 leading-relaxed">
          The link may be out of date, or the address mistyped. The pages below cover most of
          what people come here looking for.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.a
            href={pathForPage('home')}
            onClick={(e) => {
              if (isModifiedClick(e)) return;
              e.preventDefault();
              navigate('home');
            }}
            className="px-8 py-4 rounded-full bg-[#002B6B] text-white font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to home
          </motion.a>
          <motion.a
            href={pathForPage('services')}
            onClick={(e) => {
              if (isModifiedClick(e)) return;
              e.preventDefault();
              navigate('services');
            }}
            className="px-8 py-4 rounded-full border-2 border-[#002B6B] text-[#002B6B] font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            What we do
          </motion.a>
          <motion.a
            href={pathForPage('contact')}
            onClick={(e) => {
              if (isModifiedClick(e)) return;
              e.preventDefault();
              navigate('contact');
            }}
            className="px-8 py-4 rounded-full border-2 border-[#002B6B] text-[#002B6B] font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
