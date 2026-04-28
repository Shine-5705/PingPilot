import { useEffect, useRef, useState } from 'react'
import {
  Bell,
  LayoutDashboard,
  Layers,
  Settings,
  FileText,
  Users2,
  Search,
  Menu,
  X,
  Plus,
  BarChart3,
  Sparkles,
} from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'
import { Button } from '../ui/Button'
import { Input } from '../ui/FormControls'

const navItems = [
  { to: '/app/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/app/campaigns', label: 'Campaigns', icon: Layers },
  { to: '/app/contacts', label: 'Contacts', icon: Users2 },
  { to: '/app/insights', label: 'Insights', icon: BarChart3 },
  { to: '/app/templates', label: 'Templates', icon: FileText },
  { to: '/app/settings', label: 'Settings', icon: Settings },
]

export default function AppShell() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const searchRef = useRef(null)

  const navClassName = ({ isActive }) =>
    `group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm transition-all duration-300 ease-in-out ${
      isActive
        ? 'bg-brand-50 text-brand-500 shadow-sm shadow-brand-500/5'
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    }`

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        searchRef.current?.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-160px] top-[-140px] h-[420px] w-[420px] rounded-full bg-brand-100/60 blur-3xl" />
        <div className="absolute bottom-[-180px] right-[-120px] h-[380px] w-[380px] rounded-full bg-blue-light-100/70 blur-3xl" />
        <div className="absolute left-1/2 top-[-4rem] h-40 w-[36rem] -translate-x-1/2 rounded-full bg-white/70 blur-3xl animate-soft-pulse" />
      </div>

      <div className="mx-auto flex max-w-[1600px] gap-4 p-3 md:gap-6 md:p-6">
        <aside className="sticky top-6 hidden h-[calc(100vh-3rem)] w-80 shrink-0 overflow-y-auto rounded-[2rem] border border-gray-200 bg-white p-4 shadow-[0_18px_60px_-30px_rgba(16,24,40,0.3)] lg:block">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-gray-950 via-gray-900 to-brand-900 p-4 text-white">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-200">ColdPing</p>
            <h1 className="mt-3 font-display text-3xl leading-none font-bold">Outreach OS</h1>
            <p className="mt-3 text-sm text-gray-300">Find people, craft messages, track replies.</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-300">
              <Sparkles size={14} className="text-brand-300" />
              Session builder + CRM + AI drafts
            </div>
          </div>
          <div className="mt-4 rounded-[1.5rem] border border-gray-200 bg-gray-50 p-3 text-xs text-gray-600">
            <p className="font-medium text-gray-900">This week</p>
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between">
                <span>128 contacts enriched</span>
                <span className="font-medium text-gray-900">+18%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>46 messages sent</span>
                <span className="font-medium text-emerald-700">+6%</span>
              </div>
            </div>
          </div>
          <nav className="mt-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <NavLink key={item.to} to={item.to} className={navClassName}>
                  <Icon size={17} className="transition-transform duration-300 group-hover:scale-110" />
                  {item.label}
                </NavLink>
              )
            })}
          </nav>
        </aside>

        <div className="reference-shell flex min-h-[calc(100vh-1.5rem)] flex-1 flex-col overflow-hidden rounded-[2rem]">
          <header className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 bg-white/90 px-4 py-3 md:px-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileNavOpen(true)}
                className="rounded-full p-2 text-gray-500 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-700 lg:hidden"
              >
                <Menu size={18} />
              </button>
              <div className="relative w-full min-w-[220px] max-w-md">
                <Search
                  size={16}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <Input
                  ref={searchRef}
                  placeholder="Search contacts, companies, campaigns..."
                  className="pl-9 pr-16 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-brand-100"
                />
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-[10px] font-medium text-gray-500">
                  ⌘K
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <Button className="gap-2 px-3 py-2 text-xs md:text-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5">
                <Plus size={14} />
                New Campaign
              </Button>
              <button className="rounded-full p-2 text-gray-500 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-700">
                <Bell size={18} />
              </button>
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand-500 to-blue-light-500" />
            </div>
          </header>
          <main className="flex-1 overflow-y-auto bg-gray-50/70 p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 transition lg:hidden ${mobileNavOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!mobileNavOpen}
      >
        <div
          onClick={() => setMobileNavOpen(false)}
          className={`absolute inset-0 bg-slate-900/40 transition ${mobileNavOpen ? 'opacity-100' : 'opacity-0'}`}
        />
        <aside
          className={`absolute left-0 top-0 h-full w-72 bg-white p-4 shadow-xl transition-transform duration-300 ease-in-out ${
            mobileNavOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="mb-4 flex items-center justify-between">
            <p className="text-lg font-semibold">ColdPing</p>
            <button
              onClick={() => setMobileNavOpen(false)}
              className="rounded-lg p-1 text-slate-500 hover:bg-slate-100"
            >
              <X size={16} />
            </button>
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={navClassName}
                  onClick={() => setMobileNavOpen(false)}
                >
                  <Icon size={17} />
                  {item.label}
                </NavLink>
              )
            })}
          </nav>
          <div className="mt-6 rounded-2xl bg-gray-950 p-4 text-white">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-200">Focus</p>
            <p className="mt-2 text-sm text-gray-300">Build one campaign, review contacts, then send at scale.</p>
          </div>
        </aside>
      </div>
    </div>
  )
}
