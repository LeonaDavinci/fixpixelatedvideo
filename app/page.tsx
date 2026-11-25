import type { Metadata } from 'next';
import Link from 'next/link';
import BeforeAfterDemo from '@/components/BeforeAfterDemo';
import FaqAccordion from '@/components/FaqAccordion';
import { FieldNotes, Scenarios, Tutorials, Caveats } from '@/components/DeepDive';

export const metadata: Metadata = {
  title: 'Fix Pixelated Video — Free AI Repair Tool',
  description:
    'Fix pixelated video online free with AI — unpixelate video, remove blocky compression artifacts, and upscale to 4K. No install, no watermark.',
  alternates: { canonical: 'https://www.fixpixelatedvideo.com' },
  keywords: [
    'how to fix pixelated video',
    'how to fix a pixelated video',
    'fix pixelated video',
    'fix pixelated video online',
    'repair pixelated video',
    'unpixelate video',
    'unpixel video',
    'depixelate video',
    'remove pixelation from video',
    'remove pixelation from video online free',
    'pixel fixer',
    'pixel fixer video',
    'fix pixelated video online free',
    'video pixelation',
    'fix blocky video',
  ],
  openGraph: {
    title: 'Fix Pixelated Video — Free AI Repair Tool',
    description:
      'Repair pixelated, blocky video with AI — unpixelate video and upscale to 4K for free, no watermark.',
    url: 'https://www.fixpixelatedvideo.com',
  },
};

/* ===== DATA ===== */
const problems = [
  {
    title: 'Pixelated and Blocky Footage',
    desc: 'Heavy compression breaks smooth video into visible blocks. Our AI reconstructs clean edges and gradients so footage looks natural again.',
  },
  {
    title: 'Old or Degraded VHS and Archival Footage',
    desc: 'VHS digitizations and archival clips degrade over decades. We rebuild lost detail and bring old footage up to modern viewing standards.',
  },
  {
    title: 'Transcoding and Re-encoding Damage',
    desc: 'Every format conversion loses quality. If a clip has been re-encoded multiple times, we recover the detail lost through repeated transcoding.',
  },
  {
    title: 'Compression Artifacts and Ringing',
    desc: 'Ringing halos, banding, and color bleed caused by aggressive codec compression are identified and removed frame by frame.',
  },
  {
    title: 'Low Bitrate and Streaming Damage',
    desc: 'Videos downloaded from social platforms at low bitrates often suffer from severe compression. Our tool restores the original look of these clips.',
  },
  {
    title: 'Low-Resolution Upscale Blur',
    desc: 'Simply upscaling a low-resolution video leaves it soft and muddy. We combine repair and AI upscaling in one pass for sharper detail.',
  },
];

const features = [
  {
    title: 'Frame-by-Frame AI Reconstruction',
    desc: 'Unlike simple filters, our AI analyzes and repairs each individual frame based on its unique damage pattern.',
  },
  {
    title: 'Repair and Upscale to 4K in One Pass',
    desc: 'Fix pixelation and increase resolution simultaneously. Export in 1080p, 2K, or 4K without processing the video twice.',
  },
  {
    title: 'Fully Browser-Based, No Software Needed',
    desc: 'Works on desktop, tablet, and mobile. Open your browser and start fixing — no downloads, installations, or plugins.',
  },
  {
    title: 'Zero-Retention Privacy',
    desc: 'Your videos are encrypted during upload and automatically deleted after processing. We never use them for AI training.',
  },
  {
    title: 'Watermark-Free Downloads',
    desc: 'Every export is completely free of watermarks. Your repaired video is yours — clean, professional, ready to publish.',
  },
  {
    title: 'Fast Cloud Processing',
    desc: 'GPU-accelerated cloud infrastructure processes your video quickly, even without a powerful local machine.',
  },
];

const products = [
  {
    type: 'Desktop Software',
    title: 'PixelFix Desktop for Windows and Mac',
    desc: 'Run repairs on your own machine for unlimited batch jobs and maximum privacy. Ideal for archives, editors, and studios processing large volumes of degraded footage.',
    tags: ['Windows 11', 'macOS 12+', 'Batch 50+ videos', 'GPU acceleration'],
    cta: 'Download for Desktop',
  },
  {
    type: 'Shopify Plugin',
    title: 'PixelFix for Shopify Stores',
    desc: 'Automatically enhance every product video the moment it is uploaded. Sharper listings lead to higher trust and better conversion — no manual editing required.',
    tags: ['1-click install', 'Auto-enhance on upload', 'Boosts conversion', 'No code needed'],
    cta: 'Add the Shopify Plugin',
  },
];

const compareTools = [
  {
    name: 'Topaz Video AI',
    strengths: 'Highest-quality AI upscaling and professional-grade restoration models.',
    bestFor: 'Filmmakers and studios doing heavy, frame-by-frame restoration.',
    pricing: '$299 one-time (or annual license)',
  },
  {
    name: 'Adobe Premiere Pro',
    strengths: 'Full professional editing suite with basic noise and blur filters.',
    bestFor: 'Editors who need a complete timeline and are not fixing pixelation alone.',
    pricing: '$22.99 / month subscription',
  },
  {
    name: 'Vmake.ai',
    strengths: 'Online AI video enhancer with quick quality boosts.',
    bestFor: 'Creators wanting fast, browser-based touch-ups.',
    pricing: 'From $9.99 / month subscription',
  },
  {
    name: 'Remini',
    strengths: 'Mobile-first photo and short-video enhancer.',
    bestFor: 'Casual users improving clips on a phone.',
    pricing: 'Freemium, ~$6 / month subscription',
  },
  {
    name: 'CapCut',
    strengths: 'Free editor with basic enhancement and upscale tools.',
    bestFor: 'Social creators making short-form content.',
    pricing: 'Free, Pro at $7.99 / month',
  },
  {
    name: 'PixelFix',
    strengths: 'Built specifically to unpixelate video — most repair parameters and methods, best result on blocky footage.',
    bestFor: 'Anyone who needs pixelated or blocky video repaired and upscaled.',
    pricing: 'Free to start, low-cost one-time plans',
    highlight: true,
  },
];

const whyUs = [
  {
    title: 'Built Only to Fix Pixelated Video',
    desc: 'General editors treat pixelation as one filter among many. PixelFix is purpose-built for it, so every model and control targets blocky, compressed footage.',
  },
  {
    title: 'More Unpixelate Parameters and Methods',
    desc: 'Fine-tune deblocking strength, pixelation-type detection, denoise, sharpening, and upscale factor — far more control than a single one-click slider.',
  },
  {
    title: 'Better Results on Severe Artifacts',
    desc: 'Our models are trained specifically on pixelation and compression damage, recovering edges and detail that generic enhancers smooth away.',
  },
  {
    title: 'Lower Price, No Heavy Subscription',
    desc: 'Start free and only pay when you export. No $20+ per month commitment just to repair an occasional clip.',
  },
  {
    title: 'One-Time Payment Option',
    desc: 'Own the desktop software outright. Pay once, use forever — no recurring fees, no surprise renewals.',
  },
  {
    title: 'Works Everywhere You Do',
    desc: 'Browser, desktop app, and Shopify plugin — repair a single clip online or automate enhancement across an entire store.',
  },
];

const whyItems = [
  {
    title: 'Per-Frame Damage Analysis',
    desc: 'The AI diagnoses each frame individually — identifying pixelation type, compression level, and detail loss — then applies a targeted fix.',
  },
  {
    title: 'Trained on Millions of Video Pairs',
    desc: 'Our model learned by comparing damaged and pristine versions of millions of real video clips. It knows what clean footage should look like.',
  },
  {
    title: 'Temporal Consistency Across Frames',
    desc: 'Unlike image upscalers applied to video, our model understands motion — ensuring repaired frames stay consistent across time.',
  },
  {
    title: 'Handles Multiple Damage Types at Once',
    desc: 'A single video can have pixelation, blurriness, and noise simultaneously. Our AI repairs each damage type in one unified pass.',
  },
];

const useCases = [
  {
    tag: 'Filmmakers and Editors',
    title: 'Salvage Unusable Client Footage',
    desc: 'Client footage arrives in all conditions. Fix heavily pixelated clips from transcoding errors and deliver something usable in the final cut.',
    coverClass: 'uc-1',
  },
  {
    tag: 'Content Creators and YouTubers',
    title: 'Repurpose Old Tutorial Recordings',
    desc: 'Have old recordings that look embarrassingly low quality? Repair and upscale to 2K or 4K so they match your newer content.',
    coverClass: 'uc-2',
  },
  {
    tag: 'Family Archivists',
    title: 'Restore VHS and Old Home Videos',
    desc: 'Bring VHS digitizations and 1980s home recordings to a standard your family can enjoy on a modern TV. Preserve those memories.',
    coverClass: 'uc-3',
  },
];

const testimonials = [
  {
    stars: 5,
    text: 'Client footage arrived in rough shape from a transcoding error. PixelFix handled the pixelation and produced something the client could actually use.',
    initials: 'IT',
    name: 'Isabella T.',
    role: 'Video Editor',
  },
  {
    stars: 5,
    text: 'I had old tutorial recordings that looked embarrassingly pixelated. PixelFix repaired and upscaled them to 2K. They match my newer content now.',
    initials: 'LC',
    name: 'Lucas C.',
    role: 'Content Creator',
  },
  {
    stars: 4,
    text: 'VHS digitizations from the 1980s. PixelFix brought them to a standard the family can watch on a modern TV. That is what mattered most.',
    initials: 'AM',
    name: 'Amara M.',
    role: 'Family Archivist',
  },
  {
    stars: 5,
    text: 'Brand videos from years ago looked terrible by today\'s standards. PixelFix repaired and upscaled them — they are back in active rotation.',
    initials: 'CM',
    name: 'Connor M.',
    role: 'Marketing Manager',
  },
  {
    stars: 5,
    text: 'Archival footage for a documentary was significantly damaged from repeated transcoding. PixelFix recovered enough detail to make it usable.',
    initials: 'SF',
    name: 'Sophia F.',
    role: 'Filmmaker',
  },
  {
    stars: 5,
    text: 'Repurposing old content from a hard drive. Most of it was in rough shape. PixelFix handled repair and upscaling in one pass — saved me from two separate tools.',
    initials: 'DY',
    name: 'Dylan Y.',
    role: 'YouTuber',
  },
];

/* ===== FIELD NOTES (long-form user write-ups) ===== */
const fieldNotes = [
  {
    initials: 'MR',
    name: 'Marcus R.',
    role: 'Wedding videographer',
    device: 'MacBook · Chrome',
    footage: 'Drone clip re-encoded 3×',
    settings: 'Pixelated / Compressed · Denoise 65 · Sharpen 40 · 1080p',
    quote:
      'The couple\'s drone footage had been through three exports before it reached me, and the wide shots looked like a mosaic. I used PixelFix to fix pixelated video on those aerial shots and it held up on a 55-inch screen at the reception.',
    outcome: 'Delivered without asking for a reshoot.',
  },
  {
    initials: 'PN',
    name: 'Priya N.',
    role: 'Marketing lead, small e-commerce brand',
    device: 'Windows laptop · Edge',
    footage: 'Supplier clips sent over WhatsApp',
    settings: 'Pixelated / Compressed · Artifact removal on · 1080p',
    quote:
      'Every product clip our supplier sent came through WhatsApp and arrived blocky. Learning how to fix a pixelated video turned out to be a ten-minute job — drop the file in, pick the compressed preset, export.',
    outcome: '12 product videos repaired in one evening for the holiday page.',
  },
  {
    initials: 'DK',
    name: 'Daniel K.',
    role: 'History teacher',
    device: 'School Chromebook',
    footage: 'Archive clips for a lesson',
    settings: 'Blurry / Soft · Denoise 30 · Sharpen 70 · keep original size',
    quote:
      'I have no install rights on a school Chromebook, so a browser tool was the only option that would work. I could remove pixelation from video clips and drop the result straight into the slide deck.',
    outcome: 'Used in class the same afternoon.',
  },
  {
    initials: 'AC',
    name: 'Aiko C.',
    role: 'YouTuber, 1.2M subscribers',
    device: 'iPhone · Safari',
    footage: 'Three years of phone uploads',
    settings: 'Pixelated / Compressed · Sharpen 55 · 2K',
    quote:
      'My older uploads look soft and blocky next to the new 4K videos on the channel page. Using this as a pixel fixer video for the back catalogue was the fastest fix I have found — the old uploads now sit next to the new ones without looking out of place.',
    outcome: 'Back catalogue re-uploaded in 2K over two weekends.',
  },
  {
    initials: 'TB',
    name: 'Tom B.',
    role: 'Insurance claims adjuster',
    device: 'Windows desktop · Chrome',
    footage: 'Low-bitrate dashcam footage',
    settings: 'Grain / Noise · Denoise 80 · Sharpen 35',
    quote:
      'We needed to unpixel video from a low-bitrate dashcam just to read a registration plate. It did not invent a plate number that was not there — but the edges were clean enough to submit.',
    outcome: 'Footage accepted as supporting evidence.',
  },
  {
    initials: 'LS',
    name: 'Lena S.',
    role: 'Family archivist',
    device: 'iPad · Safari',
    footage: 'VHS digitisation from 1994',
    settings: 'VHS / Tape · Temporal cleanup on · 1080p',
    quote:
      'My father\'s tape was digitised badly years ago and the blocks were brutal. I expected the worst and got something my mother could actually sit and watch — softer than film, but the mosaic was gone.',
    outcome: 'Shared with 14 relatives at the reunion.',
  },
];

/* ===== SCENARIOS ===== */
const scenarios = [
  {
    icon: '💬',
    title: 'Clips that came through a chat app',
    problem:
      'WhatsApp, WeChat, Telegram and Instagram DMs re-compress every video hard. A 30-second clip can drop below 1 Mbps and turn into visible blocks.',
    fix: 'pick the Pixelated / Compressed preset and export at 1080p. Deblocking is what this preset is tuned for.',
    setup: 'Damage type: Pixelated / Compressed · 1080p',
  },
  {
    icon: '🖥️',
    title: 'Screen recordings of calls and demos',
    problem:
      'Zoom, Meet and Teams recordings are capped at a low bitrate and any shared screen turns mushy as soon as content moves.',
    fix: 'run it through Blurry / Soft with a light denoise first — screen graphics sharpen badly when over-processed.',
    setup: 'Damage type: Blurry / Soft · Denoise 30–40',
  },
  {
    icon: '📼',
    title: 'Old tapes and camcorder files',
    problem:
      'VHS and early digital camcorder footage has tape noise, colour bleed and blocky edges baked in from the original capture.',
    fix: 'use the VHS / Tape preset so temporal cleanup removes flicker before sharpening touches the edges.',
    setup: 'Damage type: VHS / Tape · Temporal cleanup on',
  },
  {
    icon: '📱',
    title: 'Phone footage shot at digital zoom',
    problem:
      'Digital zoom crops and upscales in the camera, so the sensor never captured the detail. The result is soft with 8×8 blocks around high-contrast edges.',
    fix: 'sharpen in small steps and stop early. Push past roughly 60 and edges start to ring.',
    setup: 'Damage type: Pixelated / Compressed · Sharpen 40–55',
  },
  {
    icon: '🚗',
    title: 'Dashcam and security footage',
    problem:
      'Continuous recording at a fixed low bitrate means plates and faces smear the moment anything moves.',
    fix: 'clean the noise first, then sharpen. Denoise before sharpen is the order that keeps detail readable.',
    setup: 'Damage type: Grain / Noise · Denoise 70–80',
  },
  {
    icon: '🎮',
    title: 'Gameplay clips pulled from a stream',
    problem:
      'Livestream VODs are encoded for bandwidth, not quality, so fast motion and UI text both fall apart.',
    fix: 'export at the same resolution as the source. Upscaling a stream clip mostly enlarges the blocks you just removed.',
    setup: 'Damage type: Pixelated / Compressed · output = source size',
  },
  {
    icon: '🛒',
    title: 'Marketplace listing videos',
    problem:
      'Used-car, sneaker and furniture listings live or die on detail, and phone footage shot indoors is usually both soft and noisy.',
    fix: 'run two presets and compare: Grain / Noise for dark shots, Pixelated / Compressed for daylight ones.',
    setup: 'Damage type: Grain / Noise → Pixelated / Compressed',
  },
  {
    icon: '🎓',
    title: 'Course videos for school devices',
    problem:
      'Lecture recordings exported for an LMS are heavily compressed, and students often watch them on a Chromebook with no permission to install anything.',
    fix: 'fix them in the browser, export to 1080p, and hand back a file that plays anywhere without a plugin.',
    setup: 'Damage type: Pixelated / Compressed · 1080p · no install',
  },
  {
    icon: '📺',
    title: 'Re-uploads that lost quality on the way',
    problem:
      'A clip downloaded from one platform and re-uploaded to another gets compressed twice, and the second generation is always worse.',
    fix: 'repair the highest-quality copy you can still find, never the already re-uploaded one.',
    setup: 'Damage type: Pixelated / Compressed · start from the best source',
  },
];

/* ===== TUTORIALS ===== */
const tutorials = [
  {
    level: 'Beginner',
    time: '2 min',
    title: 'How to Fix a Pixelated Video Online Free',
    intro:
      'The shortest path from a blocky file to a clean one, using the default preset that covers most compressed footage.',
    steps: [
      'Open the repair tool and drop your clip on the upload box. MP4, MOV, AVI, MKV and WebM all work — there is no pre-conversion step.',
      'Leave Video Damage Type on Pixelated / Compressed. It is the default because it matches chat-app, stream and re-upload damage.',
      'Start at Denoise 60 and Sharpen 45. Raise denoise for heavy blocks, raise sharpen for soft edges — change one slider at a time.',
      'Pick an output resolution. 1080p is plenty for a chat-app clip; only choose 2K or 4K if the source was sharp to begin with.',
      'Run the repair, drag the before/after slider over a face or some text, then download the finished file.',
    ],
    href: '/fix',
    cta: 'Fix a pixelated video now',
  },
  {
    level: 'Beginner',
    time: '3 min',
    title: 'How to Remove Pixelation From a Video on Your Phone',
    intro:
      'Works on iPhone, iPad and Android. The trick is getting the file into the browser without letting the phone re-compress it first.',
    steps: [
      'Save the clip to Files (iOS) or your Downloads folder (Android) rather than sharing it straight out of the gallery.',
      'Open Chrome or Safari and go to the repair tool — it is a normal web page, nothing to install.',
      'Tap the upload box and choose the file from Files or Downloads. Do not pick "share to app", which often re-encodes.',
      'Choose your damage type, keep the default settings, and start the repair. Leave the tab in the foreground.',
      'Download to Files when it finishes, then upload or send that file — not the original — wherever you need it.',
    ],
    href: '/fix',
    cta: 'Open the mobile-friendly tool',
  },
  {
    level: 'Beginner',
    time: '4 min',
    title: 'How to Unpixel a Video Downloaded From Social Media',
    intro:
      'A social download is often the worst copy that exists. Getting a clean result starts before you open any tool.',
    steps: [
      'Go back to the original post and download the highest quality version offered — never a screen recording of the player.',
      'Avoid the platform\'s editor or trim tools: every save adds another compression pass on top of the one you are trying to undo.',
      'Load the file, set the damage type to Pixelated / Compressed, and keep the output resolution equal to the source.',
      'Check the before/after on one frame with fine detail — text, hair or foliage. That is where block artifacts are most obvious.',
      'Export once, and keep that file as your master so the next re-upload starts from a clean source.',
    ],
    href: '/fix',
    cta: 'Unpixel a video',
  },
  {
    level: 'Intermediate',
    time: '5 min',
    title: 'How to Fix a Pixelated Video Without Making It Look Artificial',
    intro:
      'Most bad "AI repair" results come from pushing two sliders in opposite directions. This is the order that keeps footage natural.',
    steps: [
      'Decide what you are actually looking at: real detail, block edges, or plain noise. Each one needs a different first move.',
      'For blocks, raise denoise until the grid softens, then stop. For softness, raise sharpen instead — not both.',
      'Judge on a still frame at 100%, never on the moving preview at half size.',
      'Use temporal cleanup when the artifact flickers between frames; leave it off for clean sources that only need sharpening.',
      'Compare the exported file, not just the preview — encoding adds one more pass and can reintroduce faint blocks.',
    ],
    href: '/fix',
    cta: 'Try the full settings panel',
  },
];

