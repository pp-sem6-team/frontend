import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  mockHistoryAnalyses,
  statusLabel,
  type AnalysisStatus,
} from '@/mocks/analyses'
import { AppPageShell } from '@/shared/layout/AppPageShell'
import { PageCenter, PageSection } from '@/shared/layout/PageContent'
import Badge from '@/shared/ui/Badge'
import Button from '@/shared/ui/Button'
import Card from '@/shared/ui/Card'
import ListItem from '@/shared/ui/ListItem'

function statusBadgeVariant(status: AnalysisStatus) {
  if (status === 'completed') return 'success' as const
  if (status === 'processing') return 'processing' as const
  return 'error' as const
}

type FilterValue = 'all' | AnalysisStatus

const filters: { value: FilterValue; label: string }[] = [
  { value: 'all', label: 'Все' },
  { value: 'completed', label: 'Готово' },
  { value: 'processing', label: 'В обработке' },
  { value: 'failed', label: 'Ошибка' },
]

export default function HistoryPage() {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all')

  const filteredAnalyses = useMemo(
    () =>
      activeFilter === 'all'
        ? mockHistoryAnalyses
        : mockHistoryAnalyses.filter((item) => item.status === activeFilter),
    [activeFilter],
  )

  return (
    <AppPageShell showProfile>
      <PageCenter className="max-w-3xl gap-8">
        <PageSection>
          <h1 className="text-2xl font-bold text-text-main md:text-3xl">История запросов</h1>
        </PageSection>

        <PageSection className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              type="button"
              variant={activeFilter === filter.value ? 'primary' : 'secondary'}
              className="rounded-full px-4 py-2 text-sm shadow-none"
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </Button>
          ))}
        </PageSection>

        <PageSection className="space-y-4">
          {filteredAnalyses.map((item) => (
            <Card key={item.id} variant="default" className="!rounded-2xl !p-0 shadow-none">
              <ListItem
                className="border-0 bg-transparent"
                title={
                  <span className="text-base font-semibold">
                    {item.date} · {item.skinType}
                  </span>
                }
                secondary={item.shortDescription}
                trailing={
                  <div className="flex flex-col items-end gap-2">
                    <Badge variant={statusBadgeVariant(item.status)} size="md">
                      {statusLabel(item.status)}
                    </Badge>
                    <div className="flex flex-wrap justify-end gap-2">
                    <Button
                      type="button"
                      variant="primary"
                      size="sm"
                      className="rounded-full shadow-none"
                      onClick={() => navigate('/result')}
                    >
                      Открыть
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="rounded-full text-error hover:bg-error/10 hover:text-error"
                      onClick={() => undefined}
                    >
                      Удалить
                    </Button>
                    </div>
                  </div>
                }
              />
            </Card>
          ))}
        </PageSection>

        <PageSection className="flex justify-center pt-2">
          <Button
            type="button"
            variant="secondary"
            className="rounded-full px-8 py-3 shadow-none"
            onClick={() => navigate('/upload')}
          >
            Вернуться
          </Button>
        </PageSection>
      </PageCenter>
    </AppPageShell>
  )
}
