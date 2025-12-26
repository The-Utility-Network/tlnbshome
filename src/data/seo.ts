export interface SEOLocation {
    city: string;
    slug: string;
    country: string;
    region: string;
    description: string;
    coordinates: { x: number; y: number };
    keyFocus: string;
    code: string;
    regulatoryContext: string;
    complianceNarrative: string;
    localTokenizationEconomy: string;
    activeSubsidiaries: string[];
}

export interface SEOIndustry {
    title: string;
    slug: string;
    description: string;
    automationNarrative: string;
    tokenizationNarrative: string;
    complianceNarrative: string;
    reportingNarrative: string;
    subsidiaries: string[];
    marketSize?: string;
    processStages?: { icon: string; title: string; desc: string }[];
}

export type ComparisonCategory = 'Cultivation' | 'Processing' | 'Compliance' | 'Technology';

export interface SEOComparison {
    competitor: string;
    slug: string;
    category: ComparisonCategory;
    description: string;
    TLNBSAdvantage: string;
}

// ============================================================================
// LOCATIONS - Cannabis & Therapeutic Botanical Hubs
// ============================================================================

export const LOCATIONS: SEOLocation[] = [
    {
        city: 'Denver',
        slug: 'denver',
        country: 'USA',
        region: 'North America',
        description: 'The birthplace of legal recreational cannabis in America. Denver serves as TLNBS\'s primary North American hub for I3AS grow automation, connecting cultivators with cutting-edge aquaponic systems and real-time yield optimization.',
        coordinates: { x: -104.9903, y: 39.7392 },
        keyFocus: 'Cultivation Automation',
        code: 'DEN',
        regulatoryContext: 'Colorado\'s Marijuana Enforcement Division (MED) requires comprehensive seed-to-sale tracking. TLNBS integrates with METRC to provide automated compliance reporting for all licensed cultivators.',
        complianceNarrative: 'Our I3AS platform automatically logs every plant movement, environmental change, and harvest event directly to the state METRC system, eliminating manual data entry errors and ensuring 100% compliance with Colorado\'s strict cultivation regulations.',
        localTokenizationEconomy: 'Cultivation licenses, harvest futures, and carbon-negative grow credits. Denver operations focus on premium indoor cultivation with tokenized yield-sharing for investors.',
        activeSubsidiaries: ['The Loch Ness Botanical Society', 'Cornucopia Robotics', 'Requiem Electric'],
    },
    {
        city: 'Oakland',
        slug: 'oakland',
        country: 'USA',
        region: 'North America',
        description: 'California\'s cannabis equity hub. TLNBS partners with social equity applicants to provide affordable I3AS automation solutions, democratizing access to industrial-grade grow technology.',
        coordinates: { x: -122.2712, y: 37.8044 },
        keyFocus: 'Social Equity & Craft Cannabis',
        code: 'OAK',
        regulatoryContext: 'California\'s Bureau of Cannabis Control requires detailed track-and-trace compliance via METRC. The state\'s social equity programs prioritize automation access for underserved communities.',
        complianceNarrative: 'TLNBS provides subsidized I3AS licensing to Oakland\'s social equity operators, ensuring that automated compliance tools aren\'t just for big cannabis—they\'re for everyone.',
        localTokenizationEconomy: 'Craft cannabis futures, equity stake tokens, and community co-op memberships. Oakland tokenizes the small-batch, artisanal cannabis movement.',
        activeSubsidiaries: ['The Loch Ness Botanical Society', 'DigiBazaar'],
    },
    {
        city: 'Portland',
        slug: 'portland',
        country: 'USA',
        region: 'North America',
        description: 'Oregon\'s cannabis capital and a pioneer in sustainable cultivation. TLNBS deploys solar-powered aquaponic systems here, creating the world\'s first carbon-negative grow operations.',
        coordinates: { x: -122.6765, y: 45.5152 },
        keyFocus: 'Sustainable Cultivation',
        code: 'PDX',
        regulatoryContext: 'Oregon\'s Cannabis Tracking System (CTS) mandates comprehensive inventory management. TLNBS integrates renewable energy credits into every automated grow cycle.',
        complianceNarrative: 'Every kilowatt of solar energy used in Portland grows is logged on-chain, creating verifiable carbon credits that can be traded alongside the cannabis harvest itself.',
        localTokenizationEconomy: 'Renewable energy credits, sustainable cultivation certificates, and organic cannabis verification NFTs.',
        activeSubsidiaries: ['The Loch Ness Botanical Society', 'Requiem Electric'],
    },
    {
        city: 'Toronto',
        slug: 'toronto',
        country: 'Canada',
        region: 'North America',
        description: 'The financial heart of Canada\'s federally legal cannabis market. TLNBS connects licensed producers with institutional investors through tokenized cultivation rights.',
        coordinates: { x: -79.3832, y: 43.6532 },
        keyFocus: 'Cannabis Finance & LP Operations',
        code: 'YYZ',
        regulatoryContext: 'Health Canada\'s Cannabis Act provides clear guidelines for Licensed Producers. TLNBS ensures full compliance with the Access to Cannabis for Medical Purposes Regulations (ACMPR).',
        complianceNarrative: 'Our systems generate Health Canada-ready compliance reports automatically, including strain genetic databases, potency testing chains, and production capacity utilization.',
        localTokenizationEconomy: 'LP cultivation licenses, medical cannabis prescriptions, and institutional investment tokens for large-scale grow facilities.',
        activeSubsidiaries: ['The Loch Ness Botanical Society', 'Ledger1', 'Osiris Protocol'],
    },
    {
        city: 'Vancouver',
        slug: 'vancouver',
        country: 'Canada',
        region: 'North America',
        description: 'Home to legendary BC Bud genetics. TLNBS partners with legacy cultivators to preserve heritage strains while automating modern cultivation techniques.',
        coordinates: { x: -123.1216, y: 49.2827 },
        keyFocus: 'Heritage Genetics & Craft Cultivation',
        code: 'YVR',
        regulatoryContext: 'British Columbia\'s micro-cultivation licenses allow for artisanal production. TLNBS provides scaled-down I3AS systems for small-batch operations.',
        complianceNarrative: 'Heritage strain genetics are cataloged on-chain with verified provenance. Every seed carries a genetic NFT linking back to its parentage and breeder.',
        localTokenizationEconomy: 'Genetic IP rights, breeding royalties, and craft cannabis co-op tokens.',
        activeSubsidiaries: ['The Loch Ness Botanical Society', 'The Graine Ledger'],
    },
    {
        city: 'Amsterdam',
        slug: 'amsterdam',
        country: 'Netherlands',
        region: 'Europe',
        description: 'The spiritual home of cannabis culture. TLNBS works with coffeeshop operators and seed banks to bring I3AS automation to Europe\'s oldest cannabis market.',
        coordinates: { x: 4.9041, y: 52.3676 },
        keyFocus: 'Coffeeshop Supply & Seed Banks',
        code: 'AMS',
        regulatoryContext: 'The Netherlands\' gedoogbeleid (tolerance policy) creates a unique regulatory landscape. TLNBS operates within the experimental closed supply chain pilots.',
        complianceNarrative: 'As part of the Dutch cannabis experiment, our systems provide full traceability from licensed cultivators to coffeeshops, helping establish the regulatory framework for EU-wide legalization.',
        localTokenizationEconomy: 'Seed genetics IP, coffeeshop supply tokens, and EU cannabis futures.',
        activeSubsidiaries: ['The Loch Ness Botanical Society', 'DigiBazaar'],
    },
    {
        city: 'Berlin',
        slug: 'berlin',
        country: 'Germany',
        region: 'Europe',
        description: 'Germany is legalizing recreational cannabis in 2024. TLNBS is positioning to become the I3AS backbone for Europe\'s largest emerging cannabis market.',
        coordinates: { x: 13.4050, y: 52.5200 },
        keyFocus: 'EU Market Entry',
        code: 'BER',
        regulatoryContext: 'German cannabis clubs (Anbauvereinigungen) will require strict cultivation tracking. TLNBS provides turnkey compliance for the new "cannabis social clubs" model.',
        complianceNarrative: 'Our systems are pre-configured for German Health Ministry requirements, including member registration, cultivation quotas, and THC potency limits.',
        localTokenizationEconomy: 'Cannabis club memberships, EU pharmaceutical cannabis tokens, and medical research grants.',
        activeSubsidiaries: ['The Loch Ness Botanical Society', 'Arthaneeti'],
    },
    {
        city: 'Barcelona',
        slug: 'barcelona',
        country: 'Spain',
        region: 'Europe',
        description: 'Spain\'s cannabis social clubs pioneered the private cultivation model. TLNBS provides I3AS automation for members-only grow operations across Catalonia.',
        coordinates: { x: 2.1734, y: 41.3851 },
        keyFocus: 'Cannabis Social Clubs',
        code: 'BCN',
        regulatoryContext: 'Spanish cannabis clubs operate in legal grey areas. TLNBS helps clubs maintain meticulous records to demonstrate non-commercial, personal consumption cultivation.',
        complianceNarrative: 'Member consumption tracking, harvest allocation, and contribution logging—all automated to protect clubs from accusations of commercial distribution.',
        localTokenizationEconomy: 'Club membership tokens, collective cultivation shares, and harvest rights NFTs.',
        activeSubsidiaries: ['The Loch Ness Botanical Society', 'Elysium Athletica'],
    },
    {
        city: 'Bangkok',
        slug: 'bangkok',
        country: 'Thailand',
        region: 'Asia',
        description: 'Thailand became the first Asian nation to legalize cannabis. TLNBS is deploying tropical aquaponic systems optimized for Southeast Asian climates.',
        coordinates: { x: 100.5018, y: 13.7563 },
        keyFocus: 'Tropical Cultivation & Medical Exports',
        code: 'BKK',
        regulatoryContext: 'Thailand\'s Food and Drug Administration oversees cannabis cultivation for medical and wellness purposes. TLNBS ensures GMP-compliant production.',
        complianceNarrative: 'Our systems meet Thai FDA GMP standards and international export requirements, enabling Thai cultivators to supply the global medical cannabis market.',
        localTokenizationEconomy: 'Medical cannabis export licenses, traditional Thai medicine formulations, and wellness tourism packages.',
        activeSubsidiaries: ['The Loch Ness Botanical Society', 'Cornucopia Robotics'],
    },
    {
        city: 'Melbourne',
        slug: 'melbourne',
        country: 'Australia',
        region: 'Oceania',
        description: 'Australia\'s medical cannabis market is growing rapidly. TLNBS partners with TGA-licensed producers to automate pharmaceutical-grade cultivation.',
        coordinates: { x: 144.9631, y: -37.8136 },
        keyFocus: 'Pharmaceutical Cannabis',
        code: 'MEL',
        regulatoryContext: 'Australia\'s Therapeutic Goods Administration (TGA) requires pharmaceutical-grade production standards. TLNBS provides GMP-compliant I3AS systems.',
        complianceNarrative: 'Every cultivation parameter is logged to pharmaceutical standards, creating the documentation trail required for TGA approval and international export.',
        localTokenizationEconomy: 'Pharmaceutical cannabis licenses, clinical trial data rights, and patient access tokens.',
        activeSubsidiaries: ['The Loch Ness Botanical Society', 'Osiris Protocol'],
    },
    {
        city: 'Bogotá',
        slug: 'bogota',
        country: 'Colombia',
        region: 'South America',
        description: 'Colombia\'s ideal growing climate and progressive regulations make it a global cannabis export powerhouse. TLNBS enables large-scale outdoor cultivation automation.',
        coordinates: { x: -74.0721, y: 4.7110 },
        keyFocus: 'Export-Grade Cultivation',
        code: 'BOG',
        regulatoryContext: 'Colombia\'s cannabis export framework is among the world\'s most advanced. TLNBS helps cultivators meet EU-GMP and international pharmaceutical standards.',
        complianceNarrative: 'From seed to export documentation, our systems generate the complete GMP audit trail required for international pharmaceutical cannabis trade.',
        localTokenizationEconomy: 'Export licenses, international distribution rights, and fair-trade cultivation certificates.',
        activeSubsidiaries: ['The Loch Ness Botanical Society', 'Vulcan Forge'],
    },
    {
        city: 'Montevideo',
        slug: 'montevideo',
        country: 'Uruguay',
        region: 'South America',
        description: 'The first country to fully legalize cannabis. Uruguay\'s pioneering framework informs TLNBS\'s approach to national-scale I3AS deployment.',
        coordinates: { x: -56.1645, y: -34.9011 },
        keyFocus: 'National Cannabis Systems',
        code: 'MVD',
        regulatoryContext: 'Uruguay\'s IRCCA (Institute for Regulation and Control of Cannabis) oversees the entire national cannabis system. TLNBS supports all three access pathways: pharmacies, clubs, and home cultivation.',
        complianceNarrative: 'Our systems integrate with IRCCA\'s national registry, ensuring that pharmacy sales, club distributions, and home grow registrations are all tracked seamlessly.',
        localTokenizationEconomy: 'National cultivation licenses, pharmacy distribution rights, and cannabis research grants.',
        activeSubsidiaries: ['The Loch Ness Botanical Society', 'Arthaneeti'],
    },
    {
        city: 'Edinburgh',
        slug: 'edinburgh',
        country: 'Scotland',
        region: 'Europe',
        description: 'The spiritual home of The Loch Ness Botanical Society. Our Scottish headquarters focuses on R&D for therapeutic botanicals and next-generation cultivation systems.',
        coordinates: { x: -3.1883, y: 55.9533 },
        keyFocus: 'R&D & Therapeutic Botanicals',
        code: 'EDI',
        regulatoryContext: 'The UK\'s Home Office oversees cannabis cultivation licenses for research. TLNBS holds Schedule 1 research authorizations for therapeutic botanical development.',
        complianceNarrative: 'Our Edinburgh labs meet GLP (Good Laboratory Practice) standards, enabling clinical research into cannabinoids, psilocybin, and other therapeutic compounds.',
        localTokenizationEconomy: 'Research IP rights, clinical trial tokens, and therapeutic botanical patents.',
        activeSubsidiaries: ['The Loch Ness Botanical Society', 'The Graine Ledger', 'Osiris Protocol'],
    },
    {
        city: 'Kingston',
        slug: 'kingston',
        country: 'Jamaica',
        region: 'Caribbean',
        description: 'Jamaica\'s rich cannabis heritage meets modern I3AS automation. TLNBS works with Rastafarian communities and legacy growers to preserve traditional genetics.',
        coordinates: { x: -76.7936, y: 17.9714 },
        keyFocus: 'Heritage Cannabis & Cultural Preservation',
        code: 'KIN',
        regulatoryContext: 'Jamaica\'s Cannabis Licensing Authority (CLA) provides licenses for cultivation, processing, and retail. TLNBS supports the sacramental use exemptions for Rastafarian communities.',
        complianceNarrative: 'We help traditional growers transition to licensed cultivation while preserving the cultural and spiritual significance of ganja in Jamaican society.',
        localTokenizationEconomy: 'Heritage strain genetics, cultural tourism experiences, and community cultivation cooperatives.',
        activeSubsidiaries: ['The Loch Ness Botanical Society', 'DigiBazaar'],
    },
    {
        city: 'Las Vegas',
        slug: 'las-vegas',
        country: 'USA',
        region: 'North America',
        description: 'The entertainment capital of the world meets cannabis hospitality. TLNBS powers the automated cultivation behind Vegas\'s premium consumption lounges.',
        coordinates: { x: -115.1398, y: 36.1699 },
        keyFocus: 'Cannabis Hospitality & Tourism',
        code: 'LAS',
        regulatoryContext: 'Nevada\'s Cannabis Compliance Board oversees the state\'s integrated cannabis tourism industry. TLNBS ensures consumption lounges maintain compliant on-site cultivation.',
        complianceNarrative: 'From grow room to consumption lounge, every gram is tracked. Our systems integrate with point-of-sale and consumption monitoring for full regulatory compliance.',
        localTokenizationEconomy: 'Consumption lounge experiences, cannabis tourism packages, and premium strain access tokens.',
        activeSubsidiaries: ['The Loch Ness Botanical Society', 'Elysium Athletica', 'DigiBazaar'],
    },
    {
        city: 'Detroit',
        slug: 'detroit',
        country: 'USA',
        region: 'North America',
        description: 'Michigan\'s cannabis industry is revitalizing Detroit\'s economy. TLNBS supports legacy operators and social equity applicants with accessible I3AS technology.',
        coordinates: { x: -83.0458, y: 42.3314 },
        keyFocus: 'Legacy Market Transition',
        code: 'DTW',
        regulatoryContext: 'Michigan\'s Cannabis Regulatory Agency prioritizes social equity licensing. TLNBS provides discounted automation systems for legacy operators transitioning to the legal market.',
        complianceNarrative: 'Our compliance systems help legacy growers document their expertise while meeting Michigan\'s rigorous seed-to-sale tracking requirements.',
        localTokenizationEconomy: 'Social equity cultivation tokens, legacy grower credentials, and community reinvestment certificates.',
        activeSubsidiaries: ['The Loch Ness Botanical Society', 'Vulcan Forge'],
    },
];

