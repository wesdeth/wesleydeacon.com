(() => {
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- data ---------- */
const sk = (w, c = 'rgba(0,0,0,.09)', h = 1.3) => `<div style="height:${h}cqw;width:${w}%;border-radius:1cqw;background:${c};margin:0 0 1.4cqw"></div>`;

const CASES = [
{
  id: 'founders', icon: 'doma.png', org: 'D3 · Doma Protocol', year: '2026',
  title: 'Building two founder voices on X',
  frame: '#d9443a', scr: '#0f0f10',
  mock: `
  <div class="m" style="color:#eee;padding:5cqw 6cqw">
    <div style="display:flex;justify-content:space-between;align-items:flex-start">
      <div>
        <div style="font-size:2.1cqw;color:#8b8b8b;letter-spacing:.08em;text-transform:uppercase">Founder X impressions</div>
        <div class="big" style="font-size:11cqw;color:#fff;margin-top:1cqw">+429%</div>
      </div>
      <svg viewBox="0 0 120 50" style="width:30cqw;margin-top:2cqw"><path d="M2 46 C 25 44, 40 40, 55 34 S 85 18, 118 4" fill="none" stroke="#ff6b57" stroke-width="2.4" stroke-linecap="round"/><path d="M2 46 C 25 44, 40 40, 55 34 S 85 18, 118 4 V50 H2Z" fill="url(#g1)" opacity=".5"/><defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff6b57"/><stop offset="1" stop-color="#ff6b57" stop-opacity="0"/></linearGradient></defs></svg>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:2.4cqw;margin-top:5cqw">
      ${['Michael Ho|The market analyst|#4c8dff','Fred Hsu|The domain veteran|#ffb547'].map(s => { const [n, l, c] = s.split('|'); return `
      <div style="background:#1b1b1d;border:1px solid #2a2a2d;border-radius:2cqw;padding:2.6cqw">
        <div style="display:flex;gap:1.6cqw;align-items:center;margin-bottom:2cqw">
          <div style="width:5cqw;height:5cqw;border-radius:50%;background:${c}"></div>
          <div><div style="font-size:2.3cqw;font-weight:600">${n}</div><div style="font-size:1.9cqw;color:#8b8b8b">${l}</div></div>
        </div>
        ${sk(100, '#2e2e31')}${sk(86, '#2e2e31')}${sk(62, '#2e2e31')}
      </div>`; }).join('')}
    </div>
  </div>`,
  tldr: 'I gave each of D3\'s co-founders a distinct lane on X and LinkedIn, then backed them with AI voice profiles and agents that surfaced the right conversations to join. Founder X impressions grew 429%.',
  brief: 'Doma turns traditional domain names into onchain assets that can be traded. The idea is new, and the people we needed to reach trust individuals and peers more than brand accounts. Our co-founders, Michael Ho and Fred Hsu, have decades of domain and market experience, but their accounts posted too rarely and too generically to show it.',
  audience: ['<b>Domain investors.</b> Long-time owners who know the asset, follow industry voices closely and are skeptical of crypto.', '<b>Crypto and RWA traders.</b> People who need a clear reason to treat domains as a serious asset class.', '<b>Partners, press and event audiences.</b> People who check a founder\'s feed before a meeting, an AMA or a conference.'],
  approach: ['<b>Two lanes.</b> Michael became the market analyst: data, real-world-asset comparisons and why domains lack price discovery, exits and partial ownership. Fred became the domain veteran: first-hand stories from early domain companies and plain comparisons to real estate.', '<b>A weekly mix.</b> Michael posted three to four originals a week, including a data post and a comparison post. Fred\'s week centered on operator stories, plus a contrast post, a prediction, a personal post and clips from each appearance.', '<b>Reply finders.</b> Agents scanned curated lists of priority accounts in domains, RWAs, DeFi and AI, scored posts for topic fit, evidence and risk, and surfaced only the strongest reply opportunities with suggested angles.', '<b>Team alerts.</b> A shared Telegram group got every new founder post for amplification, flags on critical mentions and a twice-daily check against a three-replies-a-day goal.', '<b>Humans hit post.</b> The agents only suggested and alerted. Every public reply stayed a human decision.'],
  stats: [['+429%', 'founder X impressions'], ['4.60%', 'engagement on originals (sampled week)'], ['1.02%', 'engagement on replies, same week']],
  links: [['Read the full case study', 'https://exclusive-garage-18a.notion.site/Case-Study-2-Building-Two-Founder-Voices-on-X-40116635fd7c80f8b018d1e4e039914b']],
  note: 'Results are from platform analytics I tracked while in the role.'
},
{
  id: 'ens-edu', icon: 'ens.png', org: 'ENS Labs', year: '2025',
  title: 'Turning support tickets into a content engine',
  frame: '#3889ff', scr: '#ffffff',
  mock: `
  <div class="m" style="padding:5cqw 6cqw;display:grid;grid-template-columns:1fr 1.05fr;gap:4cqw">
    <div>
      <div style="font-size:2.1cqw;color:#8a8f98;letter-spacing:.08em;text-transform:uppercase;margin-bottom:2cqw">Support inbox</div>
      ${['How do I renew my name?', 'Changing the owner', 'Set a primary name', 'Registering a .eth'].map((q, i) => `
      <div style="display:flex;align-items:center;gap:1.6cqw;padding:1.8cqw 2cqw;margin-bottom:1.4cqw;border-radius:1.6cqw;background:${i === 0 ? '#eaf2ff' : '#f5f6f8'};font-size:2.3cqw;color:#1e2a3b">
        <span style="width:1.6cqw;height:1.6cqw;border-radius:50%;background:${i === 0 ? '#3889ff' : '#c7ccd4'};flex:none"></span>${q}</div>`).join('')}
    </div>
    <div style="border-left:1px dashed #d9dde3;padding-left:4cqw">
      <div style="font-size:2.1cqw;color:#8a8f98;letter-spacing:.08em;text-transform:uppercase;margin-bottom:1.2cqw">Q3 .eth renewals</div>
      <div class="big" style="font-size:8.6cqw;color:#0b1a33">90,204</div>
      <div style="display:inline-block;margin-top:1.6cqw;font-size:2.3cqw;font-weight:600;color:#0a7d3d;background:#e3f6ea;padding:.6cqw 1.6cqw;border-radius:9cqw">+45% vs Q2</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.6cqw;margin-top:3.4cqw">
        <div style="background:#f5f6f8;border-radius:1.6cqw;padding:1.8cqw"><div class="big" style="font-size:4.4cqw">15</div><div style="font-size:1.9cqw;color:#6b7280">tutorials</div></div>
        <div style="background:#f5f6f8;border-radius:1.6cqw;padding:1.8cqw"><div class="big" style="font-size:4.4cqw">16</div><div style="font-size:1.9cqw;color:#6b7280">blog posts</div></div>
      </div>
    </div>
  </div>`,
  tldr: 'Nearly half of ENS support tickets were basic how-to questions. I rebuilt the content strategy around them, and in Q3 renewals rose 45% while video views on X rose 67%.',
  brief: 'Users kept getting stuck on core actions like registering, renewing and changing owners. The growth team needed scannable, visual education and real examples of ENS working inside partner products, plus a content calendar that actually ran.',
  audience: ['<b>New and existing .eth holders</b> who needed to finish a task, not read documentation.', '<b>Builders and partners</b> looking for proof that ENS integrations deliver value.'],
  approach: ['<b>Owned the whole channel.</b> I led marketing and social, built the daily content calendar, and created all of the content, including event coverage.', '<b>Tickets as the calendar.</b> I reworked the historical strategy so the most common support questions became the next tutorials, threads and short videos.', '<b>Production.</b> Wrote and oversaw 16 new blog posts and 15 tutorials aimed at the biggest friction points.', '<b>Ecosystem proof.</b> Helped launch five integration case studies, including Base, Uniswap, GoDaddy and PayPal. Those alone drove 8,000+ visits to the ENS ecosystem page.', '<b>AI-assisted workflow.</b> Used generative AI for outlines and first drafts so the team could ship faster without lowering the bar.'],
  stats: [['+45%', '.eth renewals, Q3 vs Q2'], ['+67%', 'video views on X'], ['+12.1%', '@ensdomains followers in 3 months'], ['8,000+', 'visits from partner case studies']],
  links: [['Read the full case study', 'https://exclusive-garage-18a.notion.site/Case-Study-Scaling-ENS-Adoption-Through-AI-Native-Content-Education-40116635fd7c80bba6eaf64c4afa0b20'], ['ENS × Base case study', 'https://ens.domains/ecosystem/base']],
  note: 'Renewal counts come from ENS onchain data. Social numbers come from X analytics.'
},
{
  id: 'paypal', icon: 'paypal.png', org: 'ENS Labs', year: '2024',
  title: 'Launching ENS on PayPal and Venmo',
  frame: '#0d7cff', scr: '#eef5ff',
  mock: `
  <div class="m" style="display:flex;align-items:flex-end;justify-content:center;gap:5cqw;padding:0 6cqw">
    <div style="width:30cqw;height:88%;background:#0b0b0c;border-radius:4cqw 4cqw 0 0;padding:1.6cqw 1.6cqw 0;box-shadow:0 2cqw 5cqw -2cqw rgba(0,40,120,.5)">
      <div style="height:100%;border-radius:3cqw 3cqw 0 0;background:linear-gradient(160deg,#3d8bff,#0b5fd8 60%,#08367d);position:relative;overflow:hidden">
        <div style="position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);width:9cqw;height:9cqw;border-radius:50%;background:rgba(255,255,255,.95);display:grid;place-items:center"><svg viewBox="0 0 24 24" style="width:4cqw;margin-left:.6cqw" fill="#0b5fd8"><path d="M6 4l14 8-14 8z"/></svg></div>
        <div style="position:absolute;left:2.4cqw;right:2.4cqw;bottom:3cqw;color:#fff">
          <div style="font-size:2.6cqw;font-weight:600;line-height:1.2">Send to names, not addresses</div>
          <div style="font-size:1.9cqw;opacity:.8;margin-top:.8cqw">@ensdomains</div>
        </div>
      </div>
    </div>
    <div style="align-self:center;margin-bottom:6cqw">
      <div style="display:flex;gap:1.4cqw;margin-bottom:2.6cqw"><img src="assets/paypal.png" style="width:5.4cqw;border-radius:1.2cqw" alt=""><img src="assets/venmo.png" style="width:5.4cqw;border-radius:1.2cqw" alt=""><img src="assets/ens.png" style="width:5.4cqw;border-radius:1.2cqw" alt=""></div>
      <div class="big" style="font-size:9.6cqw;color:#08214d">447.3K</div>
      <div style="font-size:2.3cqw;color:#4b5b75;margin-top:.8cqw">views on the launch video</div>
      <div style="display:flex;gap:3cqw;margin-top:2.6cqw;font-size:2.2cqw;color:#08214d"><span><b>2.2K</b> likes</span><span><b>653</b> reposts</span></div>
    </div>
  </div>`,
  tldr: 'I owned the marketing behind ENS showing up inside PayPal and Venmo: co-marketing with both PR teams, the official launch video, paid-social testing and the follow-up content that kept it going.',
  brief: 'For the first time, mainstream payment users could send crypto to a readable name instead of a wallet address. The job was to explain that to people who had never heard of ENS, and to get existing holders using their names in everyday payment apps.',
  audience: ['<b>PayPal and Venmo users</b> new to crypto names.', '<b>Existing ENS holders</b> who could now use their name somewhere familiar.', '<b>Crypto and fintech press</b> covering the integration.'],
  approach: ['<b>Co-marketing.</b> Worked alongside PayPal\'s and Venmo\'s PR teams on draft announcements, press copy and coverage.', '<b>The launch video.</b> Produced the official ENS announcement video and short tutorial demos.', '<b>Paid testing.</b> Ran the paid campaign across social networks, A/B tested reels and ads, and shifted budget toward the winners.', '<b>Keep it alive.</b> Followed launch with short-form Venmo content so the story did not end on day one.'],
  stats: [['447.3K', 'launch video views'], ['2.2K', 'likes'], ['653', 'reposts']],
  links: [['Watch the launch video', 'https://x.com/ensdomains/status/1833536140529570039'], ['Venmo follow-up', 'https://x.com/ensdomains/status/1903107410304417919']],
  note: 'Engagement counts were read from the public post. They measure attention, not attributed sign-ups.'
},
{
  id: 'onair', icon: 'doma.png', org: 'D3 · Doma Protocol', year: '2026',
  title: 'Doma OnAir, a live show for domain investors',
  frame: '#0e2a2c', scr: '#05080a',
  mock: `
  <div class="m" style="background:linear-gradient(135deg,#0a1416,#10272a)">
    <div style="position:absolute;left:4cqw;top:4cqw;display:flex;gap:1.4cqw;align-items:center;font-size:2cqw;font-weight:600;color:#fff;letter-spacing:.06em">
      <span style="background:#e5303b;padding:.5cqw 1.4cqw;border-radius:.8cqw">LIVE</span><span style="opacity:.6">X · YOUTUBE</span></div>
    <div style="position:absolute;left:4cqw;right:4cqw;top:12cqw;bottom:17cqw;display:grid;grid-template-columns:1fr 1fr;gap:2cqw">
      <div style="border-radius:2cqw;background:radial-gradient(circle at 50% 38%,#3a5d61 0 13%,transparent 13.5%),radial-gradient(ellipse at 50% 92%,#3a5d61 0 32%,transparent 32.5%),#16302f"></div>
      <div style="border-radius:2cqw;background:radial-gradient(circle at 50% 38%,#4b6b55 0 13%,transparent 13.5%),radial-gradient(ellipse at 50% 92%,#4b6b55 0 32%,transparent 32.5%),#1b2f24"></div>
    </div>
    <div style="position:absolute;left:4cqw;right:4cqw;bottom:5cqw;display:flex;align-items:stretch;font-size:2.4cqw;border-radius:.6cqw;overflow:hidden">
      <div style="background:#2ee6d6;color:#032;font-weight:700;padding:1.3cqw 2cqw;letter-spacing:.04em">DOMA ONAIR</div>
      <div style="background:rgba(255,255,255,.95);color:#0a1416;padding:1.3cqw 2cqw;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">Applications.com: a category-defining DomainFi launch</div>
    </div>
  </div>`,
  tldr: 'I created and ran Doma\'s own live show end to end. It reached 10,000+ listeners across 11 episodes and became a regular place for domain investors to hear from people buying, building and launching.',
  brief: 'We had no show of our own where domain investors could hear from peers. Interviews in this space tend to be formal and slow. I wanted something with energy that also did real work for launches.',
  audience: ['<b>Domain investors and registrars</b> who wanted to hear from operators they already respect.', '<b>Crypto traders</b> following premium domain launches.'],
  approach: ['<b>Show format.</b> StreamYard-style live production with branded lower-thirds, a host MC and segments built to feel like a sports show, not a webinar.', '<b>Run of show for every episode.</b> I wrote each one: guest story first, protocol mechanics second, plain-English segments for newer viewers.', '<b>Launch tie-ins.</b> Episodes built toward real launches like smoothie.com and Applications.com, and covered registrar trends and smart contract security with partners like Halborn.', '<b>Distribution loop.</b> Every recording went to YouTube in full, then into clips and Shorts, founder posts, partner tags, a recap blog and a seven-day performance report.'],
  stats: [['10,000+', 'listeners'], ['11', 'episodes'], ['7 day', 'post-show report cadence']],
  links: [['Read the full case study', 'https://exclusive-garage-18a.notion.site/Case-Study-2-Building-Two-Founder-Voices-on-X-40116635fd7c80f8b018d1e4e039914b']],
  note: ''
},
{
  id: 'brand', icon: 'doma.png', org: 'D3 · Doma Protocol', year: '2026',
  title: 'Doubling down on the Doma brand account',
  frame: '#efe9dc', scr: '#ffffff',
  mock: `
  <div class="m" style="padding:5cqw 6cqw">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3.4cqw">
      <div style="display:flex;gap:1.6cqw;align-items:center"><img src="assets/doma.png" style="width:5cqw;border-radius:1.2cqw" alt=""><div><div style="font-size:2.5cqw;font-weight:600">@domaprotocol</div><div style="font-size:1.9cqw;color:#888">Last 6 months vs prior</div></div></div>
      <div style="font-size:1.9cqw;color:#666;border:1px solid #e5e5e5;border-radius:9cqw;padding:.6cqw 1.8cqw">X Analytics</div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2cqw">
      ${[['Impressions', '1.55M', '+128%'], ['Engagements', '61.89K', '+87.9%'], ['Profile clicks', '14.96K', '+61.8%']].map(([a, b, c]) => `
      <div style="border:1px solid #ededed;border-radius:2cqw;padding:2.4cqw">
        <div style="font-size:1.9cqw;color:#888">${a}</div>
        <div class="big" style="font-size:5.4cqw;margin:1cqw 0 1.2cqw">${b}</div>
        <div style="font-size:2cqw;font-weight:600;color:#0a7d3d">${c}</div>
      </div>`).join('')}
    </div>
    <div style="display:flex;align-items:flex-end;gap:1.1cqw;height:13cqw;margin-top:3.4cqw">
      ${[22, 30, 26, 38, 34, 46, 41, 55, 50, 63, 58, 72, 68, 80, 77, 92].map((h, i) => `<div style="flex:1;height:${h}%;border-radius:.8cqw .8cqw 0 0;background:${i > 11 ? '#111' : '#e6e1d6'}"></div>`).join('')}
    </div>
  </div>`,
  tldr: 'Over six months I grew the Doma brand account on X to 1.55M impressions, up 128% on the prior period, with engagements up 87.9% and profile clicks up 61.8%.',
  brief: 'Doma\'s brand account had a large following but spoke mostly to its own community. Leadership wanted more reach with traders through partner channels, and a weekly rhythm that told the product story with live numbers instead of generic protocol language.',
  audience: ['<b>DeFi and RWA traders</b> reached through partner communities.', '<b>Web2 domain owners</b> who needed self-serve education.'],
  approach: ['<b>Doma Weekly.</b> A weekly pipeline that turned protocol activity and product updates into a blog post, an X thread, a LinkedIn version and short animated stat assets.', '<b>One idea per post.</b> Lead with the milestone, keep each post to a single claim, save links for the last post of a thread.', '<b>Founder first.</b> Founders broke news and the brand amplified, so founder feeds never turned into announcement channels.', '<b>Partner reach.</b> Co-marketing with partners like Solana and Base, plus launches such as Applications.com, put Doma in front of audiences outside its echo chamber.', '<b>Creator program.</b> Co-owned DOMAXX, Doma\'s creator and ambassador program, so the community could make educational content of its own.'],
  stats: [['1.55M', 'impressions, +128%'], ['61.89K', 'engagements, +87.9%'], ['14.96K', 'profile clicks, +61.8%']],
  links: [['Doma Weekly: Frontier launch', 'https://blog.doma.xyz/doma-weekly-frontier-launch-product-updates-and-steady-growth/']],
  note: 'Six-month X analytics compared with the preceding period.'
},
{
  id: 'applications', icon: 'doma.png', org: 'D3 · Doma Protocol', year: '2026', extra: true,
  title: 'Applications.com goes liquid',
  frame: '#f4c13d', scr: '#fffaf0',
  mock: `
  <div class="m" style="display:grid;place-items:center;text-align:center;padding:4cqw">
    <div>
      <div style="font-size:2.1cqw;letter-spacing:.14em;text-transform:uppercase;color:#a07a12">Now accepting applications</div>
      <div class="big" style="font-size:9.4cqw;margin:2cqw 0;color:#1d1606">applications.com</div>
      <div style="display:inline-flex;gap:2cqw;font-size:2.4cqw;color:#5a4a20">
        <span style="background:#fff;border:1px solid #f0e2bc;border-radius:9cqw;padding:.8cqw 2.2cqw"><b>$2.6M</b> premium domain</span>
        <span style="background:#1d1606;color:#ffd661;border-radius:9cqw;padding:.8cqw 2.2cqw">Every app needs a home</span>
      </div>
    </div>
  </div>`,
  tldr: 'I co-owned the launch of Applications.com, a $2.6M premium domain its owner Chad Folkening tokenized on Doma in August 2026.',
  brief: 'The launch had to land with two very different crowds: traditional domain investors who distrust crypto, and crypto traders who had never valued a domain.',
  audience: ['<b>Traditional domain investors</b> who care about history, comps and the owner.', '<b>Crypto traders</b> who care about the launch and the market.'],
  approach: ['<b>Story first.</b> I built the "applications going liquid" narrative so the domain\'s history and Chad\'s portfolio strategy came first and protocol mechanics came second.', '<b>Pre-launch mechanics.</b> "Every App Needs a Home" and "Now Accepting Applications" teasers, AI-era framing and nostalgia hooks built replies before the reveal.', '<b>Show tie-in.</b> Chad returned to Doma OnAir a week before launch to walk through how and why he bought the name.'],
  stats: [['$2.6M', 'premium domain'], ['Aug 2026', 'onchain launch']],
  links: [],
  note: ''
},
{
  id: 'agents', icon: 'telegram.png', org: 'Built for Doma', year: '2026', extra: true,
  title: 'Social alerts and reply agents',
  frame: '#1f2023', scr: '#17212b',
  mock: `
  <div class="m" style="padding:4cqw 6cqw;color:#e9eef3">
    <div style="display:flex;gap:1.6cqw;align-items:center;padding-bottom:2.4cqw;border-bottom:1px solid #22303d;margin-bottom:2.6cqw">
      <img src="assets/telegram.png" style="width:4.6cqw;border-radius:50%" alt=""><div><div style="font-size:2.4cqw;font-weight:600">Founder social alerts</div><div style="font-size:1.8cqw;color:#7d8b99">4 scheduled monitors</div></div></div>
    ${[['New founder post', 'Michael just posted. Amplify within the hour.', '#4c8dff'], ['Reply opportunity', 'Strong topic fit in an RWA thread. Suggested angle attached.', '#2ecc8f'], ['Reply goal check', 'Fred: 2 of 3 replies today.', '#ffb547']].map(([a, b, c]) => `
    <div style="background:#182533;border-radius:2cqw;padding:2cqw 2.4cqw;margin-bottom:1.8cqw;max-width:78%;border-left:.7cqw solid ${c}">
      <div style="font-size:2.1cqw;font-weight:600;color:${c}">${a}</div>
      <div style="font-size:2.2cqw;color:#cfd8e1;margin-top:.4cqw">${b}</div>
    </div>`).join('')}
  </div>`,
  tldr: 'A set of agents that watched X for Doma\'s founders and team, then pinged a shared Telegram group with posts to amplify, reply opportunities and goal checks.',
  brief: 'Founder growth depends on showing up in the right conversations every day. Doing that by hand across three executives was not sustainable.',
  audience: ['<b>Doma founders and execs</b> who needed fewer, better prompts.', '<b>The marketing team</b> who needed to amplify fast.'],
  approach: ['<b>Four independent monitors</b> for new founder posts, critical mentions, reply opportunities and reply-goal checks.', '<b>Conversation scanners</b> found active discussions on AI, blockchain and domains that did not mention Doma yet.', '<b>Daily news feed</b> of sourced market and domain news to anchor each founder\'s posts.', '<b>Suggest, never post.</b> Every reply stayed a human decision.'],
  stats: [['4', 'scheduled monitors'], ['3/day', 'reply goal per founder']],
  links: [],
  note: 'The example messages in the preview are illustrative.'
},
{
  id: 'viralghost', icon: 'github.png', org: 'Independent', year: '2026', extra: true,
  title: 'ViralGhost, an AI social manager in your voice',
  frame: '#6f55f2', scr: '#f7f6ff',
  mock: `
  <div class="m" style="padding:5cqw 6cqw">
    <div style="font-size:2.1cqw;color:#7c74a8;letter-spacing:.08em;text-transform:uppercase;margin-bottom:2.4cqw">This week's posts</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1.6cqw">
      ${[['Create', '#ebe7ff', '#5a43d6'], ['Review', '#fff3d6', '#9a6b00'], ['Approve', '#e3f6ea', '#0a7d3d'], ['Publish', '#111', '#fff']].map(([a, b, c], i) => `
      <div style="background:${b};border-radius:2cqw;padding:2cqw;min-height:22cqw">
        <div style="font-size:2.2cqw;font-weight:600;color:${c};margin-bottom:1.6cqw">${a}</div>
        ${sk(100, i === 3 ? '#333' : 'rgba(0,0,0,.1)', 1.1)}${sk(78, i === 3 ? '#333' : 'rgba(0,0,0,.1)', 1.1)}${sk(56, i === 3 ? '#333' : 'rgba(0,0,0,.1)', 1.1)}
      </div>`).join('')}
    </div>
    <div style="display:flex;justify-content:space-between;margin-top:3cqw;font-size:2.2cqw;color:#4a4470"><span>Voice profile: <b>Collision center owner</b></span><span><b>16</b> beta users</span></div>
  </div>`,
  tldr: 'A voice-first AI social manager I built with Next.js, Supabase and Claude. It learns from your past writing and edits, then drafts posts you would actually publish.',
  brief: 'Small businesses, especially collision centers and dealerships, know they should post but do not have the time. Generic AI copy does not sound like them, so they never hit publish.',
  audience: ['<b>Collision centers, dealerships and auto shops</b>, starting with owners my dad knows from the industry.'],
  approach: ['<b>Voice first.</b> Historical writing, business context and every correction feed later drafts.', '<b>Keep the human loop.</b> Create, review, approve, publish. Nothing goes out unapproved.', '<b>Reliable delivery.</b> Scheduling, queue workers and Instagram and Facebook publishing.', '<b>Cost discipline.</b> Cheaper models wherever quality holds up.'],
  stats: [['16', 'beta users'], ['4 step', 'approval flow']],
  links: [['GitHub', 'https://github.com/wesdeth']],
  note: ''
},
{
  id: 'capy', icon: 'capy.png', org: 'Capy.sc · @capythoughts', year: 'Now',
  title: 'Running social for Capy, an AI secrets manager',
  frame: '#121212', scr: '#0a0a0a',
  mock: `
  <div class="m" style="padding:4.4cqw 5.6cqw;color:#e7e7e7">
    <div style="background:#16181c;border:1px solid #2a2d33;border-radius:2.4cqw;padding:3cqw;max-width:74%">
      <div style="display:flex;gap:1.6cqw;align-items:center;margin-bottom:1.8cqw">
        <img src="assets/capy.png" style="width:5cqw;border-radius:50%" alt="">
        <div style="font-size:2.3cqw"><b>Capy</b> <span style="color:#71767b">@capythoughts</span></div>
      </div>
      <div style="font-size:3cqw;line-height:1.35;color:#fff">Sharing .env files is so 2019.</div>
      <div style="display:flex;gap:4cqw;margin-top:2cqw;font-size:2cqw;color:#71767b"><span>Reply</span><span>Repost</span><span>Like</span></div>
    </div>
    <div class="mono" style="margin-top:3.4cqw;font-size:2.3cqw;line-height:1.75;color:#d6d6d6">
      <div><span style="color:#7ee787">~/app</span> $ npm i -g @capysc/cli</div>
      <div style="color:#8b949e">STRIPE_KEY=<span style="color:#ffa657">capy:enc:9f2c…a71e</span></div>
    </div>
  </div>`,
  tldr: 'I run social and go-to-market for Capy, an agent-native secrets manager, starting from zero-follower brand accounts. The wedge: a leaked .env file no longer gives away usable secrets.',
  brief: 'AI agents now build and deploy apps, then stop to ask a human for a Stripe key. Capy fixes that step. The challenge on social was a launch-stage developer tool with no audience, entering a category full of enterprise players.',
  audience: ['<b>Vibe coders and indie hackers</b> shipping fast with AI tools.', '<b>Small AI-native engineering teams</b> still sharing .env files in Slack.'],
  approach: ['<b>Outcome-led positioning</b> instead of another broad secrets-manager pitch.', '<b>Founder-led distribution.</b> A week of useful replies from the founder before the brand starts broadcasting.', '<b>A 52-post launch calendar</b> across brand X, founder X and LinkedIn, plus one short-form video system cross-posted to YouTube, Instagram and TikTok.', '<b>The Leak Report.</b> A research franchise with one sourced statistic per asset, styled as dark editorial developer-security graphics.', '<b>Developer pain points first.</b> Posts attack insecure habits like pasting keys in Slack, not competitors, and every lesson returns to a direct install action.'],
  stats: [['0 → live', 'brand account built from scratch'], ['52', 'post launch calendar'], ['5', 'channels']],
  links: [['@capythoughts on X', 'https://x.com/capythoughts'], ['capy.sc', 'https://capy.sc']],
  note: 'In progress. I will add growth numbers once there is enough history to report.'
}];

const WRITING = [
  ['How Primary Names Work Today and What L2 Primary Names Fix', 'ENS blog', 'https://ens.domains/blog/post/l2-primary-names'],
  ['Case Study: Base', 'ENS ecosystem', 'https://ens.domains/ecosystem/base'],
  ['Doma Weekly: Frontier Launch, Product Updates and Steady Growth', 'Doma blog', 'https://blog.doma.xyz/doma-weekly-frontier-launch-product-updates-and-steady-growth/'],
  ['Case Study: Scaling ENS Adoption Through Content and Education', 'Notion', 'https://exclusive-garage-18a.notion.site/Case-Study-Scaling-ENS-Adoption-Through-AI-Native-Content-Education-40116635fd7c80bba6eaf64c4afa0b20'],
  ['Case Study: Building Two Founder Voices on X', 'Notion', 'https://exclusive-garage-18a.notion.site/Case-Study-2-Building-Two-Founder-Voices-on-X-40116635fd7c80f8b018d1e4e039914b']
];

const EXPERIENCE = [
  ['Part time Social & GTM Manager', 'Capy.sc', 'Brand and founder social for an AI secrets manager', 'Now'],
  ['Head of Social', 'D3 · Doma Protocol', 'X, LinkedIn, YouTube, founder voices, Doma OnAir, design team', '2025–26'],
  ['Head of Social & Marketing', 'ENS Labs', 'Led marketing and social: daily content calendar, all content, events, partner launches', 'Earlier'],
  ['GTM Specialist & Marketing Advisor', 'Asymmetry Finance', 'Ran the @asymmetryfin X account, positioning and global expansion', 'Mar–Aug 2024', 'https://x.com/asymmetryfin'],
  ['Head of Growth', 'Webacy', 'One of the first hires. Web3 security growth to 100K+ users', 'Earlier']
];

/* ---------- render ---------- */
const ORDER = ['founders', 'capy', 'brand', 'ens-edu', 'paypal', 'onair', 'applications', 'agents', 'viralghost'];
CASES.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id));
CASES.forEach((c, k) => { c.extra = k >= 6; });

