(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const h="97471034962",k="+974 7103 4962";function D(t={}){const{tourName:a="Boat Tour Experience",vessel:e="",date:n="",timeSlot:i="",duration:s="",guests:o="",addons:g=[],notes:c=""}=t;let p=`⚓ *BOOKING INQUIRY - BOAT RENT QATAR DHOW* ⚓

`;return p+=`Hello! I would like to book a trip with Boat Rent Qatar Dhow:

`,a&&(p+=`📌 *Experience / Tour:* ${a}
`),e&&(p+=`🛥️ *Preferred Vessel:* ${e}
`),n&&(p+=`📅 *Preferred Date:* ${n}
`),i&&(p+=`⏰ *Time Slot:* ${i}
`),s&&(p+=`⏳ *Duration:* ${s}
`),o&&(p+=`👥 *Number of Guests:* ${o}
`),g&&g.length>0&&(p+=`✨ *Add-ons:* ${g.join(", ")}
`),c&&(p+=`📝 *Notes/Requests:* ${c}
`),p+=`
Please confirm availability and booking details. Thank you!`,`https://wa.me/${h}?text=${encodeURIComponent(p)}`}function j(t="Boat Rent Qatar Dhow & Sea Tours"){const a=`Hello Boat Rent Qatar Dhow, I am interested in ${t}. Please provide details about available tours, timings and booking options.`;return`https://wa.me/${h}?text=${encodeURIComponent(a)}`}function P(){return`
    <header class="site-header" id="site-header">
      <div class="header-container">
        <!-- Brand Logo & Identity -->
        <a href="#home" class="brand-link" aria-label="Boat Rent Qatar Dhow Home">
          <img src="logo.png" alt="Boat Rent Qatar Dhow" class="brand-logo-img" />
          <div class="brand-text-block">
            <span class="brand-name">BOAT RENT QATAR</span>
            <span class="brand-sub">DHOW & BOAT RENTALS • DOHA</span>
          </div>
        </a>

        <!-- Desktop Navigation Links (5 Pages) -->
        <nav class="desktop-nav" aria-label="Main Navigation">
          <ul class="nav-list">
            <li><a href="#home" class="nav-link active" data-nav="home">Home</a></li>
            <li><a href="#fleet" class="nav-link" data-nav="fleet">Our Fleet</a></li>
            <li><a href="#tours" class="nav-link" data-nav="tours">Tours & Activities</a></li>
            <li><a href="#gallery" class="nav-link" data-nav="gallery">Gallery</a></li>
            <li><a href="#contact" class="nav-link" data-nav="contact">Contact & Booking</a></li>
          </ul>
        </nav>

        <!-- Header Actions -->
        <div class="header-actions">
          <a href="tel:+${h}" class="phone-link" title="Call Us 24/7">
            <i class="fa-solid fa-phone"></i>
            <span class="phone-number">${k}</span>
          </a>
          <a href="#booking-modal" class="btn-book-nav open-booking-modal" data-tour="Boat Rent Qatar Dhow Charter">
            <i class="fa-solid fa-calendar-check"></i>
            <span>Book Tour</span>
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button id="mobile-menu-toggle" class="mobile-toggle-btn" aria-label="Toggle Navigation Menu" aria-expanded="false">
            <span class="hamburger-line line-1"></span>
            <span class="hamburger-line line-2"></span>
            <span class="hamburger-line line-3"></span>
          </button>
        </div>
      </div>
    </header>

    <!-- Fullscreen Animated Mobile Menu Overlay -->
    <div id="mobile-menu-overlay" class="mobile-menu-overlay" aria-hidden="true">
      <div class="mobile-menu-inner">
        <!-- Top bar with logo and cross close button -->
        <div class="mobile-menu-top">
          <div class="mobile-menu-brand">
            <img src="logo.png" alt="Boat Rent Qatar Dhow" class="mobile-logo-img" />
            <div class="mobile-brand-meta">
              <span class="mobile-brand-name">BOAT RENT QATAR DHOW</span>
              <span class="mobile-brand-sub">تأجير قوارب وبوانيش قطر • الدوحة</span>
            </div>
          </div>
          <button id="mobile-menu-close" class="mobile-close-btn" aria-label="Close Navigation Menu">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <!-- Stagger-animated Navigation Links -->
        <nav class="mobile-nav-links">
          <a href="#home" class="mobile-nav-item" data-nav="home">
            <span class="item-num">01</span>
            <div class="item-content">
              <span class="item-en">Home Experience</span>
              <span class="item-ar">الصفحة الرئيسية</span>
            </div>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
          <a href="#fleet" class="mobile-nav-item" data-nav="fleet">
            <span class="item-num">02</span>
            <div class="item-content">
              <span class="item-en">Our Luxury Fleet</span>
              <span class="item-ar">أسطول القوارب واليخوت</span>
            </div>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
          <a href="#tours" class="mobile-nav-item" data-nav="tours">
            <span class="item-num">03</span>
            <div class="item-content">
              <span class="item-en">Tours & Activities</span>
              <span class="item-ar">الرحلات والأنشطة البحرية</span>
            </div>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
          <a href="#gallery" class="mobile-nav-item" data-nav="gallery">
            <span class="item-num">04</span>
            <div class="item-content">
              <span class="item-en">Lifestyle Gallery</span>
              <span class="item-ar">معرض الصور والذكريات</span>
            </div>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
          <a href="#contact" class="mobile-nav-item" data-nav="contact">
            <span class="item-num">05</span>
            <div class="item-content">
              <span class="item-en">Contact & Booking</span>
              <span class="item-ar">الحجز والتواصل</span>
            </div>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </nav>

        <!-- Mobile Menu Bottom Contact & Actions -->
        <div class="mobile-menu-footer">
          <div class="mobile-contact-cards">
            <a href="https://wa.me/${h}?text=${encodeURIComponent("Hello Boat Rent Qatar Dhow, I would like to inquire about booking a boat or dhow trip in Doha.")}" target="_blank" rel="noopener" class="mobile-action-btn wa-btn">
              <i class="fa-brands fa-whatsapp"></i>
              <span>WhatsApp Direct</span>
            </a>
            <a href="tel:+${h}" class="mobile-action-btn call-btn">
              <i class="fa-solid fa-phone"></i>
              <span>Call ${k}</span>
            </a>
          </div>

          <div class="mobile-menu-location">
            <i class="fa-solid fa-location-dot"></i>
            <span>Doha Corniche Promenade, Doha, Qatar</span>
          </div>
        </div>
      </div>
    </div>
  `}function M(){const t=document.getElementById("mobile-menu-toggle"),a=document.getElementById("mobile-menu-close"),e=document.getElementById("mobile-menu-overlay"),n=document.querySelectorAll(".mobile-nav-item");function i(){e&&(e.classList.add("is-open"),document.body.classList.add("mobile-menu-locked"),t==null||t.setAttribute("aria-expanded","true"),e.setAttribute("aria-hidden","false"))}function s(){e&&(e.classList.remove("is-open"),document.body.classList.remove("mobile-menu-locked"),t==null||t.setAttribute("aria-expanded","false"),e.setAttribute("aria-hidden","true"))}t==null||t.addEventListener("click",o=>{o.preventDefault(),e!=null&&e.classList.contains("is-open")?s():i()}),a==null||a.addEventListener("click",o=>{o.preventDefault(),s()}),n.forEach(o=>{o.addEventListener("click",()=>{s()})}),window.addEventListener("scroll",()=>{const o=document.getElementById("site-header");o&&(window.scrollY>40?o.classList.add("is-scrolled"):o.classList.remove("is-scrolled"))},{passive:!0})}function $(){const t=new Date;t.setDate(t.getDate()+1);const a=t.toISOString().split("T")[0];return`
    <section class="hero-section" id="home">
      <!-- Background Image (100% natural, no color overlay) -->
      <div class="hero-bg-layer" style="background-image: url('background.jpeg');"></div>

      <div class="hero-content-container">
        <!-- Top Trust Badges Row -->
        <div class="hero-badges-row">
          <!-- Google 5.0 Trust Badge -->
          <a href="https://maps.google.com/?q=Boat+rent+Qatar+dhow+Doha" target="_blank" rel="noopener noreferrer" class="hero-trust-badge google-badge" title="Verified 5.0 Google Business">
            <div class="google-icon-box">
              <svg viewBox="0 0 24 24" class="google-g-svg" width="18" height="18">
                <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.3 8.9 5 12 5z"/>
                <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"/>
                <path fill="#FBBC05" d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.7s.1-2 .4-2.7L1.6 6.4C.6 8.4 0 10.1 0 12s.6 3.6 1.6 5.6l3.7-2.9z"/>
                <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.3-6.7-5.3L1.6 16c1.9 3.8 5.8 7 10.4 7z"/>
              </svg>
            </div>
            <div class="trust-text">
              <span class="trust-score">5.0 ★★★★★</span>
              <span class="trust-count">149+ Google Reviews</span>
            </div>
          </a>

          <!-- Location Badge -->
          <div class="hero-trust-badge location-badge">
            <i class="fa-solid fa-location-dot"></i>
            <span>Doha Corniche Promenade, Qatar</span>
          </div>

          <!-- Climate Control Badge -->
          <div class="hero-trust-badge ac-badge">
            <i class="fa-solid fa-snowflake"></i>
            <span>AC Luxury Saloons Available</span>
          </div>
        </div>

        <!-- Main Headlines (Left Aligned on Desktop as per screenshot) -->
        <div class="hero-headline-block">
          <div class="hero-arabic-kicker">
            <span>تأجير قوارب وبوانيش قطر • Boat Rent Qatar Dhow</span>
          </div>
          <h1 class="hero-title">
            CRUISE BOAT<br />
            <span class="hero-highlight">RENTAL DOHA</span>
          </h1>
          <p class="hero-tagline">
            Experience the Beauty of Doha from the Sea
          </p>
          <p class="hero-description">
            Sail aboard Boat Rent Qatar Dhow’s premier fleet of fully air-conditioned luxury cruisers, authentic traditional Qatari royal dhows, and high-speed sport boats. Unforgettable Safliya Island getaways, sunset skyline cruises, and deep-sea fishing expeditions.
          </p>

          <!-- Quick Action Buttons: CALL NOW & WHATSAPP (from screenshot) -->
          <div class="hero-cta-buttons-row">
            <a href="tel:+${h}" class="hero-cta-btn btn-call-hero">
              <i class="fa-solid fa-phone"></i>
              <span>CALL NOW</span>
            </a>
            <a href="https://wa.me/${h}?text=${encodeURIComponent("Hello Boat Rent Qatar Dhow, I would like to inquire about booking a cruise boat or dhow trip in Doha.")}" target="_blank" rel="noopener" class="hero-cta-btn btn-wa-hero">
              <i class="fa-brands fa-whatsapp"></i>
              <span>WHATSAPP</span>
            </a>
          </div>

          <div class="hero-location-caption">
            <i class="fa-solid fa-location-dot"></i>
            <span>Doha Corniche, Qatar • Daily Departures 24/7</span>
          </div>
        </div>

        <!-- Interactive Quick Booking Search Bar -->
        <div class="hero-search-bar" id="hero-quick-search">
          <div class="search-field-group">
            <label for="quick-tour-select"><i class="fa-solid fa-compass"></i> Select Experience</label>
            <select id="quick-tour-select" class="search-input">
              <option value="Al Safliya Island Tour">🏝️ Al Safliya Island Beach Tour</option>
              <option value="Qatar Skyline & Sunset Cruise" selected>🌆 Qatar Skyline & Sunset Cruise</option>
              <option value="Qatar AC Luxury Cruiser">🛥️ Qatar AC Luxury Cruiser</option>
              <option value="Traditional Qatari Royal Dhow">⛵ Traditional Qatari Royal Dhow</option>
              <option value="Deep Sea Fishing Tour">🎣 Deep Sea Fishing Expedition</option>
              <option value="Swimming & Water Jumping">🏊 Swimming & Water Jumping</option>
              <option value="Birthday & Special Events">🎂 Birthday & VIP Event Cruise</option>
              <option value="Dinner & Dining Dhow Cruise">🍽️ Dinner & Skyline Dining Cruise</option>
            </select>
          </div>

          <div class="search-field-group">
            <label for="quick-date-input"><i class="fa-solid fa-calendar"></i> Date</label>
            <input type="date" id="quick-date-input" class="search-input" value="${a}" min="${new Date().toISOString().split("T")[0]}" />
          </div>

          <div class="search-field-group">
            <label for="quick-slot-select"><i class="fa-solid fa-clock"></i> Preferred Slot</label>
            <select id="quick-slot-select" class="search-input">
              <option value="Morning Cruise (08:00 AM - 12:00 PM)">🌅 Morning (08:00 - 12:00)</option>
              <option value="Afternoon Beach (01:00 PM - 04:30 PM)">☀️ Afternoon (13:00 - 16:30)</option>
              <option value="Sunset Prime (04:30 PM - 07:00 PM)" selected>🌇 Sunset Prime (16:30 - 19:00)</option>
              <option value="Night Skyline (07:30 PM - 11:00 PM)">🌃 Night Skyline (19:30 - 23:00)</option>
            </select>
          </div>

          <div class="search-field-group">
            <label for="quick-guests-select"><i class="fa-solid fa-users"></i> Guests</label>
            <select id="quick-guests-select" class="search-input">
              <option value="1 - 4 Guests">1 - 4 Guests (Private)</option>
              <option value="5 - 10 Guests" selected>5 - 10 Guests (Medium)</option>
              <option value="11 - 20 Guests">11 - 20 Guests (Large)</option>
              <option value="21 - 45+ Guests">21 - 45+ Guests (Royal Dhow)</option>
            </select>
          </div>

          <div class="search-action-col">
            <button type="button" id="quick-search-submit" class="btn-search-hero">
              <i class="fa-brands fa-whatsapp"></i>
              <span>Book on WhatsApp</span>
            </button>
          </div>
        </div>

        <!-- Quick Proof Metrics Bar -->
        <div class="hero-metrics-row">
          <div class="metric-item">
            <span class="metric-num">149+</span>
            <span class="metric-lbl">5-Star Google Reviews</span>
          </div>
          <div class="metric-divider"></div>
          <div class="metric-item">
            <span class="metric-num">100%</span>
            <span class="metric-lbl">Coast Guard Certified</span>
          </div>
          <div class="metric-divider"></div>
          <div class="metric-item">
            <span class="metric-num">24 / 7</span>
            <span class="metric-lbl">Departure Availability</span>
          </div>
          <div class="metric-divider"></div>
          <div class="metric-item">
            <span class="metric-num">50+</span>
            <span class="metric-lbl">Max Vessel Capacity</span>
          </div>
        </div>

      </div>
    </section>
  `}function G(){const t=document.getElementById("quick-search-submit");t&&t.addEventListener("click",()=>{const a=document.getElementById("quick-tour-select"),e=document.getElementById("quick-date-input"),n=document.getElementById("quick-slot-select"),i=document.getElementById("quick-guests-select"),s=a?a.value:"Qatar Skyline & Sunset Cruise",o=e?e.value:"",g=n?n.value:"Sunset",c=i?i.value:"5-10 Guests",p=`⚓ *BOOKING INQUIRY - BOAT RENT QATAR DHOW* ⚓

Hello! I would like to book a trip with Boat Rent Qatar Dhow:
📌 *Experience:* ${s}
📅 *Date:* ${o}
⏰ *Time Slot:* ${g}
👥 *Guests:* ${c}

Please let me know availability and booking details. Thank you!`,w=`https://wa.me/${h}?text=${encodeURIComponent(p)}`;window.open(w,"_blank")})}const Q=[{id:"ac-luxury",name:"Qatar AC Luxury Cruiser",arabicName:"يخت فاخر مكيف بالكامل",tagline:"Supreme Comfort & Climate-Controlled Arabian Gulf Elegance",category:"Luxury AC Cruiser",length:"42 ft / 12.8 m",capacity:"15 - 20 Guests",speed:"24 Knots",pricePerHour:450,currency:"QAR",badge:"Most Popular",images:["gallery/ac-luxury/ac-luxury-1.jpg","gallery/ac-luxury/ac-luxury-2.jpg","gallery/ac-luxury/ac-luxury-3.jpg","gallery/ac-luxury/ac-luxury-4.jpg","gallery/ac-luxury/ac-luxury-5.jpg","gallery/ac-luxury/ac-luxury-7.jpg"],features:["Enclosed Air-Conditioned VIP Saloon","Plush Leather Lounge & Panoramic Tinted Windows","High-Fidelity Bluetooth Sound System (JBL / Fusion)","Bow Sunbathing Deck with Leather Cushions","Private Bathroom with Fresh Water Shower","Swimming Ladder & Shaded Stern Cockpit","Complimentary Chilled Water & Ice Box"],description:"Escape the heat in utmost luxury. The Qatar AC Luxury Cruiser features an ultra-comfortable climate-controlled interior lounge with leather sofas, state-of-the-art sound, and wide viewing windows, seamlessly connected to a sunbathing bow deck.",idealFor:"VIP family gatherings, executive business meetings, luxury sunset cruises & celebrations."},{id:"traditional-dhow",name:"Traditional Qatari Royal Dhow",arabicName:"بانوش خشبي قطري تراثي",tagline:"Authentic Arabian Gulf Maritime Heritage & Skyline Dining",category:"Heritage Wooden Dhow",length:"65 ft / 19.8 m",capacity:"35 - 50 Guests",speed:"12 Knots",pricePerHour:350,currency:"QAR",badge:"Heritage Icon",images:["background.jpeg","gallery/skyline-view/skyline-view-1.jpg","gallery/skyline-view/skyline-view-3.jpg","gallery/skyline-view/skyline-view-5.jpg","gallery/skyline-view/skyline-view-7.jpg"],features:["Two-Tier Panoramic Decks (Open Upper Deck + Shaded Lower Deck)","Traditional Qatari Carpets & Majlis Floor Seating","Onboard Charcoal BBQ Grill Setup Available","Concert-Level Marine Sound System with Wireless Mics","Spectacular 360° Doha Skyline & MIA View","Clean Washrooms & Changing Facilities","Full Certified Safety Gear & Child-Friendly Railings"],description:"Immerse yourself in Qatar’s rich maritime legacy aboard our handcrafted wooden Dhow. Sailing along the Doha Corniche and West Bay skyline, this spacious vessel offers the quintessential Arabian seafaring experience.",idealFor:"Large family reunions, corporate dinner cruises, birthday parties & group events."},{id:"speed-boat",name:"High-Speed Gulf Sport Boat",arabicName:"قارب سريع للمغامرات البحرية",tagline:"Rapid Thrills, Swift Island Transfers & Water Sports",category:"Speed Boat",length:"28 ft / 8.5 m",capacity:"6 - 8 Guests",speed:"45 Knots",pricePerHour:280,currency:"QAR",badge:"High Adrenaline",images:["gallery/speed-boat/speed-boat-1.jpg","gallery/speed-boat/speed-boat-2.jpg","gallery/speed-boat/speed-boat-3.jpg","gallery/speed-boat/speed-boat-4.jpg","gallery/speed-boat/speed-boat-5.webp"],features:["Twin High-Performance Yamaha Outboard Engines","Deep-V Offshore Hull for Razor-Sharp Maneuvering","Fast Transit: Doha Corniche to Safliya Island in 10 Minutes","Marine Bluetooth Audio System","Water Sports Tow Hook & Inflatable Tubes Available","Comfortable Cushioned Seating with Windshield Protection","USCG Approved Life Vests for All Ages"],description:"Engineered for speed, excitement, and quick hops. Slice through the azure waves of the Arabian Gulf with twin-engine power, ideal for swift transfers to Al Safliya Island or high-energy water thrills.",idealFor:"Thrill-seekers, private small groups, rapid island getaways & water lovers."},{id:"safiliya-explorer",name:"Al Safliya Island Beach Explorer",arabicName:"مركب رحلات جزيرة السافلية",tagline:"The Ultimate Island Beach Anchorage, Swimming & BBQ Vessel",category:"Island Beach Cruiser",length:"55 ft / 16.8 m",capacity:"25 - 35 Guests",speed:"14 Knots",pricePerHour:380,currency:"QAR",badge:"Best For Island Trips",images:["gallery/safiliya-island/safiliya-island-1.webp","gallery/safiliya-island/safiliya-island-3.jpg","gallery/safiliya-island/safiliya-island-5.jpg","gallery/jumping-swimming/jumping-swimming-1.jpg","gallery/jumping-swimming/jumping-swimming-3.jpg"],features:["Special Shallow Draft for Direct Beach Approach","Dedicated Stern Swimming Platform & Jumping Deck","Large Shaded Canopy Area with Breezy Sun Loungers","Built-in Marine BBQ Grill & Prep Counter","Floating Mattresses, Snorkel Masks & Life Rings","High-Power Sound System with Aux / Bluetooth","Experienced Island Guides and Swimming Safety Crew"],description:"Purpose-built for the ultimate day out at Al Safliya Island. Anchor in waist-deep crystal turquoise water, swim, jump from the upper deck, and enjoy a seaside barbecue against the backdrop of the Doha skyline.",idealFor:"Full-day beach excursions, swimming & jumping safaris, weekend family celebrations."}];function R(){return`
    <section class="section-container fleet-section" id="fleet">
      <div class="section-header text-center">
        <span class="section-subtitle">EXCLUSIVE ARABIAN MARITIME SELECTION</span>
        <h2 class="section-title">Our Luxury Boat & Dhow Fleet</h2>
        <span class="section-title-ar">أسطول القوارب واليخوت والبوانيش التراثية</span>
        <div class="gold-accent-line"></div>
        <p class="section-desc">
          Every vessel in the Boat Rent Qatar Dhow fleet is meticulously maintained to the highest safety and maritime luxury standards, equipped with safety gear, high-power sound systems, and certified crew.
        </p>
      </div>

      <!-- Fleet Cards List -->
      <div class="fleet-cards-grid">
        ${Q.map(a=>{const e=a.features.map(s=>`
      <li><i class="fa-solid fa-circle-check"></i> <span>${s}</span></li>
    `).join(""),n=a.images[0]||"background.jpeg",i=a.images.slice(0,4).map((s,o)=>`
      <button type="button" class="thumb-btn ${o===0?"active":""}" data-target-img="${s}" aria-label="View photo ${o+1}">
        <img src="${s}" alt="${a.name} view ${o+1}" loading="lazy" />
      </button>
    `).join("");return`
      <article class="fleet-card" id="fleet-${a.id}">
        <!-- Image & Gallery Preview -->
        <div class="fleet-card-media">
          <div class="card-badge">${a.badge}</div>
          <div class="main-image-wrapper">
            <img src="${n}" alt="${a.name}" class="fleet-main-img" id="main-img-${a.id}" loading="lazy" />
          </div>
          <div class="fleet-thumbnails-row">
            ${i}
          </div>
        </div>

        <!-- Content & Specifications -->
        <div class="fleet-card-body">
          <div class="fleet-header-row">
            <div>
              <span class="fleet-category-tag">${a.category}</span>
              <h3 class="fleet-name">${a.name}</h3>
              <span class="fleet-name-ar">${a.arabicName}</span>
            </div>
          </div>

          <p class="fleet-tagline">${a.tagline}</p>

          <!-- Quick Specs Grid -->
          <div class="specs-grid">
            <div class="spec-cell">
              <i class="fa-solid fa-users"></i>
              <span class="spec-label">Capacity</span>
              <span class="spec-value">${a.capacity}</span>
            </div>
            <div class="spec-cell">
              <i class="fa-solid fa-ruler-combined"></i>
              <span class="spec-label">Length</span>
              <span class="spec-value">${a.length}</span>
            </div>
            <div class="spec-cell">
              <i class="fa-solid fa-gauge-high"></i>
              <span class="spec-label">Speed</span>
              <span class="spec-value">${a.speed}</span>
            </div>
            <div class="spec-cell">
              <i class="fa-solid fa-shield-halved"></i>
              <span class="spec-label">Safety</span>
              <span class="spec-value">100% Certified</span>
            </div>
          </div>

          <!-- Features List -->
          <ul class="fleet-features-list">
            ${e}
          </ul>

          <div class="fleet-ideal-note">
            <strong>Ideal For:</strong> ${a.idealFor}
          </div>

          <!-- Actions -->
          <div class="fleet-actions-row">
            <button type="button" class="btn-primary open-booking-modal" data-boat="${a.name}">
              <i class="fa-solid fa-calendar-plus"></i>
              <span>Book This Boat</span>
            </button>
            <a href="https://wa.me/${h}?text=${encodeURIComponent(`Hello Boat Rent Qatar Dhow, I am interested in chartering the ${a.name}. Please provide availability and customized package details.`)}" target="_blank" rel="noopener" class="btn-secondary-wa">
              <i class="fa-brands fa-whatsapp"></i>
              <span>WhatsApp Inquire</span>
            </a>
          </div>
        </div>
      </article>
    `}).join("")}
      </div>

      <!-- City Tour By Car Section (VIP Land & City Sightseeing) -->
      <div class="city-tour-car-section" id="city-tour-by-car">
        <div class="city-tour-header text-center">
          <div class="city-tour-pill-badge">
            <i class="fa-solid fa-car-side"></i>
            <span>VIP LAND & SIGHTSEEING SERVICE</span>
          </div>
          <h3 class="city-tour-main-title">City Tour By Car</h3>
          <span class="city-tour-title-ar">جولات سياحية فاخرة بالسيارة في الدوحة</span>
          <div class="gold-accent-line"></div>
          <p class="city-tour-main-desc">
            Explore Doha’s most iconic architectural wonders, vibrant cultural districts, and dazzling coastal skylines. Our private VIP City Tour By Car features luxury air-conditioned vehicles, professional English & Arabic speaking chauffeurs, and flexible itineraries tailored to your schedule.
          </p>
        </div>

        <!-- 3 Highlight Cards Using Client Photos -->
        <div class="city-tour-cards-grid">
          <!-- Card 1: Lusail & Katara Towers -->
          <div class="city-tour-card">
            <div class="city-tour-img-wrapper">
              <img src="gallery/city-tour-car/city-tour-1.jpeg" alt="Lusail Marina and Katara Towers Sunset Tour" loading="lazy" class="city-tour-img" />
              <div class="city-tour-badge">LUSAIL CITY</div>
            </div>
            <div class="city-tour-card-body">
              <div class="city-tour-card-title-row">
                <h4 class="city-tour-card-title">Lusail Marina & Katara Towers</h4>
                <span class="city-tour-ar-tag">أبراج كتارا ولوسيل</span>
              </div>
              <p class="city-tour-card-desc">
                Marvel at the world-renowned crescent-shaped Katara Towers, luxurious Lusail Marina yacht promenade, and modern illuminated dancing fountains at sunset.
              </p>
              <ul class="city-tour-points">
                <li><i class="fa-solid fa-camera"></i> <span>Iconic Architectural Photo Stop</span></li>
                <li><i class="fa-solid fa-road"></i> <span>Lusail Boulevard Scenic Drive</span></li>
              </ul>
            </div>
          </div>

          <!-- Card 2: The Pearl-Qatar -->
          <div class="city-tour-card">
            <div class="city-tour-img-wrapper">
              <img src="gallery/city-tour-car/city-tour-2.jpeg" alt="The Pearl Qatar Island and Porto Arabia Drive" loading="lazy" class="city-tour-img" />
              <div class="city-tour-badge">THE PEARL-QATAR</div>
            </div>
            <div class="city-tour-card-body">
              <div class="city-tour-card-title-row">
                <h4 class="city-tour-card-title">The Pearl & Porto Arabia</h4>
                <span class="city-tour-ar-tag">جزيرة اللؤلؤة قطر</span>
              </div>
              <p class="city-tour-card-desc">
                Glide across the Riviera-style man-made island featuring Mediterranean yacht marinas, picturesque canal bridges, Venetian architecture, and luxury boutiques.
              </p>
              <ul class="city-tour-points">
                <li><i class="fa-solid fa-water"></i> <span>Porto Arabia Marina Promenade</span></li>
                <li><i class="fa-solid fa-bridge"></i> <span>Qanat Quartier Venetian Canals</span></li>
              </ul>
            </div>
          </div>

          <!-- Card 3: West Bay & Corniche Night Drive -->
          <div class="city-tour-card">
            <div class="city-tour-img-wrapper">
              <img src="gallery/city-tour-car/city-tour-3.jpeg" alt="West Bay Downtown Skyline and Corniche Night Drive" loading="lazy" class="city-tour-img" />
              <div class="city-tour-badge">DOHA DOWNTOWN</div>
            </div>
            <div class="city-tour-card-body">
              <div class="city-tour-card-title-row">
                <h4 class="city-tour-card-title">West Bay & Corniche Skyline</h4>
                <span class="city-tour-ar-tag">أبراج الخليج الغربي والكورنيش</span>
              </div>
              <p class="city-tour-card-desc">
                Witness Doha’s world-famous neon illuminated skyscraper towers, scenic Corniche coastal highway, Museum of Islamic Art park, and Souq Waqif alleys.
              </p>
              <ul class="city-tour-points">
                <li><i class="fa-solid fa-city"></i> <span>Corniche Skyline Panoramic View</span></li>
                <li><i class="fa-solid fa-moon"></i> <span>Doha By Night Lights Experience</span></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Tour Features & Inclusions Row -->
        <div class="city-tour-features-strip">
          <div class="tour-feature-pill">
            <i class="fa-solid fa-snowflake"></i>
            <div>
              <strong>Climate-Controlled Luxury</strong>
              <span>Latest model air-conditioned SUVs & VIP sedans</span>
            </div>
          </div>
          <div class="tour-feature-pill">
            <i class="fa-solid fa-user-tie"></i>
            <div>
              <strong>Professional Chauffeur</strong>
              <span>Courteous English & Arabic licensed guides</span>
            </div>
          </div>
          <div class="tour-feature-pill">
            <i class="fa-solid fa-location-dot"></i>
            <div>
              <strong>Door-to-Door Pick-Up</strong>
              <span>Free hotel, airport, or marina pick-up & drop-off</span>
            </div>
          </div>
          <div class="tour-feature-pill">
            <i class="fa-solid fa-clock"></i>
            <div>
              <strong>Flexible Schedules</strong>
              <span>4-Hour, 8-Hour, or Full-Day private itineraries</span>
            </div>
          </div>
        </div>

        <!-- Action Callout Bar -->
        <div class="city-tour-cta-bar">
          <div class="cta-bar-text">
            <h4>Ready to Explore Doha by Luxury Car?</h4>
            <p>Combine your boat charter with a private chauffeured city excursion or book a standalone tour.</p>
          </div>
          <div class="cta-bar-actions">
            <a href="https://wa.me/${h}?text=${encodeURIComponent("Hello Boat Rent Qatar Dhow, I would like to inquire about booking the City Tour By Car in Doha.")}" target="_blank" rel="noopener" class="btn-city-wa">
              <i class="fa-brands fa-whatsapp"></i>
              <span>Book City Tour on WhatsApp</span>
            </a>
            <a href="tel:+${h}" class="btn-city-call">
              <i class="fa-solid fa-phone"></i>
              <span>Call Concierge (${k})</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Fleet Comparison Table -->
      <div class="fleet-comparison-card">
        <h3 class="comparison-title">Fleet Specifications Comparison</h3>
        <div class="table-responsive">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Vessel Name</th>
                <th>Category</th>
                <th>Capacity</th>
                <th>Air Conditioning</th>
                <th>Sound System</th>
                <th>Restroom</th>
                <th>BBQ Setup</th>
                <th>Inquire</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Qatar AC Luxury Cruiser</strong></td>
                <td>Luxury Cruiser</td>
                <td>15 - 20 Pax</td>
                <td><span class="check-icon">✓ Fully Enclosed Saloon</span></td>
                <td><span class="check-icon">✓ JBL Marine</span></td>
                <td><span class="check-icon">✓ Private</span></td>
                <td>Upon Request</td>
                <td><button type="button" class="btn-table-inquire open-booking-modal" data-boat="Qatar AC Luxury Cruiser">Book Now</button></td>
              </tr>
              <tr>
                <td><strong>Traditional Qatari Royal Dhow</strong></td>
                <td>Heritage Dhow</td>
                <td>35 - 50 Pax</td>
                <td>Shaded + Breeze</td>
                <td><span class="check-icon">✓ Concert Audio</span></td>
                <td><span class="check-icon">✓ Yes</span></td>
                <td><span class="check-icon">✓ Large Grill</span></td>
                <td><button type="button" class="btn-table-inquire open-booking-modal" data-boat="Traditional Qatari Royal Dhow">Book Now</button></td>
              </tr>
              <tr>
                <td><strong>High-Speed Gulf Sport Boat</strong></td>
                <td>Speed Boat</td>
                <td>6 - 8 Pax</td>
                <td>Open Air Speed</td>
                <td><span class="check-icon">✓ Bluetooth</span></td>
                <td>Beach Stops</td>
                <td>—</td>
                <td><button type="button" class="btn-table-inquire open-booking-modal" data-boat="High-Speed Gulf Sport Boat">Book Now</button></td>
              </tr>
              <tr>
                <td><strong>Al Safliya Island Explorer</strong></td>
                <td>Beach Cruiser</td>
                <td>25 - 35 Pax</td>
                <td>Shaded Canopy</td>
                <td><span class="check-icon">✓ High Power</span></td>
                <td><span class="check-icon">✓ Yes</span></td>
                <td><span class="check-icon">✓ Built-in</span></td>
                <td><button type="button" class="btn-table-inquire open-booking-modal" data-boat="Al Safliya Island Explorer">Book Now</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `}function H(){document.querySelectorAll(".thumb-btn").forEach(a=>{a.addEventListener("click",e=>{e.preventDefault();const n=a.getAttribute("data-target-img"),i=a.closest(".fleet-card");if(i&&n){const s=i.querySelector(".fleet-main-img");s&&(s.src=n),i.querySelectorAll(".thumb-btn").forEach(o=>o.classList.remove("active")),a.classList.add("active")}})})}const q=[{id:"safiliya-island",title:"Al Safliya Island Tour",arabicTitle:"رحلة جزيرة السافلية الشاطئية",emoji:"🏝️",subtitle:"Crystal turquoise waters, private beach landing, swimming & island BBQ",duration:"3 to 5 Hours",availability:"Daily Departures • 24/7",highlightBadge:"Top Rated Tour",image:"gallery/safiliya-island/safiliya-island-1.webp",galleryImages:["gallery/safiliya-island/safiliya-island-1.webp","gallery/safiliya-island/safiliya-island-2.webp","gallery/safiliya-island/safiliya-island-3.jpg","gallery/safiliya-island/safiliya-island-5.jpg","gallery/safiliya-island/safiliya-island-7.jpg"],overview:"Escape the city rush to Al Safliya Island, Doha’s pristine offshore jewel. Anchor right off the golden sandbars, take a dip in crystal-clear waters, and enjoy a memorable beach picnic or barbecue with sweeping views of the iconic West Bay skyline.",highlights:["Scenic cruise past Museum of Islamic Art and West Bay towers","Direct beach access & waist-deep shallow anchorage","Ideal for swimming, snorkeling, and deck jumping","Onboard BBQ grill available for fresh grilling","Bluetooth sound system for your favorite playlist"],included:["Professional Captain & Deckhand Crew","Chilled Mineral Water & Soft Drinks","Ice Boxes with Ice Bags","USCG Approved Lifejackets (All Sizes)","Stereo Marine Sound System with Bluetooth"],timings:"Daily departures: Morning (07:00 AM), Afternoon (02:00 PM), Sunset (04:30 PM)"},{id:"skyline-view",title:"Qatar Skyline & Sunset Cruise",arabicTitle:"جولة أفق الدوحة وغروب الشمس",emoji:"🌆",subtitle:"Doha Corniche, West Bay towers, Museum of Islamic Art & Pearl panoramic views",duration:"1 to 2 Hours",availability:"Sunset & Evening Prime",highlightBadge:"Most Photographed",image:"gallery/skyline-view/skyline-view-1.jpg",galleryImages:["gallery/skyline-view/skyline-view-1.jpg","gallery/skyline-view/skyline-view-3.jpg","gallery/skyline-view/skyline-view-5.jpg","gallery/skyline-view/skyline-view-7.jpg","background.jpeg"],overview:"Sail along the vibrant Doha bay and admire Qatar’s architectural wonders from the serenity of the sea. Watch the sunset illuminate the glass high-rises in gold and purple, followed by the dazzling night skyline light show.",highlights:["Spectacular viewpoints for West Bay towers and Katara","Glide by the striking architecture of the Museum of Islamic Art (MIA)","Golden hour sunset photo opportunities","Illuminated evening skyscraper skyline cruise","Complimentary Arabic tea, coffee and refreshments upon request"],included:["Coast Guard Certified Captain & Crew","Bottled Water & Refreshments","Ice Box with Ice","High Quality Sound System","Life Jackets & Safety Equipment"],timings:"Hourly cruises from 09:00 AM until 11:30 PM (Sunset slots: 04:30 PM - 06:30 PM)"},{id:"fishing-tour",title:"Deep Sea Fishing Tour",arabicTitle:"رحلة صيد الأسماك في الخليج العربي",emoji:"🎣",subtitle:"Spend quality time at sea with an enjoyable fishing experience & top gear",duration:"4 Hours",availability:"Morning & Afternoon Slots",highlightBadge:"Angler Experience",image:"gallery/fishing-tour/fishing-tour-1.jpg",galleryImages:["gallery/fishing-tour/fishing-tour-1.jpg","gallery/fishing-tour/fishing-tour-2.jpg","gallery/fishing-tour/fishing-tour-3.jpg","gallery/fishing-tour/fishing-tour-4.jpg","gallery/fishing-tour/fishing-tour-6.jpg"],overview:"Spend quality time at sea with an authentic Arabian Gulf fishing adventure. Our veteran captains navigate to Qatar’s richest fishing grounds where you can catch Hamour (Grouper), Kingfish, Sheri (Emperor), and Barracuda.",highlights:["Guided by seasoned local Qatari fishing captains","Top-quality fishing rods, reels, lines, and fresh squid/shrimp bait provided","Fish finder sonar to track schools of fish in deep waters","Keep your catch! We clean and store them on ice for you","Suitable for both beginners and experienced anglers"],included:["Complete Fishing Gear & Tackle","Fresh Bait & Fish Storage Ice Boxes","Expert Captain Instructions & Assistance","Complimentary Bottled Water & Juices","Full Safety & Navigational Equipment"],timings:"Early Morning Trip: 05:00 AM - 09:00 AM | Afternoon Trip: 02:00 PM - 06:00 PM"},{id:"jumping-swimming",title:"Swimming & Water Jumping",arabicTitle:"رحلة السباحة والقفز في المياه الصافية",emoji:"🏊",subtitle:"Enjoy swimming and jumping activities where permitted and suitable",duration:"2 to 3 Hours",availability:"Daily Daytime Slots",highlightBadge:"Pure Fun & Action",image:"gallery/jumping-swimming/jumping-swimming-1.jpg",galleryImages:["gallery/jumping-swimming/jumping-swimming-1.jpg","gallery/jumping-swimming/jumping-swimming-2.jpg","gallery/jumping-swimming/jumping-swimming-3.jpg","gallery/jumping-swimming/jumping-swimming-4.jpg","gallery/jumping-swimming/jumping-swimming-6.jpg"],overview:"Dive into the warm, crystalline Arabian Gulf waters! Safe deck jumping platforms, swimming stops in calm secluded bays, and buoyant water floaties make this an exhilarating activity for energetic groups.",highlights:["Anchored at designated safe swimming & calm water spots","Safe elevated jumping decks with secure handrails","Snorkeling gear to explore underwater marine life","Floating water mats and swimming rings provided","Freshwater rinse shower onboard after your swim"],included:["Certified Lifeguard-Trained Crew Onboard","Snorkel Masks & Swimming Life Vests","Freshwater Shower & Changing Cabin","Ice Boxes with Refreshing Drinks","Bluetooth Sound System for Beach Vibes"],timings:"Daily: 09:00 AM, 12:00 PM, 03:00 PM"},{id:"birthday-events",title:"Birthday & Special Events",arabicTitle:"حفلات أعياد الميلاد والمناسبات الخاصة",emoji:"🎂",subtitle:"Celebrate birthdays, anniversaries and VIP occasions with a unique boat experience",duration:"2 to 4 Hours",availability:"Custom VIP Bookings",highlightBadge:"Celebration Specialist",image:"gallery/birthday-events/birthday-events-1.jpg",galleryImages:["gallery/birthday-events/birthday-events-1.jpg","gallery/birthday-events/birthday-events-2.jpg","gallery/birthday-events/birthday-events-3.jpg","gallery/birthday-events/birthday-events-4.jpg","gallery/birthday-events/birthday-events-6.jpg"],overview:"Make your special day unforgettable! Whether it is a milestone birthday, marriage proposal, wedding anniversary, or private company celebration, we transform our luxury boats with custom decorations, ambient lighting, and music against the Doha skyline backdrop.",highlights:["Custom balloon arches, celebration banners, and table setups","High-power audio system for DJ playlists and dancing","Cake table arrangement and red carpet boarding","Onboard BBQ grill setup or catering coordination","Spectacular photo backdrop with Doha illuminated skyline"],included:["Dedicated Event Crew & Captain","Party Lighting & Marine Sound Setup","Chilled Storage for Cakes & Food","Complimentary Ice Boxes & Soft Drinks","Full Cleanup Service Included"],timings:"Flexible scheduling 24/7 (Sunset & Evening slots are most popular)"},{id:"dining-dhow",title:"Dinner & Dining Dhow Cruise",arabicTitle:"رحلة العشاء الفاخر في البانوش",emoji:"🍽️",subtitle:"Relaxing cruise and dining experience with traditional & international flavors",duration:"2 to 3 Hours",availability:"Evening & Night Cruises",highlightBadge:"Gourmet Skyline",image:"gallery/skyline-view/skyline-view-5.jpg",galleryImages:["gallery/skyline-view/skyline-view-5.jpg","background.jpeg","gallery/skyline-view/skyline-view-7.jpg","gallery/ac-luxury/ac-luxury-3.jpg"],overview:"Experience the magic of dining on the tranquil waters of Doha Bay. Enjoy an unforgettable culinary cruise featuring succulent grilled meats, traditional Arabian mezze, fresh salads, and desserts as Doha’s skyline glitters around you.",highlights:["Buffet or Live BBQ dinner dining at sea","Traditional Arabic coffee (Gahwa), tea, and dates","Two-deck seating: dine on upper open deck or lower shaded deck","Gentle cruise along the Museum of Islamic Art and West Bay","Romantic ambiance with soft ambient lighting and music"],included:["Dining Tables & Majlis Seating Setup","Dinner Service Crew & Captain","Chilled Beverages & Mineral Water","Sound System with Relaxing Melodies","Clean Washroom Facilities"],timings:"Daily Sunset Dinner: 05:30 PM - 08:00 PM | Night Dinner: 08:30 PM - 11:00 PM"},{id:"family-tour",title:"Family & Group Tours",arabicTitle:"رحلات العائلات والمجموعات المريحة",emoji:"👨‍👩‍👧‍👦",subtitle:"A fun and relaxing boat experience for families, friends and groups",duration:"2 to 4 Hours",availability:"Daily Departures • Child Safe",highlightBadge:"Family Friendly",image:"gallery/ac-luxury/ac-luxury-1.jpg",galleryImages:["gallery/ac-luxury/ac-luxury-1.jpg","gallery/safiliya-island/safiliya-island-3.jpg","gallery/skyline-view/skyline-view-2.jpg","gallery/ac-luxury/ac-luxury-4.jpg"],overview:"A fun and relaxing boat experience designed specifically with families in mind. Safe, spacious decks, child-friendly high railings, shaded lounges, and attentive staff ensure parents and children can relax in total peace of mind.",highlights:["Spacious shaded seating and air-conditioned lounge options","Child lifejackets and strict safety protocols","Gentle, smooth cruising suitable for seniors and infants","Bring your own family snacks, meals, and favorite tunes","Stops for safe paddle boarding and shallow water dipping"],included:["Family-Attentive Captain & Deckhands","Chilled Water & Ice Boxes","Child & Adult Safety Vests","Clean Private Toilet & Washroom","Shaded Seating Area"],timings:"Available from 08:00 AM to 11:00 PM daily"},{id:"sharing-private",title:"Sharing & Private Tours",arabicTitle:"رحلات خاصة وحجوزات مشتركة",emoji:"🚤",subtitle:"Choose between shared budget cruises or an exclusive VIP private boat experience",duration:"1 to 4 Hours",availability:"Private Charter & Shared Tickets",highlightBadge:"Flexible Options",image:"gallery/speed-boat/speed-boat-2.jpg",galleryImages:["gallery/speed-boat/speed-boat-2.jpg","gallery/skyline-view/skyline-view-6.jpg","gallery/ac-luxury/ac-luxury-5.jpg","gallery/safiliya-island/safiliya-island-4.jpg"],overview:"Whether you want an economical ticket on a shared dhow cruise to enjoy the skyline with fellow travelers, or an exclusive private charter for you and your guests, we accommodate every preference.",highlights:["Private Charter: 100% exclusive boat for your group only","Shared Tours: Cost-effective per-seat tickets on daily schedules","Customizable itinerary for private bookings","Flexible departure times from Doha Corniche Promenade","Instant booking confirmation via WhatsApp"],included:["Licensed Captain & Experienced Crew","Coast Guard Clearance & Safety Gear","Sound System Access","Scenic Route along Doha Highlights"],timings:"Shared cruises depart every hour from 04:00 PM | Private charters available 24/7"}];function F(){return`
    <section class="section-container tours-section" id="tours">
      <div class="section-header text-center">
        <span class="section-subtitle">SIGNATURE SEA ADVENTURES & CRUISES</span>
        <h2 class="section-title">Qatar Sea Tours & Activities</h2>
        <span class="section-title-ar">رحلات بحرية وأنشطة مائية متكاملة في قطر</span>
        <div class="gold-accent-line"></div>
        <p class="section-desc">
          From tranquil sunset dining cruises along the Corniche to adventurous sandbar swimming at Al Safliya Island and deep-sea game fishing — choose your ideal Arabian Gulf experience with Boat Rent Qatar Dhow.
        </p>
      </div>

      <!-- Tours Grid -->
      <div class="tours-grid">
        ${q.map(a=>{const e=a.highlights.slice(0,3).map(i=>`
      <li><i class="fa-solid fa-water"></i> <span>${i}</span></li>
    `).join(""),n=a.included.slice(0,4).map(i=>`
      <span class="inc-badge"><i class="fa-solid fa-check"></i> ${i}</span>
    `).join("");return`
      <article class="tour-card" id="tour-${a.id}">
        <!-- Tour Card Media Header -->
        <div class="tour-media">
          <img src="${a.image}" alt="${a.title}" class="tour-img" loading="lazy" />
          <div class="tour-badge-top">${a.highlightBadge}</div>
          <div class="tour-emoji-badge">${a.emoji}</div>
          <div class="tour-duration-tag">
            <i class="fa-solid fa-hourglass-half"></i> ${a.duration}
          </div>
        </div>

        <!-- Tour Card Body -->
        <div class="tour-body">
          <div class="tour-title-area">
            <h3 class="tour-title">${a.title}</h3>
            <span class="tour-title-ar">${a.arabicTitle}</span>
          </div>

          <p class="tour-subtitle">${a.subtitle}</p>

          <div class="tour-highlights-box">
            <span class="box-label">Key Highlights:</span>
            <ul class="tour-highlights-list">
              ${e}
            </ul>
          </div>

          <div class="tour-inclusions-row">
            ${n}
          </div>

          <div class="tour-footer-row">
            <div class="tour-avail-col">
              <span class="avail-lbl">Schedule</span>
              <span class="avail-val"><i class="fa-solid fa-circle-check"></i> ${a.availability}</span>
            </div>

            <div class="tour-buttons-col">
              <button type="button" class="btn-primary-sm open-booking-modal" data-tour="${a.title}">
                <i class="fa-solid fa-calendar-check"></i>
                <span>Book Tour</span>
              </button>
              <a href="https://wa.me/${h}?text=${encodeURIComponent(`Hello Boat Rent Qatar Dhow, I want to book the ${a.title}. Please provide available timings and booking details.`)}" target="_blank" rel="noopener" class="btn-wa-sm" title="Chat on WhatsApp">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </article>
    `}).join("")}
      </div>

      <!-- Private vs Sharing Banner -->
      <div class="tours-custom-banner">
        <div class="banner-content">
          <div class="banner-badge">FLEXIBLE CHARTERS</div>
          <h3>Private VIP Charters & Daily Shared Cruises</h3>
          <p>
            Whether you are a solo traveler seeking an affordable shared sunset dhow cruise or organizing a VIP corporate gathering, private island barbecue, or birthday party, Boat Rent Qatar Dhow offers fully personalized cruise itineraries.
          </p>
          <div class="banner-actions">
            <a href="https://wa.me/${h}?text=${encodeURIComponent("Hello Boat Rent Qatar Dhow, I would like to inquire about a custom private boat or dhow charter in Doha.")}" target="_blank" rel="noopener" class="btn-primary">
              <i class="fa-brands fa-whatsapp"></i>
              <span>Customize Private Charter</span>
            </a>
            <a href="tel:+${h}" class="btn-outline-light">
              <i class="fa-solid fa-phone"></i>
              <span>Call Concierge (${k})</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `}const W=[{id:"all",label:"All Experiences",labelAr:"جميع التجارب"},{id:"ac-luxury",label:"AC Luxury Boat",labelAr:"يخت فاخر مكيف"},{id:"safiliya-island",label:"Safliya Island",labelAr:"جزيرة السافلية"},{id:"skyline-view",label:"Doha Skyline",labelAr:"أفق الدوحة"},{id:"fishing-tour",label:"Fishing Tours",labelAr:"رحلات الصيد"},{id:"jumping-swimming",label:"Swimming & Jumping",labelAr:"السباحة والقفز"},{id:"birthday-events",label:"Birthdays & Events",labelAr:"الحفلات والمناسبات"},{id:"speed-boat",label:"Speedboat Thrills",labelAr:"قوارب سريعة"}],x=[{id:"ac-1",category:"ac-luxury",title:"AC Luxury Cruiser - VIP Saloon",titleAr:"صالة اليخت الفاخر المكيفة",src:"gallery/ac-luxury/ac-luxury-1.jpg",desc:"Climate-controlled luxury interior lounge with plush leather seating."},{id:"ac-2",category:"ac-luxury",title:"AC Luxury - Panoramic Cabin View",titleAr:"إطلالة بانورامية من المقصورة",src:"gallery/ac-luxury/ac-luxury-2.jpg",desc:"Wide viewing windows offering scenic seascapes of Doha Bay."},{id:"ac-3",category:"ac-luxury",title:"AC Luxury - Dining & Executive Lounge",titleAr:"صالة الطعام والتنفيذيين",src:"gallery/ac-luxury/ac-luxury-3.jpg",desc:"Spacious dining layout ideal for private celebrations and catering."},{id:"ac-4",category:"ac-luxury",title:"AC Luxury - Premium Cockpit & Helm",titleAr:"قمرة القيادة الحديثة",src:"gallery/ac-luxury/ac-luxury-4.jpg",desc:"Modern marine navigation, captain helm, and plush guest cockpit."},{id:"ac-5",category:"ac-luxury",title:"AC Luxury - Aft Deck Seating",titleAr:"جلسة سطح اليخت الخارجية",src:"gallery/ac-luxury/ac-luxury-5.jpg",desc:"Shaded open-air deck seating for sunset drinks and Gulf breezes."},{id:"ac-6",category:"ac-luxury",title:"AC Luxury - Sleek Profile on the Water",titleAr:"اليخت في مياه الخليج",src:"gallery/ac-luxury/ac-luxury-6.jpg",desc:"High performance hull designed for smooth and silent gliding."},{id:"ac-7",category:"ac-luxury",title:"AC Luxury - Sunbed & Bow Cushions",titleAr:"منطقة الاستلقاء تحت الشمس",src:"gallery/ac-luxury/ac-luxury-7.jpg",desc:"Generous bow cushion area for tanning and relaxing in the sun."},{id:"saf-1",category:"safiliya-island",title:"Al Safliya Island - Turquoise Shallows",titleAr:"مياه جزيرة السافلية الفيروزية",src:"gallery/safiliya-island/safiliya-island-1.webp",desc:"Crystal clear calm waters perfect for swimming, dipping, and anchoring."},{id:"saf-2",category:"safiliya-island",title:"Al Safliya - Golden Sandbar Anchorage",titleAr:"الرسو عند الرمال الذهبية",src:"gallery/safiliya-island/safiliya-island-2.webp",desc:"Boats anchored directly off the natural sandbars of Safliya Island."},{id:"saf-3",category:"safiliya-island",title:"Al Safliya - Skyline Backdrop View",titleAr:"إطلالة أفق الدوحة من الجزيرة",src:"gallery/safiliya-island/safiliya-island-3.jpg",desc:"West Bay towers rising on the horizon across the tranquil azure bay."},{id:"saf-4",category:"safiliya-island",title:"Al Safliya - Island Beach Landing",titleAr:"الوصول إلى شاطئ الجزيرة",src:"gallery/safiliya-island/safiliya-island-4.jpg",desc:"Step off the boat into soft sand and shallow swimming pools."},{id:"saf-5",category:"safiliya-island",title:"Al Safliya - Family Beach Fun",titleAr:"أوقات ممتعة للعائلات",src:"gallery/safiliya-island/safiliya-island-5.jpg",desc:"Ideal setting for family picnics, beach games, and sunbathing."},{id:"saf-6",category:"safiliya-island",title:"Al Safliya - Crystal Lagoon Dipping",titleAr:"السباحة في بحيرة السافلية",src:"gallery/safiliya-island/safiliya-island-6.jpg",desc:"Refreshing swim in pristine seawater free from urban disturbances."},{id:"saf-7",category:"safiliya-island",title:"Al Safliya - Sunset Reflection",titleAr:"غروب الشمس الساحر",src:"gallery/safiliya-island/safiliya-island-7.jpg",desc:"Golden hour at Safliya with the crimson Qatari sky mirrored in water."},{id:"sky-1",category:"skyline-view",title:"Doha West Bay Skyline from Sea",titleAr:"أفق الخليج الغربي من البحر",src:"gallery/skyline-view/skyline-view-1.jpg",desc:"Panoramic perspective of Doha’s most iconic architectural towers."},{id:"sky-2",category:"skyline-view",title:"Corniche Waterfront & Dhow Harbor",titleAr:"كورنيش الدوحة وميناء البوانيش",src:"gallery/skyline-view/skyline-view-2.jpg",desc:"Sailing along the historic Doha Corniche jetty and promenade."},{id:"sky-3",category:"skyline-view",title:"Illuminated Evening West Bay Towers",titleAr:"أبراج الدوحة المضيئة ليلاً",src:"gallery/skyline-view/skyline-view-3.jpg",desc:"Vibrant city lights reflecting on the calm Arabian Gulf waters."},{id:"sky-4",category:"skyline-view",title:"Traditional Wooden Dhow & Modern Skyline",titleAr:"البانوش التراثي والأفق الحديث",src:"background.jpeg",desc:"Qatar’s storied heritage meets 21st-century modern luxury."},{id:"sky-5",category:"skyline-view",title:"Sunset Cruise Silhouette",titleAr:"سحر الغروب فوق الدوحة",src:"gallery/skyline-view/skyline-view-5.jpg",desc:"Witnessing the sun slip behind Doha’s soaring towers."},{id:"sky-6",category:"skyline-view",title:"Museum of Islamic Art Waterside",titleAr:"متحف الفن الإسلامي من البحر",src:"gallery/skyline-view/skyline-view-6.jpg",desc:"Cruise along the iconic limestone geometry of MIA park."},{id:"spd-1",category:"speed-boat",title:"High-Speed Adrenaline Cruising",titleAr:"مغامرة الإثارة والسرعة",src:"gallery/speed-boat/speed-boat-1.jpg",desc:"Twin outboard engines delivering exhilaration across the gulf."},{id:"spd-2",category:"speed-boat",title:"Speedboat Island Sprint",titleAr:"انطلاق سريع إلى الجزيرة",src:"gallery/speed-boat/speed-boat-2.jpg",desc:"Quick 10-minute transit to Al Safliya with white wakes trailing."},{id:"spd-3",category:"speed-boat",title:"Sport Boat Cockpit & Bow Deck",titleAr:"قمرة قيادة القارب السريع",src:"gallery/speed-boat/speed-boat-3.jpg",desc:"Deep cushioned bucket seats and full wrap-around windshield."},{id:"spd-4",category:"speed-boat",title:"Speedboat Anchored at Sandbank",titleAr:"قارب سريع راسي عند الرمال",src:"gallery/speed-boat/speed-boat-4.jpg",desc:"Perfect platform for fast swimming breaks and beach landings."},{id:"fish-1",category:"fishing-tour",title:"Deep Sea Fishing - Fresh Catch of Hamour",titleAr:"صيد الهامور الطازج",src:"gallery/fishing-tour/fishing-tour-1.jpg",desc:"Proud anglers displaying authentic Arabian Gulf catches on deck."},{id:"fish-2",category:"fishing-tour",title:"Professional Rods & Deep Trolling",titleAr:"معدات الصيد الاحترافية",src:"gallery/fishing-tour/fishing-tour-2.jpg",desc:"State-of-the-art reels, sonar tracking, and expert rigging."},{id:"fish-3",category:"fishing-tour",title:"Kingfish & Sheri Success",titleAr:"صيد الكنعد والشعري",src:"gallery/fishing-tour/fishing-tour-3.jpg",desc:"Memorable bountiful catches guided by seasoned Qatari fishermen."},{id:"fish-4",category:"fishing-tour",title:"Sunset Fishing at Gulf Horizons",titleAr:"صيد الأسماك وقت الغروب",src:"gallery/fishing-tour/fishing-tour-4.jpg",desc:"Peaceful angling experience while the sky turns orange and violet."},{id:"jump-1",category:"jumping-swimming",title:"Deck Diving into Azure Waters",titleAr:"القفز من السطح إلى المياه",src:"gallery/jumping-swimming/jumping-swimming-1.jpg",desc:"Thrilling deck jumps into clean, safe swimming grounds."},{id:"jump-2",category:"jumping-swimming",title:"Splash & Water Activities",titleAr:"أنشطة وألعاب مائية ممتعة",src:"gallery/jumping-swimming/jumping-swimming-2.jpg",desc:"Friends and families enjoying pure refreshment in the Gulf."},{id:"jump-3",category:"jumping-swimming",title:"Safe Elevated Jumping Platform",titleAr:"منصة قفز آمنة ومجهزة",src:"gallery/jumping-swimming/jumping-swimming-3.jpg",desc:"Safe railings and steps with crew monitoring every splash."},{id:"jump-4",category:"jumping-swimming",title:"Group Swimming & Floaties Fun",titleAr:"سباحة جماعية وأطواق مائية",src:"gallery/jumping-swimming/jumping-swimming-4.jpg",desc:"Floating mats and swimming rings for all ages in calm shallows."},{id:"bday-1",category:"birthday-events",title:"Birthday Celebration on the Water",titleAr:"احتفال عيد ميلاد رائع على القارب",src:"gallery/birthday-events/birthday-events-1.jpg",desc:"Festive setup with balloon arches, personalized decor, and cake table."},{id:"bday-2",category:"birthday-events",title:"VIP Private Party Lights & Music",titleAr:"إضاءة وموسيقى الحفلات الخاصة",src:"gallery/birthday-events/birthday-events-2.jpg",desc:"Atmospheric evening boat parties with premium sound and neon glows."},{id:"bday-3",category:"birthday-events",title:"Anniversary & Special Occasion Setup",titleAr:"تجهيزات ذكرى الزواج والمناسبات",src:"gallery/birthday-events/birthday-events-3.jpg",desc:"Romantic and VIP setups for milestone moments at sea."},{id:"bday-4",category:"birthday-events",title:"Celebration Gathering with Skyline Backdrop",titleAr:"تجمع احتفالي مع أفق الدوحة",src:"gallery/birthday-events/birthday-events-4.jpg",desc:"Celebrate in grandeur with friends, family, and panoramic city views."}];function O(){const t=W.map((e,n)=>`
    <button type="button" class="gallery-tab-btn ${n===0?"active":""}" data-category="${e.id}">
      <span>${e.label}</span>
      <small class="tab-ar">${e.labelAr}</small>
    </button>
  `).join(""),a=x.map(e=>`
    <div class="gallery-item-card" data-category="${e.category}" data-id="${e.id}">
      <div class="gallery-img-wrapper">
        <img src="${e.src}" alt="${e.title}" loading="lazy" class="gallery-thumb" />
        <div class="gallery-overlay">
          <span class="gallery-tag">${e.category.replace("-"," ").toUpperCase()}</span>
          <h4 class="gallery-item-title">${e.title}</h4>
          <p class="gallery-item-desc">${e.desc}</p>
          <div class="gallery-zoom-icon">
            <i class="fa-solid fa-expand"></i>
          </div>
        </div>
      </div>
    </div>
  `).join("");return`
    <section class="section-container gallery-section" id="gallery">
      <div class="section-header text-center">
        <span class="section-subtitle">MOMENTS ON THE ARABIAN GULF</span>
        <h2 class="section-title">Our Moments & Lifestyle Gallery</h2>
        <span class="section-title-ar">معرض الصور والذكريات البحرية</span>
        <div class="gold-accent-line"></div>
        <p class="section-desc">
          Explore real guest moments captured aboard Boat Rent Qatar Dhow vessels — from crystal beach waters at Al Safliya to exhilarating deck jumps, record fishing catches, and sunset skyline celebrations.
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="gallery-filters-container">
        <div class="gallery-tabs-row" id="gallery-tabs">
          ${t}
        </div>
      </div>

      <!-- Gallery Grid -->
      <div class="gallery-grid" id="gallery-grid">
        ${a}
      </div>

      <!-- Fullscreen Lightbox Modal -->
      <div id="gallery-lightbox" class="gallery-lightbox" aria-hidden="true">
        <div class="lightbox-backdrop" id="lightbox-backdrop"></div>
        <div class="lightbox-dialog">
          <button type="button" id="lightbox-close" class="lightbox-close-btn" aria-label="Close Lightbox">
            <i class="fa-solid fa-xmark"></i>
          </button>
          
          <button type="button" id="lightbox-prev" class="lightbox-nav-btn prev-btn" aria-label="Previous Image">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          
          <div class="lightbox-content-box">
            <div class="lightbox-image-holder">
              <img src="" alt="" id="lightbox-img" class="lightbox-img" />
            </div>
            <div class="lightbox-meta-bar">
              <div class="lightbox-meta-text">
                <h4 id="lightbox-title" class="lightbox-title"></h4>
                <p id="lightbox-desc" class="lightbox-desc"></p>
              </div>
              <div class="lightbox-counter-badge">
                <span id="lightbox-index">1</span> / <span>${x.length}</span>
              </div>
            </div>
          </div>
          
          <button type="button" id="lightbox-next" class="lightbox-nav-btn next-btn" aria-label="Next Image">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  `}function N(){const t=document.querySelectorAll(".gallery-tab-btn"),a=document.querySelectorAll(".gallery-item-card"),e=document.getElementById("gallery-lightbox"),n=document.getElementById("lightbox-img"),i=document.getElementById("lightbox-title"),s=document.getElementById("lightbox-desc"),o=document.getElementById("lightbox-index"),g=document.getElementById("lightbox-close"),c=document.getElementById("lightbox-backdrop"),p=document.getElementById("lightbox-prev"),w=document.getElementById("lightbox-next");let m=[...x],r=0;t.forEach(l=>{l.addEventListener("click",()=>{t.forEach(y=>y.classList.remove("active")),l.classList.add("active");const v=l.getAttribute("data-category");v==="all"?(m=[...x],a.forEach(y=>y.style.display="block")):(m=x.filter(y=>y.category===v),a.forEach(y=>{y.getAttribute("data-category")===v?y.style.display="block":y.style.display="none"}))})});function d(l){if(!m[l])return;const v=m[l];n&&(n.src=v.src,n.alt=v.title),i&&(i.textContent=v.title),s&&(s.textContent=v.desc),o&&(o.textContent=(l+1).toString())}function S(l){r=l,d(r),e==null||e.classList.add("is-open"),e==null||e.setAttribute("aria-hidden","false"),document.body.classList.add("lightbox-locked")}function f(){e==null||e.classList.remove("is-open"),e==null||e.setAttribute("aria-hidden","true"),document.body.classList.remove("lightbox-locked")}a.forEach(l=>{l.addEventListener("click",()=>{const v=l.getAttribute("data-id"),y=m.findIndex(A=>A.id===v);y!==-1&&S(y)})}),g==null||g.addEventListener("click",f),c==null||c.addEventListener("click",f),p==null||p.addEventListener("click",()=>{r=(r-1+m.length)%m.length,d(r)}),w==null||w.addEventListener("click",()=>{r=(r+1)%m.length,d(r)}),window.addEventListener("keydown",l=>{e!=null&&e.classList.contains("is-open")&&(l.key==="Escape"&&f(),l.key==="ArrowLeft"&&(r=(r-1+m.length)%m.length,d(r)),l.key==="ArrowRight"&&(r=(r+1)%m.length,d(r)))});let u=0,b=0;e==null||e.addEventListener("touchstart",l=>{l.changedTouches&&l.changedTouches[0]&&(u=l.changedTouches[0].clientX)},{passive:!0}),e==null||e.addEventListener("touchend",l=>{if(l.changedTouches&&l.changedTouches[0]){b=l.changedTouches[0].clientX;const v=b-u;Math.abs(v)>40&&(v<0?(r=(r+1)%m.length,d(r)):(r=(r-1+m.length)%m.length,d(r)))}},{passive:!0})}function V(){const t=new Date;t.setDate(t.getDate()+1);const a=t.toISOString().split("T")[0];return`
    <section class="section-container booking-section" id="contact">
      <div class="section-header text-center">
        <span class="section-subtitle">SEAMLESS RESERVATIONS & 24/7 ASSISTANCE</span>
        <h2 class="section-title">Online Reservation & Inquiries</h2>
        <span class="section-title-ar">احجز رحلتك البحرية وتواصل معنا مباشرة</span>
        <div class="gold-accent-line"></div>
        <p class="section-desc">
          Select your preferred boat, tour, date, and cruise requirements below to send an instant reservation inquiry directly to our captain on WhatsApp, or speak with our concierge 24/7.
        </p>
      </div>

      <div class="booking-contact-wrapper">
        <!-- Interactive Booking Form (No Price Calculator) -->
        <div class="booking-calculator-card">
          <div class="card-top-header">
            <div class="calculator-badge">
              <i class="fa-solid fa-anchor"></i>
              <span>Direct Reservation Form</span>
            </div>
            <span class="currency-tag"><i class="fa-solid fa-bolt"></i> Instant WhatsApp Confirmation</span>
          </div>

          <form id="reservation-form" class="calculator-form" onsubmit="return false;">
            <!-- Step 1: Vessel / Experience Selection -->
            <div class="form-row">
              <div class="form-group flex-1">
                <label for="calc-experience-type"><i class="fa-solid fa-ship"></i> Select Vessel or Tour</label>
                <select id="calc-experience-type" class="form-control">
                  <optgroup label="Luxury Fleet (Charters)">
                    <option value="Qatar AC Luxury Cruiser" selected>🛥️ Qatar AC Luxury Cruiser</option>
                    <option value="Traditional Qatari Royal Dhow">⛵ Traditional Qatari Royal Dhow</option>
                    <option value="High-Speed Gulf Sport Boat">🚤 High-Speed Gulf Sport Boat</option>
                    <option value="Al Safliya Beach Explorer">🏝️ Al Safliya Beach Explorer</option>
                  </optgroup>
                  <optgroup label="Specialty Tours & Cruises">
                    <option value="Al Safliya Island Tour">🏝️ Al Safliya Island Tour</option>
                    <option value="Qatar Skyline & Sunset Cruise">🌆 Qatar Skyline & Sunset Cruise</option>
                    <option value="Deep Sea Fishing Tour">🎣 Deep Sea Fishing Tour</option>
                    <option value="Swimming & Water Jumping">🏊 Swimming & Water Jumping</option>
                    <option value="Birthday & Special Events">🎂 Birthday & Special Events</option>
                    <option value="Dinner & Dining Dhow Cruise">🍽️ Dinner & Dining Dhow Cruise</option>
                    <option value="Family & Group Boat Tour">👨‍👩‍👧 Family & Group Boat Tour</option>
                  </optgroup>
                </select>
              </div>

              <div class="form-group flex-1">
                <label for="calc-booking-mode"><i class="fa-solid fa-crown"></i> Charter Type</label>
                <select id="calc-booking-mode" class="form-control">
                  <option value="Private VIP Charter" selected>Private VIP Charter (Exclusive Vessel)</option>
                  <option value="Shared Cruise">Shared Cruise (Per Person Ticket)</option>
                </select>
              </div>
            </div>

            <!-- Step 2: Date & Time -->
            <div class="form-row">
              <div class="form-group flex-1">
                <label for="calc-date"><i class="fa-solid fa-calendar"></i> Cruise Date</label>
                <input type="date" id="calc-date" class="form-control" value="${a}" min="${new Date().toISOString().split("T")[0]}" required />
              </div>

              <div class="form-group flex-1">
                <label for="calc-slot"><i class="fa-solid fa-clock"></i> Departure Time Slot</label>
                <select id="calc-slot" class="form-control">
                  <option value="Morning Glow (08:00 AM - 11:00 AM)">🌅 Morning (08:00 AM - 11:00 AM)</option>
                  <option value="Afternoon Sun (01:00 PM - 04:00 PM)">☀️ Afternoon (01:00 PM - 04:00 PM)</option>
                  <option value="Sunset Prime (04:30 PM - 07:00 PM)" selected>🌇 Sunset Prime (04:30 PM - 07:00 PM)</option>
                  <option value="Doha Night Lights (07:30 PM - 10:30 PM)">🌃 Night Lights (07:30 PM - 10:30 PM)</option>
                  <option value="Late Night VIP (11:00 PM onwards)">✨ Late Night VIP (11:00 PM+)</option>
                </select>
              </div>
            </div>

            <!-- Step 3: Duration & Guests -->
            <div class="form-row">
              <div class="form-group flex-1">
                <label for="calc-duration"><i class="fa-solid fa-hourglass-half"></i> Duration</label>
                <select id="calc-duration" class="form-control">
                  <option value="1 Hour">1 Hour (Quick Skyline Run)</option>
                  <option value="2 Hours" selected>2 Hours (Standard Cruise)</option>
                  <option value="3 Hours">3 Hours (Island & Swimming)</option>
                  <option value="4 Hours">4 Hours (Full Island & BBQ)</option>
                  <option value="5+ Hours">5+ Hours (Deep Sea Fishing / Full Day)</option>
                </select>
              </div>

              <div class="form-group flex-1">
                <label for="calc-guests"><i class="fa-solid fa-users"></i> Number of Guests</label>
                <select id="calc-guests" class="form-control">
                  <option value="1 - 5 Guests">1 - 5 Guests</option>
                  <option value="6 - 10 Guests" selected>6 - 10 Guests</option>
                  <option value="11 - 20 Guests">11 - 20 Guests</option>
                  <option value="21 - 35 Guests">21 - 35 Guests</option>
                  <option value="36 - 50+ Guests">36 - 50+ Guests (Royal Dhow)</option>
                </select>
              </div>
            </div>

            <!-- Step 4: Optional Add-ons -->
            <div class="form-group">
              <label class="addons-heading"><i class="fa-solid fa-wand-magic-sparkles"></i> Optional VIP Add-ons</label>
              <div class="addons-grid">
                <label class="addon-checkbox-label">
                  <input type="checkbox" class="calc-addon" value="Onboard BBQ Grill Setup" />
                  <span class="custom-check"></span>
                  <div class="addon-info">
                    <span class="addon-title">🍖 Onboard BBQ Grill Setup</span>
                    <span class="addon-desc">Grill, charcoal and tongs included</span>
                  </div>
                </label>

                <label class="addon-checkbox-label">
                  <input type="checkbox" class="calc-addon" value="Birthday / Event Decor & Balloons" />
                  <span class="custom-check"></span>
                  <div class="addon-info">
                    <span class="addon-title">🎈 Birthday Decor & Balloons</span>
                    <span class="addon-desc">Balloons, banner & cake table</span>
                  </div>
                </label>

                <label class="addon-checkbox-label">
                  <input type="checkbox" class="calc-addon" value="Gourmet Snacks & Refreshment Platter" />
                  <span class="custom-check"></span>
                  <div class="addon-info">
                    <span class="addon-title">🥪 Gourmet Snacks & Platters</span>
                    <span class="addon-desc">Fresh Arabic finger food & fruit</span>
                  </div>
                </label>

                <label class="addon-checkbox-label">
                  <input type="checkbox" class="calc-addon" value="Water Sports Inflatables & Tow Hook" />
                  <span class="custom-check"></span>
                  <div class="addon-info">
                    <span class="addon-title">🏄 Water Sports Tow Inflatables</span>
                    <span class="addon-desc">Towable tube and water gear</span>
                  </div>
                </label>
              </div>
            </div>

            <!-- Guest Notes -->
            <div class="form-group">
              <label for="calc-notes"><i class="fa-solid fa-comment-dots"></i> Special Requests / Occasion</label>
              <input type="text" id="calc-notes" class="form-control" placeholder="e.g. Birthday surprise, catering preference, corporate team outing" />
            </div>

            <!-- Inclusions Highlight Banner -->
            <div class="booking-inclusions-banner">
              <div class="inc-icon"><i class="fa-solid fa-circle-check"></i></div>
              <div class="inc-text">
                <strong>Every Charter Includes:</strong>
                <p>Licensed Captain & Crew, Coast Guard Clearance, Fuel, Certified Lifejackets, Clean Ice Boxes with Ice, Complimentary Mineral Water, and High-Power Sound System.</p>
              </div>
            </div>

            <!-- Booking Actions -->
            <div class="booking-actions-row">
              <button type="button" id="btn-submit-whatsapp-booking" class="btn-primary btn-calc-action">
                <i class="fa-brands fa-whatsapp"></i>
                <span>Send Request on WhatsApp (Instant)</span>
              </button>
              <a href="tel:+${h}" class="btn-outline-light btn-calc-action">
                <i class="fa-solid fa-phone"></i>
                <span>Call Hotline: ${k}</span>
              </a>
            </div>
          </form>
        </div>

        <!-- Contact Information & Marina Map -->
        <div class="contact-info-card">
          <div class="contact-header">
            <h3>Boat Rent Qatar Dhow Concierge</h3>
            <span class="contact-sub">Doha, State of Qatar</span>
          </div>

          <div class="contact-items-list">
            <div class="contact-meta-item">
              <div class="meta-icon-box">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div class="meta-text">
                <strong>Boarding Location</strong>
                <p>Doha Corniche Marina Promenade, Doha, Qatar</p>
                <a href="https://maps.google.com/?q=Doha+Corniche+Marina+Qatar" target="_blank" rel="noopener" class="map-link">
                  Open in Google Maps <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div class="contact-meta-item">
              <div class="meta-icon-box">
                <i class="fa-solid fa-phone-volume"></i>
              </div>
              <div class="meta-text">
                <strong>Direct Phone & Hotline</strong>
                <p><a href="tel:+${h}">${k}</a></p>
                <span class="tag-status">Available 24/7 for Reservations</span>
              </div>
            </div>

            <div class="contact-meta-item">
              <div class="meta-icon-box">
                <i class="fa-brands fa-whatsapp"></i>
              </div>
              <div class="meta-text">
                <strong>WhatsApp Fast Booking</strong>
                <p><a href="https://wa.me/${h}" target="_blank" rel="noopener">${k}</a></p>
                <span class="tag-status">Average response time: &lt; 5 mins</span>
              </div>
            </div>

            <div class="contact-meta-item">
              <div class="meta-icon-box">
                <i class="fa-solid fa-clock"></i>
              </div>
              <div class="meta-text">
                <strong>Operating Schedule</strong>
                <p>Daily Departures: 24 Hours / 7 Days a Week</p>
                <p class="meta-note">Sunrise, afternoon, sunset and midnight cruises available.</p>
              </div>
            </div>
          </div>

          <!-- Embedded Google Map -->
          <div class="marina-map-embed">
            <iframe
              title="Doha Corniche Marina Map"
              src="https://maps.google.com/maps?q=Doha+Corniche+Marina+Qatar&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="200"
              style="border:0; border-radius: 12px;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

          <!-- Trust Callout -->
          <div class="guarantee-badge-box">
            <i class="fa-solid fa-shield-check"></i>
            <div>
              <strong>Official Qatari Maritime Operator</strong>
              <p>Coast Guard compliant, passenger insurance included on every charter.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Global Modal Dialog for Quick Bookings from any button -->
    <div id="booking-modal-overlay" class="modal-overlay" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <i class="fa-solid fa-ship"></i>
            <h3 id="modal-heading">Quick Boat Reservation</h3>
          </div>
          <button type="button" id="modal-close-btn" class="modal-close-btn" aria-label="Close Booking Dialog">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div class="modal-body">
          <p class="modal-desc">
            Your booking request will be confirmed immediately by our captain via WhatsApp.
          </p>
          <div class="modal-form-fields">
            <div class="form-group">
              <label><i class="fa-solid fa-compass"></i> Selected Boat / Tour</label>
              <input type="text" id="modal-selected-target" class="form-control" readonly value="Qatar AC Luxury Cruiser" />
            </div>
            <div class="form-group">
              <label><i class="fa-solid fa-calendar"></i> Date</label>
              <input type="date" id="modal-date" class="form-control" value="${a}" min="${new Date().toISOString().split("T")[0]}" />
            </div>
            <div class="form-group">
              <label><i class="fa-solid fa-users"></i> Guests</label>
              <select id="modal-guests" class="form-control">
                <option value="1 - 5 Guests">1 - 5 Guests</option>
                <option value="6 - 10 Guests" selected>6 - 10 Guests</option>
                <option value="11 - 20 Guests">11 - 20 Guests</option>
                <option value="21 - 50 Guests">21 - 50 Guests</option>
              </select>
            </div>
            <div class="form-group">
              <label><i class="fa-solid fa-clock"></i> Preferred Slot</label>
              <select id="modal-slot" class="form-control">
                <option value="Morning (08:00 - 12:00)">Morning Cruise (08:00 - 12:00)</option>
                <option value="Afternoon (13:00 - 16:30)">Afternoon Beach Trip (13:00 - 16:30)</option>
                <option value="Sunset Prime (16:30 - 19:00)" selected>Sunset Prime (16:30 - 19:00)</option>
                <option value="Night Lights (19:30 - 23:00)">Night Skyline (19:30 - 23:00)</option>
              </select>
            </div>
          </div>
          <button type="button" id="modal-confirm-whatsapp" class="btn-primary btn-block">
            <i class="fa-brands fa-whatsapp"></i>
            <span>Send Reservation to Captain</span>
          </button>
        </div>
      </div>
    </div>
  `}function z(){const t=document.getElementById("calc-experience-type"),a=document.getElementById("calc-duration"),e=document.querySelectorAll(".calc-addon"),n=document.getElementById("calc-date"),i=document.getElementById("calc-slot"),s=document.getElementById("calc-guests"),o=document.getElementById("calc-notes"),g=document.getElementById("btn-submit-whatsapp-booking");g==null||g.addEventListener("click",()=>{const b=t==null?void 0:t.options[t.selectedIndex],l=b?b.text.replace(/^[^\w]+/,"").trim():"Boat Trip",v=(n==null?void 0:n.value)||"",y=(i==null?void 0:i.value)||"",A=(a==null?void 0:a.value)||"2 Hours",T=(s==null?void 0:s.value)||"",E=(o==null?void 0:o.value)||"",C=[];e.forEach(B=>{B.checked&&C.push(B.value)});const L=D({tourName:l,date:v,timeSlot:y,duration:A,guests:T,addons:C,notes:E});window.open(L,"_blank")});const c=document.getElementById("booking-modal-overlay"),p=document.getElementById("modal-close-btn"),w=document.getElementById("modal-selected-target"),m=document.getElementById("modal-confirm-whatsapp"),r=document.getElementById("modal-date"),d=document.getElementById("modal-guests"),S=document.getElementById("modal-slot");function f(b){c&&(w&&b&&(w.value=b),c.classList.add("is-open"),c.setAttribute("aria-hidden","false"),document.body.classList.add("modal-locked"))}function u(){c&&(c.classList.remove("is-open"),c.setAttribute("aria-hidden","true"),document.body.classList.remove("modal-locked"))}document.querySelectorAll(".open-booking-modal").forEach(b=>{b.addEventListener("click",l=>{l.preventDefault();const v=b.getAttribute("data-boat"),y=b.getAttribute("data-tour");f(v||y||"Boat Rent Qatar Dhow Charter")})}),p==null||p.addEventListener("click",u),c==null||c.addEventListener("click",b=>{b.target===c&&u()}),m==null||m.addEventListener("click",()=>{const b=(w==null?void 0:w.value)||"Boat Charter",l=(r==null?void 0:r.value)||"",v=(d==null?void 0:d.value)||"",y=(S==null?void 0:S.value)||"",A=D({tourName:b,date:l,timeSlot:y,guests:v});u(),window.open(A,"_blank")})}function U(){const t=[{name:"Mohammed Al-Kuwari",rating:5,date:"Visited Doha Marina",tour:"Al Safliya Island Excursion",text:"Exceptional service! We rented the AC Luxury boat for our family. The air conditioning was freezing cold even during the afternoon heat. The captain took us to Safliya island where the kids swam and jumped from the deck. Highly recommended!"},{name:"Sarah Jenkins",rating:5,date:"Verified Google Review",tour:"Sunset Skyline Dhow Cruise",text:"The best view of Doha West Bay by far. The traditional dhow is stunning and very clean. The crew played great music through the sound system and served hot tea. We saw the entire skyline illuminate at dusk. 10/10 experience!"},{name:"Ahmed Tariq & Friends",rating:5,date:"Verified Google Review",tour:"Deep Sea Fishing Expedition",text:"Booked a 4-hour morning fishing trip. Captain knew the exact secret spots — we caught 8 Hamour and several Kingfish! All fishing equipment and bait were provided. A memorable day on the Gulf."},{name:"Fatima Al-Sulaiti",rating:5,date:"Verified Google Review",tour:"Birthday Celebration Cruise",text:"Celebrated my sister’s 25th birthday on the water. The team arranged beautiful balloon decor and the sound system was incredible. Booking through WhatsApp was super quick and effortless."}],a=[{q:"Where do boats depart from in Doha?",a:"All our boats and dhows depart conveniently from Doha Corniche Marina Promenade (near the Museum of Islamic Art). Easy parking and taxi access are available, and our crew meets you at the marina gate."},{q:"Do your boats have air conditioning?",a:"Yes! Our flagship Qatar AC Luxury Cruiser features a fully enclosed, climate-controlled VIP interior lounge with plush leather seating. Our traditional dhows feature breezy shaded lower and upper decks with natural Gulf cooling."},{q:"Can we bring our own food, snacks, and cake onboard?",a:"Yes, absolutely! You are welcome to bring your own food, beverages, snacks, and celebration cakes. We provide large clean ice boxes with fresh ice and complimentary mineral water on every trip."},{q:"Is life safety equipment provided for children and non-swimmers?",a:"Yes, 100%. Safety is our highest priority. All vessels carry certified Coast Guard life vests for infants, toddlers, older children, and adults, along with first-aid kits and experienced safety crew."},{q:"Can we stop for swimming and deck jumping at Al Safliya Island?",a:"Yes! Our Al Safliya Island tours specifically include anchoring in shallow crystal waters where guests can swim, snorkel, and safely jump from the deck. Snorkel masks and floating rings are provided."},{q:"How do I pay and confirm my reservation?",a:"You can reserve instantly via WhatsApp (+974 7103 4962) or phone. Payment can be made easily via bank transfer, credit card link, or cash at the marina prior to departure."}],e=t.map(i=>`
    <div class="review-card">
      <div class="review-top">
        <div class="reviewer-avatar">
          <span>${i.name.charAt(0)}</span>
        </div>
        <div class="reviewer-meta">
          <h4 class="reviewer-name">${i.name}</h4>
          <span class="review-tour-tag">${i.tour}</span>
        </div>
      </div>
      <div class="review-stars">
        ${"★".repeat(i.rating)}
        <span class="verified-tag"><i class="fa-solid fa-circle-check"></i> Google Verified</span>
      </div>
      <p class="review-text">"${i.text}"</p>
    </div>
  `).join(""),n=a.map((i,s)=>`
    <div class="faq-item ${s===0?"active":""}">
      <button type="button" class="faq-question-btn" aria-expanded="${s===0?"true":"false"}">
        <span class="faq-q-text">${i.q}</span>
        <i class="fa-solid fa-chevron-down faq-icon"></i>
      </button>
      <div class="faq-answer-panel">
        <p>${i.a}</p>
      </div>
    </div>
  `).join("");return`
    <section class="section-container trust-faq-section" id="faq">
      <!-- Testimonials -->
      <div class="section-header text-center">
        <span class="section-subtitle">TRUSTED BY 10,000+ GULF TRAVELERS</span>
        <h2 class="section-title">Google 5.0 Star Guest Experiences</h2>
        <span class="section-title-ar">آراء وتجارب ضيوفنا في الدوحة</span>
        <div class="gold-accent-line"></div>
      </div>

      <div class="reviews-grid">
        ${e}
      </div>

      <!-- FAQ Section -->
      <div class="faq-container-box">
        <div class="faq-header text-center">
          <span class="section-subtitle">FREQUENTLY ASKED QUESTIONS</span>
          <h3 class="faq-title">Everything You Need To Know</h3>
          <p class="faq-lead">Have questions before boarding? Find quick answers regarding boarding, catering, amenities, and safety.</p>
        </div>

        <div class="faq-list">
          ${n}
        </div>
      </div>
    </section>
  `}function Y(){const t=document.querySelectorAll(".faq-item");t.forEach(a=>{const e=a.querySelector(".faq-question-btn");e==null||e.addEventListener("click",()=>{const n=a.classList.contains("active");t.forEach(i=>{var s;i.classList.remove("active"),(s=i.querySelector(".faq-question-btn"))==null||s.setAttribute("aria-expanded","false")}),n||(a.classList.add("active"),e.setAttribute("aria-expanded","true"))})})}function K(){const t=new Date().getFullYear();return`
    <footer class="site-footer">
      <div class="footer-inner-container">
        <!-- Brand & Mission Column -->
        <div class="footer-col footer-brand-col">
          <a href="#home" class="footer-brand-link">
            <img src="logo.png" alt="Boat Rent Qatar Dhow" class="footer-logo-img" />
            <div class="footer-brand-title">
              <span class="fb-main">BOAT RENT QATAR</span>
              <span class="fb-sub">DHOW & BOAT RENTALS • DOHA</span>
            </div>
          </a>
          <p class="footer-tagline">
            Doha’s premier boat and dhow charter provider. Crafting exceptional marine voyages across the Arabian Gulf, Al Safliya Island, and the West Bay skyline.
          </p>
          <div class="footer-social-links">
            <a href="https://wa.me/${h}" target="_blank" rel="noopener" aria-label="WhatsApp" class="social-icon">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="tel:+${h}" aria-label="Call Us" class="social-icon">
              <i class="fa-solid fa-phone"></i>
            </a>
            <a href="https://maps.google.com/?q=Boat+rent+Qatar+dhow+Doha" target="_blank" rel="noopener" aria-label="Google Maps" class="social-icon">
              <i class="fa-solid fa-location-dot"></i>
            </a>
          </div>
        </div>

        <!-- Quick 5 Pages Navigation -->
        <div class="footer-col">
          <h4 class="footer-heading">Explore Pages</h4>
          <ul class="footer-links-list">
            <li><a href="#home"><i class="fa-solid fa-chevron-right"></i> Home Overview</a></li>
            <li><a href="#fleet"><i class="fa-solid fa-chevron-right"></i> Our Luxury Fleet</a></li>
            <li><a href="#tours"><i class="fa-solid fa-chevron-right"></i> Tours & Activities</a></li>
            <li><a href="#gallery"><i class="fa-solid fa-chevron-right"></i> Lifestyle Gallery</a></li>
            <li><a href="#contact"><i class="fa-solid fa-chevron-right"></i> Contact & Reservations</a></li>
            <li><a href="#faq"><i class="fa-solid fa-chevron-right"></i> Guest FAQs</a></li>
          </ul>
        </div>

        <!-- Featured Tours Column (matching screenshot) -->
        <div class="footer-col">
          <h4 class="footer-heading">Top Experiences</h4>
          <ul class="footer-links-list">
            <li><a href="#tours"><i class="fa-solid fa-chevron-right"></i> Al Safliya Island Tour</a></li>
            <li><a href="#tours"><i class="fa-solid fa-chevron-right"></i> Qatar Skyline Sunset Cruise</a></li>
            <li><a href="#tours"><i class="fa-solid fa-chevron-right"></i> Deep Sea Fishing Expeditions</a></li>
            <li><a href="#tours"><i class="fa-solid fa-chevron-right"></i> Swimming & Water Jumping</a></li>
            <li><a href="#tours"><i class="fa-solid fa-chevron-right"></i> Birthday & VIP Occasions</a></li>
            <li><a href="#tours"><i class="fa-solid fa-chevron-right"></i> Dinner & Dining Dhow Cruise</a></li>
          </ul>
        </div>

        <!-- Contact & Boarding Column -->
        <div class="footer-col footer-contact-col">
          <h4 class="footer-heading">Marina Gate & Hotline</h4>
          <div class="footer-contact-item">
            <i class="fa-solid fa-location-dot"></i>
            <span>Doha Corniche Marina Promenade, Doha, Qatar</span>
          </div>
          <div class="footer-contact-item">
            <i class="fa-solid fa-phone"></i>
            <a href="tel:+${h}">${k}</a>
          </div>
          <div class="footer-contact-item">
            <i class="fa-brands fa-whatsapp"></i>
            <a href="https://wa.me/${h}" target="_blank" rel="noopener">${k} (Fast Response)</a>
          </div>
          <div class="footer-contact-item">
            <i class="fa-solid fa-clock"></i>
            <span>Open 24 Hours / 7 Days a Week</span>
          </div>
        </div>
      </div>

      <!-- Copyright & Bottom Credit -->
      <div class="footer-bottom-bar">
        <div class="footer-bottom-inner">
          <p>© ${t} Boat Rent Qatar Dhow (boatrentqatar.com). All rights reserved.</p>
          <div class="footer-bottom-badges">
            <span>Official Qatari Tourism Operator</span>
            <span>•</span>
            <span>100% Insured & Certified</span>
          </div>
        </div>
      </div>
    </footer>
  `}function _(){const t=encodeURIComponent("Hello Boat Rent Qatar Dhow, I am interested in Qatar Boat & Sea Tours. Please provide details about available tours, timings and booking options.");return`
    <!-- Sticky Luxury Mobile Bottom Action Bar (details.jpeg) -->
    <aside class="mobile-contact-bar" id="mobile-contact-bar" aria-label="Quick Contact Actions">
      <!-- WhatsApp -->
      <a href="https://wa.me/${h}?text=${t}" target="_blank" rel="noopener" class="bar-item bar-whatsapp" title="Chat on WhatsApp">
        <i class="fa-brands fa-whatsapp"></i>
        <span>WhatsApp</span>
      </a>

      <!-- Call Now -->
      <a href="tel:+${h}" class="bar-item bar-call" title="Call Now">
        <i class="fa-solid fa-phone"></i>
        <span>Call Now</span>
      </a>

      <!-- Book Tour -->
      <button type="button" class="bar-item bar-book open-booking-modal" title="Book a Tour">
        <i class="fa-solid fa-calendar-check"></i>
        <span>Book Tour</span>
      </button>

      <!-- Tours Popup Trigger -->
      <button type="button" id="open-tours-popup-btn" class="bar-item bar-tours" title="Browse Tours">
        <i class="fa-solid fa-ship"></i>
        <span>Tours</span>
      </button>
    </aside>

    <!-- Tour Popup Drawer (details.jpeg) -->
    <div id="tours-popup-drawer" class="tours-popup-drawer" aria-hidden="true">
      <div class="tours-popup-backdrop" id="tours-popup-backdrop"></div>
      <div class="tours-popup-content">
        <!-- Header -->
        <div class="tours-popup-header">
          <div class="popup-title">
            <i class="fa-solid fa-ship"></i>
            <span>Boat Rent Qatar Dhow</span>
          </div>
          <button id="close-tours-popup-btn" class="popup-close-btn" aria-label="Close Tours Menu">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <!-- Body -->
        <div class="tours-popup-body">
          <p class="popup-intro">
            Looking for an exciting boat or dhow experience in Qatar? Select your preferred tour or chat with Boat Rent Qatar Dhow on WhatsApp:
          </p>

          <div class="service-list">
            <a href="#tours" class="service-item select-tour-close" data-tour="Qatar Skyline & Sunset Cruise">
              <span class="service-icon">🌆</span>
              <span class="service-text">Qatar Skyline View</span>
              <i class="fa-solid fa-chevron-right"></i>
            </a>
            <a href="#tours" class="service-item select-tour-close" data-tour="Al Safliya Island Tour">
              <span class="service-icon">🏝️</span>
              <span class="service-text">Al Safliya Island Tour</span>
              <i class="fa-solid fa-chevron-right"></i>
            </a>
            <a href="#tours" class="service-item select-tour-close" data-tour="Deep Sea Fishing Tour">
              <span class="service-icon">🎣</span>
              <span class="service-text">Fishing Tour</span>
              <i class="fa-solid fa-chevron-right"></i>
            </a>
            <a href="#tours" class="service-item select-tour-close" data-tour="Dinner & Dining Dhow Cruise">
              <span class="service-icon">🍽️</span>
              <span class="service-text">Dinner Cruise</span>
              <i class="fa-solid fa-chevron-right"></i>
            </a>
            <a href="#tours" class="service-item select-tour-close" data-tour="Swimming & Water Jumping">
              <span class="service-icon">🏊</span>
              <span class="service-text">Swimming & Jumping</span>
              <i class="fa-solid fa-chevron-right"></i>
            </a>
            <a href="#tours" class="service-item select-tour-close" data-tour="Family & Group Tours">
              <span class="service-icon">👨‍👩‍👧</span>
              <span class="service-text">Family Boat Tour</span>
              <i class="fa-solid fa-chevron-right"></i>
            </a>
            <a href="#tours" class="service-item select-tour-close" data-tour="Birthday & Special Events">
              <span class="service-icon">🎂</span>
              <span class="service-text">Birthday & Special Events</span>
              <i class="fa-solid fa-chevron-right"></i>
            </a>
            <a href="#tours" class="service-item select-tour-close" data-tour="Sharing & Private Tours">
              <span class="service-icon">🚤</span>
              <span class="service-text">Private & Sharing Tours</span>
              <i class="fa-solid fa-chevron-right"></i>
            </a>
          </div>

          <div class="location-text">
            <i class="fa-solid fa-location-dot"></i>
            <span>Qatar Sea & Boat Tour Experiences • Doha Corniche</span>
          </div>

          <a href="${j("Qatar Boat & Sea Tours")}" target="_blank" rel="noopener" class="popup-whatsapp-btn">
            <i class="fa-brands fa-whatsapp"></i>
            <span>Chat on WhatsApp (${k})</span>
          </a>
        </div>
      </div>
    </div>
  `}function J(){const t=document.getElementById("open-tours-popup-btn"),a=document.getElementById("close-tours-popup-btn"),e=document.getElementById("tours-popup-backdrop"),n=document.getElementById("tours-popup-drawer"),i=document.querySelectorAll(".select-tour-close");function s(){n==null||n.classList.add("is-visible"),n==null||n.setAttribute("aria-hidden","false")}function o(){n==null||n.classList.remove("is-visible"),n==null||n.setAttribute("aria-hidden","true")}t==null||t.addEventListener("click",g=>{g.preventDefault(),s()}),a==null||a.addEventListener("click",g=>{g.preventDefault(),o()}),e==null||e.addEventListener("click",()=>{o()}),i.forEach(g=>{g.addEventListener("click",()=>{o()})})}function X(t="ocean-hero-canvas"){const a=document.getElementById(t);if(!a)return;const e=a.getContext("2d");let n,i=0,s=0,o=0,g=.5,c=.5;function p(){const d=a.parentElement;i=a.width=d?d.clientWidth:window.innerWidth,s=a.height=d?d.clientHeight:window.innerHeight}p(),window.addEventListener("resize",p,{passive:!0}),window.addEventListener("mousemove",d=>{g=d.clientX/window.innerWidth,c=d.clientY/window.innerHeight},{passive:!0});const w=45,m=[];for(let d=0;d<w;d++)m.push({x:Math.random()*(i||1200),y:Math.random()*(s||800),radius:Math.random()*2+.8,speedY:Math.random()*.4+.15,speedX:(Math.random()-.5)*.3,alpha:Math.random()*.5+.2});function r(){e.clearRect(0,0,i,s),e.save(),e.beginPath(),e.moveTo(0,s);for(let f=0;f<=i;f+=15){const u=s*.72+Math.sin(f*.003+o*.8+g)*22+Math.cos(f*.007+o*.5)*12;e.lineTo(f,u)}e.lineTo(i,s),e.closePath();const d=e.createLinearGradient(0,s*.6,0,s);d.addColorStop(0,"rgba(6, 182, 212, 0.08)"),d.addColorStop(1,"rgba(8, 47, 73, 0.45)"),e.fillStyle=d,e.fill(),e.restore(),e.save(),e.beginPath(),e.moveTo(0,s);for(let f=0;f<=i;f+=20){const u=s*.78+Math.sin(f*.004-o*.6+c*.5)*18+Math.cos(f*.009+o*.7)*10;e.lineTo(f,u)}e.lineTo(i,s),e.closePath();const S=e.createLinearGradient(0,s*.7,0,s);S.addColorStop(0,"rgba(34, 211, 238, 0.12)"),S.addColorStop(1,"rgba(6, 26, 46, 0.65)"),e.fillStyle=S,e.fill(),e.restore(),e.save();for(let f=0;f<m.length;f++){const u=m[f];u.y-=u.speedY,u.x+=u.speedX,u.y<0&&(u.y=s+10,u.x=Math.random()*i),u.x<0&&(u.x=i),u.x>i&&(u.x=0),e.beginPath(),e.arc(u.x,u.y,u.radius,0,Math.PI*2),e.fillStyle=`rgba(34, 211, 238, ${u.alpha*(.6+Math.sin(o+f)*.4)})`,e.shadowBlur=8,e.shadowColor="rgba(6, 182, 212, 0.5)",e.fill()}e.restore(),o+=.02,n=requestAnimationFrame(r)}return r(),()=>{window.removeEventListener("resize",p),n&&cancelAnimationFrame(n)}}function I(){const t=document.getElementById("app");t&&(t.innerHTML=`
    ${P()}
    <main class="main-content-flow">
      ${$()}
      ${R()}
      ${F()}
      ${O()}
      ${V()}
      ${U()}
    </main>
    ${K()}
    ${_()}
  `,M(),G(),H(),N(),z(),Y(),J(),X("ocean-hero-canvas"),Z(),ee())}function Z(){const t=document.querySelectorAll("section[id]"),a=document.querySelectorAll(".desktop-nav .nav-link, .mobile-nav-item");function e(){const n=window.pageYOffset||document.documentElement.scrollTop;t.forEach(i=>{const s=i.offsetHeight,o=i.offsetTop-140,g=i.getAttribute("id");n>o&&n<=o+s&&a.forEach(c=>{c.getAttribute("href")===`#${g}`?c.classList.add("active"):c.classList.remove("active")})})}window.addEventListener("scroll",e,{passive:!0})}function ee(){const t=document.querySelectorAll(".fleet-card, .tour-card, .gallery-item-card, .review-card, .booking-calculator-card, .contact-info-card, .comparison-table"),a=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting&&(n.target.classList.add("reveal-active"),a.unobserve(n.target))})},{threshold:.12,rootMargin:"0px 0px -50px 0px"});t.forEach(e=>{e.classList.add("reveal-pending"),a.observe(e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",I):I();
