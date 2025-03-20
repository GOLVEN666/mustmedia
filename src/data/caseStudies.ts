export interface MonthlyData {
    month: string;
    revenue: number;
    orders: number;
}

export interface Metric {
    label: string;
    value: string;
    trend: "up" | "down";
}

export interface ZoneData {
    zone: string;
    leads: number;
    percentage: number;
}

export interface Testimonial {
    quote: string;
    author: string;
    position: string;
}

export interface CaseStudy {
    id: string;
    title: string;
    category: string;
    description: string;
    fullDescription: string;
    metrics: Metric[];
    tags: string[];
    image: string;
    date: string;
    challenge?: string;
    solution?: string;
    testimonial?: Testimonial;
    monthlyData: MonthlyData[];
    zoneData?: ZoneData[];
    revenueGrowth?: {
        startAmount: number;
        endAmount: number;
        days: number;
        leads: {
            start: number;
            end: number;
        };
    };
}

export const caseStudies: CaseStudy[] = [
    // Marketing des Réseaux Sociaux & Acquisition de Clients
    {
        id: "mourad",
        title: "Mourad – Propriétaire d'Entreprise de Leasing",
        category: "Marketing des Réseaux Sociaux",
        description: "D'une présence nulle à des milliers d'abonnés et des centaines de clients",
        fullDescription: "Nous avons prospecté, négocié et signé Mourad comme client régulier. Nos efforts l'ont fait passer d'une présence en ligne inexistante à des milliers d'abonnés ciblés, lui apportant des centaines de nouveaux clients et même de nouveaux employés grâce au branding Instagram.",
        metrics: [
            { label: "Nouveaux Abonnés", value: "1000+", trend: "up" },
            { label: "Nouveaux Clients", value: "100+", trend: "up" },
            { label: "Nouveaux Employés", value: "5+", trend: "up" }
        ],
        tags: ["Réseaux Sociaux", "Acquisition Client", "Instagram"],
        image: "/case-studies/mourad.png",
        date: "2024-03",
        monthlyData: [
            { month: 'Jan', revenue: 2000, orders: 20 },
            { month: 'Feb', revenue: 3500, orders: 35 },
            { month: 'Mar', revenue: 5500, orders: 55 },
            { month: 'Apr', revenue: 7500, orders: 75 },
            { month: 'May', revenue: 8500, orders: 85 },
            { month: 'Jun', revenue: 10000, orders: 100 }
        ],
        zoneData: [
            { zone: "Casablanca", leads: 860, percentage: 43 },
            { zone: "Rabat", leads: 420, percentage: 21 },
            { zone: "Marrakech", leads: 280, percentage: 14 },
            { zone: "Tanger", leads: 180, percentage: 9 },
            { zone: "Fes", leads: 160, percentage: 8 },
            { zone: "Agadir", leads: 100, percentage: 5 }
        ]
    },
    {
        id: "palais-delices",
        title: "Palais des Délices – Succès E-Commerce",
        category: "E-Commerce",
        description: "Vente complète du stock en deux semaines grâce au marketing stratégique",
        fullDescription: "En deux semaines, nous avons complètement écoulé son stock, générant une demande si forte qu'elle a dû nous demander de ralentir le marketing pendant qu'elle développait ses opérations.",
        metrics: [
            { label: "Liquidation Stock", value: "100%", trend: "up" },
            { label: "Délai", value: "2 semaines", trend: "down" },
            { label: "Croissance Ventes", value: "300%", trend: "up" }
        ],
        tags: ["E-Commerce", "Stratégie Marketing", "Croissance"],
        image: "/case-studies/palais.png",
        date: "2024-02",
        monthlyData: [
            { month: 'Jan', revenue: 5000, orders: 50 },
            { month: 'Feb', revenue: 7500, orders: 75 },
            { month: 'Mar', revenue: 15000, orders: 150 },
            { month: 'Apr', revenue: 25000, orders: 250 },
            { month: 'May', revenue: 35000, orders: 350 },
            { month: 'Jun', revenue: 50000, orders: 500 }
        ],
        revenueGrowth: {
            startAmount: 8000,
            endAmount: 60000,
            days: 20,
            leads: {
                start: 30,
                end: 500
            }
        },
        zoneData: [
            { zone: "Casablanca", leads: 430, percentage: 35 },
            { zone: "Rabat", leads: 280, percentage: 23 },
            { zone: "Marrakech", leads: 220, percentage: 18 },
            { zone: "Fes", leads: 150, percentage: 12 },
            { zone: "Agadir", leads: 90, percentage: 7 },
            { zone: "Tanger", leads: 60, percentage: 5 }
        ]
    },
    {
        id: "kiddytown",
        title: "KiddyTown – Centre de Divertissement",
        category: "Commerce Local",
        description: "Domination du marché du divertissement pour enfants à Mohammedia",
        fullDescription: "Avec une stratégie marketing bien étudiée, nous avons fait de KiddyTown l'une des destinations familiales les plus reconnues de Mohammedia, dominant facilement le marché de la ville.",
        metrics: [
            { label: "Part de Marché", value: "65%", trend: "up" },
            { label: "Notoriété", value: "90%", trend: "up" },
            { label: "Croissance Clients", value: "150%", trend: "up" }
        ],
        tags: ["Commerce Local", "Image de Marque", "Domination Marché"],
        image: "/case-studies/kt.png",
        date: "2024-01",
        monthlyData: [
            { month: 'Jan', revenue: 3000, orders: 30 },
            { month: 'Feb', revenue: 4500, orders: 45 },
            { month: 'Mar', revenue: 6500, orders: 65 },
            { month: 'Apr', revenue: 8500, orders: 85 },
            { month: 'May', revenue: 9500, orders: 95 },
            { month: 'Jun', revenue: 12000, orders: 120 }
        ],
        zoneData: [
            { zone: "Casablanca", leads: 258, percentage: 32 },
            { zone: "Rabat", leads: 180, percentage: 22 },
            { zone: "Marrakech", leads: 150, percentage: 19 },
            { zone: "Tanger", leads: 120, percentage: 15 },
            { zone: "Fes", leads: 60, percentage: 7 },
            { zone: "Agadir", leads: 40, percentage: 5 }
        ]
    },
    // Sites Web à Haute Valeur
    {
        id: "khatra",
        title: "Khatra – Fournisseur B2B de Café",
        category: "Développement Web",
        description: "Site B2B premium pour propriétaires de cafés et acheteurs de franchise",
        fullDescription: "Un site web hautement optimisé conçu pour attirer les propriétaires de cafés et les acheteurs de franchise à la recherche de solutions café haut de gamme.",
        metrics: [
            { label: "Génération Leads", value: "+80%", trend: "up" },
            { label: "Taux Conversion", value: "12%", trend: "up" },
            { label: "Demandes B2B", value: "+150%", trend: "up" }
        ],
        tags: ["Développement Web", "B2B", "Industrie du Café"],
        image: "/case-studies/khatra.png",
        date: "2024-03",
        monthlyData: [
            { month: 'Jan', revenue: 15000, orders: 25 },
            { month: 'Feb', revenue: 18000, orders: 30 },
            { month: 'Mar', revenue: 25000, orders: 42 },
            { month: 'Apr', revenue: 35000, orders: 58 },
            { month: 'May', revenue: 45000, orders: 75 },
            { month: 'Jun', revenue: 60000, orders: 100 }
        ],
        zoneData: [
            { zone: "Casablanca", leads: 172, percentage: 25 },
            { zone: "Rabat", leads: 155, percentage: 22 },
            { zone: "Marrakech", leads: 140, percentage: 20 },
            { zone: "Fes", leads: 120, percentage: 17 },
            { zone: "Tanger", leads: 65, percentage: 9 },
            { zone: "Agadir", leads: 45, percentage: 7 }
        ]
    },
    {
        id: "moads",
        title: "Moad's – Plateforme E-Commerce",
        category: "Développement Web",
        description: "Plateforme e-commerce à grande échelle pour produits d'amélioration de la concentration",
        fullDescription: "Une plateforme e-commerce à grande échelle conçue pour vendre un produit unique visant à améliorer la concentration et l'efficacité.",
        metrics: [
            { label: "Efficacité Plateforme", value: "95%", trend: "up" },
            { label: "Expérience Utilisateur", value: "4.8/5", trend: "up" },
            { label: "Optimisation Mobile", value: "100%", trend: "up" }
        ],
        tags: ["E-Commerce", "Développement Web", "Design UX"],
        image: "/case-studies/moads.jpg",
        date: "2024-02",
        monthlyData: [
            { month: 'Jan', revenue: 25000, orders: 250 },
            { month: 'Feb', revenue: 35000, orders: 350 },
            { month: 'Mar', revenue: 45000, orders: 450 },
            { month: 'Apr', revenue: 65000, orders: 650 },
            { month: 'May', revenue: 85000, orders: 850 },
            { month: 'Jun', revenue: 100000, orders: 1000 }
        ],
        zoneData: [
            { zone: "Casablanca", leads: 344, percentage: 30 },
            { zone: "Rabat", leads: 290, percentage: 25 },
            { zone: "Marrakech", leads: 230, percentage: 20 },
            { zone: "Tanger", leads: 150, percentage: 13 },
            { zone: "Fes", leads: 80, percentage: 7 },
            { zone: "Agadir", leads: 60, percentage: 5 }
        ]
    },
    {
        id: "mustmedia",
        title: "Mustmedia – Site de Notre Agence",
        category: "Développement Web",
        description: "Notre hub digital présentant nos services et résultats",
        fullDescription: "Un hub digital présentant nos services, résultats clients et stratégies marketing. Cette plateforme est entièrement intégrée avec une photographie experte et conçue pour l'acquisition de clients.",
        metrics: [
            { label: "Conversion Clients", value: "+70%", trend: "up" },
            { label: "Taux d'Engagement", value: "85%", trend: "up" },
            { label: "Qualité des Leads", value: "+90%", trend: "up" }
        ],
        tags: ["Développement Web", "Photographie", "Acquisition Client"],
        image: "/case-studies/mustmedia.jpg",
        date: "2024-01",
        monthlyData: [
            { month: 'Jan', revenue: 20000, orders: 15 },
            { month: 'Feb', revenue: 25000, orders: 20 },
            { month: 'Mar', revenue: 35000, orders: 28 },
            { month: 'Apr', revenue: 45000, orders: 35 },
            { month: 'May', revenue: 60000, orders: 45 },
            { month: 'Jun', revenue: 80000, orders: 60 }
        ],
        zoneData: [
            { zone: "Casablanca", leads: 215, percentage: 28 },
            { zone: "Rabat", leads: 185, percentage: 24 },
            { zone: "Marrakech", leads: 160, percentage: 21 },
            { zone: "Tanger", leads: 110, percentage: 14 },
            { zone: "Fes", leads: 65, percentage: 8 },
            { zone: "Agadir", leads: 40, percentage: 5 }
        ]
    }
];

export const categories = [
    {
        id: "social-media",
        title: "Marketing des Réseaux Sociaux & Acquisition de Clients",
        description: "Histoires de réussite d'entreprises que nous avons aidées à se développer via les réseaux sociaux et l'acquisition stratégique de clients."
    },
    {
        id: "web-development",
        title: "Sites Web à Haute Valeur",
        description: "Présentation des sites web et plateformes premium que nous avons développés pour divers secteurs."
    },
    {
        id: "e-commerce",
        title: "Projets E-Commerce",
        description: "Au-delà du travail client, nous testons et lançons activement des produits e-commerce, identifiant les opportunités à forte demande et les développant pour générer du profit."
    }
];