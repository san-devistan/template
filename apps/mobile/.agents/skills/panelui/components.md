# Every component

Generated from the documentation — do not edit by hand.

116 component modules. The **Docs** column is the path under
`https://panelui.dev/llms.mdx/`, which returns the page as markdown: anatomy, every prop with
its type, the variants, and worked examples. Fetch it before using a component you have not used
in this session — the props tables there are read from the library's TypeScript, and anything you
remember is a guess.

## Actions

| Component                 | What it is                                                                                                  | Docs                         |
| ------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `Button`                  | Pressable action with variants, sizes, loading state and icon slots.                                        | `components/button`          |
| `ButtonGroup`             | Several buttons drawn as one control — a segmented run, a split action, a toolbar.                          | `components/button-group`    |
| `Chip`                    | Interactive pill — a filter, a tag, or a removable token.                                                   | `components/chip`            |
| `ContextMenu`             | Actions for a piece of content, opened by holding it.                                                       | `components/context-menu`    |
| `Fab`                     | The floating action button — one action pinned over the content, with an optional dial of others behind it. | `components/fab`             |
| `Menu`                    | The list of things you can do to something.                                                                 | `components/menu`            |
| `ProgressButton`          | Press and hold to confirm, with the wait drawn on the button.                                               | `components/progress-button` |
| `SelectionMode` _(alpha)_ | Pick several things at once, on a screen or in a sheet.                                                     | `components/selection-mode`  |
| `Swipe`                   | A row that slides aside to reveal the things you can do to it.                                              | `components/swipe`           |
| `ToggleButton`            | A button that stays down, on its own or in a group.                                                         | `components/toggle-button`   |

## Forms and input

| Component        | What it is                                                                              | Docs                          |
| ---------------- | --------------------------------------------------------------------------------------- | ----------------------------- |
| `Calendar`       | A month of days, for picking one, several, or a range.                                  | `components/calendar`         |
| `Checkbox`       | Animated checkbox, as a row or a selectable card.                                       | `components/checkbox`         |
| `ColorPicker`    | A colour chosen by dragging — a saturation square or a wheel, a hue scale, and opacity. | `components/color-picker`     |
| `Combobox`       | A text field that filters a list of options as you type.                                | `components/combobox`         |
| `DatePicker`     | A calendar behind a button.                                                             | `components/date-picker`      |
| `DateTimePicker` | A day and a time of day, picked in one panel.                                           | `components/date-time-picker` |
| `Field`          | Layout and validation-state kit a form control composes into.                           | `components/field`            |
| `Form`           | Form state — values, validation and submission — with no form library underneath.       | `form/form`                   |
| `Input`          | Text field with label, description and error message.                                   | `components/input`            |
| `InputGroup`     | Input with leading and trailing decorators.                                             | `components/input-group`      |
| `Label`          | Form field label with required, invalid and disabled states.                            | `components/label`            |
| `MarkdownEditor` | A field for writing markdown, with a formatting toolbar and a rendered preview.         | `components/markdown-editor`  |
| `NumberInput`    | Numeric field stepped by buttons or typed by hand.                                      | `components/number-input`     |
| `OtpInput`       | One-time-code field drawn as a row of separate cells.                                   | `components/otp-input`        |
| `Questionnaire`  | One question at a time, with progress, validation and a way back.                       | `components/questionnaire`    |
| `RadioGroup`     | Single-select list of options.                                                          | `components/radio-group`      |
| `Rating`         | A row of stars to read or set a score.                                                  | `components/rating`           |
| `SearchBar`      | Search field with a clear button, a Cancel button and a debounced query.                | `components/search-bar`       |
| `Select`         | Picker shown in a bottom sheet, expanded in place, or floating over the page.           | `components/select`           |
| `Signature`      | Sign with a finger, and get the result back out as SVG or PNG.                          | `components/signature`        |
| `Slider`         | Pick a value, or a span, by dragging a thumb along a track.                             | `components/slider`           |
| `Switch`         | Animated on/off toggle.                                                                 | `components/switch`           |
| `TagInput`       | A field whose value is a list of tokens rather than a string.                           | `components/tag-input`        |
| `Textarea`       | Text field that runs to several lines, sized in rows.                                   | `components/textarea`         |
| `ThemeSelector`  | Light, dark or the device's setting, drawn as three miniature screens.                  | `components/theme-selector`   |
| `TimePicker`     | A time of day, as a wheel, a clock or a swipeable scale.                                | `components/time-picker`      |

## Overlays

