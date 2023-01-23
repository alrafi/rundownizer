import Head from "next/head";
import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Event() {
  const [event, setEvent] = useState({
    name: "Synchronize Fest",
    img: "https://synchronizefestival.com/prod/assets/images/homo0.jpg",
    date: "1-3 September 2023",
    location: "Gambir Expo Kemayoran, Jakarta",
  });

  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="flex w-full justify-center">
      <Head>
        <title>Synchronize Fest | Rundownizer</title>
      </Head>

      <main className="max-w-md w-full">
        <div className="px-4 py-6 flex items-center">
          <button onClick={() => router.back()}>
            <AiOutlineArrowLeft />
          </button>
          <h1 className="text-lg font-bold ml-1">Synchronize Fest</h1>
        </div>

        <img
          src="https://synchronizefestival.com/prod/assets/images/homo0.jpg"
          alt=""
          className="w-full"
        />

        <div className="mt-2 px-4 py-6 flex flex-col items-start">
          <div className="bg-[#A6F4C5] rounded-full px-3 text-xs py-1 font-light mb-2">
            Hari Ini
          </div>
          <div className="flex text-slate-500 items-center mb-1 text-sm font-light">
            <button className="mr-1">
              <FaRegCalendarAlt />
            </button>
            <p>{event.date}</p>
          </div>
          <div className="flex text-slate-500 items-center text-sm font-light">
            <button className="mr-1">
              <GoLocation />
            </button>
            <p>{event.location}</p>
          </div>

          <div className="mt-6">
            <p className="text-lg mb-1">Deskripsi</p>
            <p className="text-secondary font-light">
              Synchronize Fest merupakan festival musik multi-genre tahunan
              berskala nasional yang mengundang puluhan ribu audience untuk
              merayakan keberagaman jenis musik hidup di enam panggung selama
              tiga hari, tiga malam. Menikmati suguhan 100-an pertunjukan
              terkurasi dari artis-artis terfavorit dan terbaik tanah air yang
              datang dari dekade 60-an, 70-an, 80-an, 90-an hingga 2000-an.
              Seluruh genre musik populer bakal ditampilkan di Synchronize Fest.
            </p>
          </div>

          <div className="mt-6">
            <p className="text-lg mb-1">Rundown</p>
            <p className="text-secondary font-light mb-2">
              Tekan hari untuk pilih artis yang akan kamu tonton!
            </p>
            <div className="grid grid-cols-4 gap-3">
              <Link
                href={`/event/${id}/detail?day=1`}
                className="rounded-lg bg-[#E6E7FD] aspect-ratio flex justify-center items-center text-sm text-[#3D56F5]"
              >
                Day 1
              </Link>
              <Link
                href={`/event/${id}/detail?day=1`}
                className="rounded-lg bg-[#E6E7FD] aspect-ratio flex justify-center items-center text-sm text-[#3D56F5]"
              >
                Day 2
              </Link>
              <Link
                href={`/event/${id}/detail?day=1`}
                className="rounded-lg bg-[#E6E7FD] aspect-ratio flex justify-center items-center text-sm text-[#3D56F5]"
              >
                Day 3
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
