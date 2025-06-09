interface VideoData {
  id: string
  title: string
  embedId: string
}

interface VideoGalleryProps {
  videos: VideoData[]
}

export default function VideoGallery({ videos }: VideoGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12">
      {videos.map((video) => (
        <div key={video.id} className="space-y-3">
          {/* Title above the video */}
          <h3 className="text-lg font-semibold text-gray-900">{video.title}</h3>

          {/* Video with hover effect but no border/card */}
          <div className="aspect-video overflow-hidden transition-transform duration-300 hover:scale-110">
            <iframe
              src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1&mute=1&loop=1&playlist=${video.embedId}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
