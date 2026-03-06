export interface NavChild {
  to: string
  label: string
}

export interface NavSection {
  label: string
  children: NavChild[]
}

export const navSections: NavSection[] = [
  {
    label: 'Strategy',
    children: [
      { to: '/strategy/brand-guidelines', label: 'Brand & Guidelines' },
      { to: '/strategy/campaign-planning', label: 'Campaign Planning' },
    ],
  },
  {
    label: 'Content Production',
    children: [
      { to: '/content-production/pipeline', label: 'Content Pipeline' },
      { to: '/content-production/asset-library', label: 'Asset Library' },
      { to: '/content-production/automation', label: 'Automation' },
    ],
  },
  {
    label: 'Localization',
    children: [
      { to: '/localization/market-adaptation', label: 'Market Adaptation' },
      { to: '/localization/market-readiness', label: 'Market Readiness' },
    ],
  },
  {
    label: 'Distribution',
    children: [
      { to: '/distribution/channel-deployment', label: 'Channel Deployment' },
      { to: '/distribution/campaign-launch', label: 'Campaign Launch' },
    ],
  },
  {
    label: 'Measurement',
    children: [
      { to: '/measurement/content-performance', label: 'Content Performance' },
      { to: '/measurement/campaign-impact', label: 'Campaign Impact' },
      { to: '/measurement/content-analytics', label: 'Content Analytics' },
    ],
  },
  {
    label: 'Governance',
    children: [
      { to: '/governance/change-management', label: 'Change Management' },
      { to: '/governance/compliance', label: 'Compliance' },
    ],
  },
  {
    label: 'Data & Systems',
    children: [
      { to: '/data-systems/tracking', label: 'Tracking' },
      { to: '/data-systems/taxonomy', label: 'Taxonomy' },
      { to: '/data-systems/integrations', label: 'Integrations' },
    ],
  },
  {
    label: 'Insights',
    children: [
      { to: '/insights/supply-chain-intelligence', label: 'Supply Chain Intelligence' },
      { to: '/insights/optimization', label: 'Optimization' },
    ],
  },
  {
    label: 'Admin',
    children: [
      { to: '/admin/user-management', label: 'User Management' },
      { to: '/admin/system-settings', label: 'System Settings' },
    ],
  },
]

export const sectionTitles: Record<string, string> = {
  '/strategy/brand-guidelines': 'Brand & Guidelines',
  '/strategy/campaign-planning': 'Campaign Planning',
  '/content-production/pipeline': 'Content Pipeline',
  '/content-production/asset-library': 'Asset Library',
  '/content-production/automation': 'Automation',
  '/localization/market-adaptation': 'Market Adaptation',
  '/localization/market-readiness': 'Market Readiness',
  '/distribution/channel-deployment': 'Channel Deployment',
  '/distribution/campaign-launch': 'Campaign Launch',
  '/measurement/content-performance': 'Content Performance',
  '/measurement/campaign-impact': 'Campaign Impact',
  '/measurement/content-analytics': 'Content Analytics',
  '/governance/change-management': 'Change Management',
  '/governance/compliance': 'Compliance',
  '/data-systems/tracking': 'Tracking',
  '/data-systems/taxonomy': 'Taxonomy',
  '/data-systems/integrations': 'Integrations',
  '/insights/supply-chain-intelligence': 'Supply Chain Intelligence',
  '/insights/optimization': 'Optimization',
  '/admin/user-management': 'User Management',
  '/admin/system-settings': 'System Settings',
}
