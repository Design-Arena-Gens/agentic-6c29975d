"use client";

import { useEffect, useRef } from "react";

export default function Page() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const play = () => {
      void audio.play().catch(() => undefined);
    };

    document.addEventListener("click", play, { once: true });
    document.addEventListener("touchstart", play, { once: true });

    return () => {
      document.removeEventListener("click", play);
      document.removeEventListener("touchstart", play);
    };
  }, []);

  return (
    <main className="video-frame">
      <h1 className="sr-only">
        Video promocional për RezervoTani.com për sallonin e qerpikëve.
      </h1>
      <div className="scene scene-busy">
        <div className="workspace">
          <div className="beauty-pro">
            <div className="hair" />
            <div className="face">
              <div className="eye left" />
              <div className="eye right" />
              <div className="mouth" />
            </div>
            <div className="hands">
              <div className="hand left" />
              <div className="hand right" />
            </div>
          </div>
          <div className="client-bed">
            <div className="client">
              <div className="client-face" />
              <div className="client-body" />
            </div>
          </div>
        </div>
        <div className="phone busy-phone">
          <div className="screen">
            <div className="notification n1">
              <strong>Ani</strong>
              <span>“A ke orar nesër në 17:00?”</span>
            </div>
            <div className="notification n2">
              <strong>Kaltrina</strong>
              <span>“Duhet ta shtyjmë për të premten.”</span>
            </div>
            <div className="notification n3">
              <strong>Rina</strong>
              <span>“Po e anuloj sot, më fal!”</span>
            </div>
          </div>
        </div>
        <div className="overlay copy-busy">
          <p>Telefonata, mesazhe, ndryshime...</p>
          <p>Orari i sallonit del jashtë kontrollit.</p>
        </div>
      </div>
      <div className="scene scene-calm">
        <div className="ambient-glow" />
        <div className="phone calm-phone">
          <div className="browser-bar">
            <div className="dot red" />
            <div className="dot yellow" />
            <div className="dot green" />
            <span>rezervotani.com</span>
          </div>
          <div className="screen">
            <div className="hero-card">
              <span className="tag">Rezervo tani</span>
              <p>Klientët zgjedhin ditën, orën dhe shërbimin vetë.</p>
            </div>
            <div className="calendar">
              <div className="calendar-header">
                <span className="month">Qershor 2024</span>
              </div>
              <div className="slots">
                <div className="slot booked">09:00</div>
                <div className="slot">11:00</div>
                <div className="slot">13:30</div>
                <div className="slot">16:00</div>
              </div>
            </div>
            <button className="cta">Rezervo brenda sekondave</button>
          </div>
        </div>
        <div className="overlay copy-calm">
          <p>Salla e qetë. Klientët rezervojnë vetë online.</p>
          <p>Ti fokusohesh te bukuria. Rezervotani.com mban orarin.</p>
        </div>
        <div className="logo-tag">Powered by RezervoTani</div>
      </div>
      <audio
        ref={audioRef}
        preload="auto"
        loop
        src="data:audio/mpeg;base64,//uQZAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA="
      />
    </main>
  );
}
