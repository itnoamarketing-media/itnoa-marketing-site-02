'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const words = ['attention', 'qualified leads', 'brand authority', 'market momentum'];

const services = [
  ['Content Creation', 'Cinematic short-form content that makes your business look premium before customers ever contact you.'],
  ['Paid Advertising', 'Campaigns built around clear offers, qualified leads, and local market visibility — not random boosted posts.'],
  ['Brand Positioning', 'We sharpen how your business is perceived so customers see you as the obvious better choice.'],
  ['Social Media Management', 'Consistent posting, stronger messaging, and daily presence without wasting your time.'],
  ['Video Production', 'Reels, ads, interviews, and proof-driven visuals that separate you from low-level competitors.'],
  ['Local Growth Strategy', 'Built for high-value California businesses where one new client can be worth serious money.'],
];

const painCards = [
  ['Weak Branding', 'Customers judge before they call. If you look average, you get treated average.'],
  ['Random Content', 'Posting without positioning creates noise, not demand.'],
  ['Invisible Online', 'If people do not see you first, your competitor gets the conversation.'],
];

const industries = ['Med Spas', 'Dental Clinics', 'Roofing', 'Law Firms', 'Real Estate', 'Luxury Gyms', 'Auto Services', 'Construction'];

const process = [
  ['01', 'Diagnose', 'We find why attention is leaking and where competitors are winning.'],
  ['02', 'Position', 'We sharpen the message so customers know why you are the better choice.'],
  ['03', 'Create', 'We build premium content, video, landing sections, and offer assets.'],
  ['04', 'Launch', 'We publish, test, improve, and turn attention into conversations.'],
];

const proof = [
  ['Before', 'Outdated presence, inconsistent posting, weak offer clarity.'],
  ['After', 'Premium positioning, stronger visuals, cleaner conversion path.'],
  ['Outcome', 'More trust before the call. Better first impression. More serious leads.'],
];

