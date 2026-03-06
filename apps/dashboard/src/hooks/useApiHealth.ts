import { useEffect, useState } from 'react'
import { api } from '../lib/api'

export function useApiHealth() {
  const [status, setStatus] = useState<'ok' | 'error' | 'loading'>('loading')
  const [version, setVersion] = useState<string | null>(null)

  useEffect(() => {
    api
      .health()
      .then((r) => {
        setVersion(r.version ?? null)
        setStatus('ok')
      })
      .catch(() => setStatus('error'))
  }, [])

  return { status, version }
}
