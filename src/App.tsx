import Button from '@/shared/ui/Button'
import Card from '@/shared/ui/Card'
import Input from '@/shared/ui/Input'
import Badge from '@/shared/ui/Badge'
import ListItem from '@/shared/ui/ListItem'
import Spinner from '@/shared/ui/Spinner'
import EmptyState from '@/shared/ui/EmptyState'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-text-main">
      <div className="mx-auto max-w-5xl space-y-8 p-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">UI Component Stand</h1>
          <p className="text-text-secondary">
            Minimalist soft styles using provided design tokens.
          </p>
        </header>

        <Card>
          <h2 className="text-xl font-semibold">Button</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="primary" className="hover:scale-[1.01]">
              Primary hover
            </Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>

            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
            <Button variant="secondary" disabled>
              Disabled secondary
            </Button>
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold">Input</h2>
          <div className="mt-4 space-y-4 max-w-md">
            <Input label="Email" placeholder="user@example.com" />
            <Input
              label="Disabled"
              placeholder="—"
              disabled
              defaultValue="locked@example.com"
            />
            <Input
              label="Error"
              placeholder="wrong@email"
              error
              errorMessage="Некорректный формат email"
              defaultValue="wrong@email"
            />
            <Input
              label="With hint"
              placeholder="type something"
              hint="This is a hint under the field"
            />
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold">Cards</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <Card variant="default">
              <div className="text-sm font-medium">Default card</div>
              <div className="mt-1 text-sm text-text-secondary">
                White background + border.
              </div>
            </Card>
            <Card variant="soft">
              <div className="text-sm font-medium">Soft card</div>
              <div className="mt-1 text-sm text-text-secondary">
                Soft background + light border.
              </div>
            </Card>
            <Card variant="outline">
              <div className="text-sm font-medium">Outline card</div>
              <div className="mt-1 text-sm text-text-secondary">
                Transparent fill.
              </div>
            </Card>
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold">Badge</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Badge>Neutral</Badge>
            <Badge variant="processing">Processing</Badge>
            <Badge variant="success">Completed</Badge>
            <Badge variant="error">Failed</Badge>
            <Badge variant="success" size="md">
              Completed (md)
            </Badge>
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold">ListItem</h2>
          <div className="mt-4 space-y-3">
            <ListItem
              leading={
                <div className="h-10 w-10 rounded-md border border-border bg-primary" />
              }
              title="Analysis #1"
              secondary="Skin type: oily • Completed recently"
              status="completed"
            />
            <ListItem
              leading={
                <div className="h-10 w-10 rounded-md border border-border bg-card-soft" />
              }
              title="Analysis #2"
              secondary="Currently processing the photo..."
              status="processing"
            />
            <ListItem
              leading={
                <div className="h-10 w-10 rounded-md border border-border bg-error/15" />
              }
              title="Analysis #3"
              secondary="Failed due to upload error"
              status="failed"
            />
            <ListItem
              leading={
                <div className="h-10 w-10 rounded-md border border-border bg-card" />
              }
              title="Custom trailing"
              secondary="Trailing slot instead of status badge"
              trailing={<Badge variant="neutral">Custom</Badge>}
            />
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold">Spinner</h2>
          <div className="mt-4 flex items-center gap-4">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold">EmptyState</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <EmptyState
              title="No analyses yet"
              description="Upload a photo to get your skin type and recommendations."
              actionLabel="Go to upload (mock)"
              onAction={() => {}}
            />
            <EmptyState
              title="Nothing to show"
              description="This state has no action."
              icon={<span className="text-3xl">:)</span>}
            />
          </div>
        </Card>
      </div>
    </div>
  )
}
