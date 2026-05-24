import { mockCurrentResult } from '@/mocks/analyses'
import { AppPageShell } from '@/shared/layout/AppPageShell'
import { PageCenter, PageSection } from '@/shared/layout/PageContent'
import Badge from '@/shared/ui/Badge'
import Button from '@/shared/ui/Button'
import Card from '@/shared/ui/Card'
import { useNavigate } from 'react-router-dom'

export default function ResultPage() {
  const navigate = useNavigate()
  const result = mockCurrentResult

  return (
    <AppPageShell showProfile>
      <PageCenter className="max-w-3xl gap-8">
        <PageSection className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold text-text-main md:text-3xl">Результат анализа</h1>
          <Badge variant="success" size="md">
            Готово
          </Badge>
        </PageSection>

        <PageSection className="grid gap-5">
          <Card variant="soft" className="!rounded-2xl !p-6 shadow-none">
            <p className="text-sm font-medium text-text-secondary">Тип кожи</p>
            <p className="mt-2 text-lg font-semibold text-text-main">{result.skinType}</p>
          </Card>

          <Card variant="soft" className="!rounded-2xl !p-6 shadow-none">
            <p className="text-sm font-medium text-text-secondary">Описание</p>
            <p className="mt-2 text-base leading-relaxed text-text-main">{result.description}</p>
          </Card>

          <Card variant="soft" className="!rounded-2xl !p-6 shadow-none">
            <p className="text-sm font-medium text-text-secondary">Рекомендации</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-text-main">
              {result.recommendations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>

          <Card variant="soft" className="!rounded-2xl !p-6 shadow-none">
            <p className="text-sm font-medium text-text-secondary">Ингредиенты</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {result.ingredients.map((item) => (
                <Badge key={item} variant="neutral" size="md" className="rounded-full">
                  {item}
                </Badge>
              ))}
            </div>
          </Card>

          <Card variant="outline" className="!rounded-2xl !p-5 shadow-none">
            <p className="text-sm text-text-secondary">
              Дата анализа:{' '}
              <span className="font-medium text-text-main">{result.date}</span>
            </p>
          </Card>
        </PageSection>

        <PageSection className="flex justify-center pt-2">
          <Button
            type="button"
            variant="primary"
            className="rounded-full px-8 py-3 shadow-none"
            onClick={() => navigate('/history')}
          >
            История запросов
          </Button>
        </PageSection>
      </PageCenter>
    </AppPageShell>
  )
}