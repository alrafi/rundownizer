import Head from "next/head";
import { useState } from "react";
import { AiOutlineClockCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { FiRefreshCcw, FiActivity } from "react-icons/fi";
import { BiCube } from "react-icons/bi";

const ARTISTS = [
  {
    id: 1,
    name: "Sal Priadi",
    img: "https://imgsrv2.voi.id/mdVPpBrMZr-E9As40LZDbP-4Q0kf_HKBOLbAeQHViLo/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xNDcxMjIvMjAyMjAzMTgxODA2LW1haW4uY3JvcHBlZF8xNjQ3NjAxNjAzLmpwZw.jpg",
    time: "14:30",
    stage: "All Stage",
    isClash: false,
  },
  {
    id: 2,
    name: "Pamungkas",
    img: "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/penyanyi-pamungkas.jpg",
    time: "14:30",
    stage: "All Stage",
    isClash: false,
  },
  {
    id: 3,
    name: "Sajama Cut",
    img: "https://djarumcoklat.com/images/posts/sajama-cut-2015---6-1447915797.jpg?v=2016",
    time: "14:30",
    stage: "All Stage",
    isClash: true,
  },
  {
    id: 4,
    name: "Lair",
    img: "https://i.scdn.co/image/ab6761610000e5eb97a01e006f2b854cbd67d54a",
    time: "14:30",
    stage: "All Stage",
    isClash: false,
  },
  {
    id: 5,
    name: "Faye Risakotta",
    img: "https://imgsrv2.voi.id/mdVPpBrMZr-E9As40LZDbP-4Q0kf_HKBOLbAeQHViLo/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xNDcxMjIvMjAyMjAzMTgxODA2LW1haW4uY3JvcHBlZF8xNjQ3NjAxNjAzLmpwZw.jpg",
    time: "14:30",
    stage: "All Stage",
    isClash: true,
  },
  {
    id: 6,
    name: "Gugun Blues Shelter",
    img: "https://imgsrv2.voi.id/mdVPpBrMZr-E9As40LZDbP-4Q0kf_HKBOLbAeQHViLo/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xNDcxMjIvMjAyMjAzMTgxODA2LW1haW4uY3JvcHBlZF8xNjQ3NjAxNjAzLmpwZw.jpg",
    time: "14:30",
    stage: "All Stage",
    isClash: false,
  },
  {
    id: 7,
    name: "Project Pop",
    img: "https://imgsrv2.voi.id/mdVPpBrMZr-E9As40LZDbP-4Q0kf_HKBOLbAeQHViLo/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xNDcxMjIvMjAyMjAzMTgxODA2LW1haW4uY3JvcHBlZF8xNjQ3NjAxNjAzLmpwZw.jpg",
    time: "14:30",
    stage: "All Stage",
    isClash: false,
  },
  {
    id: 8,
    name: "Charles",
    img: "https://imgsrv2.voi.id/mdVPpBrMZr-E9As40LZDbP-4Q0kf_HKBOLbAeQHViLo/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xNDcxMjIvMjAyMjAzMTgxODA2LW1haW4uY3JvcHBlZF8xNjQ3NjAxNjAzLmpwZw.jpg",
    time: "14:30",
    stage: "All Stage",
    isClash: true,
  },
];

export default function Save() {
  const [artists, setArtists] = useState([...ARTISTS]);

  const router = useRouter();

  return (
    <div className="flex w-full justify-center">
      <Head>
        <title>Day 1 - Synchronize Fest | Rundownizer</title>
      </Head>

      <main className="max-w-md w-full relative">
        <div className="bg-[#3D56F5] w-full flex flex-col text-white px-6 pb-4 pt-6">
          <h1 className="text-xl font-bold self-center mb-2">
            Your Rundownizer!
          </h1>
          <div className="font-light text-sm text-[#D4DBEA]">
            <div className="flex mb-1">
              <FiActivity />
              <p className="ml-1">Synchronize Fest</p>
            </div>
            <div className="flex mb-1">
              <FaRegCalendarAlt />
              <p className="ml-1">1-3 September 2023</p>
            </div>
            <div className="flex mb-1">
              <GoLocation />
              <p className="ml-1">Gambir Expo Kemayoran, Jakarta</p>
            </div>
          </div>
          <p></p>
        </div>

        <div className="flex flex-col items-start px-4 py-6">
          {artists.map((artist) => {
            return (
              <div className="flex rounded-lg w-full p-2 mb-2" key={artist.id}>
                <img
                  src={artist.img}
                  alt=""
                  className="w-16 h-16 rounded-lg object-cover"
                />

                <div className="flex justify-between w-full items-center ml-3">
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                      <p className="mb-2">{artist.name}</p>
                    </div>
                    {artist.isClash ? (
                      <div className="flex bg-[#D1FADF] rounded-md mb-2 items-center py-1 px-2 text-[#05603A]">
                        <AiOutlineCheckCircle />
                        <p className="font-light text-sm ml-1">
                          Aman, selamat menonton!
                        </p>
                      </div>
                    ) : (
                      <div className="flex bg-[#FEF0C7] rounded-md mb-2 items-center py-1 px-2 text-[#B54708]">
                        <AiOutlineCheckCircle />
                        <p className="font-light text-sm ml-1">
                          Maaf, tabrakan dengan Sal Priadi
                        </p>
                      </div>
                    )}

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
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