const faqs = [
  ['Who is this for?', 'High-value local businesses that can make strong ROI from better attention, stronger positioning, and qualified customer conversations.'],
  ['Do you only work in California?', 'California is the home base, but the strategy can apply anywhere. The local angle helps us speak directly to competitive service markets.'],
  ['Can I add my own videos?', 'Yes. The site is built with video-ready blocks for hero clips, reels, client showcases, interviews, and proof videos.'],
  ['Is this just social media posting?', 'No. Posting is one piece. The real work is positioning, visual authority, attention, offer clarity, and conversion flow.'],
];

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Page() {
  const [wordIndex, setWordIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [openFaq, setOpenFaq] = useState(0);
  const doubledIndustries = useMemo(() => [...industries, ...industries], []);

  useEffect(() => {
    const current = words[wordIndex];
    let i = 0;
    const timer = setInterval(() => {
      setTyped(current.slice(0, i + 1));
      i += 1;
      if (i === current.length) {
        clearInterval(timer);
        setTimeout(() => {
          setTyped('');
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 1150);
      }
    }, 70);
    return () => clearInterval(timer);
  }, [wordIndex]);

  return (
    <main className="site">
      <nav className="nav">
        <a href="#top" className="brand"><img src="/itnoa-horizontal.png" alt="ITNOA Marketing" /></a>
        <div className="navLinks">
          <a href="#problem">Problem</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#showcase">Video</a>
          <a href="#cta" className="navCta">Book Call</a>
        </div>
      </nav>

      <section id="top" className="hero sectionPad">
        <div className="noise" />
        <div className="gridGlow" />
        <motion.div className="orb orbOne" animate={{ y: [0, 35, 0], opacity: [0.35, 0.75, 0.35] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="orb orbTwo" animate={{ y: [0, -30, 0], opacity: [0.2, 0.55, 0.2] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />

        <div className="heroGrid">
          <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="heroCopy">
            <div className="eyebrow"><span className="ping" /> California-Based Marketing Agency</div>
            <h1>Your competitors are taking clients you should already own.</h1>
            <p className="lead">Most businesses do not lose because they are bad. They lose because nobody sees them before the competition.</p>
            <div className="typing">We build <span>{typed}</span><b>|</b></div>
            <div className="buttonRow">
              <a href="#cta" className="primaryBtn">Book Strategy Call <span>→</span></a>
              <a href="#showcase" className="ghostBtn">See Video Blocks</a>
            </div>
            <div className="microProof">
              <span>Content Strategy</span><i /> <span>Paid Ads</span><i /> <span>Brand Positioning</span><i /> <span>Video Production</span>
            </div>
          </motion.div>

          <motion.div className="heroVisual" initial={{ opacity: 0, scale: 0.92, y: 25 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }}>
            <div className="dashboardMock">
              <div className="dashTop"><span /><span /><span /></div>
              <motion.img src="/itnoa-icon.png" alt="ITNOA growth icon" animate={{ y: [0, -16, 0], rotate: [0, 1.5, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }} />
              <div className="metricLine"><strong>Attention Index</strong><em>+47%</em></div>
              <div className="barSet"><i /><i /><i /><i /></div>
            </div>
            <motion.div className="floatCard problemFloat" animate={{ y: [0, 16, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
              <small>Problem</small><strong>Invisible Online</strong>
            </motion.div>
            <motion.div className="floatCard resultFloat" animate={{ y: [0, -18, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
              <small>Result</small><strong>More Attention</strong>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="marqueeWrap" aria-label="High-value industries">
        <div className="marqueeTrack">
          {doubledIndustries.map((item, i) => <span key={`${item}-${i}`}>{item}</span>)}
        </div>
      </section>

      <section id="problem" className="problem sectionPad">
        <div className="split">
          <Reveal>
            <p className="label">The Problem</p>
            <h2>Good businesses are losing to better marketing.</h2>
          </Reveal>
          <Reveal delay={0.12} className="bodyText">
            <p>You already provide a solid service.</p>
            <p>But if your business looks outdated, invisible, or inconsistent online, customers assume your competitors are the better option.</p>
            <p className="punch">Even when they are not.</p>
          </Reveal>
        </div>
      </section>

      <section className="agitate sectionPad">
        <Reveal className="centerBlock">
          <p className="label">Attention Wins</p>
          <h2>Attention is the new currency.</h2>
          <p>Most companies waste money on random ads, inconsistent posting, and agencies with no real positioning strategy. Meanwhile, their competitors dominate attention daily.</p>
        </Reveal>
        <div className="painGrid">
          {painCards.map(([title, desc], i) => (
            <motion.div className="painCard" key={title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -12, scale: 1.02 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="cardDot" />
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="services" className="services sectionPad">
        <Reveal className="centerBlock narrow">
          <p className="label">Services</p>
          <h2>Marketing people actually remember.</h2>
        </Reveal>
        <div className="serviceGrid">
          {services.map(([title, desc], i) => (
            <motion.article className="serviceCard" key={title} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -14 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
              <div className="shine" />
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="process" className="process sectionPad">
        <Reveal className="centerBlock narrow">
          <p className="label">How We Work</p>
          <h2>Simple system. Stronger perception.</h2>
          <p>No random marketing chaos. We diagnose the leak, sharpen the message, create the assets, then launch with intent.</p>
        </Reveal>
        <div className="processGrid">
          {process.map(([num, title, desc], i) => (
            <Reveal className="processStep" delay={i * 0.08} key={title}>
              <span>{num}</span><h3>{title}</h3><p>{desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="showcase" className="showcase sectionPad">
        <Reveal className="centerBlock narrow">
          <p className="label">Video Ready</p>
          <h2>Your videos go here.</h2>
          <p>Drop in hero videos, reels, client work, cinematic edits, interviews, ads, and proof clips.</p>
        </Reveal>
        <div className="videoGrid">
          {['Hero Reel', 'Client Showcase'].map((label) => (
            <motion.div className="videoCard" key={label} whileHover={{ scale: 1.025 }}>
              <div className="videoGlow" />
              <div className="play">▶</div>
              <strong>{label}</strong>
              <small>Replace this block with your MP4, YouTube embed, or reel clip.</small>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="proof sectionPad">
        <Reveal className="centerBlock narrow">
          <p className="label">Before / After</p>
          <h2>The goal is not looking busy. The goal is looking chosen.</h2>
        </Reveal>
        <div className="proofGrid">
          {proof.map(([title, desc], i) => (
            <Reveal className="proofCard" delay={i * 0.08} key={title}><span>{title}</span><p>{desc}</p></Reveal>
          ))}
        </div>
      </section>

      <section id="why" className="why sectionPad">
        <Reveal className="centerBlock narrow">
          <p className="label">Why ITNOA</p>
          <h2>Built for businesses that expect more.</h2>
        </Reveal>
        <div className="whyGrid">
          {['Modern premium positioning', 'Fast communication', 'Content built for attention', 'California market understanding', 'Conversion-focused strategy', 'Visual identity that stands out'].map((item, i) => (
            <motion.div className="whyItem" key={item} initial={{ opacity: 0, x: i % 2 ? 25 : -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}><span>✓</span>{item}</motion.div>
          ))}
        </div>
      </section>

      <section className="faq sectionPad">
        <Reveal className="centerBlock narrow">
          <p className="label">FAQ</p>
          <h2>Clear answers before the call.</h2>
        </Reveal>
        <div className="faqList">
          {faqs.map(([q, a], i) => (
            <button className={`faqItem ${openFaq === i ? 'active' : ''}`} key={q} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
              <strong>{q}<span>{openFaq === i ? '−' : '+'}</span></strong>
              <p>{a}</p>
            </button>
          ))}
        </div>
      </section>

      <section id="cta" className="finalCta sectionPad">
        <motion.div className="ctaGlow" animate={{ opacity: [0.25, 0.7, 0.25] }} transition={{ duration: 5, repeat: Infinity }} />
        <div className="centerBlock ctaContent">
          <h2>If your business looks invisible online, <span>your competitors already won.</span></h2>
          <p>Let’s build a brand people notice immediately.</p>
          <div className="ctaButtons">
            <a className="primaryBtn big" href="mailto:hello@itnoamarketing.com">Start The Conversation <span>→</span></a>
            <a className="ghostBtn big" href="#showcase">Add Video Proof</a>
          </div>
        </div>
      </section>
    </main>
  );
}