| Component     | What it is                                                                           | Docs                      |
| ------------- | ------------------------------------------------------------------------------------ | ------------------------- |
| `BottomSheet` | Draggable sheet anchored to the bottom of the screen.                                | `components/bottom-sheet` |
| `Dialog`      | Modal dialog with a backdrop and footer actions.                                     | `components/dialog`       |
| `Drawer`      | A panel that comes in from an edge of the screen and covers the app until dismissed. | `components/drawer`       |
| `Popover`     | Panel anchored to the element that opened it.                                        | `components/popover`      |
| `Toast`       | Transient notification queue with swipe to dismiss.                                  | `components/toast`        |
| `Tooltip`     | A small label that names the control under your finger.                              | `components/tooltip`      |

## Navigation

| Component     | What it is                                                    | Docs                      |
| ------------- | ------------------------------------------------------------- | ------------------------- |
| `Breadcrumb`  | The trail of links back up the hierarchy to the current page. | `components/breadcrumb`   |
| `Pagination`  | Paged navigation over a long result set.                      | `components/pagination`   |
| `SectionRail` | Floating section navigator for a long screen.                 | `components/section-rail` |
| `Sortable`    | A list whose rows can be dragged into a different order.      | `components/sortable`     |
| `Steps`       | Stepper for multi-step flows.                                 | `components/steps`        |
| `Tabs`        | Segmented navigation with an animated indicator.              | `components/tabs`         |
| `Tour`        | A walkthrough that introduces a screen one control at a time. | `components/tour`         |
| `Tree`        | A hierarchy you can open a level at a time.                   | `components/tree`         |

## Layout and structure

| Component      | What it is                                                             | Docs                       |
| -------------- | ---------------------------------------------------------------------- | -------------------------- |
| `Accordion`    | Collapsible sections with single or multiple selection.                | `components/accordion`     |
| `Card`         | Content surface with header, body and footer.                          | `components/card`          |
| `Carousel`     | A run of slides, one at a time, dragged with a finger.                 | `components/carousel`      |
| `Collapsible`  | One section of content, shown and hidden by its own header.            | `components/collapsible`   |
| `Direction`    | Reading direction for everything below it.                             | `components/direction`     |
| `Frame`        | Widget shell — a card of rows sitting in a titled tray.                | `components/frame`         |
| `GridItem`     | Bento tiles, and the grid that places them.                            | `components/grid-item`     |
| `Item`         | Row of media, text and actions for lists and settings.                 | `components/item`          |
| `ScrollCanvas` | Image frame whose contents move as you scroll.                         | `components/scroll-canvas` |
| `ScrollFade`   | Fades the edges of a scroll container.                                 | `components/scroll-fade`   |
| `Separator`    | Horizontal or vertical rule between content, optionally labelled.      | `components/separator`     |
| `Splitter`     | Panes that share a container, with a seam between them you can drag.   | `components/splitter`      |
| `SplitView`    | Two resizable stacked panes that settle on one of a few named heights. | `components/split-view`    |
| `Surface`      | Elevated container with a variant ladder.                              | `components/surface`       |
| `Typography`   | Semantic text presets.                                                 | `components/typography`    |

## Data

| Component       | What it is                                                         | Docs                  |
| --------------- | ------------------------------------------------------------------ | --------------------- |
| `Flow`          | Pan-and-zoom canvas of draggable nodes joined by animated edges.   | `components/flow`     |
| `Kpi`           | One number, what it is doing, and the shape it made getting there. | `components/kpi`      |
| `Map` _(alpha)_ | Vector map whose basemap is drawn from your theme tokens.          | `components/map`      |
| `Planner`       | A month of days, each carrying what falls on it.                   | `components/planner`  |
| `Table`         | Rows and columns that stay lined up, with sortable headers.        | `components/table`    |
| `Timeline`      | A sequence of events, vertical or swiped sideways.                 | `components/timeline` |

## Charts

