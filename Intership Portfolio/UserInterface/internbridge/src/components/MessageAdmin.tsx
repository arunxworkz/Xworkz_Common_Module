import { useState } from 'react';
import { Send, ArrowLeft, Building2 } from 'lucide-react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MessageAdmin() {

    const navigator = useNavigate()
    const { compnayUniqueId } = useParams(); // ✅ this gives you the adminId from URL
    const { companyName } = useParams();
  const [message, setMessage] = useState('');
//   const adminName = 'InternBridge Admin';
 

  const handleSendMessage = async () => {
    if (message.trim()) {
      console.log('Message sent:', message);
      setMessage('');
    }

    try{
        await axios.post(`http://localhost:8080/auth/message-admin/${compnayUniqueId}`, {
            message: message
        });
        
        navigator("/message-sent");
    }catch(error){
        console.error("Error sending message:", error);
      alert("Failed to send message. Try again.");
   
    }

  };

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

      <div className="relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 flex flex-col space-y-6 backdrop-blur-sm">
        <div className="flex items-center mb-2">
          <button
            onClick={() => window.history.back()}
            className="text-teal-600 hover:text-teal-800 transition-colors duration-200 flex items-center gap-2 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
        </div>

        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">Message Admin</h1>
          <img
            src="/InternBridge_Digital_Assets.jpg"
            alt="InternBridge Logo"
            className="w-12 h-12 rounded-xl object-cover shadow-md"
          />
        </div>

        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center shadow-md">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            {/* <p className="font-semibold text-gray-800">{adminName}</p> */}
            <p className="text-sm text-gray-500">{companyName}</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-5 rounded-xl shadow-inner border border-teal-100">
          <h2 className="font-bold mb-3 text-gray-800 text-lg flex items-center gap-2">
            <span className="w-1.5 h-6 bg-gradient-to-b from-teal-500 to-cyan-600 rounded-full"></span>
            Internship Opportunities
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Explore exciting internship roles with <span className="font-semibold text-teal-700">{companyName}</span>!
            Gain hands-on experience, develop your skills, and work on real projects.
            You can reach out to the admin here to request permission to join an internship program.
          </p>
        </div>

        <div className="space-y-2">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, 500))}
            placeholder="Type your message to the admin..."
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none transition-all duration-200 text-gray-700 placeholder-gray-400"
            rows={6}
          />
          <div className="text-right text-gray-400 text-sm font-medium">
            {message.length}/500
          </div>
        </div>

        <button
          disabled={!message.trim()}
          onClick={handleSendMessage}
          className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 group"
        >
          <span>Send Message</span>
          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
}

export default MessageAdmin;
