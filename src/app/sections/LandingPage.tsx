import HeroHeader from '@/app/components/HeroHeader';
import { motion } from 'framer-motion';

export default function LandingPage() {


    return (
        <div className="h-[100vh] sm:h-[100vh] flex justify-center items-center flex-col">
            <HeroHeader />

            <motion.div
                key="registrationClosed"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="mt-6 w-full flex flex-col items-center"
            >
            <div className="text-center font-sans text-black px-10 bg-gradient-to-r from-gray-200 to-gray-100 rounded-2xl mx-5 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-xl">
                <div className="pt-6 pb-6">
                <p className="font-semibold text-2xl">Registration Closed</p>
                <p className="mt-2 text-base">
                    Thanks for your interest! Registration for Kapwa Codefest 2025 is now closed.
                </p>
                <p className="mt-1 text-base">
                    If you already registered, please check your email for details.
                </p>
                </div>
            </div>
            </motion.div>
        </div>
    );
}