| Component          | What it is                                                         | Docs                       |
| ------------------ | ------------------------------------------------------------------ | -------------------------- |
| `AreaChart`        | Filled bands over time, stacked or overlaid.                       | `charts/area-chart`        |
| `BarChart`         | Categories compared by length, grouped or stacked.                 | `charts/bar-chart`         |
| `CandlestickChart` | Open, high, low and close for a period, drawn as one mark.         | `charts/candlestick-chart` |
| `FunnelChart`      | Where a population drained away, one step at a time.               | `charts/funnel-chart`      |
| `HeatmapChart`     | Contribution grid with a themed colour ramp and a readout.         | `charts/heatmap-chart`     |
| `HexChart`         | A whole broken into parts, counted out in cells.                   | `charts/hex-chart`         |
| `LineChart`        | Animated time series, drawn on the UI thread.                      | `charts/line-chart`        |
| `LiveLineChart`    | A reading that keeps arriving, against a window that keeps moving. | `charts/live-line-chart`   |
| `PieChart`         | One whole, divided between its parts.                              | `charts/pie-chart`         |
| `Plot` _(alpha)_   | A chart you assemble out of its marks.                             | `charts/plot`              |
| `PolarAreaChart`   | Several readings on one scale, compared as wedges.                 | `charts/polar-area-chart`  |
| `RadarChart`       | Several measures of one thing, drawn as one shape.                 | `charts/radar-chart`       |
| `RingChart`        | Concentric arcs, each measured against its own target.             | `charts/ring-chart`        |
| `ScatterChart`     | Two quantities against each other, to show how they relate.        | `charts/scatter-chart`     |
| `TreemapChart`     | A total, cut into the parts it is made of, sized by area.          | `charts/treemap-chart`     |
| `WaterfallChart`   | How a run of changes carried one total to another.                 | `charts/waterfall-chart`   |

## Feedback and status

| Component    | What it is                                                  | Docs                     |
| ------------ | ----------------------------------------------------------- | ------------------------ |
| `Alert`      | Status message with a built-in icon.                        | `components/alert`       |
| `Badge`      | Compact status label, dot, or notification count.           | `components/badge`       |
| `EmptyState` | Placeholder for a list or screen with no content.           | `components/empty-state` |
| `Loader`     | Nine loading animations behind one variant prop.            | `components/loader`      |
| `Marker`     | Inline note between conversation turns.                     | `components/marker`      |
| `Meter`      | A measurement on a fixed scale, coloured by where it falls. | `components/meter`       |
| `Progress`   | Determinate and indeterminate progress bar.                 | `components/progress`    |
| `Skeleton`   | Shimmer placeholder for loading content.                    | `components/skeleton`    |
| `Spinner`    | Indeterminate loading indicator.                            | `components/spinner`     |

## Media and motion

| Component         | What it is                                                                              | Docs                          |
| ----------------- | --------------------------------------------------------------------------------------- | ----------------------------- |
| `Attachment`      | File row with upload states, built on Item.                                             | `components/attachment`       |
| `Avatar`          | User image with an initials fallback, a badge overlay, and a stack for a group of them. | `components/avatar`           |
| `Marquee`         | Content that travels across its container on a loop.                                    | `components/marquee`          |
| `Message`         | Chat turn with avatar, bubble, header and footer.                                       | `components/message`          |
| `MessageScroller` | Scroll behaviour a chat transcript needs.                                               | `components/message-scroller` |
| `Post`            | A social card — author, body, media and the counts underneath, with the votes animated. | `components/post`             |
| `QRCode`          | A string a camera can read — framed, titled, or folded away behind a button.            | `components/qr-code`          |
| `ScrollText`      | Text that resolves word by word as you scroll.                                          | `components/scroll-text`      |
| `TextAnimation`   | Five ways a piece of text or a number arrives.                                          | `components/text-animation`   |

## AI components

| Component             | What it is                                                                                       | Docs                         |
| --------------------- | ------------------------------------------------------------------------------------------------ | ---------------------------- |
| `AIInput`             | A prompt composer: a field that grows to five lines, a row of controls, and the sheet they open. | `ai-components/ai-input`     |
| `CodeBlock`           | A fenced snippet, syntax-coloured and scrolled sideways.                                         | `ai-components/code-block`   |
| `Panelside` _(alpha)_ | Navigation panel that moves the app aside instead of covering it.                                | `ai-components/panelside`    |
| `Plan`                | What an agent intends to do, before it does it.                                                  | `ai-components/plan`         |
| `Reasoning`           | The model's working, shown while it happens and folded away after.                               | `ai-components/reasoning`    |
| `Response`            | A model's answer, rendered as markdown while it is still arriving.                               | `ai-components/response`     |
| `Shimmer`             | Animated highlight sweeping across content.                                                      | `ai-components/shimmer`      |
| `Soundwave`           | What a voice looks like while an app listens.                                                    | `ai-components/soundwave`    |
| `Sources`             | Where an answer came from, folded under a count.                                                 | `ai-components/sources`      |
| `Task`                | One step an agent took, and what it did while it was there.                                      | `ai-components/task`         |
| `ThinkingOrb`         | Dotted orb saying which kind of busy an agent is.                                                | `ai-components/thinking-orb` |
