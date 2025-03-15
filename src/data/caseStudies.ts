export const caseStudies = [
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
        image: "/case-studies/mourad.jpg",
        date: "2024-03"
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
        image: "/case-studies/palais.jpg",
        date: "2024-02"
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
        image: "/case-studies/kiddytown.jpg",
        date: "2024-01"
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
        image: "/case-studies/khatra.jpg",
        date: "2024-03"
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
        date: "2024-02"
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
        date: "2024-01"
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