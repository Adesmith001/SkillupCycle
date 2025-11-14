import { motion } from 'framer-motion';
import { Sparkles, Wifi, WifiOff } from 'lucide-react';
import { ScaleIn } from '../animations/ScaleIn';
import { SlideIn } from '../animations/SlideIn';
import { Badge } from '../ui/Badge';

export const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 md:py-32 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Introduction */}
        <ScaleIn className="text-center mb-16">
          <motion.div
            className="inline-block mb-6"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="text-accent-500" size={48} />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            And that is where{' '}
            <span className="text-primary-600">we come in</span>
          </h2>
        </ScaleIn>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Logo/Brand Reveal */}
          <ScaleIn className="text-center mb-16">
            <motion.div
              className="mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
            > 
              <h1 className="text-5xl md:text-7xl font-display font-bold bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent mb-4">
                SkillUpCycle
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-700 font-semibold mb-6">
                Empowering the Future
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="primary">
                🎓 SDG 4: Quality Education
              </Badge>
              <Badge variant="secondary">
                💼 SDG 8: Decent Work
              </Badge>
            </div>
          </ScaleIn>

          {/* Description */}
          <SlideIn direction="up" className="mb-16">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                SkillUpCycle is more than just an educational platform—it's a{' '}
                <span className="font-bold text-primary-600">movement</span> to transform 
                lives through accessible, quality skills training.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We provide <span className="font-semibold">free vocational and technical education</span> to 
                rural Nigerian youth, breaking down the barriers of financial constraints 
                and environmental limitations.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-4 p-4 bg-primary-50 rounded-xl">
                  <Wifi className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Online Learning</h4>
                    <p className="text-gray-600 text-sm">
                      Access courses anytime, anywhere with internet connectivity
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-accent-50 rounded-xl">
                  <WifiOff className="text-accent-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Offline Access</h4>
                    <p className="text-gray-600 text-sm">
                      Download content and learn even without internet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SlideIn>

          {/* Key Points */}
          <SlideIn direction="up">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { number: "01", title: "Accessible", desc: "Free for all rural youth" },
                { number: "02", title: "Localized", desc: "Content in local languages" },
                { number: "03", title: "Practical", desc: "Real-world skills training" }
              ].map((item, index) => (
                <motion.div
                  key={item.number}
                  className="bg-white rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-5xl font-bold text-primary-200 mb-3">
                    {item.number}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
};
