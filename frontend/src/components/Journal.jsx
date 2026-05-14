import React, { useState } from "react";

const Journal = () => {
  const [image, setImage] = useState(null);
  const [note, setNote] = useState("");
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  // Image Upload
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Add List Item
  const addItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input]);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="w-full">

        {/* Cover Image Section */}
        <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">

          <h2 className="text-2xl font-semibold mb-4">
            Journal Cover
          </h2>

          <label className="cursor-pointer">
            <div className="border-2 border-dashed border-gray-300 rounded-xl h-56 flex items-center justify-center overflow-hidden bg-gray-100 hover:bg-gray-200 transition">

              {image ? (
                <img
                  src={image}
                  alt="cover"
                  className="w-full h-full object-cover"
                />
              ) : (
                <p className="text-gray-500">
                  Click to Upload Cover Image (Optional)
                </p>
              )}
            </div>

            <input
              type="file"
              className="hidden"
              onChange={handleImage}
            />
          </label>
        </div>

        {/* Main Journal Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">

          <input
            type="text"
            placeholder="Journal Title"
            className="w-full text-3xl font-bold outline-none mb-4"
          />

          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Start writing your thoughts..."
            className="w-full min-h-[300px] outline-none resize-none text-lg leading-8"
          />
        </div>

        {/* List Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6">

          <h2 className="text-2xl font-semibold mb-4">
            Quick List
          </h2>

          <div className="flex gap-3 mb-4">

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add item..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none"
            />

            <button
              onClick={addItem}
              className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800"
            >
              Add
            </button>
          </div>

          <ul className="space-y-3">

            {items.map((item, index) => (
              <li
                key={index}
                className="bg-gray-100 px-4 py-3 rounded-lg"
              >
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Journal;