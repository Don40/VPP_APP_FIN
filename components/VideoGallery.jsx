import { useState } from "react";

const VideoGallery = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Adjusted grid layout for smaller video sizes and equal aspect ratios */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white p-4 shadow-lg rounded-lg cursor-pointer"
            onClick={() => openModal(video)}
          >
            <div
              className="relative w-full pb-[100%] bg-cover bg-center rounded-lg mb-4"
              style={{ backgroundImage: `url(${video.thumbnailUrl})` }}
            >
              {/* Optional: Add a play icon overlay */}
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          <h3 className="text-sm sm:text-sm md:text-xs lg:text-sm  text-black z-50 opacity-100">{video.title}</h3>


            {/* <p className="text-sm">{video.description}</p> */}
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 rounded-lg max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4 text-black z-50 opacity-100">{selectedVideo.title}</h3>
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={selectedVideo.videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <button
              className="mt-4 text-red-500 hover:underline"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
