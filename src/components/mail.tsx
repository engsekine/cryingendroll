import styles from '@/styles/scss/index.module.scss'
import {useState} from 'react'
import {useRouter} from 'next/router'
export function Mail() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '',
    email: '',
    msg: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()

    fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        msg: form.msg,
      }),
    })
      .then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          router.push('/thanks')
        } else {
          console.log(`Error: Status Code ${res.status}`)
        }
      })
      .catch((e) => {
        console.log(`Error: ${e}`)
      })
  }

  return (
    <form className={styles.form}>
      <input
        onChange={(e) => {
          const val = e.currentTarget.value
          setForm((props) => ({
            ...props,
            name: val !== null ? val : '',
          }))
        }}
        value={form.name}
        name='name'
        type='text'
        className={styles.feedbackInput}
        placeholder='Name'
      />
      <input
        onChange={(e) => {
          const val = e.currentTarget.value
          setForm((props) => ({
            ...props,
            email: val !== null ? val : '',
          }))
        }}
        name='email'
        type='text'
        className={styles.feedbackInput}
        placeholder='Email'
      />
      <textarea
        onChange={(e) => {
          const val = e.currentTarget.value
          setForm((props) => ({
            ...props,
            msg: val !== null ? val : '',
          }))
        }}
        name='text'
        className={styles.feedbackInput}
        placeholder='Comment'
      ></textarea>
      <input
        onClick={async (e) => {
          await handleSubmit(e)
        }}
        type='submit'
        value='SUBMIT'
        className={styles.button01}
      />
    </form>
  )
}
