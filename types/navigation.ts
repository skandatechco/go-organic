// types/navigation.ts
// Type definitions for site navigation structure

export interface SubMenuItem {
  name: string
  href: string
  description?: string
  icon?: string
}

export interface MainMenuItem {
  name: string
  href: string
  submenu: SubMenuItem[]
  icon?: string
  description?: string
}

export type NavigationItem = MainMenuItem

// Full navigation structure
export const siteNavigation: NavigationItem[] = [
  {
    name: 'Start Here',
    href: '/start-here',
    submenu: [],
    icon: '🌱',
    description: 'Begin your organic journey'
  },
  {
    name: 'Kitchen & Food',
    href: '/kitchen-food',
    icon: '🍽️',
    description: 'Organic meal delivery, pantry essentials, and non-toxic cookware',
    submenu: [
      {
        name: 'Meal Delivery Services',
        href: '/kitchen-food/meal-delivery',
        description: 'Organic meal kits and subscription boxes'
      },
      {
        name: 'Pantry Essentials',
        href: '/kitchen-food/pantry-essentials',
        description: 'Oils, grains, spices, and baking supplies'
      },
      {
        name: 'Beverages',
        href: '/kitchen-food/beverages',
        description: 'Coffee, tea, juices, and plant-based milk'
      },
      {
        name: 'Snacks & Treats',
        href: '/kitchen-food/snacks',
        description: 'Healthy snacks, protein bars, and organic chocolate'
      },
      {
        name: 'Non-Toxic Cookware',
        href: '/kitchen-food/cookware',
        description: 'Pots, pans, bakeware, and kitchen tools'
      },
      {
        name: 'Food Storage',
        href: '/kitchen-food/food-storage',
        description: 'Containers, wraps, and lunch boxes'
      },
      {
        name: 'Shopping Guides',
        href: '/kitchen-food/guides',
        description: 'Dirty Dozen, seasonal guides, and store comparisons'
      }
    ]
  },
  {
    name: 'Home & Cleaning',
    href: '/home-cleaning',
    icon: '🏠',
    description: 'Natural cleaning products and eco-friendly home solutions',
    submenu: [
      {
        name: 'All-Purpose Cleaners',
        href: '/home-cleaning/all-purpose-cleaners',
        description: 'Multi-surface, kitchen, and bathroom cleaners'
      },
      {
        name: 'Laundry Solutions',
        href: '/home-cleaning/laundry',
        description: 'Detergents, stain removers, and fabric softeners'
      },
      {
        name: 'Dishwashing',
        href: '/home-cleaning/dishwashing',
        description: 'Dish soap, dishwasher detergent, and pods'
      },
      {
        name: 'Air Quality',
        href: '/home-cleaning/air-quality',
        description: 'Air purifiers, diffusers, and candles'
      },
      {
        name: 'Pest Control',
        href: '/home-cleaning/pest-control',
        description: 'Natural bug repellents and outdoor solutions'
      },
      {
        name: 'Cleaning Tools',
        href: '/home-cleaning/cleaning-tools',
        description: 'Brushes, cloths, mops, and vacuums'
      },
      {
        name: 'DIY Recipes',
        href: '/home-cleaning/diy-recipes',
        description: 'Homemade cleaning solution guides'
      }
    ]
  },
  {
    name: 'Beauty & Personal Care',
    href: '/beauty-personal-care',
    icon: '✨',
    description: 'Clean beauty and organic personal care products',
    submenu: [
      {
        name: 'Skincare',
        href: '/beauty-personal-care/skincare',
        description: 'Face and body care products'
      },
      {
        name: 'Haircare',
        href: '/beauty-personal-care/haircare',
        description: 'Shampoo, conditioner, and styling products'
      },
      {
        name: 'Makeup',
        href: '/beauty-personal-care/makeup',
        description: 'Clean makeup and beauty tools'
      },
      {
        name: 'Oral Care',
        href: '/beauty-personal-care/oral-care',
        description: 'Toothpaste, mouthwash, and whitening'
      },
      {
        name: 'Deodorant & Body Care',
        href: '/beauty-personal-care/deodorant-body',
        description: 'Natural deodorants and body wash'
      },
      {
        name: 'Sun Protection',
        href: '/beauty-personal-care/sun-protection',
        description: 'Mineral sunscreen and after-sun care'
      },
      {
        name: "Men's Grooming",
        href: '/beauty-personal-care/mens-grooming',
        description: 'Beard care, shaving, and skincare for men'
      },
      {
        name: 'Brand Spotlights',
        href: '/beauty-personal-care/brands',
        description: 'In-depth clean beauty brand reviews'
      }
    ]
  },
  {
    name: 'Bedroom & Sleep',
    href: '/bedroom-sleep',
    icon: '🛏️',
    description: 'Organic mattresses, bedding, and sleep essentials',
    submenu: [
      {
        name: 'Organic Mattresses',
        href: '/bedroom-sleep/mattresses',
        description: 'Memory foam, latex, hybrid mattresses'
      },
      {
        name: 'Bedding',
        href: '/bedroom-sleep/bedding',
        description: 'Sheets, duvet covers, and comforters'
      },
      {
        name: 'Pillows',
        href: '/bedroom-sleep/pillows',
        description: 'Down, latex, and memory foam pillows'
      },
      {
        name: 'Mattress Toppers',
        href: '/bedroom-sleep/toppers',
        description: 'Cooling and comfort toppers'
      },
      {
        name: 'Sleepwear',
        href: '/bedroom-sleep/sleepwear',
        description: 'Organic pajamas and loungewear'
      },
      {
        name: 'Sleep Accessories',
        href: '/bedroom-sleep/accessories',
        description: 'Eye masks, white noise, aromatherapy'
      },
      {
        name: 'Mattress Comparisons',
        href: '/bedroom-sleep/comparisons',
        description: 'Compare top organic mattress brands'
      }
    ]
  },
  {
    name: 'Family & Baby',
    href: '/family-baby',
    icon: '👶',
    description: 'Safe, organic products for your growing family',
    submenu: [
      {
        name: 'Baby Food & Nutrition',
        href: '/family-baby/baby-food',
        description: 'Formula, purees, and feeding supplies'
      },
      {
        name: 'Diapers & Wipes',
        href: '/family-baby/diapers-wipes',
        description: 'Eco-friendly diaper options'
      },
      {
        name: 'Baby Skincare & Bath',
        href: '/family-baby/baby-skincare',
        description: 'Gentle lotions and bath products'
      },
      {
        name: 'Nursing & Feeding',
        href: '/family-baby/nursing-feeding',
        description: 'Bottles, breast pumps, nursing products'
      },
      {
        name: 'Baby Gear',
        href: '/family-baby/baby-gear',
        description: 'Strollers, carriers, monitors'
      },
      {
        name: "Kids' Products",
        href: '/family-baby/kids-products',
        description: 'Lunch boxes, water bottles, school supplies'
      },
      {
        name: 'Maternity & Postpartum',
        href: '/family-baby/maternity',
        description: 'Pregnancy and postpartum essentials'
      },
      {
        name: 'Non-Toxic Toys',
        href: '/family-baby/toys',
        description: 'Wooden toys and safe playthings'
      }
    ]
  },
  {
    name: 'Wellness & Supplements',
    href: '/wellness-supplements',
    icon: '💊',
    description: 'Organic vitamins, supplements, and holistic health',
    submenu: [
      {
        name: 'Vitamins & Minerals',
        href: '/wellness-supplements/vitamins-minerals',
        description: 'Multivitamins, D3, B-complex, minerals'
      },
      {
        name: 'Protein & Fitness',
        href: '/wellness-supplements/protein-fitness',
        description: 'Protein powder and pre-workout'
      },
      {
        name: 'Herbal Supplements',
        href: '/wellness-supplements/herbal-supplements',
        description: 'Adaptogens, turmeric, mushroom blends'
      },
      {
        name: 'Digestive Health',
        href: '/wellness-supplements/digestive-health',
        description: 'Probiotics, enzymes, fiber'
      },
      {
        name: 'Essential Oils',
        href: '/wellness-supplements/essential-oils',
        description: 'Aromatherapy oils and diffusers'
      },
      {
        name: "Women's Health",
        href: '/wellness-supplements/womens-health',
        description: 'Prenatal and hormonal support'
      },
      {
        name: "Men's Health",
        href: '/wellness-supplements/mens-health',
        description: 'Performance and prostate health'
      },
      {
        name: 'Where to Buy',
        href: '/wellness-supplements/where-to-buy',
        description: 'Best places to buy supplements online'
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: '📚',
    description: 'Guides, certifications, and organic living resources',
    submenu: [
      {
        name: 'Certification Guide',
        href: '/resources/certifications',
        description: 'Understanding organic certifications'
      },
      {
        name: 'Brand Directory',
        href: '/resources/brand-directory',
        description: 'Complete list of reviewed brands'
      },
      {
        name: 'Shopping Guides',
        href: '/resources/shopping-guides',
        description: 'Where to buy and save on organic products'
      },
      {
        name: 'Glossary',
        href: '/resources/glossary',
        description: 'Organic living terms explained'
      },
      {
        name: 'About Us',
        href: '/resources/about',
        description: 'Our mission and methodology'
      }
    ]
  }
]

// Helper function to get all routes (useful for sitemap generation)
export function getAllRoutes(): string[] {
  const routes: string[] = ['/']
  
  siteNavigation.forEach(item => {
    routes.push(item.href)
    item.submenu.forEach(subItem => {
      routes.push(subItem.href)
    })
  })
  
  return routes
}

// Helper function to find navigation item by href
export function getNavigationItem(href: string): MainMenuItem | SubMenuItem | null {
  for (const item of siteNavigation) {
    if (item.href === href) return item
    
    for (const subItem of item.submenu) {
      if (subItem.href === href) return subItem
    }
  }
  return null
}

// Helper function to get breadcrumbs for a given path
export function getBreadcrumbs(href: string): Array<{ name: string; href: string }> {
  const breadcrumbs = [{ name: 'Home', href: '/' }]
  
  for (const item of siteNavigation) {
    if (href.startsWith(item.href)) {
      breadcrumbs.push({ name: item.name, href: item.href })
      
      const subItem = item.submenu.find(sub => sub.href === href)
      if (subItem) {
        breadcrumbs.push({ name: subItem.name, href: subItem.href })
      }
      break
    }
  }
  
  return breadcrumbs
}

// Helper to get related subcategories (for cross-linking)
export function getRelatedCategories(href: string, limit: number = 3): SubMenuItem[] {
  for (const item of siteNavigation) {
    if (href.startsWith(item.href)) {
      // Return other subcategories from the same main category
      return item.submenu
        .filter(sub => sub.href !== href)
        .slice(0, limit)
    }
  }
  return []
}

