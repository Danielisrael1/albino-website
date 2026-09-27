import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_ANON_KEY

/** The Projects page degrades to a friendly message until these are set. */
export const isConfigured = Boolean(url && key && !String(url).includes('your-project-ref'))

export const supabase = isConfigured ? createClient(url, key) : null

/** Published projects, newest first. */
export async function fetchProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('published', true)
    .order('sort_order', { ascending: false })
    .order('happened_on', { ascending: false, nullsFirst: false })
  if (error) throw error
  return data
}

/** Published fundraisers, active ones first. */
export async function fetchFundraisers() {
  const { data, error } = await supabase
    .from('fundraisers')
    .select('*')
    .eq('published', true)
    .order('sort_order', { ascending: false })
    .order('created_at', { ascending: false })
  if (error) throw error
  return data
}

export async function fetchBySlug(table, slug) {
  const { data, error } = await supabase
    .from(table)
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle()
  if (error) throw error
  return data
}

export async function fetchPhotos(kind, id) {
  const column = kind === 'project' ? 'project_id' : 'fundraiser_id'
  const { data, error } = await supabase
    .from('media')
    .select('*')
    .eq(column, id)
    .order('position', { ascending: true })
  if (error) throw error
  return data
}

export const formatMoney = (amount, currency = 'UGX') =>
  amount == null ? null : `${currency} ${Number(amount).toLocaleString('en-UG')}`

export const progressOf = (raised, goal) =>
  goal && Number(goal) > 0 ? Math.min(100, Math.round((Number(raised || 0) / Number(goal)) * 100)) : null