const ACCOUNTS = [
  { t: 'company', name: 'ENS', handle: '@ensdomains', url: 'https://x.com/ensdomains', img: 'ens.png', pf: ['x', 'youtube'], role: 'Led marketing and social. Daily calendar, all content, events and launches.', stat: ['+12.1%', 'followers in 3 months'] },
  { t: 'company', name: 'Doma Protocol', handle: '@domaprotocol', url: 'https://x.com/domaprotocol', img: 'doma.png', pf: ['x', 'youtube'], role: 'Head of Social. Weekly threads, launches, Doma OnAir, LinkedIn and YouTube.', stat: ['1.55M', 'impressions in 6 months'] },
  { t: 'company', name: 'D3', handle: '@D3inc', url: 'https://x.com/D3inc', img: 'd3.png', pf: ['x'], role: 'Corporate voice for the company behind Doma. Partnerships and industry news.', stat: ['B2B', 'industry voice'] },
  { t: 'company', name: 'Webacy', handle: '@mywebacy', url: 'https://x.com/mywebacy', img: 'webacy.png', pf: ['x', 'youtube'], role: 'One of the first hires. Made Web3 security make sense to everyday users.', stat: ['100K+', 'product users'] },
  { t: 'company', name: 'Asymmetry', handle: '@asymmetryfin', url: 'https://x.com/asymmetryfin', img: 'asymmetry.png', pf: ['x'], role: 'GTM Specialist & Marketing Advisor. Ran the X account, positioning and global expansion.', stat: ['2024', 'Mar to Aug'] },
  { t: 'company', live: true, name: 'Capy', handle: '@capythoughts', url: 'https://x.com/capythoughts', img: 'capy.png', pf: ['x', 'youtube'], role: 'Part time Social & GTM Manager. Brand and founder social for an AI secrets manager.', stat: ['52', 'post launch calendar'] },
  { t: 'company', name: 'Doma OnAir', handle: 'Live show on X + YouTube', url: '#case-onair', caseId: 'onair', img: 'youtube.png', pf: ['x', 'youtube'], role: 'Created and produced it. Wrote every run of show.', stat: ['10,000+', 'listeners, 11 episodes'] },
  { t: 'people', name: 'Michael Ho', handle: '@mxchaelho', url: 'https://x.com/mxchaelho', initials: 'MH', av: '#3b6fe0', pf: ['x'], role: 'Ghostwrote as the market analyst. 3 to 4 originals a week.', stat: ['4.60%', 'engagement on originals'] },
  { t: 'people', name: 'Fred Hsu', handle: '@heyheyfred', url: 'https://x.com/heyheyfred', initials: 'FH', av: '#e08a1e', pf: ['x'], role: 'Ghostwrote as the domain veteran. Operator stories and real estate analogies.', stat: ['+429%', 'founder impressions'] },
  { t: 'people', name: 'Inderpreet Singh', handle: '@InderpreetSingh', url: 'https://x.com/InderpreetSingh', initials: 'IS', av: '#2b9c74', pf: ['x'], role: 'Product voice. Daily engagement and build-in-public updates.', stat: ['Daily', 'reply engine'] },
  { t: 'people', name: 'Captured & Coordinated', handle: '@capturedandcoordinated_', url: 'https://www.instagram.com/capturedandcoordinated_/', initials: 'CC', av: '#d9467a', pf: ['instagram'], role: 'Skincare Reels plus SEO and Meta ads for her shop on $500 a month.', stat: ['+300%', 'sales in 3 months'] },
  { t: 'people', name: 'Wes Deacon', handle: '@wesdeth', url: 'https://x.com/wesdeth', initials: 'WD', av: '#1b1b1b', pf: ['x'], role: 'My own account. Building in public, AI tools and marketing notes.', stat: ['DMs open', 'say hi'] }
];
const PF = { x: 'assets/x.png', youtube: 'assets/youtube.png', instagram: 'assets/instagram.png' };
$('#accGrid').innerHTML = ACCOUNTS.map(a => `
  <a class="acc" data-t="${a.t}" href="${a.url}" ${a.caseId ? `data-case="${a.caseId}"` : 'target="_blank" rel="noopener"'}>
    <span class="go">${a.caseId ? 'Open' : 'View'} ↗</span>
    <div class="top">
      <div class="av" style="--av:${a.av || '#fff'}">${a.img ? `<img src="assets/${a.img}" alt="">` : a.initials}</div>
      <div><div class="nm">${a.name}${a.live ? '<span class="live">Now</span>' : ''}</div><div class="hd">${a.handle}</div></div>
    </div>
    <p class="role">${a.role}</p>
    <div class="bottom"><div class="st"><b>${a.stat[0]}</b><span>${a.stat[1]}</span></div><div class="pf">${a.pf.map(p => `<img src="${PF[p]}" alt="${p}">`).join('')}</div></div>
  </a>`).join('');
