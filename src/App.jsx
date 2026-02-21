import { useEffect, useState } from "react";
import "./index.css";
import "./App.css";
import Lottie from "lottie-react";
import growRevision from "../public/lottie/growrevision.json";

export default function App() {
  const [phase, setPhase] = useState("intro");

  useEffect(() => {
    const INTRO_MS = 3600;

    const ENTER_MS = 1600;
    const HOLD_MS = 1000;
    const EXIT_MS = 1600;
    const TRANSITION_MS = ENTER_MS + HOLD_MS + EXIT_MS;

    const t1 = setTimeout(() => setPhase("transition"), INTRO_MS);
    const t2 = setTimeout(() => setPhase("main"), INTRO_MS + TRANSITION_MS);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="shell">
      {/* INTRO */}
      {phase === "intro" && (
        <div className="page">
          <div className="welcome">Welcome</div>
        </div>
      )}

      {/* LOTTIE TRANSITION */}
      {phase === "transition" && (
        <div className="lottieCover">
          <div className="lottieMove">
            <Lottie
              animationData={growRevision}
              autoplay
              loop
              rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
              className="lottiePlayer"
            />
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      {phase === "main" && (
        <main className="mainPage mainEnter">
          {/* PHOTO */}
          <div className="stage stage1">
            <img src="/mom.jpg" alt="Portrait" className="portrait" />
          </div>

          {/* PRESENCE */}
          <section className="stage stage2 section">
            <h2 className="sectionTitle">Presence</h2>
            <p className="sectionText">
              My name is Paula Laboe and I am based in a neighborhood in Chicago
              named Galewood. I offer a quiet and attentive space for
              reflection, discernment, and spiritual listening.
            </p>
            <p className="sectionText">
              Spiritual direction is not about fixing or solving — it is about
              noticing how the sacred is already moving within your life.
            </p>
          </section>

          {/* INVITATION */}
          <section className="stage stage3 section">
            <h2 className="sectionTitle">Invitation</h2>
            <p className="sectionText">
              Spiritual direction is a shared space of curiosity and trust.
              Together, we gently explore your questions, transitions, and
              experiences of faith.
            </p>
            <p className="sectionText">
              Whether you are navigating change or longing for deeper grounding,
              you are welcome here.
            </p>
          </section>

          {/* GENTLE NEXT STEP */}
          <section className="stage stage4 section">
            <h2 className="sectionTitle">Gentle Next Step</h2>
            <p className="sectionText">
              If this resonates with you, I invite you to reach out. I will
              respond personally within a few days.
            </p>

            <form className="form">
              <label className="label">
                Name
                <input type="text" className="input" />
              </label>

              <label className="label">
                Email
                <input type="email" className="input" />
              </label>

              <label className="label">
                Message
                <textarea rows="4" className="textarea" />
              </label>

              <button type="submit" className="button">
                Send Message
              </button>
            </form>
          </section>
        </main>
      )}
    </div>
  );
}
