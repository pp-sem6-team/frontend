import { useNavigate } from 'react-router-dom'
import Button from '@/shared/ui/Button'
import { AppPageShell } from '@/shared/layout/AppPageShell'
import { PageCenter, PageSection } from '@/shared/layout/PageContent'
import { PaperclipIcon } from '@/shared/icons/PaperclipIcon'

export default function UploadPage() {
  const navigate = useNavigate()

  return (
    <AppPageShell showProfile>
      <PageCenter>
        <PageSection className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold text-text-main md:text-3xl">
            Прикрепите фотографию
          </h1>
          <Button
            type="button"
            variant="primary"
            className="mt-10 h-[7.5rem] w-[7.5rem] rounded-full border-primary p-0 shadow-none hover:bg-primary-hover md:h-[8.5rem] md:w-[8.5rem]"
            onClick={() => navigate('/result')}
            aria-label="Перейти к результату (заглушка)"
          >
            <PaperclipIcon className="h-9 w-9 text-text-main md:h-10 md:w-10" />
          </Button>
          <div className="mt-10 max-w-xl space-y-4 text-sm leading-relaxed text-text-secondary">
            <p>Ваши данные защищены. Анализ занимает меньше минуты.</p>
            <p>
              Для точного анализа: фото должно быть хорошо освещено (лучше при естественном свете),
              без фильтров.
            </p>
            <p>Качество — не ниже 720×720 px (оптимально от 1080×1080 px).</p>
            <p>Лицо — чётко видно, по центру кадра, без макияжа и перекрытий.</p>
            <p>Формат — JPG или PNG.</p>
          </div>
        </PageSection>
      </PageCenter>
    </AppPageShell>
  )
}
