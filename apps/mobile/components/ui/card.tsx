import { Text, TextClassContext } from "@/components/ui/text"
import { cn } from "@/lib/utils"
import { View } from "react-native"

function Card({
  className,
  ...props
}: React.ComponentProps<typeof View> & React.RefAttributes<View>) {
  return (
    <TextClassContext.Provider value="text-card-foreground">
      <View
        className={cn(
          "flex flex-col gap-6 overflow-hidden rounded-4xl bg-card py-6 text-card-foreground shadow-md ring-1 ring-foreground/5 dark:ring-foreground/10",
          className
        )}
        {...props}
      />
    </TextClassContext.Provider>
  )
}

function CardHeader({
  className,
  ...props
}: React.ComponentProps<typeof View> & React.RefAttributes<View>) {
  return (
    <View
      className={cn("flex flex-col gap-1.5 rounded-t-4xl px-6", className)}
      {...props}
    />
  )
}

function CardTitle({
  className,
  ref,
  ...props
}: React.ComponentProps<typeof Text> & React.RefAttributes<typeof Text>) {
  return (
    <Text
      ref={ref}
      accessibilityRole="header"
      aria-level={3}
      className={cn(
        "font-heading text-base font-medium leading-normal",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({
  className,
  ...props
}: React.ComponentProps<typeof Text> & React.RefAttributes<typeof Text>) {
  return (
    <Text
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardContent({
  className,
  ...props
}: React.ComponentProps<typeof View> & React.RefAttributes<View>) {
  return <View className={cn("px-6", className)} {...props} />
}

function CardFooter({
  className,
  ...props
}: React.ComponentProps<typeof View> & React.RefAttributes<View>) {
  return (
    <View
      className={cn("flex flex-row items-center rounded-b-4xl px-6", className)}
      {...props}
    />
  )
}

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
