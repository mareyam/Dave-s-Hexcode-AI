import { Play, Star, ArrowRight, Folder } from 'lucide-react';

export default function Nomisscalls() {
    return (
        <div id="get-started" className="min-h-screen bg-gray-50">
            {/* Dark Header Bar */}
            <div className="bg-gray-800 h-2 w-full"></div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-12">

                {/* Header Section */}
                <div className="mb-12">
                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-blue-500 rounded-lg p-2 mr-3">
                            <span className="text-white text-2xl">⚡</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Hexcode AI Alternative: Hexcode AI vs MissNoCalls in Epic Bot Battle
                        </h1>
                    </div>

                    <p className="text-center text-lg text-gray-700">
                        Examine other best options in the market and see how{' '}
                        <span className="font-bold">Hexcode AI</span> compares with{' '}
                        <a href="#" className="text-blue-600 hover:underline font-semibold">MissNoCalls</a>:
                    </p>
                </div>

                {/* Video Section */}
                <div className="mb-16">
                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl aspect-video relative">
                        {/* Video Thumbnail/Placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 flex items-center justify-center">
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-full mb-4 hover:bg-red-700 transition-colors cursor-pointer">
                                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                                </div>
                                <h3 className="text-white text-2xl font-bold mb-2">
                                    🔥 Voiceflow vs MissNoCalls Upfront - Epic Bot Battles 🔥
                                </h3>
                                <div className="text-white/80 text-sm">Watch on YouTube</div>
                            </div>
                        </div>

                        {/* Overlay decoration */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-4 left-4 text-white/20 text-6xl">🤖</div>
                            <div className="absolute bottom-4 right-4 text-white/20 text-6xl">⚡</div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                            <Star className="w-8 h-8 text-yellow-500 mr-3" fill="currentColor" />
                            Try MissNoCalls Today
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            MissNoCalls wins this battle hands down. It's more flexible, budget-friendly, and global than Hexcode AI.
                            Whether you're a small company or a big enterprise, MissNoCalls is ready to help you grow. Plus, its
                            commitment to customer satisfaction ensures you'll always have the support you need.
                        </p>

                        <div className="bg-gray-50 rounded-xl p-6 mb-8">
                            <p className="text-xl font-semibold text-gray-900">
                                Try MissNoCalls today.{' '}
                                <a href="#" className="text-blue-600 hover:underline">Book a demo</a>{' '}
                                to see how it can change the way you do business.
                            </p>
                        </div>

                        <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center">
                            <span className="mr-2">➕</span>
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Footer Navigation */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center mb-4">
                        <Folder className="w-5 h-5 text-gray-600 mr-2" />
                        <span className="text-sm font-semibold text-gray-700">Epic Bot Battles</span>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                            <span className="mr-2">‹</span>
                            <a href="#" className="hover:underline">Convin Review, Pricing and Alternative</a>
                        </div>
                        <div className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                            <span className="mr-2">›</span>
                            <a href="#" className="hover:underline">Pixel Calls Review, Pricing and Alternative</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}