import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@/shared/ui/Button'
import Card from '@/shared/ui/Card'
import Input from '@/shared/ui/Input'
import { AppPageShell } from '@/shared/layout/AppPageShell'
import { PageCenter, PageSection } from '@/shared/layout/PageContent'
import { PaperclipIcon } from '@/shared/icons/PaperclipIcon'

type LoginErrors = {
  email?: string
  password?: string
}

function validateLogin(email: string, password: string): LoginErrors {
  const next: LoginErrors = {}
  const e = email.trim()
  const p = password.trim()

  if (!e) {
    next.email = 'Укажите почту'
  } else if (!e.includes('@')) {
    next.email = 'В адресе почты должен быть символ «@»'
  }

  if (!p) {
    next.password = 'Укажите пароль'
  }

  return next
}

export default function LoginPage() {
  const navigate = useNavigate()
  const loginAnchorRef = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<LoginErrors>({})

  const scrollToLogin = () => {
    loginAnchorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleLogin = () => {
    const next = validateLogin(email, password)
    setErrors(next)
    if (Object.keys(next).length > 0) return
    navigate('/upload')
  }

  return (
    <AppPageShell>
      <PageCenter className="max-w-[720px] gap-10 pt-6 pb-16 md:gap-12 md:pt-8 md:pb-20">
        <div
          ref={loginAnchorRef}
          id="login-card-anchor"
          className="w-full scroll-mt-[calc(2.25rem+1.25rem)]"
        >
          <Card
            variant="primary"
            className="mx-auto w-full max-w-[480px] !rounded-[36px] !p-10 shadow-none md:!px-12 md:!py-12"
          >
            <h1 className="text-center text-[2.625rem] font-black leading-tight text-text-main md:text-[3rem] md:leading-none">
              Вход
            </h1>
            <div className="mt-10 space-y-5">
              <Input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Почта"
                value={email}
                onChange={(ev) => {
                  setEmail(ev.target.value)
                  setErrors((prev) => ({ ...prev, email: undefined }))
                }}
                error={Boolean(errors.email)}
                errorMessage={errors.email}
                inputClassName="rounded-full py-4 text-base md:py-[1.125rem]"
              />
              <Input
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="Пароль"
                value={password}
                onChange={(ev) => {
                  setPassword(ev.target.value)
                  setErrors((prev) => ({ ...prev, password: undefined }))
                }}
                error={Boolean(errors.password)}
                errorMessage={errors.password}
                inputClassName="rounded-full py-4 text-base md:py-[1.125rem]"
              />
            </div>
            <div className="mt-10 flex flex-col items-stretch gap-4">
              <Button
                type="button"
                variant="primary"
                className="w-full justify-center rounded-full py-4 text-base font-semibold shadow-none"
                onClick={handleLogin}
              >
                Войти
              </Button>
              <div className="flex justify-center">
                <Button
                  type="button"
                  variant="secondary"
                  className="rounded-full border-2 border-border px-10 py-3 text-base font-semibold text-text-main shadow-none hover:border-text-secondary/30 hover:bg-card-soft"
                  onClick={() => navigate('/register')}
                >
                  Регистрация
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <PageSection className="mx-auto w-full max-w-[640px]">
          <h2 className="text-[1.75rem] font-extrabold leading-tight text-text-main md:text-[2rem]">
            AI-диагностика кожи
          </h2>
          <p className="mt-4 text-lg leading-[1.65] text-text-secondary md:text-xl md:leading-[1.7]">
            Точные рекомендации на основе анализа изображения и дерматологических подходов
          </p>
          <p className="mt-8 text-lg font-semibold text-text-main">Загрузите фото, чтобы:</p>
          <ul className="mt-4 list-disc space-y-3 pl-6 text-lg leading-[1.65] text-text-secondary md:text-xl md:leading-[1.7]">
            <li>определить тип кожи</li>
            <li>выявить особенности и проблемы</li>
            <li>получить индивидуальный план ухода</li>
          </ul>
        </PageSection>

        <PageSection className="mx-auto flex w-full max-w-[640px] flex-col items-center text-center">
          <h2 className="text-[1.75rem] font-extrabold leading-tight text-text-main md:text-[2.125rem]">
            Прикрепите фотографию
          </h2>
          <Button
            type="button"
            variant="primary"
            className="mt-8 aspect-square h-[120px] w-[120px] shrink-0 rounded-full border border-primary p-0 shadow-none hover:bg-primary-hover md:h-[128px] md:w-[128px]"
            onClick={scrollToLogin}
            aria-label="Перейти к форме входа"
          >
            <PaperclipIcon className="h-10 w-10 text-text-main md:h-11 md:w-11" />
          </Button>
          <p className="mt-10 max-w-md text-center text-base leading-relaxed text-text-secondary md:text-lg">
            Ваши данные защищены. Анализ занимает меньше минуты.
          </p>
        </PageSection>
      </PageCenter>
    </AppPageShell>
  )
}
