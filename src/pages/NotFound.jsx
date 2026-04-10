import { AlertCircle, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NotFound({ onBackHome }) {
    const navigate = useNavigate();

    const handleBackHome = () => {
        if (onBackHome) {
            onBackHome();
            return;
        }

        window.location.assign('/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
            <div className="text-center">
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                            404
                        </div>
                        <AlertCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-red-500 opacity-30" />
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Page Not Found
                </h1>

                <p className="text-xl text-slate-300 mb-8 max-w-md mx-auto">
                    The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                </p>

                <div className="space-y-4">
                    <button
                        type="button"
                        onClick={handleBackHome}
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </button>

                    <p className="text-slate-400 text-sm mt-8">
                        Error Code: 404 | Page Not Found
                    </p>
                </div>
            </div>
        </div>
    );
}
