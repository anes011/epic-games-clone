import { useRef, useEffect } from 'react';
import '../styles/hero.css';

function Hero() {

    const overlay = useRef(null);
    const overlay2 = useRef(null);
    const overlay3 = useRef(null);
    const overlay4 = useRef(null);
    const overlay5 = useRef(null);
    const overlay6 = useRef(null);

    const leftDisplay = useRef(null);

    const logo = useRef(null);
    const description = useRef(null);
    const price = useRef(null);
    const buyBtn = useRef(null);
    const availability = useRef(null);

    useEffect(() => {
        const runOverlay = () => {
            overlay6.current.classList.remove('overlay-active');
            overlay6.current.parentElement.style.backgroundColor = 'transparent';
            overlay.current.classList.add('overlay-active');
            overlay.current.parentElement.style.backgroundColor = 'rgb(61, 61, 61)';
            leftDisplay.current.style.background = 'url("https://cdn2.unrealengine.com/egs-ac-mirage-carousel-desktop-1920x1080-9380e8fef189.jpg?h=720&quality=medium&resize=1&w=1280") no-repeat';
            leftDisplay.current.style.backgroundSize = '100% 100%';
            leftDisplay.current.style.backgroundPosition = 'center';
            logo.current.src = 'https://cdn2.unrealengine.com/egs-ac-mirage-carousel-logo-350x143-038ecfd453ac.png';
            description.current.textContent = 'Experience the story of Basim, a cunning thief seeking answers and justice as he navigates the streets of ninth-century Baghdad.';
            price.current.textContent = 'Starting at $49.99';
            buyBtn.current.textContent = 'BUY NOW';
            availability.current.textContent = 'AVAILABLE NOW';
            setTimeout(() => {
                overlay.current.classList.remove('overlay-active');
                overlay.current.parentElement.style.backgroundColor = 'transparent';
                overlay2.current.classList.add('overlay-active');
                overlay2.current.parentElement.style.backgroundColor = 'rgb(61, 61, 61)';
                leftDisplay.current.style.background = 'url("https://cdn2.unrealengine.com/fc24se-epic-merch-feature-carousel-desktop-1248x702-1248x702-51e411bd25db.png?h=720&quality=medium&resize=1&w=1280") no-repeat';
                leftDisplay.current.style.backgroundSize = '100% 100%';
                leftDisplay.current.style.backgroundPosition = 'center';
                logo.current.src = 'https://cdn2.unrealengine.com/fc24se-epic-merch-feature-carousel-logo-350x83-350x83-21ae298df333.png';
                description.current.textContent = 'EA SPORTS FC™ 24 welcomes you to The World’s Game: the most true-to-football experience ever.';
                price.current.textContent = 'Starting at $69.99';
                buyBtn.current.textContent = 'BUY NOW';
                availability.current.textContent = 'AVAILABLE NOW';
            }, 10000);
            setTimeout(() => {
                overlay2.current.classList.remove('overlay-active');
                overlay2.current.parentElement.style.backgroundColor = 'transparent';
                overlay3.current.classList.add('overlay-active');
                overlay3.current.parentElement.style.backgroundColor = 'rgb(61, 61, 61)';
                leftDisplay.current.style.background = 'url("https://cdn2.unrealengine.com/egs-witchfire-carousel-desktop-1248x702-2f0288fe9674.png?h=720&quality=medium&resize=1&w=1280") no-repeat';
                leftDisplay.current.style.backgroundSize = '100% 100%';
                leftDisplay.current.style.backgroundPosition = 'center';
                logo.current.src = 'https://cdn2.unrealengine.com/egs-witchfire-carousel-logo-350x173-617c15475024.png';
                description.current.textContent = 'Armed with strange weapons and forbidden magic, hunt a powerful witch holding the key to your salvation.';
                price.current.textContent = 'Starting at $10.39';
                buyBtn.current.textContent = 'BUY NOW';
                availability.current.textContent = 'AVAILABLE NOW';
            }, 20000);
            setTimeout(() => {
                overlay3.current.classList.remove('overlay-active');
                overlay3.current.parentElement.style.backgroundColor = 'transparent';
                overlay4.current.classList.add('overlay-active');
                overlay4.current.parentElement.style.backgroundColor = 'rgb(61, 61, 61)';
                leftDisplay.current.style.background = 'url("https://cdn2.unrealengine.com/egs-cp2077-phantom-liberty-carousel-desktop-1920x1080-96274ead1804.jpg?h=720&quality=medium&resize=1&w=1280") no-repeat';
                leftDisplay.current.style.backgroundSize = '100% 100%';
                leftDisplay.current.style.backgroundPosition = 'center';
                logo.current.src = 'https://cdn2.unrealengine.com/egs-cp2077-phantom-liberty-carousel-logo-350x126-f5785ff4c215.png';
                description.current.textContent = 'Return as cyber-enhanced mercenary V and embark on a high-stakes mission of espionage and intrigue to save the NUS President.';
                price.current.textContent = 'Starting at $26.99';
                buyBtn.current.textContent = 'BUY NOW';
                availability.current.textContent = 'AVAILABLE NOW';
            }, 30000);
            setTimeout(() => {
                overlay4.current.classList.remove('overlay-active');
                overlay4.current.parentElement.style.backgroundColor = 'transparent';
                overlay5.current.classList.add('overlay-active');
                overlay5.current.parentElement.style.backgroundColor = 'rgb(61, 61, 61)';
                leftDisplay.current.style.background = 'url("https://cdn2.unrealengine.com/egs-lords-of-the-fallen-carousel-desktop-1920x1080-8edcd525f1fc.jpg?h=720&quality=medium&resize=1&w=1280") no-repeat';
                leftDisplay.current.style.backgroundSize = '100% 100%';
                leftDisplay.current.style.backgroundPosition = 'center';
                logo.current.src = 'https://cdn2.unrealengine.com/egs-lords-of-the-fallen-carousel-logo-350x43-4587fc175b9a.png';
                description.current.textContent = 'As one of the fabled Dark Crusaders, embark on an epic quest to overthrow Adyr, the demon God.';
                price.current.textContent = 'Starting at $44.00';
                buyBtn.current.textContent = 'BUY NOW';
                availability.current.textContent = 'AVAILABLE NOW';
            }, 40000);
            setTimeout(() => {
                overlay5.current.classList.remove('overlay-active');
                overlay5.current.parentElement.style.backgroundColor = 'transparent';
                overlay6.current.classList.add('overlay-active');
                overlay6.current.parentElement.style.backgroundColor = 'rgb(61, 61, 61)';
                leftDisplay.current.style.background = 'url("https://cdn2.unrealengine.com/egs-horizon-forbidden-west-carousel-desktop-1920x1080-358478b6468a.jpg?h=720&quality=medium&resize=1&w=1280") no-repeat';
                leftDisplay.current.style.backgroundSize = '100% 100%';
                leftDisplay.current.style.backgroundPosition = 'center';
                logo.current.src = 'https://cdn2.unrealengine.com/egs-horizon-forbidden-west-carousel-logo-350x137-4761b0e32379.png';
                description.current.textContent = 'The epic Horizon Forbidden West in its entirety, including bonus content and the Burning Shores expansion.';
                price.current.textContent = '';
                buyBtn.current.textContent = 'WHISHLIST NOW';
                availability.current.textContent = 'COMING SOON';
            }, 50000);
        }
    
        runOverlay();
        setInterval(() => {
            runOverlay();
        }, 60000);
    });

    return(
        <div className="hero">
            <div className="search-field">
                <div className="input-field">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    <input type="text" placeholder='Search store'/>
                </div>
                <a href="#"><button>Discover</button></a>
                <a href="#"><button>Browse</button></a>
                <a href="#"><button>News</button></a>
            </div>

            <div className="display-container">
                <div ref={leftDisplay} className="left-container">
                    <img ref={logo} src="https://cdn2.unrealengine.com/egs-ac-mirage-carousel-logo-350x143-038ecfd453ac.png" alt="" />
                    <p ref={availability} className='now-available'>NOW AVAILABLE</p>
                    <p ref={description} className='game-desc'>Experience the story of Basim, a cunning thief seeking answers and justice as he navigates the streets of ninth-century Baghdad.</p>
                    <p ref={price} className='starting-at'>Starting at $49.99</p>
                    <div className="buy-wishlist-container">
                        <button ref={buyBtn} className="buy-btn">BUY NOW</button>
                        <button className="wishlist-btn">
                            <div className="add-icon"></div>
                            <p>ADD TO WISHLIST</p>
                        </button>
                    </div>
                </div>
                <div className="right-container">
                    <div className="game-card">
                        <div ref={overlay} className="overlay"></div>
                        <img src="https://cdn2.unrealengine.com/egs-ac-mirage-carousel-thumb-1200x1600-5f3a4c128d10.jpg?h=128&quality=medium&resize=1&w=96" alt="" />
                        <p>Assassin's Creed Mirage</p>
                    </div>
                    <div className="game-card">
                        <div ref={overlay2} className="overlay"></div>
                        <img src="https://cdn2.unrealengine.com/egs-fc24-carousel-thumb-1200x1600-362396296322.jpg?h=128&quality=medium&resize=1&w=96" alt="" />
                        <p>EA SPORTS FC™ 24</p>
                    </div>
                    <div className="game-card">
                        <div ref={overlay3} className="overlay"></div>
                        <img src="https://cdn2.unrealengine.com/egs-witchfire-carousel-thumb-315x399-16d19218c241.png?h=128&quality=medium&resize=1&w=96" alt="" />
                        <p>Witchfire</p>
                    </div>
                    <div className="game-card">
                        <div ref={overlay4} className="overlay"></div>
                        <img src="https://cdn2.unrealengine.com/egs-cp2077-phantom-liberty-carousel-thumb-1200x1600-582767a8c6cc.jpg?h=128&quality=medium&resize=1&w=96" alt="" />
                        <p>Cyberpunk 2077: Phantom Liberty</p>
                    </div>
                    <div className="game-card">
                        <div ref={overlay5} className="overlay"></div>
                        <img src="https://cdn2.unrealengine.com/egs-lords-of-the-fallen-carousel-thumb-1200x1600-d457b5a8325e.jpg?h=128&quality=medium&resize=1&w=96" alt="" />
                        <p>Lords of the Fallen</p>
                    </div>
                    <div className="game-card">
                        <div ref={overlay6} className="overlay"></div>
                        <img src="https://cdn2.unrealengine.com/egs-horizon-forbidden-west-carousel-thumb-1200x1600-011a41336cf9.jpg?h=128&quality=medium&resize=1&w=96" alt="" />
                        <p>Horizon Forbidden West</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero