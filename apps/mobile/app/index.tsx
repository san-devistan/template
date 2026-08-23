import { Button, Card } from "panelui-native"
import { ScrollView } from "react-native"

export default function ComponentShowcaseScreen() {
  return (
    <ScrollView
      className="flex-1"
      contentContainerClassName="flex-grow justify-center p-6"
    >
      <Card>
        <Card.Header>
          <Card.Title>PanelUI is ready</Card.Title>
          <Card.Description>
            Mobile components now use the shared design tokens from packages/ui.
          </Card.Description>
        </Card.Header>
        <Card.Footer variant="panel">
          <Button fullWidth>Continue</Button>
        </Card.Footer>
      </Card>
    </ScrollView>
  )
}
