import Head from "next/head";
import { useState } from "react";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import Link from "next/link";

const EVENTS_THIS_MONTH = [
  {
    id: 1,
    name: "Synchronize Fest",
    img: "https://synchronizefestival.com/prod/assets/images/homo0.jpg",
    date: "1-3 September 2023",
    location: "Gambir Expo Kemayoran, Jakarta",
  },
  {
    id: 2,
    name: "Pestapora",
    img: "https://exhibition.jiexpo.com/wp-content/uploads/sites/5/2022/07/pestapora.jpg",
    date: "23-25 September 2023",
    location: "Gambir Expo Kemayoran, Jakarta",
  },
];

const EVENTS_INCOMING = [
  {
    id: 3,
    name: "Joyland",
    img: "https://joylandfest.com/wp-content/uploads/2022/11/Joyland-Bali-2023-website-04.png",
    date: "1-3 September 2023",
    location: "Gambir Expo Kemayoran, Jakarta",
  },
  {
    id: 4,
    name: "We The Fest",
    img: "https://www.wethefest.com/_next/static/media/img_home-header.4870eaab.png",
    date: "23-25 September 2023",
    location: "Gambir Expo Kemayoran, Jakarta",
  },
  {
    id: 1,
    name: "Synchronize Fest",
    img: "https://synchronizefestival.com/prod/assets/images/homo0.jpg",
    date: "1-3 September 2023",
    location: "Gambir Expo Kemayoran, Jakarta",
  },
  {
    id: 2,
    name: "Pestapora",
    img: "https://exhibition.jiexpo.com/wp-content/uploads/sites/5/2022/07/pestapora.jpg",
    date: "23-25 September 2023",
    location: "Gambir Expo Kemayoran, Jakarta",
  },
];

export default function Home() {
  const [thisMonth, setThisMonth] = useState([...EVENTS_THIS_MONTH]);
  const [events, setEvents] = useState([...EVENTS_INCOMING]);

  return (
    <div className="flex justify-center">
      <Head>
        <title>Rundownizer</title>
        <meta
          name="description"
          content="Rundownizer | Solusi bingung nonton konser kalo artisnya ramean."
        />
        <meta property="og:image" content="/rundownizer.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-4 py-6 max-w-md">
        <h1 className="text-lg font-bold">Welcome to Rundownizer!</h1>
        <p className="font-light text-[#677487]">
          Solusi bingung nonton konser kalo artisnya ramean.
        </p>

        <div className="mt-8">
          <p className="text-lg mb-2">Bulan Ini</p>
          <div className="overflow-wrapper">
            {thisMonth.map((event) => {
              return (
                <Link
                  href={`/event/${event.id}`}
                  className="card w-5/6 mr-4"
                  key={event.id}
                >
                  <div className="">
                    <div
                      className="w-full h-[158px] rounded-lg bg-slate-300 bg-hero"
                      style={{ backgroundImage: `url(${event.img})` }}
                    ></div>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-lg my-1">{event.name}</p>
                      <div className="bg-[#A6F4C5] rounded-full px-3 text-xs py-1 font-light">
                        Hari Ini
                      </div>
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
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-4">Akan Datang</p>
          <div className="grid grid-cols-2 gap-4">
            {events.map((event) => {
              return (
                <Link href={`/event/${event.id}`} key={event.id}>
                  <div className="" key={event.id}>
                    <div
                      className="rounded-lg bg-slate-300 aspect-ratio bg-event"
                      style={{ backgroundImage: `url(${event.img})` }}
                    ></div>
                    <p className="font-bold mb-1">{event.name}</p>
                    <div className="flex text-slate-500 items-center mb-1 text-sm">
                      <button className="mr-1">
                        <FaRegCalendarAlt />
                      </button>
                      <p>{event.date}</p>
                    </div>
                    <div className="flex text-slate-500 items-start text-sm">
                      <button className="mt-1 mr-1">
                        <GoLocation />
                      </button>
                      <p>{event.location}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
