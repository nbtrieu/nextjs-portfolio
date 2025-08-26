// src/app/contact/page.tsx
"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, MessageSquare, User, PencilLine } from 'lucide-react'
import { AppTypes } from '@/types'

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters')
    .max(25, 'First name cannot exceed 25 characters'),
  lastName: yup
    .string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .max(25, 'Last name cannot exceed 25 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message cannot exceed 1000 characters')
})

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<AppTypes.ContactFormData>({
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = async (data: AppTypes.ContactFormData) => {
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    }
  }

  return (
    <div className='max-w-xl mx-auto py-4'>
      <div className='mb-12'>
        <h1 className="sm:mb-6 text-2xl sm:text-4xl font-semibold tracking-tighter">
          Get In Touch
        </h1>
        <p className='text-md'>
          Got a project in mind or want to discuss opportunities? I'd love to connect and hear from you!
        </p>
      </div>

      <Card className='rounded-lg border-slate-500'>
        <CardHeader>
          <CardTitle className='flex flex-row items-center gap-2'>
            <MessageSquare className='w-5 h-5'/>
            Send a Message
          </CardTitle>
          <CardDescription>
            Fill out the form below and I'll get back to you ASAP.
          </CardDescription>
        </CardHeader>
        <CardContent className='pt-2 pb-2 grid gap-6'>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label htmlFor='firstName' className='pb-2 text-sm font-medium flex items-center gap-2'>
                  <User className='h-4 w-4'/>
                  First Name
                </label>
                <Input
                  id="firstName"
                  {...register('firstName')}
                  placeholder="First Name"
                  disabled={isSubmitting}
                  className={errors.firstName ? 'border-red-500' : ''}
                />
                {errors.firstName && (
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor='lastName' className='pb-2 text-sm font-medium flex items-center gap-2'>
                  Last Name
                </label>
                <Input
                  id="lastName"
                  {...register('lastName')}
                  placeholder="Last Name"
                  disabled={isSubmitting}
                  className={errors.lastName ? 'border-red-500' : ''}
                />
                {errors.lastName && (
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor='email' className='pb-2 text-sm font-medium flex items-center gap-2'>
                <Mail className='h-4 w-4'/>
                Email
              </label>
              <Input
                id="email"
                {...register('email')}
                placeholder="your.email@example.com"
                disabled={isSubmitting}
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor='message' className='pb-2 text-sm font-medium flex items-center gap-2'>
                <PencilLine className='h-4 w-4'/>
                Message
              </label>
              <Textarea
                id="message"
                {...register('message')}
                rows={5}
                placeholder='Tell me about your project or inquiry...'
                disabled={isSubmitting}
                className={errors.message ? 'border-red-500' : ''}
              />
              {errors.message && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>
            
            {submitStatus == 'success' && (
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
                <p className="text-green-700 dark:text-green-300">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus == 'error' && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                <p className="text-red-700 dark:text-red-300">
                  Failed to send message. Please try again or contact me directly.
                </p>
              </div>
            )}

            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full'
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}