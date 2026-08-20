'use client'

import { FormEvent, useMemo, useState } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function EarlyAccessForm() {
  const startedAt = useMemo(() => Date.now(), [])
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'submitting') return

    const form = event.currentTarget
    const data = new FormData(form)
    setStatus('submitting')
    setMessage('')

    const params = new URLSearchParams(window.location.search)
    const payload = {
      name: data.get('name')?.toString() || '',
      email: data.get('email')?.toString() || '',
      company: data.get('company')?.toString() || '',
      businessType: data.get('businessType')?.toString() || 'other',
      challenge: data.get('challenge')?.toString() || '',
      consent: data.get('consent') === 'on',
      website: data.get('website')?.toString() || '',
      startedAt,
      source: 'website',
      utmSource: params.get('utm_source') || '',
      utmMedium: params.get('utm_medium') || '',
      utmCampaign: params.get('utm_campaign') || '',
    }

    try {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = (await response.json()) as { message?: string }
      if (!response.ok) throw new Error(result.message || 'Unable to submit right now.')

      setStatus('success')
      setMessage(result.message || "You're on the early-access list.")
      form.reset()
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Unable to submit right now.')
    }
  }

  return (
    <form className="lead-form" onSubmit={submit} noValidate>
      <div className="form-row two">
        <label>
          <span>Name <small>optional</small></span>
          <input name="name" type="text" maxLength={80} autoComplete="name" />
        </label>
        <label>
          <span>Work email</span>
          <input name="email" type="email" required maxLength={254} autoComplete="email" inputMode="email" />
        </label>
      </div>
      <div className="form-row two">
        <label>
          <span>Company <small>optional</small></span>
          <input name="company" type="text" maxLength={120} autoComplete="organization" />
        </label>
        <label>
          <span>Business type</span>
          <select name="businessType" defaultValue="agency">
            <option value="agency">Agency</option>
            <option value="consultancy">Consultancy</option>
            <option value="studio">Studio</option>
            <option value="independent">Independent professional</option>
            <option value="professional-services">Professional services company</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>
      <label>
        <span>Where does operational friction hurt most? <small>optional</small></span>
        <textarea name="challenge" maxLength={500} rows={3} placeholder="For example: assembling teams, scope changes, approvals, contracts, invoicing…" />
      </label>
      <div className="honeypot" aria-hidden="true">
        <label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <label className="consent-row">
        <input name="consent" type="checkbox" required />
        <span>I agree to be contacted about Aequum early access and product research. See the <a href="/privacy">Privacy Policy</a>.</span>
      </label>
      <div className="form-action-row">
        <button type="submit" className="button primary" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Submitting…' : 'Request Early Access'}
        </button>
        <p className={`form-status ${status}`} role="status" aria-live="polite">{message}</p>
      </div>
      <p className="form-privacy">We only request information needed for early-access and product-research conversations.</p>
    </form>
  )
}
