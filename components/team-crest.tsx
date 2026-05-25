'use client'

import { useEffect, useState } from 'react'

interface TeamCrestProps {
  name: string
  /** Public image URL — falls back to a colored initials chip on error or absence. */
  url?: string | null
  size?: number
  className?: string
}

const PALETTE = [
  'bg-rose-500',
  'bg-orange-500',
  'bg-amber-500',
  'bg-lime-500',
  'bg-emerald-500',
  'bg-teal-500',
  'bg-cyan-500',
  'bg-sky-500',
  'bg-blue-500',
  'bg-indigo-500',
  'bg-violet-500',
  'bg-fuchsia-500',
  'bg-pink-500',
]

function paletteFor(name: string): string {
  let h = 0
  for (let i = 0; i < name.length; i++) {
    h = (h * 31 + name.charCodeAt(i)) | 0
  }
  return PALETTE[Math.abs(h) % PALETTE.length]
}

function initialsFor(name: string): string {
  const cleaned = name.trim()
  if (!cleaned) return '?'
  const parts = cleaned.split(/\s+/)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export function TeamCrest({ name, url, size = 32, className = '' }: TeamCrestProps) {
  const [broken, setBroken] = useState(false)

  // If the URL prop changes (e.g. admin updates the flag), retry the image.
  useEffect(() => {
    setBroken(false)
  }, [url])

  const showImage = !!url && !broken
  const px = `${size}px`

  if (showImage) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={url}
        alt=""
        width={size}
        height={size}
        loading="lazy"
        onError={() => setBroken(true)}
        style={{ width: px, height: px }}
        className={`rounded-full object-cover shrink-0 bg-secondary ${className}`}
      />
    )
  }

  return (
    <div
      style={{ width: px, height: px }}
      className={`${paletteFor(name)} text-white rounded-full flex items-center justify-center font-bold shrink-0 ${className}`}
    >
      <span style={{ fontSize: `${Math.max(10, Math.round(size * 0.36))}px` }}>
        {initialsFor(name)}
      </span>
    </div>
  )
}
