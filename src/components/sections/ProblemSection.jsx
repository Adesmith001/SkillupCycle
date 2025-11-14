import { motion } from 'framer-motion';
import { DollarSign, MapPin, AlertCircle } from 'lucide-react';
import { SlideIn } from '../animations/SlideIn';
import { Card } from '../ui/Card';
import { VideoQuote } from '../ui/VideoQuote';

export const ProblemSection = () => {
  const problems = [
    {
      icon: DollarSign,
      title: "Financial Constraints",
      description: "Many rural youth cannot afford quality education and vocational training",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: MapPin,
      title: "Environmental Insufficiency",
      description: "Lack of infrastructure and resources in rural communities limits access to learning",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="problem" className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Spotlight Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Quote Section */}
        <SlideIn direction="down" className="mb-16">
          <VideoQuote
            quote="Just like Martin Luther King, I had a dream. But it was a dream that could not be..."
            className="max-w-4xl mx-auto"
          />
        </SlideIn>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <SlideIn direction="left">
            <div>
              <motion.div
                className="inline-block bg-red-500/20 border border-red-500 text-red-300 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <AlertCircle className="inline-block mr-2" size={16} />
                The Challenge We Face
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                The Dream That{' '}
                <span className="text-red-400">Cannot Be</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                In Nigeria, millions of young people face a harsh reality:
              </p>

              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-6">
                LACK OF ACCESS TO PROPER EDUCATION!
              </div>

              <p className="text-lg text-gray-400 leading-relaxed">
                This isn't just a statistic. It's the story of dreams deferred, 
                potential unrealized, and futures uncertain. But every problem 
                carries within it the seeds of its own solution...
              </p>
            </div>
          </SlideIn>

          {/* Problem Cards */}
          <SlideIn direction="right">
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-gray-600">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${problem.color} flex items-center justify-center flex-shrink-0`}>
                        <problem.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white">
                          {problem.title}
                        </h3>
                        <p className="text-gray-400">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
};
