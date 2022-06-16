import { useAuth } from '@/lib/auth'
import { useRouter } from 'next/router'

export default function Index() {
  const { user, loading } = useAuth()
  const router = useRouter()

  if (user) {  
    router.push('/email-signature-generator')
  }

  if (!loading && !user) {
    router.push('/')
  }
  
  return (
    <h1>Please Login</h1>
  )
}