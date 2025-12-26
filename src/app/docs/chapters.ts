export interface ChapterSection {
    heading: string;
    content: string;
}

export interface ChapterData {
    id: string;
    number: string;
    title: string;
    subtitle: string;
    pullQuote: string;
    color: string;
    sections: ChapterSection[];
}

export const chapter1: ChapterData = {
    id: 'genesis',
    number: '01',
    title: 'THE GENESIS',
    subtitle: 'The First NFT-mediated Crypto Greenhouse',
    pullQuote: 'Harnessing decentralized power to enable greater access to botanical automation.',
    color: '#10b981', // Emerald
    sections: [
        {
            heading: 'The Vision',
            content: 'The Loch Ness Botanical Society (TLNBS) represents a radical bio-digital fusion of sustainable horticultural science and decentralized autonomous organization (DAO) governance. Born from the need to secure food sovereignty and medicinal purity in an increasingly automated world, TLNBS encodes the laws of nature directly into the blockchain.\n\nOur mission is to democratize access to Industrial Automation as a Service (I3AS), transforming what was once the domain of corporate agri-giants into a distributed, transparent, and community-owned utility.'
        },
        {
            heading: 'System Architecture',
            content: 'At the heart of our operation lies the "Crypto Greenhouse" model. This is not merely a metaphor but a literal integration of IoT sensing arrays, hydrodynamic feedback loops, and smart contract logic. Each grow-cycle is mediated by non-fungible tokens representing both the physical asset (the plant) and the digital provenance (the data).\n\nBy eliminating the middle-management layer and replacing it with transparent, immutable code, we ensure that resources are allocated efficiently, yields are distributed fairly, and the genetic purity of our botanical strains is preserved for future generations.'
        },
        {
            heading: 'DAO Governance',
            content: 'TLNBS is governed entirely by its members. Through the Loch Ness DAO, stakeholders propose and vote on key operational parameters—from nutrient solution adjustments to facility expansion initiatives. This "on-chain" governance model ensures that no central authority can compromise the society\'s mission.\n\nParticipation tokens grant voting weight, effectively turning every member into a co-owner of the world\'s most advanced decentralized botanical infrastructure.'
        }
    ]
};

export const chapter2: ChapterData = {
    id: 'fundamentals',
    number: '02',
    title: 'FUNDAMENTALS',
    subtitle: 'Biological Symbiosis & Genetic Excellence',
    pullQuote: 'Aquaponics is moving from the realm of experimental to commercial.',
    color: '#34d399', // Light Emerald
    sections: [
        {
            heading: 'The Aquaponic Engine',
            content: 'The core of our I3AS stack is a closed-loop aquaponic engine. This bio-mimetic system leverages the symbiotic relationship between aquaculture (raising fish) and hydroponics (growing plants without soil). Nutrient-rich effluent from our aquatic tanks is bio-filtered and circulated to the botanical beds, where plant roots uptake the nitrogenous waste, returning purified water to the fish.\n\nThis cycle reduces water consumption by 90% compared to traditional agriculture and eliminates the need for petrochemical fertilizers, creating a self-sustaining ecosystem optimized for high-density vertical production.'
        },
        {
            heading: 'Genetic Provenance',
            content: 'In an era of genetic modification and patent-locked seeds, TLNBS stands as a guardian of botanical heritage. We maintain a "Living Library" of heirloom and landrace strains, each with its genetic marker cryptographically hashed onto the blockchain.\n\n**Data Point: DNA Verifiability**\n\nThrough our partnership with biochemical labs, we utilize **Single Nucleotide Polymorphism (SNP)** mapping to generate a unique hash for every mother plant. This "Digital DNA" record allows every harvest to be traced back to its specific mother plant, verifying potency, terpene profile, and cultivation metrics with **99.98% genetic certainty**.'
        },
        {
            heading: 'Bio-Chemical Tuning',
            content: 'Our cultivation team consists of biochemists utilizing **optogenetics** and **thermogenetics** to precisely tune the synthesis of cannabinoids, terpenoids, and flavonoids.\n\n**Scientific Figure 2.1: Spectral Optimization**\n\nBy leveraging the **Emerson Effect**—simultaneously exposing the canopy to deep red (660nm) and far-red (730nm) light—we enhance the rate of photosynthesis (Ps) by up to **20%** compared to monochromatic irradiation. This "push-pull" effect on Photosystem I and II accelerates the Calvin Cycle, allowing us to achieve **5+ harvests per year** (approx. 65-day cycles) with yields consistently exceeding 600g/m².'
        },
        {
            heading: 'The TLNBS Chemovar System',
            content: 'Moving beyond the archaic Sativa/Indica/Ruderalis taxonomy, we have developed a proprietary **11-Chemovar Classification System**. This chemotaxonomy is based on the specific molar ratios of major cannabinoids (THC, CBD, CBG) against the dominant terpene super-classes (Monoterpenes vs. Sesquiterpenes).\n\n**Taxonomic Matrix:**\n\n- **Type I-IV**: THC Dominant (segregated by Myrcene, Limonene, Pinene, or Linalool dominance)\n- **Type V-VII**: Balanced 1:1 Profiles (tuned for the "Entourage Effect" maximization)\n- **Type VIII-X**: Minor Cannabinoid Dominant (CBG, THCV, CBN variants)\n- **Type XI**: Null-Cannabinoid / High-Flavonoid (Anthocyanin-rich cultivars for biosynthetic industrial applications)\n\nThis granularity allows us to target specific therapeutic windows with pharmaceutical precision.'
        }
    ]
};

