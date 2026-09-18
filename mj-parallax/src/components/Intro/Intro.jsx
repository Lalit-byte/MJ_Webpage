import "./Intro.css"
import SkeletonImage from "../Skeleton/SkeletonImage"
const Intro = () => {
  return (
    <>
     <section className="c1">

        <div className="c1-layout">

            <div className="c1-left">

                <SkeletonImage src="/Intro-chapt1.webp" alt="Chapter 6"/>

                <h1>Known as the "King of Pop," Michael Jackson, american singer, songwriter, and dancer, was the most
                    popular entertainer in the world in the early and mid‑1980s.</h1>
            </div>

            <div className="c1-right">
                <div className="c1-intro">
                    <p>As a child, Michael became the lead singer of his family's popular Motown group, the Jackson 5.
                        He went on to a solo career of astonishing worldwide success, delivering No. 1 hits from the
                        albums Off the Wall,
                        Thriller, and Bad. Thriller remains one of the best-selling albums in history. In his later
                        years, Michael was dogged by allegations of child molestation. The 13-time Grammy Award winner
                        died in 2009 at age 50 of a drug overdose just before launching a comeback tour.
                        <br/>
                        Michael Joseph Jackson was born on August 29, 1958, in Gary, Indiana. He was the eighth of 10
                        children born to
                        Joseph Jackson, a crane operator, and Katherine Jackson, a homemaker and a devout Jehovah's
                        Witness. Both of Jackson's parents previously had musical aspirations themselves: Katherine
                        played clarinet and piano and had aspired to be a country singer, while Joseph was a guitarist
                        who performed in local R&B bands. They encouraged their children to pursue musical ambitions,
                        and Michael's career in music began at the age of 5 under his father's encouragement.
                    </p>
                </div>

                <SkeletonImage src="/group_right_3.webp" alt="Chapter 6"/>

                <p>Almost all of Jackson's siblings made marks in the music industry, including Rebbie, Jackie, Tito,
                    Jermaine, La Toya, Marlon, Randy, and Janet Jackson. His brother Brandon, Marlon's twin, died
                    shortly after birth. Joseph pushed his children hard to succeed, making them rehearse five hours a
                    day after school, and was reportedly known to become violent with them. He was said to beat them
                    with a belt buckle or electric kettle cord and to order them to break a branch off a tree if they
                    got a dance step wrong so he could hit them with it.</p>


            </div>

        </div>

    </section>
    </>
  )
}

export default Intro