$$('.filters button').forEach(b => b.addEventListener('click', () => {
  $$('.filters button').forEach(x => x.setAttribute('aria-selected', x === b));
  $$('.acc').forEach(a => a.classList.toggle('hide', b.dataset.f !== 'all' && a.dataset.t !== b.dataset.f));
}));
const FORMATS = ['Founder ghostwriting', 'X threads', 'Reply strategy', 'Live shows', 'Short-form video', 'Shorts and Reels', 'Launch campaigns', 'Animated stat posts', 'Weekly recap blogs', 'Co-marketing', 'Paid social A/B tests', 'Creator programs', 'Content calendars', 'LinkedIn', 'AI voice agents', 'Telegram alerts'];
$('#formats').innerHTML = [...FORMATS, ...FORMATS].map(f => `<span>${f}</span>`).join('');

const cards = $('#cards');
cards.innerHTML = CASES.map(c => `
  <button class="card${c.extra ? ' extra' : ''}" style="--frame:${c.frame};--scr:${c.scr}" data-case="${c.id}" aria-label="Open case study: ${c.title}">
    <div class="screen" style="container-type:inline-size">${c.mock}</div>
    <span class="label"><img src="assets/${c.icon}" alt="">${c.title}<small>${c.year}</small></span>
  </button>`).join('');
