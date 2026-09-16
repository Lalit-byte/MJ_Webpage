import "./SpltReveal_2.css"

const SpltReveal_2 = () => {
  return (
    <>
    {/* <!-- ++++++++++++ CHAPTER 5 (Split Parallax Section - BAD Era) +++++++++++++ --> */}
    <section class="split-parallax-section">
        <div class="split-parallax-sticky">
            
            {/* <!-- Left Parallax Image Half --> */}
            <div class="parallax-half parallax-half-left">
                <div class="parallax-img-inner">
                    <img src="https://mj.kevinlagier.com/images/chapter-4/chapt4-image-4.png" alt="Michael Jackson Bad Era Left" loading="lazy"/>
                </div>
            </div>

            {/* <!-- Right Parallax Image Half --> */}
            <div class="parallax-half parallax-half-right">
                <div class="parallax-img-inner">
                    <img src="https://mj.kevinlagier.com/images/chapter-7/chapt7-image-4.png" alt="Michael Jackson Bad Era Right" loading="lazy"/>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default SpltReveal_2
