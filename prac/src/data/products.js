

const products = [
    {
      id: 1,
      name: "XM5 Pro Wireless",
      price: 399.99,
      description: "Premium noise-canceling headphones with exceptional sound quality and 30-hour battery life.",
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true,
      specs: {
        batteryLife: "30 hours",
        noiseCancellation: "Advanced",
        wirelessVersion: "Bluetooth 5.0",
        weight: "254g"
      }
    },
    {
      id: 2,
      name: "Air Pulse Elite",
      price: 299.99,
      description: "Lightweight headphones with impressive bass response and all-day comfort for extended listening sessions.",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true,
      specs: {
        batteryLife: "25 hours",
        noiseCancellation: "Medium",
        wirelessVersion: "Bluetooth 5.1",
        weight: "220g"
      }
    },
    {
      id: 3,
      name: "BassDrop Studio",
      price: 249.99,
      description: "Studio-quality headphones designed for professional audio production with precise sound reproduction.",
      image: "https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true,
      specs: {
        batteryLife: "20 hours",
        noiseCancellation: "Low",
        wirelessVersion: "Bluetooth 4.2",
        weight: "310g"
      }
    },
    {
      id: 4,
      name: "UltraSound Mini",
      price: 199.99,
      description: "Compact on-ear headphones with excellent sound clarity and portable folding design for travelers.",
      image: "https://images.unsplash.com/photo-1572113694932-2282ba0c1dbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true,
      specs: {
        batteryLife: "18 hours",
        noiseCancellation: "Basic",
        wirelessVersion: "Bluetooth 5.0",
        weight: "180g"
      }
    },
    {
      id: 5,
      name: "Echo Wave",
      price: 349.99,
      description: "Premium headphones with spatial audio technology and integrated voice assistant for smart functionality.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false,
      specs: {
        batteryLife: "28 hours",
        noiseCancellation: "Advanced",
        wirelessVersion: "Bluetooth 5.2",
        weight: "265g"
      }
    },
    {
      id: 6,
      name: "Rhythm Pro",
      price: 279.99,
      description: "DJ-style headphones with powerful sound, exceptional durability, and professional-grade audio monitoring.",
      image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false,
      specs: {
        batteryLife: "24 hours",
        noiseCancellation: "Medium",
        wirelessVersion: "Bluetooth 5.0",
        weight: "290g"
      }
    },
    {
      id: 7,
      name: "SoundScape X1",
      price: 189.99,
      description: "Entry-level audiophile headphones with balanced sound profile and comfortable over-ear design.",
      image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false,
      specs: {
        batteryLife: "22 hours",
        noiseCancellation: "Basic",
        wirelessVersion: "Bluetooth 5.0",
        weight: "245g"
      }
    },
    {
      id: 8,
      name: "BeatMaster Pro",
      price: 329.99,
      description: "Premium headphones tuned for electronic music with enhanced bass response and LED lighting effects.",
      image: "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false,
      specs: {
        batteryLife: "20 hours",
        noiseCancellation: "Medium",
        wirelessVersion: "Bluetooth 5.1",
        weight: "320g"
      }
    },
    {
      id: 9,
      name: "AcousticFlow",
      price: 229.99,
      description: "Open-back audiophile headphones designed for critical listening with wide soundstage and natural sound.",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false,
      specs: {
        batteryLife: "Wired",
        noiseCancellation: "None",
        wirelessVersion: "N/A",
        weight: "295g"
      }
    },
    {
      id: 10,
      name: "TravelMate ANC",
      price: 259.99,
      description: "Travel-focused headphones with foldable design, adaptive noise cancellation, and airplane adapter.",
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true,
      specs: {
        batteryLife: "35 hours",
        noiseCancellation: "Advanced Adaptive",
        wirelessVersion: "Bluetooth 5.2",
        weight: "240g"
      }
    },
    {
      id: 11,
      name: "Gaming Commander",
      price: 179.99,
      description: "Gaming headset with virtual 7.1 surround sound, detachable boom mic, and RGB lighting effects.",
      image: "https://images.unsplash.com/photo-1591492654773-6070213a66fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false,
      specs: {
        batteryLife: "15 hours",
        noiseCancellation: "Passive",
        wirelessVersion: "Bluetooth 5.0 & 2.4GHz",
        weight: "350g"
      }
    },
    {
      id: 12,
      name: "ClassicVinyl",
      price: 149.99,
      description: "Retro-styled wired headphones with warm sound signature perfect for vinyl listening enthusiasts.",
      image: "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false,
      specs: {
        batteryLife: "Wired",
        noiseCancellation: "None",
        wirelessVersion: "N/A",
        weight: "280g"
      }
    },
    {
      id: 13,
      name: "SportsFlex",
      price: 129.99,
      description: "Sweat-resistant wireless headphones designed for fitness with secure fit and reflective elements.",
      image: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false,
      specs: {
        batteryLife: "12 hours",
        noiseCancellation: "Low",
        wirelessVersion: "Bluetooth 5.1",
        weight: "165g"
      }
    },
    {
      id: 14,
      name: "PocketBeats",
      price: 89.99,
      description: "Ultra-portable on-ear headphones with foldable design and integrated controls for music and calls.",
      image: "https://images.unsplash.com/photo-1585298723682-7115561c51b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false,
      specs: {
        batteryLife: "15 hours",
        noiseCancellation: "None",
        wirelessVersion: "Bluetooth 5.0",
        weight: "145g"
      }
    },
    {
      id: 15,
      name: "StudioMonitor X3",
      price: 379.99,
      description: "Professional studio monitoring headphones with flat frequency response for audio engineering.",
      image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true,
      specs: {
        batteryLife: "Wired",
        noiseCancellation: "Passive",
        wirelessVersion: "N/A",
        weight: "375g"
      }
    },
    {
      id: 16,
      name: "AirWave Mini",
      price: 119.99,
      description: "Lightweight true wireless earbuds with charging case and touch controls for everyday use.",
      image: "https://images.unsplash.com/photo-1606400082777-44e6004a2296?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false,
      specs: {
        batteryLife: "6 hours (24h with case)",
        noiseCancellation: "Passive",
        wirelessVersion: "Bluetooth 5.2",
        weight: "5g (each), 45g (case)"
      }
    },
    {
      id: 17,
      name: "Crystal Clear",
      price: 219.99,
      description: "Transparent design headphones with customizable LED lighting and balanced audio profile.",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false,
      specs: {
        batteryLife: "18 hours",
        noiseCancellation: "Low",
        wirelessVersion: "Bluetooth 5.0",
        weight: "265g"
      }
    },
    {
      id: 18,
      name: "Harmony Max",
      price: 429.99,
      description: "Premium flagship headphones with multi-device connectivity, personalized sound profiles and voice control.",
      image: "https://images.unsplash.com/photo-1578319439584-104c94d37305?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true,
      specs: {
        batteryLife: "40 hours",
        noiseCancellation: "Advanced Adaptive",
        wirelessVersion: "Bluetooth 5.3",
        weight: "275g"
      }
    },
    {
      id: 19,
      name: "EcoPhonic",
      price: 169.99,
      description: "Sustainable headphones made with recycled materials and bamboo accents with organic sound profile.",
      image: "https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false,
      specs: {
        batteryLife: "24 hours",
        noiseCancellation: "Medium",
        wirelessVersion: "Bluetooth 5.1",
        weight: "230g"
      }
    },
    {
      id: 20,
      name: "VoxGuard Pro",
      price: 289.99,
      description: "Professional broadcast headphones with superior voice clarity and ambient noise filtering technology.",
      image: "https://images.unsplash.com/photo-1600086827875-a63b01f1335c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false,
      specs: {
        batteryLife: "25 hours",
        noiseCancellation: "Advanced (Voice Focused)",
        wirelessVersion: "Bluetooth 5.2",
        weight: "285g"
      }
    }
  ];
  
  export default products;
  