/* ===== CAVEATS ===== */
const caveats = [
  {
    title: 'Repair reconstructs — it does not recover',
    body:
      'Pixelation is information that was thrown away by the encoder. A repair tool estimates plausible detail and removes the block structure, so expect clean edges and no grid — not the literal pixels a better camera would have captured.',
  },
  {
    title: 'Never max denoise and sharpen together',
    body:
      'Heavy denoise followed by heavy sharpening produces halos, ringing around edges and a plastic texture. Pick the dominant problem and move that slider first, then leave the other one low.',
  },
  {
    title: 'Every extra export adds another compression pass',
    body:
      'A clip that has already been re-uploaded twice has two generations of damage. Repair can clean up the visible result, but it cannot undo both passes. Always start from the best copy you can still find.',
  },
  {
    title: 'Upscaling is not new detail',
    body:
      'Going from 480p to 4K enlarges the frame; it does not give the footage a better sensor. Around 2× is safe. Push to 4× on a genuinely low-resolution source and the output looks soft no matter how clean the blocks are.',
  },
  {
    title: 'Long and high-resolution clips need real hardware',
    body:
      'Repair runs on your own device, so a 20-minute 4K file will crawl on a low-power laptop or a Chromebook. Split the clip into parts or close other tabs before starting, and keep the tab in the foreground.',
  },
  {
    title: 'Audio is passed through, not enhanced',
    body:
      'The repair pipeline works on picture. Muffled, clipped or noisy sound stays exactly as it was recorded — fix the audio separately if it matters.',
  },
];

const preDownloadChecklist = {
  title: 'Check these three things before you hit download',
  items: [
    'Play the first ten seconds. Encoders front-load keyframes, so the opening is where leftover blocking shows up first.',
    'Drag the before/after slider over one face and one piece of text. If both are clean, the rest of the frame will be too.',
    'Check audio sync at the very end of the clip. A repaired file that drifts out of sync is worse than a blocky one.',
  ],
};