export const chapter3: ChapterData = {
    id: 'i3as-model',
    number: '03',
    title: 'THE I3AS MODEL',
    subtitle: 'Decentralized Infrastructure Deployment',
    pullQuote: 'Standardizing the architecture of automated growth.',
    color: '#06b6d4', // Cyan
    sections: [
        {
            heading: 'Grow Spot Sponsorship',
            content: 'The I3AS (Industrial Automation as a Service) model allows members to sponsor autonomous "Grow Spots". **Each I3AS Token is priced at $10,000**, representing a fractional ownership of the facility\'s output capacity.\n\nThis sponsorship grants the holder a **20% share of the yield** from every harvest cycle. With our accelerated 5+ harvest/year schedule, this represents a high-velocity continuous stream of premium botanical assets, managed entirely by our automated stack.'
        },
        {
            heading: 'The Satellite Project',
            content: 'Scalability is achieved through the Satellite Project. Rather than building massive, centralized mega-farms, TLNBS deploys standardized, modular "Micro-Facilities" into urban centers involved in the network. These satellite units are plug-and-play compatible with our I3AS control stack.\n\nThis distributed approach reduces food miles, enhances local resilience, and allows the network to scale organically. A satellite unit in Tokyo operates on the exact same protocols as one in the Scottish Highlands, sharing data and optimizing growth algorithms across the global mesh.'
        },
        {
            heading: 'Recursive Optimization',
            content: 'The true power of the I3AS model lies in its ability to learn. Growth data from every sponsored spot and satellite unit is aggregated to train our central botanical AI. If a specific light cycle increases yield in a Madrid facility, that optimization is instantly propagated to all compatible units worldwide. It is a recursive, self-improving system that gets smarter with every harvest.'
        }
    ]
};

export const chapter4: ChapterData = {
    id: 'collections',
    number: '04',
    title: 'COLLECTIONS',
    subtitle: 'The Perennial Waters Archive',
    pullQuote: 'Barrel offerings that go far beyond standard distillery expectations.',
    color: '#3b82f6', // blue
    sections: [
        {
            heading: 'The Perennial Waters',
            content: 'While our primary focus is botanical, our flagship "Perennial Waters" collection represents the alchemy of our ecosystem. Utilizing the ultra-pure, bio-filtered water from our aquaponic systems, we craft small-batch distillates that capture the essence of the closed-loop cycle.\n\nAged in barrels that have been exposed to the specific humidity and temperature fluctuations of our grow rooms, these spirits absorb the "terroir" of the indoor botanical forest, resulting in a flavor profile that is technically impossible to reproduce in a standard distillery.'
        },
        {
            heading: 'Digital Collectibles',
            content: 'Each release in the Perennial Waters collection is paired with a generative NFT art piece. These digital assets are not mere jpegs; they are data visualizations of the specific environmental conditions during that batch\'s production.\n\nThe color palette, geometric complexity, and animation speed of the NFT are driven by the pH logs, lumen-hours, and harvest weights of the corresponding grow cycle. Owning a Perennial Waters NFT is owning a crystallized moment of the society\'s operational history.'
        }
    ]
};

export const chapter5: ChapterData = {
    id: 'participation',
    number: '05',
    title: 'PARTICIPATION',
    subtitle: 'Joining the Botanical Revolution',
    pullQuote: 'Something for everyone, from connoisseurs to enthusiasts.',
    color: '#8b5cf6', // Violet
    sections: [
        {
            heading: 'Member Tiers',
            content: 'TLNBS offers multiple tiers of participation to suit different levels of engagement:\n\n**Observer**: Access to the public data explorer and community forums. Ideal for those curious about the technology.\n\n**Cultivator**: Full voting rights in the DAO, eligibility for Grow Spot sponsorship, and early access to seed drops.\n\n**Architect**: A governance-heavy role for those contributing code, hardware designs, or facility space to the Satellite Project. Architects shape the future protocols of the society.'
        },
        {
            heading: 'The Future of Growth',
            content: 'We are standing at the precipice of a new agricultural revolution. One where the farm is not a distant field, but a distributed, data-driven layer of our urban infrastructure. Where food security is code, and provenance is mathematical truth.\n\nThe Loch Ness Botanical Society invites you to join us in building this future. Whether you are a connoisseur seeking the purest product, a technologist fascinated by the I3AS stack, or an investor looking for sustainable yield, there is a place for you in the canopy.'
        }
    ]
};

export const chapters: ChapterData[] = [
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5
];
