import { useState } from 'react'
import type { FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile } from '@/data/profile'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { Reveal } from '@/components/ui/Reveal'
import { fadeUp, staggerContainer } from '@/utils/motion'
import { cn } from '@/utils/cn'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<keyof ContactForm, string>>
type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const initialForm: ContactForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(form: ContactForm): FormErrors {
  const errors: FormErrors = {}

  if (!form.name.trim()) {
    errors.name = 'Please enter your name.'
  } else if (form.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  }

  if (!form.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!EMAIL_PATTERN.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!form.subject.trim()) {
    errors.subject = 'Please add a subject.'
  }

  if (!form.message.trim()) {
    errors.message = 'Please write a message.'
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }

  return errors
}

const contactInfo = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
]

interface FieldProps {
  id: keyof ContactForm
  label: string
  value: string
  error?: string
  onChange: (value: string) => void
  type?: string
  textarea?: boolean
}

function Field({ id, label, value, error, onChange, type = 'text', textarea = false }: FieldProps) {
  const baseClasses =
    'w-full rounded-2xl border bg-white/70 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm outline-none backdrop-blur transition-all duration-300 dark:bg-slate-950/40 dark:text-slate-100 dark:placeholder:text-slate-500'
  const validClasses =
    'border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 dark:border-white/10'
  const errorClasses =
    'border-rose-400/70 focus:border-rose-400 focus:ring-4 focus:ring-rose-400/15 dark:border-rose-500/60'

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(baseClasses, error ? errorClasses : validClasses, 'resize-none')}
          placeholder="Tell me about your project, opportunity, or idea…"
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(baseClasses, error ? errorClasses : validClasses)}
        />
      )}
      <AnimatePresence>
        {error && (
          <motion.p
            key={`${id}-error`}
            id={`${id}-error`}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-2 flex items-center gap-1.5 text-xs font-medium text-rose-500 dark:text-rose-400"
          >
            <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const updateField = (field: keyof ContactForm) => (value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    setStatus('sending')
    window.setTimeout(() => {
      setStatus('success')
      setForm(initialForm)
      window.setTimeout(() => setStatus('idle'), 5000)
    }, 1400)
  }

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a project, an internship, or a role in mind? My inbox is always open."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-2"
          >
            <motion.div variants={fadeUp} className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="glass flex items-center gap-4 rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/10">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-500 text-white shadow-lg shadow-brand-500/25">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {item.label}
                      </p>
                      <p className="mt-0.5 truncate text-sm font-semibold text-slate-800 dark:text-slate-100">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )

                return item.href ? (
                  <a key={item.label} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6">
              <p className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
                Or connect with me:
              </p>
              <SocialLinks />
            </motion.div>
          </motion.div>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass rounded-3xl p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Name"
                  value={form.name}
                  error={errors.name}
                  onChange={updateField('name')}
                  type="text"
                />
                <Field
                  id="email"
                  label="Email"
                  value={form.email}
                  error={errors.email}
                  onChange={updateField('email')}
                  type="email"
                />
              </div>
              <div className="mt-5">
                <Field
                  id="subject"
                  label="Subject"
                  value={form.subject}
                  error={errors.subject}
                  onChange={updateField('subject')}
                  type="text"
                />
              </div>
              <div className="mt-5">
                <Field
                  id="message"
                  label="Message"
                  value={form.message}
                  error={errors.message}
                  onChange={updateField('message')}
                  textarea
                />
              </div>

              <div className="mt-7 flex flex-col items-start gap-4">
                <Button
                  type="submit"
                  size="lg"
                  icon={status === 'sending' ? Loader2 : Send}
                  iconPosition="right"
                  disabled={status === 'sending'}
                  className={cn(
                    status === 'sending' && 'cursor-wait [&_svg]:animate-spin',
                  )}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </Button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400"
                      role="status"
                    >
                      <CheckCircle2 className="size-4" aria-hidden="true" />
                      Message sent successfully! I&apos;ll get back to you soon.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <p className="mt-6 text-xs leading-relaxed text-slate-400 dark:text-slate-500">
                Prefer email? Reach me directly at{' '}
                <a
                  href={`mailto:${profile.email}`}
                  className="font-semibold text-brand-600 underline-offset-4 hover:underline dark:text-brand-400"
                >
                  {profile.email}
                </a>
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