$('#allCount').textContent = CASES.length;

$('#writingRows').innerHTML = WRITING.map(([t, s, u]) => `<li><a href="${u}" target="_blank" rel="noopener"><span><span class="t">${t}</span></span><span class="y">${s} ↗</span></a></li>`).join('');
$('#expRows').innerHTML = EXPERIENCE.map(([r, o, s, y, u]) => { const inner = `<span><span class="t">${r}, ${o}</span><span class="s">${s}</span></span><span class="y">${y}${u ? ' ↗' : ''}</span>`; return `<li>${u ? `<a href="${u}" target="_blank" rel="noopener">${inner}</a>` : `<div class="r">${inner}</div>`}</li>`; }).join('');

const seeAll = $('#seeAll');
seeAll.addEventListener('click', () => {
  const on = cards.classList.toggle('all');
  seeAll.setAttribute('aria-expanded', on);
  seeAll.innerHTML = on ? 'Show less' : `See all <span>${CASES.length}</span>`;
});

/* ---------- sheet ---------- */
const wrap = $('#sheetWrap'), sheet = $('#sheet');
let lastFocus = null;
function openCase(id) {
  const c = CASES.find(x => x.id === id); if (!c) return;
  lastFocus = document.activeElement;
  sheet.innerHTML = `
    <div class="hero-card" style="--frame:${c.frame};--scr:${c.scr}"><div class="screen" style="container-type:inline-size">${c.mock}</div>
      <button class="close" data-close aria-label="Close"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>
    <div class="inner">
      <div class="meta"><img src="assets/${c.icon}" alt="">${c.org} · ${c.year}</div>
      <h3 id="sheetTitle">${c.title}</h3>
      <p class="tldr">${c.tldr}</p>
      <div class="stats">${c.stats.map(([a, b]) => `<div class="stat"><b>${a}</b><span>${b}</span></div>`).join('')}</div>
      <h4>The brief</h4><p>${c.brief}</p>
      <h4>Who it was for</h4><ul class="pts">${c.audience.map(a => `<li>${a}</li>`).join('')}</ul>
      <h4>What I did</h4><ul class="pts">${c.approach.map(a => `<li>${a}</li>`).join('')}</ul>
      ${c.links.length ? `<h4>See the work</h4><div class="links">${c.links.map(([t, u]) => `<a href="${u}" target="_blank" rel="noopener">${t} ↗</a>`).join('')}</div>` : ''}
      ${c.note ? `<p class="note">${c.note}</p>` : ''}
    </div>`;
  wrap.classList.add('open'); wrap.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  sheet.scrollTop = 0;
  setTimeout(() => sheet.focus(), 50);
}
function closeCase() {
  wrap.classList.remove('open'); wrap.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  lastFocus && lastFocus.focus && lastFocus.focus();
}
document.addEventListener('click', e => {
  if (e.target.closest('[data-close]')) return closeCase();
  const t = e.target.closest('[data-case]');
  if (t) { e.preventDefault(); openCase(t.dataset.case); }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && wrap.classList.contains('open')) closeCase();
  if (e.key === 'Tab' && wrap.classList.contains('open')) {
    const f = $$('a,button', sheet); if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  }
});

