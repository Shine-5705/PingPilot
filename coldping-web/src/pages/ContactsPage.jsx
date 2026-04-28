import { useMemo, useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight, Copy, ExternalLink, Eye, Sparkles, X } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader } from '../components/ui/Card'
import { Input, Select } from '../components/ui/FormControls'
import { StatusBadge } from '../components/ui/StatusBadge'
import { Toast } from '../components/ui/Toast'
import { contacts as initialContacts } from '../data/mockData'

const statuses = ['Not Contacted', 'Contacted', 'Replied', 'Follow-up Needed']

export default function ContactsPage() {
  const [contacts, setContacts] = useState(initialContacts)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState(null)
  const [sortBy, setSortBy] = useState('score-desc')
  const [toast, setToast] = useState('')

  const pageSize = 4

  const filteredSorted = useMemo(() => {
    let data = contacts.filter((contact) => {
      const matchQuery =
        contact.name.toLowerCase().includes(search.toLowerCase()) ||
        contact.role.toLowerCase().includes(search.toLowerCase()) ||
        contact.company.toLowerCase().includes(search.toLowerCase())
      const matchStatus = statusFilter === 'All' || contact.status === statusFilter
      return matchQuery && matchStatus
    })

    if (sortBy === 'name-asc') {
      data = [...data].sort((a, b) => a.name.localeCompare(b.name))
    }
    if (sortBy === 'score-desc') {
      data = [...data].sort((a, b) => b.score - a.score)
    }
    return data
  }, [contacts, search, statusFilter, sortBy])

  const totalPages = Math.max(1, Math.ceil(filteredSorted.length / pageSize))
  const paged = filteredSorted.slice((page - 1) * pageSize, page * pageSize)

  const updateStatus = (id, nextStatus) => {
    setContacts((prev) => prev.map((item) => (item.id === id ? { ...item, status: nextStatus } : item)))
  }

  const copyText = async (text, label) => {
    await navigator.clipboard.writeText(text)
    setToast(`${label} copied`)
    setTimeout(() => setToast(''), 1800)
  }

  return (
    <div className="space-y-6">
      <section className="reference-panel overflow-hidden bg-gradient-to-br from-white via-white to-blue-50/40 p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="section-kicker">Contacts</p>
            <h2 className="font-display mt-2 text-3xl font-bold text-slate-950">CRM table</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
              CRM-style view of enriched people with email and LinkedIn links.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
            <Sparkles size={14} />
            Enriched and scored
          </div>
        </div>
      </section>

      <Card className="overflow-hidden">
        <CardHeader className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/70">
          <div className="flex flex-1 flex-wrap items-center gap-3">
            <Input
              placeholder="Search name, role, company"
              className="max-w-sm"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setPage(1)
              }}
            />
            <Select
              value={statusFilter}
              className="w-44"
              onChange={(e) => {
                setStatusFilter(e.target.value)
                setPage(1)
              }}
            >
              <option value="All">All statuses</option>
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </Select>
            <Select value={sortBy} className="w-40" onChange={(e) => setSortBy(e.target.value)}>
              <option value="score-desc">Top match</option>
              <option value="name-asc">Name A-Z</option>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="custom-scrollbar max-h-[68vh] overflow-auto">
            <table className="w-full min-w-[950px] text-left text-sm">
              <thead className="sticky top-0 z-10 bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Role</th>
                  <th className="px-4 py-3 font-medium">Company</th>
                  <th className="px-4 py-3 font-medium">LinkedIn</th>
                  <th className="px-4 py-3 font-medium">Email</th>
                  <th className="px-4 py-3 font-medium">AI Message</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {paged.map((contact) => (
                  <tr
                    key={contact.id}
                    className="border-t border-slate-100 transition hover:bg-slate-50/80"
                  >
                    <td className="px-4 py-3">
                      <p className="font-medium text-slate-900">{contact.name}</p>
                      <p className="text-xs text-slate-500">Match score: {contact.score}%</p>
                    </td>
                    <td className="px-4 py-3 text-slate-700">{contact.role}</td>
                    <td className="px-4 py-3 text-slate-700">{contact.company}</td>
                    <td className="px-4 py-3">
                      <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-500"
                      >
                        Profile
                        <ExternalLink size={14} />
                      </a>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => copyText(contact.email, 'Email')}
                        className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-slate-700 transition hover:bg-slate-200"
                      >
                        <Copy size={14} />
                        Copy
                      </button>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => setSelected(contact)}
                        className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2 py-1 text-brand-700 transition hover:bg-brand-100"
                      >
                        <Eye size={14} />
                        View
                      </button>
                    </td>
                    <td className="px-4 py-3">
                      <div className="relative inline-flex">
                        <select
                          value={contact.status}
                          onChange={(e) => updateStatus(contact.id, e.target.value)}
                          className="appearance-none rounded-xl border border-slate-300 bg-white px-3 py-1.5 pr-8 text-xs text-slate-700 transition-colors duration-200 focus:border-brand-500 focus:outline-none"
                        >
                          {statuses.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={14}
                          className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/60 px-4 py-3">
            <p className="text-xs text-slate-500">
              Showing {(page - 1) * pageSize + 1}-{Math.min(page * pageSize, filteredSorted.length)} of{' '}
              {filteredSorted.length}
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                className="px-2"
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
              >
                <ChevronLeft size={16} />
              </Button>
              <p className="text-xs text-slate-500">
                Page {page} / {totalPages}
              </p>
              <Button
                variant="secondary"
                className="px-2"
                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={page === totalPages}
              >
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Toast open={Boolean(toast)} message={toast} />

      <div
        className={`fixed inset-0 z-40 transition ${selected ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!selected}
      >
        <div
          onClick={() => setSelected(null)}
          className={`absolute inset-0 bg-slate-900/30 transition ${selected ? 'opacity-100' : 'opacity-0'}`}
        />
        <aside
          className={`custom-scrollbar absolute right-0 top-0 h-full w-full max-w-xl overflow-y-auto bg-white p-6 shadow-2xl transition-transform duration-300 ${
            selected ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {selected && (
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Message Preview</p>
                  <h3 className="text-xl font-semibold text-slate-900">{selected.name}</h3>
                  <p className="text-sm text-slate-500">{selected.role}</p>
                </div>
                <button onClick={() => setSelected(null)} className="rounded-lg p-1 text-slate-500 hover:bg-slate-100">
                  <X size={16} />
                </button>
              </div>

              <Card className="overflow-hidden">
                <CardHeader>
                  <h4 className="text-sm font-semibold text-slate-900">Why this person was selected</h4>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{selected.reason}</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader className="flex items-center justify-between gap-3">
                  <h4 className="text-sm font-semibold text-slate-900">Personalized email</h4>
                  <Button variant="secondary" className="gap-1 px-2 py-1 text-xs" onClick={() => copyText(selected.emailMessage, 'Email message')}>
                    <Copy size={13} />
                    Copy Email
                  </Button>
                </CardHeader>
                <CardContent>
                  <pre className="whitespace-pre-wrap text-sm text-slate-700">{selected.emailMessage}</pre>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader className="flex items-center justify-between gap-3">
                  <h4 className="text-sm font-semibold text-slate-900">LinkedIn message</h4>
                  <Button variant="secondary" className="gap-1 px-2 py-1 text-xs" onClick={() => copyText(selected.linkedinMessage, 'LinkedIn message')}>
                    <Copy size={13} />
                    Copy LinkedIn
                  </Button>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{selected.linkedinMessage}</p>
                </CardContent>
              </Card>

              <div className="pt-2">
                <StatusBadge status={selected.status} />
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}