const faqItems = [
  {
    question: 'What does a video repair tool actually do?',
    answer:
      'A video repair tool analyzes damaged, pixelated, or degraded video and reconstructs missing or corrupted detail frame by frame. Our AI processes pixelation, compression artifacts, blur, and quality degradation from old or repeatedly transcoded footage — producing a cleaner, clearer output.',
  },
  {
    question: 'Can PixelFix repair pixelated MP4 videos?',
    answer:
      'Yes. MP4 is our most commonly repaired format. We handle pixelation, blocky compression artifacts, and softening caused by aggressive MP4 encoding.',
  },
  {
    question: 'Is it free to fix pixelated video online?',
    answer:
      'Uploading and previewing your repaired video is completely free with no account required. Full-resolution exports without watermarks use credits. You never pay until you are satisfied with the result.',
  },
  {
    question: 'Can I upscale and repair my video at the same time?',
    answer:
      'Yes. PixelFix handles repair and upscaling in one unified pass. Choose your output resolution (1080p, 2K, or 4K) before processing — the AI fixes damage and increases resolution simultaneously.',
  },
  {
    question: 'What video formats are supported?',
    answer:
      'We support MP4, MOV, AVI, MKV, WebM, WMV, and other common video formats. No pre-conversion is required — just upload your file directly and the tool handles the rest.',
  },
  {
    question: 'Is my video kept private and secure?',
    answer:
      'Yes. Your video is encrypted during upload and automatically deleted after processing. We maintain a strict zero-retention policy and never use uploaded videos for AI training.',
  },
  {
    question: 'Can I fix pixelated video online for free?',
    answer:
      'Yes. Uploading and previewing your repaired video is completely free with no account required. You can fix pixelated video online free and only use credits when you export the final file — and no watermark is added to any export.',
  },
  {
    question: 'Can I fix pixelated video on a Chromebook?',
    answer:
      'Absolutely. PixelFix is fully browser-based, so you can fix pixelated video on Chromebook or any ChromeOS device without installing software or extensions. Just open Chrome, upload your clip, and repair it online — no app needed.',
  },
  {
    question: 'How do I unpixelate video?',
    answer:
      'To unpixelate video, upload it to PixelFix, pick your damage type and output resolution, then let the AI remove blocky compression artifacts and rebuild clean edges. Preview the before/after result, then download the unpixelated video free of watermarks.',
  },
  {
    question: 'How do I remove pixelation from a video online free?',
    answer:
      'Open the browser tool, drop in the clip, choose the Pixelated / Compressed damage type, and start the repair. Previewing the before/after result and the settings are free — you can remove pixelation from a video online with no account, no install and no watermark on the export.',
  },
  {
    question: 'Can I unpixel a video that was downloaded from social media?',
    answer:
      'Yes, but start from the highest-quality copy available. A social download has usually been compressed at least twice, so re-download the original post rather than a screen recording, then unpixel video from that file. Repair cleans the visible blocks; it cannot undo two generations of compression at once.',
  },
  {
    question: 'What should a good pixel fixer video tool actually do?',
    answer:
      'A pixel fixer video tool should target block artifacts directly rather than just sharpening the frame. Look for separate deblocking and denoise controls, a damage-type preset instead of one universal slider, and an export that keeps the original audio in sync.',
  },
  {
    question: 'How long does it take to fix a pixelated video?',
    answer:
      'A short clip of 30 to 60 seconds usually finishes in about a minute, roughly at playback speed on a normal laptop. Longer and higher-resolution files take proportionally longer, and a low-power Chromebook or phone will be slower than a desktop.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* SEO Structured Data: HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Fix Pixelated Video',
            description:
              'Step-by-step guide to fix pixelated, blocky, and degraded video using AI technology.',
            step: [
              {
                '@type': 'HowToStep',
                position: 1,
                name: 'Upload Your Pixelated Video',
                text: 'Drag and drop or click to upload your pixelated or damaged video file.',
              },
              {
                '@type': 'HowToStep',
                position: 2,
                name: 'AI Repairs Every Frame',
                text: 'Our AI analyzes and reconstructs each frame, removing pixelation, compression artifacts, and blur.',
              },
              {
                '@type': 'HowToStep',
                position: 3,
                name: 'Preview and Download',
                text: 'Preview the repaired video with a before/after comparison, then download in up to 4K resolution — no watermark.',
              },
            ],
          }),
        }}
      />

      {/* SEO Structured Data: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />

      {/* ===== HERO ===== */}
      <section className="hero" aria-label="Hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <p className="hero-kicker">Free AI Video Repair Tool</p>
              <h1>How to Fix Pixelated Video in Seconds</h1>
              <p className="hero-desc">
                Stop struggling with blocky, blurry, or damaged footage. Our AI
                reconstructs every frame — removing pixelation, compression artifacts,
                and blur — so you can unpixelate video and restore clean, sharp clarity
                up to 4K.
              </p>
              <div className="hero-cta">
                <Link href="/fix" className="btn btn-primary btn-large">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4m0 0l-4 4m4-4v12" />
                  </svg>
                  Fix Pixelated Video Free
                </Link>
                <a href="#how-it-works" className="btn btn-outline">See How It Works</a>
              </div>
              <div className="hero-trust">
                <div className="trust-item">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#00D4A1" strokeWidth="2.5" aria-hidden="true"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  No software install
                </div>
                <div className="trust-item">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#00D4A1" strokeWidth="2.5" aria-hidden="true"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Free to start
                </div>
                <div className="trust-item">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#00D4A1" strokeWidth="2.5" aria-hidden="true"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  No watermark
                </div>
              </div>
            </div>
            <BeforeAfterDemo />
          </div>
        </div>
      </section>

      {/* ===== UPLOAD CTA ===== */}
      <section className="upload-cta-section" aria-label="Upload your video">
        <div className="container">
          <Link href="/fix" className="upload-box">
            <span className="upload-icon" aria-hidden="true">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4m0 0l-4 4m4-4v12" /></svg>
            </span>
            <h2>Upload Your Pixelated Video</h2>
            <p>
              Drag and drop, paste, or click to select your file — MP4, MOV, AVI and
              more supported
            </p>
            <span className="btn btn-primary btn-large">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4m0 0l-4 4m4-4v12" /></svg>
              Start Fixing — It&apos;s Free
            </span>
            <p className="upload-formats">
              Supported: MP4 &middot; MOV &middot; AVI &middot; MKV &middot; WebM &middot; WMV — No conversion needed
            </p>
          </Link>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="section section-alt" aria-labelledby="how-heading">
        <div className="container text-center">
          <span className="badge">Step-by-Step Guide</span>
          <h2 id="how-heading">How to Fix Pixelated Video in 3 Easy Steps</h2>
          <p style={{ maxWidth: 600, margin: '12px auto 0' }}>
            No technical knowledge required. Our AI handles the complex frame-by-frame
            reconstruction automatically.
          </p>
          <div className="steps-grid" role="list">
            <article className="step-card" role="listitem">
              <span className="step-number" aria-hidden="true">01</span>
              <h3>Upload Your Pixelated Video</h3>
              <p>
                Drag and drop or click to upload your damaged, blurry, or blocky video.
                Supports MP4, MOV, AVI, MKV and all major formats — no conversion
                needed beforehand.
              </p>
            </article>
            <article className="step-card" role="listitem">
              <span className="step-number" aria-hidden="true">02</span>
              <h3>AI Repairs Every Frame Automatically</h3>
              <p>
                Our deep-learning AI analyzes each frame individually — identifying
                damage type and severity — then reconstructs missing pixel data and
                removes compression artifacts.
              </p>
            </article>
            <article className="step-card" role="listitem">
              <span className="step-number" aria-hidden="true">03</span>
              <h3>Preview, Compare and Download</h3>
              <p>
                Review your repaired video with a side-by-side comparison before
                exporting. Download up to 4K — completely watermark-free. Free to
                preview.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== PROBLEMS ===== */}
      <section id="problems" className="section" aria-labelledby="problems-heading">
        <div className="container">
          <div className="text-center">
            <span className="badge">Video Problems Solved</span>
            <h2 id="problems-heading">What Types of Pixelated Video Can We Fix?</h2>
            <p style={{ maxWidth: 600, margin: '12px auto 0' }}>
              From minor blurriness to severe block artifacts, our AI handles a wide
              range of video degradation problems.
            </p>
          </div>
          <div className="problems-grid" role="list">
            {problems.map((p, i) => (
              <article className="problem-card" key={i} role="listitem">
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ANY DEVICE / CHROMEBOOK ===== */}
      <section className="section section-alt" aria-labelledby="any-device-heading">
        <div className="container text-center">
          <span className="badge">Works Everywhere</span>
          <h2 id="any-device-heading">Fix Pixelated Video on Any Device — Including Chromebook</h2>
          <p style={{ maxWidth: 640, margin: '12px auto 0' }}>
            PixelFix is a fully browser-based pixel fixer, so you can fix pixelated video online free from any device with a modern browser — Windows, Mac, Linux, Android, iPhone, iPad, and Chromebook. No software install and no ChromeOS app required.
          </p>
          <div className="features-grid" role="list">
            <article className="feature-card" role="listitem">
              <h3>Fix Pixelated Video on Chromebook</h3>
              <p>Because everything runs in the browser, you can depixelate video on Chromebook without installing anything. Open Chrome, upload your clip, and repair it — perfect for students and schools on ChromeOS.</p>
            </article>
            <article className="feature-card" role="listitem">
              <h3>No Video Pixelation Left Behind</h3>
              <p>From severe block artifacts to mild video pixelation, the repair targets your exact damage type and rebuilds clean edges and smooth gradients.</p>
            </article>
            <article className="feature-card" role="listitem">
              <h3>Unpixelate Video Online Free</h3>
              <p>Preview every repair for free and only use credits on the final export. Watermark-free on every device, including Chromebook.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="section section-alt" aria-labelledby="features-heading">
        <div className="container text-center">
          <span className="badge">Product Features</span>
          <h2 id="features-heading">Everything You Need to Unpixelate Video and Restore Clarity</h2>
          <p style={{ maxWidth: 600, margin: '12px auto 0' }}>
            A complete toolkit powered by advanced deep learning, built for everyone
            from creators to archivists.
          </p>
          <div className="features-grid" role="list">
            {features.map((f, i) => (
              <article className="feature-card" key={i} role="listitem">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section id="products" className="section" aria-labelledby="products-heading">
        <div className="container">
          <div className="text-center">
            <span className="badge">Our Products</span>
            <h2 id="products-heading">PixelFix, Wherever You Work</h2>
            <p style={{ maxWidth: 600, margin: '12px auto 0' }}>
              One repair engine, delivered three ways. Use the free browser tool, the
              self-hosted desktop app, or the automated Shopify plugin.
            </p>
          </div>
          <div className="products-grid" role="list">
            {products.map((p, i) => (
              <article className="product-card" key={i} role="listitem">
                <span className="product-icon" aria-hidden="true">
                  {i === 0 ? (
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="12" rx="2" />
                      <path d="M8 20h8M12 16v4" />
                    </svg>
                  ) : (
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M4 7l8-4 8 4v6c0 4-3 7-8 9-5-2-8-5-8-9V7z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  )}
                </span>
                <div className="product-body">
                  <span className="usecase-tag">{p.type}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="product-tags">
                    {p.tags.map((t, j) => (
                      <span className="product-tag" key={j}>{t}</span>
                    ))}
                  </div>
                  <Link href="/fix" className="btn btn-outline btn-sm" style={{ marginTop: 4 }}>
                    {p.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARE TOOLS ===== */}
      <section id="compare" className="section section-alt" aria-labelledby="compare-heading">
        <div className="container">
          <div className="text-center">
            <span className="badge">Buyer Guide</span>
            <h2 id="compare-heading">How to Choose Among Various Video Tools</h2>
            <p style={{ maxWidth: 640, margin: '12px auto 0' }}>
              Not every video tool fixes pixelation well. Here is how PixelFix compares
              with the most common options, and why it is the right pick for blocky footage.
            </p>
          </div>

          <div className="compare-scroll">
            <table className="compare-table">
              <thead>
                <tr>
                  <th scope="col">Tool</th>
                  <th scope="col">Strengths</th>
                  <th scope="col">Best For</th>
                  <th scope="col">Pricing</th>
                </tr>
              </thead>
              <tbody>
                {compareTools.map((t, i) => (
                  <tr key={i} className={t.highlight ? 'compare-row-us' : ''}>
                    <td className={t.highlight ? 'tool-us' : 'tool-name'}>{t.name}</td>
                    <td>{t.strengths}</td>
                    <td>{t.bestFor}</td>
                    <td>{t.pricing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="compare-reasons-title">Why Choose PixelFix for Pixelated Video</h3>
          <div className="reasons-grid" role="list">
            {whyUs.map((r, i) => (
              <article className="reason-card" key={i} role="listitem">
                <span className="reason-icon" aria-hidden="true">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY AI ===== */}
      <section id="why" className="section" aria-labelledby="why-heading">
        <div className="container">
          <div className="text-center">
            <span className="badge">The Technology</span>
            <h2 id="why-heading">Why AI Is the Best Way to Fix Pixelated Video</h2>
          </div>
          <div className="why-grid">
            <ul className="why-list" role="list">
              {whyItems.map((item, i) => (
                <li className="why-item" key={i} role="listitem">
                  <span className="why-check" aria-hidden="true">&#x2713;</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="why-visual" aria-label="Statistics">
              <h3>Trusted by Thousands of Creators</h3>
              <p>Professional-grade video restoration, now accessible to everyone.</p>
              <div className="stats-grid">
                <div className="stat-box"><span className="stat-num">4K</span><span className="stat-label">Max Output Resolution</span></div>
                <div className="stat-box"><span className="stat-num">4.8</span><span className="stat-label">Average User Rating</span></div>
                <div className="stat-box"><span className="stat-num">100%</span><span className="stat-label">Browser-based, No Install</span></div>
                <div className="stat-box"><span className="stat-num">0</span><span className="stat-label">Watermarks on Export</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== USE CASES ===== */}
      <section id="use-cases" className="section section-alt" aria-labelledby="usecases-heading">
        <div className="container text-center">
          <span className="badge">Who Uses PixelFix</span>
          <h2 id="usecases-heading">Video Repair for Every Creator and Archivist</h2>
          <p style={{ maxWidth: 600, margin: '12px auto 0' }}>
            Whether you are a professional filmmaker, content creator, or preserving
            family memories — PixelFix has you covered.
          </p>
          <div className="usecases-grid" role="list">
            {useCases.map((uc, i) => (
              <article className="usecase-card" key={i} role="listitem">
                <div className={`usecase-cover ${uc.coverClass}`} aria-hidden="true" />
                <div className="usecase-body">
                  <span className="usecase-tag">{uc.tag}</span>
                  <h3>{uc.title}</h3>
                  <p>{uc.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonials" className="section" aria-labelledby="testimonials-heading">
        <div className="container text-center">
          <span className="badge">User Reviews</span>
          <h2 id="testimonials-heading">What Our Users Say About Fixing Pixelated Videos</h2>
          <div className="testimonials-grid" role="list">
            {testimonials.map((t, i) => (
              <article className="testimonial-card" key={i} role="listitem">
                <div className="stars" aria-label={`${t.stars} out of 5 stars`}>
                  {Array.from({ length: 5 }, (_, j) => (j < t.stars ? '\u2605' : '\u2606')).join('')}
                </div>
                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="author-avatar" aria-hidden="true">{t.initials}</div>
                  <div>
                    <span className="author-name">{t.name}</span>
                    <span className="author-role">{t.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FIELD NOTES ===== */}
      <FieldNotes
        id="field-notes"
        alt
        kicker="User Field Notes"
        heading="Users Share How They Fixed Their Pixelated Videos"
        intro="Not star ratings — the footage, the device, and the exact settings people settled on after a few tries. Written up from user feedback across editors, teachers, archivists and sellers."
        items={fieldNotes}
      />

      {/* ===== SCENARIOS ===== */}
      <Scenarios
        id="scenarios"
        kicker="Real-World Scenarios"
        heading="Where Pixelated Video Actually Comes From"
        intro="Almost no one records a pixelated video on purpose. It is created on the way to you — by a chat app, a stream, a bad export, or a second upload."
        items={scenarios}
      />

      {/* ===== TUTORIALS ===== */}
      <Tutorials
        id="tutorials"
        alt
        kicker="Tutorials"
        heading="How to Fix a Pixelated Video — Step-by-Step Tutorials"
        intro="Four short walkthroughs: the fastest fix, the phone workflow, how to unpixel video from social downloads, and how to keep the result from looking artificial."
        items={tutorials}
      />

      {/* ===== CAVEATS ===== */}
      <Caveats
        id="notes"
        kicker="Before You Start"
        heading="Things to Know Before You Fix a Pixelated Video"
        intro="Every honest answer about what video repair can and cannot do. Read this once and you will get a better result on the first export."
        items={caveats}
        checklist={preDownloadChecklist}
      />

      {/* ===== FAQ ===== */}
      <section id="faq" className="section section-alt" aria-labelledby="faq-heading">
        <div className="container text-center">
          <span className="badge">FAQ</span>
          <h2 id="faq-heading">Frequently Asked Questions About Fixing Pixelated Video</h2>
          <p style={{ maxWidth: 600, margin: '12px auto 0' }}>
            Everything you need to know before you start repairing your footage.
          </p>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="section" aria-label="Call to action">
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to Fix Your Pixelated Video?</h2>
            <p>
              Upload your damaged or pixelated video and let the AI reconstruct every
              frame. Free to start — no account required. No watermarks on any export.
            </p>
            <Link href="/fix" className="btn btn-white btn-xl">
              Repair Your Video for Free
            </Link>
            <p className="cta-sub">
              Looking for a focused tool page?{' '}
              <Link href="/depixelate-video">Depixelate video online &rarr;</Link>
              {' '}·{' '}
              <Link href="/blog">Read our complete guide to fixing pixelated video &rarr;</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
