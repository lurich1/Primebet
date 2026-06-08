// Client-side helper for Paystack Inline JS v1 (PaystackPop).
//
// We load https://js.paystack.co/v1/inline.js on demand the first time
// openPaystackPopup() is called, then call PaystackPop.setup() with the
// data the /start endpoint returned. Card collection happens inside the
// Paystack iframe, so the host page never touches raw card data → no PCI
// scope for us.

const SCRIPT_URL = 'https://js.paystack.co/v1/inline.js'

interface PaystackPopHandler {
  openIframe: () => void
}

interface PaystackPopSetupOptions {
  key: string
  email: string
  amount: number
  ref: string
  currency: string
  metadata?: Record<string, unknown>
  callback: (response: { reference: string; status?: string; trans?: string }) => void
  onClose: () => void
}

interface PaystackPopStatic {
  setup: (opts: PaystackPopSetupOptions) => PaystackPopHandler
}

declare global {
  interface Window {
    PaystackPop?: PaystackPopStatic
  }
}

let scriptPromise: Promise<void> | null = null

function loadScript(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Paystack inline can only run in the browser'))
  }
  if (window.PaystackPop) return Promise.resolve()
  if (scriptPromise) return scriptPromise

  scriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_URL}"]`)
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true })
      existing.addEventListener('error', () => reject(new Error('Failed to load Paystack script')), { once: true })
      return
    }
    const script = document.createElement('script')
    script.src = SCRIPT_URL
    script.async = true
    script.addEventListener('load', () => resolve(), { once: true })
    script.addEventListener('error', () => reject(new Error('Failed to load Paystack script')), { once: true })
    document.head.appendChild(script)
  })

  return scriptPromise
}

export interface OpenPaystackPopupOptions {
  publicKey: string
  email: string
  amountMinor: number
  reference: string
  currency: string
  metadata?: Record<string, unknown>
  onSuccess: (reference: string) => void
  onClose: () => void
}

export async function openPaystackPopup(opts: OpenPaystackPopupOptions): Promise<void> {
  await loadScript()
  const PaystackPop = window.PaystackPop
  if (!PaystackPop) throw new Error('PaystackPop not available')

  const handler = PaystackPop.setup({
    key: opts.publicKey,
    email: opts.email,
    amount: opts.amountMinor,
    ref: opts.reference,
    currency: opts.currency,
    metadata: opts.metadata,
    callback: (response) => {
      // Paystack fires this synchronously inside the iframe context. Defer
      // to the next tick so the iframe can close cleanly before we trigger
      // any React re-renders / network calls.
      setTimeout(() => opts.onSuccess(response.reference), 0)
    },
    onClose: () => opts.onClose(),
  })
  handler.openIframe()
}