/* ---------- tooltip ---------- */
const tip = $('#tip');
function showTip(el) {
  tip.textContent = el.dataset.tip; tip.classList.add('show');
  const r = el.getBoundingClientRect(), tw = tip.offsetWidth, th = tip.offsetHeight;
  let x = Math.min(Math.max(10, r.left + r.width / 2 - tw / 2), innerWidth - tw - 10);
  let y = r.top - th - 10; if (y < 70) y = r.bottom + 10;
  tip.style.left = x + 'px'; tip.style.top = y + 'px';
}
$$('[data-tip]').forEach(el => {
  el.addEventListener('mouseenter', () => showTip(el));
  el.addEventListener('focus', () => showTip(el));
  el.addEventListener('mouseleave', () => tip.classList.remove('show'));
  el.addEventListener('blur', () => tip.classList.remove('show'));
});
addEventListener('scroll', () => tip.classList.remove('show'), { passive: true });

/* ---------- intro word reveal ---------- */
const intro = $('#intro');
function wrapWords(node) {
  [...node.childNodes].forEach(n => {
    if (n.nodeType === 3) {
      const parts = n.textContent.split(/(\s+)/);
      const frag = document.createDocumentFragment();
      parts.forEach(p => {
        if (!p) return;
        if (/^\s+$/.test(p)) frag.appendChild(document.createTextNode(p));
        else { const s = document.createElement('span'); s.className = 'w'; s.textContent = p; frag.appendChild(s); }
      });
      n.replaceWith(frag);
    } else if (n.nodeType === 1) {
      if (n.matches('.chip,.tag,.hl,.script')) n.classList.add('w');
      else wrapWords(n);
    }
  });
}
wrapWords(intro);
const words = $$('.w', intro);
const ctl = $('#introCtl'), ff = $('#ffBtn');
let i = 0, speed = 1, timer = null, done = false;
function finish() {
  if (done) return; done = true; clearTimeout(timer);
  words.forEach(w => w.classList.add('on'));
  document.body.classList.remove('intro-run');
  ctl.classList.add('gone');
}
function step() {
  if (i >= words.length) return setTimeout(finish, 250);
  const w = words[i++]; w.classList.add('on');
  const t = w.textContent;
  let d = 34;
  if (/[.,]$/.test(t)) d += 110;
  if (w.matches('.chip,.tag,.hl,.script')) d += 70;
  if (w === w.parentNode.lastElementChild && w.parentNode.tagName === 'P') d += 180;
  timer = setTimeout(step, d / speed);
}
const seen = false;
if (reduce || seen || location.hash) { ctl.classList.add('gone'); words.forEach(w => w.classList.add('on')); done = true; }
else { document.body.classList.add('intro-run'); timer = setTimeout(step, 1300); }
ff.addEventListener('click', () => { speed = speed === 1 ? 5 : 1; ff.classList.toggle('fast', speed > 1); });
$('#skipBtn').addEventListener('click', finish);
addEventListener('keydown', e => { if (!done && e.key === 'Escape') finish(); });

