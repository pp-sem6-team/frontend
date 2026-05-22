import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@/shared/ui/Button'
import Card from '@/shared/ui/Card'
import Input from '@/shared/ui/Input'
import Select from '@/shared/ui/Select'
import { AppPageShell } from '@/shared/layout/AppPageShell'

const greenBtn =
  'rounded-xl !border-accent-green !bg-accent-green text-text-main shadow-none hover:!bg-accent-green hover:brightness-[0.96] focus-visible:ring-accent-green/70'

const genderOptions = [
  { value: '', label: '-' },
  { value: 'Ж', label: 'Ж' },
  { value: 'М', label: 'М' },
]

const fieldRounding = 'rounded-full py-3.5'

export default function SettingsPage() {
  const navigate = useNavigate()
  const [gender, setGender] = useState('')

  return (
    <AppPageShell>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-8 pb-20 pt-16 md:flex-row md:px-12 md:pt-20 lg:gap-14">
        <aside className="flex w-full shrink-0 flex-col gap-4 md:w-56">
          <Button
            type="button"
            variant="primary"
            className="w-full justify-center rounded-xl py-4 shadow-none"
            onClick={() => navigate('/history')}
          >
            История запросов
          </Button>
          <Button
            type="button"
            variant="danger"
            className="w-full justify-center rounded-xl py-4 shadow-none"
            onClick={() => navigate('/login')}
          >
            Выход
          </Button>
          <Button
            type="button"
            variant="ghost"
            className={`w-full justify-center rounded-xl py-4 ${greenBtn}`}
            onClick={() => navigate('/upload')}
          >
            Вернуться
          </Button>
        </aside>

        <Card variant="primary" className="min-w-0 flex-1 shadow-none">
          <h1 className="text-center text-2xl font-bold text-text-main">Изменить</h1>
          <div className="mt-8 space-y-4">
            <Input
              type="email"
              name="email"
              placeholder="Почта"
              inputClassName="rounded-full py-3.5"
            />
            <Input
              type="password"
              name="password"
              placeholder="Пароль"
              inputClassName="rounded-full py-3.5"
            />
            <Input
              type="password"
              name="passwordRepeat"
              placeholder="Повторить пароль"
              inputClassName="rounded-full py-3.5"
            />
            <Input
              type="text"
              name="name"
              placeholder="Имя и фамилия"
              inputClassName="rounded-full py-3.5"
            />
            <Input
              type="date"
              name="birthDate"
              label="Дата рождения"
              inputClassName={`${fieldRounding} min-h-[3.25rem] [color-scheme:light]`}
            />
            <div className="max-w-[38%]">
              <Select
                label="Пол"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                options={genderOptions}
                selectClassName={fieldRounding}
                fullWidth
              />
            </div>
          </div>
          <div className="mt-10 flex justify-end">
            <Button type="button" variant="ghost" className={`rounded-xl px-10 py-3 ${greenBtn}`}>
              Сохранить
            </Button>
          </div>
        </Card>
      </div>
    </AppPageShell>
  )
}