// ============================================================================
// INDUSTRIES - Cannabis & Therapeutic Botanical Sectors
// ============================================================================

export const INDUSTRIES: SEOIndustry[] = [
    {
        title: 'Cannabis Cultivation',
        slug: 'cannabis-cultivation',
        description: 'Automated indoor, outdoor, and greenhouse cannabis cultivation leveraging I3AS for optimal yields and consistent quality.',
        automationNarrative: 'TLNBS I3AS systems control every environmental variable—lighting, CO2, humidity, nutrients—in real-time. Our AI-driven cultivation protocols maximize cannabinoid production while minimizing energy consumption.',
        tokenizationNarrative: 'Cultivation facilities become investable assets. Tokenized harvest futures allow investors to fund grow cycles in exchange for yield-sharing. Strain-specific tokens track premium genetics from seed to sale.',
        complianceNarrative: 'METRC, BioTrack, Leaf Logix—we integrate with all major seed-to-sale platforms. Every plant touch, environment change, and harvest event is automatically logged for regulatory compliance.',
        reportingNarrative: 'Cultivators access real-time dashboards showing plant health metrics, environmental conditions, yield projections, and compliance status across their entire operation.',
        processStages: [
            { icon: '🌱', title: 'Propagation', desc: 'Clone cutting & germination' },
            { icon: '🌿', title: 'Vegetation', desc: 'Automated light cycles' },
            { icon: '🌺', title: 'Flowering', desc: 'Cannabinoid development' },
            { icon: '✂️', title: 'Harvest', desc: 'Optimal timing alerts' }
        ],
        subsidiaries: ['The Loch Ness Botanical Society', 'Cornucopia Robotics'],
    },
    {
        title: 'Extraction & Processing',
        slug: 'extraction-processing',
        description: 'Precision extraction of cannabinoids and terpenes using automated hydrocarbon, CO2, and solventless processing systems.',
        automationNarrative: 'Our extraction automation maintains precise temperature, pressure, and solvent ratios for consistent concentrate production. Closed-loop systems maximize terpene preservation while ensuring operator safety.',
        tokenizationNarrative: 'Extraction capacity becomes tradable. Facilities can sell processing slots to cultivators, with smart contracts handling scheduling, pricing, and revenue sharing automatically.',
        complianceNarrative: 'Residual solvent testing, potency verification, and batch tracking are automated. Every extraction run generates the documentation required for state compliance and product safety.',
        reportingNarrative: 'Real-time monitoring of extraction yields, solvent recovery rates, and output quality. Historical data analysis optimizes future runs for maximum efficiency.',
        processStages: [
            { icon: '🧊', title: 'Prep', desc: 'Material preparation' },
            { icon: '⚗️', title: 'Extract', desc: 'Cannabinoid isolation' },
            { icon: '🔥', title: 'Purge', desc: 'Solvent removal' },
            { icon: '💎', title: 'Refine', desc: 'Final product' }
        ],
        subsidiaries: ['The Loch Ness Botanical Society', 'Vulcan Forge'],
    },
    {
        title: 'Aquaponic Cannabis',
        slug: 'aquaponic-cannabis',
        description: 'Sustainable cultivation combining fish aquaculture with hydroponic cannabis growing for zero-waste, organic production.',
        automationNarrative: 'TLNBS\'s signature Perennial Waters systems manage the symbiotic relationship between fish and plants. Automated feeding, water quality monitoring, and nutrient cycling create the world\'s most sustainable cannabis.',
        tokenizationNarrative: 'Carbon-negative cannabis is premium cannabis. Every harvest comes with verifiable sustainability credentials that command higher market prices and attract ESG-focused investors.',
        complianceNarrative: 'Organic certification and sustainability audits are automated. Our systems document water usage, energy consumption, and waste reduction for B-Corp and similar certifications.',
        reportingNarrative: 'Live monitoring of fish health, nitrogen cycles, plant uptake rates, and overall system balance. Predictive alerts prevent system crashes before they occur.',
        processStages: [
            { icon: '🐟', title: 'Fish', desc: 'Nutrient production' },
            { icon: '🦠', title: 'Microbes', desc: 'Nitrogen conversion' },
            { icon: '💧', title: 'Water', desc: 'Nutrient delivery' },
            { icon: '🌿', title: 'Plants', desc: 'Cannabinoid synthesis' }
        ],
        subsidiaries: ['The Loch Ness Botanical Society', 'Requiem Electric'],
    },
    {
        title: 'Hemp & CBD',
        slug: 'hemp-cbd',
        description: 'Industrial hemp cultivation and CBD extraction for wellness products, textiles, and construction materials.',
        automationNarrative: 'Large-scale outdoor hemp cultivation requires different automation than indoor cannabis. Our systems optimize irrigation, pest management, and harvest timing across hundreds of acres.',
        tokenizationNarrative: 'Hemp commodity futures trade on-chain. Farmers can lock in prices before planting, while processors can secure supply without storage costs. CBD isolate trades as a fungible commodity token.',
        complianceNarrative: 'USDA hemp program compliance is complex. Our systems ensure THC levels stay below 0.3%, manage crop testing, and generate the documentation for federal compliance.',
        reportingNarrative: 'Acreage monitoring via satellite and drone imagery. Predictive models forecast optimal harvest windows based on CBD content and THC risk.',
        processStages: [
            { icon: '🌾', title: 'Plant', desc: 'Field cultivation' },
            { icon: '📡', title: 'Monitor', desc: 'Satellite tracking' },
            { icon: '🧪', title: 'Test', desc: 'THC compliance' },
            { icon: '📦', title: 'Process', desc: 'CBD extraction' }
        ],
        subsidiaries: ['The Loch Ness Botanical Society', 'Cornucopia Robotics'],
    },
    {
        title: 'Medical Cannabis',
        slug: 'medical-cannabis',
        description: 'Pharmaceutical-grade cannabis production meeting GMP standards for prescription medical products.',
        automationNarrative: 'Medical cannabis requires pharmaceutical-level precision. Clean room automation, validated processes, and rigorous quality control ensure every batch meets clinical standards.',
        tokenizationNarrative: 'Patient access programs can be tokenized. Patients receive prescription tokens that unlock medical cannabis allocations, while their anonymized health outcomes improve strain development.',
        complianceNarrative: 'GMP documentation, batch records, and deviation management are fully automated. Our systems generate the audit trails required for health authority approval.',
        reportingNarrative: 'Clinical-grade reporting for certificate of analysis, stability studies, and patient outcome tracking (with consent).',
        processStages: [
            { icon: '🏥', title: 'Qualify', desc: 'GMP certification' },
            { icon: '🧬', title: 'Standardize', desc: 'Consistent dosing' },
            { icon: '💊', title: 'Formulate', desc: 'Product development' },
            { icon: '📋', title: 'Document', desc: 'Clinical compliance' }
        ],
        subsidiaries: ['The Loch Ness Botanical Society', 'Osiris Protocol', 'Ledger1'],
    },
    {
        title: 'Dispensary & Retail',
        slug: 'dispensary-retail',
        description: 'Automated inventory management, point-of-sale integration, and customer experience optimization for cannabis retailers.',
        automationNarrative: 'TLNBS retail automation manages inventory levels, tracks sell-through rates, and optimizes product mix. Automated reordering ensures dispensaries never run out of bestsellers.',
        tokenizationNarrative: 'Customer loyalty programs become token-based. Purchase history creates personalized strain recommendations, while loyalty tokens unlock exclusive products and experiences.',
        complianceNarrative: 'Every sale is tracked from seed to consumer. Our POS integration ensures real-time compliance reporting and prevents sales to underage or out-of-state customers.',
        reportingNarrative: 'Sales analytics, customer demographics, and inventory turnover—all visible in real-time dashboards for data-driven retail management.',
        processStages: [
            { icon: '📦', title: 'Receive', desc: 'Inventory intake' },
            { icon: '🏷️', title: 'Price', desc: 'Dynamic pricing' },
            { icon: '💳', title: 'Sell', desc: 'POS integration' },
            { icon: '📊', title: 'Analyze', desc: 'Sales insights' }
        ],
        subsidiaries: ['DigiBazaar', 'Ledger1'],
    },
    {
        title: 'Therapeutic Botanicals',
        slug: 'therapeutic-botanicals',
        description: 'Emerging psychedelic and therapeutic compound cultivation including psilocybin, ketamine, and adaptogenic mushrooms.',
        automationNarrative: 'Beyond cannabis, TLNBS automates the cultivation of therapeutic compounds. Controlled environment mushroom cultivation, precision alkaloid extraction, and clinical-grade purification.',
        tokenizationNarrative: 'Research organizations can tokenize clinical trial participation. Patients gain access to experimental treatments while researchers secure funding for studies.',
        complianceNarrative: 'DEA Schedule I research compliance is heavily documented. Our systems maintain the security, chain of custody, and reporting required for controlled substance research.',
        reportingNarrative: 'Research-grade data collection for publication-quality clinical studies. Automated adverse event reporting and outcome tracking.',
        processStages: [
            { icon: '🍄', title: 'Cultivate', desc: 'Controlled growth' },
            { icon: '🧪', title: 'Extract', desc: 'Compound isolation' },
            { icon: '🔬', title: 'Research', desc: 'Clinical trials' },
            { icon: '💉', title: 'Treat', desc: 'Patient access' }
        ],
        subsidiaries: ['The Loch Ness Botanical Society', 'The Graine Ledger'],
    },
    {
        title: 'Genetics & Breeding',
        slug: 'genetics-breeding',
        description: 'Cannabis genetics development, strain stabilization, and intellectual property management for cultivators and breeders.',
        automationNarrative: 'Breeding programs require meticulous data collection. Our systems track lineage, phenotype expressions, and genetic markers across thousands of plants to accelerate strain development.',
        tokenizationNarrative: 'Genetics are IP. Breeder rights are tokenized, ensuring that every clone or seed sold generates royalties for the original developer—automatically, transparently, on-chain.',
        complianceNarrative: 'Strain registries, plant variety protection applications, and licensing agreements are all managed on-chain. Provenance is cryptographically proven.',
        reportingNarrative: 'Genetic databases link phenotype expressions to consumer preferences and medical outcomes, guiding the development of next-generation cultivars.',
        processStages: [
            { icon: '🧬', title: 'Map', desc: 'Genetic sequencing' },
            { icon: '🌱', title: 'Cross', desc: 'Selective breeding' },
            { icon: '📊', title: 'Analyze', desc: 'Phenotype selection' },
            { icon: '📜', title: 'Protect', desc: 'IP registration' }
        ],
        subsidiaries: ['The Loch Ness Botanical Society', 'The Graine Ledger', 'Osiris Protocol'],
    },
];

