import { CheckCircle, Home } from 'lucide-react';

function MessageSent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 relative overflow-hidden flex items-center justify-center p-4">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/InternBridge_Digital_Assets.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px)',
        }}
      />

      <div className="relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-lg p-12 flex flex-col items-center text-center space-y-6 backdrop-blur-sm">
        <img
          src="/InternBridge_Digital_Assets.jpg"
          alt="InternBridge Logo"
          className="w-20 h-20 rounded-2xl object-cover shadow-lg"
        />

        <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center shadow-xl animate-pulse">
          <CheckCircle className="w-14 h-14 text-white" strokeWidth={2.5} />
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-gray-800">Request Sent Successfully!</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Your request has been sent. Admin will reach you soon.
          </p>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        <p className="text-sm text-gray-500 max-w-md">
          You'll receive a response from the InternBridge admin team shortly. Keep an eye on your notifications.
        </p>

        <button
          onClick={() => window.location.href = '/'}
          className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl flex items-center gap-3 group mt-4"
        >
          <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
          <span>Return to Landing Page</span>
        </button>
      </div>
    </div>
  );
}

export default MessageSent;