/* ---------- theme ---------- */
$('#themeBtn').addEventListener('click', () => {
  const d = document.documentElement.classList.toggle('dark');
  document.documentElement.classList.toggle('light', !d);
});

/* ---------- pixel signals ---------- */
const PAL = [['#456eaa', '#829ab8'], ['#687789', '#a5afbb'], ['#293f59', '#7590aa'], ['#4f7097', '#a4bad0'], ['#b97c43', '#c6a27a']];
const sprites = [];
function makeSprite(col, blur, size) {
  const pad = blur * 2 + 4, s = size + pad * 2;
  const c = document.createElement('canvas'); c.width = c.height = s;
  const x = c.getContext('2d');
  x.filter = blur ? `blur(${blur}px)` : 'none';
  x.translate(s / 2, s / 2);
  const unit = size / 7;
  const cells = [[-2,1],[-1,1],[-1,0],[0,0],[1,0],[1,-1],[2,-1],[2,-2]];
  cells.forEach(([cx,cy], i) => {
    x.globalAlpha = .25 + i * .09;
    x.fillStyle = i > 4 ? col[0] : col[1];
    x.fillRect(cx * unit, cy * unit, unit * .72, unit * .72);
  });
  x.globalAlpha = .3;
  x.strokeStyle = col[0]; x.lineWidth = 1.3;
  x.beginPath(); x.moveTo(-size*.48, size*.32); x.lineTo(-size*.12,size*.32);
  x.lineTo(size*.12,size*.08); x.lineTo(size*.45,size*.08); x.stroke();
  return c;
}
PAL.forEach(col => [0, 1, 3].forEach(b => sprites.push({ c: makeSprite(col, b, 120), b })));

