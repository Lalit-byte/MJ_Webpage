import "./Footer.css"

const Footer = () => {
  return (
    <>
    {/* <!-- ++++++++++++ AWWWARDS STYLE FOOTER +++++++++++++ --> */}
    <footer className="site-footer">
        <div className="footer-top">
            <div className="footer-brand">
                <p className="footer-eyebrow">* THE LEGACY CONTINUES *</p>
                <h2 className="footer-title">MICHAEL<br/>JACKSON</h2>
                <p className="footer-dates">1958 — 2009 • THE KING OF POP</p>
            </div>

            <div className="footer-nav">
                <h3>CHAPTER INDEX</h3>
                <ul>
                    <li><a href="#" className="footer-link"><span>01</span> The Jackson 5 Era</a></li>
                    <li><a href="#" className="footer-link"><span>02</span> Motown to Epic Records</a></li>
                    <li><a href="#" className="footer-link"><span>03</span> Workin' Day and Night</a></li>
                    <li><a href="#" className="footer-link"><span>04</span> Thriller Phenomenon</a></li>
                    <li><a href="#" className="footer-link"><span>05</span> The Bad World Tour</a></li>
                    <li><a href="#chapter-06" className="footer-link"><span>06</span> Dangerous & Heal the World</a></li>
                </ul>
            </div>

            <div className="footer-stats">
                <h3>CAREER STATS</h3>
                <div className="footer-stat-grid">
                    <div className="f-stat">
                        <strong>400M+</strong>
                        <span>Records Sold</span>
                    </div>
                    <div className="f-stat">
                        <strong>13</strong>
                        <span>Grammy Awards</span>
                    </div>
                    <div className="f-stat">
                        <strong>39</strong>
                        <span>Guinness Records</span>
                    </div>
                    <div className="f-stat">
                        <strong>#1</strong>
                        <span>Thriller (Best-Selling)</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <p>© Tribute to Michael Jackson • Built with Pure HTML & CSS Parallax</p>
            <a href="#" className="back-to-top">
                <span>BACK TO TOP</span>
                <span className="arrow-up">↑</span>
            </a>
        </div>
    </footer>

    </>
  )
}

export default Footer
