export interface RentalItem {
  name: string;
  pricePerDay: number;
  discontinued?: boolean;
}

export interface RentalCategory {
  category: string;
  items: RentalItem[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  features: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  startingPrice?: string;
  turnaround?: string;
  rentalEquipment?: RentalCategory[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  printing: {
    id: "printing",
    title: "Photo Printing",
    description: "Professional quality prints from wallet size to large format posters.",
    image: "/images/services/printing.jpg",
    imageAlt: "Professional photo printing equipment at Pixels Foto & Frame",
    longDescription:
      "Our state-of-the-art printing equipment delivers stunning photo prints with vibrant colors and exceptional detail. Whether you need a single print or hundreds, we ensure consistent quality with archival-grade materials that will last for generations.",
    features: [
      "Multiple sizes from 4x6 to 40x60",
      "Premium archival paper options",
      "Matte, glossy, and lustre finishes",
      "Same-day printing available",
      "Bulk printing discounts",
      "Color correction included",
    ],
    process: [
      {
        step: 1,
        title: "Submit Your Photos",
        description: "Upload your digital files or bring in your prints for scanning.",
      },
      {
        step: 2,
        title: "Choose Options",
        description: "Select your preferred size, paper type, and finish.",
      },
      {
        step: 3,
        title: "Review & Approve",
        description: "We'll send you a proof for approval before printing.",
      },
      {
        step: 4,
        title: "Pick Up or Delivery",
        description: "Collect your prints in-store or have them shipped.",
      },
    ],
    faqs: [
      {
        question: "What file format should I use?",
        answer:
          "We accept JPEG, PNG, TIFF, and PSD files. For best results, submit files at 300 DPI or higher.",
      },
      {
        question: "How long does printing take?",
        answer:
          "Standard prints are ready in 1-2 business days. Same-day service is available for orders placed before noon.",
      },
      {
        question: "Do you offer color correction?",
        answer:
          "Yes! Basic color correction is included with all prints. Advanced retouching is available for an additional fee.",
      },
    ],
    startingPrice: "$0.39",
    turnaround: "1-2 business days",
  },
  "custom-framing": {
    id: "custom-framing",
    title: "Custom Framing",
    description:
      "Expert custom framing with hundreds of frame styles and mat options.",
    image: "/images/services/custom-framing.jpg",
    imageAlt: "Custom framing expert selecting frames at Pixels Foto & Frame",
    longDescription:
      "Our master framers bring decades of experience to every project. With over 500 frame styles, conservation-quality materials, and expert craftsmanship, we create the perfect presentation for your artwork, photographs, and memorabilia.",
    features: [
      "500+ frame styles to choose from",
      "Conservation-grade materials",
      "UV-protective glass options",
      "Custom mat cutting",
      "Shadow boxes for 3D objects",
      "Free design consultation",
    ],
    process: [
      {
        step: 1,
        title: "Consultation",
        description: "Bring in your piece and discuss your vision with our designers.",
      },
      {
        step: 2,
        title: "Design",
        description: "We'll help you select the perfect frame, mat, and glass combination.",
      },
      {
        step: 3,
        title: "Crafting",
        description: "Our master framers carefully assemble your custom frame.",
      },
      {
        step: 4,
        title: "Quality Check",
        description: "Every piece is inspected before pickup or delivery.",
      },
    ],
    faqs: [
      {
        question: "How long does custom framing take?",
        answer:
          "Most custom framing projects are completed within 1-2 weeks. Rush service is available.",
      },
      {
        question: "Do you frame unusual items?",
        answer:
          "Yes! We frame jerseys, medals, memorabilia, 3D objects, and more using shadow box techniques.",
      },
      {
        question: "What type of glass do you offer?",
        answer:
          "We offer regular glass, non-glare glass, UV-protective glass, and museum-quality acrylic options.",
      },
    ],
    startingPrice: "$75",
    turnaround: "1-2 weeks",
  },
  "photo-restoration": {
    id: "photo-restoration",
    title: "Photo Restoration",
    description: "Restore and colorize damaged or faded photographs.",
    image: "/images/services/photo-restoration.jpg",
    imageAlt: "Before and after photo restoration example",
    longDescription:
      "Bring your cherished memories back to life with our expert photo restoration services. Our skilled technicians can repair tears, remove stains, restore faded colors, and even colorize black-and-white photos while preserving the authenticity of your original images.",
    features: [
      "Tear and crease repair",
      "Stain and scratch removal",
      "Color fading correction",
      "Black & white colorization",
      "Missing portion reconstruction",
      "High-resolution scanning included",
    ],
    process: [
      {
        step: 1,
        title: "Assessment",
        description: "Bring in your photo for a free damage assessment and quote.",
      },
      {
        step: 2,
        title: "Scanning",
        description: "We carefully scan your original at high resolution.",
      },
      {
        step: 3,
        title: "Restoration",
        description: "Our experts digitally restore your photo pixel by pixel.",
      },
      {
        step: 4,
        title: "Review & Print",
        description: "Approve the restoration and receive your restored print.",
      },
    ],
    faqs: [
      {
        question: "Can you restore severely damaged photos?",
        answer:
          "We can restore most damaged photos. Bring yours in for a free assessment.",
      },
      {
        question: "Do you keep my original photo safe?",
        answer:
          "Yes! We handle all originals with archival gloves and return them safely with your order.",
      },
      {
        question: "How realistic is photo colorization?",
        answer:
          "Our colorization is highly realistic. We research period-accurate colors and use advanced techniques for natural results.",
      },
    ],
    startingPrice: "$25",
    turnaround: "3-5 business days",
  },
  "jersey-framing": {
    id: "jersey-framing",
    title: "Jersey Framing",
    description: "Shadow box framing for sports jerseys and memorabilia.",
    image: "/images/services/jersey-framing.jpg",
    imageAlt: "Professional jersey framing service at Pixels Foto & Frame",
    longDescription:
      "Showcase your prized sports jerseys and memorabilia with our professional shadow box framing. We use museum-quality materials and expert mounting techniques to create stunning displays that protect and highlight your treasured items.",
    features: [
      "Custom shadow box construction",
      "UV-protective glass",
      "Museum-quality mounting",
      "Add photos and memorabilia",
      "Multiple layout options",
      "Team color mat options",
    ],
    process: [
      {
        step: 1,
        title: "Consultation",
        description: "Discuss your vision and select frame and mat colors.",
      },
      {
        step: 2,
        title: "Layout Design",
        description: "We create a custom layout for your jersey and any additions.",
      },
      {
        step: 3,
        title: "Professional Mounting",
        description: "Your jersey is carefully mounted using archival techniques.",
      },
      {
        step: 4,
        title: "Final Assembly",
        description: "The shadow box is assembled and sealed for protection.",
      },
    ],
    faqs: [
      {
        question: "Can I include photos with my jersey?",
        answer:
          "Yes! We can add photos, tickets, programs, or other memorabilia to your display.",
      },
      {
        question: "How is the jersey mounted?",
        answer:
          "We use hidden stitching and archival pins that don't damage the jersey.",
      },
      {
        question: "What size shadow box do I need?",
        answer:
          "Shadow box size depends on jersey size and additional items. We'll help you determine the right size during consultation.",
      },
    ],
    startingPrice: "$199",
    turnaround: "2-3 weeks",
  },
  "aluminum-prints": {
    id: "aluminum-prints",
    title: "Aluminum Prints",
    description: "Stunning metal prints with vibrant colors and modern appeal.",
    image: "/images/services/aluminum-prints.jpg",
    imageAlt: "Aluminum metal print being displayed",
    longDescription:
      "Transform your photos into stunning works of art with our aluminum metal prints. The infusion printing process embeds your image directly into specially coated aluminum, creating vibrant, luminous prints with exceptional durability and a sleek, modern aesthetic.",
    features: [
      "Vibrant, luminous colors",
      "Waterproof and scratch-resistant",
      "No frame needed",
      "Float mount included",
      "Indoor/outdoor suitable",
      "Sizes up to 48x96",
    ],
    process: [
      {
        step: 1,
        title: "Submit Image",
        description: "Upload your high-resolution image for printing.",
      },
      {
        step: 2,
        title: "Select Options",
        description: "Choose your size, finish, and mounting style.",
      },
      {
        step: 3,
        title: "Infusion Printing",
        description: "Your image is infused into the aluminum surface.",
      },
      {
        step: 4,
        title: "Ready to Hang",
        description: "Receive your print with mounting hardware installed.",
      },
    ],
    faqs: [
      {
        question: "Are metal prints durable?",
        answer:
          "Yes! Metal prints are waterproof, scratch-resistant, and won't fade for decades.",
      },
      {
        question: "What finishes are available?",
        answer:
          "We offer glossy, satin, and matte finishes. Glossy is most popular for vibrant colors.",
      },
      {
        question: "Can I hang metal prints outdoors?",
        answer:
          "Yes! Our aluminum prints are suitable for covered outdoor areas.",
      },
    ],
    startingPrice: "$45",
    turnaround: "3-5 business days",
  },
  "art-reproduction": {
    id: "art-reproduction",
    title: "Art Reproduction",
    description: "High-quality reproductions of artwork and photographs.",
    image: "/images/services/art-reproduction.jpg",
    imageAlt: "Art reproduction photography setup at Pixels Foto & Frame",
    longDescription:
      "Create museum-quality reproductions of your artwork with our giclée printing services. Using archival inks and premium canvas or fine art papers, we produce reproductions that capture every detail and nuance of your original work.",
    features: [
      "Giclée printing technology",
      "Archival inks (100+ year lifespan)",
      "Canvas and fine art papers",
      "Color matching to original",
      "Gallery wrap stretching",
      "Limited edition numbering",
    ],
    process: [
      {
        step: 1,
        title: "High-Res Capture",
        description: "We photograph or scan your artwork at ultra-high resolution.",
      },
      {
        step: 2,
        title: "Color Proofing",
        description: "Review a proof print to ensure accurate color matching.",
      },
      {
        step: 3,
        title: "Giclée Printing",
        description: "Your reproduction is printed on archival materials.",
      },
      {
        step: 4,
        title: "Finishing",
        description: "Canvas stretching, coating, or framing as desired.",
      },
    ],
    faqs: [
      {
        question: "What is giclée printing?",
        answer:
          "Giclée is a high-quality inkjet printing process using archival inks for museum-quality reproductions.",
      },
      {
        question: "How accurate are the colors?",
        answer:
          "We use color management and proofing to match your original as closely as possible.",
      },
      {
        question: "Can you print on canvas?",
        answer:
          "Yes! We offer premium cotton and poly-cotton canvas with optional stretching and coating.",
      },
    ],
    startingPrice: "$85",
    turnaround: "5-7 business days",
  },
  scanning: {
    id: "scanning",
    title: "Scanning Services",
    description: "Digitize slides, negatives, and old photographs.",
    image: "/images/services/scanning.jpg",
    imageAlt: "Kodachrome slides being digitized",
    longDescription:
      "Preserve your memories for future generations with our professional scanning services. We digitize prints, slides, negatives, and film reels at high resolution, giving you digital files that can be easily shared, reprinted, and backed up.",
    features: [
      "High-resolution scanning (up to 4000 DPI)",
      "Prints, slides, and negatives",
      "35mm, medium format, large format",
      "Dust and scratch removal",
      "Color correction included",
      "Multiple output formats",
    ],
    process: [
      {
        step: 1,
        title: "Drop Off",
        description: "Bring in your photos, slides, or negatives.",
      },
      {
        step: 2,
        title: "Scanning",
        description: "Each item is carefully scanned at high resolution.",
      },
      {
        step: 3,
        title: "Enhancement",
        description: "Basic dust removal and color correction applied.",
      },
      {
        step: 4,
        title: "Delivery",
        description: "Receive your files on USB, DVD, or cloud download.",
      },
    ],
    faqs: [
      {
        question: "What resolution do you scan at?",
        answer:
          "Standard scanning is 600 DPI for prints, 2400 DPI for slides/negatives. Higher available upon request.",
      },
      {
        question: "Can you scan old film formats?",
        answer:
          "Yes! We scan 35mm, 110, 120, 4x5, and other formats including movie film.",
      },
      {
        question: "How are files delivered?",
        answer:
          "Choose USB drive, DVD, or cloud download link. We recommend multiple backups.",
      },
    ],
    startingPrice: "$0.35/image",
    turnaround: "3-5 business days",
  },
  "camera-rentals": {
    id: "camera-rentals",
    title: "Camera Rentals",
    description: "Rent professional camera equipment for your next project.",
    image: "/images/services/camera-rentals.jpg",
    imageAlt: "Professional camera equipment available for rent",
    longDescription:
      "Improve your session with top tier gear! Our rental services provide a flexible and affordable way for individuals and businesses to access a wide range of photography equipment without the need for significant upfront investment.",
    features: [
      "Canon, Sony, Nikon & Tamron lenses",
      "Professional camera bodies",
      "Studio lighting equipment",
      "Tripods and support gear",
      "Daily rental rates",
      "Same day pickup available",
    ],
    process: [
      {
        step: 1,
        title: "Call to Reserve",
        description: "Call us at 801-233-9090 to check availability and reserve your equipment.",
      },
      {
        step: 2,
        title: "Pick Up",
        description: "Collect your gear and receive a quick orientation.",
      },
      {
        step: 3,
        title: "Shoot",
        description: "Create amazing photos and videos with pro equipment.",
      },
      {
        step: 4,
        title: "Return",
        description: "Return equipment and share your results with us!",
      },
    ],
    faqs: [
      {
        question: "How do I reserve equipment?",
        answer:
          "Please call us at 801-233-9090 to reserve an item or if you have any questions.",
      },
      {
        question: "Is a deposit required?",
        answer:
          "Yes, a credit card authorization is required for first time rentals.",
      },
      {
        question: "What if equipment is damaged?",
        answer:
          "Optional damage waiver available. Normal wear is expected; major damage may incur fees.",
      },
    ],
    startingPrice: "$10/day",
    turnaround: "Same day pickup",
    rentalEquipment: [
      {
        category: "Tamron Lenses",
        items: [
          { name: "15-30mm f/2.8 (Canon Mount)", pricePerDay: 30 },
          { name: "24-70mm f/2.8 (Canon Mount)", pricePerDay: 30, discontinued: true },
          { name: "70-200mm f/2.8 (Canon Mount)", pricePerDay: 30 },
          { name: "150-600mm f/5-6.3 (Canon Mount)", pricePerDay: 35 },
        ],
      },
      {
        category: "Sony Lenses",
        items: [
          { name: "FE 24-70mm f/2.8 GM", pricePerDay: 35, discontinued: true },
          { name: "FE 70-200mm f/2.8 GM", pricePerDay: 35 },
          { name: "FE 100-400mm f/4.5-5.6 GM OSS", pricePerDay: 35 },
        ],
      },
      {
        category: "Canon Lenses",
        items: [
          { name: "Canon 24-70mm f/2.8L", pricePerDay: 30 },
          { name: "Canon 50mm f/1.2L", pricePerDay: 30 },
          { name: "Canon 85mm f/1.2L", pricePerDay: 30 },
          { name: "Canon 200-400mm f/4L IS USM", pricePerDay: 80 },
        ],
      },
      {
        category: "Nikon Lenses",
        items: [
          { name: "Nikkor 16-35mm f/4G", pricePerDay: 30 },
          { name: "Nikkor 24-70mm f/2.8G", pricePerDay: 35, discontinued: true },
          { name: "Nikkor 105mm micro f/2.8G VR", pricePerDay: 30 },
          { name: "Nikkor 70-200mm f/2.8G VR II", pricePerDay: 35 },
          { name: "Nikkor 50mm f/1.8G", pricePerDay: 30 },
          { name: "Nikkor 85mm f/1.8G", pricePerDay: 30 },
        ],
      },
      {
        category: "Cameras",
        items: [
          { name: "Canon 1Dx Mark II (body)", pricePerDay: 125 },
          { name: "Canon 5DS R (body)", pricePerDay: 85 },
          { name: "Sony a7R II (body)", pricePerDay: 65 },
          { name: "Sony a7R IV (body)", pricePerDay: 85, discontinued: true },
        ],
      },
      {
        category: "Accessories",
        items: [
          { name: "Canon Speedlite 600 EX RT", pricePerDay: 20 },
          { name: "Nikon SB-910 AF Speedlight", pricePerDay: 20 },
          { name: "Pocket Wizard Plus II (set of 3)", pricePerDay: 10 },
          { name: "Carbon Fiber Tripod with head", pricePerDay: 20 },
          { name: "Monopod", pricePerDay: 10 },
          { name: "Gary Fong Diffuser", pricePerDay: 10 },
          { name: "Westcott Rapid Box", pricePerDay: 20 },
          { name: "Photo Printer DNP DS620A", pricePerDay: 140 },
        ],
      },
      {
        category: "Studio Lighting",
        items: [
          { name: "Elinchrom Kit (2 soft boxes, wireless trigger)", pricePerDay: 65 },
          { name: "Muslin Backdrop (Various Color Choices)", pricePerDay: 15 },
          { name: "Backdrop stand", pricePerDay: 15 },
        ],
      },
    ],
  },
  "video-transfer": {
    id: "video-transfer",
    title: "Video Transfer",
    description: "Convert VHS, film reels, and other formats to digital.",
    image: "/images/services/video-transfer.jpg",
    imageAlt: "Film reels for video transfer service",
    longDescription:
      "Don't let your precious video memories deteriorate on outdated formats. We transfer VHS, VHS-C, Hi8, MiniDV, 8mm film, and other formats to modern digital files that you can watch, share, and preserve forever.",
    features: [
      "VHS and VHS-C transfer",
      "8mm and Super 8 film",
      "Hi8 and MiniDV tapes",
      "DVD or digital file output",
      "Basic color correction",
      "Chapter markers available",
    ],
    process: [
      {
        step: 1,
        title: "Submit Tapes/Film",
        description: "Bring in your tapes or film reels for assessment.",
      },
      {
        step: 2,
        title: "Transfer",
        description: "We professionally transfer your media to digital.",
      },
      {
        step: 3,
        title: "Enhancement",
        description: "Basic color and audio enhancement applied.",
      },
      {
        step: 4,
        title: "Delivery",
        description: "Receive DVDs, USB drive, or digital download.",
      },
    ],
    faqs: [
      {
        question: "What formats do you transfer?",
        answer:
          "VHS, VHS-C, Hi8, Video8, MiniDV, Betamax, 8mm film, Super 8, and 16mm film.",
      },
      {
        question: "What output formats are available?",
        answer: "We provide MP4 files, DVDs, or Blu-ray discs as requested.",
      },
      {
        question: "Can you repair damaged tapes?",
        answer:
          "We can often repair stuck or tangled tapes. Severely damaged media may have some loss.",
      },
    ],
    startingPrice: "$20/tape",
    turnaround: "1-2 weeks",
  },
};