const cv = $('#signals'), ctx = cv.getContext('2d');
let W, H, DPR, flakes = [], mx = -999, my = -999;
function resize() {
  DPR = Math.min(devicePixelRatio || 1, 2); W = innerWidth; H = innerHeight;
  cv.width = W * DPR; cv.height = H * DPR; ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  const n = Math.round(Math.min(19, Math.max(7, W / 80)));
  flakes = Array.from({ length: n }, () => spawn(true));
}
function spawn(any) {
  const sp = sprites[(Math.random() * sprites.length) | 0];
  const z = .65 + Math.random() * 1.15;
  const margin = W > 900 ? (W - 700) / 2 : 24;
  const x = Math.random() < .5 ? Math.random()*margin : W-Math.random()*margin;
  return { sp, x, baseX:x, y: any ? Math.random() * H : H+80, z, r: 0, vy: .08 + z * .12, ph: Math.random() * 6.28, a: W < 900 ? .25 : .65 };
}
addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });
function frame(t) {
  ctx.clearRect(0, 0, W, H);
  const dark = document.documentElement.classList.contains('dark');
  for (const f of flakes) {
    if (!reduce) f.y -= f.vy;
    f.x = f.baseX + Math.sin(t / 6000 + f.ph) * 12;
    const dx = f.x - mx, dy = f.y - my, d2 = dx * dx + dy * dy;
    if (!reduce && d2 < 14000) f.x += dx / Math.sqrt(d2 + 1) * 16;
    if (f.y < -90) Object.assign(f, spawn(false));
    const s = 72 * f.z;
    ctx.save(); ctx.globalAlpha = f.a * (dark ? .8 : 1); ctx.translate(f.x, f.y);
    ctx.drawImage(f.sp.c, -s * f.sp.c.width / 240, -s * f.sp.c.height / 240, s * f.sp.c.width / 120, s * f.sp.c.height / 120);
    ctx.restore();
  }
  if (!reduce) requestAnimationFrame(frame);
}
resize(); addEventListener('resize', resize);
requestAnimationFrame(frame);

