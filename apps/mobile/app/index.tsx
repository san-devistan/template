import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icon } from "@/components/ui/icon"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Text } from "@/components/ui/text"
import { getInterTextStyle } from "@/lib/fonts"
import { THEME } from "@/lib/theme"
import { api } from "@workspace/backend/api"
import { Effect } from "effect"
import { CheckIcon, ChevronRightIcon, SparklesIcon } from "lucide-react-native"
import * as React from "react"
import { ScrollView, View } from "react-native"

const componentNames = ["Button", "Card", "Input", "Switch", "Badge"] as const
const backendModuleCount = Effect.runSync(
  Effect.sync(() => Object.keys(api).length)
)
const lightPrimarySwatchStyle = { backgroundColor: THEME.light.primary }
const darkPrimarySwatchStyle = { backgroundColor: THEME.dark.primary }
const metricTextStyle = getInterTextStyle("font-semibold")

export default function ComponentShowcaseScreen() {
  const [enabled, setEnabled] = React.useState(true)

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerClassName="gap-5 px-5 pb-10 pt-14"
    >
      <View className="gap-3">
        <Badge variant="outline" className="self-start">
          <Text>React Native Reusables</Text>
        </Badge>
        <View className="gap-2">
          <Text variant="h1" className="text-left text-4xl leading-10">
            Mobile style mirror
          </Text>
          <Text className="max-w-[320px] text-muted-foreground">
            Five common primitives rendered from mobile components, all using
            the token snapshot generated from packages/ui.
          </Text>
        </View>
      </View>

      <View className="flex-row flex-wrap gap-2">
        {componentNames.map((name) => (
          <Badge key={name} variant={name === "Card" ? "default" : "secondary"}>
            <Text>{name}</Text>
          </Badge>
        ))}
      </View>

      <Card>
        <CardHeader>
          <View className="flex-row items-center justify-between gap-3">
            <View className="flex-1 gap-1">
              <CardTitle>Card</CardTitle>
              <CardDescription>
                The same quiet surface language as the web package.
              </CardDescription>
            </View>
            <View className="size-9 items-center justify-center rounded-lg bg-primary">
              <Icon as={SparklesIcon} className="text-primary-foreground" />
            </View>
          </View>
        </CardHeader>
        <CardContent className="gap-3">
          <View className="rounded-lg border border-border bg-muted/50 p-3">
            <Text variant="small">Token source</Text>
            <Text variant="muted">packages/ui/src/styles/globals.css</Text>
          </View>
          <View className="flex-row items-center justify-between rounded-lg border border-border p-3">
            <View className="gap-1">
              <Text variant="small">Theme swatches</Text>
              <Text variant="muted">Light and dark primary tokens.</Text>
            </View>
            <View className="flex-row gap-2">
              <View
                className="size-6 rounded-full border border-border"
                style={lightPrimarySwatchStyle}
              />
              <View
                className="size-6 rounded-full border border-border"
                style={darkPrimarySwatchStyle}
              />
            </View>
          </View>
          <View className="rounded-lg border border-border p-3">
            <Text variant="small">Backend modules</Text>
            <Text style={metricTextStyle}>{backendModuleCount}</Text>
          </View>
        </CardContent>
        <CardFooter className="justify-between">
          <Text variant="muted">Generated mobile theme</Text>
          <Badge variant="outline">
            <Text>OKLCH to HSL</Text>
          </Badge>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Button</CardTitle>
          <CardDescription>
            Default, outline, secondary, and ghost variants.
          </CardDescription>
        </CardHeader>
        <CardContent className="gap-3">
          <View className="flex-row gap-2">
            <Button className="flex-1">
              <Text>Continue</Text>
              <Icon as={ChevronRightIcon} />
            </Button>
            <Button variant="outline" size="icon">
              <Icon as={CheckIcon} />
            </Button>
          </View>
          <View className="flex-row gap-2">
            <Button variant="secondary" className="flex-1">
              <Text>Secondary</Text>
            </Button>
            <Button variant="ghost" className="flex-1">
              <Text>Ghost</Text>
            </Button>
          </View>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Input</CardTitle>
          <CardDescription>
            Native text entry with semantic border and text colors.
          </CardDescription>
        </CardHeader>
        <CardContent className="gap-3">
          <Input
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
            placeholder="name@company.com"
          />
          <Input placeholder="Disabled input" editable={false} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Switch</CardTitle>
          <CardDescription>
            Stateful control using the primary and input tokens.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <View className="flex-row items-center justify-between rounded-lg border border-border p-3">
            <View className="gap-1">
              <Text variant="small">Sync component theme</Text>
              <Text variant="muted">Preview the active token state.</Text>
            </View>
            <Switch checked={enabled} onCheckedChange={setEnabled} />
          </View>
        </CardContent>
      </Card>
    </ScrollView>
  )
}
