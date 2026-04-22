import { Bell, LayoutDashboard, Layers, Settings, FileText, Users2, Search } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'
import { Input } from '../ui/FormControls'

const navItems = [
  { to: '/app/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/app/campaigns', label: 'Campaigns', icon: Layers },
  { to: '/app/contacts', label: 'Contacts', icon: Users2 },
  { to: '/app/templates', label: 'Templates', icon: FileText },
  { to: '/app/settings', label: 'Settings', icon: Settings },
]

export default function AppShell() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex max-w-[1600px] gap-4 p-4 md:gap-6 md:p-6">
        <aside className="hidden w-72 shrink-0 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-950/5 lg:block">
          <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-500 p-4 text-white">
            <p className="text-xs uppercase tracking-[0.18em] text-indigo-100">ColdPing</p>
            <h1 className="mt-3 text-2xl font-semibold">Outreach OS</h1>
            <p className="mt-2 text-sm text-indigo-100">Find people, craft messages, track replies.</p>
          </div>
          <nav className="mt-6 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`
                  }
                >
                  <Icon size={17} />
                  {item.label}
                </NavLink>
              )
            })}
          </nav>
        </aside>

        <div className="flex min-h-[calc(100vh-3rem)] flex-1 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-950/5">
          <header className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-4 py-3 md:px-6">
            <div className="relative w-full max-w-md">
              <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input placeholder="Search contacts, companies, campaigns..." className="pl-9" />
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700">
                <Bell size={18} />
              </button>
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500" />
            </div>
          </header>
          <main className="flex-1 overflow-y-auto bg-slate-50 p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
