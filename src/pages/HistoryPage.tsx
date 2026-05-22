import { AppPageShell } from '@/shared/layout/AppPageShell'
import { PageCenter } from '@/shared/layout/PageContent'
import EmptyState from '@/shared/ui/EmptyState'

export default function HistoryPage() {
  return (
    <AppPageShell showProfile>
      <PageCenter className="min-h-[50vh] justify-center">
        <EmptyState
          className="max-w-lg border-0 bg-transparent"
          title="История запросов будет реализована позже"
        />
      </PageCenter>
    </AppPageShell>
  )
}
