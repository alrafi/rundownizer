import Head from "next/head";
import { useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineClockCircle,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";
import { BiCube } from "react-icons/bi";

const ARTISTS = [
  {
    id: 1,
    name: "Sal Priadi",
    img: "https://imgsrv2.voi.id/mdVPpBrMZr-E9As40LZDbP-4Q0kf_HKBOLbAeQHViLo/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xNDcxMjIvMjAyMjAzMTgxODA2LW1haW4uY3JvcHBlZF8xNjQ3NjAxNjAzLmpwZw.jpg",
    time: "14:30",
    stage: "All Stage",
  },
  {
    id: 2,
    name: "Pamungkas",
    img: "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/penyanyi-pamungkas.jpg",
    time: "14:30",
    stage: "All Stage",
  },
  {
    id: 3,
    name: "Sajama Cut",
    img: "https://djarumcoklat.com/images/posts/sajama-cut-2015---6-1447915797.jpg?v=2016",
    time: "14:30",
    stage: "All Stage",
  },
  {
    id: 4,
    name: "Lair",
    img: "https://i.scdn.co/image/ab6761610000e5eb97a01e006f2b854cbd67d54a",
    time: "14:30",
    stage: "All Stage",
  },
  {
    id: 5,
    name: "Faye Risakotta",
    img: "https://imgsrv2.voi.id/mdVPpBrMZr-E9As40LZDbP-4Q0kf_HKBOLbAeQHViLo/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xNDcxMjIvMjAyMjAzMTgxODA2LW1haW4uY3JvcHBlZF8xNjQ3NjAxNjAzLmpwZw.jpg",
    time: "14:30",
    stage: "All Stage",
  },
  {
    id: 6,
    name: "Gugun Blues Shelter",
    img: "https://imgsrv2.voi.id/mdVPpBrMZr-E9As40LZDbP-4Q0kf_HKBOLbAeQHViLo/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xNDcxMjIvMjAyMjAzMTgxODA2LW1haW4uY3JvcHBlZF8xNjQ3NjAxNjAzLmpwZw.jpg",
    time: "14:30",
    stage: "All Stage",
  },
  {
    id: 7,
    name: "Project Pop",
    img: "https://imgsrv2.voi.id/mdVPpBrMZr-E9As40LZDbP-4Q0kf_HKBOLbAeQHViLo/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xNDcxMjIvMjAyMjAzMTgxODA2LW1haW4uY3JvcHBlZF8xNjQ3NjAxNjAzLmpwZw.jpg",
    time: "14:30",
    stage: "All Stage",
  },
  {
    id: 8,
    name: "Charles",
    img: "https://imgsrv2.voi.id/mdVPpBrMZr-E9As40LZDbP-4Q0kf_HKBOLbAeQHViLo/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xNDcxMjIvMjAyMjAzMTgxODA2LW1haW4uY3JvcHBlZF8xNjQ3NjAxNjAzLmpwZw.jpg",
    time: "14:30",
    stage: "All Stage",
  },
];

export default function Detail() {
  const [event, setEvent] = useState({
    name: "Synchronize Fest",
    img: "https://synchronizefestival.com/prod/assets/images/homo0.jpg",
    date: "1-3 September 2023",
    location: "Gambir Expo Kemayoran, Jakarta",
  });
  const [artists, setArtists] = useState([...ARTISTS]);
  const [selectedArtists, setSelectedArtists] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  const onSelectArtist = (artist) => {
    let _selectedArtists = [...selectedArtists];

    if (isSelectedArtist(artist)) {
      const newSelectedArtists = _selectedArtists.filter(
        (item) => item.id !== artist.id
      );

      _selectedArtists = [...newSelectedArtists];
    } else {
      _selectedArtists = [..._selectedArtists, artist];
    }
    setSelectedArtists([..._selectedArtists]);
  };

  const isSelectedArtist = (artist) => {
    return selectedArtists.includes(artist);
  };

  const generateRundown = () => {
    router.push(`/event/${id}/result?day=1`);
  };

  return (
    <div className="flex w-full justify-center">
      <Head>
        <title>Day 1 - Synchronize Fest | Rundownizer</title>
      </Head>

      <main className="max-w-md w-full px-4 py-6 relative">
        <div className=" flex items-center">
          <button onClick={() => router.back()}>
            <AiOutlineArrowLeft />
          </button>
          <h1 className="text-lg font-bold ml-1">Day 1 - Synchronize Fest</h1>
        </div>

        <form className="w-full py-1 px-2 rounded-lg border border-gray-300 h-10 flex justify-between mt-4 mb-6">
          <input
            type="text"
            placeholder="Cari artis disini ..."
            className="w-11/12 outline-none text-sm"
          />
          <button>
            <FiSearch />
          </button>
        </form>

        <div className="mt-2 flex flex-col items-start h-[80vh] overflow-auto pb-12 no-scroll">
          {artists.map((artist) => {
            return (
              <div className="flex border border-gray-300 rounded-lg w-full p-2 mb-2">
                <img
                  src={artist.img}
                  alt=""
                  className="w-16 h-16 rounded-lg object-cover"
                />

                <div className="flex justify-between w-full items-center ml-3">
                  <div className="flex flex-col w-9/12">
                    <p className="mb-2">{artist.name}</p>
                    <div className="flex justify-between text-secondary text-xs">
                      <div className="flex items-center">
                        <AiOutlineClockCircle className="mr-1" />
                        <p>14.25 WIB</p>
                      </div>
                      <div className="flex items-center">
                        <BiCube className="mr-1" />
                        <p>All Stage</p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="checkbox"
                    className={`w-8 h-8 rounded-lg ${
                      isSelectedArtist(artist)
                        ? "text-[#3D56F5]"
                        : " bg-[#3D56F5] text-white"
                    }`}
                    onClick={() => onSelectArtist(artist)}
                  >
                    {isSelectedArtist(artist) ? "x" : "+"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute left-0 right-0 bottom-4 w-full flex justify-center">
          <button
            className="px-2 py-2 rounded-lg bg-[#3D56F5] disabled:bg-[#E6E7FD] w-full mx-4 text-white disabled:cursor-not-allowed flex justify-center items-center"
            onClick={() => generateRundown()}
            disabled={selectedArtists.length <= 0}
          >
            Generate
            <AiOutlineArrowRight className="ml-1" />
          </button>
        </div>
      </main>
    </div>
  );
}
