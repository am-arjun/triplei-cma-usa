import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { IconCircleCheckFilled, IconMailFilled, IconPhoneFilled, IconUser } from '@tabler/icons-react'
import { Button, SelectField, TextField, saveLead, type LeadFormValues } from '@/design-system'
import { leadSchema, passOutYearOptions, qualificationOptions } from '@/design-system/components/LeadForm/leadSchema'

export interface ApplyFormProps {
  /** Prefixes field ids and tags the lead with where it came from. */
  formId: string
}

/** The one lead form: used inline in the hero and inside the CTA popup. */
export function ApplyForm({ formId }: ApplyFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: { name: '', mobile: '', email: '', qualification: '', passOutYear: '' },
  })

  const onSubmit = async (values: LeadFormValues) => {
    await saveLead(values, formId)
    setIsSubmitted(true)
  }

  const field = (name: keyof LeadFormValues) => `${formId}-${name}`

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center text-center" role="status" style={{ gap: 'var(--spacing-md)', padding: 'var(--atomic-24) 0' }}>
        <IconCircleCheckFilled size={44} style={{ color: 'var(--col-icon-success-default)' }} />
        <p style={{ margin: 0, fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-semibold)' }}>Thank you! We&apos;ll call you shortly.</p>
      </div>
    )
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="cm-form">
      <TextField
        id={field('name')}
        label="Full name"
        placeholder="Enter your full name"
        autoComplete="name"
        appearance="filled"
        headIcon={<IconUser size={14} stroke={2} />}
        error={errors.name?.message}
        {...register('name')}
      />
      <TextField
        id={field('mobile')}
        label="Mobile number"
        type="tel"
        inputMode="numeric"
        placeholder="10-digit mobile number"
        autoComplete="tel-national"
        appearance="filled"
        headIcon={<IconPhoneFilled size={14} />}
        error={errors.mobile?.message}
        {...register('mobile')}
      />
      <TextField
        id={field('email')}
        label="Email address"
        type="email"
        placeholder="example@domain.com"
        autoComplete="email"
        appearance="filled"
        headIcon={<IconMailFilled size={14} />}
        error={errors.email?.message}
        {...register('email')}
      />
      <SelectField
        id={field('qualification')}
        label="Qualification"
        placeholder="Select your qualification"
        options={qualificationOptions}
        appearance="filled"
        isPlaceholderSelected={!watch('qualification')}
        error={errors.qualification?.message}
        {...register('qualification')}
      />
      <SelectField
        id={field('passOutYear')}
        label="Pass out year"
        placeholder="Select your pass out year"
        options={passOutYearOptions}
        appearance="filled"
        isPlaceholderSelected={!watch('passOutYear')}
        error={errors.passOutYear?.message}
        {...register('passOutYear')}
      />
      <div className="cm-form-foot">
        <Button type="submit" size="lg" isFullWidth disabled={isSubmitting}>
          Submit
        </Button>
        <p>Don&apos;t worry we will not spam you 😛</p>
      </div>
    </form>
  )
}
