import { AppPageShell } from '@/shared/layout/AppPageShell'
import { PageCenter } from '@/shared/layout/PageContent'
import EmptyState from '@/shared/ui/EmptyState'

export default function ResultPage() {
  return (
    <AppPageShell showProfile>
      <PageCenter className="min-h-[50vh] justify-center">
        <EmptyState
          className="max-w-lg border-0 bg-transparent"
          title="Страница результатов будет реализована позже"
        />
      </PageCenter>
    </AppPageShell>
  )
}
