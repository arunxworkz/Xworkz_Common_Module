import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import { MoonIcon, SunIcon } from 'lucide-react';

const familyOccasions = [
  "Weddings", "Anniversaries", "Birthdays", "Engagement Parties", "Baby Showers",
  "Housewarming Parties", "Graduation Celebrations", "Religious Ceremonies",
  "Festivals", "Family Reunions", "Retirement Parties", "Farewell Parties",
  "Naming Ceremonies", "Milestone Birthdays", "Cultural Celebrations",
  "Funerals / Memorial Services", "Puja or Ritual Ceremonies",
  "New Year’s Eve/Day Family Gathering", "Adoption Celebrations",
  "Festive Feasts or Potlucks"
];

const Dashboard: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [profilePic, setProfilePic] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [occasion, setOccasion] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [customize, setCustomize] = useState<boolean>(false);

  const handleOccasionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setOccasion(selected);
    setCustomize(false);
  };

  const handleCustomize = () => {
    setOccasion('');
    setCustomize(true);
  };

  const handleCreate = async () => {
    const data = { name, occasion, description };

    try {
      const response = await fetch("http://localhost:8080/api/auth/createStory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error("Failed to generate story");
      }

      const result = await response.text(); // If backend returns plain text
      alert("Story Generated:\n\n" + result);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong while generating the story.");
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Navbar */}
      <nav className={`flex items-center justify-between p-4 shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h1 className="text-2xl font-bold">User Dashboard</h1>
        <div className="flex items-center gap-4">
          <Switch
            checked={darkMode}
            onChange={setDarkMode}
            className="relative inline-flex items-center h-6 rounded-full w-11 bg-gray-300"
          >
            <span className="sr-only">Enable dark mode</span>
            <span
              className={`${darkMode ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition`}
            />
          </Switch>
          {darkMode ? <MoonIcon size={20} /> : <SunIcon size={20} />}
          <img
            src={profilePic || '/default-profile.png'}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </nav>

      {/* Content */}
      <div className="p-8 max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md">
        <div className="flex flex-col gap-6">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400
              ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
          />

          {/* Occasion Dropdown */}
          <select
            value={occasion}
            onChange={handleOccasionChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400
              ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
          >
            <option value="">Select family occasion</option>
            {familyOccasions.map((occ, index) => (
              <option key={index} value={occ}>{occ}</option>
            ))}
          </select>

          {/* Customize Button */}
          <button
            onClick={handleCustomize}
            className="w-fit px-4 py-2 rounded bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
          >
            Customize
          </button>

          {/* Description Textarea */}
          <textarea
            placeholder="Enter story details"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400
              ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
          />

          {/* Create Button */}
          <button
            onClick={handleCreate}
            className="mt-4 px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition"
          >
            Create Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
