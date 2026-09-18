import "./Horizontal_Scroll.css"
import SkeletonImage from "../Skeleton/SkeletonImage";


const Horizontal_Scroll = () => {

  return (
    <>
       {/* <!-- ++++++++++++ CHAPTER 4 (Horizontal Scroll Section - Thriller) +++++++++++++ --> */}

    <section className="c4">
        <div className="c4-sticky">
            <div className="c4-track">

                {/* <!-- 1. Intro Title Card --> */}
                <div className="c4-card c4-intro-card">
                    <span className="c4-tag">* CHAPTER 04 *</span>
                    <h2 className="c4-title">THRILLER<br/><span>ERA</span></h2>
                    <p className="c4-desc">
                        Released on November 30, 1982, Thriller became the best-selling album of all time. It transformed music videos into cinematic art forms and elevated Michael to an unprecedented global phenomenon.
                    </p>
                    <div className="c4-scroll-hint">
                        <span>EXPLORE ERA</span>
                        <div className="c4-arrow">→</div>
                    </div>
                </div>

                {/* <!-- 2. Billie Jean Card --> */}
                <div className="c4-card">
                    <div className="c4-card-img-wrap">
                        <SkeletonImage src="/Intro-chapt1.webp" alt="Billie Jean and the Moonwalk"loading="lazy"/>
                        <span className="c4-card-number">01</span>
                    </div>
                    <div className="c4-card-content">
                        <h3>BILLIE JEAN</h3>
                        <p>With its hypnotic bassline and legendary Motown 25 debut, Michael introduced the Moonwalk, the sequined glove, and transformed pop performance forever.</p>
                    </div>
                </div>

                {/* <!-- 3. Beat It Card --> */}
                <div className="c4-card">
                    <div className="c4-card-img-wrap">
                        <SkeletonImage src="group_left_3.webp" alt="Beat It Music Video"loading="lazy"/>
                        <span className="c4-card-number">02</span>
                    </div>
                    <div className="c4-card-content">
                        <h3>BEAT IT</h3>
                        <p>Uniting rival street gangs through dance and featuring Eddie Van Halen's blazing guitar solo, "Beat It" redefined the rock-pop crossover genre.</p>
                    </div>
                </div>

                {/* <!-- 4. Thriller Short Film Card --> */}
                <div className="c4-card c4-card-wide">
                    <div className="c4-card-img-wrap">
                        <SkeletonImage src="group_right_3.webp" alt="Thriller 14-Minute Film" loading="lazy"/>
                        <span className="c4-card-number">03</span>
                    </div>
                    <div className="c4-card-content">
                        <h3>THE 14-MINUTE MASTERPIECE</h3>
                        <p>Directed by John Landis, the iconic zombie dance choreography, Vincent Price narration, and red leather jacket turned music video production into high cinema.</p>
                    </div>
                </div>

                {/* <!-- 5. Grammy Record Card --> */}
                <div className="c4-card">
                    <div className="c4-card-img-wrap">
                        <SkeletonImage src="/Group-chapt2.png" alt="Grammy Awards Record" loading="lazy"/>
                        <span className="c4-card-number">04</span>
                    </div>
                    <div className="c4-card-content">
                        <h3>RECORD 8 GRAMMYS</h3>
                        <p>At the 26th Annual Grammy Awards in 1984, Michael made history by taking home 8 Grammys in a single evening, cementing his place as the undisputed King of Pop.</p>
                    </div>
                </div>

                {/* <!-- 6. Record Statistics Card --> */}
                <div className="c4-card c4-stat-card">
                    <div className="c4-stat-badge">HISTORIC MILESTONE</div>
                    <div className="c4-stat-big">70M+</div>
                    <div className="c4-stat-label">ALBUMS SOLD WORLDWIDE</div>
                    <p className="c4-stat-text">34× Platinum in the United States alone. Spent 37 non-consecutive weeks at #1 on the Billboard 200 chart.</p>
                </div>

            </div>
        </div>
    </section>
      
    </>
  )
}

export default Horizontal_Scroll