// ============================================================================
// COMPARISONS - Cannabis Industry Competitive Landscape
// ============================================================================

export const COMPARISONS: SEOComparison[] = [
    {
        competitor: 'Metrc',
        slug: 'metrc',
        category: 'Compliance',
        description: 'The dominant government-mandated seed-to-sale tracking system used in most legal cannabis states.',
        TLNBSAdvantage: 'TLNBS doesn\'t replace Metrc—we supercharge it. Our I3AS automation feeds data directly to Metrc, eliminating manual entry errors and providing the operational insights Metrc lacks.',
    },
    {
        competitor: 'Dutchie',
        slug: 'dutchie',
        category: 'Technology',
        description: 'Leading cannabis e-commerce and POS platform serving dispensaries across North America.',
        TLNBSAdvantage: 'Dutchie handles retail; TLNBS handles cultivation. Our systems feed inventory data to Dutchie POS while automating the grow operations that keep dispensary shelves stocked.',
    },
    {
        competitor: 'Leafly',
        slug: 'leafly',
        category: 'Technology',
        description: 'Cannabis information platform providing strain data, dispensary listings, and consumer education.',
        TLNBSAdvantage: 'Leafly describes strains; TLNBS grows them. Our cultivation data provides the verified terpene profiles and cannabinoid ratios that make Leafly reviews meaningful.',
    },
    {
        competitor: 'Flowhub',
        slug: 'flowhub',
        category: 'Compliance',
        description: 'Cannabis retail management platform with compliance, POS, and inventory features.',
        TLNBSAdvantage: 'Flowhub manages retail operations; TLNBS automates cultivation. Together, they create a closed-loop system from grow room to consumer.',
    },
    {
        competitor: 'Priva',
        slug: 'priva',
        category: 'Cultivation',
        description: 'Dutch greenhouse automation company serving commercial horticulture worldwide.',
        TLNBSAdvantage: 'Priva is hardware-focused; TLNBS is outcomes-focused. We integrate Priva systems (and competitors) into a unified I3AS platform optimized specifically for cannabis production.',
    },
    {
        competitor: 'Argus Controls',
        slug: 'argus-controls',
        category: 'Cultivation',
        description: 'Environmental control systems for commercial cannabis and agricultural facilities.',
        TLNBSAdvantage: 'Argus controls environments; TLNBS optimizes outcomes. Our AI layer sits on top of Argus hardware, continuously learning and improving cultivation protocols.',
    },
    {
        competitor: 'Fluence',
        slug: 'fluence',
        category: 'Cultivation',
        description: 'LED grow lighting systems designed for cannabis and controlled environment agriculture.',
        TLNBSAdvantage: 'Fluence makes lights; TLNBS makes those lights smart. Our automation adjusts Fluence spectra and intensity in real-time based on plant stage, strain genetics, and energy costs.',
    },
    {
        competitor: 'BioTrackTHC',
        slug: 'biotrackthc',
        category: 'Compliance',
        description: 'Seed-to-sale tracking software used by state governments and cannabis businesses.',
        TLNBSAdvantage: 'BioTrack is a compliance requirement; TLNBS is a competitive advantage. We make compliance automatic while providing the operational insights BioTrack can\'t.',
    },
    {
        competitor: 'Canopy Growth',
        slug: 'canopy-growth',
        category: 'Cultivation',
        description: 'One of the world\'s largest cannabis companies with massive cultivation facilities.',
        TLNBSAdvantage: 'Canopy is a single operator; TLNBS is an open platform. Any cultivator—from craft to industrial—can access the same automation technology without joining a corporate conglomerate.',
    },
    {
        competitor: 'Curaleaf',
        slug: 'curaleaf',
        category: 'Cultivation',
        description: 'Multi-state cannabis operator with integrated cultivation, manufacturing, and retail.',
        TLNBSAdvantage: 'Curaleaf\'s technology is proprietary; TLNBS is open. Independent cultivators compete with giants using the same I3AS automation—without selling equity or signing exclusives.',
    },
    {
        competitor: 'Traditional Farming',
        slug: 'traditional-farming',
        category: 'Cultivation',
        description: 'Manual cultivation methods relying on grower experience and intuition.',
        TLNBSAdvantage: 'Experience is valuable; data is scalable. TLNBS captures master grower knowledge in automated protocols that run 24/7, consistently, without human error or fatigue.',
    },
    {
        competitor: 'General Hydroponics',
        slug: 'general-hydroponics',
        category: 'Cultivation',
        description: 'Nutrient and hydroponic systems manufacturer for cannabis and general horticulture.',
        TLNBSAdvantage: 'GH makes inputs; TLNBS makes decisions. Our automation optimizes nutrient delivery, pH balance, and feeding schedules regardless of which brand of nutrients you use.',
    },
    {
        competitor: 'Hawthorne Gardening',
        slug: 'hawthorne-gardening',
        category: 'Cultivation',
        description: 'Scotts Miracle-Gro subsidiary providing cannabis cultivation supplies and technology.',
        TLNBSAdvantage: 'Hawthorne sells products; TLNBS sells outcomes. Our success is measured in yield improvements and cost reductions, not equipment sales.',
    },
    {
        competitor: 'Cannabis ERP Systems',
        slug: 'cannabis-erp',
        category: 'Technology',
        description: 'Enterprise resource planning software adapted for cannabis business operations.',
        TLNBSAdvantage: 'ERP tracks operations; TLNBS automates them. We don\'t just report what happened—we control what happens next.',
    },
    {
        competitor: 'GrowerIQ',
        slug: 'groweriq',
        category: 'Compliance',
        description: 'Cannabis production management software for licensed producers.',
        TLNBSAdvantage: 'GrowerIQ organizes workflows; TLNBS executes them. Your SOPs become automated protocols that run without human intervention.',
    },
    {
        competitor: 'Elevate',
        slug: 'elevate',
        category: 'Technology',
        description: 'Cannabis software for cultivation, manufacturing, and compliance management.',
        TLNBSAdvantage: 'Elevate digitizes paper processes; TLNBS eliminates processes entirely. Automation means fewer things to track because fewer things can go wrong.',
    },
];
