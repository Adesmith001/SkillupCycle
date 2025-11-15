import { motion } from 'framer-motion';
import { Sparkles, Wifi, WifiOff, BookOpen, Users, Globe } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const SolutionSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Quality Curriculum',
      description: 'Industry-relevant courses designed by experts and practitioners',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Community Learning',
      description: 'Connect with peers and mentors for collaborative growth',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Multilingual Content',
      description: 'Courses available in English, Hausa, Yoruba, Igbo, and more',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id='solution' className='py-20 md:py-32 bg-gradient-to-b from-white via-primary-50/30 to-white relative overflow-hidden'>
      <div className='absolute inset-0 opacity-30'>
        <div className='absolute top-20 right-10 w-72 h-72 bg-accent-200 rounded-full blur-3xl' />
        <div className='absolute bottom-20 left-10 w-96 h-96 bg-primary-200 rounded-full blur-3xl' />
      </div>

      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        <motion.div
          className='text-center mb-20'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className='inline-flex items-center justify-center mb-6'
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles className='text-accent-500' size={48} />
          </motion.div>

          <h2 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6'>
            Introducing <span className='text-primary-600'>SkillUpCycle</span>
          </h2>
          
          <p className='text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8'>
            A transformative educational platform empowering rural Nigerian youth with accessible, quality skills training
          </p>

          <div className='flex flex-wrap justify-center gap-3 mb-12'>
            <Badge variant='primary' className='text-base px-4 py-2'>
               SDG 4: Quality Education
            </Badge>
            <Badge variant='secondary' className='text-base px-4 py-2'>
               SDG 8: Decent Work
            </Badge>
          </div>
        </motion.div>

        <motion.div
          className='max-w-5xl mx-auto mb-20'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className='bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100'>
            <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center'>
              Breaking Down Barriers to <span className='text-primary-600'>Quality Education</span>
            </h3>
            
            <p className='text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-center'>
              We provide <span className='font-bold text-primary-600'>free vocational and technical education</span> to 
              rural Nigerian youth, eliminating financial constraints and overcoming environmental limitations through innovative learning solutions.
            </p>

            <div className='grid md:grid-cols-2 gap-6'>
              <div className='flex items-start gap-4 p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl'>
                <div className='w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <Wifi className='text-white' size={24} />
                </div>
                <div>
                  <h4 className='font-bold text-gray-900 mb-2 text-lg'>Online Learning</h4>
                  <p className='text-gray-700'>
                    Access interactive courses, live sessions, and digital resources with internet connectivity
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 p-6 bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl'>
                <div className='w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <WifiOff className='text-white' size={24} />
                </div>
                <div>
                  <h4 className='font-bold text-gray-900 mb-2 text-lg'>Offline Access</h4>
                  <p className='text-gray-700'>
                    Download content and continue learning even without internet in remote areas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className='grid md:grid-cols-3 gap-8 mb-16'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className='group'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className='h-full bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary-200 transition-all duration-300'>
                <div className={'w-14 h-14 rounded-xl bg-gradient-to-br ' + feature.color + ' flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'}>
                  <feature.icon className='text-white' size={28} />
                </div>
                <h4 className='text-xl font-bold text-gray-900 mb-3'>
                  {feature.title}
                </h4>
                <p className='text-gray-600 leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className='text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button 
            size='lg'
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Programs
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
