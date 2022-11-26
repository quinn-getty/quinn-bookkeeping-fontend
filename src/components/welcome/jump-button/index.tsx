import { useRouter } from 'vue-router';

export const JumpButton = () => {
  const router = useRouter()
  const jump = () => {
    localStorage.setItem('jump', 'yes')
    router.push('/start')
  }
  return <button onClick={jump}>跳过</button>
}
JumpButton.displayName = 'JumpButton'
export default JumpButton