/* ---------- signal horizon in footer ---------- */
const bed = $('#bed'), bx = bed.getContext('2d');
function drawBed() {
  const w = bed.clientWidth, h = bed.clientHeight, dpr = Math.min(devicePixelRatio || 1, 2);
  bed.width = w * dpr; bed.height = h * dpr; bx.setTransform(dpr, 0, 0, dpr, 0, 0);
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const n = Math.round(w / 16);
  for (let k = 0; k < n; k++) {
    const x = k * 16;
    const height = 12 + rnd()*h*.38 + Math.sin(k*.13)*h*.1;
    const blocks = Math.floor(height/10);
    for(let row=0; row<blocks; row++){
      bx.fillStyle = PAL[k%PAL.length][0];
      bx.globalAlpha = .09 + .22*(row/Math.max(1,blocks));
      bx.fillRect(x,h-row*10-7,7,7);
    }
    if(k%7===0){
      bx.globalAlpha=.35;
      bx.fillRect(x,h-height-20-rnd()*45,4,4);
    }
  }
}
drawBed(); addEventListener('resize', drawBed);
// Keep the static reduced-motion canvas in sync with viewport and theme changes.
if(reduce){
  addEventListener('resize',()=>frame(0));
  $('#themeBtn').addEventListener('click',()=>frame(0));
}
})();
