import React, { useRef, useState } from 'react';
import Navbar from "../layout/Navbar";
import HTMLFlipBook from "react-pageflip";
import StoryBook from './StoryBook';

const familyOccasions = [
  "Weddings", "Anniversaries", "Birthdays", "Baby Showers",
  "Housewarming Parties", "Graduation Celebrations", "Religious Ceremonies",
  "Family Reunions", "Others"
];

const occasionFields: Record<string, { inputs: string[]; placeholder: string; background: string }> = {
  "Weddings": {
    inputs: ["Partner's Name", "Wedding Location"],
    placeholder: "For example: Describe the wedding, the couple’s journey, and your emotions about the day.",
    background: 'bg-[url("/public/Marriage-Anniversaries.jpg")]'
  },
  "Anniversaries": {
    inputs: ["Anniversary Year", "Partner's Name"],
    placeholder: "For example: Share the beautiful memories, milestones, and surprises.",
    background: 'bg-[url("/public/anniversary.png")]'
  },
  "Birthdays": {
    inputs: ["Person's Name", "Age"],
    placeholder: "For example: Describe the celebration, the person’s interests, and a fun memory.",
    background: 'bg-[url("/public/Birthday-Celebrations.jpg")]'
  },
  "Baby Showers": {
    inputs: ["Parent's Name", "Baby's Gender (if known)"],
    placeholder: "For example: Baby shower for my sister. It’s a boy! She's due in 6 weeks.",
    background: 'bg-[url("/images/babyshower.jpg")]'
  },
  "Housewarming Parties": {
    inputs: ["New Address", "Homeowner's Name"],
    placeholder: "For example: Describe the new house, vibe of the party, and happy emotions.",
    background: 'bg-[url("/public/housewarming.png")]'
  },
  "Graduation Celebrations": {
    inputs: ["Graduate's Name", "Institution"],
    placeholder: "For example: Celebrating my daughter’s graduation from college—so proud of her achievements!",
    background: 'bg-[url("/public/graduation1.png")]'
  },
  "Religious Ceremonies": {
    inputs: ["Ceremony Type", "Person's Name"],
    placeholder: "For example: My nephew’s baptism—a peaceful and joyful family gathering.",
    background: 'bg-[url("/public/religiousceromony.jpg")]'
  },
  "Family Reunions": {
    inputs: ["Family Name", "Location"],
    placeholder: "For example: Reuniting with extended family after years, full of laughter and nostalgia.",
    background: 'bg-[url("/public/familyreuniou.jpg")]'
  },
  "Others": {
    inputs: [],
    placeholder: "For example: Describe the occasion, emotions, and memories.",
    background: 'bg-gradient-to-r from-sky-200 via-pink-100 to-green-200 animate-gradient-x'
  }
};

const Dashboard: React.FC = () => {
  const [name, setName] = useState('');
  const [occasion, setOccasion] = useState('');
  const [description, setDescription] = useState('');
  const [extraFields, setExtraFields] = useState<Record<string, string>>({});
  const [story, setStory] = useState('');

  const handleOccasionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setOccasion(selected);
    setExtraFields({});
    setDescription('');
  };

  const handleExtraFieldChange = (label: string, value: string) => {
    setExtraFields((prev) => ({ ...prev, [label]: value }));
  };

  const handleCreate = async () => {
    const data = {
      name,
      occasion,
      description,
      extraDetails: extraFields
    };

    try {
      const response = await fetch("http://localhost:8080/api/auth/createStory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error("Failed to generate story");

      const result = await response.text();
      setStory(result);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong while generating the story.");
    }
  };

  const occasionData = occasionFields[occasion] || {
    inputs: [],
    placeholder: "Describe the occasion, emotions, and memories.",
    background: 'bg-gray-100'
  };

  // Split the story into two paragraphs
  const storyParagraphs = story.split(/\n\n+/).filter(Boolean);

  return (
    <div className={`min-h-screen bg-cover bg-center ${occasionData.background}`}>
      <Navbar />

      <div className="pt-[90px] px-4 pb-12">
        <div className="max-w-4xl mx-auto p-6 bg-white bg-opacity-90 rounded-xl shadow-md">
          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 border-gray-300"
            />

            <select
              value={occasion}
              onChange={handleOccasionChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-black border-gray-300"
            >
              <option value="">Choose occasion</option>
              {familyOccasions.map((occ, index) => (
                <option key={index} value={occ}>{occ}</option>
              ))}
            </select>

            {occasion !== "Others" && occasionData.inputs.map((label, index) => (
              <input
                key={index}
                type="text"
                placeholder={label}
                value={extraFields[label] || ''}
                onChange={(e) => handleExtraFieldChange(label, e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-black border-gray-300"
              />
            ))}

            <textarea
              placeholder={occasionData.placeholder}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-black border-gray-300"
            />

            <button
              onClick={handleCreate}
              className="mt-4 px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition"
            >
              Create Story
            </button>
          </div>
        </div>

        {/* Book-style output below form */}
        {story && <StoryBook story={story} />}
      </div>
    </div>
  );
};

export default Dashboard;
